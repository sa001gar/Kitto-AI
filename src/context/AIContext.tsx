import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { ToastProvider } from '../components/ui/Toaster';

interface AIContextType {
  loading: boolean;
  analyzeText: (text: string, type: string) => Promise<any>;
  generateContent: (prompt: string, type: string) => Promise<any>;
  analyzeHandwriting: (imageData: string) => Promise<any>;
  error: string | null;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};

interface AIProviderProps {
  children: ReactNode;
}

export const AIProvider = ({ children }: AIProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get API key from environment variables
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);

  const getGeminiModel = () => {
    return genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    });
  };

  const analyzeText = async (text: string, type: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const model = getGeminiModel();
      
      let prompt = "";
      
      if (type === "essay") {
        prompt = `As an Indian education expert, analyze this essay according to CBSE/ICSE standards:
        
        "${text}"
        
        Provide a detailed analysis including:
        1. Grammar and spelling errors (list each with correction)
        2. Sentence structure issues
        3. Content organization
        4. Vocabulary suggestions
        5. Overall score out of 10
        6. Specific improvement suggestions
        
        Format your response as a JSON object with these keys: errors, structure, organization, vocabulary, score, improvements`;
      } else if (type === "letter") {
        prompt = `As an Indian education expert, analyze this letter according to Indian formal letter writing standards:
        
        "${text}"
        
        Provide a detailed analysis including:
        1. Format correctness (address, date, salutation, etc.)
        2. Grammar and spelling errors (list each with correction)
        3. Tone and formality assessment
        4. Overall score out of 10
        5. Specific improvement suggestions
        
        Format your response as a JSON object with these keys: format, errors, tone, score, improvements`;
      } else {
        prompt = `As an Indian education expert, analyze this text according to Indian academic standards:
        
        "${text}"
        
        Provide a detailed analysis including:
        1. Grammar and spelling errors (list each with correction)
        2. Sentence structure issues
        3. Content clarity
        4. Overall score out of 10
        5. Specific improvement suggestions
        
        Format your response as a JSON object with these keys: errors, structure, clarity, score, improvements`;
      }
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const textResponse = response.text();
      
      // Parse the JSON response
      try {
        return JSON.parse(textResponse);
      } catch (e) {
        // If parsing fails, return the raw text
        return { rawResponse: textResponse };
      }
    } catch (err) {
      setError("Failed to analyze text. Please try again.");
      console.error("AI analysis error:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const generateContent = async (prompt: string, type: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const model = getGeminiModel();
      
      let aiPrompt = "";
      
      if (type === "essay") {
        aiPrompt = `As an Indian education expert, generate a well-structured essay on the topic: "${prompt}".
        
        Follow CBSE/ICSE essay writing guidelines with:
        1. Clear introduction with thesis
        2. Well-developed body paragraphs with topic sentences
        3. Logical conclusion
        4. Appropriate vocabulary for Indian students
        5. Include relevant examples from Indian context where appropriate
        
        The essay should be suitable for high school students in India.`;
      } else if (type === "letter") {
        aiPrompt = `As an Indian education expert, generate a formal letter on: "${prompt}".
        
        Follow Indian formal letter writing format with:
        1. Sender's address
        2. Date
        3. Receiver's address
        4. Subject
        5. Salutation
        6. Body (introduction, main content, conclusion)
        7. Complimentary close
        8. Signature
        
        The letter should follow standard Indian formal letter writing conventions.`;
      } else if (type === "application") {
        aiPrompt = `As an Indian education expert, generate a school/college application letter for: "${prompt}".
        
        Follow Indian application letter format with:
        1. Sender's address
        2. Date
        3. Receiver's address
        4. Subject
        5. Salutation
        6. Body (introduction, qualifications, request, conclusion)
        7. Complimentary close
        8. Signature
        
        The application should be formal and follow Indian educational standards.`;
      } else if (type === "mockTest") {
        aiPrompt = `As an Indian education expert, create a mock test on the topic: "${prompt}".
        
        Include:
        1. 5 short answer questions (2 marks each)
        2. 3 long answer questions (5 marks each)
        3. 1 essay question (10 marks)
        4. Sample answers for each question
        5. Marking scheme according to CBSE/ICSE standards
        
        Format your response as a structured test paper suitable for Indian students.`;
      } else {
        aiPrompt = `As an Indian education expert, generate educational content on: "${prompt}".
        
        The content should:
        1. Be suitable for Indian students
        2. Follow Indian curriculum standards
        3. Include relevant examples from Indian context
        4. Use clear, concise language
        
        Format your response in a structured, educational manner.`;
      }
      
      const result = await model.generateContent(aiPrompt);
      const response = await result.response;
      return response.text();
    } catch (err) {
      setError("Failed to generate content. Please try again.");
      console.error("AI generation error:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const analyzeHandwriting = async (imageData: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const model = getGeminiModel();
      
      // For image analysis, we need to convert the base64 image to a format Gemini can use
      // This is a simplified version - in production, you'd need proper image handling
      const imageBlob = await fetch(imageData).then(r => r.blob());
      const imageBytes = await imageBlob.arrayBuffer();
      
      const prompt = `As an Indian education expert, analyze this handwritten text according to Indian academic standards.
      
      Provide:
      1. Transcription of the handwritten text
      2. Grammar and spelling errors (list each with correction)
      3. Sentence structure issues
      4. Content organization
      5. Handwriting legibility assessment
      6. Overall score out of 10
      7. Specific improvement suggestions
      
      Format your response as a JSON object with these keys: transcription, errors, structure, organization, legibility, score, improvements`;
      
      const result = await model.generateContent([prompt, { inlineData: { data: imageBytes, mimeType: "image/jpeg" } }]);
      const response = await result.response;
      const textResponse = response.text();
      
      // Parse the JSON response
      try {
        return JSON.parse(textResponse);
      } catch (e) {
        // If parsing fails, return the raw text
        return { rawResponse: textResponse };
      }
    } catch (err) {
      setError("Failed to analyze handwriting. Please try again.");
      console.error("AI handwriting analysis error:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToastProvider>
      <AIContext.Provider value={{ loading, analyzeText, generateContent, analyzeHandwriting, error }}>
        {children}
      </AIContext.Provider>
    </ToastProvider>
  );
};
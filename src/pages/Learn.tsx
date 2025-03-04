import React, { useState } from 'react';
import { Book, FileText, Mail, PenLine, FileCheck, School, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'essay',
      title: 'Essay Writing',
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      description: 'Learn how to write well-structured essays for Indian board exams',
      gradient: 'from-blue-50 to-indigo-100',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 'letter',
      title: 'Letter Writing',
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      description: 'Master formal and informal letter writing formats',
      gradient: 'from-purple-50 to-pink-100',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      id: 'application',
      title: 'Application Writing',
      icon: <FileCheck className="w-6 h-6 text-green-600" />,
      description: 'Learn to write effective applications for schools and colleges',
      gradient: 'from-green-50 to-emerald-100',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      id: 'paragraph',
      title: 'Paragraph Writing',
      icon: <PenLine className="w-6 h-6 text-amber-600" />,
      description: 'Develop skills to write concise and effective paragraphs',
      gradient: 'from-amber-50 to-yellow-100',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      id: 'exam',
      title: 'Exam Preparation',
      icon: <School className="w-6 h-6 text-indigo-600" />,
      description: 'Prepare for writing sections in CBSE, ICSE, and state board exams',
      gradient: 'from-indigo-50 to-blue-100',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      id: 'grammar',
      title: 'Grammar & Vocabulary',
      icon: <Book className="w-6 h-6 text-rose-600" />,
      description: 'Improve your grammar and expand your vocabulary',
      gradient: 'from-rose-50 to-pink-100',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
    },
  ];

  const contentMap: Record<string, React.ReactNode> = {
    essay: (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Essay Writing for Indian Board Exams</h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100">
          <h3 className="font-semibold text-xl mb-4 text-blue-800">Essay Structure</h3>
          <p className="text-gray-700 mb-3">A well-structured essay for Indian board exams typically follows this format:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
            <li><strong className="text-blue-700">Introduction:</strong> Begin with a hook, provide context, and state your thesis</li>
            <li><strong className="text-blue-700">Body Paragraphs:</strong> Each paragraph should focus on one main idea with supporting evidence</li>
            <li><strong className="text-blue-700">Conclusion:</strong> Summarize your main points and restate your thesis in different words</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-800">Types of Essays in Indian Curriculum</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-md card-hover-effect">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold">N</span>
                </div>
                <CardTitle className="text-lg">Narrative Essays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tell a story with characters, setting, plot, and conclusion</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-md card-hover-effect">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold">D</span>
                </div>
                <CardTitle className="text-lg">Descriptive Essays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Paint a picture with words using sensory details</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-md card-hover-effect">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold">A</span>
                </div>
                <CardTitle className="text-lg">Argumentative Essays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Present a viewpoint with logical reasoning and evidence</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-md card-hover-effect">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold">E</span>
                </div>
                <CardTitle className="text-lg">Expository Essays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Explain a topic clearly with facts and examples</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-800">CBSE/ICSE Essay Writing Tips</h3>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <ol className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">1</div>
                <span className="text-gray-700">Plan your essay before writing (use 5-10 minutes for planning)</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">2</div>
                <span className="text-gray-700">Follow the word limit (usually 400-500 words for board exams)</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">3</div>
                <span className="text-gray-700">Use paragraphs effectively (4-5 paragraphs is standard)</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">4</div>
                <span className="text-gray-700">Include relevant examples from Indian context</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">5</div>
                <span className="text-gray-700">Use appropriate transition words between paragraphs</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">6</div>
                <span className="text-gray-700">Avoid slang and colloquial expressions</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">7</div>
                <span className="text-gray-700">Proofread for spelling and grammatical errors</span>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="font-semibold text-xl mb-4 text-amber-800">Common Essay Topics in Indian Board Exams</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 text-center hover:shadow-md transition-shadow">Environmental Conservation</div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 text-center hover:shadow-md transition-shadow">Digital India</div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 text-center hover:shadow-md transition-shadow">Women Empowerment</div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 text-center hover:shadow-md transition-shadow">Importance of Education</div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 text-center hover:shadow-md transition-shadow">Unity in Diversity</div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 text-center hover:shadow-md transition-shadow">Swachh Bharat Abhiyan</div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 text-center hover:shadow-md transition-shadow">Climate Change</div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 text-center hover:shadow-md transition-shadow">Role of Youth in Nation Building</div>
          </div>
        </div>
      </div>
    ),
    
    letter: (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Letter Writing for Indian Students</h2>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm border border-purple-100">
          <h3 className="font-semibold text-xl mb-4 text-purple-800">Types of Letters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-purple-700">Formal Letters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Application to Principal/Headmaster</li>
                  <li>Letter to Editor</li>
                  <li>Official Complaints</li>
                  <li>Business Letters</li>
                  <li>Job Applications</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                  <Mail className="w-5 h-5 text-pink-600" />
                </div>
                <CardTitle className="text-lg text-pink-700">Informal Letters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Letters to Friends</li>
                  <li>Letters to Family Members</li>
                  <li>Invitation Letters</li>
                  <li>Thank You Letters</li>
                  <li>Congratulatory Letters</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-800">Formal Letter Format (Indian Style)</h3>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="border-b pb-3 mb-3">
              <p className="text-right text-gray-700">Sender's Address</p>
              <p className="text-right text-gray-700">City, Pin Code</p>
              <p className="text-right text-gray-700">Date</p>
            </div>
            <div className="border-b pb-3 mb-3">
              <p className="text-gray-700">Receiver's Designation</p>
              <p className="text-gray-700">Receiver's Address</p>
              <p className="text-gray-700">City, Pin Code</p>
            </div>
            <div className="border-b pb-3 mb-3">
              <p className="text-gray-700"><strong>Subject:</strong> Brief description of the letter's purpose</p>
            </div>
            <div className="border-b pb-3 mb-3">
              <p className="text-gray-700">Salutation (Dear Sir/Madam,)</p>
            </div>
            <div className="border-b pb-3 mb-3">
              <p className="italic text-gray-500">[Body of the letter - Introduction]</p>
              <p className="italic text-gray-500">[Body of the letter - Main Content]</p>
              <p className="italic text-gray-500">[Body of the letter - Conclusion]</p>
            </div>
            <div>
              <p className="text-gray-700">Yours faithfully/sincerely,</p>
              <p className="text-gray-700">Signature</p>
              <p className="text-gray-700">Name</p>
              <p className="text-gray-700">Designation (if applicable)</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-800">Tips for Letter Writing in Indian Board Exams</h3>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <ol className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">1</div>
                <span className="text-gray-700">Always include the correct addresses and date format</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">2</div>
                <span className="text-gray-700">Use appropriate salutation based on the recipient</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">3</div>
                <span className="text-gray-700">Include a clear subject line for formal letters</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">4</div>
                <span className="text-gray-700">Maintain formal language for official letters</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">5</div>
                <span className="text-gray-700">Keep paragraphs short and focused</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">6</div>
                <span className="text-gray-700">Use the correct complimentary close</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">7</div>
                <span className="text-gray-700">Proofread for spelling and grammatical errors</span>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm border border-purple-100">
          <h3 className="font-semibold text-xl mb-4 text-purple-800">Common Letter Topics in Indian Board Exams</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
              <h4 className="font-medium text-purple-700 mb-2">Formal Letters</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                  <span>Letter to the Editor about environmental issues</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                  <span>Application for leave to the Principal</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                  <span>Complaint about civic issues to authorities</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                  <span>Job application for a teaching position</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-100">
              <h4 className="font-medium text-pink-700 mb-2">Informal Letters</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                  <span>Letter to a friend describing a festival</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                  <span>Letter to your sibling sharing exam experience</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                  <span>Letter to cousin inviting for a family function</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                  <span>Letter to parents about school trip experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    
    application: (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Application Writing for Indian Students</h2>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-sm border border-green-100">
          <h3 className="font-semibold text-xl mb-4 text-green-800">Types of Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <School className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-lg text-green-700">School Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Leave applications</li>
                  <li>Fee concession requests</li>
                  <li>Transfer certificates</li>
                  <li>Character certificates</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <School className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-lg text-green-700">College Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Admission applications</li>
                  <li>Scholarship requests</li>
                  <li>Hostel accommodation</li>
                  <li>Internship applications</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-md">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <FileCheck className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-lg text-green-700">Official Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Job applications</li>
                  <li>Internship applications</li>
                  <li>Government service requests</li>
                  <li>Complaint applications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-800">Application Format (Indian Style)</h3>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="border-b pb-3 mb-3">
              <p className="text-right text-gray-700">Sender's Name</p>
              <p className="text-right text-gray-700">Sender's Address</p>
              <p className="text-right text-gray-700">City, Pin Code</p>
              <p className="text-right text-gray-700">Date</p>
            </div>
            <div className="border-b pb-3 mb-3">
              <p className="text-gray-700">The Recipient's Designation</p>
              <p className="text-gray-700">Institution/Organization Name</p>
              <p className="text-gray-700">Address</p>
              <p className="text-gray-700">City, Pin Code</p>
            </div>
            <div className="border-b pb-3 mb-3">
              <p className="text-gray-700"><strong>Subject:</strong> Clear and concise purpose of the application</p>
            </div>
            <div className="border-b pb-3 mb-3">
              <p className="text-gray-700">Respected Sir/Madam,</p>
            </div>
            <div className="border-b pb-3 mb-3">
              <p className="italic text-gray-500">[Introduction - Identify yourself and state the purpose]</p>
              <p className="italic text-gray-500">[Body - Provide details, reasons, and supporting information]</p>
              <p className="italic text-gray-500">[Conclusion - Request for favorable consideration]</p>
            </div>
            <div>
              <p className="text-gray-700">Thanking you,</p>
              <p className="text-gray-700">Yours faithfully/sincerely,</p>
              <p className="text-gray-700">Signature</p>
              <p className="text-gray-700">Full Name</p>
              <p className="text-gray-700">Additional details (Roll Number, Class, etc. if applicable)</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-800">Tips for Application Writing in Indian Board Exams</h3>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <ol className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">1</div>
                <span className="text-gray-700">Use formal and respectful language throughout</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">2</div>
                <span className="text-gray-700">Include all relevant personal details (name, class, roll number)</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">3</div>
                <span className="text-gray-700">Write a clear and specific subject line</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">4</div>
                <span className="text-gray-700">Provide specific dates, time periods, and details</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">5</div>
                <span className="text-gray-700">Keep the application concise and to the point</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">6</div>
                <span className="text-gray-700">End with a polite request for favorable consideration</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5 flex-shrink-0">7</div>
                <span className="text-gray-700">Use proper closing (Yours faithfully/sincerely)</span>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-sm border border-green-100">
          <h3 className="font-semibold text-xl mb-4 text-green-800">Common Application Topics in Indian Board Exams</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
              <h4 className="font-medium text-green-700 mb-2">School Applications</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Application for sick leave</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Application for fee concession</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Application for school transfer certificate</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Application for participation in competition</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
              <h4 className="font-medium text-green-700 mb-2">College/Job Applications</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Application for college admission</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Application for scholarship</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Application for internship</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <span>Application for job position</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Learn Writing Skills</h1>
        <p className="text-gray-600 mt-2">Master different writing formats following Indian academic standards</p>
      </div>
      
      {selectedCategory ? (
        <div>
          <Button 
            variant="outline" 
            className="mb-6 flex items-center gap-2"
            onClick={() => setSelectedCategory(null)}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Button>
          
          {contentMap[selectedCategory]}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`bg-gradient-to-br ${category.gradient} border-0 shadow-md card-hover-effect cursor-pointer`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-full ${category.iconBg} flex items-center justify-center mb-2`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-gray-800">{category.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className={`w-full border-${category.iconColor.split('-')[1]}-200 hover:bg-${category.iconColor.split('-')[1]}-50 ${category.iconColor}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Learn;
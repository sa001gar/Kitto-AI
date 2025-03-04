import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

export const writingTypes = [
  { value: 'essay', label: 'Essay' },
  { value: 'letter', label: 'Letter' },
  { value: 'application', label: 'Application' },
  { value: 'paragraph', label: 'Paragraph' },
  { value: 'story', label: 'Story' },
  { value: 'report', label: 'Report' },
];

export const indianBoardExamTopics = [
  // CBSE Topics
  "Environmental Conservation",
  "Digital India",
  "Women Empowerment in India",
  "Importance of Education",
  "Unity in Diversity",
  "Swachh Bharat Abhiyan",
  "Climate Change and Its Impact",
  "Role of Youth in Nation Building",
  "Importance of Sports and Fitness",
  "Indian Culture and Heritage",
  
  // ICSE Topics
  "Pollution and Its Effects",
  "Importance of Reading",
  "Science and Technology in India",
  "Value of Time",
  "Importance of Discipline",
  "My Favorite Festival",
  "Importance of Trees",
  "A Visit to a Historical Place",
  "Importance of Healthy Eating",
  "My Ambition in Life",
  
  // State Board Topics
  "Rural Development in India",
  "Importance of Agriculture",
  "Tourism in India",
  "Indian Freedom Struggle",
  "Importance of Water Conservation",
  "Social Media: Advantages and Disadvantages",
  "Importance of Vocational Education",
  "Indian Economy",
  "Importance of Road Safety",
  "Festivals of India"
];
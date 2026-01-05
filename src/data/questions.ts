export interface Question {
  id: number;
  question: string;
  category: 'relationship' | 'personal' | 'legal' | 'plans';
}

export const questions: Question[] = [
  // Relationship Questions
  { id: 1, question: "Where and when did you meet?", category: "relationship" },
  { id: 2, question: "How long have you been doing long distance?", category: "relationship" },
  { id: 3, question: "Did you see each other in person since being long distance?", category: "relationship" },
  { id: 4, question: "Since the first time, how many times have you met after that?", category: "relationship" },
  { id: 5, question: "When was the first time you met physically?", category: "relationship" },
  { id: 6, question: "Did you stay in contact since you first met?", category: "relationship" },
  { id: 7, question: "When was the proposal?", category: "relationship" },
  { id: 8, question: "Tell me everything about the relationship since you met.", category: "relationship" },
  
  // Personal Questions
  { id: 9, question: "Can you confirm your name and date of birth?", category: "personal" },
  { id: 10, question: "Were you born in the Netherlands?", category: "personal" },
  { id: 11, question: "Do you hold a different nationality?", category: "personal" },
  { id: 12, question: "What was your longest visit in a different country?", category: "personal" },
  { id: 13, question: "Have you been married before?", category: "personal" },
  { id: 14, question: "Has your fiancé been married before?", category: "personal" },
  { id: 15, question: "Do you have children?", category: "personal" },
  { id: 16, question: "Does your fiancé have children?", category: "personal" },
  
  // Fiancé & Plans
  { id: 17, question: "What does your fiancé do for work?", category: "plans" },
  { id: 18, question: "Is your fiancé active duty military?", category: "plans" },
  { id: 19, question: "Is your fiancé a U.S. citizen?", category: "plans" },
  { id: 20, question: "In which state does your fiancé live? Is it where you're going to live together?", category: "plans" },
  { id: 21, question: "What job do you want to do once you get to the US?", category: "plans" },
  { id: 22, question: "What are your plans when you move to the U.S.?", category: "plans" },
  { id: 23, question: "When do you plan on traveling to the US?", category: "plans" },
  { id: 24, question: "What are your wedding plans?", category: "plans" },
  
  // Legal Questions
  { id: 25, question: "Have you ever committed a crime or been to jail?", category: "legal" },
  { id: 26, question: "Have you been issued a US Visa before?", category: "legal" },
];

export const categoryLabels: Record<Question['category'], string> = {
  relationship: "Relationship",
  personal: "Personal",
  legal: "Legal",
  plans: "Future Plans",
};

export const categoryColors: Record<Question['category'], string> = {
  relationship: "bg-primary/10 text-primary",
  personal: "bg-accent text-accent-foreground",
  legal: "bg-destructive/10 text-destructive",
  plans: "bg-secondary text-secondary-foreground",
};

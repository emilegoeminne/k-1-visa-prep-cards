export interface Question {
  id: number;
  question: string;
  category: 'relationship' | 'personal' | 'legal' | 'plans';
  tip: string;
}

export const questions: Question[] = [
  // Relationship Questions
  { 
    id: 1, 
    question: "Where and when did you meet?", 
    category: "relationship",
    tip: "Be specific with dates, locations, and circumstances. Mention the platform if online, or the event/place if in person. Consistency with your partner's answer is crucial."
  },
  { 
    id: 2, 
    question: "How long have you been doing long distance?", 
    category: "relationship",
    tip: "State the duration clearly. Mention how you maintain the relationship (calls, messages, visits). Show commitment despite the distance."
  },
  { 
    id: 3, 
    question: "Did you see each other in person since being long distance?", 
    category: "relationship",
    tip: "List all visits with approximate dates and durations. Have photos and travel records ready as evidence. More visits strengthen your case."
  },
  { 
    id: 4, 
    question: "Since the first time, how many times have you met after that?", 
    category: "relationship",
    tip: "Give an exact count. Be prepared to describe each visit briefly—where you stayed, what you did together, who you met."
  },
  { 
    id: 5, 
    question: "When was the first time you met physically?", 
    category: "relationship",
    tip: "Provide the exact date if possible. Describe the moment—were you nervous? Excited? This personal touch shows genuine emotion."
  },
  { 
    id: 6, 
    question: "Did you stay in contact since you first met?", 
    category: "relationship",
    tip: "Explain your communication routine—daily calls, texts, video chats. Mention apps you use. Continuous contact shows a real relationship."
  },
  { 
    id: 7, 
    question: "When was the proposal?", 
    category: "relationship",
    tip: "Share the date and story. Was it planned or spontaneous? Where did it happen? These details make your relationship feel authentic."
  },
  { 
    id: 8, 
    question: "Tell me everything about the relationship since you met.", 
    category: "relationship",
    tip: "Prepare a 2-3 minute summary: how you met, how feelings developed, milestones (first 'I love you', meeting family), and decision to marry."
  },
  
  // Personal Questions
  { 
    id: 9, 
    question: "Can you confirm your name and date of birth?", 
    category: "personal",
    tip: "Simple and direct. State your full legal name as it appears on documents, and your complete date of birth."
  },
  { 
    id: 10, 
    question: "Were you born in [Your Country]?", 
    category: "personal",
    tip: "Answer yes or no, then state your birth city/region if relevant. Keep it brief unless asked for more details."
  },
  { 
    id: 11, 
    question: "Do you hold a different nationality?", 
    category: "personal",
    tip: "List any dual citizenships or previous nationalities. Be honest—this information is verifiable through your documents."
  },
  { 
    id: 12, 
    question: "What was your longest visit in a different country?", 
    category: "personal",
    tip: "Mention the country, duration, and purpose (tourism, work, study). If you've visited the US before, this is especially relevant."
  },
  { 
    id: 13, 
    question: "Have you been married before?", 
    category: "personal",
    tip: "If yes, briefly explain when, why it ended (divorce/death), and have divorce decrees ready. If no, a simple 'no' suffices."
  },
  { 
    id: 14, 
    question: "Has your fiancé been married before?", 
    category: "personal",
    tip: "Know your partner's history. If yes, know when they divorced and basic circumstances. This shows you know each other well."
  },
  { 
    id: 15, 
    question: "Do you have children?", 
    category: "personal",
    tip: "If yes, state how many, their ages, and custody arrangements. If they're coming with you, mention this."
  },
  { 
    id: 16, 
    question: "Does your fiancé have children?", 
    category: "personal",
    tip: "Know the details: ages, names, living situation. Showing you know and care about them demonstrates genuine family integration."
  },
  
  // Fiancé & Plans
  { 
    id: 17, 
    question: "What does your fiancé do for work?", 
    category: "plans",
    tip: "Know their job title, company name, and what they actually do day-to-day. This shows genuine interest in their life."
  },
  { 
    id: 18, 
    question: "Is your fiancé active duty military?", 
    category: "plans",
    tip: "Answer directly. If yes, know their branch, rank, and base location. Military status can affect processing."
  },
  { 
    id: 19, 
    question: "Is your fiancé a U.S. citizen?", 
    category: "plans",
    tip: "This should be 'yes' for K1 visa. Know if they're naturalized or born citizen, and when they became one if applicable."
  },
  { 
    id: 20, 
    question: "In which state does your fiancé live? Is it where you'll live together?", 
    category: "plans",
    tip: "State the city and state clearly. If you'll live elsewhere after marriage, explain the plan and reasoning."
  },
  { 
    id: 21, 
    question: "What job do you want to do once you get to the US?", 
    category: "plans",
    tip: "Be realistic based on your skills/education. You can work after receiving your EAD. Show you've thought about contributing."
  },
  { 
    id: 22, 
    question: "What are your plans when you move to the U.S.?", 
    category: "plans",
    tip: "Discuss wedding plans, living arrangements, work goals, and integration. Show you've planned this transition together."
  },
  { 
    id: 23, 
    question: "When do you plan on traveling to the US?", 
    category: "plans",
    tip: "Give a realistic timeframe after visa approval. Remember you have 6 months to enter and must marry within 90 days of entry."
  },
  { 
    id: 24, 
    question: "What are your wedding plans?", 
    category: "plans",
    tip: "Have specifics: venue ideas, guest count, rough date/season. Even if plans are simple, showing you've discussed it matters."
  },
  
  // Legal Questions
  { 
    id: 25, 
    question: "Have you ever committed a crime or been to jail?", 
    category: "legal",
    tip: "Be completely honest—lies here can permanently bar you from the US. Even minor offenses should be disclosed with documentation."
  },
  { 
    id: 26, 
    question: "Have you been issued a US Visa before?", 
    category: "legal",
    tip: "If yes, state the type (tourist, student, etc.) and when. If you've been denied, explain honestly—it's in their records anyway."
  },
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

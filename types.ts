
// Fix: Added React import to resolve missing namespace 'React'
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

export interface CompanyData {
  name: string;
  description: string;
  principles: string[];
  expertise: string[];
}
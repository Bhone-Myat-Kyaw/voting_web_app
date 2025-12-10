// App.tsx or your main component
import React from 'react';
import CardCarousel from './CardCarousel';
import type { Candidate } from './CardCarousel';

const App: React.FC = () => {
  // Example data - you can extend this with more candidates
  const queenCandidates: Candidate[] = [
    {
      id: '1',
      name: 'Olivia Chen',
      department: 'Engineering',
      description: 'Champion for student welfare and campus improvements.',
      role: 'Queen'
    },
    {
      id: '2',
      name: 'Sophia Rodriguez',
      department: 'Biology',
      description: 'Focus on sustainability initiatives and eco-friendly campus.',
      role: 'Queen'
    },
    {
      id: '3',
      name: 'Isabella Nguyen',
      department: 'Liberal Arts',
      description: 'Bridging academics and arts, promoting cultural events.',
      role: 'Queen'
    },
    {
      id: '4',
      name: 'Emma Wilson',
      department: 'Business',
      description: 'Advocating for entrepreneurship and career development.',
      role: 'Queen'
    },
    {
      id: '5',
      name: 'Mia Thompson',
      department: 'Computer Science',
      description: 'Enhancing tech resources and coding workshops.',
      role: 'Queen'
    },
    {
      id: '6',
      name: 'Ava Martinez',
      department: 'Psychology',
      description: 'Promoting mental health awareness and support services.',
      role: 'Queen'
    },
    {
      id: '7',
      name: 'Charlotte Brown',
      department: 'Environmental Science',
      description: 'Leading green initiatives and recycling programs.',
      role: 'Queen'
    }
  ];

  const kingCandidates: Candidate[] = [
    {
      id: '8',
      name: 'James Wilson',
      department: 'Engineering',
      description: 'Advocating for STEM education and research funding.',
      role: 'King'
    },
    {
      id: '9',
      name: 'Michael Johnson',
      department: 'Political Science',
      description: 'Focus on student governance and representation.',
      role: 'King'
    },
    {
      id: '10',
      name: 'William Davis',
      department: 'Athletics',
      description: 'Promoting sports and physical wellness programs.',
      role: 'King'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            King & Queen Election 2024
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cast your vote for the next student representatives. Each vote matters!
          </p>
        </header>

        <main className="space-y-16">
          <CardCarousel 
            candidates={queenCandidates}
            title="Vote for your Queen"
          />
          
          <CardCarousel 
            candidates={kingCandidates}
            title="Vote for your King"
          />
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Voting ends on December 15, 2024. Results will be announced on December 18.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
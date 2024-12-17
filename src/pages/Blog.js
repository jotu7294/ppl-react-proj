import React from 'react';
import '../index.css';
import Navbar from '../components/navbar';

const blogEntries = [
  { date: '2023-10-01', content: 'This is the first blog entry. ' },
  { date: '2023-10-02', content: 'This is the second blog entry.' },
  // Add more entries as needed
];

function Blog() {
  return (
    <div className="fade-in">
        <div className="bg-custom-gray min-h-screen flex flex-col items-center">
            <main className="flex-grow flex items-center justify-center text-white fade-in">
                <div className="w-full max-w-4xl">
                    <p className="text-white">Welcome to my blog!</p>
                    {blogEntries.map((entry, index) => (
                        <div key={index} className="flex justify-between border-b border-gray-700 py-4">
                            <div className="w-2/3 pr-4">
                                <p>{entry.content}</p>
                            </div>
                            <div className="w-1/3 text-right">
                                <p>{entry.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    </div>
  );
}

export default Blog;
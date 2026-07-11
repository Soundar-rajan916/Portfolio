import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center flex flex-col items-center">
      <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
      <p className="text-slate-500 text-lg mb-8">This page doesn't exist.</p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 hover:border-slate-200 text-slate-700 px-6 py-2.5 rounded-full font-medium transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}

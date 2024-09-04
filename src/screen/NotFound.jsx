// src/NotFound.js
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                <h1 className="text-8xl font-extrabold text-gray-800 mb-4">404</h1>
                <p className="text-2xl font-medium text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
                <p className="text-gray-600 mb-8">It might have been moved or deleted. Please check the URL or return to the homepage.</p>
                <a
                    href="/"
                    className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Go to Homepage
                </a>
            </div>
        </div>
    );
};

export default NotFound;

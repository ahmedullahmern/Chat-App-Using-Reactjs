import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mx-auto animate-spin"></div>
                <p className="mt-4 text-gray-700">Loading, please wait...</p>
            </div>
        </div>
    );
};

export default Loading;

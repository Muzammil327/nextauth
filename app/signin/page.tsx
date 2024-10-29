'use client'
import { signIn } from 'next-auth/react';

const SignIn = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 text-white">
            <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
            <p className="mb-6">Sign in to access exclusive features</p>
            <div className="space-y-4">
                <button
                    onClick={() => signIn('instagram')}
                    className="w-full max-w-xs px-4 py-2 font-semibold text-purple-900 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-300"
                >
                    Sign in with Instagram
                </button>
                <button
                    onClick={() => signIn('tiktok')}
                    className="w-full max-w-xs px-4 py-2 font-semibold text-white bg-black rounded-lg shadow hover:bg-gray-700 transition duration-300"
                >
                    Sign in with TikTok
                </button>
            </div>
        </div>
    );
};

export default SignIn;

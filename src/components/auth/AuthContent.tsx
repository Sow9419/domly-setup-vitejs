import React from "react";

interface AuthContentProps {
  title: string;
  subtitle: string;
  features?: {
    icon: React.ReactNode;
    text: string;
  }[];
}

export const AuthContent = ({ title, subtitle, features }: AuthContentProps) => (
  <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center text-white p-8">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-xl mb-8">{subtitle}</p>
    {features && (
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="bg-white/20 p-2 rounded-full">
              {feature.icon}
            </div>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    )}
    <div className="mt-8 flex items-center space-x-2">
      <div className="flex -space-x-2">
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="ml-1 text-white">4.9</span>
        <span className="ml-1 text-white/80 text-sm">Plus de 1000+ avis clients</span>
      </div>
    </div>
  </div>
);
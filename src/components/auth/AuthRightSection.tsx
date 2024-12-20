import React from "react";
import { Search, Users, Clock } from "lucide-react";

export const AuthRightSection = () => (
  <div className="relative h-full">
    <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">
        Trouvez votre chez-vous avec DomHyn!
      </h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Search className="w-6 h-6" />
          </div>
          <p>Plus de 50.000+ propriétés disponibles</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Users className="w-6 h-6" />
          </div>
          <p>Des agents immobiliers à votre service</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Clock className="w-6 h-6" />
          </div>
          <p>Support client 24/7</p>
        </div>
      </div>
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
    <img
      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      alt="Modern architecture house"
      className="object-cover w-full h-full"
    />
  </div>
);
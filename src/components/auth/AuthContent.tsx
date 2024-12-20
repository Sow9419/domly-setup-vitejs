import React from "react";
import { Search, Users, Clock, Star } from "lucide-react";

interface AuthContentProps {
  title: string;
  subtitle: string;
  features?: {
    icon: React.ReactNode;
    text: string;
  }[];
}

export const AuthContent = ({ title, subtitle, features }: AuthContentProps) => (
  <div className="relative h-full">
    <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-8">{subtitle}</p>
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
          <img 
            className="w-8 h-8 rounded-full border-2 border-white" 
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="" 
          />
          <img 
            className="w-8 h-8 rounded-full border-2 border-white" 
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="" 
          />
          <img 
            className="w-8 h-8 rounded-full border-2 border-white" 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" 
            alt="" 
          />
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-1 text-white">4.9</span>
          <span className="ml-1 text-white/80 text-sm">Plus de 1000+ avis clients</span>
        </div>
      </div>
    </div>
    <img
      src="/lovable-uploads/d0ce8b9f-84b0-4b09-b0e2-a4d69d145561.png"
      alt="Luxury home"
      className="object-cover w-full h-full"
    />
  </div>
);
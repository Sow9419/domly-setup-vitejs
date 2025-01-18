import { Link } from "react-router-dom";
import SearchForm from "@/components/home/SearchForm";
import TopDestinations from "@/components/home/TopDestinations";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import { Button } from "@/components/ui/button";

const Index = () => {
  console.log("Rendering Index page");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1582610116397-edb318620e96"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative container h-full flex items-center">
          <div className="w-full max-w-md">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <TopDestinations />

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Call to Action */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Your Care, Our Value</h2>
            <p className="text-lg opacity-90 mb-6">Find and book your dream boat through Search Charter. Here, we are helping users to find comfortable size.</p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              View More
            </Button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a"
            alt="Luxury boat"
            className="w-full max-w-md rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Subscribe and get exclusive deals & offer</h2>
          <p className="text-gray-600 mb-8">Find and book your dream boat. We search 20+ booking sites to help you find the lowest price.</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Sign Up</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
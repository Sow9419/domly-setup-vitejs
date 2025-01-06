import { useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PropertyGallery from '@/components/layout/property-detail/PropertyGallery';
import PropertyInfo from '@/components/layout/property-detail/PropertyInfo';
import PropertyBooking from '@/components/layout/property-detail/PropertyBooking';
import NavDesktop from '@/components/layout/property-detail/NavDesktop';
import { properties } from '@/data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="relative w-full overflow-x-hidden">
      <NavDesktop />
      <div className="min-h-screen bg-white font-roboto text-[#333333] pb-16 md:pb-0 md:pt-20">
        <div className="relative max-w-7xl mx-auto md:px-4 md:py-8">
          <PropertyGallery images={property.images} />
          <div className="flex flex-col md:flex-row gap-8 px-4 md:px-0">
            <PropertyInfo property={property} />
            <PropertyBooking property={property} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
import { useParams } from 'react-router-dom';
import PropertyGallery from '@/components/layout/property-detail/PropertyGallery';
import PropertyInfo from '@/components/layout/property-detail/PropertyInfo';
import PropertyBooking from '@/components/layout/property-detail/PropertyBooking';
import { properties } from '@/data/properties';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-white font-roboto text-[#333333] pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PropertyGallery images={property.images} />
        <div className="flex flex-col md:flex-row gap-8">
          <PropertyInfo property={property} />
          <PropertyBooking property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
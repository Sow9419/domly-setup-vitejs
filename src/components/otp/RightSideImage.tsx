export const RightSideImage = () => (
  <div className="hidden md:flex md:w-1/2 bg-gray-100 relative">
    <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">
        Sécurisez votre compte LocationMaison
      </h1>
      <p className="text-xl mb-8">
        Une étape de plus vers votre nouvelle expérience
      </p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Modern luxury villa"
      className="object-cover w-full h-full"
    />
  </div>
);
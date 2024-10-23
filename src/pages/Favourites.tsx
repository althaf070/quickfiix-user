import ProviderCard from "@/components/ProviderCard";

const Favourites = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl">My Favourites</h1>
      <div className="grid grid-cols-2 md:grid-cols-12 mt-4 ml-3 gap-4">
        <div className="col-span-3">
          <ProviderCard />
        </div>
        <div className="col-span-3">
          <ProviderCard />
        </div>
        <div className="col-span-3">
          <ProviderCard />
        </div>
        <div className="col-span-3">
          <ProviderCard />
        </div>
        <div className="col-span-3">
          <ProviderCard />
        </div>
        <div className="col-span-3">
          <ProviderCard />
        </div>
        <div className="col-span-3">
          <ProviderCard />
        </div>
        <div className="col-span-3">
          <ProviderCard />
        </div>
        <div className="col-span-3">
          <ProviderCard />
        </div>
      </div>
    </>
  );
};

export default Favourites;

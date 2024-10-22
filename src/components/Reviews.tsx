import { MdStarRate } from "react-icons/md";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "@/components/ui/separator"

const Reviews = () => {
  return (
    <div className="w-full h-full">
      <ScrollArea className="w-full h-full">
      
        {/* Review Card 3 */}
        
        <div className="bg-primarygrey h-[100px] w-[70%] mx-auto mb-4 p-2">
          <h1 className="text-xl font-semibold text-silver text-start">Commenter name</h1>
          <p className="text-[16px] font-semibold text-offwhite ml-1 mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, cumque?
          </p>
          <div className="flex gap-1">
            <MdStarRate className="text-[#F0A500]" size={18} />
            <MdStarRate className="text-[#F0A500]" size={18} />
          </div>
        </div>
        <Separator />
        <div className="bg-primarygrey h-[100px] w-[70%] mx-auto mb-4 p-2">
          <h1 className="text-xl font-semibold text-silver text-start">Commenter name</h1>
          <p className="text-[16px] font-semibold text-offwhite ml-1 mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, cumque?
          </p>
          <div className="flex gap-1">
            <MdStarRate className="text-[#F0A500]" size={18} />
            <MdStarRate className="text-[#F0A500]" size={18} />
          </div>
        </div>
        <Separator />
        <div className="bg-primarygrey h-[100px] w-[70%] mx-auto mb-4 p-2">
          <h1 className="text-xl font-semibold text-silver text-start">Commenter name</h1>
          <p className="text-[16px] font-semibold text-offwhite ml-1 mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, cumque?
          </p>
          <div className="flex gap-1">
            <MdStarRate className="text-[#F0A500]" size={18} />
            <MdStarRate className="text-[#F0A500]" size={18} />
          </div>
        </div>
        <Separator />
        <div className="bg-primarygrey h-[100px] w-[70%] mx-auto mb-4 p-2">
          <h1 className="text-xl font-semibold text-silver text-start">Commenter name</h1>
          <p className="text-[16px] font-semibold text-offwhite ml-1 mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, cumque?
          </p>
          <div className="flex gap-1">
            <MdStarRate className="text-[#F0A500]" size={18} />
            <MdStarRate className="text-[#F0A500]" size={18} />
          </div>
        </div>
        <Separator />


      </ScrollArea>
    </div>
  );
};

export default Reviews;

import { MdStarRate } from "react-icons/md";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useReviewStore } from "@/store/reviewStore";
import { useEffect } from "react";interface ReviewProps {
  providerId: string;
}

const Reviews = ({ providerId }: ReviewProps) => {
  const { reviews, getAllReviews } = useReviewStore();

  useEffect(() => {
    // Fetch all reviews for the given providerId
    if (providerId) {
      getAllReviews(providerId);
    }
  }, [providerId, getAllReviews]);

  return (
    <div className="w-full h-full">
      <ScrollArea className="w-full h-full">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="bg-primarygrey h-auto w-[70%] mx-auto mb-4 p-4 rounded-lg">
              <h1 className="text-xl font-semibold text-silver text-start">
                commented By: {review.userId?.username || "Anonymous"}
              </h1>
              <p className="text-[16px] font-semibold text-offwhite ml-1 mb-2">
                Feedback: {review.feedback || "No comment provided."}
              </p>
              <div className="flex justify-center gap-1">
                Total review:
                {Array.from({ length: review.rating }, (_, index) => (
                  <MdStarRate key={index} className="text-[#F0A500]" size={18} />
                ))}
              </div>
              <Separator />
            </div>
          ))
        ) : (
          <p className="text-center text-offwhite mt-4">No reviews available.</p>
        )}
      </ScrollArea>
    </div>
  );
};

export default Reviews;

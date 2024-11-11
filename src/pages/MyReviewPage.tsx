import { Card } from '@/components/ui/card';
import { useReviewStore } from '@/store/reviewStore';
import { formatDate } from '../lib/date';
import { useEffect } from 'react';
import { MdStarRate } from 'react-icons/md';
import { Button } from '@/components/ui/button';

const MyReviewPage = () => {
  const { reviews, getuserReviews,deleteReview } = useReviewStore();

  useEffect(() => {
    getuserReviews();
  }, [getuserReviews]);

  return (
    <div className="p-4">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-6">My Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 w-full">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <Card key={review._id} className="bg-primarygrey p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 col-span-2">
              <p className="text-lg text-offwhite mb-2">You commented on:{review.providerId.username}</p>
              <p className="text-lg text-offwhite mb-2">Feedback:{review.feedback}</p>
              <div className="flex justify-start gap-1">
                <span className="text-sm text-silver">Rating:</span>
                {Array.from({ length: review.rating }, (_, index) => (
                  <MdStarRate key={index} className="text-[#F0A500]" size={18} />
                ))}
              </div>
              <p className='text-offwhite font-semibold text-sm'>Commented At:{formatDate(review.createdAt)}</p>
              <Button variant={"destructive"} onClick={()=>deleteReview(review._id)}>Delete</Button>
            </Card>
          ))
        ) : (
          <p className="text-center text-offwhite mt-4">No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviewPage;

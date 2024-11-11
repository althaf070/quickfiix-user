import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useReviewStore } from '@/store/reviewStore'


interface RatingProps {
  maxRating?: number
  label?: string
  providerId?: string 
  serviceId?:string
  handleClose:()=>void
}

export default function ReviewForm({ maxRating = 5, label = 'Rate and Review', providerId,serviceId,handleClose }: RatingProps) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [feedback, setFeedback] = useState('')
  
  const { createReview, isLoading, error } = useReviewStore()

  const handleSubmit = async () => {
    try {
      if(providerId&&serviceId){
        await createReview(providerId,serviceId,rating, feedback) 
        setRating(0)  
        setFeedback('')
        handleClose()
      }
    } catch (error) {
      console.error("Error submitting review:", error) 
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-1">
            {[...Array(maxRating)].map((_, index) => {
              const ratingValue = index + 1
              return (
                <button
                  key={ratingValue}
                  className={`transition-colors duration-150 ${
                    ratingValue <= (hover || rating) ? 'text-[#FFDE4D]' : 'text-[#343131]'
                  }`}
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                  aria-label={`Rate ${ratingValue} out of ${maxRating} stars`}
                >
                  <Star className="w-8 h-8 fill-current" />
                </button>
              )
            })}
          </div>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {rating ? `You rated this ${rating} out of ${maxRating} stars` : 'No rating selected'}
          </p>
        </div>
        <div className="space-y-2">
          <label htmlFor="feedback" className="text-sm font-medium">
            Your Feedback
          </label>
          <Textarea
            id="feedback"
            placeholder="Tell us what you think..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
          />
        </div>
        {error && <p className="text-sm text-fieryOrange">{error}</p>} 
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubmit}
          disabled={rating === 0 || isLoading} 
          className="w-full"
        >
          {isLoading ? 'Submitting...' : 'Submit Review'}
        </Button>
      </CardFooter>
    </Card>
  )
}

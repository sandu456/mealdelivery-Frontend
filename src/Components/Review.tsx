import React, { useState, useEffect } from "react";

interface Review {
  id: string;
  customerId: string;
  mealId: string;
  comment: string;
  rating: number;
}

interface ReviewProps {
  mealId: string;
  customerId: string;
  onClose: () => void;
}

const Review: React.FC<ReviewProps> = ({ mealId, customerId, onClose }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewRating, setReviewRating] = useState<number>(5);
  const [reviewComment, setReviewComment] = useState<string>("");

  useEffect(() => {
    fetchReviews();
  }, [mealId]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:8080/reviews?mealId=${mealId}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.error("Failed to fetch reviews");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmitReview = async () => {
    if (reviewComment.trim() === "") {
      alert("Please write a review comment.");
      return;
    }

    const newReview = {
      customerId,
      mealId,
      comment: reviewComment,
      rating: reviewRating,
    };

    try {
      const response = await fetch("http://localhost:8080/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        alert("Review submitted successfully!");
        fetchReviews(); // Refresh the list of reviews
        setReviewComment(""); // Clear the textarea
        setReviewRating(5); // Reset the rating
      } else {
        alert("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="review-modal">
      <h2>Reviews for Meal: {mealId}</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <strong>Customer:</strong> {review.customerId} | <strong>Rating:</strong> {review.rating}/5
              <p>{review.comment}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </ul>

      <h3>Add Your Review</h3>
      <label>
        Rating:
        <select value={reviewRating} onChange={(e) => setReviewRating(Number(e.target.value))}>
          <option value={1}>1 - Poor</option>
          <option value={2}>2 - Fair</option>
          <option value={3}>3 - Good</option>
          <option value={4}>4 - Very Good</option>
          <option value={5}>5 - Excellent</option>
        </select>
      </label>
      <label>
        Comment:
        <textarea
          value={reviewComment}
          onChange={(e) => setReviewComment(e.target.value)}
          placeholder="Write your review here..."
        />
      </label>
      <button onClick={handleSubmitReview}>Submit Review</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Review;

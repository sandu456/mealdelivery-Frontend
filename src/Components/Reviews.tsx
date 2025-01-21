import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface Review {
  id: string;
  mealId: string;
  content: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState<Omit<Review, 'id'>>({ mealId: '', content: '', rating: 0 });
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [updateData, setUpdateData] = useState<Omit<Review, 'id' | 'mealId'>>({ content: '', rating: 0 });

  // Fetch all reviews
  useEffect(() => {
    axios.get<Review[]>('/reviews/get')
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  // Create a new review
  const handleCreateReview = (event: FormEvent) => {
    event.preventDefault();
    axios.post<Review>('/reviews/create', formData)
      .then(response => {
        setReviews([...reviews, response.data]);
        setFormData({ mealId: '', content: '', rating: 0 });
      })
      .catch(error => console.error('Error creating review:', error));
  };

  // Update a review
  const handleUpdateReview = (event: FormEvent) => {
    event.preventDefault();
    if (!selectedReview) return;
    axios.put<Review>(`/reviews/${selectedReview.id}`, updateData)
      .then(response => {
        setReviews(reviews.map(review => review.id === selectedReview.id ? response.data : review));
        setSelectedReview(null);
        setUpdateData({ content: '', rating: 0 });
      })
      .catch(error => console.error('Error updating review:', error));
  };

  // Delete a review
  const handleDeleteReview = (id: string) => {
    axios.delete(`/reviews/${id}`)
      .then(() => {
        setReviews(reviews.filter(review => review.id !== id));
      })
      .catch(error => console.error('Error deleting review:', error));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'rating') {
      setFormData({ ...formData, [name]: parseInt(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdateInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'rating') {
      setUpdateData({ ...updateData, [name]: parseInt(value) });
    } else {
      setUpdateData({ ...updateData, [name]: value });
    }
  };

  return (
    <div>
      <h1>Reviews</h1>
      <div>
        <h2>All Reviews</h2>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.content} (Rating: {review.rating})</p>
              <button onClick={() => setSelectedReview(review)}>Edit</button>
              <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Add a New Review</h2>
        <form onSubmit={handleCreateReview}>
          <input
            type="text"
            name="mealId"
            placeholder="Meal ID"
            value={formData.mealId}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Review</button>
        </form>
      </div>

      {selectedReview && (
        <div>
          <h2>Edit Review</h2>
          <form onSubmit={handleUpdateReview}>
            <textarea
              name="content"
              placeholder="Content"
              value={updateData.content}
              onChange={handleUpdateInputChange}
              required
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              value={updateData.rating}
              onChange={handleUpdateInputChange}
              required
            />
            <button type="submit">Update Review</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reviews;

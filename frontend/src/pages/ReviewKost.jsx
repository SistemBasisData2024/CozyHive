import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addReview, fetchAllReviews } from "../../actions/kostAction";
import Navbar from './Navbar';

const ReviewKost = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    rating: '',
    komentar: ''
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchReviewData = async () => {
      const apiResponse = await fetchAllReviews(id);
      if (apiResponse.success) {
        setReviews(apiResponse.data);
      } else {
        alert("Failed to fetch reviews");
      }
    };

    fetchReviewData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addReview({ ...formData, kosan_id: id });
    if (result.success) {
      setMessage("Review submitted successfully!");
      setReviews(prevReviews => [...prevReviews, result.data]);
      setFormData({ rating: '', komentar: '' });
    } else {
      setMessage("Failed to submit review. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-fuchsia-100 py-10">
        <h1 className="text-4xl text-fuchsia-900 font-bold text-center mb-8">Reviews</h1>
        
        <div className="flex flex-wrap justify-center">
          {reviews.map((review) => (
            <div key={review.review_id} className="bg-white p-4 m-4 rounded-lg shadow-md">
              <p><span className="font-bold">Rating:</span> {review.rating}</p>
              <p><span className="font-bold">Komentar:</span> {review.komentar}</p>
              <p><span className="font-bold">Tanggal:</span> {review.tanggal_review}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-md w-full bg-purple-800 p-8 rounded-lg mt-10">
          <h2 className="text-2xl text-white font-bold mb-4">Make Review</h2>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="rating" className="block text-white">Rating</label>
              <input
                type="number"
                id="rating"
                name="rating"
                className="block w-full bg-purple-300 border border-purple-600 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-purple-500"
                value={formData.rating}
                onChange={handleChange}
                min="1"
                max="5"
              />
            </div>
            <div>
              <label htmlFor="komentar" className="block text-white">Komentar</label>
              <textarea
                id="komentar"
                name="komentar"
                className="block w-full bg-purple-300 border border-purple-600 rounded-lg py-2 px-4 text-black focus:outline-none focus:border-purple-500"
                value={formData.komentar}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                Submit Review
              </button>
            </div>
          </form>
          
          {message && (
            <div className="mt-4 text-gray-300 text-center">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewKost;

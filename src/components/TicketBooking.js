import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TicketBooking.css';

const TicketBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleBooking = () => {
    // Dummy booking logic
    navigate(`/ticket/${id}`);
  };

  return (
    <div className="ticket-booking">
      <h1>Book Tickets</h1>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </label>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default TicketBooking;

import React from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './FinalTicket.css';

const FinalTicket = () => {
  const { id } = useParams();

  return (
    <div className="final-ticket">
      <h1>Your Ticket</h1>
      <p>Booking details for movie ID: {id}</p>
      <QRCode value={`Booking details for movie ID: ${id}`} />
    </div>
  );
};

export default FinalTicket;

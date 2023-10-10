// SeatSelector.js
import React from 'react';

const SeatSelector = ({ seattype, setseattype, quantity, setquantity }) => {
  const handleSeatType = (e) => {
    setseattype(e.target.value);
    console.log(e.target.value); // Log the selected seat type
  };

  const handleQuantity = (e) => {
    setquantity(e.target.value);
  };

  return (
    <div className='seattypediv'>
      <div className="type">
        <label htmlFor="seat-type">Seat type:</label>
        <select
          id='seat-type'
          value={seattype}
          onChange={handleSeatType} // Updated function name
        >
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div className="type">
        <label htmlFor="seat-quantity">Qty:</label>
        <input
          id='seat-quantity'
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={handleQuantity}
        />
      </div>
    </div>
  );
};

export default SeatSelector;

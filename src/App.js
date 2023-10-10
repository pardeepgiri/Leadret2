import React, { useState } from 'react';
import SeatSelector from './component/SeatSelector';
import SeatMap from './component/SeatMap';
import "./component/style.css";
import Seaticon from './component/Seaticon';

function App() {
  const [seattype, setseattype] = useState('standard');
  const [quantity, setquantity] = useState(1);

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Movie Booking</h1>
      <SeatSelector
        seattypee={seattype}
        setseattype={setseattype}
        quantity={quantity}
        setquantity={setquantity}
      />
      <div className='maincontent'>
        <div className='flex1'>
          <SeatMap
            seattype={seattype}
            quantity={quantity}
          />
        </div>
        <div className='flex2'>
          <Seaticon />
        </div>
      </div>
    </div>
  );
}

export default App;

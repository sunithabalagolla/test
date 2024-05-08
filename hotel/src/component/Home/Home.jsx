import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [totalGuests, setTotalGuests] = useState(1);
  const [totalRooms, setTotalRooms] = useState(1);
  const [showGuestOptions, setShowGuestOptions] = useState(false);

  const toggleGuestOptions = () => {
    setShowGuestOptions(!showGuestOptions);
  };

  const decreaseOption = (option) => {
    if (options[option] > 0) {
      setOptions((prevOptions) => ({
        ...prevOptions,
        [option]: prevOptions[option] - 1,
      }));
    }
  };

  const increaseOption = (option) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: prevOptions[option] + 1,
    }));
  };

  // Update total guests and rooms whenever options change
  useEffect(() => {
    setTotalGuests(options.adult + options.children);
    setTotalRooms(options.room);
  }, [options]);

  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <div className="input-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input placeholder="Enter Destination" type="text" />
            </div>
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            <div className="input-icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
          </div>
          <div className="lsItem guest-options">
            <label onClick={toggleGuestOptions}>Guests  <input value={`${totalGuests} Guests, ${totalRooms} Rooms`} type="text" readOnly /></label>
           
             
            
            {showGuestOptions && (
              <div className="options" >
                <div className="option">
                  <span>Adults</span>
                  <div className="control">
                    <button onClick={() => decreaseOption('adult')}>-</button>
                    <span>{options.adult}</span>
                    <button onClick={() => increaseOption('adult')}>+</button>
                  </div>
                </div>
                <div className="option">
                  <span>Children</span>
                  <div className="control">
                    <button onClick={() => decreaseOption('children')}>-</button>
                    <span>{options.children}</span>
                    <button onClick={() => increaseOption('children')}>+</button>
                  </div>
                </div>
                <div className="option">
                  <span>Rooms</span>
                  <div className="control">
                    <button onClick={() => decreaseOption('room')}>-</button>
                    <span>{options.room}</span>
                    <button onClick={() => increaseOption('room')}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <button className="search-btn">Search</button>
        </div>
        <div className="listResult">{/* Placeholder for search results */}</div>
      </div>
    </div>
  );
};

export default Home;

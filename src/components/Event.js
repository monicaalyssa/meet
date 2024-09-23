import { useState } from "react";

const Event = ({ event }) => {
const [showDetails, setShowDetails] = useState(false);

const dateFormat = (dateInput) => {
    const date = new Date(dateInput);

    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, optionsDate);
};

const timeFormat = (timeInput) => {
    const date = new Date(timeInput);
    const optionsTime = { 
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short' 
    };
    return date.toLocaleTimeString(undefined, optionsTime)
}

    return (
    <li className="event">
       <h3>{event.summary}</h3>
       <p>Location: <span>{event.location}</span></p>
       <p>Date Created:<span> {dateFormat(event.created)} {timeFormat(event.created)}</span></p>
       <button className="details-btn" onClick={() => setShowDetails(prev => !prev)}>{showDetails ? 'Hide details' : 'Show details'}</button>
      {showDetails && (
      <div className="details">
        <p>Details go here</p>
      </div>
      )}
       <br></br>
    </li>
    );
};

export default Event;
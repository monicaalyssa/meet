import { useState } from "react";

const Event = ({ event }) => {
const [showDetails, setShowDetails] = useState(false);

    return (
        <li>
       Event Location: <p>{event.location}</p>
       Event Summary: <p>{event.summary}</p>
       Date Created:<p>{event.created}</p>
       <button onClick={() => setShowDetails(prev => !prev)}>{showDetails ? 'Hide details' : 'Show details'}</button>
      {showDetails && (
      <div className="details">
      Details go here
      </div>
      )}
       <br></br>
        </li>
    );
}

export default Event;
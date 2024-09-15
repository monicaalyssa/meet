const Event = ({ event }) => {
    return (
        <li>
       Event Location: <p>{event.location}</p>
       Event Summary: <p>{event.summary}</p>
       <button>Show details</button>
       <div className="details">
       Date Created:<p>{event.created}</p>
       </div>
       <br></br>
        </li>
    );
}

export default Event;
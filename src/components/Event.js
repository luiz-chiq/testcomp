import "../style/components/Event.css";
import PopUpEvent from "./PopUpEvent";
import ClassificationLevel from "./ClassificationLevel";

function Event({event}){
    	return (
            <div className="event">
                <h2 className="eventTitle">{event.name}</h2>
                <div className="eventBanner">
                    <img className="eventImage" src={event.image} alt={event.imageDesc}/>
                    {event.classification != undefined ? <ClassificationLevel classification={event.classification}/> : <></>}
                </div>
                <h3 className="eventAuthor">{event.author}</h3>
                <p className="eventDate">{event.date}</p>
                <PopUpEvent name={event.name} author={event.author} date={event.date} description={event.description} classification={event.classification}/>
            </div>
        );
}

export default Event;

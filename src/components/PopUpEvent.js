import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Button from "./Button.js";
import Event from "./Event.js";
import events from "../JSONs/events.json";

import ClassificationBadge from "./ClassificationBadge";
import "../style/components/PopUpEvent.css";


function PopUpEvent({name, author, date, description, classification}) {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className='popUp'>
        <Button text='Descrição' action={() => setIsOpen(true)}/>
        <ReactModal className="popUpTeste" overlayClassName="popUpOverlay"
            isOpen={isOpen}
            contentLabel="Example Modal">
            <div className='popUpDescription'>
                <h2>{name}</h2>
                <h3>{author}</h3>
                  <p>{date}</p>
                <p>{description}</p>
                <div className="badge-line">
                  <p>Classificação:</p>
                  <ClassificationBadge classification={classification}/>
                </div>
                <Button text='Fechar' action={() => setIsOpen(false)}/>
            </div>
        </ReactModal>
    </div>
  );
}
 
export default PopUpEvent;
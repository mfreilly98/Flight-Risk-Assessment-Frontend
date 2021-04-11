import {React, useRef, useState} from "react";

import '../stylesheets/accordion.css';
import {Accordion, Card, Button, useAccordionToggle} from "react-bootstrap";
import {BsChevronDoubleDown, BsChevronDoubleRight} from "react-icons/all";

function AirSigmetAccordion({airSigmet, index})
{
    const [activeKey, setActiveKey] = useState(null);

    function CustomToggle({ children, eventKey, handleClick }) {
        const decoratedOnClick = useAccordionToggle(eventKey, () => {
            handleClick();
        });

        return (
            <div className="card-header px-3 mx-3" type="button" onClick={decoratedOnClick}>
                {children}
            </div>
        );
    }

    function toggle(index){
        if (activeKey === (index)) {
            setActiveKey(null);
        } else {
            setActiveKey((index));
        }
    }

   return (
       <Accordion>
           <Card key="0">
               <Accordion.Toggle as={Card.Header} eventKey="0" className="airsigmet-card-header">
                   {airSigmet.type}
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0">
                   <Card.Body className="airsigmet-card-body">
                       <div className="airsigmet-card-text"> Start Time:  {airSigmet.timeStart}</div>
                       <div className="airsigmet-card-text"> End Time: {airSigmet.timeEnd} </div>
                       <div className="airsigmet-card-text"> {airSigmet.rawText} </div>
                       {airSigmet.movementHeading > 0 || airSigmet.movementSpeed > 0 &&
                            <div className="airsigmet-card-text"> Movement Heading: {airSigmet.movementHeading} </div>&&
                            <div className="airsigmet-card-text"> Movement Speed: {airSigmet.movementSpeed} </div>
                       }
                   </Card.Body>
               </Accordion.Collapse>
           </Card>
       </Accordion>
   );
}

export default AirSigmetAccordion;

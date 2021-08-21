import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";
function Accordion(props) {

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );
  }

  return (

    <div className="accordion-section">
      <div className={`accordion ${setActive}`}>
        {
          props.children ?
          (<>
            <button className="accordion-btn" onClick={toggleAccordion}>
              <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <img src="./assets/user-icon.png" className="pr25" alt="user icon" />
        <p className={`accordion-title cursor`} onClick={props.openModal.bind(null,props.objective)}>{props.objective.title}</p>
          </>):<>
          <img src="./assets/user-icon.png" className="pr25" alt="user icon" />
        <p className={`accordion-title`} >{props.objective.title}</p>
          </>
        }
     </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content"
      >
        <div
          className="accordion-children">
          {props.children}
        </div>


      </div>
    </div>
  );
}

export default Accordion;

import React from "react";
import "./Modal.css";

function Modal(props) {
const {title,children,category,metric_name,metric_start,metric_target,closeModal} = props.data;
    return (
        <div className="modal-section">
            <div className="modal-container">
            <span className="close-modal" onClick={closeModal.bind(null,null)}>+</span>
            <h3 className="modal-title">{title}</h3>
            { category && <div className="modal-label">Category: <span className="modal-info">{category}</span> </div>}
            { metric_name &&  <div className="modal-label">Metric Name: <span className="modal-info">{metric_name}</span></div>}
           { metric_start &&  <div className="modal-label">Metric Start: <span className="modal-info">{metric_start}</span></div>}
           { metric_target &&  <div className="modal-label">Metric Target: <span className="modal-info">{metric_target}</span></div>}
           <label>Children: </label>
           {children.map(child=>{
                return <li key={child.id} className={`accordion-title lower-alpha p5`}>{child.title}</li>
            })
          }
 </div>
        </div>
    );
}

export default Modal;

import React from "react";
function Dropdown(props) {

    return (
        <div className="dropdown-section">
            <label>Categories: &nbsp; &nbsp; </label>
            <select className="dropdown-select" onChange={props.onChange}>
                <option value="">All</option>
                {props.categories.map((category, i) => {
                    return <option key={category} value={category}>{category}</option>
                })}
            </select>

        </div>
    );
}

export default Dropdown;

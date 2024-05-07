import { useState } from "react";

function SortBar({ handleSelectChange }) {
    // get value of selected item and send selected value to parent component,
    // in this case the parent is BotCollection

    return (

        <div className="sort-bar-container">
            <select className="sort-bar" onChange={e => handleSelectChange(e.target.value)}>
            <option value="">Choose sort algorithm</option>
                <option value="health">Sort by Health</option>
                <option value="damage">Sort by Damage</option>
                <option value="armor">Sort by Armor</option>
            </select>
        </div>
    );
}
export default SortBar;
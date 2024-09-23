import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, onChangeNOE }) => {
    const [number, setNumber] = useState(32);

    const handleInputChange = (e) => {
        let userInputValue = e.target.value;
        setNumber(userInputValue);
        if (onChangeNOE) {
            onChangeNOE(userInputValue)
        }
    };

    return (
    <div id="number-of-events">
        <label>Number of Events: </label>
        <input type="text" onChange={handleInputChange} value={number}></input>
    </div>
)
};

export default NumberOfEvents
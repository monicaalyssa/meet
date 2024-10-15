import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, onChangeNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(32);

    const handleInputChange = (e) => {
        let userInputValue = e.target.value;
        setNumber(userInputValue);
        if (onChangeNOE) {
            onChangeNOE(userInputValue)
        }

        let infoText;
        if (e.target.value <= 0 || isNaN(e.target.value)) {
            infoText = "Only positive numbers allowed"
        } else {
            infoText = "";
        }
        setErrorAlert(infoText);
    };

    

    return (
    <div id="number-of-events">
        <label>Number of Events: </label>
        <input type="text" onChange={handleInputChange} value={number}></input>
    </div>
)
};

export default NumberOfEvents
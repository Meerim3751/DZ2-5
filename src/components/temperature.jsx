import React, {useContext} from 'react';
import {TemperatureContext} from "../contexts/context.jsx";

function Temperature() {
    const {temperature ,updateTemp} = useContext(TemperatureContext)
    return (
        <div>
            <h2>Temperature: {temperature} *C </h2>
            <button onClick={updateTemp}>Update temperature</button>
        </div>
    );
}

export default Temperature;
import React from 'react';
import "./button.css";

function TailwindButton() {

    return (
        <div>
            {/*Before extracting a custom class*/}
            <button
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Save changes
            </button>
            <br/>
            <br/>
            {/*After extracting a custom class*/}
            <button
                className="btn-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Save changes
            </button>
        </div>
    );
}

export default TailwindButton;
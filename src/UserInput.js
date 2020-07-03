import React from 'react';

const log = (e) => {
    console.log(e);
};

const userInput = (props) => {

    return (
        <input 
        type ="text" 
        value={props.name}
        onChange={props.changed} 
        >

        </input>
    )
}

export default userInput;
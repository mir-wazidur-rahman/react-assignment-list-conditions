import React from 'react';

const char = (props) =>{

    const style = {
        display: 'inline-block',
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    };

    return(
        <div style={style} onClick={props.isClicked}>
            {props.character}
        </div>
    );
};

export default char;
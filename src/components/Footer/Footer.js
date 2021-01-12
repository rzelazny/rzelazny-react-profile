import React from "react";


function Footer(props) {
    return (
        <div className={`
            row 
            justify-content-${props.justify || 'center'}
            align-items-${props.align || 'center'}
        `}>
            <br />
            <br />
            <h6>© Ryan Zelazny 2021</h6>
        </div>
    );
}

export default Footer;

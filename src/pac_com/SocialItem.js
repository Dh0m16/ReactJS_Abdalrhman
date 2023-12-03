import React from 'react';

function SocialItem(props) {
    return (
        <li className="list-group-item">
            <img src={props.P.img} alt={props.P.media} />
            <input type="checkbox" id={props.P.id} />
            <label htmlFor={props.P.id}>{props.P.media}</label>
        </li>
    );
}

export default SocialItem;

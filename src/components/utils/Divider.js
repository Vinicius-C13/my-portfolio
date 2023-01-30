import React from "react";

export default function Divider(props) {
    return (
        <div class="section-container">
            <hr className={`section-divider ${props.class || ''}`}/>
        </div>
    )
}
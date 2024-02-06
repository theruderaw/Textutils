import React from 'react'

export default function Alert(props) {

    const up = (str) => {
        return str[0].toUpperCase() + str.substring(1);
    }

    return (props.alert && 
        <div>
            <div class={`alert alert-${props.alert.status}`} role="alert">
            {`${up(props.alert.status)}! ${props.alert.message}`}
            </div>
        </div>
    )
}

import React from "react"

function ArrItem(props: any) {
    const allStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '70%',
        paddingLeft: '10%',
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
        fontSize: '20px',

    }
    return (
        <div style={allStyle}>
            <input 
                type="checkbox" 
                checked={props.item.selected} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.cluster}</p>
        </div>
    )
}

export default ArrItem
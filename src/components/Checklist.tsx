import React from "react";
import ChecklistItem from './ArrItem'

interface Props{
    arr: Array<any>
};

interface State{};

class Checklist extends React.Component<Props,State> {
    render() {
        var thing = this.props.arr[0]
        return(
        <> 
            <ChecklistItem 
            item={thing.cluster} checked={thing.selected}/>
        </>)
    }
}

export default Checklist;
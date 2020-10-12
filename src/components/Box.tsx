import React from 'react';
import wisdom from '../assets/wisdom.mp3'

interface Props {
    arr: Array<any>,
}

interface State {
    position: number,
}

class Box extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            position: 0,
        }
    }

    poschange(this: any) {
        this.setState((prevState: any) => {
            if((prevState.position + 1) == this.props.arr.length) {

                return{position: 0}
            }
            else{
                return {position: prevState.position + 1};
            }
          })
    }

    negchange(this: any) {
        this.setState((prevState: any) => {
            if(prevState.position == 0) {

                return{position: (this.props.arr.length - 1)}
            }
            else{
                return {position: prevState.position - 1};
            }
          })
    }

    
    render() {
        var item = this.props.arr[this.state.position];

        const all = {
            backgroundColor: 'white',
            textAlign: 'center'
        } as React.CSSProperties;

        return (
            <div style={all}>
                <h1>{item.cluster}</h1>
                <audio ref='audioTag' controls>
                    <source src={item.audio} type="audio/mp3" />
                </audio>
                <button onClick={() => this.poschange()}>+</button>
                <button onClick={() => this.negchange()}>-</button>
            </div>
        );
    }
}

export default Box;
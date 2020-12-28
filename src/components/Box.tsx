import React from 'react';


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

    random(this: any) { 
        var min = Math.ceil(0)
        var max = Math.floor(this.props.arr.length + 1)
        this.setState(() => {
            return{position: Math.floor(Math.random() * (max - min) + min)}
        })
    }

    
    render() {
        var item = this.props.arr[this.state.position]

        const all = {
            backgroundColor: 'white',
            textAlign: 'center' as const,
        };

        return (
            <div style={all}>
                <h1>{item.cluster}</h1>
                <audio ref='audioTag' controls>
                    <source src={item.audio} type="audio/mp3" />
                </audio>
                <button onClick={() => this.random()}>hhhh</button>
            </div>
        );
    }
}

export default Box;
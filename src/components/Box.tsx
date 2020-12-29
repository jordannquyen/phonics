import React from 'react';
import {BiShuffle} from 'react-icons/bi'


interface Props {
    arr: Array<any>,
    backgroundColor: string,
    buttonColor: string,
    buttonHoverColor: string,
}

interface State {
    position: number,
    buttonBackground: any,
}

class Box extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            position: 0,
            buttonBackground: this.props.buttonColor,
        }
    }

    random(this: any) { 
        const min = 0
        const max = this.props.arr.length
        var random = Math.floor(Math.random() * (max - min) + min)
        console.log(random)
        this.setState({position: random})
    }

    hovering(this:any) {
        this.setState(() => {
            return{buttonBackground: this.props.buttonHoverColor}
        })
    }

    notHovering(this:any) {
        this.setState(() => {
            return{buttonBackground: this.props.buttonColor}
        })
    }
    
    render() {
        var item = this.props.arr[this.state.position]

        const all = {
            backgroundColor: this.props.backgroundColor,
            textAlign: 'center',
            margin: '5%',
        } as React.CSSProperties;

        const buttonStyle = {
            marginBottom: '40px',
            border: 0,
            width: '40%',
            height: '80px',
            backgroundColor: this.state.buttonBackground,
            fontSize: '28px',
            textAlign: 'center',
            //color: '#faf0e6',
            color: 'black'
        } as React.CSSProperties

        return (
            <div style={all}>
                <h1 style={{marginTop: '40px' as const}}>{item.cluster}</h1>
                <button style={buttonStyle} onMouseEnter={() => this.hovering()} onMouseLeave={() => this.notHovering()} onClick={() => this.random()}> <BiShuffle/> </button>
            </div>
        );
    }
}

export default Box;
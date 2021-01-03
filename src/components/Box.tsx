import React from 'react';
import ArrItem from './ArrItem';
import {BiShuffle} from 'react-icons/bi';


interface Props {
    arr: Array<any>,
    backgroundColor: string,
    buttonColor: string,
    buttonHoverColor: string,
}

interface State {
    arr: Array<any>
    position: number,
    buttonBackground: any,
}

class Box extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            arr: this.props.arr,
            position: 0,
            buttonBackground: this.props.buttonColor,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    random(this: any) { 
        const min = 0
        const max = this.props.arr.length
        var falsecount = 0
        for(var i=0; i<this.props.arr.length; i++) {
            if (!this.props.arr[i].selected) {
                falsecount ++;
            }
        }
        if (falsecount === this.props.arr.length) {
            alert("Please select at least one cluster!")
            this.props.arr[0].selected = true
        }
        while (true) {
            var random = Math.floor(Math.random() * (max - min) + min)
            if (this.state.arr[random].selected) {
                this.setState({position: random})
                break
            }
        }
    };

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

    handleChange(id: any) {
        this.setState((prevState: any) => {
            const updatedArr = prevState.arr.map((arritem: any) => {
                if (arritem.id === id) {
                    arritem.selected = !arritem.selected
                    console.log(arritem)
                }
                return arritem;
            })
            return {
                arr: updatedArr
            }
        })
    }
    
    render() {
        const arr = this.state.arr && this.state.arr.map(item => <ArrItem item={item !== undefined && item} key={item !== undefined && item.id.toString()} handleChange={this.handleChange}/>)
        var thing = this.props.arr[this.state.position]

        const all = {
            backgroundColor: '#faf0e6',
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
            color: 'black'
        } as React.CSSProperties

        return (
            <div style={all}>
                <div style={{backgroundColor: this.props.backgroundColor}}>
                    <h1 style={{marginTop: '40px' as const}}>{thing.cluster}</h1>
                    <button style={buttonStyle} onMouseEnter={() => this.hovering()} onMouseLeave={() => this.notHovering()} onClick={() => this.random()}> <BiShuffle/> </button>
                </div>
                <div style={{
                    content: "",
                    display: "table",
                    clear: "both",
                    marginBottom: '30px'
                }}/>
                <div style={{backgroundColor: this.props.backgroundColor}}>
                    {arr}
                </div>
            </div>
        );
    }
}

export default Box;
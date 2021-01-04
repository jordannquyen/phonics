import React from 'react';
import '../src/App.css';
import Box from './components/Box';
import Beginning from "./components/Beginning";
import Middle from './components/Middle';
import End from './components/End';
//https://coolors.co/2364aa-3da5d9-73bfb8-fec601-ea7317

interface Props{};
interface State{};

class App extends React.Component<Props,State> {
  render() {
    const third = {
      float: 'left',
      width: '33%',
    } as React.CSSProperties;

    var buttonBack = "#9dbdba"
    var buttonHoverBack = "#6a807d"

    return (
      <>
        <div className="App">
          <h1 style={{
            marginTop: '0',
          }}>Phonics Cards</h1>
          <p style={{fontSize: '20px'}}>science palooza project by Hannah Nguyen &amp; Jordan Nguyen || 
            click <a href="https://drive.google.com/file/d/1nElHbqSzt5YmhNklcG4PKSvQehKTxL9X/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> for instructions</p>

          <div style={{
            content: "",
            display: 'table',
            clear: 'both',
          } as React.CSSProperties}/>
          
          <div style={third}>
            <Box arr={Beginning} backgroundColor="#ea7317"
            buttonColor={buttonBack} buttonHoverColor={buttonHoverBack}/>
          </div>
          <div style={third}>
            <Box arr={Middle} backgroundColor="#fec601"
            buttonColor={buttonBack} buttonHoverColor={buttonHoverBack}/>
          </div>
          <div style={third}>
            <Box arr={End} backgroundColor="#327a74" 
            buttonColor={buttonBack} buttonHoverColor={buttonHoverBack}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;

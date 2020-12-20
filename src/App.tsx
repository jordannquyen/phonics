import React from 'react';
import '../src/App.css';
import Box from './components/Box';
import Beginning from "./components/Beginning";
import Middle from './components/Middle';
import End from './components/End';

interface Props{};
interface State{
  clusterID: number; /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

};

class App extends React.Component<Props,State> {
  constructor(props: Props){
    super(props);
    this.state = {
      clusterID: 0
    }
  };

  render() {
    const third = { /*for formatting columns, don't mess with this*/
      float: 'left' as const,
      width: '33.33%' as const,
      padding: '2%',
    };

    return (
      <>
        <div className="App">
          <div style={third}>
            <Box arr={Beginning}/>
          </div>
          <div style={third}>
            <Box arr={Middle}/>
          </div>
          <div style={third}>
            <Box arr={End}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;

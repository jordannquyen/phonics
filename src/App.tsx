import React from 'react';
import '../src/App.css';
import Box from './components/Box';
import Clusters from "./components/Clusters";

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
      float: 'left',
      width: '33.33%',
      padding: '2%',
    } as React.CSSProperties;

    return (
      <>
        <div className="App">
          <div style={third}>
            <Box arr={Clusters}/>
            
          </div>
          <div style={third}>
          </div>
          <div style={third}>
          </div>
        </div>
      </>
    );
  }
}

export default App;

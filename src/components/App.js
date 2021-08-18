import React, {Component, useState} from "react";
// import '../styles/App.css';

class App extends Component {

    render() {
      let relList=['chandan','mandam','gandam'];

        return(
            <div id="main">
               <ol key="relativeList">
                {relList.map((val,idx)=>{
                  return <li key={'relativeListItem'+(1+idx)}>{val}</li>
                })}
                </ol>
            </div>
        )
    }
}


export default App;

import React,{Component} from 'react';
import Formitems from "./Components/Formitems";
import Listitems from "./Components/Listitem";


class App extends Component{

  render() {
    return(
        <div className="app">
            <div className="container center">
                this is appliction
                <Formitems/>
            </div>
        </div>
    )
  }

}

export default App;

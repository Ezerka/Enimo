import React from "react";
import {hot} from "react-hot-loader";
import Helloworld from "../HelloPage/Helloworld"

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Helloworld/>
            </div>
        )
    }
}

export default hot(module)(App) //HMR(Module can be updated without the need for full refresh)
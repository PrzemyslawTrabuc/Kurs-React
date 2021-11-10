import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {latitude: null, errorMessage: '', isLoaded: null};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        success => this.setState({latitude: success.coords.latitude, isLoaded: true}),
        error => this.setState({errorMessage: error.message, isLoaded: false})
    );
  }

  componentDidUpdate() {
    console.log("Component Updated")
  }

  render(){
    if(this.state.errorMessage && !this.state.latitude){
      return <div>Error: {this.state.errorMessage}</div>
    }
    else if(!this.state.errorMessage && this.state.latitude){
      return <div>Latitude: {this.state.latitude}</div>
    }
      return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

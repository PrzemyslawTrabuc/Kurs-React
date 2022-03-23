import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner.js"

class App extends React.Component {

  state = {latitude: null, errorMessage: ''};

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        success => this.setState({latitude: success.coords.latitude, isLoaded: true}),
        error => this.setState({errorMessage: error.message, isLoaded: false})
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }else if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude}/>
    }else
    return <Spinner message="Please accept location request ༼  ͡° ͜ʖ ͡° ༽"/>
  }


  render() {

    return (
        <div className="border">
          {this.renderContent()}
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

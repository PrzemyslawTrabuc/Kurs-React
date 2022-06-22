import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english', color:'primary' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  onColorChange = color => {
    this.setState({ color });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange, onColorChange: this.onColorChange}}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

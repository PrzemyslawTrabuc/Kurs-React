import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={
              () => {
                  this.context.onLanguageChange('english'); this.context.onColorChange('primary')
              }
        }
        />
        <i
          className="flag nl"
          onClick={
            () => {
                this.context.onLanguageChange('dutch'); this.context.onColorChange('red')
            }
        }
        />
      </div>
    );
  }
}

export default LanguageSelector;

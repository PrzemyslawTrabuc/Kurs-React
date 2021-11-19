import React from 'react';

class SearchBar extends React.Component {

    state = {term: '', placeholder: 'Search car...'};

    onInputChange = this.onInputChange.bind(this) // bindujemy wtedy kiedy nie używamy operatora strzałki
    //onFormSubmit = this.onFormSubmit.bind(this)

    onInputChange(event){
        //console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => { // wykorzystana strzalka czyli nie trzeba bindować jak wyżej // alternatywnie nie trzeba tutaj tylko można na dole {event => this.onFormSubmit(event)}
        event.preventDefault();
        this.props.onSubmit(this.state.term);
}
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            //onInput={(event) =>{ this.setState({term: event.target.value}); console.log(event.target.value)}} //lepsza opcja (nowsza)
                            onInput={this.onInputChange}
                            placeholder={this.state.placeholder}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
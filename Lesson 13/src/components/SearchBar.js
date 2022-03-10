import React, {useState} from 'react';

const SearchBar=(props)=>{
    const [term,setTerm]=useState('')

    const onChangeInput = (event) =>{
        setTerm(event.target.value)
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        props.onFormSubmit(term);
    }

    return(
        <div className="search-bar ui segment">
                <form  onSubmit={onFormSubmit} className="ui form">
                    <div className="filed">
                        <label> Video Search</label>
                        <input type="text"
                               value={term}
                               onChange={onChangeInput}
                        />
                    </div>
                </form>
        </div>
        )

}

/*class SearchBar extends React.Component {

    state= {term: ''};

    onChangeInput = (event) =>{
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){

        return(
            <div className="search-bar ui segment">
                <form  onSubmit={this.onFormSubmit} className="ui form">
                    <div className="filed">
                        <label> Video Search</label>
                        <input type="text" value={this.state.term}
                        onChange={this.onChangeInput}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
*/
export default SearchBar;
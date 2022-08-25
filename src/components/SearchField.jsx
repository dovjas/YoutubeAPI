import React,{Component} from "react"

class SearchField extends React.Component {
  state = {term: ''};


  onInputChange = event=> {
    this.setState({term: event.target.value});
  }

  onFormSubmit = event =>{
    event.preventDefault();

  }

  render(){
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>VIDEO</label>
            <input type="text" 
            placeholder="Search video" 
            value={this.state.term}
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchField
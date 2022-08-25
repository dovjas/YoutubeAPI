import React,{Component} from "react"

class SearchField extends React.Component {
  state = {keyword: ''};


  onInputChange = event=> {
    this.setState({keyword: event.target.value});
  }

  onFormSubmit = event =>{
    event.preventDefault();

    this.props.onFormSubmit(this.state.keyword);
  }

  render(){
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>VIDEO</label>
            <input type="text" 
            placeholder="Search video" 
            value={this.state.keyword}
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchField
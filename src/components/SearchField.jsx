import React from "react"

function SearchField() {
  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>VIDEO</label>
          <input type="text" placeholder="Search video" />
        </div>
      </form>
    </div>
  )
}

export default SearchField
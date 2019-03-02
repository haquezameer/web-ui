import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SearchBar.css";

const MatchedList = ({ matches, showMatches, search, closeMatchList }) => (
  <div className={showMatches ? "matches-container" : "hidden"}>
    <ul className="matches-list">
      {matches.map(match => (
        <li onClick={closeMatchList} className="matches-list-item" key={match}>
          <Link to={match}>{search}</Link> <em>{match}</em>
        </li>
      ))}
    </ul>
  </div>
);

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      showMatches: false,
      matches: []
    };
  }
  closeMatchList = () => {
    this.setState({ showMatches: false });
  };
  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { indexes } = this.props;
    const matches = indexes[this.state.searchTerm];
    this.setState({ matches, showMatches: true });
  };
  render() {
    return (
      <div>
        <form id="searchBar" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.value}
            type="text"
          />
        </form>
        <MatchedList
          showMatches={this.state.showMatches}
          matches={this.state.matches}
          search={this.state.searchTerm}
          closeMatchList={this.closeMatchList}
        />
      </div>
    );
  }
}

export default SearchBar;

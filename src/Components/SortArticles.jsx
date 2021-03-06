import React, { Component } from "react";

class SortArticles extends Component {
  handleChange = event => {
    this.props.orderArticles(event.target.value);
  };

  render() {
    return (
      <form className="sortForm">
        <label className="sortTitle">Sort By: </label>
        <label className="sortOption" htmlFor="title">
          Title
        <input
          type="radio"
          name="sortBy"
          id="orderTitle"
          value="title"
          onChange={this.handleChange}
          />
          </label>

        <label htmlFor="author" className="sortOption">
          Author
        <input
          type="radio"
          name="sortBy"
          id="orderAuthor"
          value="author"
          onChange={this.handleChange}
          />
          </label>
        <label htmlFor="comment_count" className="sortOption">
          Comment Count
        <input
          type="radio"
          name="sortBy"
          id="orderComments"
          value="comment_count"
          onChange={this.handleChange}
          />
          </label>
        <label htmlFor="created" className="sortOption">
          Created
        <input
          type="radio"
          name="sortBy"
          id="orderNewest"
          value="created_at"
          onChange={this.handleChange}
          />
          </label>
        <label htmlFor="votes" className="sortOption">
          Vote Count
        <input
          type="radio"
          name="sortBy"
          id="orderVotes"
          value="votes"
          onChange={this.handleChange}
          />
          </label>
      </form>
    );
  }
}

export default SortArticles;

import React, { Component } from "react";

class SortArticles extends Component {
  handleChange = event => {
    this.props.OrderArticles(event.target.value);
  };

  render() {
    return (
      <form>
        <label>Sort By: </label>
        <label htmlFor="title">Title</label>
        <input
          type="radio"
          name="sortBy"
          id="orderTitle"
          value="title"
          onChange={this.handleChange}
        />
        <label htmlFor="author">Author</label>
        <input
          type="radio"
          name="sortBy"
          id="orderAuthor"
          value="author"
          onChange={this.handleChange}
        />
        <label htmlFor="comment_count">Comment Count: </label>
        <input
          type="radio"
          name="sortBy"
          id="orderComments"
          value="comment_count"
          onChange={this.handleChange}
        />
        <label htmlFor="created">Created</label>
        <input
          type="radio"
          name="sortBy"
          id="orderNewest"
          value="created_at"
          onChange={this.handleChange}
        />
        <label htmlFor="votes">Vote Count</label>
        <input
          type="radio"
          name="sortBy"
          id="orderVotes"
          value="votes"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SortArticles;

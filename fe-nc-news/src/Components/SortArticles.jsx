import React, { Component } from "react";

class SortArticles extends Component {
  handleChange = event => {
    this.props.OrderArticles(event.target.value);
  };

  render() {
    return (
      <form>
        <label>Sort By</label>
        <input
          type="radio"
          name="sortBy"
          id="orderTitle"
          value="title"
          onChange={this.handleChange}
        />
        <label htmlFor="title">Title</label>
        <input
          type="radio"
          name="sortBy"
          id="orderAuthor"
          value="author"
          onChange={this.handleChange}
        />
        <label htmlFor="author">Author</label>
        <input
          type="radio"
          name="sortBy"
          id="orderTopic"
          value="topic"
          onChange={this.handleChange}
        />
        <label htmlFor="topic">Topic</label>
        <input
          type="radio"
          name="sortBy"
          id="orderNewest"
          value="created_at"
          onChange={this.handleChange}
        />
        <label htmlFor="created">Created</label>
      </form>
    );
  }
}

export default SortArticles;

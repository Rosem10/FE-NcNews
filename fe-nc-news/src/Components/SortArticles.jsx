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
          id="orderNewest"
          value="newest"
          onChange={this.handleChange}
        />
        <label htmlFor="newest">Newest</label>
      </form>
    );
  }
}

export default SortArticles;

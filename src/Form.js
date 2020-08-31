import React from "react";

export default function Form(props) {
  return (
    <div className="form">
      <form>
        <label htmlFor="search-terms">Search Terms</label>
        <input type="text" id="search-terms" name="search-terms" />

        <label htmlFor="filter">Filter</label>
        <select id="filter" name="filter">
          <option value="all">All</option>
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="free-ebooks">Free Ebooks</option>
          <option value="paid-ebooks">Paid Ebooks</option>
          <option value="ebooks">Ebooks</option>
        </select>

        <button onClick={() => props.clickList('#filter', '#search-terms')}> Search </button>
      </form>
    </div>
  );
}

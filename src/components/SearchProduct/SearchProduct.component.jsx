import React, { Component } from "react";
import SearchSection from "../search-section/SearchSection.component";
import ChooseProductList from "../choose-product/ChooseProductList";

export default class SearchProduct extends Component {
  render() {
    const options = ["bestPrice", "lastProduct", "lastUpdated"];
    return (
      <div className="content-wrapper">
        <SearchSection />
        {options.map((item) => (
          <ChooseProductList type={item} key={item} />
        ))}
      </div>
    );
  }
}

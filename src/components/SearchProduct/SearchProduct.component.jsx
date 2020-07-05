import React, { Component } from "react";
import BestPriceProduct from "../best-price/BestPriceProduct";
import SearchSection from "../search-section/SearchSection.component";

export default class SearchProduct extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <SearchSection />
        <BestPriceProduct />
      </div>
    );
  }
}

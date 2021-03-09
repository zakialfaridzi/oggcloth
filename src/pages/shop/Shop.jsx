import React from "react";
import { Route } from "react-router";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../collection/Collection";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;

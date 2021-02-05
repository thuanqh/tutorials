import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import SubHeader from "../Header/SubHeader";
import ProductItem from "./ProductItem";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      title
      thumbnail
    }
  }
`;

const ProductItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Products = ({ match, history }) => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading || error) {
    return <Alert>{loading ? "Loading..." : error.message}</Alert>;
  }

  return (
    <>
      {history && (
        <SubHeader
          title="Available products"
          goToCart={() => history.push("/cart")}
        />
      )}
      <ProductItemsWrapper>
        {data.products.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </ProductItemsWrapper>
    </>
  );
};

export default Products;

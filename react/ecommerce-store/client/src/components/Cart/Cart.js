import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import SubHeader from "../Header/SubHeader";
import ProductItem from "../Products/ProductItem";
import Totals from "./Totals";
import { GET_CART } from "../../constants";

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const CartItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Cart = ({ match, history }) => {
  const { loading, error, data } = useQuery(GET_CART);

  if (loading || error) {
    return <Alert>{loading ? "Loading..." : error.message}</Alert>;
  }

  return (
    <>
      {history && <SubHeader title="Cart" goBack={() => history.goBack("")} />}
      <CartWrapper>
        <CartItemsWrapper>
          {data.cart.products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </CartItemsWrapper>
        <Totals count={data.cart.total} />
      </CartWrapper>
    </>
  );
};

export default Cart;

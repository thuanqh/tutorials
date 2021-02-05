import React from "react";
import { useMutation } from "@apollo/client";
import Button from "../Button/Button";
import { GET_CART, ADD_TO_CART, GET_CART_TOTAL } from "../../constants";

const AddToCartButton = ({ productId }) => {
  const [addToCart] = useMutation(ADD_TO_CART);

  return (
    <Button
      onClick={() =>
        addToCart({
          variables: { productId },
          refetchQueries: [{ query: GET_CART }, { query: GET_CART_TOTAL }],
        })
      }
    >
      {`+ Add to cart`}
    </Button>
  );
};

export default AddToCartButton;

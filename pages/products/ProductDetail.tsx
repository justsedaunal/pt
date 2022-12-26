import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductById } from "../store/actions/product.actions";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const productSelector = useSelector(
    (state: any) => state.productDetailReducer
  );
  const { query } = useRouter();
  useEffect(() => {
    if (query.id) {
      console.error(query.id);
      dispatch(GetProductById(parseInt(query.id.toString())) as any);
    }
    return () => {};
  }, [query.id]);

  return (
    <>
      {productSelector.product.id ? (
        <div>
          {productSelector.product.id} {productSelector.product.name}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductDetail;

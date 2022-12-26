import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductById } from "../store/actions/product.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";

const ProductDetail = () => {
  const imgUrl = "https://assignment-api.piton.com.tr";
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
        <>
          <div className="container mt-4">
            <div className="row gap-4 justify-content-center flex-wrap">
              <div className="card col-12 flex-row  card-height">
                <img
                  src={imgUrl + productSelector.product.image}
                  className="card-img-top rounded img-width"
                  alt="..."
                />
                 <div className="card-body d-flex align-items-center flex-column justify-content-center">
              
               
                 <FontAwesomeIcon
                 className="align-self-end"
                  fontSize={20}
                  color="red"
                  icon={productSelector.product.likes == 0 ? faHeartR : faHeart}
                />
                 <h5 className="card-title align-self-start">{productSelector.product.name}</h5>
                <p className="card-text align-self-start">{productSelector.product.description} </p>
                <a
                 
                  className="btn btn-primary align-self-end"
                >
              {productSelector.product.price } $
                </a>
            

                 </div>
             
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductDetail;

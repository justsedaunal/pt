import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";
import { ProductService } from "../api/services/product.service";

const ProductDetail = () => {
  const _productService = new ProductService();
  const imgUrl = "https://assignment-api.piton.com.tr";
  const [product, setProduct] = useState({} as any);

  const { query } = useRouter();
  useEffect(() => {
    if (query.id) {
      GetProductById(parseInt(query.id.toString()));
    }
    return () => {
      setProduct({});
    };
  }, [query.id]);

  const GetProductById = (id: number) => {
    let tokenSession = sessionStorage.getItem("token");
    let tokenLocal = localStorage.getItem("token");

    let token = "";
    if (tokenSession != null) {
      token = tokenSession;
    }
    if (tokenLocal != null) {
      token = tokenLocal;
    }
    
    return _productService
      .getById(id, token)
      .then((res) => {
        console.error(res);
        setProduct(res.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {product.id ? (
        <>
          <div className="container mt-4">
            <div className="row gap-4 justify-content-center flex-wrap">
              <div className="card col-12 flex-row  card-height">
                <img
                  src={imgUrl + product.image}
                  className="card-img-top rounded img-width"
                  alt="..."
                />
                <div className="card-body d-flex align-items-center flex-column justify-content-center">
                  <div className="d-flex align-items-center gap-2 align-self-end">
                    <h2 className="ml-auto">{product.likes.length} likes</h2>
                    <FontAwesomeIcon
                      className=""
                      fontSize={20}
                      color="red"
                      icon={product.likes == 0 ? faHeartR : faHeart}
                    />
                  </div>

                  <h5 className="card-title align-self-start">
                    {product.name}
                  </h5>
                  <p className="card-text align-self-start">
                    {product.description}{" "}
                  </p>
                  <a className="btn btn-primary align-self-end">
                    {product.price} $
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

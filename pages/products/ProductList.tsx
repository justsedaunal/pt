import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action, LikeFunc, UnLikeFunc } from "../../store/actions/product.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";
export default function ProductList() {
  const route = useRouter();
  const imgUrl = "https://assignment-api.piton.com.tr";
  const dispatch = useDispatch<any>();
  const productSelector = useSelector((state: any) => state.productReducer);

  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);


  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="row gap-4 justify-content-center flex-wrap">
          {productSelector.products.map((x: any) => (
            <div key={x.id} className="card col-md-3 col-sm-4 ">
              <Image width={200}  height={500} src={imgUrl + x.image} className="card-img-top p-4" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{x.name}</h5>
                <p className="card-text">{x.price} $</p>
                <div className="d-flex justify-content-between">
           
                <a
                  onClick={() => {
                    route.push(`/products/ProductDetail?id=${x.id}`);
                  }}
                  className="btn btn-primary"
                >
                  Go Detail {x.id}
                </a>
                <button onClick={()=> x.likes == 0 ? dispatch(LikeFunc(x.id)as any) : dispatch(UnLikeFunc(x.id)as any)} >
                  <FontAwesomeIcon
                   fontSize={20}
                    color="red"
                    icon={x.likes == 0 ? faHeartR : faHeart}
             
                  />
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

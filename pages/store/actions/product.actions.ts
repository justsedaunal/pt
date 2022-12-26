import { ProductService } from "../../api/services/product.service";
import { ProductReduxModel } from "../models/product-redux.model";

const _productService = new ProductService();

export const PRODUCTS = "PRODUCTS";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL"
const setProductDetail = (value: any) => (dispatch: any) => {
    return dispatch({
        type: PRODUCT_DETAIL,
        payload: value,
    });
};

const Action = () => {
    return function (dispatch: any) {
        let tokenSession = sessionStorage.getItem("token")
        let tokenLocal = localStorage.getItem("token")

        let token = "";
        if (tokenSession != null) {
            token = tokenSession;

        }
        if (tokenLocal != null) {
            token = tokenLocal;

        }

        return _productService.getAll(token).then((res) => {
            console.log(res.data.products)
            dispatch({
                type: PRODUCTS,
                payload: res.data.products
            })
        }).catch(err => {
            console.error(err)
        })
    }


}
const GetProductById = (id: number) => (dispatch: any) => {
    let tokenSession = sessionStorage.getItem("token")
    let tokenLocal = localStorage.getItem("token")

    let token = "";
    if (tokenSession != null) {
        token = tokenSession;

    }
    if (tokenLocal != null) {
        token = tokenLocal;

    }

    return _productService.getById(id, token).then((res) => {
        dispatch(setProductDetail(res.data.product))
    }).catch(err => {
        console.error(err)
    })
}

const LikeFunc = (id:number) => (dispatch:any) => {
    let tokenSession = sessionStorage.getItem("token")
    let tokenLocal = localStorage.getItem("token")

    let token = "";
    if (tokenSession != null) {
        token = tokenSession;

    }
    if (tokenLocal != null) {
        token = tokenLocal;

    }
    _productService.like(id,token).then((res)=>{
        if (res.data.status=="Success") {
            dispatch(Action());
        }
    })
}

const UnLikeFunc = (id:number) => (dispatch:any) => {
    let tokenSession = sessionStorage.getItem("token")
    let tokenLocal = localStorage.getItem("token")

    let token = "";
    if (tokenSession != null) {
        token = tokenSession;

    }
    if (tokenLocal != null) {
        token = tokenLocal;

    }
    _productService.unLike(id,token).then((res)=>{
        console.error(res)
        if (res.data.status=="Success") {
            
            dispatch(Action());
        }
    })
}
export { Action, GetProductById ,LikeFunc,UnLikeFunc};
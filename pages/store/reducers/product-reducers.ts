import { PRODUCT_DETAIL } from './../actions/product.actions';
import { ActionPayload } from "../action.payload";
import { PRODUCTS } from "../actions/product.actions";

const initialState = {
    products: []
}

export const ProductReducer = (
    state = initialState,
    action: ActionPayload<[]>
) => {
    switch (action.type) {
        case PRODUCTS:
            return {
                products: action.payload,
            };

        default:
            return state;
    }
}
export const ProductDetailReducer = (
    state = {
        product: {} as any
    },
    action: ActionPayload<[]>
) => {
    switch (action.type) {
        case PRODUCT_DETAIL:
            return {
                product: action.payload,
            };

        default:
            return state;
    }
}
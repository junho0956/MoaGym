export enum PRODUCT_LIST_DIRECTION{
    VERTICAL,
    HORIZONTAL
}

export interface ProductListItemComponent{
    productId: string,
    productImageUrl: string,
    productReviewCnt: number,
    productTags: string[],
    productTitle: string,
    productPrice: number,
    brandTitle: string
}

export interface ProductListComponent{
    listDirection: PRODUCT_LIST_DIRECTION,
    listItem: ProductListItemComponent[]
}


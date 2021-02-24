export enum PRODUCT_LIST_DIRECTION{
    VERTICAL,
    HORIZONTAL
}

export interface ProductListItemComponent{
    productId: string,
    productImageUrl: string[],
    brandTitle: string
    productTitle: string,
    productPrice: number,
    productReviewPoint: number,
    productReviewCnt: number,
    productTags: string[],
}

export interface ProductListComponent{
    listDirection: PRODUCT_LIST_DIRECTION,
    listItem: ProductListItemComponent[]
}


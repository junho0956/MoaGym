export enum PRODUCT_LIST_DIRECTION{
    VERTICAL,
    HORIZONTAL
}

export interface ProductListItemComponent{
    productId: number,
    productName: string,
    productPrice: number,
    brandName: string,
    category: string, // 카테고리 구분할 때 필요
    productReviewPoint: number,
    productReviewCnt: number,
    productSortByNew: number,
    productImageUrl: {
        url: string
    }[],
}

export interface ProductListComponent{
    listDirection: PRODUCT_LIST_DIRECTION,
    listItem: ProductListItemComponent[]
}


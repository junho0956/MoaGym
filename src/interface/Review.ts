export interface ReviewCardComponent {
        reviewId: number,
        reviewProductName: string,
        reviewOption: string,
        reviewDesc: string,
        authorName: string,
        createdTime: string,
        reviewPoint: number,
        brandName: string,
        reviewImageUrl:{
                url: string,
        }[]
}
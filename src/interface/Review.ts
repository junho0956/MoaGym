export interface ReviewCardComponent {
    reviewId: string,
    reviewImageUrl: string,
    reviewTitle: string,
    reviewDesc: string,
    categoryTags: string[],
    createdAt: string, // + timestamp
    autorInfo: string, // 미정
    likedCnt: number
}
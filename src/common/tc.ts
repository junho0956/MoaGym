// import {ReviewCardComponent} from '../interface/Review';
// import {BrandNewProductComponent} from '../interface/BrandNewProduct';
// import {ItemInfoComponent} from '../interface/ItemInfo';
// import {ProductListItemComponent} from '../interface/Product';

// import j from './TCimage/jaximix.svg';
// import a from './TCimage/andaree.svg';
// import m from './TCimage/matblack.svg';
// import img_jexy_1 from './TCimage/img_thumnail_jexy_1.png';
// import img_jexy_2 from './TCimage/img_thumnail_jexy_2.png';
// import img_jexy_3 from './TCimage/img_thumnail_jexy_3.png';
// // import img_jexy_4 from './TCimage/img_thumnail_jexy_4.png';
// // import img_jexy_5 from './TCimage/img_thumnail_jexy_5.png';
// // import img_jexy_6 from './TCimage/img_thumnail_jexy_6.png';
// import img_jexy_7 from './TCimage/img_thumnail_jexy_7.png';
// // import img_jexy_8 from './TCimage/img_thumnail_jexy_8.png';
// // import img_jexy_9 from './TCimage/img_thumnail_jexy_9.png';
// import img_jexy_10 from './TCimage/img_thumnail_jexy_10.png';
// // import img_jexy_11 from './TCimage/img_thumnail_jexy_11.png';
// import img_jexy_12 from './TCimage/img_thumnail_jexy_12.png';
// import img_metblack_1 from './TCimage/img_thumnail_metblack_1.png';
// import img_metblack_2 from './TCimage/img_thumnail_metblack_2.png';
// import img_metblack_3 from './TCimage/img_thumnail_metblack_3.png';
// import img_metblack_4 from './TCimage/img_thumnail_metblack_4.png';
// import img_metblack_5 from './TCimage/img_thumnail_metblack_5.png';
// import img_metblack_6 from './TCimage/img_thumnail_metblack_6.png';
// import img_metblack_7 from './TCimage/img_thumnail_metblack_7.png';
// import img_metblack_8 from './TCimage/img_thumnail_metblack_8.png';
// import img_metblack_9 from './TCimage/img_thumnail_metblack_9.png';
// import img_metblack_10 from './TCimage/img_thumnail_metblack_10.png';
// import img_metblack_11 from './TCimage/img_thumnail_metblack_11.png';
// import img_metblack_12 from './TCimage/img_thumnail_metblack_12.png';
// import img_review_1 from './TCimage/img_review1.png';
// import img_review_2 from './TCimage/img_review2.png';

// export interface brandtype {
//     brandid: string,
//     brandName: string,
//     brandProfileImage: string,
// }

// export const productItem_TC:ProductListItemComponent[] = [
//     {
//         productId:"p1",
//         productImageUrl:[img_metblack_1, img_metblack_2, img_metblack_3],
//         productReviewCnt:10277,
//         productTags:['짐웨어','성별공용','상의'],
//         productTitle:"기모 트레이닝 후드티 멜란지 화이트",
//         productPrice:27500,
//         brandTitle:"멧블랙",
//         productReviewPoint:4,
//     },
//     {
//         productId:"p2",
//         productImageUrl:[img_metblack_2,img_metblack_3, img_metblack_4],
//         productReviewCnt:58587,
//         productTags:['짐웨어','성별공용'],
//         productTitle:"기모 트레이닝 셋업 멜란지 화이트",
//         productPrice:25000,
//         brandTitle:"멧블랙",
//         productReviewPoint:5,
//     },
//     {
//         productId:"p3",
//         productImageUrl:[img_metblack_3,img_metblack_4, img_metblack_5],
//         productReviewCnt:752,
//         productTags:['짐웨어','남성','상의'],
//         productTitle:"베이직 나시",
//         productPrice:25000,
//         brandTitle:"멧블랙",
//         productReviewPoint:5,
//     },
//     {
//         productId:"p4",
//         productImageUrl:[img_metblack_4, img_metblack_5, img_metblack_6],
//         productReviewCnt:10280,
//         productTags:['짐웨어','남성','상의'],
//         productTitle:"니들포인트 머슬핏",
//         productPrice:24000,
//         brandTitle:"멧블랙",
//         productReviewPoint:5,
//     },
//     {
//         productId:"p5",
//         productImageUrl:[img_metblack_5, img_metblack_6, img_metblack_7],
//         productReviewCnt:314,
//         productTags:['짐웨어','남성','상의'],
//         productTitle:"데일리 쇼츠",
//         productPrice:29000,
//         brandTitle:"멧블랙",
//         productReviewPoint:4.5,
//     },
//     {
//         productId:"p6",
//         productImageUrl:[img_metblack_6,img_metblack_7, img_metblack_8],
//         productReviewCnt:10282,
//         productTags:['짐웨어','남성','상의'],
//         productTitle:"레터링 롱슬리브",
//         productPrice:31500,
//         brandTitle:"멧블랙",
//         productReviewPoint:4.5,
//     },
//     {
//         productId:"p7",
//         productImageUrl:[img_metblack_7, img_metblack_8, img_metblack_9],
//         productReviewCnt:10283,
//         productTags:['짐웨어','성별공용','상의'],
//         productTitle:"에어쿠션 맨투맨",
//         productPrice:26000,
//         brandTitle:"멧블랙",
//         productReviewPoint:3,
//     },
//     {
//         productId:"p8",
//         productImageUrl:[img_metblack_8, img_metblack_9, img_metblack_10],
//         productReviewCnt:10284,
//         productTags:['짐웨어','성별공용','하의'],
//         productTitle:"클럽 기모스웻후드",
//         productPrice:26000,
//         brandTitle:"멧블랙",
//         productReviewPoint:3.5,
//     },
//     {
//         productId:"p9",
//         productImageUrl:[img_metblack_9, img_metblack_10, img_metblack_11],
//         productReviewCnt:10285,
//         productTags:['짐웨어','남성','상의'],
//         productTitle:"데일리쇼츠 V2",
//         productPrice:29000,
//         brandTitle:"멧블랙",
//         productReviewPoint:5,
//     },
//     {
//         productId:"p10",
//         productImageUrl:[img_metblack_10, img_metblack_11, img_metblack_12],
//         productReviewCnt:10286,
//         productTags:['짐웨어','남성','하의'],
//         productTitle:"기모 스웻 조거 팬츠",
//         productPrice:26000,
//         brandTitle:"멧블랙",
//         productReviewPoint:4.5,
//     },
//     {
//         productId:"p11",
//         productImageUrl:[img_metblack_11, img_metblack_12, img_metblack_1],
//         productReviewCnt:10289,
//         productTags:['짐웨어','남성','하의'],
//         productTitle:"컴포트 조거 팬츠(2color)",
//         productPrice:2600,
//         brandTitle:"멧블랙",
//         productReviewPoint:4,
//     },
//     {
//         productId:"p12",
//         productImageUrl:[img_metblack_12,img_metblack_1,img_metblack_2],
//         productReviewCnt:10288,
//         productTags:['짐웨어','성별공용','상의'],
//         productTitle:"나일론자켓 올리브",
//         productPrice:26000,
//         brandTitle:"멧블랙",
//         productReviewPoint:5,
//     },
// ]

// export const productReview_TC:ReviewCardComponent[] = [
//     {
//         reviewId: "r1",
//         reviewImageUrl: [img_review_1],
//         reviewTitle: "",
//         reviewDesc: "마음에 듭니다",
//         createdAt: "2020-11-12", 
//         autorInfo: "user1", 
//         likedCnt: 334,
//         reviewPoint: 4.3,
//         reviewProductSize: 66,
//         reviewProductColor: '그린',
//     },
//     {
//         reviewId: "r2",
//         reviewImageUrl: [img_review_2],
//         reviewTitle: "",
//         reviewDesc: "재질 괜찮고 입어보니 편하네요",
//         createdAt: "2020-12-11", 
//         autorInfo: "user2", 
//         likedCnt: 121,
//         reviewPoint: 4.7,
//         reviewProductSize: 55,
//         reviewProductColor: '그린',
//     },
//     {
//         reviewId: "awdawd123",
//         reviewImageUrl: [],
//         reviewTitle: "",
//         reviewDesc: "옷이 편하고 좋아요!",
//         createdAt: "2020-12-12", 
//         autorInfo: "Naver", 
//         likedCnt: 333,
//         reviewPoint: 4.3,
//         reviewProductSize: 55,
//         reviewProductColor: '그린',
//     },
//     {
//         reviewId: "awdawd32",
//         reviewImageUrl: [img_jexy_10],
//         reviewTitle: "",
//         reviewDesc: "마음에 듭니다!",
//         createdAt: "2020-12-12", 
//         autorInfo: "Naver", 
//         likedCnt: 333,
//         reviewPoint: 4.3,
//         reviewProductSize: 55,
//         reviewProductColor: '그린',
//     },
//     {
//         reviewId: "awdawd55",
//         reviewImageUrl: [img_jexy_7],
//         reviewTitle: "",
//         reviewDesc: "괜찮네요",
//         createdAt: "2020-12-12", 
//         autorInfo: "Naver", 
//         likedCnt: 333,
//         reviewPoint: 4.3,
//         reviewProductSize: 55,
//         reviewProductColor: '그린',
//     },
// ]

// export const ItemInfo_TC:ItemInfoComponent[] = [
//     {
//         productItem: productItem_TC[0],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[1],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[2],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[3],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[4],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[5],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[6],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[7],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[8],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[9],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[10],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[11],
//         productReview: productReview_TC,
//     },
// ]

// export const brandNewProduct_TC: BrandNewProductComponent[] = [
//     {
//       dataId:"BN1",
//       brandName:"맷블랙",
//       brandProduct:"컴포트 조거팬츠(2color)",
//       brandProductDesc:"새롭게 제작된 조거팬츠! 2color",
//       brandProductImg:img_metblack_11,
//     },
//     {
//       dataId:"BN2",
//       brandName:"맷블랙",
//       brandProduct:"나일론자켓 올리브",
//       brandProductDesc:"넥라인 숄더라인 암홀부분을 갈라삼봉 봉제방식으로 제작하였습니다.",
//       brandProductImg:img_metblack_12,
//     },
//     {
//       dataId:"BN3",
//       brandName:"젝시믹스",
//       brandProduct:"필리퍼",
//       brandProductDesc:"젝시믹스 신상품 필리퍼",
//       brandProductImg:img_jexy_1,
//     },
//     {
//       dataId:"BN4",
//       brandName:"젝시믹스",
//       brandProduct:"네오플렉시 레깅스",
//       brandProductDesc:"젝시믹스 신상품 네오플렉시",
//       brandProductImg:img_jexy_2,
//     },
//     {
//         dataId:"BN5",
//         brandName:"젝시믹스",
//         brandProduct:"데일리 서포트 레깅스 블랙",
//         brandProductDesc:"젝시믹스 레깅스 신상품",
//         brandProductImg:img_jexy_3,
//       },
//   ]

//   export const brand_TC: brandtype[] = [
//     {
//         brandid: 'metblack',
//         brandName: '멕블랙',
//         brandProfileImage: m,
//     },
//     {
//         brandid: 'jaxymix',
//         brandName: '젝시믹스',
//         brandProfileImage: j,
//     },
//     {
//         brandid: 'andaree',
//         brandName: '안다르',
//         brandProfileImage: a,
//     }
// ]

// export const gymData: ItemInfoComponent[] = [
//     {
//         productItem: productItem_TC[0],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[1],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[2],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[3],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[4],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[5],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[6],
//         productReview: productReview_TC,
//     },
// ]

// export const yogaData:ItemInfoComponent[] = [
//     {
//         productItem: productItem_TC[2],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[3],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[4],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[5],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[6],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[7],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[8],
//         productReview: productReview_TC,
//     },   
// ]

// export const topData:ItemInfoComponent[] = [
//     {
//         productItem: productItem_TC[6],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[7],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[8],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[9],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[10],
//         productReview: productReview_TC,
//     },
//     {
//         productItem: productItem_TC[11],
//         productReview: productReview_TC,
//     },
// ]

export const test = 'test';
import React, {useState, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {
    Container,
    NewImg,
    Title,
    MainContainer,
    SlideWrap,
    SlideContainer,
    SlideUl,
    SlideLi,
    ProductDesc,
    ProductDescTitle,
} from './style';
import newImg from './image/New.svg';
import { slider } from '../../common/slider';
import leftBtn from './image/leftBtn.svg';
import rightBtn from './image/rightBtn.svg';
import { ItemInfoComponent } from '../../interface/ItemInfo';
import store from '../../common/store';
import { setProduct } from '../../page/ItemInfo/state';

interface descType{
    brandName:string,
    brandProduct:string,
}

const BrandNewProduct = ({products}:{products:ItemInfoComponent[]}) => {

    const history = useHistory();
    const [desc, setDesc] = useState<descType|undefined>();
    const leftBtnRef = useRef<HTMLImageElement>(null);
    const rightBtnRef = useRef<HTMLImageElement>(null);
    const slideWrap = useRef<HTMLDivElement>(null);
    const pos = useRef<number>(0);

    function ChangeDesc(dr:number){
        const prePos = pos.current;
        pos.current += dr;
        if(pos.current < 0) pos.current++;
        else if(pos.current === products.length) pos.current--;
        
        if(prePos !== pos.current){
            setDesc({
                brandName:products[pos.current].brandName,
                brandProduct:products[pos.current].productName,
            });
        }
    }

    useEffect(() => {
        if(products.length){
            slider(slideWrap, 312, null);
            leftBtnRef.current?.addEventListener("click", () => ChangeDesc(-1));
            rightBtnRef.current?.addEventListener("click", () => ChangeDesc(1));
            setDesc({
                brandName:products[0].brandName,
                brandProduct:products[0].productName,
            })
        }
    }, [products]);

    const moveItemInfo = (product:ItemInfoComponent) => {
        history.push(`/MoaGym/product/${product.productId}`);
        store.dispatch(setProduct(product))
    }

    return(
        <Container>
            <NewImg><img src={newImg} /></NewImg>
            <Title>최근 국내 브랜드 신상</Title>
            <MainContainer>
                <SlideWrap ref={slideWrap}>
                    <img src = {leftBtn} ref={leftBtnRef} className="BNPleftBtn" alt="newProduct-img"/>
                    <img src = {rightBtn} ref={rightBtnRef} className="BNPrightBtn" alt="newProduct-img"/>
                    <SlideContainer>
                        <SlideUl>
                            {products.map((product:ItemInfoComponent) => {
                                return(
                                    <SlideLi key={product.productId} onClick={() => moveItemInfo(product)}>
                                        <img src={product.productImageUrl[0].url} alt="BNP_img"/>
                                    </SlideLi>
                                )
                            })}
                        </SlideUl>
                    </SlideContainer>
                </SlideWrap>
                <ProductDesc>
                    <ProductDescTitle>[{desc?.brandName}]{desc?.brandProduct}</ProductDescTitle>
                    {/* <ProductDescInfo>{desc.brandProductDesc}</ProductDescInfo> */}
                </ProductDesc>
            </MainContainer>
        </Container>
    )

}

export default React.memo(BrandNewProduct);
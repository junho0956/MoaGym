import {useState, useEffect, useRef} from 'react';
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
    ProductDescInfo,
} from './style';
import newImg from './image/New.svg';
import { slider } from '../../common/slider';
import leftBtn from './image/leftBtn.svg';
import rightBtn from './image/rightBtn.svg';
import {BrandNewProductComponent} from '../../interface/BrandNewProduct';

interface descType{
    brandName:string,
    brandProduct:string,
    brandProductDesc:string,
}

export const BrandNewProduct = ({products}:{products:BrandNewProductComponent[]}) => {

    const [desc, setDesc] = useState<descType>({
        brandName:products[0].brandName,
        brandProduct:products[0].brandProduct,
        brandProductDesc:products[0].brandProductDesc,
    });
    const leftBtnRef = useRef<HTMLImageElement>(null);
    const rightBtnRef = useRef<HTMLImageElement>(null);
    const slideWrap = useRef<HTMLDivElement>(null);
    const pos = useRef<number>(0);

    function ChangeDesc(dr:number){
        const prePos = pos.current;
        pos.current += dr;
        if(pos.current < 0) pos.current++;
        else if(pos.current === products.length) pos.current--;
        console.log(pos.current);
        if(prePos !== pos.current){
            setDesc({
                brandName:products[pos.current].brandName,
                brandProduct:products[pos.current].brandProduct,
                brandProductDesc:products[pos.current].brandProductDesc
            });
        }
    }

    useEffect(() => {
        slider(slideWrap, 312, null);
        leftBtnRef.current?.addEventListener("click", () => ChangeDesc(-1));
        rightBtnRef.current?.addEventListener("click", () => ChangeDesc(1));
    }, []);

    return(
        <Container>
            <NewImg><img src={newImg} /></NewImg>
            <Title>최근 국내 브랜드 신상</Title>
            <MainContainer>
                <SlideWrap ref={slideWrap}>
                    <img src = {leftBtn} ref={leftBtnRef}className="BNPleftBtn"/>
                    <img src = {rightBtn} ref={rightBtnRef} className="BNPrightBtn"/>
                    <SlideContainer>
                        <SlideUl>
                            {products.map((product:BrandNewProductComponent) => {
                                return(
                                    <SlideLi key={product.dataId}>
                                        <img src={product.brandProductImg} alt="BNP_img"/>
                                    </SlideLi>
                                )
                            })}
                        </SlideUl>
                    </SlideContainer>
                </SlideWrap>
                <ProductDesc>
                    <ProductDescTitle>[{desc.brandName}]{desc.brandProduct}</ProductDescTitle>
                    <ProductDescInfo>{desc.brandProductDesc}</ProductDescInfo>
                </ProductDesc>
            </MainContainer>
        </Container>
    )

}
// import {useHistory, useLocation} from 'react-router-dom';
import {useRef, useEffect, useState, useCallback} from 'react';
import ProductListItem from './ListItem';
import {PRODUCT_LIST_DIRECTION} from '../../interface/Product';
import {
    ProductListHorizontal, 
    ProductListVertical,
    ProductListHorizontalUl,
    ProductListHorizontalLi,
    ProductListVerticalItem,
} from './style';
import {applyOnMouse} from '../../common/applyOnMouse';
import { ItemInfoComponent } from '../../interface/ItemInfo';
import { nodragImage } from '../../common/nodragImage';

export const ProductList = ({product, direction}:{product:ItemInfoComponent[] ,direction:PRODUCT_LIST_DIRECTION}) => {

    const ul = useRef<HTMLUListElement>(null);
    
    const [verticalProduct, setVerticalProduct] = useState<ItemInfoComponent[]>([]);
    const startIdx = useRef(0);
    const endIdx = useRef(0);
    const midIdx = useRef(0);
    const elements = useRef<HTMLDivElement>(null);

    // const checkScroll = useCallback(() => {
    //     const AppContainer = document.getElementById('AppContainer');
    //     const TotalHeight = AppContainer?.scrollHeight as number;
    //     const viewHeight = AppContainer?.clientHeight as number;
    //     const notViewHeight = AppContainer?.scrollTop as number;
    //     if(viewHeight+notViewHeight >= TotalHeight){
    //         const getProduct = product.slice(startIdx.current, endIdx.current);
    //         startIdx.current += 15;
    //         endIdx.current += 15;
    //         setVerticalProduct(verticalProduct.concat(getProduct));
    //     }
    // }, [verticalProduct]);

    const checkScroll = useCallback(() => {
        if(elements.current){
            const clientHeight = document.documentElement.clientHeight as number;
            let MidElement;
            if(midIdx.current>6) MidElement = ((elements.current as HTMLDivElement).childNodes[6] as HTMLDivElement).getBoundingClientRect();
            else MidElement = ((elements.current as HTMLDivElement).childNodes[midIdx.current] as HTMLDivElement).getBoundingClientRect();
            const preStart = startIdx.current;

            if(MidElement.y < 0){
                midIdx.current += 2;
                
                // 중간값이 start ~ end 중간값보다 크다면 갱신해줄 필요가 있다
                if((startIdx.current+endIdx.current)/2 <= midIdx.current){
                    startIdx.current += 2;
                    endIdx.current += 2;
                }

                if(endIdx.current >= product.length){
                    endIdx.current -= 2;
                    startIdx.current -= 2;
                }
            }
            else if(MidElement.y > clientHeight){
                midIdx.current -= 2;
                
                // 중간값이 start ~ end 중간값보다 작다면 갱신해줄필요가 있다
                if((startIdx.current+endIdx.current)/2 >= midIdx.current){
                    startIdx.current -= 2;
                    endIdx.current -= 2;
                }

                if(startIdx.current < 0){
                    startIdx.current += 2;
                    endIdx.current += 2;
                }
            }
            console.log(startIdx.current, "부터" ,endIdx.current, "까지 가져옵니다");
            if(preStart !== startIdx.current){
                const getProduct = product.slice(startIdx.current, endIdx.current);
                setVerticalProduct(getProduct);
            }
        }
    }, [verticalProduct]);

    useEffect(() => {
        nodragImage();
        ul && applyOnMouse(ul);
    }, [product, verticalProduct]);
    
    useEffect(() => {
        const AppContainer = document.getElementById('AppContainer');
        (AppContainer as HTMLDivElement).addEventListener('scroll', checkScroll);        
        return () => {
            (AppContainer as HTMLDivElement).removeEventListener('scroll', checkScroll);
        }
    }, [verticalProduct]);

    // useEffect(() => {
    //     setVerticalProduct(product.slice(0, 15));
    //     startIdx.current = 15;
    //     endIdx.current = 30;
    // }, [product]);

    useEffect(() => {
        setVerticalProduct(product.slice(0, 14));
        startIdx.current = 0;
        endIdx.current = 14;
        midIdx.current = 2;
    }, [product]);

    return(
        direction === PRODUCT_LIST_DIRECTION.VERTICAL ? 
        (<ProductListVertical ref={elements}>
                {verticalProduct.map((product:ItemInfoComponent) => {
                    return(<ProductListVerticalItem key={product.productId}>
                        <ProductListItem product={product} />
                    </ProductListVerticalItem>)
                })}
        </ProductListVertical>):
        (<ProductListHorizontal>
            <ProductListHorizontalUl ref={ul}>
                {product.map((product:ItemInfoComponent) => {
                    return(<ProductListHorizontalLi key={product.productId}>
                        <ProductListItem product={product}/>
                    </ProductListHorizontalLi>)
                })}
            </ProductListHorizontalUl>
        </ProductListHorizontal>)
    )
}
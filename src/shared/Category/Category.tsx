import {useSelector} from 'react-redux';
import store, {RootState} from '../../common/store';
import {
    CategoryContainer,
    CategoryUl,
    CategoryLi,
    CategoryBar,
} from './style';

import gym from './image/gym.svg';
import gymSelect from './image/gymSelect.svg';
import bottom from './image/bottom.svg';
import bottomSelect from './image/bottomSelect.svg';
import top from './image/top.svg';
import topSelect from './image/topSelect.svg';
import pila from './image/pila.svg';
import pilaSelect from './image/pilaSelect.svg';
import leggings from './image/leggings.svg';
import leggingsSelect from './image/leggingsSelect.svg';
import socks from './image/socks.svg';
import socksSelect from './image/socksSelect.svg';
import { changeCategory } from './state';

function Category(){

    const category = useSelector((state:RootState) => state.Category);
    
     function handleCategory(e:React.MouseEvent<HTMLLIElement>){
        console.log(e.currentTarget.id);
        store.dispatch(changeCategory(e.currentTarget.id));
    }

    return(
        <CategoryContainer>
            <CategoryUl>
                {categorys.map((item:{id:string, img:string[]}) => {
                    return(
                        <CategoryLi onClick={handleCategory} id={item.id} key={item.id}>
                            <img src={item.id === category.id ? item.img[1] : item.img[0]}/>
                        </CategoryLi>
                    )
                })}
            </CategoryUl>
            <CategoryBar><div></div></CategoryBar>
        </CategoryContainer>
    )

}

export default Category;

const categorys:{id:string, img:string[]}[] = [
    {
        id:'category/gym',
        img:[gym, gymSelect],
    },
    {
        id:'category/pila',
        img:[pila, pilaSelect],
    },
    {
        id:'category/top',
        img:[top, topSelect],
    },
    {
        id:'category/bottom',
        img:[bottom, bottomSelect],
    },
    {
        id:'category/leggings',
        img:[leggings, leggingsSelect],
    },
    {
        id:'category/socks',
        img:[socks, socksSelect],
    },
]
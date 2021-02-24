import starrateFull from './image/starrateFull.svg';
import starrateHalf from './image/starrateHalf.svg';
import starrateEmpty from './image/starrateEmpty.svg';

export function getReviewStarPoint(wrap:React.RefObject<HTMLDivElement>,reviewPoint:number){
    let point = reviewPoint;
    while((wrap.current as HTMLDivElement).hasChildNodes()){
        (wrap.current as HTMLDivElement).removeChild((wrap.current as HTMLDivElement).firstChild as HTMLImageElement);
    }
    for(let i = 0; i<5; i++){
        const starrate = document.createElement('img');
        if(point>=1){
            starrate.src = starrateFull;
            point = point - 1;
        }
        else if(point>=0.5){
            starrate.src = starrateHalf;
            point = point - 0.5;
        }
        else{
            starrate.src = starrateEmpty;
        }
        wrap.current?.appendChild(starrate);
    }
}
export function slider(wrap:React.RefObject<HTMLDivElement>, pointWrap:React.RefObject<HTMLDivElement>){
    const leftButton = (wrap.current as HTMLDivElement).children[0];
    const rightButton = (wrap.current as HTMLDivElement).children[1];
    const slide = (wrap.current as HTMLDivElement).children[2];
    const ul = slide.children[0] as HTMLUListElement;
    const len = ul.children.length;
    
    if(len>1){
        let pos = 0;
        (leftButton as HTMLImageElement).style.display = 'none';
        ((pointWrap.current as HTMLDivElement).children[0] as HTMLSpanElement).style.background = "#FF701D";

        ul.style.display = 'flex';
        ul.style.transition = '0.5s';
        ul.style.width = `${len * 100}%`;
        Array.from(ul.children).forEach((li) => {
            ((li as HTMLLIElement).children[0] as HTMLImageElement).style.cssText = "width:360px; height:360px";
        })

        leftButton.addEventListener('click', () => {
            if(pos>0){
                pos = pos-1;
                if(pos == 0) (leftButton as HTMLImageElement).style.display = 'none';
                (rightButton as HTMLImageElement).style.display = 'inline';
                movePoint(pointWrap, pos+1, pos);
            }
            ul.style.marginLeft = `${-pos * 100}%`;
        })

        rightButton.addEventListener('click', () => {
            if(pos<len-1){
                pos = pos+1;
                if(pos == len - 1) (rightButton as HTMLImageElement).style.display = 'none';
                (leftButton as HTMLImageElement).style.display = 'inline';
                movePoint(pointWrap, pos-1, pos);
            }
            ul.style.marginLeft = `${-pos * 100}%`;
        })
    }
    else{
        (leftButton as HTMLImageElement).style.display = 'none';
        (rightButton as HTMLImageElement).style.display = 'none';
        (pointWrap.current as HTMLDivElement).style.display = 'none';
    }
}

function movePoint(pointWrap:React.RefObject<HTMLDivElement>, pre:number, now:number){
    ((pointWrap.current as HTMLDivElement).children[pre] as HTMLSpanElement).style.background = '#C1C1C1';
    ((pointWrap.current as HTMLDivElement).children[now] as HTMLSpanElement).style.background = '#FF701D';
}
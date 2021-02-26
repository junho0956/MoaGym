export function sliderNoArrow(wrap:React.RefObject<HTMLDivElement>, widthSize:number, heightSize:number, pointWrap:React.RefObject<HTMLDivElement>){
    const slide = (wrap.current as HTMLDivElement).children[0];
    const ul = slide.children[0] as HTMLUListElement;
    const len = ul.children.length;
    let preScroll = 0;
    if(len>1){
        let pos = 0;
        if(pointWrap){
            ((pointWrap.current as HTMLDivElement).children[0] as HTMLSpanElement).style.background = "#FF701D";
        }

        ul.style.display = 'flex';
        ul.style.transition = '0.5s';
        ul.style.width = `${len * 100}%`;
        Array.from(ul.children).forEach((li) => {
            ((li as HTMLLIElement).children[0] as HTMLImageElement).style.cssText = `width:${widthSize}px; height:${heightSize}px`;
        })

        // slide.addEventListener('scroll', (e) => {
        //     const nowPos = Math.floor((e.currentTarget as HTMLDivElement).scrollLeft/360);
        //     if(pos !== nowPos) {
        //         movePoint(pointWrap, pos, nowPos);
        //         pos = nowPos;
        //     }
        // })
        slide.addEventListener('touchstart', e => {
            e.preventDefault();
            console.log("touchstart : ", e)
        }, false);
    }
    else{
        if(pointWrap){
            (pointWrap.current as HTMLDivElement).style.display = 'none';
        }
    }
}

function movePoint(pointWrap:React.RefObject<HTMLDivElement>, pre:number, now:number){
    ((pointWrap.current as HTMLDivElement).children[pre] as HTMLSpanElement).style.background = '#C1C1C1';
    ((pointWrap.current as HTMLDivElement).children[now] as HTMLSpanElement).style.background = '#FF701D';
}
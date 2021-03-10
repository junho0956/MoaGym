export function applyOnMouse(wrap:React.RefObject<HTMLUListElement>){
    let drag = false;
    let preX = 0;
    wrap.current?.addEventListener("mousedown", e => {
        drag = true;
        preX = e.pageX;
    })

    wrap.current?.addEventListener('mousemove', e => {
        if(drag){
            // (e.currentTarget as HTMLUListElement).style.marginLeft = '200px';
            let nowX = e.pageX;
            (wrap.current as HTMLUListElement).scrollLeft -= nowX - preX;
            preX = nowX;
        }
    })

    wrap.current?.addEventListener('mouseup', () => {
        drag = false;
    });

    wrap.current?.addEventListener('mouseleave', () => {
        drag = false;
    });
}
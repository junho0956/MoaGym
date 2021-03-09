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

    wrap.current?.addEventListener('mouseup', () => drag = false)

    wrap.current?.addEventListener('mouseleave', () => {
        if(drag){drag = false}
    });
}

/*

offsetX: 11
offsetY: 99
pageX: 730
pageY: 361
path: (13) [img.ProductImg, div.sc-fKFyDc.cYHjPw, li.sc-kLgntA.djAJum, ul.sc-bYEvPH.bKdOdD, div.sc-ezrdKe.lGPFm, div.sc-fubCfw.jZdnlR, div.sc-nFpLZ.gMIEZf, div.sc-jeGSBP.jGnPMr, div#root, body, html, document, Window]
relatedTarget: null
returnValue: true
screenX: 730
screenY: 432

*/

/*

offsetX: 39
offsetY: 99
pageX: 758
pageY: 361
path: (13) [img.ProductImg, div.sc-fKFyDc.cYHjPw, li.sc-kLgntA.djAJum, ul.sc-bYEvPH.bKdOdD, div.sc-ezrdKe.lGPFm, div.sc-fubCfw.jZdnlR, div.sc-nFpLZ.gMIEZf, div.sc-jeGSBP.jGnPMr, div#root, body, html, document, Window]
relatedTarget: null
returnValue: true
screenX: 758
screenY: 432

*/
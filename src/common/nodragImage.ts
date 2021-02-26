export function nodragImage(){
        // drag 시 움직이지 않도록
        const AllImage = document.querySelectorAll('img');
        AllImage.forEach((item:HTMLImageElement) => {
            item.addEventListener('dragstart', e => {
                e.preventDefault();
            })
        })
}
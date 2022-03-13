const imgs=document.querySelectorAll('img.product-img');

imgs.forEach((img)=>{

    img.parentElement.addEventListener('mouseenter',()=>{
        console.log('enter');
        img.classList.add('not');
        img.parentElement.firstElementChild.classList.add('display');

        img.parentElement.firstElementChild.addEventListener('mouseleave',()=>{
            img.parentElement.firstElementChild.classList.remove('display');
            img.classList.remove('not');
        });
    });

});
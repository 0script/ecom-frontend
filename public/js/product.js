const imgs=document.querySelectorAll('img.product-img');
const add_btns=document.querySelectorAll('button.add-to-cart');

class CartItem {
    constructor(productname,price,qtt){
        this.name=productname;
        this.price=price;
        this.quantity=qtt;
    }
    
    //getter
    get name(){
        return this.name;
    }

    get price(){
        return this.price;
    }

    get quantity(){
        return this.quantity;
    }

    //method
}

imgs.forEach(img=>{
    /* Display the details when mouse is over the img cart item */

    img.addEventListener('mouseenter',(e)=>{
        img.classList.add('not');
        img.parentElement.firstElementChild.classList.add('display');

        img.parentElement.firstElementChild.addEventListener('mouseleave',()=>{
            img.parentElement.firstElementChild.classList.remove('display');
            img.classList.remove('not');
        });
    });

});

/* function to add item to cart*/
add_btns.forEach(btn => {
    /* will create a local variable that will be a list of CartItem object*/
});
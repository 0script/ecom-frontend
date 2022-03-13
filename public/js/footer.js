if(window.innerWidth<=750){
    let ele_hide=document.querySelectorAll('.hiden-footer');
    let h4_footer=document.querySelectorAll('.h4-footer');

    h4_footer.forEach(element => {
        element.addEventListener('click',(e)=>{
            console.log(e.target.nextElementSibling);
        });
    });
}
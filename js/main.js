const cartbutton = document.querySelector('#cartbutton');
const model = document.querySelector(".model")
const close = document.querySelector(".close")

cartbutton.addEventListener('click', function (event){
    model.classList.add("is-open");  
});
close.addEventListener('click', function (event){
    model.classList.remove("is-open");  
});



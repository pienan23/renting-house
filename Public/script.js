var ClickHam = document.querySelector('.ham-menu');


var NavItems = document.querySelector("section header nav .navbar .nav-items");

ClickHam.addEventListener('click', ()=>{
    ClickHam.classList.toggle('active');
 
    NavItems.classList.toggle('actions');
    NavItems.classList.add('animation');

})





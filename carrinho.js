// var cartIcon = 'shopBtn';

var cartBtn = document.querySelector('#shopBtn1');


var cartHtml = document.getElementById("myHtml");
cartHtml.style.display = 'none';


cartBtn.addEventListener('click', function(){
    console.log('clicado');

    // cartItems.style.display = 'block';
    cartHtml.style.width = '100%';
    cartHtml.style.height = '100%';
    cartHtml.style.top = '0px';
    cartHtml.style.position = 'absolute';
    

    cartHtml.style.display = 'block';

    console.log(cartHtml);

    var exitCart = cartHtml.contentWindow.document.getElementById('exitCart')

    exitCart.addEventListener('click', function() {
        cartHtml.style.display = 'none';
    });

});


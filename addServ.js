if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('apagar')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // var contratar = document.getElementsByClassName('bp1-contratar').innerHTML;
    // contratar = "cookiesEnabled is " + navigator.cookieEnabled;
    var addToCartButtons = document.getElementsByClassName("contratar");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    // document.getElementsByClassName('okay')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('serv')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName("inpTit")[0].value;
    localStorage.setItem('title', JSON.stringify(title))
    var price = shopItem.getElementsByClassName("pricebtn")[0].value;
    localStorage.setItem('price', price)
    var imageSrc = shopItem.getElementsByClassName("picture")[0].src;
    localStorage.setItem('ImageItem', imageSrc)

    var title = localStorage.getItem('title')
    var price = localStorage.getItem('price')
    var imageSrc = localStorage.getItem('ImageItem')

    addItemToCart(title, price, imageSrc)
    alert(title + ' está em seu carrinho')
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('serv')
    var cartItems = document.getElementsByClassName('overlaypv')[0]

    var cartItemNames = cartItems.getElementsByClassName('ServTitle')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Confirme Serviço')
            return
        }
    }
    var cartRowContents =
        `<div class="serv" >
            <button class="okay" type="button"> Confirmar</button>
            <button class="apagar" type="button"> Apagar</button>
            <div class="ball"></div>
            <div class="PreVisu">Pré-visualizar e Confirmar:</div>
            <div class="GrupoServ">
                <img alt="Image" src=${imageSrc} class="Defimg" />
                <span class = "ServTitle" >${title}</span>
                <span class="ServPrice">${price}</span>
                <div class="DetailBox">
                    <div class="SoftUse">SOFTWARES E FERRAMENTAS USADAS</div>
                    <div class="DetailL">Detalhe em poucas palavras, caixa responsiva com stack e BgPadding</div>
                </div>
            </div>
        </div>
        `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    title = localStorage.getItem('title')
    price = localStorage.getItem('price')
    imageSrc = localStorage.getItem('ImageItem')
    // localStorage.setItem("div", cartRow.innerHTML)
    cartRow.getElementsByClassName('apagar')[0].addEventListener('click', removeCartItem)
    // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {

    var cartItemContainer = document.getElementsByClassName('overlaypv')[0]; // document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('overlaypv')
    // var total = 0
    // for (var i = 0; i < cartRows.length; i++) {
    //     var cartRow = cartRows[i]
    //     var priceElement = cartRow.getElementsByClassName('InpPrice')[0]
    //     var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    //     var price = parseFloat(priceElement.innerText.replace('$', ''))
    //     var quantity = quantityElement.value
    //     total = total + (price * quantity)
    // }
    // total = Math.round(total * 100) / 100
    // document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
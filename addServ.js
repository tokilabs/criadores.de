if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    // var contratar = document.getElementsByClassName('bp1-contratar').innerHTML;
    // contratar = "cookiesEnabled is " + navigator.cookieEnabled;
    var addToCartButtons = document.getElementsByClassName("contratar");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('okay')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
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

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("inpTit")[0].innerText;
    localStorage.setItem('title', JSON.stringify(title))
    var price = shopItem.getElementsByClassName("InpPrice")[0].innerText;
    localStorage.setItem('price', price)
    var imageSrc = shopItem.getElementsByClassName("InpImg")[0].src;
    localStorage.setItem('ImageItem', imageSrc)

    var ntitle = localStorage.getItem('title')
    var nprice = localStorage.getItem('price')
    var nimageSrc = localStorage.getItem('imageSrc')

    addItemToCart(ntitle, nprice, nimageSrc)
    alert(ntitle + ' está em seu carrinho')
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('BgPreview')
    cartRow.classList.add('inpBox')
    var cartItems = document.getElementsByClassName('GrupoServ')[0]

    var cartItemNames = cartItems.getElementsByClassName('inpBox').length
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Já está em seu carrinho')
            return
        }
    }
    var cartRowContents = `
            <button class="okay" type="button"> Confirmar</button>
            <button class="apagar" type="button"> Apagar</button>
            <div class="ball"></div>
            <div class="PreVisu">Pré-visualizar e Confirmar:</div>
            <div class="GrupoServ">
                <img alt="Image" src="${imageSrc}" class="Defimg" />
                < span class = "ServTitle" > ${title}< /span>
                <span class="ServPrice">${price}</span>
                <div class="DetailBox">
                    <div class="SoftUse">SOFTWARES E FERRAMENTAS USADAS</div>
                    <div class="DetailL">Detalhe em poucas palavras, caixa responsiva com stack e BgPadding</div>
                </div>
            </div>
`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    title = localStorage.getItem('ntitle')
    price = localStorage.getItem('nprice')
    imageSrc = localStorage.getItem('nimageSrc')
    // localStorage.setItem("div", cartRow.innerHTML)
    cartRow.getElementsByClassName('apagar')[0].addEventListener('click', removeCartItem)
    // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    //var cartItemContainer = localStorage.getItem('cart-items')[0];
    //var cartItemContainer = localStorage.setItem('cart-items')[0];
    // var aux;
    // var jsonAux = JSON.stringify(aux);
    // var setItem = JSON.parse(window.localStorage.setItem('cart-items', jsonAux)[0])
    // var itemObj = JSON.parse(setItem);
    // var jsonCart = window.localStorage.getItem('cart-items')[0]
    //var cartItemContainer = JSON.parse(localStorage.getItem('cart-items')[0])
    // var setItem = window.localStorage.setItem('cart-items', jsonAux)[0]
    // var itemObj = JSON.parse(setItem);
    var cartItemContainer = document.getElementsByClassName('BgPreview')[0]; // document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('inpBox')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    // document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
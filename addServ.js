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

    //  document.getElementsByClassName('okay')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Obrigado por contribuir com a nossa plataforma')
    var firestore = firebase.firestore();

    var docRef = firestore.collection("addserv").doc(i); // .doc("samples/servdata");
    var doclist = docRef.length;
    for (i = 0; i < doclist; i++){
        i = document.getElementsByClassName('ServTitle')[i];
        i++;
    }

    var cartItems = document.getElementsByClassName('serv')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName("inpTit")[0].value;
    localStorage.setItem('title', JSON.stringify(title))
    var softused = shopItem.getElementsByClassName("SoftUse")[0].value;
    localStorage.setItem('softused', softused)
    var detailused = shopItem.getElementsByClassName("DetailUse")[0].value;
    localStorage.setItem('detailused', detailused)
    var price = shopItem.getElementsByClassName("pricebtn")[0].value;
    localStorage.setItem('price', price)
    var imageSrc = shopItem.getElementsByClassName("picture")[0].src;
    localStorage.setItem('ImageItem', imageSrc)
    var servcatg = shopItem.getElementsByClassName("servcat")[0].value;
    localStorage.setItem('servcatg', servcatg)
    var boxtext = shopItem.getElementsByClassName("inpdialog")[0].value;
    // localStorage.boxtext[0].value = "boxdtext";
    localStorage.setItem('boxdtext', boxtext)

    var title = localStorage.getItem('title')
    var softused = localStorage.getItem('softused')
    var detailused = localStorage.getItem('detailused')
    var price = localStorage.getItem('price')
    var imageSrc = localStorage.getItem('ImageItem')
    var servcatg = localStorage.getItem('servcatg')
    var boxtext = localStorage.getItem('boxdtext')


    addItemToCart(title, softused, detailused, price, imageSrc, servcatg, boxtext)
    alert(title + ' serviço adicionado, por favor, revise antes de confirmar')
    updateCartTotal()
}

function addItemToCart(title, softused, detailused, price, imageSrc, servcatg, boxtext) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('serv')
    var cartItems = document.getElementsByClassName('overlaypv')[0];

    var cartItemNames = cartItems.getElementsByClassName('ServTitle');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Confirme Serviço')
            return
        }
    }
    var cartRowContents =
        `
        <div class="servgroup">
            <div class="BoxView"></div>
            <div class="bgServ">
                <div class="BoxServ"></div>
                <div class="paddingBG">
                    <img id="nomeserv" alt="Image" src=${imageSrc} class="Defimg" />
                    <span class="ServTitle" >${title}</span>
                    <div class="DetailBox">
                        <div class="SoftUse">${softused}</div>
                        <div class="DetailL">${detailused}</div>
                    </div>
                </div>
                <div class="apagarbtn">
                    <button class="apagar" type="button"> Apagar</button>
                </div>
                <div class="BtnAdd">
                    <button id="confirm" class="okay" type="button">Confirmar</button>
                </div>
            </div>
            <div class="bgDetail">
                <div class="detalhes"> Detalhes </div>
                <div class="categoria"> Categoria </div>
                <div class="valor">Valor </div>
                <div class="linei"></div>
                <div class="bolota"></div>
                <div class="categnname">${servcatg}</div>
                <div class="Real"> R$ </div>
                <span class="ServPrice">${price}</span>
                <div class="lineii"></div>
                <div class="dialogbg">
                    <textarea class="inpdialog" cols="2" rows="10"
                    name="AdicioneAquiLog" type="text" style="border: none;">"${boxtext}"</textarea>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="./addtostorage.js"></script>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    title = localStorage.getItem('title')
    price = localStorage.getItem('price')
    imageSrc = localStorage.getItem('ImageItem')
    // localStorage.setItem("div", cartRow.innerHTML)
    cartRow.getElementsByClassName('apagar')[0].addEventListener('click', removeCartItem)
    // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

    var firestore = firebase.firestore();
    var docRef = firestore.collection("addserv").doc(title);
    console.log(docRef);
    console.log(title);

    const saveserv = document.querySelector("#confirm");

    saveserv.addEventListener("click", function () {
        console.log(title);
        console.log(imageSrc);
        console.log(softused);
        console.log(detailused);
        console.log(price);
        console.log(servcatg);
        console.log(boxtext);
        docRef.set({
            nome: title,
            image: imageSrc,
            soft: softused,
            detail: detailused,
            preco: price,
            categ: servcatg,
            text: boxtext,
        }).then(function () {
            console.log("Status salvo");
        }).catch(function (error) {
            console.log("error:", error);
        });
    });
    alert(title + ' serviço adicionado ao site, agradecemos!')
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
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

async function ready() {

    var storage = firebase.storage();

    var uploader = document.querySelector("#uploader");
    var fileButton = document.querySelector("#input-image-hidden");

    fileButton.addEventListener("change", function (e) {
        var file = e.target.files[0];
        console.log(file);

        var storageRef = storage.ref('images/' + file.name);

        var task = storageRef.put(file);

        task.on('state_changed',

            async function progress(snapshot) {
                var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percent;
            },
            function error(err) {

            },
            async function complete() {
                localStorage.setItem('fileImage', file.name);
                alert('uploaded' + file.name);
            }
        );
    });

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

    var cartItems = document.getElementsByClassName('serv')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    // updateCartTotal()
}

// function fbRemove(imgNamefb, title) {
//         var storage = firebase.storage();
//         var pathRef = storage.ref('images/' + imgNamefb);
//         var storageRef = storage.doc('addserv/' + title);

//         pathRef.delete().then(function () {
//             console.log("File deleted successfully");
//         }).catch(function (error) {
//             // Uh-oh, an error occurred!
//         });

//         storageRef.delete().then(function () {
//             console.log("Document successfully deleted!");
//         }).catch(function (error) {
//             console.error("Error removing document: ", error);
//         });
// }

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
    // var imageSrc = shopItem.getElementsByClassName("picture")[0].src;
    // localStorage.setItem('ImageItem', imageSrc)
    var servcatg = shopItem.getElementsByClassName("servcat")[0].value;
    localStorage.setItem('servcatg', servcatg)
    var boxtext = shopItem.getElementsByClassName("inpdialog")[0].value;
    // localStorage.boxtext[0].value = "boxdtext";
    localStorage.setItem('boxdtext', boxtext)


    var imgNamefb = localStorage.getItem('fileImage');
    console.log(imgNamefb);

    var storage = firebase.storage();
    var pathReference = storage.ref('images/' + imgNamefb);
    var getImgUrl = pathReference.getDownloadURL().then(async function (url) {
        console.log(url);
        localStorage.setItem(imgNamefb, url);
    }).catch(function (error) {
        console.error(error)
    });

    var imgUrl = localStorage.getItem(imgNamefb);

    console.log(pathReference);

    console.log(getImgUrl);

    console.log(imgUrl);

    var title = localStorage.getItem('title');
    var softused = localStorage.getItem('softused');
    var detailused = localStorage.getItem('detailused');
    var price = localStorage.getItem('price');
    // var imageSrc = localStorage.getItem('ImageItem');
    var servcatg = localStorage.getItem('servcatg');
    var boxtext = localStorage.getItem('boxdtext');

    var imageSrc = JSON.stringify(imgUrl);



    addItemToCart(title, softused, detailused, price, imageSrc, servcatg, boxtext, imgNamefb)
    alert(title + ' Por favor, revise antes de confirmar')
    // updateCartTotal()
}

function addItemToCart(title, softused, detailused, price, imageSrc, servcatg, boxtext, imgNamefb) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('serv')
    var cartItems = document.getElementsByClassName('overlaypv')[0];

    // imageSrc = localStorage.getItem(imgNamefb);
    console.log(imageSrc);

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

    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    // title = localStorage.getItem('title')
    // price = localStorage.getItem('price')

    cartRow.getElementsByClassName('apagar')[0].addEventListener('click', removeCartItem);

    var firestore = firebase.firestore();

    var docRef = firestore.collection("addserv").doc(title);

    // var file = imageSrc;
    console.log(imageSrc);
    console.log(title);

    var saveserv = document.querySelector("#confirm");

    // var storageRef = storage.ref('images/' + file);

    saveserv.addEventListener("click", function () {
        // storageRef.child('images/' + file.value).put(file);
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
    // purchaseClicked();
    // alert(title + ' serviço adicionado ao site, agradecemos!')

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
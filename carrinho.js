var cartIcon = 'shopBtn';

var cartBtn = document.querySelector('#shopBtn');

cartBtn.addEventListener('click', function(){
    console.log('clicado');

    var cartRow = document.createElement('div');
    cartRow.classList.add('cartwidget');

    var cartItems = document.getElementsByClassName('cartover')[0];

    // var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    // for (var i = 0; i < cartItemNames.length; i++) {
    //     if (cartItemNames[i].innerText == title) {
    //         alert('Já está em seu carrinho')
    //         return
    //     }
    // }
    // var cartRowContents = `
    //     <div class="backgroundcadastro">
    //             <div class="asset10">
    //                 <img alt="Image" anima-src="./img/sobre-rectangle.png" class="rectangle" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //             </div>
    //             <div class="asset9">
    //                 <div class="group">
    //                     <img alt="Image" anima-src="./img/cadastro-path.png" class="path" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                     <img alt="Image" anima-src="./img/cartwidget-path-1.png" class="path1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                 </div>
    //             </div>
    //             <div class="asset8">
    //                 <img alt="Image" anima-src="./img/cartwidget-bitmap.png" class="bitmap" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                 <img alt="Image" anima-src="./img/cartwidget-rectangle-1.png" class="rectangle" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //             </div>
    //             <div class="asset7">
    //                 <img alt="Image" anima-src="./img/cartwidget-path-2.png" class="path" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //             </div>
    //         </div>
    //         <div class="cartgroup-layout-container">
    //             <div class="cartgroup">
    //                 <div class="rectangle-layout-container">
    //                     <img alt="Image" anima-src="./img/cartwidget-rectangle-2.png" class="rectangle" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                 </div>
    //                 <div class="cart">
    //                     <div class="stackedgroup">
    //                         <div class="cardempty">
    //                             <div class="doronglagi">
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-3@2x.png" class="path" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-4@2x.png" class="path1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-5@2x.png" class="path2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-6@2x.png" class="path3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-7@2x.png" class="path4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-8@2x.png" class="path5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-9@2x.png" class="path6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-10@2x.png" class="path7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-11@2x.png" class="path8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-12@2x.png" class="path9" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-13@2x.png" class="path10" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-14@2x.png" class="path11" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-oval@2x.png" class="oval" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-15@2x.png" class="path12" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-16@2x.png" class="path13" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-oval-1@2x.png" class="oval1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-17@2x.png" class="path14" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-18@2x.png" class="path15" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-19@2x.png" class="path16" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-20@2x.png" class="path17" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-21@2x.png" class="path18" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-22@2x.png" class="path19" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-23@2x.png" class="path20" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <div class="rectangle12">
    //                                 </div>
    //                                 <div class="rectangle1">
    //                                 </div>
    //                                 <div class="rectangle2">
    //                                 </div>
    //                                 <div class="rectangle3">
    //                                 </div>
    //                                 <div class="rectangle4">
    //                                 </div>
    //                                 <div class="rectangle5">
    //                                 </div>
    //                                 <div class="rectangle6">
    //                                 </div>
    //                                 <div class="rectangle7">
    //                                 </div>
    //                                 <div class="rectangle8">
    //                                 </div>
    //                                 <div class="rectangle9">
    //                                 </div>
    //                                 <div class="rectangle10">
    //                                 </div>
    //                                 <div class="rectangle11">
    //                                 </div>
    //                                 <img alt="Image" anima-src="./img/cartwidget-oval-3@2x.png" class="oval2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-oval-3@2x.png" class="oval3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-24@2x.png" class="path21" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-25@2x.png" class="path22" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-26@2x.png" class="path23" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-27@2x.png" class="path24" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                 <img alt="Image" anima-src="./img/cartwidget-path-28@2x.png" class="path25" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                             </div>
    //                             <div class="seucarrinhoest341va">
    //                                 Seu Carrinho está vazio
    //                             </div>
    //                             <div class="voc352precisaadicion">
    //                                 Você precisa adicionar algum serviço…
    //                             </div>
    //                         </div>
    //                         <a href="precos.html">
    //                             <div class="conferirpre347os anima-smart-layers-pointers ">
    //                                 <div class="buttonprice">
    //                                     <img alt="Image" anima-src="./img/cartwidget-rectangle-3.png" class="rectangle1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                                     <div class="conferirpre307os anima-valign-text-middle">
    //                                         CONFERIR PREÇOS
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <a href="javascript:animaHideOverlay('cartwidget', 'anima-animate-disappear');">
    //                     <img alt="Image" anima-src="./img/cartwidget-exit@2x.png" class="exit anima-smart-layers-pointers " src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
    //                 </a>
    //             </div>`;

    var cartRowContents = `
        <div class="BgCart">

            <img src="img/asset-8.png" srcset="img/asset-8@2x.png 2x, img/asset-8@3x.png 3x" class="Asset-8">

            <img src="img/asset-7.svg" class="Asset-7">

        </div>
        <div class="CartGroup"></div>
    `;

    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
});
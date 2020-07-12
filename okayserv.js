
const firestore = firebase.firestore();
// const storage = firebase.storage();

// var tst = firestore
//     .collection('addserv').onSnapshot(() => {});

// const tst = firestore.collection('addserv');
// const snapshot =  tst.get();
// snapshot.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
// });

async function getAll() {
    // [START get_all]
    const tst = firestore.collection('addserv');
    const snapshot = await tst.get();
    snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());

        var docid = doc.id;
        var idstring = JSON.stringify(docid);

        localStorage.setItem(idstring, docid);

        console.log(docid);

        console.log(idstring);

        // let alldocs = [];

        // alldocs.push(docid);

        // alldocs.push.call(this, docid);

        // var alldocs = array.forEach( i => {
        //     i = docid;
        //     alldocs[i] = i;
        //     i++;
        // });

        var i = 5

        var alldocs = [doc.data()];

        // console.log(alldocs.length);

        console.log(alldocs);

        return alldocs;

        // var docid = [];

        // for (i = 0; i < docid.length; i++) {
        //     doc.id = docid[i];
        //      i++;
        //      return docid;
        // }

    });

// console.log(docid.length);
    // [END get_all]
}

getAll();

 var docid = getAll().alldocs;

 console.log(docid);

// function servsId(servs) {
//     servs = [];
//     for (i = 0; i < servs.length; i++) {
//             docid = servs[i];
//              i++;
//             // return docid;
//             console.log(servs.length);
//         }
// }


// servsId();



const docRef = firestore.doc("addserv/\"teste quatro no ar\"");

console.log(docRef);

// const doc = await docRef.get();
// const myData;

function getserv(title, softused, detailused, price, imageSrc, servcatg, boxtext) {
    docRef.get().then(function (doc) {
        const myData = doc.data();
        console.log(myData);
        // var data = myData;
        // return data;

        title = myData.nome;
        console.log(title);
        softused = myData.soft;
        console.log(softused);
        detailused = myData.detail;
        console.log(detailused);
        price = myData.preco;
        console.log(price);
        imageSrc = myData.image;
        console.log(imageSrc);
        servcatg = myData.categ;
        console.log(servcatg);
        boxtext = myData.text;
        console.log(boxtext);

        // return title, softused, detailused, price, imageSrc, servcatg, boxtext;
        addToPage(title, softused, detailused, price, imageSrc, servcatg, boxtext);

    });
}

getserv();
// console.log(getserv(data));

function addToPage(title, softused, detailused, price, imageSrc, servcatg, boxtext) {
    var addedserv = document.createElement("div");
    addedserv.classList.add('serv');


    var itensserv = document.getElementsByClassName("overlayserv")[0];

    var servContents =
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
    addedserv.innerHTML = servContents;
    itensserv.append(addedserv);


}


// const doc = await docRef.get();
// if (!doc.exists) {
//     console.log('No such document!');
// } else {
//     console.log('Document data:', doc.data());
// }


// console.log(db);


// function getAllServ() {
//     const servs = await firebase.collection('addserv').get();
//     const allserv = [];
//     servs.forEach(doc => {
//         allserv[doc.id] = doc.data();
//     });
//     return allserv;
// }

// console.log(getAllServ(allserv));



docRef.get().then(function (doc) {
    if (doc && doc.exists) {
        const myData = doc.data();

        var addedserv = document.createElement("div");
        addedserv.classList.add('serv');


        var itensserv = document.getElementsByClassName("overlayserv");

        var imageSrc = myData.hotDogImage;
        var title = myData.hotDogStatus;

        var servContents =
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
        addedserv.innerHTML = servContents;
        itensserv.append(addedserv);

        // outputHeader.innerHTML = cartRowContents;
        // outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus + myData.hotDogImage;
    }
}).catch(function (error) {
    console.log("error:", error);
});

// var itensservNames = itensserv.getElementsByClassName('ServTitle');
// for (var i = 0; i < itensservNames.length; i++) {
//     if (itensservNames[i].innerText == title) {
//         alert('Confirme Serviço')
//         return
//     }
// }
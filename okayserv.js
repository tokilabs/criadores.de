const firestore = firebase.firestore();

var docRef = Array();



var alldocs = Array();

async function getAll() {
    // [START get_all]
    const tst = firestore.collection('addserv');
    const snapshot = await tst.get();
    console.log(snapshot);
    snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());

        var docid = doc.id;
        var idstring = JSON.stringify(doc.id);


        // localStorage.setItem(idstring, docid);

        // localStorage.clear();

        console.log(docid);

        console.log(idstring);

        docRef = [...docRef, firestore.doc("addserv/" + "\"" + idstring + "\"" )];


        allDocs(docid);


    });

    // docRef = firestore.collection("addserv/");
    // console.log(docRef[0]);


    // [END get_all]
}


function allDocs(docid) {
    // alldocs.fill(idstring, 0, alldocs.length);
    alldocs = [...alldocs, docid];


    console.log(docid);
    console.log(alldocs.length);

    console.log(alldocs[0]);

    return alldocs;
}

getAll();


// console.log(alldocs.length);

  const docRefok = firestore.doc("addserv/\"teste quatro no ar\"");

// const docRef = firestore.collection("addserv/").doc(alldocs.length)

// console.log(docRef);

 function getserv(title, softused, detailused, price, imageSrc, servcatg, boxtext) {
    docRefok.get().then(function (doc) {
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
        // imageSrc = fstorage.ref('gs://criadores-b8998.appspot.com/images/ServiceAdd.png');
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
    `
    addedserv.innerHTML = servContents;
    itensserv.append(addedserv);


}
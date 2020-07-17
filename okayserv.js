const firestore = firebase.firestore();

// var docRef = Array();

var alldocs = Array();

// const docRefok = firestore.doc("addserv/\"teste quatro no ar\"");

// const docRef = firestore.collection("addserv/").doc(alldocs.length)


async function getAll() {
    // [START get_all]
    const tst = firestore.collection('addserv');
    const snapshot = await tst.get();
    console.log(snapshot);
    if (snapshot.size == 0) {
        console.log("null");
        alert("Nenhum Documento, adicione em chiadores.de/addserv.html e retorne a esta página");
    }else{
    // snapshot
    snapshot.forEach(doc => {

        if (doc.exists) { 
            // console.log(doc.id, '=>', doc.data());

            var docid = doc.id;
            var idstring = JSON.stringify(doc.id);

            // console.log(docid);

            // console.log(idstring);

            allDocs(docid);
        }else{ console.log("Nenhum Documento")}
    });}
    // [END get_all]
}


async function allDocs(docid) {
    // alldocs.fill(idstring, 0, alldocs.length);
    alldocs = [...alldocs, docid];


    console.log(docid);
    console.log(alldocs.length);

    console.log(alldocs[2]);

    // return alldocs;

    paraCada(alldocs);
}

function paraCada(alldocs) {
    console.log(alldocs);
    var i = 0;

    for (var item in alldocs) {
        i = item;
    }

    // for (i= 0; i < alldocs.length; i++){
    //     alldocs[i] = i;
    //     // i++;
    //     // return i;
    // }
    console.log(alldocs[i]);
    var servsRef = firestore.collection('addserv/').doc(alldocs[i]);
    getserv(servsRef);
}

function firebaseRemove(title) {
    docRef = firestore.collection('addserv/').doc(title);
    docRef.delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

function getserv(servsRef) {
    servsRef.get().then(function (doc) {
        const myData = doc.data();
        console.log(myData);
        // var data = myData;
        // return data;

        var title = myData.nome;
        console.log(title);
        var softused = myData.soft;
        console.log(softused);
        var detailused = myData.detail;
        console.log(detailused);
        var price = myData.preco;
        console.log(price);
        // imageSrc = fstorage.ref('gs://criadores-b8998.appspot.com/images/ServiceAdd.png');
        var imageSrc = myData.image;
        console.log(imageSrc);
        var servcatg = myData.categ;
        console.log(servcatg);
        var boxtext = myData.text;
        console.log(boxtext);

        // return title, softused, detailused, price, imageSrc, servcatg, boxtext;
        addToPage(title, softused, detailused, price, imageSrc, servcatg, boxtext);

    });
}

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
                 <button id="Btnpok" class="Btnpok" type="button">Próximo</button>
                <button id="Btnnxtok" class="Btnnxtok" type="button">Anterior</button>
                
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

    console.log(itensserv.children[2]);

    itensserv.style.display = "block";


    var alllayServs = Array();
    alllayServs = itensserv.children;


    console.log(alllayServs[2]);

    alllayServs[0].style.display = "block";

    for (var i = 0; i < alllayServs.length; i++) {
        // if (alllayServs < 0)
    }

    var nxtbtn = itensserv.getElementsByClassName('Btnpok');
    var prevbtn = itensserv.getElementsByClassName('Btnnxtok');
    var deletar = itensserv.getElementsByClassName('apagar');

    var cont = 0;

    for (var xx = 0; xx < deletar.length; xx++) {
        deletar.length = alllayServs.length;
        deletar[xx].addEventListener("click", function () {
            firebaseRemove(title);
        })
    }

    for (var nn = 0; nn < nxtbtn.length; nn++) {
        nxtbtn.length = alllayServs.length;
        // nxtbtn[nn] = 0;
        nxtbtn[nn].addEventListener("click", function () {
            if (cont >= 0) {
                // cont.length = alllayServs.length;
                cont++;
                nn = cont;
                for (var i = 0; i < alllayServs.length; i++) {
                    // i = alllayServs[cont];
                    // i++;
                    if (cont >= alllayServs.length) {
                        alllayServs[cont] = 0;
                        // alllayServs[cont].style.display = "none";
                        // alllayServs.style.display = "none";
                        // JSON.parse(alllayServs[cont].style).display = "none";
                        cont = 0;
                        nn = cont;
                        // var maxserv = alllayServs.length;
                        // maxserv = JSON.parse(maxserv);
                        // console.log(maxserv);
                        // alllayServs[maxserv].style.display = "none";
                        // return;
                        // cont++;
                    } else {
                        i = alllayServs[cont];
                        i++;
                        // console.log(cont);
                        console.log(alllayServs[cont]);
                        alllayServs[cont].style.display = "block";
                        alllayServs[cont - 1].style.display = "none";
                    }
                }
                console.log(nn);
                console.log(cont);
            }
        });
    }

    for (var pp = 0; pp < prevbtn.length; pp++) {
        prevbtn.length = alllayServs.length;
        prevbtn[pp].addEventListener("click", function () {
            if (cont > 0) {
                // cont.length = alllayServs.length;
                cont--;
                for (var i = 0; i < alllayServs.length; i++) {
                    if (cont >= alllayServs.length) {
                        var maxserv = alllayServs.length;
                        // maxserv = JSON.parse(maxserv);
                        console.log(maxserv);
                        alllayServs[maxserv].style.display = "none";
                        cont--;
                    } else {
                        i = alllayServs[cont];
                        i--;
                        console.log(cont);
                        console.log(alllayServs[cont]);
                        alllayServs[cont].style.display = "block";
                        alllayServs[cont + 1].style.display = "none";
                    }
                    pp++;
                }
            }
        });
    }


}

getAll();
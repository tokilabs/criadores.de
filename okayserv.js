
const firestore = firebase.firestore();



async function getAll() {
    // [START get_all]
    const tst = firestore.collection('addserv');
    const snapshot = await tst.get();
    console.log(snapshot);
    snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());

        var docid = doc.id;
        var idstring = JSON.stringify(doc.id);


        localStorage.setItem(idstring, docid);

        // localStorage.clear();

        console.log(docid);

        console.log(idstring);

        allDocs(idstring);


    });
    // [END get_all]
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

function allDocs(idstring){
    var alldocs = Array();
    // alldocs.fill(idstring, 0, alldocs.length);
    for (var i = 0; i < alldocs.length; i++){
        alldocs[i] = i;
        // i++;
        // alldocs.push(i);
    }
    console.log(idstring);
    console.log(alldocs.length);
}

getAll();

 var docid = allStorage();

 console.log(docid);

 var allservs = docid.length;

//  allservs.push(docid.split());

 console.log(allservs);

 console.log(allservs[3]);

 console.log(JSON.stringify(docid[1]));

const servRef = firestore.collection("addserv").doc(docid[0]);

const docRef = firestore.doc("addserv/\"teste quatro no ar\"");

console.log(docRef);

function getserv(title, softused, detailused, price, imageSrc, servcatg, boxtext) {
    servRef.get().then(function (doc) {
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
    `
    addedserv.innerHTML = servContents;
    itensserv.append(addedserv);


}

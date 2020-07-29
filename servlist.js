 const db = firebase.firestore();

 var allDocs = Array();

 var prevBtn = document.getElementsByClassName("anteriorServ");
 var nxtBtn = document.getElementsByClassName("proximoServ");

 var itenserv = document.getElementsByClassName("servicescontainer");

 if (document.readyState == 'loading') {
     document.addEventListener('DOMContentLoaded', leiaApagina)
 } else {
     leiaApagina();
 }

 function leiaApagina() {

     pegarTodos();
      console.log(itenserv);

     var itemServCont = itenserv[0].children;

     var it = 0;

     for (var item in itemServCont){
         it = item;
     }

     console.log(itemServCont[it]);

     for (var i = 0; i < itemServCont.length; i++) {
        //  itemServCont[i];
         console.log(itemServCont[i]);
         if (i >= 6) {
             itemServCont[i].style.display = "none";
             prevBtn[0].style.display = "none";
             nxtBtn[0].style.display = "block";
         } else if (i < 6) {
             prevBtn[0].style.display = "none";
             nxtBtn[0].style.display = "none";
         }
     }


     //botoes da pagina
     prevBtn[0].addEventListener("click", function () {
         prevServ();
     });
     nxtBtn[0].addEventListener("click", function () {
         nxtServ()
     });
 }


 async function pegarTodos() {
     const colect = db.collection('addserv');
     const snapshot = await colect.get();

     console.log(snapshot.size);

     if (snapshot.size == 0) {
         console.log("null");
         alert("Nenhum Documento, adicione em chiadores.de/addserv.html e retorne a esta página");
     } else {
         // snapshot
         snapshot.forEach(doc => {

             if (doc.exists) {
                 // console.log(doc.id, '=>', doc.data());

                 var docid = doc.id;
                 var idstring = JSON.stringify(doc.id);

                 // console.log(docid);

                 // console.log(idstring);

                 todosServs(docid);
             } else {
                 console.log("Nenhum Documento");
                 //  alert("Nenhum Documento, adicione em chiadores.de/addserv.html e retorne a esta página");
             }
         });
     }
 }

 async function todosServs(docid) {
     allDocs = [...allDocs, docid];

     console.log(docid);
     console.log(allDocs.length);

     cadaServ(allDocs);

 }

 function cadaServ(allDocs) {
     console.log(allDocs.length);

     for (var item in allDocs) {
         i = item;
     }

     console.log(allDocs[i]);

     var servRef = db.collection('addserv/').doc(allDocs[i]);
     servicesFstore(servRef);
 }

 function servicesFstore(servRef) {
     servRef.get().then(function (doc) {

         const myData = doc.data();
         console.log(myData);

         var title = myData.nome;
         console.log(title);
         var softused = myData.soft;
         console.log(softused);
         var detailused = myData.detail;
         console.log(detailused);
         var price = myData.preco;
         console.log(price);
         var imageSrc = myData.image;
         console.log(imageSrc);
         var servcatg = myData.categ;
         console.log(servcatg);
         var boxtext = myData.text;
         console.log(boxtext);

         adicionarNaPagina(title, softused, detailused, price, imageSrc, servcatg, boxtext);
     });
 }

 function adicionarNaPagina(title, softused, detailused, price, imageSrc, servcatg, boxtext) {

     var layServ = document.createElement('div');
     layServ.classList.add('services');

     var conteudoServ = `
                        <a href="service.html">
                            <div class="servconnteudo">
                                    <img alt="Image" src=${imageSrc} class="servimg"/>
                                    <div class="servtitle"> ${title} </div>
                                    <div class="detaleConteudo">
                                        <div class="servsoft">${softused}</div>
                                        <div class="servDetail">${detailused}</div>
                                    </div>
                            </div>
                        </a>
    `;

     layServ.innerHTML = conteudoServ;
     console.log(layServ);
     itenserv[0].append(layServ);
     //  console.log(layServ);

     var itemService = itenserv[0].children;
     console.log(itemService);

 }

 function prevServ() {
     console.log("apertado");
 }

 function nxtServ() {
     console.log("nxtServ apertado");

 }
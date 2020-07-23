 const db = firebase.firestore();

 var allDocs = Array();

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

     var itenserv = document.getElementsByClassName("servicescontainer")[0];



     var conteudoServ = `
                        <a href="service.html">
                            <div class="servconnteudo">
                                    <img alt="Image" src=${imageSrc} class="servimg"/>
                                    <div class="servtitle"> ${title} </div>
                                    <div class="detaleConteudo">
                                        <div class="servsoft">
                                        ${softused}</div>
                                        <div class="servDetail">
                                        ${detailused}</div>
                                    </div>
                            </div>
                        </a>
    `;

     layServ.innerHTML = conteudoServ;
     itenserv.append(layServ);

     var itemServCont = itenserv.children;
     console.log(layServ);
     console.log(itemServCont.length);

      var nxtBtn = document.getElementsByClassName("proximoServ")[0];
      var prevBtn = document.getElementsByClassName("anteriorServ")[0];

      nxtBtn.addEventListener("click", function () {
          console.log('nnxt bbtn apertado');
          console.log(itemServCont.length);

          for (var nxtitem = 0; nxtitem < itemServCont.length; nxtitem++) {
              itemServCont[nxtitem];
              console.log(itemServCont[nxtitem]);
              console.log(nxtitem);

          }

      });
      prevBtn.addEventListener("click", function () {
          console.log('prevBtn apertado');
      });


     for (var i = 0; i < itemServCont.length; i++) {
         itemServCont[i];
         console.log(itemServCont[i]);
         if (i >= 6) {
             itemServCont[i].style.display = "none";
         }
     }

 }

 pegarTodos();


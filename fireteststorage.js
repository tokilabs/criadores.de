var firestore = firebase.firestore();

const docRef = firestore.doc("samples/servdata");

const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#latestHotDogStatus");

// var inputimage = document.getElementsByClassName("picture")[0].src;

const savebtn = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

savebtn.addEventListener("click", function () {
    const saveText = inputTextField.value;
    var saveimage = document.getElementsByClassName("picture")[0].src;;
    console.log("Estou salvando" + saveText + " no firestore");
    console.log("Estou salvando" + saveimage + " no firestore");
    docRef.set({
        hotDogStatus: saveText,
        hotDogImage: saveimage,
    }).then(function () {
        console.log("Status salvo");
    }).catch(function (error) {
        console.log("error:", error);
    });
});

loadButton.addEventListener("click", function () {
    docRef.get().then(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();

            var cartRow = document.createElement('div')
            cartRow.classList.add('serv')

            var imageSrc = myData.hotDogImage;
            var title = myData.hotDogStatus;

            var cartRowContents =
                `
                 <div class="servgroup">
                    <img alt="Image" src=${imageSrc} class="Defimg" width="120px" height="120px" />
                    <span class="ServTitle" >${title}</span>
                 </div>
            `
            cartRow.innerHTML = cartRowContents
            outputHeader.append(cartRow)
            // outputHeader.innerHTML = cartRowContents;
            // outputHeader.innerText = "Hot dog status: " + myData.hotDogStatus + myData.hotDogImage;
        }
    }).catch(function (error) {
        console.log("error:", error);
    });
});
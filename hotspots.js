var hotspots = [];
var mymap;

var circles = {};

window.onload = function () {

    var main = document.getElementById("main");

    var hs = localStorage.getItem("hotspots");
    if (hs == null || hs == "null") {
        console.log("null hotspots")
    } else {
        hotspots = JSON.parse(hs);
        if (hotspots == null) {
            console.log("No hotspots found");
            main.innerHTML = "<tr><td>0</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
        } else {
            makeTable();
        }
    }
    mymap = L.map('mapid').setView([48.137154, 11.576124], 17);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 25,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWFwcGVyMTk4MCIsImEiOiJjamcyZmM1NGIxYmpyMnFxcGpkdmVrajZiIn0.4_IpyZEyyuICUUp94Yyarg'
    }).addTo(mymap);
    mymap.on('click', onMapClick);

    for (hotspot of hotspots) {
        var circle = L.circle([hotspot.locationX, hotspot.locationY], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 10
        }).addTo(mymap);
        circles[hotspot.id] = circle;
    }
}

function makeTable() {
    console.log("Hotspots: " + hotspots.length);
    main.innerHTML =
        "<div class=\"row header\">" +
        " <div class=\"cell\">Id</div>" +
        " <div class=\"cell\">LocationX</div>" +
        " <div class=\"cell\">LocationY</div>" +
        " <div class=\"cell\">Actions</div>" +
        "</div>";

    for (hotspot of hotspots) {
        main.innerHTML += "<div class=\"row\">" +
            "<div class=\"cell\" width=\"50px\">" + hotspot.id + "</div>" +
            "<div class=\"cell\" width=\"200px\">" + hotspot.locationX + "</div>" +
            "<div class=\"cell\" width=\"200px\">" + hotspot.locationY + "</div>" +
            "<td class=\"cell\" width=\"50px\" align=\"center\"><input type=\"button\" value=\"-\" onclick=\"deleteHotspot(" + hotspot.id + ")\"></input></div>" +
            "</div>";
    }

}


function deleteHotspot(id) {
    console.log("deleting hotspot: " + id);
    for (i = 0; i < hotspots.length; i++) {
        if (hotspots[i].id == id) {
            var circle1 = circles[hotspots[i].id];
            circle1.removeFrom(mymap);
            hotspots.splice(i, 1);
            break;
        }
    }
    storeHotspots();
    makeTable();
}

function storeHotspots() {
    localStorage.setItem("hotspots", JSON.stringify(hotspots));
}

function onMapClick(e) {
    var deleted = false;
    for (hotspot of hotspots) {
        var loc = e.latlng;
        if (isEqualLocation(hotspot, loc)) {
            //if (hotspot.locationX==e.latlng.lat && hotspot.locationY==e.latlng.lng){
            deleteHotspot(hotspot.id);
            deleted = true;
        }
    }
    if (!deleted) {
        var hotspot1 = {
            id: hotspots.length,
            locationX: e.latlng.lat,
            locationY: e.latlng.lng
        }
        hotspots.push(hotspot1);
        storeHotspots();
        var circle = L.circle([hotspot1.locationX, hotspot1.locationY], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 10
        }).addTo(mymap);
        circles[hotspot1.id] = circle;
        makeTable();
    }

}

function isEqualLocation(hotspot, latlng) {
    var loc1 = L.latLng(hotspot.locationX, hotspot.locationY);
    var dist = latlng.distanceTo(loc1);
    if (dist <= 10) {
        return true;
    }
    return false;
    //return (hotspot.locationX==latlng.lat && hotspot.locationY==latlng.lng);
}
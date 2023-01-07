function initMap() {
// Coordenadas das cidades
var ipatinga = {lat: -19.47, lng: -42.54};
var linhares = {lat: -19.39, lng: -40.06};
var governadorValadares = {lat: -18.85, lng: -41.95};
var lat = (ipatinga.lat + linhares.lat + governadorValadares.lat) / 3;
var lng = (ipatinga.lng + linhares.lng + governadorValadares.lng) / 3;
var center = {lat: lat, lng: lng};

function updateVariable() {
if (window.innerWidth > 1025 && window.innerWidth < 4000) {
      var zoom_map = 8;
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
        var zoom_map = 7.3;
    } else {
        var zoom_map = 6.8;
    }
return zoom_map
}

zoom_map = updateVariable()

// Opções do mapa
var mapOptions = {
zoom: zoom_map,
center: center,
draggable: false,
mapTypeId: 'satellite',
zoomControl: false,
mapTypeControl: false,
fullscreenControl: false,
streetViewControl: false,
attributionControl: false,
mapTypeControl: false,
}

// Criação do mapa
var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

// Marcadores das cidades
var markerIpatinga = new google.maps.Marker({
position: ipatinga,
map: map,
title: 'Ipatinga',
label: {
text: 'Ipatinga',
color: 'white',
fontSize: '16px'
},
icon: null,
});

var markerLinhares = new google.maps.Marker({
position: linhares,
map: map,
title: 'Linhares',
label: {
text: 'Linhares',
color: 'white',
fontSize: '16px'
},
icon: null,
});

var markerGovernadorValadares = new google.maps.Marker({
position: governadorValadares,
map: map,
title: 'Governador Valadares',
label: {
text: 'Governador Valadares',
color: 'white',
fontSize: '16px'
},
icon: null,
});

// Adição do evento "click" ao marcador
google.maps.event.addListener(markerIpatinga, 'click', function() {
// Redirecionamento para o link
window.location.href = 'ipatinga.html';
});

// Adição do evento "click" ao marcador
google.maps.event.addListener(markerLinhares, 'click', function() {
// Redirecionamento para o link
window.location.href = 'linhares.html';
});

// Adição do evento "click" ao marcador
google.maps.event.addListener(markerGovernadorValadares, 'click', function() {
// Redirecionamento para o link
window.location.href = 'governador_valadares.html';
});

}
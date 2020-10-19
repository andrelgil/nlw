// tipos de dados
// String ""
// Number 01
// Object {}
// Array []

// create map
const map = L.map('mapid').setView([-21.1377288,-48.9685876], 14);

// create and add tileLayer
L.tileLayer(
     'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar Bom Samaritano <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg">')

//create and add marker
L.marker([-21.1423014,-48.9835922], { icon })
.addTo(map)
.bindPopup(popup)

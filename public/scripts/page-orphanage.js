const options = {
    dragging: false,
    touchZoom: false,
    dopleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false    
}

// create map
const map = L.map('mapid', options).setView([-21.1377288,-48.9685876], 14);

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

//create and add marker
L.marker([-21.1423014,-48.9835922], { icon })
.addTo(map)

/* image gallery */
function selectImage(event) {
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
       
    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    buttons.forEach(removeActiveClass)
        
    // Adicionar a classe .active para o botao clicado
    button.classList.add('active')

    // Selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar o container de image
    imageContainer.src = image.src
}
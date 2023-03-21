
let eventos = []


function traerDatos() {
    //  fetch ('./scripts/data.json')
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(events => {
            eventos = events.events
            console.log(eventos)
            render_cards(eventos, cards_events)
        })

        .catch(error => console.log(error.mesagge))
}

traerDatos()


function render_cards(eventos, lugar) {
   let cards = ``
    eventos.forEach(evento => {
        cards += `   
                    <div class="col">
                        <div class="card h-100">
                            <img src="${evento.image}" class="card-img-top" alt="${evento.image}">
                            <div class="card-body">
                                <h5 class="card-title">${evento.name}</h5>
                                <h5 class="card-title">${evento.date}</h5>
                                <p class="card-text"></p>
                                <p class="card-text"><i>${evento.description}</i></p>
                                <p class="card-text"><b>Category: </b>${evento.category}</p>
                                <p class="card-text"><b>Place: </b>${evento.place}</p>
                                <p class="card-text"><b>Capacity: </b>${evento.capacity}</p>
                                <p class="card-text"><b>Assistance: </b>${evento.assistance}</p>
                                
    
                            </div>
                            <div class="card-footer" >
                            <input type="button" id="button" value="Precio$ ${evento.price}">
                            <input type"button" id="button1" onclick="seeDetail('${evento._id}')" value="See More">
                            </div>
                        </div>
                    </div>
                        `

    })
    lugar.innerHTML = cards
}




function seeDetail(_id) {
    window.location.href = `./details.html?id=${_id}`
}
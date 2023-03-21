let upComingEvents = []
let card_events = document.getElementById('cards_events')

function traerDatos() {
    //  fetch ('./scripts/data.json')
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(datosApi => {
            console.log(datosApi)
            upComingEvents = datosApi.events.filter(event => event.date > datosApi.currentDate)
            console.log(upComingEvents)
            render_cards(upComingEvents, card_events)
        })

        .catch(error => console.log(error.mesagge))
}

traerDatos()



function render_cards(upComingEvents, lugar) {
    cards = ``
    upComingEvents.forEach(evento => {
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

// function filter_name_description_upcomming(event){ 
//     if (
//             (
//                 event.name.toLowerCase().includes(searcher_future.value.toLowerCase()) || 
//                 event.description.toLowerCase().includes(searcher_future.value.toLowerCase())
//                 ) && (
//                     event.date > current_date
//                     )) {
//         return true
//     }else{
//         return false
//     }
// }

// function name_description_filter_upcoming(){
//     console.log(searcher_future.value)
//     events_filtered = events.filter(filter_name_description_upcomming) 

//     if (events_filtered.length > 0) {
//         render_cards(events_filtered)
//     }else{
//       alert('No events found. Try another filter')
//     }
// }

// searcher_future.addEventListener("keyup", name_description_filter_upcoming)


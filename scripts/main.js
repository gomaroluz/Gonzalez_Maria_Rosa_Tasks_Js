let current_date = data.currentDate;
let events = data.events
// past_events = []
// future_events = []

// for (let event in events) {
//     if (events[event].date < current_date) {
//         past_events.unshift(events[event])
//     }
//     else {
//         future_events.unshift(events[event])
//     }
// }

let eventsSort = events.sort((date1, date2) => {
    if (date1.date > date2.date) {
        return -1;
    } else if (date1.date < date2.date) {
        return 1;
    } else {
        return 0;
    }
});
console.log(eventsSort)

let future_events = eventsSort.filter(event => event.date > current_date)
console.log(future_events)

let past_events = eventsSort.filter(event => event.date < current_date)
console.log (past_events)


let card = document.getElementById('cards_events');

eventsSort.map((x) => {
    card.innerHTML += `   
                <div class="col">
                    <div class="card h-100">
                        <img src="${x.image}" class="card-img-top" alt="Party">
                        <div class="card-body">
                            <h5 class="card-title">${x.name}</h5>
                            <h5 class="card-title">${x.date}</h5>
                            <p class="card-text"></p>
                            <p class="card-text"><i>${x.description}</i></p>
                            <p class="card-text"><b>Category: </b>${x.category}</p>
                            <p class="card-text"><b>Place: </b>${x.place}</p>
                            <p class="card-text"><b>Capacity: </b>${x.capacity}</p>
                            <p class="card-text"><b>Assistance: </b>${x.assistance}</p>
                            

                        </div>
                        <div class="card-footer" >
                            <a href="#" class="badge bg-success"><b> Price: $${x.price}</b></a>
                            <a href="#" class="badge bg-warning text-dark">See more</a>
                        </div>
                    </div>
                </div>
                    `;
                    
});


// console.log(events)
// console.log(past_events)


// const cards = document.getElementById('cards_events')

// let tarjetasGeneradas = crearTarjetas(events)

// cards.innerHTML = tarjetasGeneradas

// document.getElementById('cards_events').innerHTML = crearTarjetas(events)


// function crearTarjetas(arrayDatos) {
//     let tarjetas = ``
//     for (const event of arrayDatos) {
//         tarjetas += `   
//     <div class="col">
//         <div class="card h-100">
//             <img src="${event.image}" class="card-img-top" alt="Party">
//             <div class="card-body">
//                 <h5 class="card-title">${event.name}</h5>
//                 <h5 class="card-title">${event.date}</h5>
//                 <p class="card-text"></p>
//                 <p class="card-text"><i>${event.description}</i></p>
//                 <p class="card-text"><b>Category: </b>${event.category}</p>
//                 <p class="card-text"><b>Place: </b>${event.place}</p>
//                 <p class="card-text"><b>Capacity: </b>${event.capacity}</p>
//                 <p class="card-text"><b>Assistance: </b>${event.assistance}</p>

//             </div>
//             <div class="card-footer">
//                 <a href="#" class="badge bg-success"><b> Price: $${event.price}</b></a>
//                 <a href="#" class="badge bg-warning text-dark">See more</a>
//             </div>
//         </div>
//     </div>`
//     }
//     return tarjetas
// }













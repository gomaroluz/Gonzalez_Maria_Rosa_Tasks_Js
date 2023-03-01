// current_date = data.currentDate;
// events = data.events
// future_events = []

// for (var evento in events) {
//     if (events[evento].date > current_date) {
//         future_events.unshift(events[evento])
//         console.log('es un evento futuro');
//     }
// }

// console.log(future_events)

// let card = document.getElementById('cards_events');

// future_events.map((x) => {
//     card.innerHTML += `   
//                 <div class="col">
//                     <div class="card h-100">
//                         <img src="${x.image}" class="card-img-top" alt="Party">
//                         <div class="card-body">
//                             <h5 class="card-title">${x.name}</h5>
//                             <h5 class="card-title">${x.date}</h5>
//                             <p class="card-text"></p>
//                             <p class="card-text"><i>${x.description}</i></p>
//                             <p class="card-text"><b>Category: </b>${x.category}</p>
//                             <p class="card-text"><b>Place: </b>${x.place}</p>
//                             <p class="card-text"><b>Capacity: </b>${x.capacity}</p>
//                             <p class="card-text"><b>Assistance: </b>${x.assistance}</p>
                            
//                         </div>
//                         <div class="card-footer">
//                             <a href="#" class="badge bg-success"><b>Price: $ ${x.price}</b></a>
//                             <a href="#" class="badge bg-warning text-dark">See more</a>
//                         </div>
//                     </div>
//                 </div>
//                     `;

// });


future_events.sort((date1, date2) => {
    if (date1.date < date2.date) {
        return -1;
    } else if (date1.date > date2.date) {
        return 1;
    } else {
        return 0;
    }
});

document.getElementById('cards_events').innerHTML = crearTarjetas(future_events)
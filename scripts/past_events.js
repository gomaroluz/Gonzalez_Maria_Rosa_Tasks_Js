current_date = data.currentDate;
events = data.events

console.log(past_events)

// for (var evento in events) {
//     if (events[evento].date < current_date) {

//         past_events.unshift(events[evento])
//         console.log('el evento ya paso');
//     }
// }

// console.log(past_events)


// let card = document.getElementById('cards_events');

// past_events.map((x) => {
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
//                         <div class="card-footer" >
//                             <a href="#" class="badge bg-success"><b> Price: $${x.price}</b></a>
//                             <a href="#" class="badge bg-warning text-dark">See more</a>
//                         </div>
//                     </div>
//                 </div>
//                     `;

// });

let card = document.getElementById('cards_events');
let searcher_past = document.getElementById('searcher_past')


past_events.sort((date1, date2) => {
    if (date1.date < date2.date) {
        return -1;
    } else if (date1.date > date2.date) {
        return 1;
    } else {
        return 0;
    }
});

function filter_name_description_upcomming(event){ 
    if (
            (
                event.name.toLowerCase().includes(seaecher.value.toLowerCase()) || 
                event.description.toLowerCase().includes(seaecher.value.toLowerCase())
                ) && (
                    event.date > current_date
                    )) {
        return true
    }else{
        return false
    }
}

render_cards(past_events)

function filter_name_description_past(event){ 
    if (
            (
                event.name.toLowerCase().includes(searcher_past.value.toLowerCase()) || 
                event.description.toLowerCase().includes(searcher_past.value.toLowerCase())
                ) && (
                    event.date < current_date
                    )) {
        return true
    }else{
        return false
    }
}
    

function name_description_filter_past(){
    console.log(searcher_past.value)
    events_filtered = events.filter(filter_name_description_past) 

    console.log(events_filtered)
    if (events_filtered.length > 0) {
        render_cards(events_filtered)
    }else{
      alert('No events found. Try another filter')
    }
}

searcher_past.addEventListener("keyup", name_description_filter_past)
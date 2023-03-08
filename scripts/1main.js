let current_date = data.currentDate;
let events = data.events
let cards_events = document.getElementById('cards_events')


// events.map((x) => {
//     cards_events.innerHTML += `   
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
//                         <input type="button" id="button" value="Precio$ ${x.price}">
//                         <input type"button" id="button1" onclick="seeDetail('${x._id}')" value="See More">
//                         </div>
//                     </div>
//                 </div>
//                     `;
                    
// });

let eventsSort = events.sort((date1, date2) => {
    if (date1.date > date2.date) {
        return -1;
    } else if (date1.date < date2.date) {
        return 1;
    } else {
        return 0;
    }
});

let future_events = events.filter(event => event.date > current_date)
console.log(future_events)

let past_events = events.filter(event => event.date < current_date)
console.log (past_events)


let searcher = document.getElementById('searcher')
console.log(searcher);

function render_cards(events_array) {

    cards_events.innerHTML = ``
    events_array.forEach((event) => {
        cards_events.innerHTML += `   
                <div class="col">
                    <div class="card h-100">
                        <img src="${event.image}" class="card-img-top" alt="Party">
                        <div class="card-body">
                            <h5 class="card-title">${event.name}</h5>
                            <h5 class="card-title">${event.date}</h5>
                            <p class="card-text"></p>
                            <p class="card-text"><i>${event.description}</i></p>
                            <p class="card-text"><b>Category: </b>${event.category}</p>
                            <p class="card-text"><b>Place: </b>${event.place}</p>
                            <p class="card-text"><b>Capacity: </b>${event.capacity}</p>
                            <p class="card-text"><b>Assistance: </b>${event.assistance}</p>
                            

                        </div>
                        <div class="card-footer" >
                        <input type="button" id="button" value="Precio$ ${event.price}">
                        <input type"button" id="button1" onclick="seeDetail('${event._id}')" value="See More">
                        </div>
                    </div>
                </div>
                    `;

    });
}

render_cards(events);

function seeDetail(_id){
    window.location.href = `./details.html?id=${_id}`
}

function filter_name_description(event){ 
    if (event.name.toLowerCase().includes(searcher.value.toLowerCase()) || event.description.toLowerCase().includes(searcher.value.toLowerCase())) {
        return true
    }else{
        return false
    }
}

function name_description_filter(){
    console.log(searcher.value)
    events_filtered = events.filter(filter_name_description) 

    console.log(events_filtered)
    if (events_filtered.length > 0) {
        render_cards(events_filtered)
    }else{
      alert('No events found. Try another filter')
    }
}

searcher.addEventListener("keyup", name_description_filter)
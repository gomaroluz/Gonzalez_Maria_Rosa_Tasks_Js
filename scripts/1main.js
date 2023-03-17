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


// let searcher = document.getElementById('searcher')
// console.log(searcher);

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

//searcher.addEventListener("keyup", name_description_filter)


/////////////////////////////////////////////////////////////////////////////////

let checkboxes = document.getElementById('container_checkboxes')


let events_categories = get_categories(events);


function get_categories(events){ 
    categories = new Set()
    events.forEach( (event) => {
        categories.add(event.category)
    })
    return categories
}

function render_checkboxes(events_categories) {

    checkboxes.innerHTML = ``
    console.log(events_categories)
    events_categories.forEach( (category) => {
        checkboxes.innerHTML += `
    <div class="form-check form-check-inline">
        <label class="form-check-label" for="'${category}'">'${category}'
        <input onclick=get_filtered_events() class="c_inp" type="checkbox" name='checkbox_category' value='${category}'>
        </label>
        
    </div> `

    });
}


render_checkboxes(events_categories)


function get_filtered_events(){
    
    // get the text searcher value
    let text_searcher = document.getElementById('searcher').value
    console.log('text searcher:' + text_searcher)

    // get all the checked checkboxes
    let checkboxes_searcher = Array.from(document.querySelectorAll(`.c_inp`)).map(check => check)
    checkboxes_searcher = checkboxes_searcher.filter( checkbox => {if (checkbox.checked){return true}})
    checkboxes_searcher = checkboxes_searcher.map(checkbox => checkbox.value.toLowerCase())
    console.log(checkboxes_searcher)

    let ev_filtered = events.filter( each => {
        return (
            each.name.toLowerCase().includes(text_searcher.toLowerCase()) || 
            each.description.toLowerCase().includes(text_searcher.toLowerCase())
            ) &&
            (checkboxes_searcher.length === 0 || checkboxes_searcher.includes(each.category.toLowerCase()))
    })
    console.log(ev_filtered)

    ev_filtered.length>0 ? render_cards(ev_filtered) : alert('No event found with the specified properties')
}
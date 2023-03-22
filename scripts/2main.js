
let eventos = []


function traerDatos() {
    //  fetch ('./scripts/data.json')
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(events => {
            eventos = events.events
            console.log(eventos)
            render_checkboxes(eventos)
            render_cards(eventos, cards_events)

        })

        .catch(error => console.log(error.mesagge))
}


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

////////////////////////////////////////////// CHECKBOXES///////////////////////////////////

function get_categories(events){ 
    categories = new Set()
    events.forEach( (event) => {
        categories.add(event.category)
    })
    return categories
}

function render_checkboxes(events) {
    let checkboxes = document.getElementById('container_checkboxes')
    
    categories = get_categories(events)
    checkboxes.innerHTML = ``   
    categories.forEach( (category) => {
        checkboxes.innerHTML += `
    <div class="form-check form-check-inline">
        <label class="form-check-label" for="'${category}'">'${category}'
        <input onclick=get_filtered_events() class="c_inp" type="checkbox" name='checkbox_category' value='${category}'>
        </label>
        
    </div> `

    });
}


///////////////////////////////////////////////////Filter///////////////////////////////////


function filter_name_description(event){ 
    if (event.name.toLowerCase().includes(searcher.value.toLowerCase()) || event.description.toLowerCase().includes(searcher.value.toLowerCase())) {
        return true
    }else{
        return false
    }
}

function name_description_filter(){
    console.log(searcher.value)
    events_filtered = eventos.filter(filter_name_description) 

    console.log(events_filtered)
    if (events_filtered.length > 0) {
        render_cards(events_filtered)
    }else{
      alert('No events found. Try another filter')
    }
}

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


function seeDetail(_id) {
    window.location.href = `./details.html?id=${_id}`
}


traerDatos()


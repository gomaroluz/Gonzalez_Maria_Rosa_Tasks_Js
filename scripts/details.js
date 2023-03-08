// let params = new URLSearchParams(document.location.search)
// id = params.get("id")

let profile = data.events.filter(info => info._id == new URLSearchParams(location.search).get("id") );

const container = document.getElementById("container-detail");
let html = "";

html +=`
    <div class="card h-100">
<img src="${profile[0].image}" class="card-img-top" alt="Party">
<div class="card-body">
    <h5 class="card-title">${profile[0].name}</h5>
    <h5 class="card-title">${profile[0].date}</h5>
    <p class="card-text"></p>
    <p class="card-text"><i>${profile[0].description}</i></p>
    <p class="card-text"><b>Category: </b>${profile[0].category}</p>
    <p class="card-text"><b>Place: </b>${profile[0].place}</p>
    <p class="card-text"><b>Capacity: </b>${profile[0].capacity}</p>
    <p class="card-text"><b>Assistance: </b>${profile[0].assistance}</p>
    

</div>
<div class="card-footer" >
<input type="button" id="button" value="Precio$ ${profile[0].price}">
</div>
</div>
</div>
`;

// document.getElementById('cards_events').innerHTML = crearTarjetas(events)

container.innerHTML = html

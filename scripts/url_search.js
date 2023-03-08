let container = document.getElementById('container-cards');
let html = "";

for (let event of events) {
    html += `
    <div class="card h-100">
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
    //                  <input type="button" id="button" value="Precio$ ${event.price}">
                        <input type="button" onclick="seeDetail(`${event.id}`)" value="See More">
    //             </div>
    //         </div>

    `
}

function seeDetail(id) {
    window.location.href = `./details.html?id=${id}`
}

container.innerHTML = html
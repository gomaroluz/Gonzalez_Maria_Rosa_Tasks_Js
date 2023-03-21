let eventos = []
    //  fetch ('./scripts/data.json')
    fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(events => {
            let eventos = events.events
            console.log(eventos)
            // let eventospasados = pasados(events.events, eventos.currentDate)
            // console.log(eventospasados)
            let past = pastEvents(events.events, events.currentDate)
            console.log(past)
            let futures = upComingEvents(events.events, events.currentDate)
            console.log(futures)

            let percentageresult = assistance (eventos)
            printTable(results(assistance(eventos), assistance(eventos).reverse(),), "generaltable")

            // printTable(dataTable(futures), "upcoming")
            // printTable(dataTable(past), "past")
        })


        function upComingEvents(events, currentDate) {
            return events.filter(event => event.date > currentDate)
          }
          
          function pastEvents(events, currentDate) {
            return events.filter(event => event.date < currentDate)
          }


function assistance(eventos) {
    const percentagematrix = eventos.map(event =>{
        return {
            attendance: (event.assistance / event.capacity) * 100,
            nameEvent: event.name
        }
    })
    percentagematrix.sort((a,b)=>b.attendance - a.attendance)
    console.log(percentagematrix)
    return percentagematrix
}

function capacity(arrPast) {
    const arrayCapacity = arrPast.map(event => {
      return {
        capacity: event.capacity, //ver calculo.
        nameEvent: event.name
      }
    })
    arrayCapacity.sort((a, b) => b.capacity - a.capacity)
    console.log(arrayCapacity)
    return arrayCapacity
  
  }

function results(highestPercentage, lowestPercentage, largerCapacity) {
    let all = {
      highestPercentage: highestPercentage[0].nameEvent,
      lowestPercentage: lowestPercentage[0].nameEvent,
    //   largerCapacity: largerCapacity[0].nameEvent,
    }
    

    return all
  }

  function printTable(results, container) {
    const table = document.getElementById(container)
    table.innerHTML = `
    <tr>
        <td>${results.highestPercentage}</td>
        <td>${results.lowestPercentage}</td>
        <td>${results.largerCapacity}</td>
    </tr>
    `
  }
  
  function dataTable(arr) {
    let categories = Array.from(new Set(arr.map(events => events.category)));
    let eventCategories = categories.map(cat => arr.filter(event => event.category == cat))
    let result = eventCategories.map(eventCat => {
        let calculate = eventCat.reduce((acc, event) => {
          console.log(event)
          acc.category = event.category;
          acc.revenues += event.price * (event.assistance || event.estimate);
          acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
          return acc
        }, {
          category: "",
          revenues: 0,
          attendance: 0
        })
        calculate.attendance = calculate.attendance / eventCat.length
        return calculate
      })
      return result;
    }
    
    function printTable(arr, idTag) {
      const upcomingTable = document.getElementById(idTag)
      let html = arr.map(eventos => {
        return `
          <tr>
                  <td>${eventos.category}</td>
                  <td>$${eventos.revenues}</td>
                  <td>${eventos.attendance.toFixed(2)}%</td>
              </tr>
          `
      })
      upcomingTable.innerHTML = html.join("")
    }
  
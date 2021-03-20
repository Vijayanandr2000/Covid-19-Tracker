async function getData(){
    var apiRes = await fetch("https://covid-api.mmediagroup.fr/v1/cases?country");
    var apiData = await apiRes.json();
    
    var name = Object.values(apiData);
    var data = Object.keys(apiData);

    var con = document.getElementById('row');
    
    name.forEach((element,i) => {

        console.log(data[i]);
        console.log(element.All.confirmed);
        console.log(element.All.deaths);
        console.log(element.All.recovered);
        var active = parseInt(element.All.confirmed)-parseInt(element.All.recovered)-parseInt(element.All.deaths)
        console.log(active);
        console.log(" ");
        if(data[i]=="India")
        {
        var div = document.createElement('div');
        div.innerHTML += `
        <div class="card-deck">
            <div class="card" >
                <div class="card-body bg-light" style="color:black"; >
                    <h2 class="card-title">Confirmed</h2>
                    <h5 class="card-title">${element.All.confirmed}</h5>
                </div>
            </div>
            <div class="card">
                <div class="card-body bg-primary" style="color:white";>
                    <h2 class="card-title">Active</h2>
                    <h5 class="card-title">${active}</h5>
                </div>
            </div>
            <div class="card">
                <div class="card-body bg-green" style="color:black";>
                    <h2 class="card-title">Recovered</h2>
                    <h5 class="card-title">${element.All.recovered}</h5>
                </div>
            </div>
            <div class="card">
                <div class="card-body bg-danger" style="color:white";>
                    <h2 class="card-title">Deaths</h2>
                    <h5 class="card-title">${element.All.deaths}</h5>
                </div>
            </div>
        </div>
        
        `
        con.append(div);
        }
        

        
    });
}
getData();


async function getDetail(){
    var apiRes = await fetch("https://covid-api.mmediagroup.fr/v1/cases?country");
    var apiData = await apiRes.json();
    
    var name = Object.values(apiData);
    var data = Object.keys(apiData);

    var con = document.getElementById('tbody');
    
    name.forEach((element,i) => {

        console.log(data[i]);
        console.log(element.All.confirmed);
        console.log(element.All.deaths);
        console.log(element.All.recovered);
        var active = parseInt(element.All.confirmed)-parseInt(element.All.recovered)-parseInt(element.All.deaths)
        console.log(active);
        console.log(" ");
        
        var div = document.createElement('tr');
        div.innerHTML += `
        <th scope="row" class="table-data text-center">${data[i]}</th>
        <td class="table-data text-center">${element.All.confirmed}</td>
        <td class="table-data text-center">${active}</td>
        <td class="table-data text-center">${element.All.recovered}</td>
        <td class="table-data text-center">${element.All.deaths}</td>
            
            
        
        `
        con.append(div);
        

        
    });
}

// declarations 
const app = document.getElementById("app");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

// functions
// templating
const templating = (arr) => {
    let final = '';
    arr.forEach(element => {
       final += `
       <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <span class="appType ${typeColour(element.type)}">${element.type}</span>
                    <div class="appInfo">
                        <h4>${element.name}</h4>
                        <span>From ${element.dateOpen} To ${element.dateClose}</span>
                        <p>${element.description}</p>
                        <a href="${element.link}" target="_blank">
                            <button class="btn btn-info">Details</button>
                        </a>
                    </div>
                </div>
            </div>
    </div>
    `; 
    });
    app.innerHTML = final;
}
templating(db);

// for 'type' background colour
function typeColour(type){
    switch(type.toLowerCase().trim()){
        case "hardware" :
            return "blue"
        case "app" :
            return "green"
        case "service" :
            return "red"
    }
}

// event callback functions
// for search input
const onSearchHandler = (e) => {
    let keyword = e.target.value.toLowerCase().trim();
    let filtArr = db.filter(ele => ele.name.toLowerCase().trim().includes(keyword));
    templating(filtArr);
}

// for 'type' filter
const onFilterHandler = (e) => {
    let type = e.target.value;
    if(!type){
        templating(db);
    }else{
        let tempArr = db.filter(ele => ele.type.toLowerCase().trim() === type);
        templating(tempArr);
    }
}
// events
search.addEventListener("keyup", onSearchHandler);
filter.addEventListener("change", onFilterHandler);
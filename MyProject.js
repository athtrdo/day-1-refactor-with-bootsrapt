
let Projects = [] // Variable Global

function addProject() {
    // Get data form
    let name = document.getElementById('input-project').value;
    let startdate = document.getElementById('input-date-start').value;
    let enddate = document.getElementById('input-date-end').value;
    let description = document.getElementById('input-description').value;
    let Tech1 = document.getElementById('Tech1').checked;
    let Tech2 = document.getElementById('Tech2').checked;
    let Tech3 = document.getElementById('Tech3').checked;
    let Tech4 = document.getElementById('Tech4').checked;
    let image = document.getElementById('imageproject').files[0];


   startdate = new Date(startdate).getMonth()
   enddate = new Date(enddate).getMonth()



    image = URL.createObjectURL(image)

    // Validation value
    if(name == ''){
        alert('Nama Required...');
        return
    } 
    if(startdate == ''){
        alert('Startdate Required...');
        return
    } 
    if(enddate == ''){
        alert('Enddate Required...');
        return
    } 
    if(description == ''){
        alert('Description Project Required...');
        return
    } 
    if(image == ''){
        alert('image Required...');
        return
    } 

    alert('Are you sure filled out?');

    // Grouping by Object
    let myProject = {
        name,
        disTime : enddate - startdate,
        description,
        Tech1,
        Tech2,
        Tech3,
        Tech4,
        image,    
    }

    
    Projects.push(myProject)

    renderProject()
}

function renderProject() {let projectWrapper = document.getElementById('contents');

projectWrapper.innerHTML = ''


for (let i = 0; i < Projects.length; i++) {

    projectWrapper.innerHTML +=` 
    
            <div class="list-items">
                    <div class="item">
                        <div class="image">
                            <img src="${Projects[i].image}" class="card-img-top" alt="...">
                        <div class="card-body2">
                        <h5><a href="Detail Project.html">
                        ${Projects[i].name}
                        </a></h5>
                            <p class="card-text" style="text-align: center;">${Projects[i].description}</p>
                            <p style="text-align: Right; margin-right: 10px">${Projects[i].disTime} Months </p>
                        <div class="icon2">
                            <i>${Projects[i].Tech1?`<img src="./assets/img/React.png" alt="" >`: ""}</i>
                            <i>${Projects[i].Tech2?`<img src="./assets/img/Node.png" alt="" >`: ""}</i>
                            <i>${Projects[i].Tech3?`<img src="./assets/img/javascript.png" alt="" >`: ""}</i>
                            <i>${Projects[i].Tech4?`<img src="./assets/img/TS.png" alt="" >`: ""}</i>
                        </div>
                        <div class="button">
                            <div class="left-button">
                                <button>Edit</button>
                            </div>
                            <div class="right-button">
                                <button>Delete</button>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
            </div>
    
                `
    }
}

    
   
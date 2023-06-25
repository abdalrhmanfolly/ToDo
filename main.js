/*let div = document.querySelector('div');

function cont()
{
    div.innerHTML -= 1;
    if (div.innerHTML === "0")
    {
        clearInterval(conrter)
    }
}
let conrter = setInterval(cont, 1);
*//*
console.log(location.host)
console.log(location.hostname)
*/
/*
setTimeout(function ()
{
    window.open("https://www.google.com/", "_blank", "width=200,height=400,left=300,top=100")
},2000);  
*//*
undefined = window.localStorage.setItem("color", "green");
console.log(undefined)
console.log(window.localStorage)
console.log(window.localStorage.getItem("color"));
window.localStorage.fontwight = "bold";
window.localStorage["typeof"] = "object";
document.body.style.backgroundColor = window.localStorage.getItem("color");


console.log(window.localStorage.fontwight);
console.log(window.localStorage)
*/
/*
let selectulli = document.querySelectorAll(" ul li ");
let exp = document.querySelector(".experiment")
selectulli.forEach((Ele) =>
{
    Ele.addEventListener("click", (e2) =>
    {
        //console.log(e2.currentTarget.dataset.color)
        selectulli.forEach((e) =>
        {
            e.classList.remove("active");
        })
        e2.currentTarget.classList.add("active");

        window.localStorage.setItem("color", e2.currentTarget.dataset.color)

        exp.style.backgroundColor = e2.currentTarget.dataset.color;
        
    })
})/**/
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

//emte array to store the tasks

let arrayOfTasks = [];

if (localStorage.getItem("tasks"))
{
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}

getdatafromlocalestorage();





submit.onclick = function ()
{
    if (input.value !== "")
    {
        addtaskToArray(input.value);//add task to array of tasks
        input.value = "";
    } 
}

tasksDiv.addEventListener("click",(e)=> {
    if (e.target.classList.contains("delet"))
    {
        deletTaskeWITh(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove()
        
    
    }

    if (e.target.classList.contains("task"))
    { 
        togglestatustaskwithid(e.target.getAttribute("data-id"))
        
        e.target.classList.toggle("done")

    }
})



function addtaskToArray(taskText)
{
    //  task data
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    //push tasks to array of tasks 
    arrayOfTasks.push(task);

    // Add tasks to document page

    addElementTOpageFrom(arrayOfTasks);

    addDataToLOcalestoragefrom(arrayOfTasks)


}

function addElementTOpageFrom(arrayOfTasks)
{
    tasksDiv.innerHTML = "";

    //looping of arrayoftaasks
    arrayOfTasks.forEach((task) =>
    {
        let div = document.createElement("div");
        div.className = "task";

        if (task.completed)
        {
            div.className = "task done";
        }

        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title))
        let span = document.createElement("span");
        span.className = "delet";
        span.appendChild(document.createTextNode("Delete"));
        div.appendChild(span)
        tasksDiv.appendChild(div) 

    })
}
function addDataToLOcalestoragefrom(arrayOfTasks)
{
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));

}
function getdatafromlocalestorage()
{
    let data = window.localStorage.getItem("tasks");
    if (data)
    {
        let tasks = JSON.parse(data);
        addElementTOpageFrom(tasks)
    }
} 


function deletTaskeWITh(taskId)
{
    /*
    for (let i = 0; i < arrayOfTasks.length;i++)
    {
        console.log(`${arrayOfTasks[i].id} === ${taskId}`)
    }
    */
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId)
    addDataToLOcalestoragefrom(arrayOfTasks)
}


function togglestatustaskwithid(taskId)
{
    for (let i = 0; i < arrayOfTasks.length; i++)
    {
        if (arrayOfTasks[i].id == taskId)
        {
            arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
        }
    }
    addDataToLOcalestoragefrom(arrayOfTasks);
}


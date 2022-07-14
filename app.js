let task = document.querySelector("#task_input");

task.addEventListener('keypress', (e) => {
    if(e.which === 13) addTask();
})

const addTask = () => {
    let error = document.querySelector("#error_box");
    if(task.value === ""){
        error.innerText = "Enter value!"
        return;
    } 
    error.innerText = ""
    let ul = document.querySelector("#tasks");
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = task.value;
    p.className = "flex-grow-1"
    li.appendChild(p)
    
    li.className = "task_list d-flex p-1"
    
    let update = document.createElement("button")
    update.innerHTML = "Update"
    update.className = "btn btn-info btn_update p-2 "
    li.appendChild(update)
    
    let done = document.createElement("button")
    done.innerHTML = "❌"
    done.className = "btn btn-warning btn_done"
    li.appendChild(done)
    
    let pos = ul.firstChild;
    if(pos)
        ul.insertBefore(li, pos);
    else
        ul.appendChild(li) 
    task.value = ""
}


let ul = document.querySelector("#tasks")
ul.addEventListener("click" , (e) => {
    let toRemove = e.target.parentNode;
    if(e.target.innerText === '❌'){
        ul.removeChild(toRemove)
    }
    else if(e.target.innerText === 'Update'){
        let text = toRemove.firstChild.innerText;        // bcz toRemove.firstChild is of type [object text]
        console.log(text);
        let taskInput = document.querySelector("#task_input");
        taskInput.value = text;
        taskInput.focus();
        ul.removeChild(toRemove)
    }
})
const ulTag = document.querySelector(".task-list")
const addTask = document.forms["add-task"]
addTask.addEventListener("submit",(event) => {
    event.preventDefault()
    const task = addTask.querySelector("input").value.toString()
    

    if (task) {
        const liTag = document.createElement("li")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        const deleteBtn = document.createElement("button")
        const pTag = document.createElement("p")
        pTag.textContent = task
        deleteBtn.textContent = "Delete"

        pTag.classList = "task"
        checkbox.classList = "tasks-check"
        deleteBtn.classList = "delete-btn"

        liTag.appendChild(checkbox)
        liTag.appendChild(pTag)
        liTag.appendChild(deleteBtn)
        ulTag.prepend(liTag)
        console.log(ulTag)
        addTask.reset()

    }
})

const checkbox = document.querySelector(".tasks-check")


console.log(checkbox)
checkbox.addEventListener("click", (event) =>{
    event.preventDefault()
    document.querySelector(".task").style.textDecoration="line-through"; 
    document.querySelector(".task").style.color = "28a745"; 
})


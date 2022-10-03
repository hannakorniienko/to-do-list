const form = document.querySelector("form");
const list = document.querySelector("ul");
let borderColor = ""

const toggleForm = () => {
    document.querySelector("#addBtn").style.display = "inline"
    document.querySelector("#saveBtn").style.display = "none"
    form.style.display = form.style.display === "block" ? "none" : "block"
}

const addItem = () => {
    const title = document.querySelector("#title").value
    const date = document.querySelector("#date").value
    const status = document.querySelector("#status").value
    const listItem = document.createElement("li")
    listItem.innerHTML = `<h4>${title}</h4> <p>Deadline: ${date}</p>`
    listItem.classList.add("todo__item")
    switchColor()
    listItem.style.borderLeft = `4px solid ${borderColor}`
    list.appendChild(listItem)
    insertEditBtn(listItem, title, date, status)
    resetForm()
}

const insertEditBtn = (listItem, title, date, status) => {
    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    editBtn.addEventListener("click", () => {
        form.style.display = "block"
        document.querySelector("#title").value = title
        document.querySelector("#date").value = date
        document.querySelector("#status").value = status
    })
    document.querySelector("#addBtn").style.display = "none"
    document.querySelector("#saveBtn").style.display = "inline"
    form.appendChild(saveBtn)
    listItem.appendChild(editBtn)
}

/* const onEdit = () => {
    
}*/

const resetForm = () => {
    form.style.display = "none"
    document.querySelector("#title").value = ""
    document.querySelector("#date").value = ""
    document.querySelector("#status").value = ""
}

const switchColor = () => {
    const status = document.querySelector("#status").value
    switch (status) {
        case "done":
            borderColor = "green"
            break
        case "in progress":
            borderColor = "orange"
            break
        case "not started":
            borderColor = "red"
            break
        default:
            borderColor = "white"
    }
}

function closeForm() {
    document.querySelector("form").style.display = "none";
}
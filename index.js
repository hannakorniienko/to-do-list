const form = document.querySelector("form")
const list = document.querySelector("ul")
const title = document.querySelector("#title")
const date = document.querySelector("#date")
const status = document.querySelector("#status")
const lists = document.getElementsByClassName("todo__item")
let boderColor = ""
let currentItem
const itemsList = []

const toggleForm = () => {
    document.querySelector("#addBtn").style.display = "inline"
    document.querySelector("#saveBtn").style.display = "none"
    form.style.display = form.style.display === "block" ? "none" : "block"
}

const addItem = () => {
    if (itemsList.includes(title.value) === true) {
        alert("Title should be unique!")
        return;
    } if (title.value === "") {
        alert("Write the title!")
        return;
    } if (date.value === "") {
        alert("Choose the deadline date!")
        return;
    } if (status.value === "") {
        alert("Choose the status!")
        return;
    } else {
        const listItem = createItem()
        list.appendChild(listItem)
        resetForm()
    }
}

const createItem = () => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `<h4>${title.value}</h4><p>${date.value}</p><p>${status.value}</p>`
    listItem.classList.add("todo__item")
    switchColor()
    listItem.style.borderLeft = `5px solid ${boderColor}`
    insertEditBtn(listItem)
    insertDeleteBtn(listItem)
    listItem.id = `${title.value}`+`${date.value}`+`${status.value}`
    itemsList.push(title.value)
    return listItem
}

const insertEditBtn = (listItem) => {
    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    editBtn.addEventListener("click", () => {
        form.style.display = "block"
        title.value = listItem.querySelector("h4").innerText
        date.value = listItem.querySelector("p").innerText
        status.value = listItem.querySelector("p").innerText
        currentItem = listItem
        document.querySelector("#addBtn").style.display = "none"
        document.querySelector("#saveBtn").style.display = "inline"
    })
    listItem.appendChild(editBtn)
}

const insertDeleteBtn = (listItem) => {
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    listItem.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", () => {
        listItem.remove()
    })
}

const onEdit = () => {
    const parent = currentItem.parentNode /*  li  --> ul*/
    const editedItem = createItem()
    parent.replaceChild(editedItem, currentItem)
    resetForm()
}

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
            boderColor = "green"
            break
        case "in progress":
            boderColor = "orange"
            break
        case "not started":
            boderColor = "red"
            break
        default:
            boderColor = "white"
    }
}

function closeForm() {
    document.querySelector("form").style.display = "none";
}
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    const tasks = [];
    const taskElements = document.querySelectorAll("#list-container li");
    
    taskElements.forEach((taskElement) => {
        tasks.push({
            text: taskElement.textContent,
            checked: taskElement.classList.contains("checked"),
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    storedTasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.checked) {
            li.classList.add("checked");
        }

        const span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    });
}

loadTasks();
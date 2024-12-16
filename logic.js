// Get required DOM elements
const inputBox = document.getElementById("addText");
const addButton = document.getElementById("add");
const listContainer = document.getElementById("list-container");

// Add task to the list
addButton.addEventListener("click", () => {
    const task = inputBox.value.trim();
    if (task === "") {
        alert("Please enter a valid task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = task;

    // Add delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    // Append list item to the container
    listContainer.appendChild(li);

    // Clear input field
    inputBox.value = "";

    // Save tasks to local storage
    saveTasks();
});

// Mark task as completed or delete
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveTasks();
    }
});

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load tasks from local storage
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

// Load tasks on page load
loadTasks();

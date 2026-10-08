function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // Mark task as completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    // Delete task
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Add list item to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    taskInput.value = "";
}
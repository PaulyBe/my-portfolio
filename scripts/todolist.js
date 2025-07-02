document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            taskInput.focus();
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${escapeHtml(taskText)}</span>
            <button class="deleteBtn" aria-label="Delete task">×</button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = "";
        taskInput.focus();
        saveTasks();
        updateEmptyState();
    }

    // Delete task function
    function deleteTask(taskElement) {
        taskElement.style.animation = "slideOut 0.3s ease-in forwards";
        setTimeout(() => {
            taskElement.remove();
            saveTasks();
            updateEmptyState();
        }, 300);
    }

    // Event listeners
    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("deleteBtn")) {
            deleteTask(e.target.parentElement);
        }
    });

    addTaskBtn.addEventListener("click", addTask);
    
    // Add task on Enter key press
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll("li span").forEach(span => {
            tasks.push(span.textContent);
        });
        localStorage.setItem("todoTasks", JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem("todoTasks");
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach(taskText => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <span>${escapeHtml(taskText)}</span>
                    <button class="deleteBtn" aria-label="Delete task">×</button>
                `;
                taskList.appendChild(li);
            });
        }
        updateEmptyState();
    }

    // Update empty state message
    function updateEmptyState() {
        const existingEmptyState = document.querySelector(".empty-state");
        if (existingEmptyState) {
            existingEmptyState.remove();
        }

        if (taskList.children.length === 0) {
            const emptyState = document.createElement("div");
            emptyState.className = "empty-state";
            emptyState.textContent = "No tasks yet. Add one above to get started!";
            taskList.appendChild(emptyState);
        }
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    // Initialize
    loadTasks();
    taskInput.focus();
});

// Add CSS animation for slide out effect
const style = document.createElement("style");
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);
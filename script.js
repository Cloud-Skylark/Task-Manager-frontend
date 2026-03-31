const API_URL = "http://localhost:8080/api/tasks";

async function fetchTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    
    document.getElementById('taskCount').textContent = `${tasks.length} tasks total`;

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span class="task-text ${task.completed ? 'completed' : ''}" onclick="toggleTask(${task.id}, ${task.completed}, '${task.title}')">
                ${task.title}
            </span>
            <div class="actions">
                <button class="status-btn" onclick="toggleTask(${task.id}, ${task.completed}, '${task.title}')">
                    <i class="fas ${task.completed ? 'fa-undo' : 'fa-check'}"></i>
                </button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById('taskInput');
    if(!input.value) return;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: input.value, completed: false })
    });
    input.value = '';
    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks();
}

// Update (Toggle) logic
async function toggleTask(id, currentStatus, title) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, completed: !currentStatus })
    });
    fetchTasks();
}

fetchTasks();
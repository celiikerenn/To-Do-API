const API_URL = 'http://localhost:5000/tasks';

document.addEventListener('DOMContentLoaded', () => {
  fetchTasks();

  document.getElementById('task-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('new-task');
    if (input.value.trim()) {
      addTask(input.value.trim());
      input.value = '';
    }
  });
});

function fetchTasks() {
  fetch(API_URL)
    .then(res => res.json())
    .then(tasks => {
      const list = document.getElementById('task-list');
      list.innerHTML = '';
      tasks.forEach(task => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        checkbox.onchange = () => updateTask(task.id, task.title, checkbox.checked);

        const span = document.createElement('span');
        span.textContent = task.title;
        if (task.done) span.style.textDecoration = 'line-through';

        const editBtn = document.createElement('button');
        editBtn.textContent = '📝';
        editBtn.onclick = () => {
          const newTitle = prompt("Yeni görev adı:", task.title);
          if (newTitle) updateTask(task.id, newTitle, checkbox.checked);
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑';
        deleteBtn.onclick = () => deleteTask(task.id);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
    });
}

function addTask(title) {
  fetch(API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title })
  }).then(fetchTasks);
}

function deleteTask(id) {
  fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then(fetchTasks);
}

function updateTask(id, title, done) {
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, done })
  }).then(fetchTasks);
}



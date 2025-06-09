document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value.trim();

    if (!name || !age || !grade) {
        alert("Please fill all fields");
        return;
    }

    addStudent(name, age, grade);
    this.reset();
});

function addStudent(name, age, grade) {
    const table = document.querySelector('#studentTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${grade}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    row.querySelector('.delete-btn').addEventListener('click', function () {
        table.removeChild(row);
    });

    table.appendChild(row);
}


"users"[
  {
    id: 169999999,
    firstName: "Pradip",
    lastName: "Kakde",
    email: "pradip@gmail.com"
  }
]

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUser() {
    let id = document.getElementById("userId").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;

    let users = getUsers();

    if (id) {
        // UPDATE
        users = users.map(user =>
            user.id == id ? { id, firstName, lastName, email } : user
        );
    } else {
        // CREATE
        users.push({
            id: Date.now(),
            firstName,
            lastName,
            email
        });
    }

    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    displayUsers();
}

function displayUsers() {
    let users = getUsers();
    let tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    users.forEach(user => {
        tableBody.innerHTML += `
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>
                    <button class="edit" onclick="editUser(${user.id})">Edit</button>
                    <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editUser(id) {
    let users = getUsers();
    let user = users.find(u => u.id == id);

    document.getElementById("userId").value = user.id;
    document.getElementById("firstName").value = user.firstName;
    document.getElementById("lastName").value = user.lastName;
    document.getElementById("email").value = user.email;
}

function deleteUser(id) {
    let users = getUsers().filter(user => user.id != id);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

function clearForm() {
    document.getElementById("userId").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
}

displayUsers();


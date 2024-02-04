function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var food = document.getElementById("food").value;

    if (name === "") {
        alert("Name is required");
        return false;
    }
    if (age === "") {
        alert("Age is required");
        return false;
    } else if (age < 1) {
        alert("Age should be a positive number");
        return false;
    }
    if (gender === "") {
        alert("Gender is required");
        return false;
    }
    if (food === "") {
        alert("Food is required");
        return false;
    }
    return true;
}

function showData() {
    var peopleList;

    if (localStorage.getItem("peopleList") === null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.gender + "</td>";
        html += "<td>" + element.food + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData() {
    if (validateForm()) {
        var nameValue = document.getElementById("name").value;
        var ageValue = document.getElementById("age").value;
        var genderValue = document.getElementById("gender").value;
        var foodValue = document.getElementById("food").value;

        var peopleList;

        if (localStorage.getItem("peopleList") === null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: nameValue,
            age: ageValue,
            gender: genderValue,
            food: foodValue,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("food").value = "";
    }
}


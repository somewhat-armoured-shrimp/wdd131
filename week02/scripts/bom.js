const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list") //what????? ok

const li = document.createElement("li");

const deleteButton = document.createElement("button");

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener("click", function () {
    // Code to execute when the button is clicked
    if (input.value.trim() !== "") {

        li.textContent = input.value;

        deleteButton.textContent = "❌";

        li.append(deleteButton);

        list.append(li);
    }

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

    input.value = "";
    input.focus();
});
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list") //what????? ok

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener("click", function () {
    // Code to execute when the button is clicked
    if (input.value.trim() !== "") {

        const deleteButton = document.createElement("button");

        const li = document.createElement("li");

        li.textContent = input.value;

        deleteButton.textContent = "❌";

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);

        list.append(li);
    }

    input.value = "";
    input.focus();
});
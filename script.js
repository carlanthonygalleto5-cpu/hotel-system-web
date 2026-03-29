function bookRoom() {
    let name = document.getElementById("name").value;

    if(name === "") {
        document.getElementById("output").innerText = "Please enter your name.";
    } else {
        document.getElementById("output").innerText = 
        "Room booked successfully for " + name;
    }
}

var socket = io();

socket.on("connect", function () {
    console.log("Connected to server");

    socket.emit("createMessage", {
        from: "jen@example.com",
        text: "Hey. This is Steven."
    });
});

socket.on("disconnect", function () {
    console.log("Disconnected from server");
});

socket.on("newMessage", function (Message) {
    console.log("New message", Message);
});
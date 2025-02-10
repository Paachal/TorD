async function play(choice) {
    const response = await fetch("/play", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `choice=${choice}`,
    });
    const data = await response.json();

    // Update the player's name
    const playerNameElement = document.getElementById("player-name");
    playerNameElement.innerText = `${data.next_player}, it's your turn!`;

    // Force the animation to restart
    playerNameElement.style.animation = "none"; // Reset animation
    void playerNameElement.offsetWidth; // Trigger reflow to restart animation
    playerNameElement.style.animation = "slideIn 0.5s ease-out"; // Reapply animation

    // Display the question directly on the page
    const questionElement = document.getElementById("question");
    questionElement.innerText = data.question;
}
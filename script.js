const recommendations = {
    beach: [
        { name: "Maldives", image: "images/maldives.jpeg" },
        { name: "Bora Bora", image: "images/bora-bora.jpeg" }
    ],
    temple: [
        { name: "Golden Temple", image: "images/goldentemple.jpeg" },
        { name: "Angkoe Wat", image: "images/angkoewat.jpeg" }
    ],
    country: [
        { name: "Japan", image: "images/japan.jpeg" },
        { name: "Italy", image: "images/italy.jpeg" }
    ]
};

// Function to display recommendations based on user selection
function displayRecommendations(type) {
    const container = document.getElementById("recommendations");
    container.innerHTML = ""; // Clear previous recommendations

    recommendations[type].forEach(rec => {
        const img = document.createElement("img");
        img.src = rec.image;
        img.alt = rec.name;
        img.style.width = "200px"; // Set image width
        img.style.margin = "10px"; // Set margin

        const title = document.createElement("h3");
        title.textContent = rec.name;

        container.appendChild(title);
        container.appendChild(img);
    });
}

// Example of how to use the function
// You could call this function based on user interaction, like a button click
// For example, you can create buttons for users to select their preference
document.addEventListener("DOMContentLoaded", () => {
    const beachButton = document.getElementById("beachButton");
    const templeButton = document.getElementById("templeButton");
    const countryButton = document.getElementById("countryButton");

    beachButton.addEventListener("click", () => displayRecommendations("beach"));
    templeButton.addEventListener("click", () => displayRecommendations("temple"));
    countryButton.addEventListener("click", () => displayRecommendations("country"));
});
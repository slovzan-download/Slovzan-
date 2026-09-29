document.addEventListener("DOMContentLoaded", () => {

    const webAppButton = document.getElementById("webAppButton");
    const cards = document.querySelectorAll(".download-card");

    const userAgent = navigator.userAgent.toLowerCase();

    let device = "desktop";

    if (/android/.test(userAgent)) {
        device = "android";
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
        device = "ios";
    } else if (/windows/.test(userAgent)) {
        device = "windows";
    } else if (/macintosh|mac os x/.test(userAgent)) {
        device = "macos";
    } else if (/linux/.test(userAgent)) {
        device = "linux";
    }

    const deviceNames = {
        android: "Android",
        ios: "iPhone & iPad",
        windows: "Windows",
        macos: "macOS",
        linux: "Linux"
    };

    cards.forEach((card) => {

        const title = card.querySelector("h2");

        if (!title) return;

        const cardName = title.textContent.trim();

        let matches = false;

        if (device === "android" && cardName === "Android") {
            matches = true;
        }

        if (device === "ios" && cardName === "iPhone & iPad") {
            matches = true;
        }

        if (device === "windows" && cardName === "Windows") {
            matches = true;
        }

        if (device === "macos" && cardName === "macOS") {
            matches = true;
        }

        if (device === "linux" && cardName === "Linux") {
            matches = true;
        }

        if (matches) {

            card.classList.add("your-device");

            const badge = document.createElement("div");
            badge.className = "your-device-badge";
            badge.textContent = "YOUR DEVICE";

            card.appendChild(badge);
        }
    });

    webAppButton.addEventListener("click", () => {
        alert("SLOVZAN Web App link will be added here.");
    });

});

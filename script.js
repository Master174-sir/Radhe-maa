const text = "ℍ𝕚 𝕀 𝕒𝕞 𝕒 𝕄𝔸𝕊𝕋𝔼ℝ ℍ𝔸ℂ𝕂𝔼ℝ 𝔸ℕ𝔻 ℕ𝕆𝕎 𝕐𝕆𝕌ℝ 𝔻𝔼𝕍𝕀ℂ𝔼 𝕀𝕊 𝔾𝕆𝕀ℕ𝔾 𝕋𝕆 𝔹𝔼 ℍ𝔸ℂ𝕂𝔼𝔻";
let index = 0;
const speed = 100; // Typing speed in ms

function typeEffect() {
    if (index < text.length) {
        document.getElementById("hacker-text").innerHTML += text[index];
        index++;
        setTimeout(typeEffect, speed);
    }
}

// Start typing effect when page loads
window.onload = () => {
    setTimeout(typeEffect, 1000);
};
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size to fill the entire screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the characters and colors
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#';
const columns = canvas.width / 20; // Number of columns
const drops = [];

// Initialize the drops array
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Function to draw the matrix effect
function drawMatrix() {
    // Set the background color to black with slight transparency
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0'; // Green color
    ctx.font = '20px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        // Get random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Draw the character at the drop's current position
        ctx.fillText(char, i * 20, drops[i] * 20);
        
        // Reset the drop position once it reaches the bottom of the canvas
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move the drop down
        drops[i]++;
    }
}

// Call the drawMatrix function repeatedly
setInterval(drawMatrix, 35);

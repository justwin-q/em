// Cấu hình nội dung thiệp mặc định
const defaultGreeting = {
    recipient: "My Vân Anh",
    title: "Happy Late Birthday, My Baby! 🎂✨",
    body: "Chúc em tuổi mới có thật nhiều niềm vui và hạnh phúc. Mong cho em sẽ đạt được nhiều thành tích tốt trong con đường đại học và chúc em có thật nhiều sức khỏe. Mong là chúng mình sẽ đồng hành cùng nhau thật hạnh phúc trong con đường này. Mình yêu em nhiều. I love you so much my baby. 💕",
    signature: "Yêu em thật nhiều ❤️"
};

// Hàm khởi tạo và tải nội dung thiệp
function initCard() {
    const savedGreeting = localStorage.getItem("custom_greeting");
    const data = savedGreeting ? JSON.parse(savedGreeting) : defaultGreeting;
    
    updateCardDOM(data);
}

function updateCardDOM(data) {
    const recipientEl = document.getElementById("cardRecipient");
    const titleEl = document.getElementById("cardTitle");
    const bodyEl = document.getElementById("cardBody");
    const sigEl = document.getElementById("cardSignature");

    if (recipientEl) recipientEl.textContent = data.recipient || defaultGreeting.recipient;
    if (titleEl) titleEl.textContent = data.title || defaultGreeting.title;
    if (bodyEl) bodyEl.textContent = data.body || defaultGreeting.body;
    if (sigEl) sigEl.textContent = data.signature || defaultGreeting.signature;
}

document.addEventListener("DOMContentLoaded", initCard);

const SECRET_KEY = "Sarah.ags";

function encryptMessage(message) {
  return CryptoJS.AES.encrypt(message, SECRET_KEY).toString();
}

function decryptMessage(encryptedMessage) {
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}

function addMessage(sender, message) {
  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messagesDiv.appendChild(messageDiv);
}

document.getElementById("message-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const message = document.getElementById("message").value;
  const encryptedMessage = encryptMessage(message);

  addMessage("Você", message);

  const decryptedMessage = decryptMessage(encryptedMessage);
  addMessage("Usuário B", decryptedMessage);

  document.getElementById("message").value = "";
});

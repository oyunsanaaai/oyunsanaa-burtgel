
document.getElementById("submit").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const code = document.getElementById("code").value.trim();
  const pack = document.getElementById("package").value;

  if (!username || !code) {
    alert("Бүх талбарыг бөглөнө үү!");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("code_used", code);
  localStorage.setItem("package", pack);
  localStorage.setItem("chat_unlocked", "true");

  window.location.href = "/oyunsanaa-chat"; // Чат хуудас руу
});

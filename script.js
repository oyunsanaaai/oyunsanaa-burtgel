
document.addEventListener("DOMContentLoaded", () => {
  const code = "OS-" + Math.random().toString(36).substr(2, 6).toUpperCase();
  document.getElementById("regCode").value = code;

  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", (e) => {
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const birthYear = form.birthYear.value.trim();
    const ageGroup = form.ageGroup.value.trim();
    if (!phone && !email) {
      e.preventDefault();
      alert("Утас эсвэл имэйл заавал бөглөнө.");
    }
    if (!birthYear && !ageGroup) {
      e.preventDefault();
      alert("Төрсөн он эсвэл насны ангилал бөглөнө.");
    }
  });
});

function generateRegCode() {
  const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  document.getElementById("regCode").value = "OS-" + randomCode;
}

window.onload = generateRegCode;

document.getElementById("registration-form").addEventListener("submit", function (e) {
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  if (phone === "" && email === "") {
    e.preventDefault();
    alert("Утас эсвэл имэйл хаяг заавал нэгийг бөглөнө үү.");
  }
});


function generateRegCode(prefix = "OS", length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${prefix}-${code}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const regCodeInput = document.getElementById("regCode");
  if (regCodeInput) {
    regCodeInput.value = generateRegCode();
  }
});

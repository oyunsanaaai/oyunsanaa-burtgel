<script>
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;
  const birthYear = document.getElementById('birthYear').value;
  const zodiac = document.getElementById('zodiac').value;
  const userPackage = document.getElementById('package').value;

  const userData = {
    name: name,
    gender: gender,
    birthYear: birthYear,
    zodiac: zodiac,
    package: userPackage
  };

  console.log("🎉 Бүртгэлийн дата:", userData);

  // Дараа нь backend, localStorage, admin DB рүү дамжуулж болно
});
</script>

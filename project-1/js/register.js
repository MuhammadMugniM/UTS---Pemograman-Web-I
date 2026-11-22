const regForm = document.getElementById("register-form");
const alertBox = document.getElementById("register-alert");

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const result = handleRegisterProcess(nama, email, password, confirmPassword);

  alertBox.textContent = result.message;
  alertBox.className = `mt-5 p-3.5 text-xs font-mono border ${
    result.success
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"
      : "bg-rose-500/15 text-rose-300 border-rose-500/40"
  }`;

  if (result.success) {
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  }
});

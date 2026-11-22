const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const autofillBtn = document.getElementById("autofill-demo-btn");
const alertBox = document.getElementById("login-alert");

function showAlert(message, isSuccess) {
  alertBox.textContent = message;
  alertBox.className = `mt-5 p-3.5 text-xs font-mono border ${
    isSuccess
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"
      : "bg-rose-500/15 text-rose-300 border-rose-500/40"
  }`;
}

// Autofill akun demo
autofillBtn.addEventListener("click", () => {
  emailInput.value = "admin@skywing.id";
  passwordInput.value = "admin123";
  showAlert("Kredensial akun demo berhasil diisi. Klik tombol Masuk.", true);
});

// Submit Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = handleLoginProcess(emailInput.value, passwordInput.value);

  if (result.success) {
    window.location.href = "dashboard.html";
  } else {
    showAlert(result.message, false);
  }
});

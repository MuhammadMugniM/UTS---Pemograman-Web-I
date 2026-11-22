/**
 * Modul Autentikasi (Login, Registrasi, Sesi & Proteksi Halaman)
 * Manajemen sesi dan otentikasi pilot
 */

const STORAGE_USERS_KEY = "skywing_registered_users";
const SESSION_USER_KEY = "skywing_active_session";

const DEMO_ACCOUNT = {
  nama: "Kapten Penguji",
  email: "admin@skywing.id",
  password: "admin123",
  role: "Instruktur Utama / Evaluator"
};

/**
 * Mengambil daftar akun yang terdaftar di localStorage
 */
function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

/**
 * Menyimpan daftar akun ke localStorage
 */
function saveRegisteredUsers(users) {
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

/**
 * Mengambil sesi login aktif dari sessionStorage
 */
function getActiveSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

/**
 * Validasi dan otentikasi login
 */
function handleLoginProcess(emailInput, passwordInput) {
  const email = (emailInput || "").trim().toLowerCase();
  const password = (passwordInput || "").trim();
  const registeredUsers = getRegisteredUsers();

  const matchedUser = registeredUsers.find(
    (u) => u.email.toLowerCase() === email && u.password === password
  );

  if (!email || !password) {
    return {
      success: false,
      message: "Email dan password wajib diisi sebelum melakukan otorisasi."
    };
  } else if (email === DEMO_ACCOUNT.email && password === DEMO_ACCOUNT.password) {
    const sessionData = {
      nama: DEMO_ACCOUNT.nama,
      email: DEMO_ACCOUNT.email,
      role: DEMO_ACCOUNT.role,
      loginTime: new Date().toISOString()
    };
    sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(sessionData));
    return {
      success: true,
      user: sessionData
    };
  } else if (matchedUser) {
    const sessionData = {
      nama: matchedUser.nama,
      email: matchedUser.email,
      role: "Pilot Komunitas SkyWing",
      loginTime: new Date().toISOString()
    };
    sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(sessionData));
    return {
      success: true,
      user: sessionData
    };
  } else {
    return {
      success: false,
      message: "Email atau password salah"
    };
  }
}

/**
 * Validasi dan pendaftaran pilot
 */
function handleRegisterProcess(namaInput, emailInput, passwordInput, confirmInput) {
  const nama = (namaInput || "").trim();
  const email = (emailInput || "").trim().toLowerCase();
  const password = (passwordInput || "").trim();
  const confirmPassword = (confirmInput || "").trim();

  const registeredUsers = getRegisteredUsers();
  const isDuplicate =
    email === DEMO_ACCOUNT.email ||
    registeredUsers.some((u) => u.email.toLowerCase() === email);

  if (!nama || !email || !password || !confirmPassword) {
    return {
      success: false,
      message: "Seluruh kolom formulir registrasi wajib diisi."
    };
  } else if (password !== confirmPassword) {
    return {
      success: false,
      message: "Konfirmasi password tidak sama dengan password yang dimasukkan."
    };
  } else if (password.length < 6) {
    return {
      success: false,
      message: "Password minimal harus terdiri dari 6 karakter."
    };
  } else if (isDuplicate) {
    return {
      success: false,
      message: "Email sudah terdaftar di sistem SkyWing. Silakan gunakan email lain atau masuk."
    };
  } else {
    const newUser = {
      id: Date.now(),
      nama: nama,
      email: email,
      password: password,
      createdAt: new Date().toISOString()
    };
    registeredUsers.push(newUser);
    saveRegisteredUsers(registeredUsers);
    return {
      success: true,
      message: "Registrasi berhasil! Mengalihkan ke halaman login..."
    };
  }
}

/**
 * Proteksi halaman Dashboard (redirect ke login.html bila belum login)
 */
function requireAuth() {
  const session = getActiveSession();
  if (!session) {
    window.location.replace("login.html");
    return null;
  }
  return session;
}

/**
 * Logout dan hapus sesi dari sessionStorage
 */
function logoutUser() {
  sessionStorage.removeItem(SESSION_USER_KEY);
  window.location.href = "login.html";
}

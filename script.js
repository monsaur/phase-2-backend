const home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  loginBtn = document.querySelector("#loginButton"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  loginForm = document.querySelector(".login_form");

home.classList.add("show");

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  console.log("Login button clicked!")

  const loginFormElement = document.querySelector("form");
  const formData = new FormData(loginFormElement);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = "homepage.html";
    } else {
      const errorMessage = document.getElementById("error_message");
      errorMessage.style.display = "block";
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

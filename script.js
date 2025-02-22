const openModal = document.getElementById("openModal");
      const closeModal = document.getElementById("closeModal");
      const modal = document.getElementById("modal");
      const loginPage = document.querySelectorAll(".loginPage");
      const dashboard = document.querySelectorAll(".dashboard");
      const loginBtn = document.getElementById("loginBtn");

      openModal.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      });

      closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      });

      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.add("hidden");
          modal.classList.remove("flex");
        }
      });

      loginBtn.addEventListener("click", () => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const tel = document.getElementById("tel").value;

        if (username && tel && tel != "+998") {
          console.log("first");
          localStorage.setItem("user", username);
          loginPage.forEach((page) => {
            page.classList.add("hidden");
          });
          dashboard.forEach((dash) => {
            dash.classList.remove("hidden");
          });
        } else {
          alert("Ismingiz va telefon raqamingizni kiriting.");
        }
      });

      window.onload = () => {
        const savedUser = localStorage.getItem("user");
        const Nigina = document.getElementById("Nigina");
        if (savedUser) {
          loginPage.forEach((page) => {
            page.classList.add("hidden");
          });
          dashboard.forEach((dash) => {
            dash.classList.remove("hidden");
          });
          Nigina.classList.add("-bottom-26", "left-19");
          Nigina.classList.remove("bottom-30", "right-0");
        } else {
          loginPage.forEach((page) => {
            page.classList.remove("hidden");
          });
          dashboard.forEach((dash) => {
            dash.classList.add("hidden");
          });
        }
      };

      function changeImage() {
        const backgroundImg = document.getElementById("background-color");
        const teacherImg = document.getElementById("teacherImg");
        const teacherImgLoggedIn = document.getElementById(
          "teacherImg-loggedIn"
        );
        const backgroundColorRect = document.getElementById(
          "background-color-rect"
        );
        const Nigina = document.getElementById("Nigina");
        const width = window.innerWidth;

        if (width < 640) {
          backgroundImg.src = "./images/background-color-phone.svg";
          teacherImg.src = "./images/teacher-phone.svg";
          teacherImgLoggedIn.src = "./images/teacher-loggedIn-phone.svg";
          Nigina.classList.remove("hidden");
          backgroundColorRect.src = "./images/background-color-rect-phone.svg";
        } else {
          backgroundImg.src = "./images/background-color.svg";
          teacherImg.src = "./images/teacher.svg";
          teacherImgLoggedIn.src = "./images/teacher-loggedIn.svg";
          Nigina.classList.add("hidden");
          backgroundColorRect.src = "./images/background-color-rect.svg";
        }
      }

      window.addEventListener("resize", changeImage);
      window.addEventListener("load", changeImage);
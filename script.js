const eyeOpenL =
  "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z";
const eyeOpenR =
  "M208 31C208 47.5685 194.569 61 178 61C161.431 61 148 47.5685 148 31C148 14.4315 161.431 1 178 1C194.569 1 208 14.4315 208 31Z";
const eyeClosedL =
  "M60 0.000190258C60 16.5687 46.5685 30.0002 30 30.0002C13.4315 30.0002 0 16.5687 0 0.000190258C0 0.000190258 13.4315 5.5 30 5.5C46.5685 5.5 60 0.000190258 60 0.000190258Z";
const eyeClosedR =
  "M208 0.999969C208 17.5685 194.569 31 178 31C161.431 31 148 17.5685 148 0.999969C148 0.999969 161.431 9.00001 178 9.00001C194.569 9.00001 208 0.999969 208 0.999969Z";
const mouthOpen =
  "M77 60H130V73.5C130 88.1355 118.136 100 103.5 100C88.8645 100 77 88.1355 77 73.5V60Z";
const mouthClosed =
  "M77 30H130V30.3375C130 30.7034 118.136 31 103.5 31C88.8645 31 77 30.7034 77 30.3375V30Z";
const closedEyeLeft = document.querySelector(".eye-left");
const closedEyeRight = document.querySelector(".eye-right");
const closedMouth = document.querySelector(".mouth");
const face = document.querySelector(".innerSwitch");
const switchBG = document.querySelector(".switch-background");
const background = document.querySelector("body");
let switched = false;

const card = document.querySelector(".card");
const button_vanish = document.querySelector(".card__vanish");
const boxes = document.querySelectorAll(".box");
const btnDiggy = document.querySelector(".diggy");
const btnHorror = document.querySelector(".horror");
const btnChunky = document.querySelector(".chunky");
const btnHarlem = document.querySelector(".harlem");
const btnReset = document.querySelector(".reset");
const buttons = document.querySelectorAll(".btn");

const clearAnimation = (element) => {
  void element.offsetWidth;
};

face.addEventListener("click", () => {
  let howFarWidth = window.innerWidth > 400 ? 250 : 130;
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1050,
  });
  tl.add(
    {
      targets: [face],
      translateX: switched ? -1 : howFarWidth,
      rotate: switched ? -360 : 360,
      backgroundColor: switched ? "rgb(110,240,225)" : "rgb(243,255,148)",
    },
    500
  )
    .add(
      {
        targets: [switchBG, background],
        backgroundColor: switched ? "#17171D" : "#F5F3E3",
      },
      500
    )
    .add(
      {
        targets: ".eye-left",

        d: [
          {
            value: switched ? eyeClosedL : eyeOpenL,
          },
        ],
      },
      "-=1200"
    )
    .add(
      {
        targets: ".eye-right",
        d: [
          {
            value: switched ? eyeClosedR : eyeOpenR,
          },
        ],
      },
      "-=1210"
    )
    .add(
      {
        targets: ".mouth",
        d: [
          {
            value: switched ? mouthClosed : mouthOpen,
          },
        ],
      },
      "-=1210"
    );

  if (switched == true) {
    //if true
    if (switchBG.classList.contains("on-shadow")) {
      switchBG.classList.remove("on-shadow");
    }
    switchBG.classList.add("off-shadow");
    switched = false;
  } else {
    if (switchBG.classList.contains("off-shadow")) {
      switchBG.classList.remove("off-shadow");
    }
    switchBG.classList.add("on-shadow");
    switched = true;
  }
});

button_vanish.addEventListener("click", () => {
  button_vanish.classList.add("vanishOut");
  card.classList.add("vanishOut");
  setTimeout(() => {
    button_vanish.style.display = "none";
    card.style.display = "none";
    boxes.forEach((box) => box.classList.add("foolishIn"));

    setTimeout(() => {
      boxes.forEach((box) => {
        box.classList.remove("foolishIn");
        clearAnimation(box);
        box.style.opacity = "1";

        buttons.forEach((btn) => btn.classList.add("fadeIn"));

        setTimeout(() => {
          buttons.forEach((btn) => {
            btn.style.opacity = "1";
            btn.classList.remove("fadeIn");
            clearAnimation(btn);
            btn.classList.add("bouncy");
          });
        }, 2000);
      });
    }, 1000);
  }, 2500);
});

const clearButtons = (btn) => {
  if (btn.classList.contains("shakeChunky")) {
    btn.classList.remove("shakeChunky");
  } else if (btn.classList.contains("shakeHorror")) {
    btn.classList.remove("shakeHorror");
  } else if (btn.classList.contains("shakeHarlem")) {
    btn.classList.remove("shakeHarlem");
  } else if (btn.classList.contains("shakeDiggy")) {
    btn.classList.remove("shakeDiggy");
  }
  clearAnimation(btn);
};

btnDiggy.addEventListener("click", () => {
  boxes.forEach((box) => {
    clearButtons(box);
    box.classList.add("shakeDiggy");
  });
});

btnHorror.addEventListener("click", () => {
  boxes.forEach((box) => {
    clearButtons(box);
    box.classList.add("shakeHorror");
  });
});

btnChunky.addEventListener("click", () => {
  boxes.forEach((box) => {
    clearButtons(box);
    box.classList.add("shakeChunky");
  });
});
btnHarlem.addEventListener("click", () => {
  boxes.forEach((box) => {
    clearButtons(box);
    box.classList.add("shakeHarlem");
  });
});

btnReset.addEventListener("click", () => {
  boxes.forEach((box) => {
    clearButtons(box);
  });
});

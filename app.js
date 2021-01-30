const elements = document.querySelectorAll(".container .elements"),
  container = document.querySelector(".elements");

elements.forEach(el => {
  ranTop = Math.round(Math.random() * 90 + 1) + "%";
  ranLeft = Math.round(Math.random() * 90 + 1) + "%";
  el.style.top = ranTop;
  el.style.left = ranLeft;
  elMove(el, rand(20));
});
function elMove(el, rm) {
  el.style.transition = "3s linear";
  let corI = rm,
    n = 1;
  setInterval(() => {
    if (n % 2 == 0) {
      if (n % 2 == 0) {
        el.style.transform = `translate(${rand(corI)}px, ${rand(corI)}px`;
        n++;
      } else {
        el.style.transform = `translate(${rand(corI)}px, ${-rand(corI)}px)`;
        n++;
      }
    } else {
      if (n % 2 == 0) {
        el.style.transform = `translate(${-rand(corI)}px, ${rand(corI)}px)`;
        n++;
      } else {
        el.style.transform = `translate(${-rand(corI)}px, ${-rand(corI)}px)`;
        n++;
      }
    }
  }, 3000);
}
function rand(n) {
  return Math.round(Math.random() * n + 1);
}

//text animation

const text = document.querySelector(".text .p");
let typeStts = "done";

function runType(allText) {
  let alL = allText.length,
    i = 0;
  setInterval(() => {
    if (typeStts == "done") {
      typeStts = "on";
      if (i < alL) {
        type(allText[i]);
        i++;
      } else {
        i = 0;
        typeStts = "done";
      }
    }
  }, 100);
}

function type(textType) {
  let tx = [...textType],
    txL = tx.length,
    delay = 2,
    n = 0,
    tt = [];
  setInterval(() => {
    if (n < txL) {
      tt.push(tx[n]);
      txx = tt.join("");
      text.innerHTML = txx;
    } else if (n == txL) {
      tt.push(`<span class="cur"> |</span>`);
      txx = tt.join("");
      text.innerHTML = txx;
    } else {
      setTimeout(() => {
        if (txL >= 0) {
          tt[txL] = "";
          txx = tt.join("");
          text.innerHTML = txx;
        } else if (txL == -1) {
          tt.push(`<span class="cur"> |</span>`);
          txx = tt.join("");
          text.innerHTML = txx;
        } else if (txL == -delay) {
          setTimeout(() => {
            typeStts = "done";
          }, delay * 1000);
        }
        txL--;
      }, delay * 1000);
    }
    n++;
  }, 150);
}

// Theme
const h1 = document.querySelector(".container .text h1"),
  h2 = document.querySelector(".container .text h2"),
  p = document.querySelector(".container .text .p");

window.setTimeout("waktu()", 0);
function waktu() {
  let waktus = new Date();
  setTimeout("waktu()", 1000);
  let jam = waktus.getHours();
  let menit = waktus.getMinutes();

  if (menit < 10 && jam < 10) {
    h1.innerHTML = "0" + jam + "." + "0" + menit;
  } else if (menit < 10) {
    h1.innerHTML = jam + "." + "0" + menit;
  } else if (jam < 10) {
    h1.innerHTML = "0" + jam + "." + menit;
  } else {
    h1.innerHTML = jam + "." + menit;
  }
  let kata;
  if (jam <= 10) {
    if (jam <= 2) {
      kata = [
        "Wahh udah pagi aja",
        "Jangan begadang mulu uii",
        "Tidur diah tidur..."
      ];
    } else if (jam > 2 && jam <= 6) {
      kata = [
        "Pagi yang sangat indah :)",
        "Kuyy tidur lagi...",
        "Atau bangun boleh juga :v"
      ];
    } else {
      kata = [
        "Selamat pagi kaka",
        "Pagi yang indah untuk beraktivitas :)",
        "Semangat yuk semangat"
      ];
    }
    h2.innerHTML = "Pagi Diah";
  } else if (jam > 10 && jam <= 13) {
    if (jam <= 11) {
      kata = [
        "Tidur siang dulu kuyy",
        "Makan juga boleh :)",
        "Atau pura pura sibut :v"
      ];
    } else {
      kata = [
        "Inget makan",
        "Inget minum jugaa",
        "Dunia emang keras, Semangat :')"
      ];
    }
    h2.innerHTML = "Siang Diahh";
  } else if (jam > 13 && jam <= 19) {
    if (jam <= 16) {
      kata = [
        "Hari semakin menipis wkwk",
        "Nugas dulu nugas",
        "Tidur juga boleh"
      ];
    } else {
      kata = [
        "Senja yang indah...",
        "Seindah senyum diah eaa",
        "Udah udah, mending mandi"
      ];
    }
    h2.innerHTML = "Sore Diah";
  } else {
    if (jam <= 20) {
      kata = [
        "Tak kerasa matahari dah tengelam wkwk",
        "Makan dulu makan",
        "Semangat kaka"
      ];
    } else {
      kata = [
        "Malem enaknya ngapain ya?",
        "Enakan nonton aja kali ya",
        "Atau tidur hmm"
      ];
    }
    h2.innerHTML = "Malem Diah;
  }
  return kata;
}
runType(waktu());

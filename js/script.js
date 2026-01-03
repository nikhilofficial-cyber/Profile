let screenMode = document.querySelector("#screenMode");
let container = document.querySelectorAll(".container");
let textBlack = document.querySelectorAll(".tb");
let borderBlack = document.querySelectorAll(".bb");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let footer = document.querySelector("footer");
let navBtn3 = document.querySelector(".nav-btn-3");
let blackBox = document.querySelector(".blackbox");
let tb = document.querySelectorAll(".tb");
let navLink = document.querySelectorAll(".nav-link");
let mode = "light";
let cards = document.querySelectorAll(".card");
let tImg = document.querySelector(".top-img");
let mImg = document.querySelector(".middle-img");
const modechanger = () => {
  if (screenMode.innerText === "🌞") {
    lightMode();
    screenMode.innerText = "🌙";
  } else if (screenMode.innerText === "🌙") {
    darkMode();
    screenMode.innerText = "🌞";
  }
};
const lightMode = () => {
  body.style.backgroundColor = "#edeaea";

  tb.forEach((t) => {
    t.classList.remove("text-white");
    t.classList.add("text-black");
  });

  borderBlack.forEach((b) => {
    b.classList.remove("border-white");
    b.classList.add("border-black");
  });
  cards.forEach((card) => {
    card.classList.remove("surface-color");
    card.classList.add("surface-color2");
  });
  tImg.classList.remove("surface-color2");
  mImg.classList.remove("surface-color2");
};

const darkMode = () => {
  body.style.backgroundColor = "#091121";

  tb.forEach((t) => {
    t.classList.remove("text-black");
    t.classList.add("text-white");
  });

  borderBlack.forEach((b) => {
    b.classList.remove("border-black");
    b.classList.add("border-white");
  });
  cards.forEach((card) => {
    card.classList.remove("surface-color2");
    card.classList.add("surface-color");
  });
  tImg.classList.remove("surface-color");
  mImg.classList.remove("surface-color");
};
screenMode.addEventListener("click", modechanger);

navLink.forEach((link) => {
  link.addEventListener("click", function () {
    navLink.forEach((tab) => tab.classList.remove("active"));
    this.classList.add("active");
  });
});

// contact form messages sender
let contactForm = document.querySelector("#contactForm");

const webhookURL =
  "https://discord.com/api/webhooks/1444264886019428423/0ahLGPV-OaqEiwyTwedQK9niqe2CmaJII1AuoJID7Mu1_WYz9Mz5lMXHfXjFsxmo5frP";

let msg = document.querySelector("#msg");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  const message = {
    content:
      "**📩 New Portfolio Message Received!**\n" +
      "----------------------------------\n" +
      `👤 **Name:** ${formData.get("name")}\n` +
      `📧 **Email:** ${formData.get("email")}\n` +
      `📝 **Subject:** ${formData.get("subject")}\n` +
      `💬 **Message:** ${formData.get("message")}\n`,
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  }).then((res) => {
    if (res.ok) {
      messageSuccessful(this);
    } else {
      messageFailed(this);
    }
  });
});

const messageSuccessful = (form) => {
  msg.style.cssText = `
  display : block ;
  color : lime ;
  `;
  msg.innerText = "✔ Message Sent to Discord!";
  form.reset();

  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
};

const messageFailed = (form) => {
  msg.style.cssText = `
  display : block ;
  color : red ;
  `;
  msg.innerText = "❌ Failed to send message to Discord.";
  form.reset();

  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
};

// if ('scrollRestoration' in history) {
//   history.scrollRestoration = 'manual';
// }

// window.addEventListener('beforeunload', () => {
//   window.scrollTo(0, 0);
// });

// window.addEventListener('load', () => {
//   window.scrollTo(0, 0);
// });

// contact form messages sender Ends

// const infoWebhookURL =
//   "https://discord.com/api/webhooks/1444277898885332992/HOB1qFKaXAG-R1rsn2ktlYcLJhO7Bb5c6mj93D_QzvgwPwwPa5OATRxi-WTxSa2fRK-G";

// fetch("https://api.ipify.org?format=json")
//   .then((res) => res.json())
//   .then((data) => {
//     fetch(infoWebhookURL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         content: `🌍 New Visitor\nIP: ${data.ip}`,
//       }),
//     });
//   });
// const infowebhookURL = "YOUR_WEBHOOK";

// fetch("https://ipapi.co/json/")
//   .then((res) => res.json())
//   .then((data) => {
//     fetch(infoWebhookURL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         content: `
// 🌍 **New Visitor**
// IP: ${data.ip}
// City: ${data.city}
// Region: ${data.region}
// Country: ${data.country_name}
// Latitude: ${data.latitude}
// Longitude: ${data.longitude}
// ISP: ${data.org}
//         `,
//       }),
//     });
//   });

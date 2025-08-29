// Service data
const emergencyServices = [
  {
    name: "Anti-Corruption Helpline",
    nameEn: "Police",
    number: "999",
    icon: "../assets/police.png",
    category: "Emergency",
  },
  {
    name: "Fire Service Number",
    nameEn: "Fire Service",
    number: "16163",
    icon: "../assets/fire-service.png",
    category: "Emergency",
  },
  {
    name: "National Emergency Number",
    nameEn: "Ambulance",
    number: "1990",
    icon: "../assets/ambulance.png",
    category: "Medical",
  },
  {
    name: "BRAC Helpline Number",
    nameEn: "BRAC",
    number: "16161",
    icon: "../assets/brac.png",
    category: "Medical",
  },
  {
    name: "Bangladesh Railway Helpline ",
    nameEn: "Bangladesh Railway",
    number: "16784",
    icon: "../assets/Bangladesh-Railway.png",
    category: "Transport",
  },
  {
    name: "National Emergency Number",
    nameEn: "Emergency Services",
    number: "999",
    icon: "../assets/emergency.png",
    category: "Emergency",
  },
];

// State
let state = {
  heartCount: 0,
  coinCount: 100,
  copyCount: 0,
  history: [],
};

// Elements
const cardContainer = document.getElementById("card-container");
const historyContainer = document.getElementById("history-container");
const heartCountDisplay = document.getElementById("heart-count");
const coinCountDisplay = document.getElementById("coin-count");
const copyCountDisplay = document.getElementById("copy-count");
const clearHistoryBtn = document.getElementById("clear-history");

// Emergency service cards
function createCards() {
  cardContainer.innerHTML = emergencyServices
    .map(
      (service) => `
        <div class="card bg-base-100 shadow-xl">
            <span class="card-category bg-gray-100 text-black-500">${service.category}</span>
            <div class="heart-icon" onclick="toggleHeart(this)">
                <img src="../assets/heart.png" alt="Heart" class="h-6">
            </div>
            <figure class="mt-20">
                <img src="${service.icon}" alt="${service.name}" class="h-16">
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${service.name}</h2>
                <p class="text-gray-500">${service.nameEn}</p>
                <p class="text-xl font-bold">${service.number}</p>
                <div class="card-actions">
                    <button class="btn-action btn-copy" onclick="copyNumber('${service.number}')">
                        <i class="fas fa-copy"></i>
                        <span>Copy</span>
                    </button>
                    <button class="btn-action btn-call btn-bg" onclick="makeCall('${service.name}', '${service.number}')">
                        <i class="fas fa-phone"></i>
                        <span>Call</span>
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Toggle heart and update count
function toggleHeart(element) {
  state.heartCount++;
  heartCountDisplay.textContent = state.heartCount;
  element.classList.add("text-red-500");
}

// Copy number functionality
async function copyNumber(number) {
  try {
    await navigator.clipboard.writeText(number);
    state.copyCount++;
    copyCountDisplay.textContent = state.copyCount;
    alert("Number copied to clipboard!");
  } catch (err) {
    alert("Failed to copy number");
  }
}

// Call functionality
function makeCall(serviceName, number) {
  if (state.coinCount < 20) {
    alert("Not enough coins! You need 20 coins to make a call.");
    return;
  }

  state.coinCount -= 20;
  coinCountDisplay.textContent = state.coinCount;

  const currentTime = new Date().toLocaleTimeString();
  const historyItem = {
    serviceName,
    number,
    time: currentTime,
  };

  state.history.push(historyItem);
  updateHistory();
  alert(`Calling ${serviceName} at ${number}`);
}

// History display
function updateHistory() {
  historyContainer.innerHTML = state.history
    .map(
      (item) => `
        <div class="history-item bg-base-200 p-2 rounded-lg">
            <div class="service-info w-2/3">
                <p class="font-bold">${item.serviceName}</p>
                <p class="number text-gray-300">${item.number}</p>
            </div>
            <div class="time-info w-1/3">
                <p class="text-sm text-black-500">${item.time}</p>
            </div>
        </div>
    `
    )
    .join("");
}

// Clear history
clearHistoryBtn.addEventListener("click", () => {
  state.history = [];
  updateHistory();
});

// Initialize the page
createCards();

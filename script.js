// Yemek verileri
const foods = [
    { 
        image: "./wiener_schnitzel.jpg", 
        foodName: "Wiener Schnitzel", 
        country: "Avusturya", 
        lat: 47.5162, 
        lng: 14.5501 
    },
    { 
        image: "./fajitas.jpg", 
        foodName: "Fajita", 
        country: "Meksika", 
        lat: 23.6345, 
        lng: -102.5528 
    },
    { 
        image: "./hamburger.jpg", 
        foodName: "Hamburger", 
        country: "Amerika", 
        lat: 37.0902, 
        lng: -95.7129 
    },
    { 
        image: "./pekin_duck.jpg", 
        foodName: "Pekin Duck", 
        country: "Çin", 
        lat: 35.8617, 
        lng: 104.1954 
    },
    { 
        image: "./tagine.jpg", 
        foodName: "Tagine", 
        country: "Fas", 
        lat: 31.7917, 
        lng: -7.0926 
    },
    { 
        image: "./pizza.jpg", 
        foodName: "Pizza", 
        country: "İtalya", 
        lat: 41.8719, 
        lng: 12.5674 
    },
    { 
        image: "./varenyky.jpg", 
        foodName: "Varenyky", 
        country: "Ukrayna", 
        lat: 48.3794, 
        lng: 31.1656 
    },
    { 
        image: "./paella.jpg", 
        foodName: "Paella", 
        country: "İspanya", 
        lat: 40.4637, 
        lng: -3.7492 
    },
    { 
        image: "./fesenjan.jpg", 
        foodName: "Fesenjan", 
        country: "İran", 
        lat: 32.4279, 
        lng: 53.6880 
    },
    { 
        image: "./stroganoff_beef.jpg", 
        foodName: "Stroganoff Beef", 
        country: "Rusya", 
        lat: 61.5240, 
        lng: 105.3188 
    },
    { 
        image: "./rakfisk.jpg", 
        foodName: "Rakfisk", 
        country: "Norveç", 
        lat: 60.4720, 
        lng: 8.4689 
    },
    { 
        image: "./chicken_tikka_masala.jpg", 
        foodName: "Chicken Tikka Masala", 
        country: "Hindistan", 
        lat: 20.5937, 
        lng: 78.9629 
    },
    { 
        image: "./escargots_on_the_bourguignon.jpg", 
        foodName: "Escargots on the Bourguignon", 
        country: "Fransa", 
        lat: 46.6034, 
        lng: 1.8883 
    },
    { 
        image: "./khachapuri.jpg", 
        foodName: "Khachapuri", 
        country: "Gürcistan", 
        lat: 42.3154, 
        lng: 43.3569 
    },
    { 
        image: "./fish_and_chips.jpg", 
        foodName: "Fish and Chips", 
        country: "İngiltere", 
        lat: 51.5098, 
        lng: -0.1180 
    },
    { 
        image: "./hawawshi.jpg", 
        foodName: "Hawawshi", 
        country: "Mısır", 
        lat: 26.8206, 
        lng: 30.8025 
    },
    { 
        image: "images/asado.jpg", 
        foodName: "Asado", 
        country: "Arjantin", 
        lat: -38.4161, 
        lng: -63.6167 
    },
    { 
        image: "./kimchi.jpg", 
        foodName: "Kimchi", 
        country: "Kore", 
        lat: 35.9078, 
        lng: 127.7669 
    },
    { 
        image: "./katsudon.jpg", 
        foodName: "Katsudon", 
        country: "Japonya", 
        lat: 36.2048, 
        lng: 138.2529 
    },
    { 
        image: "./poffertjes.jpg", 
        foodName: "Poffertjes", 
        country: "Hollanda", 
        lat: 52.1326, 
        lng: 5.2913 
    },
    { 
        image: "./feijoada.jpg", 
        foodName: "Feijoada", 
        country: "Brezilya", 
        lat: -14.2350, 
        lng: -51.9253 
    },
    { 
        image: "./poutine.jpg", 
        foodName: "Poutine", 
        country: "Kanada", 
        lat: 56.1304, 
        lng: -106.3468 
    },
];

// Oyun durumu
let lives = 3;
let score = 0;
let currentIndex = 0;
let currentListener = null;

// HTML elemanları
const startButton = document.getElementById("start-button");
const gameIntro = document.getElementById("game-intro");
const gameArea = document.getElementById("game-area");
const foodImage = document.getElementById("foodImage");
const foodName = document.getElementById("foodName");
const livesDisplay = document.getElementById("lives");
const scoreDisplay = document.getElementById("score");

// Leaflet haritası oluşturma
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Rastgele sıralama fonksiyonu
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Oyun başlatıldığında
function startNewRound() {
    if (lives <= 0) {
        endGame();
        return;
    }

    if (currentIndex >= foods.length) {
        alert(`Tebrikler! Tüm yemekleri doğru bildiniz! Toplam puanınız: ${score}`);
        location.reload();
        return;
    }

    const currentFood = foods[currentIndex];
    foodImage.src = currentFood.image;
    foodName.textContent = currentFood.foodName;

    // Önceki dinleyiciyi temizle
    if (currentListener) {
        map.off('click', currentListener);
    }

    // Yeni tıklama dinleyicisi ekle
    currentListener = function (e) {
        checkAnswer(e.latlng, currentFood);
    };
    map.once('click', currentListener);
}

// Cevap kontrolü
function checkAnswer(latlng, currentFood) {
    const distance = map.distance(latlng, [currentFood.lat, currentFood.lng]);
    if (distance <= 1000000) { // 1000 km içinde doğru kabul edilir
        score += 10;
        alert("Doğru! Puan kazandınız.");
    } else {
        lives -= 1;
        alert(`Yanlış! Doğru cevap: ${currentFood.country}`);
    }

    updateStatus();
    currentIndex++;
    startNewRound();
}

// Oyun durumunu güncelle
function updateStatus() {
    livesDisplay.textContent = `Kalan Can: ${lives}`;
    scoreDisplay.textContent = `Puan: ${score}`;
}

// Oyunu bitir
function endGame() {
    if (score >= 50) {
        alert(`Tebrikler! Oyunu kazandınız! Toplam puanınız: ${score}`);
    } else {
        alert(`Üzgünüz! Oyunu kaybettiniz. Toplam puanınız: ${score}`);
    }
    location.reload();
}

// Oyunu başlat
startButton.addEventListener("click", () => {
    gameIntro.style.display = "none";
    gameArea.style.display = "block";

    // Yemek listesini karıştır
    shuffleArray(foods);

    // Haritanın boyutlarını yeniden hesapla
    setTimeout(() => {
        map.invalidateSize();
    }, 100);

    startNewRound();
});

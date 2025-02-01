// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand();

let currentDate = new Date().toISOString().split('T')[0];
let userId = tg.initDataUnsafe.user?.id || 'guest';

// Загрузка данных
function loadData() {
    db.collection("users").doc(userId).collection("days").doc(currentDate)
    .get()
    .then(doc => {
        if (doc.exists) {
            updateUI(doc.data().totalCalories);
        }
    });
}

// Добавление еды
function addFood() {
    const foodName = document.getElementById('food-name').value;
    const calories = parseInt(document.getElementById('calories').value);

    db.collection("users").doc(userId).collection("days").doc(currentDate)
    .set({
        totalCalories: firebase.firestore.FieldValue.increment(calories),
        foods: firebase.firestore.FieldValue.arrayUnion({
            name: foodName,
            calories: calories,
            timestamp: new Date()
        })
    }, { merge: true })
    .then(() => {
        loadData();
        document.getElementById('food-name').value = '';
        document.getElementById('calories').value = '';
    });
}

// Обновление интерфейса
function updateUI(totalCalories) {
    document.getElementById('today-calories').textContent = totalCalories || 0;
    const progress = (totalCalories / 2000) * 100;
    document.getElementById('progress').style.width = ${progress}%;
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', loadData);

tg.MainButton.setText("📊 Открыть статистику");
tg.MainButton.show();
tg.MainButton.onClick(() => {
    // Логика для показа расширенной статистики
});

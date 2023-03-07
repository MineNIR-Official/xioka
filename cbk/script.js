// Получаем элементы DOM
const colorDisplay = document.getElementById("color-display");
const generateButton = document.getElementById("generate-color");
const colorCode = document.getElementById("color-code");

// Функция для генерации случайного цвета
function generateRandomColor() {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Обработчик события для кнопки генерации цвета
generateButton.addEventListener("click", () => {
  // Генерируем случайный цвет
  const randomColor = generateRandomColor();
  // Устанавливаем цвет дива отображения цвета
  colorDisplay.style.backgroundColor = randomColor;
  // Устанавливаем текст кода цвета
  colorCode.textContent = `Код цвета: ${randomColor}`;
});

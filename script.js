// Слайдер блок 6
const slides6 = document.querySelectorAll('.block-6-slide');
const prevBtn6 = document.querySelector('.block-6-prev');
const nextBtn6 = document.querySelector('.block-6-next');
let currentSlide6 = 0;

// Функция показа слайда
function showSlide6(index) {
  slides6.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.zIndex = 0;
    if (i === index) {
      slide.classList.add('active');
      slide.style.zIndex = 1;
    }
  });
}

// Кнопка "Назад"
prevBtn6.addEventListener('click', () => {
  currentSlide6 = (currentSlide6 - 1 + slides6.length) % slides6.length;
  showSlide6(currentSlide6);
});

// Кнопка "Вперед"
nextBtn6.addEventListener('click', () => {
  currentSlide6 = (currentSlide6 + 1) % slides6.length;
  showSlide6(currentSlide6);
});

// Показываем первый слайд при загрузке
showSlide6(currentSlide6);

const fixedButton = document.querySelector('.fixed-button');
const block7 = document.getElementById('block-7');

fixedButton.addEventListener('click', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name').value.trim();
  const serviceSelect = document.getElementById('service').value;

  if(nameInput === "" || serviceSelect === "") {
    // Если поля пустые — прокрутка к блоку 7
    block7.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Если поля заполнены — переход в WhatsApp
    const phone = "7771234567"; // номер в формате без "+" и пробелов
    const text = `Здравствуйте, меня зовут ${encodeURIComponent(nameInput)}. Хочу записаться на услугу: ${encodeURIComponent(serviceSelect)}.`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  }
});

const burgerIcon = document.querySelector('.burger-icon');
const burgerNav = document.querySelector('.burger-nav');

burgerIcon.addEventListener('click', () => {
  burgerNav.style.display = burgerNav.style.display === 'flex' ? 'none' : 'flex';
});

const footer = document.querySelector('.footer');

function updateButtonPosition() {
  const footerRect = footer.getBoundingClientRect();
  const buttonHeight = fixedButton.offsetHeight;
  const padding = 22; // твой отступ от низа

  if (footerRect.top < window.innerHeight - padding) {
    // Считаем сколько кнопке осталось до футера
    const overlap = window.innerHeight - footerRect.top + padding;
    fixedButton.style.bottom = overlap + 'px';
  } else {
    fixedButton.style.bottom = padding + 'px';
  }
}

window.addEventListener('scroll', updateButtonPosition);
window.addEventListener('resize', updateButtonPosition);

// Обновляем позицию сразу при загрузке
updateButtonPosition();

// Находим все ссылки внутри бургер-меню
const menuLinks = document.querySelectorAll('.burger-nav a');

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартный прыжок

    const targetId = this.getAttribute('href').substring(1); // убираем #
    const targetElement = document.getElementById(targetId);

    if(targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // плавный скролл
    }

    // Если меню открыто — закрываем его после клика
    const burgerNav = this.closest('.burger-nav');
    if (burgerNav) burgerNav.style.display = 'none';
  });
});

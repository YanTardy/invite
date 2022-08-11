// при клике по кнопке скрипт запустит код
button.onclick = function () {
  // если фон кнопки чёрный
  if (button.style.backgroundColor == 'rgb(250, 139, 181)') {
    // изменим его на белый, а текст сделаем чёрным
    button.style.backgroundColor = 'white';
    button.style.color = 'rgb(250, 139, 181)';
  } else {
    // иначе сделаем фон чёрным, а текст белым
    button.style.backgroundColor = 'rgb(250, 139, 181)';
    button.style.color = 'white';
  }
}
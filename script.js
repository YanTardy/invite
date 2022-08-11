// при клике по кнопке скрипт запустит код
button1.onclick = function () {
  // если фон кнопки чёрный
  if (button1.style.backgroundColor == 'rgb(250, 139, 181)') {
    // изменим его на белый, а текст сделаем чёрным
    button1.style.backgroundColor = 'white';
    button1.style.color = 'rgb(250, 139, 181)';
  } else {
    // иначе сделаем фон чёрным, а текст белым
    button1.style.backgroundColor = 'rgb(250, 139, 181)';
    button1.style.color = 'white';
  }
}

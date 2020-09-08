$(document).ready(function(){

//      function replace(rules) {
//     rules.forEach(function (rule) {
//       var pattern = rule[0];
//       var replacement = rule[1];
//       $('.current-month').each(function() {
//         $(this).html($(this).html().replace(new RegExp(pattern, 'g'), replacement));
//     });
//   });
// }
// replace([
//   [ 'January', 'Січень' ],
//   [ 'February', 'Лютий' ],
//   [ 'March', 'Березень' ],
//   [ 'April', 'Квітень' ],
//   [ 'May', 'Травень' ],
//   [ 'June', 'Червень' ],
//   [ 'July', 'Липень' ],
//   [ 'August', 'Серпень' ],
//   [ 'September', 'Вересень' ],
//   [ 'October', 'Жовтень' ],
//   [ 'November', 'Листопад' ],
//   [ 'December', 'Грудень' ]
// ]);

  $(".headd_burger").click(function(event){
    $('.headd_burger, .headd-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(".concert_popup-left").click(function(event){
    $('.concert__modulle-left').toggleClass('left-modulle');
  });

  $(".concert_popup-rigth").click(function(event){
    $('.concert__modulle-right').toggleClass('right-modulle');
  });

  $('.concert__modulle-left').click(function(event){
    $('.concert__modulle-left').removeClass('left-modulle');
  });

  $('.concert__modulle-right').click(function(event){
    $('.concert__modulle-right').removeClass('right-modulle');
  });
  $('.button_each').click(function(event){
    $('.form-data').toggleClass('data_active-form')
  });
  $('.flash').click(function(event){
    $('.form-data').removeClass('data_active-form');
  });



  $('.slider').slick({
      arrows:true,
      dots: true,
      adaptiveHeight: true, // адаптивная высота, доп. .slick-track{align-items: flex-start;}
      slidesToShow: 1, // Сколько секций показать
      slidesToScroll: 1, // Сколько секций проскролить
      speed: 1500, // Скорость пролистывания
      easing: 'linear', // Вид анимации
      infinite: true, //будет ли конец анимации
      initialSlide: 0, // Стартовый слайд
      autoplay: false, // Авто пролистывание слайдов
      autoplaySpeed: 2000, // Скорость задержки пролистывания слайдов
      pauseOnFocus: true, // Пауза при нажатии мышкой на слайд
      pauseOnHover: true,
      pauseOnDotsHover: true, // Пауза при наведении на точки управления
      draggable: false, // Запретил на пк таскать мышкой слайды
      swipe: true, // На телефоне, см. выше описание
      touchMove: true, // Для тачскринов, передвигать пальцем разрешает
      waitForAnimate: false, // Разрешает быстро переключать слайды
      centerMode: false, // След слайд размещает по центру слайдера
      variableWidth: false, // 
      rows: 1, // Количество рядов в картинках
      slidesPerRow: 1, // Количество колонок слайдов 
      vertical: false, // Вертикальный слайдер, обращай внимание на display: flex; b указывай высоту
      
  });


  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/Dovzhenko_under/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Дякуємо за звернення! Ваше повідомлення успішно відправлено!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  
  
});


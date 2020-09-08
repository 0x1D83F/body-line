 //E-mail Ajax Send
 $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/wp-content/themes/body-line/mail.php", //Change 
      data: th.serialize()
    }).done(function() {
      alert("Дякуємо за звернення! Ваша заявка успішно відправлена!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });



  <link rel="shortcut icon" href="http://body-line.lviv.ua/wp-content/themes/body-line/assets/images/favicon.ico" type="image/x-icon"></link>
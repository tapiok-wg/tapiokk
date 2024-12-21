setInterval(function () {
    // Получаем текущее время
    var d = new Date();
    
    var second = d.getSeconds() * 6; // Каждая секунда - 6 градусов
    var minute = d.getMinutes() * 6 + (d.getSeconds() / 60) * 6; // Каждая минута - 6 градусов, с учетом секунд
    var hour = d.getHours() * 30 +  (d.getMinutes() / 60) * 30; // Каждый час - 30 градусов, с учетом минут
  
    // Применяем вращение к стрелкам
    document.getElementById("second-hand").style.transform = `rotate(${second}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minute}deg)`;
    document.getElementById("hour-hand").style.transform = `rotate(${hour}deg)`;
  }, 1000); // Обновляем каждую секунду
  
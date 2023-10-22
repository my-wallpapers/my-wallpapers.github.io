var usragent = navigator.userAgent.toLowerCase();
var ismobile = usragent.indexOf("mobile") > -1 || usragent.indexOf("android") > -1;
if(ismobile) {
    document.querySelector('body').classList.add('mobile');

    /* 
    Muralmaks IT:
    Привет! Я делаю мобильную адаптацию. Подскажи, что лучше сделать с иконками? У меня есть иконки разных размеров, 20x20 пикселей и 40x40. Как их лучше поместить на сайт?
    1 вариант) поместить обе иконки в код HTML и скрывать одну из них, в зависимости от устройства.
    2 вариант) менять ссылку на иконку у одного изображения с помощью JS, в зависимости от устройства.
    Что лучше?

    YandexGPT 2:
    Привет! Лучше использовать второй вариант - менять ссылку на иконку у одного изображения с помощью JavaScript,
    в зависимости от устройства. Это позволит оптимизировать загрузку ресурсов и улучшить производительность приложения.
    (Не реклама.)
    */

    document.querySelectorAll('img').forEach(function(el){
        switch (el.src.split('/')[el.src.split('/').length - 1]){
            case 'imageres_113-7.png':
                el.src = '/icons/imageres_113-4.png';
            break;
            case 'imageres_102-7.png':
                el.src = '/icons/imageres_102-4.png';
            break;
            case 'imageres_185-7.png':
                el.src = '/icons/imageres_185-4.png';
            break;
            case 'imageres_163-5.png':
                el.src = '/icons/imageres_163-2.png';
            break;
            case 'shell32_63008-7.png':
                el.src = '/icons/shell32_63008-4.png';
            break;
        }
    })
}
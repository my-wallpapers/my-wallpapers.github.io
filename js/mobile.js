// Интересно, а в какой момент времени мобильный скрипт стал скриптом тем?)


// Система тем
try {
    localStorage.getItem('theme');
} catch (e) {
    localStorage.setItem('theme', 'css/style.css');
}
if(!(localStorage.getItem('theme') === 'css/style.css')){
    document.querySelector('link[rel="stylesheet"]').href = localStorage.getItem('theme');
}

// Система мобильного режима для пк
try {
    localStorage.getItem('mobilemode');
} catch (e) {
    localStorage.setItem('mobilemode', 'false');
}

// Система мобильного режима
var usragent = navigator.userAgent.toLowerCase();
var ismobile = usragent.indexOf("mobile") > -1 || usragent.indexOf("android") > -1 || localStorage.getItem("mobilemode") == "true";
if(ismobile) {
    document.querySelector('body').classList.add('mobile');
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
            case 'mw-6.png':
                el.src = '/icons/mw-3.png';
            break;
        }
    })
}

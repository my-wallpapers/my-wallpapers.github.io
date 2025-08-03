// Интересно, а в какой момент времени мобильный скрипт стал скриптом тем?)

if (!sessionStorage.getItem("checked")) {
    document.body.insertAdjacentHTML("afterbegin", `
        <div class="importantThing" onclick="openModal()">
            <h2>Важная новость.</h2>
            <p>Нажмите, чтобы открыть.</p>
        </div>
    `)

    function openModal() {
        document.querySelector(".importantThing").classList.add('hide');
        document.body.insertAdjacentHTML("afterbegin", `
            <div class="modalThing">
                <div class="modalText">
                    <h1>Закрытие my-wallpapers...</h1>
                    <p>...github.io</p>
                    <hr>
                    <p>My wallpapers V2 уже почти готова, в связи с этим этот сайт (а точнее Github-репозиторий) будет архивирован в ближайшее время.</p>
                    <p>Мы прошли с вами долгий путь длиною в 2 года и пора переходить на новый уровень. Github Pages - не та платформа, которая подошла бы для такого проекта, как My wallpapers, запомните это.</p>
                    <p>В связи с переходом MWWI будет полностью переписан, а в репозитории будет доступен его исходный код. Никаких костылей, только нормальное API и новые навыки программирования.</p>
                    <p><i>- Хорошо, но куда ты будешь уходить?</i><br>
                    Встречайте два моих новых сайта:</p>
                    <p><a href="https://cat8753.ru/">https://cat8753.ru/</a> - Мой сайт<br>
                    <a href="https://my-wallpapers.cat8753.ru/">https://my-wallpapers.cat8753.ru/</a> - My wallpapers</p>
                    <p><i>(В будущем перееду на cat8753.su для доступности сайта с тех стран, где запрещен домен .ru. Сервер немецкий, если что)</i></p>
                    <p>Что уже есть на данный момент:</p>
                    <ul>
                        <li>- Рабочий проводник с удобным показом пути</li>
                        <li>- Предпросмотр рабочего стола</li>
                        <li>- API</li>
                        <li>- Мобильная адаптация</li>
                        <li>- Исправление старых костылей</li>
                    </ul>
                    <p><a href="https://my-wallpapers.cat8753.ru/">Вперёд в будущее!</a></p>
                    <img width="100%" src="/icons/mw2b.png" />
                    <button onclick="document.querySelector('.modalThing').classList.add('hide'); sessionStorage.setItem('checked', 'true');">Хорошо</button>
                </div
            </div>
        `)
    }
}

// Система тем
try {
    localStorage.getItem('theme');
} catch (e) {
    localStorage.setItem('theme', 'https://my-wallpapers.github.io/css/style.css');
}
// На всякий случай
if(localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', 'https://my-wallpapers.github.io/css/style.css');
}
if(!(localStorage.getItem('theme') === 'https://my-wallpapers.github.io/css/style.css')){
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
    if (window.location.href == 'https://my-wallpapers.github.io/info.html'){
        document.getElementById('mwwi').textContent = ' MWWI.exe'
    }
}
if (!ismobile){
    window.onresize = function(){
        if(window.innerWidth <= 565){
            document.getElementById('mwwi').textContent = ' MWWI.exe';
        } else {
            document.getElementById('mwwi').textContent = ' MyWallpapersWallpaperInstaller.exe';
        };
    }
}
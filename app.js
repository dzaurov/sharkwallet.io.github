Telegram.WebApp.ready();

    const initData = Telegram.WebApp.initData || '';
    const initDataUnsafe = Telegram.WebApp.initDataUnsafe || {};

  Telegram.WebApp.MainButton.show();


    Telegram.WebApp.MainButton
        .setText('CLOSE WEBVIEW')
        .hide()
        .onClick(function(){ webviewClose(); });

    function toggleMainButton(el) {
        const mainButton = Telegram.WebApp.MainButton;
        if (mainButton.isVisible) {
            mainButton.hide();
            el.innerHTML = 'Show Main Button';
        } else {
            mainButton.show();
            el.innerHTML = 'Hide Main Button';
        }
    }

    function webviewExpand() {
        Telegram.WebApp.expand();
    }

    function webviewClose() {
        Telegram.WebApp.close();
    }

    function sendTime(spam) {
        const repeat = spam ? 10 : 1;
        for (let i = 0; i < repeat; i++) {
            Telegram.WebApp.sendData(new Date().toString());
        }
    }

    function requestLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                document.querySelector('#locationData').innerHTML = '(' + position.coords.latitude + ', ' + position.coords.longitude + ')';
            });
        } else {
            document.querySelector('#locationData').innerHTML = '(Geolocation is not supported in this browser)';
        }

        return false;
    }

    function requestVideo() {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(function(stream) {
                document.querySelector('#videoData').innerHTML = '(Access granted)';
            });
        } else {
            document.querySelector('#videoData').innerHTML = '(Media devices is not supported in this browser)';
        }
        return false;
    }

    function requestAudio() {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function(stream) {
                document.querySelector('#audioData').innerHTML = '(Access granted)';
            });
        } else {
            document.querySelector('#audioData').innerHTML = '(Media devices is not supported in this browser)';
        }
        return false;
    }

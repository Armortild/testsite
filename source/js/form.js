(function () {
    var k = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose(evt) {
        evt.preventDefault();
        k.close();
    }

    function onEsc(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            k.close();
        }


    };

    k.open = function () {
        form.classList.remove('is-hidden');
        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);
        document.addEventListener('keydown', onEsc);
    };

    k.close = function () {
        form.classList.add('is-hidden');
    };


    k.isValid = function () {

        if (!k.isAllCompleted(document.querySelectorAll(('[data-valid="required"]')))) {
            console.log("Не все поля заполнены");
            return false
        } else if (!user.validation.isEmail(document.querySelector('[data-email]').value)) {
            console.log("Неверный Email");
            return false
        } else if (!user.validation.isNumber(document.querySelector('[data-number]').value)) {
        console.log("Неверный номер телефона");
        return false;
        }

    return true;
};

k.isAllCompleted = function (data) {
    var result = true;
    for (var i = 0; i < data.length; i++) {
        if (!user.validation.isNotEmpty(data[i].value)) {
            result = false;
            break;
        }
    }
    return result;
};

user.form = k;
}
()
)
;
(function() {
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    // var nav = document.querySelector('.nav');

        if(openFormButton){
            openFormButton.addEventListener('click',function (evt) {
                evt.preventDefault();
                user.form.open();
            })
        }

        if(form){
            form.addEventListener('submit', function (evt) {
                evt.preventDefault();
                if(user.form.isValid()){
                    console.log("Все хорошо");
                }else {
                    console.log("Не все корректно");
                }

            })
        }

}());
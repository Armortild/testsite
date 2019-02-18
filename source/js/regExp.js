(function() {
    var f = {};

    f.isEmail = function(email) {
        var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(email);
    };

    f.isNumber = function(number) {
        var regExp = /^\d+$/;
        return regExp.test(number);
    };

    f.isNotEmpty = function(str) {
        return Boolean(str);
    };

    user.validation = f;
}());

define([], function() {

    return {
        generate : function () {
            var token =  "-";

            function value() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }

            return (value() + value() + token + value() + token + value() + token + value() + token + value() + value() + value());
        }
    }

});


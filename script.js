var Conversion = function() {
    var decimal;
    this.input = null;
    this.errorMessage = null;
    
    this.init = function() {
        this.input = document.getElementsByName("binaryNumber")[0].value;
        this.errorMessage = document.getElementsByClassName("errorMessage")[0];
        hideErrorMessage(this.errorMessage);

        if (this.isBinaryNumber()) {
            decimal = this.binaryToDecimal();
        } else if (this.input) {
            displayErrorMessage(this.errorMessage);
        }
    };

    this.isBinaryNumber = function() {
        var regex = /^[0-1]{1,8}$/gm;
        return regex.test(this.input);
    };

    this.binaryToDecimal = function() {
        var decimal = 0;
        var length = input.length-1;
        for (var index = length; index >= 0; index--) {
            decimal += (this.input[index] * Math.pow(2, length - index));
        }
        return decimal;
    };
};

var displayErrorMessage = function(message) {
    message.classList.remove("hidden");
};

var hideErrorMessage = function(message) {
    message.classList.add("hidden");
};

function _init() {
    var input = document.getElementsByName("binaryNumber")[0];
    var conversion = new Conversion();
    input.addEventListener("keyup", function() { conversion.init(); });
}

window.onload = _init;
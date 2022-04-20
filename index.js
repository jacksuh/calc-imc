function Person(height, weight) {
    if (typeof(height) !== 'number' || isNaN(height))
        throw Error('height not a number');

    if (typeof(weight) !== 'number' || isNaN(weight))
        throw Error('weight not a number');

    this.height = height;
    this.weight = weight;
}

function Dietician(height, weight) {
    this.calculateImc = function() {
        return this.weight / Math.pow(this.height, 2);
    }
    Person.call(this, height, weight);
}

Dietician.prototype = Object.create(Person.prototype);
Dietician.prototype.constructor = Dietician;

function calculateImc() {
    var height = parseFloat(document.querySelector('#altura').value);
    var weight = parseFloat(document.querySelector('#peso').value);
    document.querySelector('#imc').innerHTML = new Dietician(height, weight).calculateImc();

}
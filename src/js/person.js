function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    this.measurementSystem = attr.measurementSystem;
};

Person.prototype.calculate_bmi = function() {
    calculator = new BMICalculator();
    if (this.measurementSystem === "metric") {
        calculator.metric_bmi(this)
    } else if (this.measurementSystem === "imperial") {
        calculator.imperial_bmi(this)
    }
};




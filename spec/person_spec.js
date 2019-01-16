const { Person } = require('./spec.helper')

describe("Person metric", () => {
    let person = new Person({
        weight: 90,
        height:186,
        measurementSystem: "metric"
    });

    it("should have the metric measurement system", () => {
        expect(person.measurementSystem).to.equal("metric");
    });

    it("should have weight of 90", () => {
        expect(person.weight).to.equal(90);
    });

    it("should have height of 186", () => {
        expect(person.height).to.equal(186);
    });

    it("should calculate BMI value", () => {
        person.calculate_bmi();
        expect(person.bmiMessage).to.equal('Overweight');
    });
});

describe("Person imperial", () => {
    let person = new Person({
        weight: 198,
        height: 72,
        measurementSystem: "imperial"
    });

    it("should have the imperial measurement system", () => {
        expect(person.measurementSystem).to.equal("imperial");
    });

    it("should have weight of 198", () => {
        expect(person.weight).to.equal(198);
    });

    it("should have height of 72", () => {
        expect(person.height).to.equal(72);
    });

    it("should calculate BMI value", () => {
        person.calculate_bmi();
        expect(person.bmiMessage).to.equal('Overweight');
    });
});
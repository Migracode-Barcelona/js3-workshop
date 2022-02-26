import { Person, Employee, ana } from "../21-exercise/21-exercise";

describe("21-exercise", function () {
    test("create a class Employee that extends the Person class", async () => {
        const expectedAna = {
            firstName: "Ana",
            lastName: "Spark",
            jobTitle: "Developer",
        };

        const newAna = new Employee("Ana", "Spark", "Developer");

        expect(expectedAna).toEqual(ana);
        expect(expectedAna).toEqual(newAna);

        expect(ana.sayName()).toEqual(`Ana Spark`);
        expect(ana.getJobTitle()).toEqual(`Developer`);

        expect(newAna.sayName()).toEqual(`Ana Spark`);
        expect(newAna.getJobTitle()).toEqual(`Developer`);

        expect(ana).toBeInstanceOf(Employee);
        expect(ana).toBeInstanceOf(Person);

        expect(newAna).toBeInstanceOf(Employee);
        expect(newAna).toBeInstanceOf(Person);
    });
});

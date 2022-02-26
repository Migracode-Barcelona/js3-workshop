import { Person, ana } from "../20-exercise/20-exercise";

describe("20-exercise", function () {
    test("create a class Person that has a method sayName", async () => {
        const expectedAna = {
            firstName: "Ana",
            lastName: "Spark",
        };

        const newAna = new Person("Ana", "Spark");

        expect(expectedAna).toEqual(ana);
        expect(expectedAna).toEqual(newAna);

        expect(ana.sayName()).toEqual(`Ana Spark`);
        expect(newAna.sayName()).toEqual(`Ana Spark`);
    });
});

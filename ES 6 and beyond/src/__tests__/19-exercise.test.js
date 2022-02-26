import { Person, ana } from "../19-exercise/19-exercise";

describe("19-exercise", function () {
    test("create a class Person", async () => {
        const expectedAna = {
            firstName: "Ana",
            lastName: "Spark",
        };

        const newAna = new Person("Ana", "Spark");

        expect(expectedAna).toEqual(ana);
        expect(expectedAna).toEqual(newAna);
    });
});

import exercise07 from "../07-exercise/07-exercise";

describe("07-exercise", function () {
    test("store an arrow function in the `func` variable", () => {
        const result = exercise07();

        expect(typeof result).toBe("function");
    });

    test("func should be an arrow function", () => {
        expect(function () {
            new (exercise07())();
        }).toThrow(/.* is not a constructor/);
    });

    test("func should return the sum of the parameters", () => {
        expect(() => {
            exercise07()(5, 5);
        }).not.toThrow();

        let result = exercise07()(5, 5);

        expect(result).toBe(10);
    });
});

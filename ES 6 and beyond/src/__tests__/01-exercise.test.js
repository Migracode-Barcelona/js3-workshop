import exercise01 from "../01-exercise/01-exercise";

describe("01-exercise", function () {
    test("add a default value to each parameter", () => {
        expect(exercise01()).toBe(1);
        expect(exercise01(5)).toBe(5);
        expect(exercise01(5, 5)).toBe(25);
    });
});

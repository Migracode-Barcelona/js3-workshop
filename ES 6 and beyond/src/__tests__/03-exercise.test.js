import exercise03 from "../03-exercise/03-exercise";

describe("03-exercise", function () {
    test("return the ...rest parameters", () => {
        expect(
            exercise03("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
        ).toEqual(expect.arrayContaining(["Wednesday", "Thursday", "Friday"]));
    });
});

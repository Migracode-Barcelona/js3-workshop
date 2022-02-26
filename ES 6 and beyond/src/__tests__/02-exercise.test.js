import exercise02 from "../02-exercise/02-exercise";

describe("02-exercise", function () {
    test("add default values to each key of the destructured parameter object", () => {
        expect(exercise02({})).toBe(
            "Hello I am Default firstName Default lastName"
        );
    });

    test("return the concatenation of the values in the object", () => {
        expect(
            exercise02({
                firstName: "John",
                lastName: "Second",
            })
        ).toBe("Hello I am John Second");
    });
});

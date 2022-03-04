import exercise05 from "../05-exercise/05-exercise";

describe("05-exercise", function () {
    test("destructure the array items and set a default value to the second element", () => {
        expect(
            exercise05(["Monday", undefined, "Wednesday", "Thursday", "Friday"])
        ).toBe("DEFAULT");
    });

    test("destructure the array items and return the second element", () => {
        expect(
            exercise05(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
        ).toBe("Tuesday");
    });
});

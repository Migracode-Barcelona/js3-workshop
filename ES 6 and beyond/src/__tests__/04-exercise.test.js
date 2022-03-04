import exercise04 from "../04-exercise/04-exercise";

describe("04-exercise", function () {
    test("destructure the array items and return the second element", () => {
        expect(
            exercise04(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
        ).toBe("Tuesday");
    });
});

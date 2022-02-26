import exercise09 from "../09-exercise/09-exercise";

describe("09-exercise", function () {
    let arraySpy = null;

    beforeAll(() => {
        arraySpy = jest.spyOn(Array.prototype, "flat");
    });

    afterEach(() => {
        arraySpy.mockRestore();
    });

    test("use the array.flat() method to flatten the array", () => {
        exercise09();

        expect(arraySpy).toHaveBeenCalledTimes(1);
    });

    test("return the flattened array", () => {
        expect(exercise09()).toEqual(
            expect.arrayContaining([
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ])
        );
    });
});

import exercise10 from "../10-exercise/10-exercise";

describe("10-exercise", function () {
    let arraySpy = null;

    beforeAll(() => {
        arraySpy = jest.spyOn(Array, "from");
    });

    afterEach(() => {
        arraySpy.mockRestore();
    });

    test("use the Array.from() method to create an array from the string", () => {
        exercise10();

        expect(arraySpy).toHaveBeenCalledTimes(1);
        expect(arraySpy).toHaveBeenCalledWith("hello-world");
    });

    test("return the array of characters", () => {
        expect(exercise10()).toEqual([
            "h",
            "e",
            "l",
            "l",
            "o",
            "-",
            "w",
            "o",
            "r",
            "l",
            "d",
        ]);
    });
});

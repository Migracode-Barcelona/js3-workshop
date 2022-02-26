import exercise12 from "../12-exercise/12-exercise";

describe("12-exercise", function () {
    let arraySpy = null;

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const dayToFind = days[2];

    const nums = [1, 20, 3, 5, 4];
    const numToFind = nums[3];
    const numNotInNums = 2000;

    beforeAll(() => {
        arraySpy = jest.spyOn(Array.prototype, "includes");
    });

    afterEach(() => {
        arraySpy.mockRestore();
    });

    test("use the array.includes() method to check if the array includes the entry", () => {
        exercise12(days, dayToFind);

        expect(arraySpy).toHaveBeenCalledTimes(1);
        expect(arraySpy).toHaveBeenCalledWith(dayToFind);
    });

    test("return the result of the includes check", () => {
        const expected1 = exercise12(days, dayToFind);
        expect(expected1).toBe(true);

        const expected2 = exercise12(nums, numToFind);
        expect(expected2).toBe(true);

        const expected3 = exercise12(nums, numNotInNums);
        expect(expected3).toBe(false);
    });
});

import exercise11 from "../11-exercise/11-exercise";

describe("11-exercise", function () {
    let arraySpy = null;

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const dayToFind = days[2];

    const nums = [1, 20, 3, 5, 4];
    const numToFind = nums[3];

    const ages = [22, 26, 55, 25, 5];
    const ageToFind = ages[3];

    beforeAll(() => {
        arraySpy = jest.spyOn(Array.prototype, "find");
    });

    afterEach(() => {
        arraySpy.mockRestore();
    });

    test("use the array.find() method to find in the array the value of the parameter", () => {
        exercise11(days, dayToFind);

        expect(arraySpy).toHaveBeenCalledTimes(1);
    });

    test("return the found entry in the array", () => {
        const expected1 = exercise11(days, dayToFind);
        expect(expected1).toBe(dayToFind);

        const expected2 = exercise11(nums, numToFind);
        expect(expected2).toBe(numToFind);

        const expected3 = exercise11(ages, ageToFind);
        expect(expected3).toBe(ageToFind);
    });
});

describe("14-exercise", function () {
    test("export a named function that returns the sum of it’s parameters", async () => {
        const module = await import("../14-exercise/14-exercise");

        expect(module.hasOwnProperty("add")).toBe(true);

        expect(module.add(5, 2)).toBe(7);
    });
});

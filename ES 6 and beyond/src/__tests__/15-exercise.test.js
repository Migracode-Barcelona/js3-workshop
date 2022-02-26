describe("15-exercise", function () {
    test("default export a function that returns the division of it’s parameters", async () => {
        const module = await import("../15-exercise/15-exercise");

        expect(typeof module.default).toBe("function");
        expect(module.default.name).toBe("divide");
        expect(module.default(10, 2)).toBe(5);
    });
});

describe("16-exercise", function () {
    test("export all the modules under the `utils` namespace", async () => {
        const modules = await import("../16-exercise/16-exercise");

        expect(modules).toEqual(
            expect.objectContaining({
                utils: expect.objectContaining({
                    addOne: expect.any(Function),
                    addTwo: expect.any(Function),
                    addThree: expect.any(Function),
                }),
            })
        );
    });
});

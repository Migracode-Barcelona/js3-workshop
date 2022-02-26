describe("13-exercise", function () {
    test("export a named export with the name and value indicated", async () => {
        const module = await import("../13-exercise/13-exercise");

        expect(module.hasOwnProperty("BASE_URL")).toBe(true);

        expect(module.BASE_URL).toBe(
            "https://jsonplaceholder.typicode.com/users"
        );
    });
});

import exercise06 from "../06-exercise/06-exercise";

describe("06-exercise", function () {
    test("destructure the remaining keys and return the object", () => {
        expect(exercise06()).toEqual({
            age: 33,
            jobTitle: "Student",
            company: "Assembler School",
            averageGrade: 6.6,
        });
    });
});

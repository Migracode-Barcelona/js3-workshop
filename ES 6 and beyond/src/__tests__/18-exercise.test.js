import exercise18 from "../18-exercise/18-exercise";

describe("18-exercise", function () {
    const FETCH_RESPONSE_DATA = {
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret",
        website: "hildegard.org",
    };

    beforeAll(() => {
        document.body.innerHTML = `<pre class="ex-wrapper"></pre>`;

        global.fetch = jest.fn(() => {
            return Promise.resolve({
                json() {
                    return Promise.resolve(FETCH_RESPONSE_DATA);
                },
            });
        });
    });

    afterAll(() => {
        fetch.mockRestore();
    });

    test("convert the exercise18 to be of type async", async () => {
        expect(Object.prototype.toString.call(exercise18).includes("AsyncFunction")).toBe(true);
    });

    test("use fetch to make a network call", async () => {
        await exercise18();

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test("pass the data from the fetch call to the displayContents function", async () => {
        await exercise18();

        const wrapper = document.querySelector(".ex-wrapper");

        expect(wrapper.innerHTML).toMatch(/Leanne Graham/);
    });
});

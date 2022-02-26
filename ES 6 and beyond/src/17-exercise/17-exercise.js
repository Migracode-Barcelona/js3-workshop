/**
 * Exercise 17:
 *
 * Complete the code of the exercise17 function so that:
 *
 * 1. It returns the call to the fetch() method to make
 *    a network request to the following url:
 *
 * https://jsonplaceholder.typicode.com/users/1
 *
 * 2. Obtains the data from the fetch() call and executes several .then()
 *    method calls until it can get the data returned from the api.
 *
 *    Once it has the data inside the .then() call, it should execute
 *    the `displayContents` function by passing it as an argument
 *    the response data returned by the fetch json() method.
 *
 * function exercise17() {
 *   return fetch("...")...
 * }
 */

// Finish the code of the function
function exercise17() {}

// Don’t change the code bellow this line
function displayContents(data) {
    const wrapper = document.querySelector(".ex-wrapper");

    wrapper.textContent = JSON.stringify(data, null, 2);
}

export default exercise17;

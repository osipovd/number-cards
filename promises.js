let favNumber = 7;
let baseURL = "http://numbersapi.com";


$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

let favNumbers = [5, 12, 39];
let numbersURL = favNumbers.join();
$.getJSON(`${baseURL}/${numbersURL}?json`).then(data => {
  console.log(data);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});

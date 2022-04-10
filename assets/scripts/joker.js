class Joker {

  constructor() {
    const jokeSetupElem = document.querySelector('#joke #setup');
    const jokeDeliveryElem = document.querySelector('#joke #delivery');

    fetch('https://v2.jokeapi.dev/joke/Programming').then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }).then(function (data) {

      if (data.type === "single") {
        jokeSetupElem.innerHTML = data.joke;
      } else if (data.type === "twopart") {
        jokeSetupElem.innerHTML = data.setup;
        jokeDeliveryElem.innerHTML = data.delivery;
      }

    }).catch(function (err) {
      console.warn('Ops! Something went wrong.', err);
    });
  };
}

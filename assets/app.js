document.addEventListener('DOMContentLoaded', () => {
  // new fullpage('#fullpage', {
  //   autoScrolling: true,
  //   scrollHorizontally: false
  // });
  // document.querySelector('#startBtn').addEventListener('click', () => {
  //   $.fn.fullpage.moveSectionDown()
  // })
  new Joker();
  const scroller = new Scroller();
  document.querySelector('#startBtn').addEventListener('click', e => {
    e.preventDefault();
    scroller.scrollToAnchor('#about-me');
  });
});
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
  }

}
class Scroller {
  constructor() {}

  scrollToAnchor(anchorId) {
    const anchorElemPos = document.querySelector('#about-me').getBoundingClientRect();
    window.scrollTo({
      top: anchorElemPos.height,
      left: 0,
      behavior: 'smooth'
    });
  }

}

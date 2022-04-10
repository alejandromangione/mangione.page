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

  document.querySelector('#startBtn').addEventListener('click', (e) => {
    e.preventDefault();

    scroller.scrollToAnchor('#about-me');
  })

});

class Scroller {

  constructor() {

  }

  scrollToAnchor(anchorId) {
    const anchorElemPos = document.querySelector('#about-me').getBoundingClientRect();

    window.scrollTo({
      top: anchorElemPos.height,
      left: 0,
      behavior: 'smooth'
    });
  };
}
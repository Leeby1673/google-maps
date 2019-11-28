// for reducing scroll request
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) 
        func.apply(context, args);
      };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
    };
};

function $log(x) {
  return console.log(x);
}

// set func for select elements
function $select(element) {
  return document.querySelector(element);
}

// set functions for addClassList and removeClassList
function $addClsls(element, ...newClass) {
  return element.classList.add(...newClass);
}
function $rmClsls(element, ...rmClass) {
  return element.classList.remove(...rmClass);
}

// scroll event function to fix navbar
function checkScroll() {
  // get scrollY value, element navbar, navbar offsettop
  // header jumbotron height, navbar and holder height
  let wScrollY = window.scrollY;
  let getNav = $select('#navbar');
  let navOffsetTop = getNav.offsetTop;
  let getHeader = $select('.cover');
  let headerHeight = getHeader.offsetHeight;
  let getNavHolder = $select('#nav-placeholder');
  let getNavHeight = getNav.offsetHeight;

  // if true to fix navbar to top and show navbar holder
  if (wScrollY >= navOffsetTop) {
    $addClsls(getNav, 'fixedTop');
    $rmClsls(getNavHolder, 'd-none');
    getNavHolder.style = `
			width: 100%;
			height: ${getNavHeight}px;
		`
  }

  // if true to unfix navbar and hide navbar holder
  if (wScrollY <= headerHeight) {
    $rmClsls(getNav, 'fixedTop');
    $addClsls(getNavHolder, 'd-none');
    getNavHolder.style = `
			width: 0;
			height: 0;
		`
  }
}

// listen window scroll event
window.addEventListener('scroll', debounce(checkScroll, 15, true))
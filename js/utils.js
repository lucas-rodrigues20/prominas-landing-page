const Utils = (function() {

  const HOME_PATH =  location.origin + location.pathname;

  const spansYear = document.querySelectorAll(".getYear");

  function populateYearSpans() {
    spansYear.forEach(item => {
      item.textContent = new Date().getFullYear();
    });
  }

  function redirectTo(location) {
    window.location.href = location || HOME_PATH;
  }

  return { populateYearSpans, redirectTo }

})();

Utils.populateYearSpans();

const Utils = (function() {

  const spansYear = document.querySelectorAll(".getYear");

  function populateYearSpans() {
    spansYear.forEach(item => {
      item.textContent = new Date().getFullYear();
    });
  }

  return { populateYearSpans }

})();

Utils.populateYearSpans();

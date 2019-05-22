const BSAlert = (function() {

  const $alertContainer = $('.alert-container');

  function _generateHTML(message) {
    return `
      <div class="alert alert-success alert-dismissible fade show" role="alert" style="display: none">
        ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;
  }

  function render(message) {
    $alertContainer.html(_generateHTML(message));
    $alertContainer.find(".alert").fadeIn();
  }

  return { render };

})();

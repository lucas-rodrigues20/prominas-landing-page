const Inscricao = (function() {

  let Utils;

  const form = document.querySelector("form");
  const inputName = form.querySelector("input[name='name']");
  const inputEmail = form.querySelector("input[name='email']");


  function init(utils) {
    Utils = utils;

    form.addEventListener('submit', _subscribeNewUser);
  }

  function _subscribeNewUser(event) {
    event.preventDefault();

    const newUser = {
      name: inputName.value,
      email: inputEmail.value
    };

    alert(`Obrigado Por Se Inscrever ${newUser.name}!`);

    Utils.redirectTo();
  }

  return { init };

})();

Inscricao.init(Utils);

const Inscricao = (function() {

  let Utils, BSAlert;
  let useRefresh = false;

  const form = document.querySelector("form");
  const inputName = form.querySelector("input[name='name']");
  const inputEmail = form.querySelector("input[name='email']");


  function init(utils, alert) {
    Utils = utils;
    BSAlert = alert;

    form.addEventListener('submit', _subscribeNewUser);
  }

  function enableRefresh(enable) {
    useRefresh = enable || false;
    console.log(`Page Refresh on Submit ${enable ? 'ENABLED' : 'DISABLED'}`);
  }

  function _subscribeNewUser(event) {
    event.preventDefault();

    const newUser = {
      name: inputName.value,
      email: inputEmail.value
    };

    if (useRefresh) {
      alert(`Obrigado Por Se Inscrever ${newUser.name}!`);
      Utils.redirectTo();

    } else {
      BSAlert.render(`<strong>Obrigado ${newUser.name}!</strong> Em breve enviaremos nossas ofertas no seu email.`);
    }

  }

  return { init, enableRefresh };

})();

Inscricao.init(Utils, BSAlert);

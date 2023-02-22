function checkIfEmail(str) {
  return str.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;
}
function registerModal({
  urlBase,
  idBtnCloseModal,
  idTabIndividual,
  idTabEntities,
  idBtnSubmit,
  idInputTab1,
  idInputTab2,
  idCheckBoxTab1,
  idCheckBoxTab2,
}) {
  const log = console.log;
  log("Init function modal sc v1");
  // Se declaran variables
  var mail = "";
  var isValidEmail = false;
  var acceptTerms = false;
  var id_user = null;

  // get elements
  const scBtnCloseModal1 = document.getElementById(idBtnCloseModal);
  const scBtnIndividual = document.getElementById(idTabIndividual);
  const scBtnEntities = document.getElementById(idTabEntities);
  const btnRegister1 = document.getElementById(idBtnSubmit);

  const scInput1 = document.getElementById(idInputTab1);
  const scInput2 = document.getElementById(idInputTab2);

  const scCheckbox1 = document.getElementById(idCheckBoxTab1);
  const scCheckbox2 = document.getElementById(idCheckBoxTab2);

  btnRegister1.style.backgroundColor = "#adaeb2";

  // para cabiar la UI si cumple el formato de correo se pinta de azul sino de gris
  scInput1.addEventListener("input", (e) => {
    mail = e.target.value;
    isValidEmail = checkIfEmail(mail);
    if (isValidEmail && acceptTerms) {
      btnRegister1.style.backgroundColor = "#006ac1";
    } else {
      btnRegister1.style.backgroundColor = "#adaeb2";
    }
  });

  scInput2.addEventListener("input", (e) => {
    mail = e.target.value;
    isValidEmail = checkIfEmail(mail);
    if (isValidEmail && acceptTerms) {
      btnRegister1.style.backgroundColor = "#006ac1";
    } else {
      btnRegister1.style.backgroundColor = "#adaeb2";
    }
  });

  scCheckbox1.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      id_user = Math.random().toString(36).slice(2, 6);
      acceptTerms = true;

      if (checkIfEmail(mail)) {
        btnRegister1.style.backgroundColor = "#006ac1";
      }
    } else {
      id_user = null;
      acceptTerms = false;
      btnRegister1.style.backgroundColor = "#adaeb2";
    }
  });

  scCheckbox2.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      id_user = Math.random().toString(36).slice(2, 6);
      acceptTerms = true;

      if (checkIfEmail(mail)) {
        btnRegister1.style.backgroundColor = "#006ac1";
      }
    } else {
      id_user = null;
      acceptTerms = false;
      btnRegister1.style.backgroundColor = "#adaeb2";
    }
  });

  scBtnIndividual.onclick = function () {
    scInput1.value = mail;
    scCheckbox1.checked = acceptTerms;
    console.log("acceptTerms", acceptTerms);
  };

  scBtnEntities.onclick = function () {
    scInput2.value = mail;
    scCheckbox2.checked = acceptTerms;
    console.log("acceptTerms", acceptTerms);
  };

  btnRegister1.onclick = function () {
    if (isValidEmail && acceptTerms) {
      var isIndividual = document
        .getElementById("sc-btn-individual")
        .getAttribute("aria-selected");
      var entity_type = isIndividual === "true" ? "Persona" : "Empresa";
      id_user = Math.random().toString(36).slice(2, 6);
      const params = new URLSearchParams({
        entity_type: entity_type,
        id_user: id_user,
        "checkbox-3": acceptTerms,
        mail: mail,
      });

      let a = document.createElement("a");
      a.target = "_blank";
      a.href = `${urlBase}?${params}`;
      a.click();
    }
  };

  scBtnCloseModal1.onclick = function () {
    scInput1.value = "";
    scCheckbox1.checked = false;
    scInput2.value = "";
    scCheckbox2.checked = false;
    btnRegister1.style.backgroundColor = "#adaeb2";
    isValidEmail = false;
    acceptTerms = false;
  };
  log("End function modal sc v1");
}

function registerByPage({
  urlBase,

  idTabIndividual,
  idTabEntities,
  idBtnSubmit,
  idInputTab1,
  idInputTab2,
  idCheckBoxTab1,
  idCheckBoxTab2,
}) {
  const { log } = console;
  log("Init function page sc v1");
  // Se declaran variables
  let mail = "";
  let isValidEmail = false;
  let acceptTerms = false;
  let id_user = null;

  // get elements

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
      const isIndividual = document
        .getElementById("sc-btn-individual")
        .getAttribute("aria-selected");
      const entity_type = isIndividual === "true" ? "Persona" : "Empresa";
      const params = new URLSearchParams({
        entity_type,
        id_user,
        "checkbox-3": acceptTerms,
        mail,
      });

      const a = document.createElement("a");
      a.target = "_blank";
      a.href = `${urlBase}?${params}`;
      a.click();

      scInput1.value = "";
      scCheckbox1.checked = false;
      scInput2.value = "";
      scCheckbox2.checked = false;
      btnRegister1.style.backgroundColor = "#adaeb2";
      isValidEmail = false;
      acceptTerms = false;
    }
  };

  log("End function page sc v1");
}

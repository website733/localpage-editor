(() => {
  if (document.body.contentEditable === "true") {
    document.body.contentEditable = "false";
    document.designMode = "off";
    alert("Mode édition désactivé");
  } else {
    document.body.contentEditable = "true";
    document.designMode = "on";
    alert("Mode édition activé !");
  }
})();

function generateCSRFToken() {
    return Math.random().toString(36).substring(2);
  }
  
  function testCSRFToken() {
    const csrfToken = document.getElementById("csrf-token").value;
    if (csrfToken !== localStorage.getItem("csrfToken")) {
      alert("Falha na proteção CSRF! A solicitação foi bloqueada.");
    } else {
      alert("Proteção CSRF OK!");
    }
  }
  
  const csrfToken = generateCSRFToken();
  localStorage.setItem("csrfToken", csrfToken);
  document.getElementById("csrf-token").value = csrfToken;
  
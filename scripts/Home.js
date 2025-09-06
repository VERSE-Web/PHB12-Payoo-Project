document.addEventListener("DOMContentLoaded", () => {
  const mapping = {
    "btn-add-money": "form-add-money",
    "btn-cashout": "form-cashout",
    "btn-transfer-money": "form-transfer-money",
    "btn-get-bonus": "form-get-bonus",
    "btn-pay-bill": "form-pay-bill"
  };

  let currentVisibleForm = null;

  Object.keys(mapping).forEach(btnId => {
    const btn = document.getElementById(btnId);
    const form = document.getElementById(mapping[btnId]);
    if (!btn || !form) return;

    btn.addEventListener("click", () => {
      if (currentVisibleForm === form) {
        form.style.display = "none";
        currentVisibleForm = null;
      } else {
        if (currentVisibleForm) currentVisibleForm.style.display = "none";
        form.style.display = "flex";
        currentVisibleForm = form;
      }
    });
  });
});

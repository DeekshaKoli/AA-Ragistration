const scriptURL = "https://script.google.com/macros/s/AKfycbx7vrjdj0L4CAaz_wKYjHuVGSSPcINFEg-Wfj_VF-LNkFSzssKxIiZrPoG-7rqhYY-o/exec";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.querySelector("[name='name']").value,
    father: document.querySelector("[name='father']").value,
    address: document.querySelector("[name='address']").value,
    dob: document.querySelector("[name='dob']").value,
    category: document.querySelector("[name='category']").value,

    mobile: document.querySelector("[name='mobile']").value,
    whatsapp: document.querySelector("[name='whatsapp']").value,
    email: document.querySelector("[name='email']").value,
    occupation: document.querySelector("[name='occupation']").value,
    fees: document.querySelector("[name='fees']").value,
    reference: document.querySelector("[name='reference']").value,

    course: document.querySelector("input[name='course']:checked")?.value || "",

    tenthBoard: document.querySelector("[name='tenthBoard']").value,
    tenthYear: document.querySelector("[name='tenthYear']").value,
    tenthMarks: document.querySelector("[name='tenthMarks']").value,

    twelfthBoard: document.querySelector("[name='twelfthBoard']").value,
    twelfthYear: document.querySelector("[name='twelfthYear']").value,
    twelfthMarks: document.querySelector("[name='twelfthMarks']").value
  };

  await fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("Form Submitted Successfully!");
  document.querySelector("form").reset();
});
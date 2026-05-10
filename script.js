const scriptURL = "https://script.google.com/macros/s/AKfycbx7vrjdj0L4CAaz_wKYjHuVGSSPcINFEg-Wfj_VF-LNkFSzssKxIiZrPoG-7rqhYY-o/exec";

let isSubmitted = false;

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // ❌ prevent double submit
  if (isSubmitted) return;

  // ===== GET VALUES =====
  const name = document.querySelector("[name='name']").value.trim();
  const father = document.querySelector("[name='father']").value.trim();
  const mobile = document.querySelector("[name='mobile']").value.trim();
  const email = document.querySelector("[name='email']").value.trim();
  const course = document.querySelector("input[name='course']:checked");

  // ===== VALIDATION =====
  if (!name || !father || !mobile || !email) {
    alert("❌ Please fill all required fields");
    return;
  }

  if (!course) {
    alert("❌ Please select a course");
    return;
  }

  if (mobile.length < 10) {
    alert("❌ Invalid mobile number");
    return;
  }

  // ===== BLOCK MULTIPLE SUBMIT =====
  isSubmitted = true;

  const data = {
    name,
    father,
    address: document.querySelector("[name='address']").value,
    dob: document.querySelector("[name='dob']").value,
    category: document.querySelector("[name='category']").value,

    mobile,
    whatsapp: document.querySelector("[name='whatsapp']").value,
    email,
    occupation: document.querySelector("[name='occupation']").value,
    fees: document.querySelector("[name='fees']").value,
    reference: document.querySelector("[name='reference']").value,

    course: course.value,

    tenthBoard: document.querySelector("[name='tenthBoard']").value,
    tenthYear: document.querySelector("[name='tenthYear']").value,
    tenthMarks: document.querySelector("[name='tenthMarks']").value,

    twelfthBoard: document.querySelector("[name='twelfthBoard']").value,
    twelfthYear: document.querySelector("[name='twelfthYear']").value,
    twelfthMarks: document.querySelector("[name='twelfthMarks']").value
  };

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    // ✅ SUCCESS PAGE WITH NAME
    window.location.href = `success.html?name=${encodeURIComponent(name)}`;

  } catch (error) {
    alert("❌ Error submitting form");
    isSubmitted = false;
  }
});
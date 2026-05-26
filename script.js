// // 🧾 Bắt sự kiện gửi form
// document.getElementById("infoForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const fullname = document.getElementById("fullname").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const phone = document.getElementById("phone").value.trim();
//   const major = document.getElementById("major").value.trim();
//   // const studyPlanInput = document.querySelector('input[name="studyPlan"]:checked');

//   // if (!studyPlanInput) {
//   //   alert("Vui lòng chọn ý định học Thạc sĩ!");
//   //   return;
//   // }

//   // const studyPlan = studyPlanInput.value;

//   // ✅ Lưu thông tin vào localStorage
//   const playerData = { fullname, email, phone, major };
//   localStorage.setItem("playerData", JSON.stringify(playerData));

//   // ➡️ Chuyển sang trang quay thưởng
//   window.location.href = "wheel.html";
// });
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTb09ocspXfUFa9eUEIXaRTN-u2UdPRWqXDggTsSuSdODLLfJOpT7C_gfSDl3BqrGs/exec";

document.getElementById("infoForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const btn = this.querySelector("button[type=submit]");
  btn.textContent = "Đang gửi...";
  btn.disabled = true;

  const formData = {
    fullname: document.getElementById("fullname").value,
    email:    document.getElementById("email").value,
    phone:    document.getElementById("phone").value,
    major:    document.getElementById("major").value
  };

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",        // ← thêm dòng này
      body: JSON.stringify(formData)
    });

    window.location.href = "wheel.html";

  } catch (err) {
    btn.textContent = "Hoàn thành & tiếp tục";
    btn.disabled = false;
    alert("Lỗi kết nối, vui lòng thử lại!");
  }
});
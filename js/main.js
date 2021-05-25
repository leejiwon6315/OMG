const userNameInNav = document.getElementById("nav-user-name");
const logoutButton = document.getElementById("logout-button");

let userNameValue = "";
let userMajorValue = "";

const getUserInfo = () => {
  userNameValue = localStorage.getItem("omg-name");
  userMajorValue = localStorage.getItem("omg-major");
  userNameInNav.innerText = `${userNameValue} ${userMajorValue} \n 안녕하세요!`;
};

const logout = () => {
  localStorage.removeItem("omg-name");
  localStorage.removeItem("omg-major");
  window.location.href = "./index.html";
};

logoutButton.addEventListener("click", logout);

getUserInfo();
// 유저 정보 불러오기

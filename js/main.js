const userNameInNav = document.getElementById("nav-user-name");
const logoutButton = document.getElementById("logout-button");
const devMenu = document.getElementById("dev-menu");
const designMenu = document.getElementById("design-menu");
const managerMenu = document.getElementById("manager-menu");
const pdMenu = document.getElementById("pd-menu");
const asideButton = document.querySelectorAll(".aside-btn");

let userNameValue = "";
let userMajorValue = "";
let visibleMajor = "";

const changeIframe = (url) => {
  document.getElementById("major-iframe").src = url;
};

const getUserInfo = () => {
  userNameValue = localStorage.getItem("omg-name");
  userMajorValue = localStorage.getItem("omg-major");
  userNameInNav.innerText = `${userNameValue} ${userMajorValue} \n 안녕하세요!`;

  visibleMajor = userMajorValue;

  if (userMajorValue === "개발자님") {
    changeIframe("./page/club/clubFrameDev.html");
  } else if (userMajorValue === "디자이너님") {
    changeIframe("./page/club/clubFrameDesigner.html");
  } else if (userMajorValue === "기획자님") {
    changeIframe("./page/club/clubFrameManager.html");
  } else if (userMajorValue === "PD님") {
    changeIframe("./page/club/clubFramePd.html");
  } else {
    changeIframe("./page/club/clubFrameNormal.html");
  }
};

const onClickMenuItem = (e) => {
  if (e.target.innerText === "개발자") {
    visibleMajor = "개발자님";
    changeIframe("./page/club/clubFrameDev.html");
  } else if (e.target.innerText === "디자이너") {
    visibleMajor = "디자이너님";
    changeIframe("./page/club/clubFrameDesigner.html");
  } else if (e.target.innerText === "기획자") {
    visibleMajor = "기획자님";
    changeIframe("./page/club/clubFrameManager.html");
  } else {
    visibleMajor = "PD님";
    changeIframe("./page/club/clubFramePd.html");
  }
};

const changeCategory = (e) => {
  if (e.target.innerText == "동아리/소모임") {
    if (visibleMajor === "개발자님") {
      changeIframe("./page/club/clubFrameDev.html");
    } else if (visibleMajor === "기획자님") {
      changeIframe("./page/club/clubFrameManager.html");
    } else if (visibleMajor === "PD님") {
      changeIframe("./page/club/clubFramePd.html");
    } else if (visibleMajor === "디자이너님") {
      changeIframe("./page/club/clubFrameDesigner.html");
    } else {
      changeIframe("./page/club/clubFrameNormal.html");
    }
  } else if (e.target.innerText == "참고 사이트") {
    if (visibleMajor === "개발자님") {
      changeIframe("./page/site/siteFrameDev.html");
    } else if (visibleMajor === "기획자님") {
      changeIframe("./page/site/siteFrameManager.html");
    } else if (visibleMajor === "PD님") {
      changeIframe("./page/site/siteFramePd.html");
    } else if (visibleMajor === "디자이너님") {
      changeIframe("./page/site/siteFrameDesigner.html");
    } else {
      changeIframe("./page/site/siteFrameNormal.html");
    }
  } else if (e.target.innerText == "커리큘럼") {
    if (visibleMajor === "개발자님") {
      changeIframe("./page/grade/gradeFrameDev.html");
    } else if (visibleMajor === "기획자님") {
      changeIframe("./page/grade/gradeFrameManager.html");
    } else if (visibleMajor === "PD님") {
      changeIframe("./page/grade/gradeFramePd.html");
    } else if (visibleMajor === "디자이너님") {
      changeIframe("./page/grade/gradeFrameDesigner.html");
    } else {
      changeIframe("./page/grade/gradeFrameNormal.html");
    }
  } else {
    if (visibleMajor === "개발자님") {
      changeIframe("./page/machine/machineFrameDev.html");
    } else if (visibleMajor === "기획자님") {
      changeIframe("./page/machine/machineFrameManager.html");
    } else if (visibleMajor === "PD님") {
      changeIframe("./page/machine/machineFramePd.html");
    } else if (visibleMajor === "디자이너님") {
      changeIframe("./page/machine/machineFrameDesigner.html");
    } else {
      changeIframe("./page/machine/machineFrameNormal.html");
    }
  }
};

const logout = () => {
  localStorage.removeItem("omg-name");
  localStorage.removeItem("omg-major");
  window.location.href = "./index.html";
};

logoutButton.addEventListener("click", logout);
devMenu.addEventListener("click", onClickMenuItem);
designMenu.addEventListener("click", onClickMenuItem);
managerMenu.addEventListener("click", onClickMenuItem);
pdMenu.addEventListener("click", onClickMenuItem);
for (let i = 0; i < 4; i++) {
  asideButton[i].addEventListener("click", changeCategory);
}

getUserInfo();
// 유저 정보 불러오기

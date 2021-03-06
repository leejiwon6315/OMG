const userNameInNav = document.getElementById("nav-user-name");
const logo = document.getElementById("logo");
const homeButton = document.getElementById("home-button");
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
// iframe 주소 변경 함수

const changeProfile = (url) => {
  document.getElementById("user-profile").src = url;
};
// 프로필 이미지 변경 함수

const goHome = () => {
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
// 홈 버튼 : 진로별 홈 화면이 다름

const getUserInfo = () => {
  userNameValue = localStorage.getItem("omg-name");
  userMajorValue = localStorage.getItem("omg-major");
  userNameInNav.innerText = `${userNameValue} ${userMajorValue} \n 안녕하세요!`;

  visibleMajor = userMajorValue;

  if (userMajorValue === "개발자님") {
    changeIframe("./page/club/clubFrameDev.html");
    changeProfile("./img/profile/profile_developer.svg");
  } else if (userMajorValue === "디자이너님") {
    changeIframe("./page/club/clubFrameDesigner.html");
    changeProfile("./img/profile/profile_designer.svg");
  } else if (userMajorValue === "기획자님") {
    changeIframe("./page/club/clubFrameManager.html");
    changeProfile("./img/profile/profile_planner.svg");
  } else if (userMajorValue === "PD님") {
    changeIframe("./page/club/clubFramePd.html");
    changeProfile("./img/profile/profile_broadcast.svg");
  } else {
    changeIframe("./page/club/clubFrameNormal.html");
    changeProfile("./img/profile/profile_student.svg");
  }
};
// 유저 정보를 가져와 정보에 맞게 이름과 직무, 프로필을 보여줌
// 홈 화면을 진로에 맞게 설정

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
// 진로별 메뉴

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
// 진로별 카테고리 종류 구분

const logout = () => {
  localStorage.removeItem("omg-name");
  localStorage.removeItem("omg-major");
  window.location.href = "./index.html";
};
// 로그아웃

logo.addEventListener("click", goHome);
homeButton.addEventListener("click", goHome);
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

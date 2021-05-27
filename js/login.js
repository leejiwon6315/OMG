const surveyButton = document.querySelectorAll(".survey-button");
const loginButton = document.getElementById("login-btn");
const inputNameButton = document.getElementById("input-name");

let userName = "";
let result = "";
let majorPoint = [0, 0, 0, 0, 1];
// 배열순서 : 미디어, 디자인, 개발, 기획, 기본

const calMajor = (e) => {
  if (e.target.id === "mediaPart") {
    if (e.target.style.color === "white") {
      majorPoint[0] -= 1;
      e.target.style.backgroundColor = "rgb(233, 233, 233)";
      e.target.style.color = "black";
    } else {
      majorPoint[0] += 1;
      e.target.style.backgroundColor = "#6769e9";
      e.target.style.color = "white";
    }
  } else if (e.target.id === "designPart") {
    if (e.target.style.color === "white") {
      majorPoint[1] -= 1;
      e.target.style.backgroundColor = "rgb(233, 233, 233)";
      e.target.style.color = "black";
    } else {
      majorPoint[1] += 1;
      e.target.style.backgroundColor = "#6769e9";
      e.target.style.color = "white";
    }
  } else if (e.target.id === "devPart") {
    if (e.target.style.color === "white") {
      majorPoint[2] -= 1;
      e.target.style.backgroundColor = "rgb(233, 233, 233)";
      e.target.style.color = "black";
    } else {
      majorPoint[2] += 1;
      e.target.style.backgroundColor = "#6769e9";
      e.target.style.color = "white";
    }
  } else if (e.target.id === "managePart") {
    if (e.target.style.color === "white") {
      majorPoint[3] -= 1;
      e.target.style.backgroundColor = "rgb(233, 233, 233)";
      e.target.style.color = "black";
    } else {
      majorPoint[3] += 1;
      e.target.style.backgroundColor = "#6769e9";
      e.target.style.color = "white";
    }
  }
};
// 포인트 계산 및 선택/선택해제시 색 변경

const comparePoint = () => {
  const result = Math.max(...majorPoint);
  let j;

  for (j = 0; j < 5; j++) {
    if (result === majorPoint[j]) {
      break;
    }
  }

  if (j === 0) return "PD님";
  else if (j === 1) return "디자이너님";
  else if (j === 2) return "개발자님";
  else if (j === 3) return "기획자님";
  else return "학우님";
};
// 최대 포인트 계산 및 해당 포인트 직무 반환

const setUserName = (e) => {
  userName = e.target.value;
};
// 유저 이름 저장

const loadUserName = () => {
  const getUserName = localStorage.getItem("omg-name");

  if (getUserName === null || getUserName === "" || getUserName === undefined) {
  } else {
    window.location.href = "./main.html";
  }
};
// 유저 이름 로드 후 이름이 존재하면 url 이동

const storeResult = () => {
  if (userName === "" || userName === null || !userName) {
    alert("이름을 입력해주세요..!");
    return;
  } else {
    result = comparePoint();
    localStorage.setItem("omg-name", userName);
    localStorage.setItem("omg-major", result);
    majorPoint = [0, 0, 0, 0];
    window.location.href = "./main.html";
  }
};
// 이름/직무 저장 및 초기화

for (let i = 0; i < 24; i++) {
  surveyButton[i].addEventListener("click", calMajor);
}
loginButton.addEventListener("click", storeResult);
inputNameButton.addEventListener("change", setUserName);

loadUserName();
// 화면 로드 시 즉시 함수 실행

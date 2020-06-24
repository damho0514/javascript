
//쿠키 확인 검사
function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for (var i in cookies) {
        if (cookies[i].search(name) != -1) { //쿠키를 찾으면
            return true; //찾은 의미로 true반환
        }
    }
    //    console.log(cookies);
}

function createCookie(mainPopup) {
    var name = mainPopup; // 이름은 매개변수로 받는다
    var value = "1234"; //비밀번호 아무거나 설정

    //매개변수를 받아서 해당이름으로 1일간 유지되는 쿠키를 생성
    console.log(document.cookie);
    var date = new Date();
    date.setDate(date.getDate() + 1);

    var cookie = "";
    cookie += name + "=" + value + ";";
    cookie += "expires=" + date.toUTCString();

    document.cookie = cookie;

}
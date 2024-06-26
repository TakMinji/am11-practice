/*
    조건문
    
    실무사용의 예
    1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.
	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
*/
//* case.1 현재시간이 오후인가 오전인가
function amORpm(){
    var date = new Date(); //? new -> 생성. Date()-연,월,일,시,분,초 < 객체 = 전역함수.
    var hour = date.getHours();
    console.log("가져온 시간 정보의 자료형은" + typeof(hour) + ", 값은" + hour + "입니다.");
    if(hour<12){
        // * 오전/오후의 기준? 12시 -> am/pm -> 0~=24 -> 0~23
        // ? if(condition=조건) -> 조건의 특징은 값의 반환이 무조건 true / false. -> 조건에는 비교가 동반
        alert("오전입니다.");
    }else{
        alert("오후입니다.");
    }
    // if 조건이 참이여야 작동함.
    // else - 외 나머지 다.
}

//* case.2 현재일자가 말일인가? 아닌가?
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // day는 월~일요일, date는 1,2,3,4일...수치
    console.log("가져온 일자 정보의 자료형은" + typeof(day) + ", 값은" + day + "입니다.");
    if(day<30){
        alert("아직 말일이 아닙니다.");
    }else{
        alert("말일입니다.");
    }
}

//* todo. 1 현재 시간이 아침 or 점심 or 저녁 먹을 시간인지 판별하여 alert으로 출력해주기.
//  * 아침(6~8) : "아침먹어", 점심(13~15) : '점심먹어', 저녁(그외나머지) : '그만먹어'
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    console.log("가져온 시간 정보의 자료형은" + typeof(hour) + ", 값은" + hour + "입니다.");
    if(hour < 8){
        // 0부터 7까지
        alert("아침먹어");
    }else if(hour < 15){
        // 8부터 14까지
        // ? else if(선행조건이 아니라 이 조건 이라면)
        alert("점심먹어");
    }else{
        alert("그만먹어");
    }
} 

//* case.3 양,음수 판별.
function numJugment(){
    var numb = prompt('숫자를 입력하세요','양,음수 상관없음. 문자금지.');
    console.log(typeof(numb) + '=' + numb);
    numb = parseInt(numb); //형변환//
    console.log(typeof(numb) + '=' + numb);
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('입력된 값이 0 이거나 잘못된 값이 입력되었습니다.');
    }
}

// todo. 홀수와 짝수의 판별 조건함수를 만들기.
// ? 입력부 생성 - prompt();
// alert("짝수입니다."); ? 짝수인 상황 / cssSelectior 사용불가
// alert("홀수입니다."); ? 홀수인 상황
// alert("??"); ? 예외처리 - 오류
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요','홀,짝을 구분해드립니다.'); // ? 입력부 생성 - prompt();
    console.log(typeof(numb) + '=' + numb);
    numb = parseInt(numb);
    console.log(typeof(numb) + '=' + numb);
    if(numb%2 == 0){
        alert("짝수입니다.");
    }else if(numb%2 == 1){
        alert("홀수입니다.");
    }else{
        alert("올바른 값을 입력하세요.");
    }
}

// *case.4 다음 세 과목의 점수를 입력받아 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    // ? 수 : 100 ~ 90 /  우 : 89 ~ 80 / 미 : 79 ~ 70 / 양 : 69 ~ 60 : 가 : 59 ~ 0
    var koreanScore = prompt("국어점수를 입력하시오.",'');
    // ! prompt -> dataType : string
    var englishScore = prompt("영어점수를 입력하시오.",'');
    var mathScore = prompt("수학점수를 입력하시오.",'');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;
    console.log(avg);
    if(avg > 100 || avg < 0){
        alert("점수 똑바로 입력하라.")
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다. 특급이구먼');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다. 우수하구먼');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n'  + '미 입니다. 괜찮구먼');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n'  + '양 입니다. 망했구먼');
    }else{
        alert('평균' + avg + '점 \n'  + '가 입니다. 맞겠구먼');
    }
}

// ? permission - 권한 : 접근 가능 / 불가.

// *case.5 사용자 id(Mark)를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = window.prompt("사용자의 아이디를 입력하시오.");
    if(userID == "Mark"){
        alert("Mark님으로 확인되었습니다.");
    }else{
        alert("ID가 잘못 입력 되었습니다.");
    }
}

// *case.6 사용자 id(Mark)와 password(1234)를 입력받고 둘 다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    var userID = window.prompt("사용자의 아이디를 입력하시오.");
    var userPW = window.prompt("사용자의 패스워드를 입력하시오.");
    if(userID=="Mark"&&userPW=="1234"){
        alert("Mark님으로 확인되었습니다.");
    }else{
        alert("ID 혹은 Password가 틀렸습니다.");
    }
} 

function userInfoCheck1(){
    var userID = prompt("사용자의 아이디를 입력하시오.");
    var userPW = prompt("사용자의 패스워드를 입력하시오.");
    (userID=="Mark"&&userPW=="1234")? alert("Mark님으로 확인되었습니다.") : alert("ID 혹은 PW가 틀렸습니다.");
}



// todo. 사용자 id "mark"와 passwoed "1234"의 정보가 틀릴 경우 틀린 정보에 대한 오류 메시지 출력.
/*
    *console.log("모든 정보가 맞지않습니다.");
    *console.log("ID가 존재하지 않습니다.");
    *console.log("password가 틀렸습니다.");
    *console.log("Mark님으로 확인되었습니다.");
*/
function userInfoCheck2(){
    var userID = window.prompt("사용자의 아이디를 입력하시오.");
    var userPW = window.prompt("사용자의 패스워드를 입력하시오.");
    // todo.1 승인메시지 *console.log("Mark님으로 확인되었습니다.");
    // todo.2 거부메시지 *console.log("모든 정보가 맞지않습니다.");
    // todo.3 거부메시지 *console.log("ID가 존재하지 않습니다.");
    // todo.4 거부메시지 *console.log("password가 틀렸습니다.");
    // ! 4번을 예외(else)로 던지지 말 것. - 허점이 많아지기때문에.
    if(userID=="Mark"&&userPW=="1234"){
        console.log("Mark님으로 확인되었습니다.");
    }else if(userID!="Mark"&&userPW!="1234"){
        console.log("모든 정보가 맞지않습니다.");
    }else if(userID!="Mark"){
        console.log("ID가 존재하지 않습니다.");
    }else if(userPW!="1234"){
        console.log("password가 틀렸습니다.");
    // 조건을 세분화할때는 else로 끝내지 않기.
    }
}

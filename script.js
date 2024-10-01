// 초기 값으로 0을 설정합니다.
let count = 0;
// "value" 와 모든 ".btn" 클래스를 가진 버튼을 선택합니다.
const value = document.querySelector("#value");
const btns = document.querySelector(".btn");


// 모든 버튼에 대해 forEach 루프를 사용하여 각각에 이벤트 리스너를 추가합니다.
btns.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener("click", function (e) {
        // 클릭된 버튼의 클래스 목록을 가져옵니다.
        const styles = e.currentTarget.classList;
        console.log(e.target);
        console.log(e.currentTarget);

        // 클릭된 버튼이 "decrease" 클래스를 포함하면 count를 1 감소합니다.
        if(styles.contains("decrease")) {
            count--;
        }

        // 클릭된 버튼이 "increase" 클래스를 포함하면 count를 1 증가시킵니다.
        else if(styles.contains("increase")) {
            count++;
        }

        // 그 외의 경우 ( 즉, "reset" 버튼이 클릭되면) count를 0으로 설정합니다.
        else {
            count = 0;
        }
        // count 값에 따라 "value"의 텍스트 색상을 변경합니다.
        if(count > 0) {
            value.style.color = "green";    // count가 양수이면 녹색으로 변경
        }
        if(count < 0) {
            value.style.color = "red";      // count가 음수이면 빨강색으로 변경
        }
        if(count === 0) {
            value.style.color = "#222"      // count가 0이면 기본 색상(#222)으로 변경
        }

        // "value"의 텍스트를 현재 count 값으로 설정합니다.
        value.textContent = count;
    });
});
// 1. 1부터 20까지의 숫자를 출력하되, 3의 배수일 때에만 숫자 대신"짝: 이라는 글자를 출력하기
for (var i = 1;i <= 20; i++) {
    console.log(i);
    if (i % 3 === 0) {       // 3의 배수일 떄
        console.log(i);
        ("짝")
    } else {
        console.log(i);
    }

}
    // 2. 1부터 100까지 더하다가 합계가 500이 넘는 순간, 그 숫자가 몇인지 출력하고 반복문 종료

// 1사이클 => i = 1=> sum 1
// 2사이클 => i - 2-> sum + 2 = 3
// 3사이클 => i = 3=> sum + 3 = 6
var sum = 0;
for (var i =1; i <= 100; i++){
    if (sum >= 500){
        console.log(sum);
    }
    break;
}

// 3 . 거꾸로 10부터 1까지 숫자를 출력하는데 짝수일 때만 숫자를 출력하기
for(var i = 10; i >= 1; i--){
    if(i % 2 === 0) {
        console.log(i);
    }
}

// 4. 1부터 10까지 숫자를 출력하는데 7만 뺴고 출력
for (var i = 1; i <- 10; i++){
    if(i == 7) {
    }
    console.log(i);


// 5 . var text = "JavaScript is powerful and fun!; 이라는 text에서 "o" 의 갯수 세기
var text = "JavaScript is powerful and fun"    // 31굴자 -> 1부터 31글자까지 있다
var result = 0;    //o을 만났을 떄 갯수 카운티응ㄹ 할 변수

// text 라고 하는 변수는 string 타입이고, 그 변수에서 .length를 사용하면 전체 자릿수가 나옴
for(var i =0; i <text.length; i++) {
    if (text[i] === "o") {
        result = result + 1;
    }
}
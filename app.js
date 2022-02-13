let roopCount = 0;

// 実行ボタンを押した時に走る関数
const startButton = () => {
    let $int1 = document.getElementById("int-1").value;
    let $int2 = document.getElementById("int-2").value;
    let $ul = document.getElementById("ul");

    console.log($int1)

    while (roopCount < 100) {
        roopCount++;
        let li = document.createElement("li");

        // liクラスを作成、画面に表示出来るようにする関数
        const ansView = () => {
            $ul.appendChild(li);
            li.innerHTML = roopCount;
        }

        if (roopCount % $int1 === 0 && roopCount % $int2 === 0) {
            ansView();
            li.classList.add('fizzbuzz');
        } else if (roopCount % $int1 === 0) {
            ansView();
            li.classList.add('fizz');
        } else if (roopCount % $int2 === 0) {
            ansView();
            li.classList.add('buzz');
        } else {
            ansView();
            li.classList.add('foo');
        }
    }
} 

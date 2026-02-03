// 1
function greet(name) {
	return "Привет, " + name;
}
console.log(greet('Bakhtiyar'));

// 2
function sum(a, b) {
	return a + b
}
console.log(sum(1, 1));

// 3
function showMessage() {
	alert("Функция сработала!");
}

showMessage();

// 4
function btn() {
	const btn = document.getElementById('btn1');

	btn.addEventListener('click', function() {
		alert("Кнопка нажата!");
	});
}

btn();

// 5
function text() {
	const text = document.getElementById('hoverText')

	text.addEventListener('mouseover', function() {
		text.style.color = 'red';
	});	

	text.addEventListener('mouseout', function() {
		text.style.color = 'black';
	});
}

text();

// 6
let count = 0;
const btn_click = document.getElementById('counterBtn');
const display = document.getElementById('countDisplay');

btn_click.addEventListener('click', function() {
	count = count + 1;
	display.innerText = count;
});

// 7
const input = document.getElementById('myInput');
const output = document.getElementById('myOutput');

input.addEventListener('input', function() {
	output.innerText = input.value;
});

// 8
function showAlert(msg) {
	alert(msg);
}
const parametr = document.getElementById('msgBtn');
parametr.addEventListener('click', function() {
	showAlert('Привет, это параметр!');
});

// 9
const box = document.getElementById('colorBox');

box.addEventListener('click', function() {
    box.classList.toggle('blue');
    box.classList.toggle('red');
});

// 10
document.getElementById('sumBtn').addEventListener('click', function() {
	const a = Number(document.getElementById('num1').value);
	const b = Number(document.getElementById('num2').value);

	alert("Сумма: " + (a + b));
});

// 11
function createBox(color) {
	const div = document.createElement('div');
	div.style.display = 'inline-block';
	div.style.marginTop = '15px';
	div.style.marginRight = '5px';
	div.style.width = '100px';
    div.style.height = '100px';
    div.style.background = color;


    document.getElementById('container').appendChild(div);
}

// 12
const list = document.getElementById('list');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        alert("Выбрано: " + event.target.innerText);
    }
});

// 13
let counter = 0;
let timerId = null; 

document.getElementById('start').addEventListener('click', function() {
    if (timerId) return; 
    
    timerId = setInterval(function() {
        counter++;
        document.getElementById('timer').innerText = counter;
    }, 1000); 
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timerId); 
    timerId = null;
});

// 14
document.getElementById('checkEmail').addEventListener('click', function() {
    const val = document.getElementById('email').value;
    
    if (val.includes('@')) {
        alert("Email принят!");
    } else {
        alert("Ошибка: нет @");
    }
});

// 15
const best_const_secret = Math.floor(Math.random() * 10) + 1;
let let_tries = 0;

document.getElementById('playBtn').addEventListener('click', function() {
    let_tries++;
    const userNum = Number(document.getElementById('guessNum').value);
    const hint = document.getElementById('hint');

    if (userNum === best_const_secret) {
        hint.innerText = "Угадал! Попыток: " + let_tries;
        hint.style.color = "green";
    } else if (userNum < best_const_secret) {
        hint.innerText = "Больше";
    } else {
        hint.innerText = "Меньше";
    }
});
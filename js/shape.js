// function labfunc1() {
// 	var re = /^([А-Я][а-я]+)[,\s]\s*([А-Я][а-я]+)\s*$/; //регулярное выражение    
// 	var str = document.getElementById("fio").value;
// 	if (re.test(str)==true) {
// 		str = str.replace(re, "$1 $2");
// 		alert (str);
// 	}
// 	else alert("Не соответствует формату");
// }


// function labfunc2() {
// 	var re = /^[^\d_]/;
// 	var str = document.getElementById("password").value;
// 	if (str=="") {alert ("Вы ничего не ввели"); return;}
// 	if (re.test(str)) {
// 		re = /\d\d/;
// 		if (re.test(str)) {
// 			re = /[A-Z]/;
// 			if (re.test(str)) {
// 				re = /_/;
// 				if (re.test(str)) {
// 					re = /.{8}/;//любой символ . не менее 8 раз
// 					if (re.test(str)) {
// 						alert("Пароль подходит");
// 					} else alert("Пароль не подходит (не менее 8 символов)");
// 				} else alert("Пароль не подходит (нет подчёркивания)");
// 			} else alert("Пароль не подходит (нет прописной)");
// 		} else alert("Пароль не подходит (минимум 2 цифры)");
// 	} else alert("Пароль не подходит (не начинается с цифры или подчеркивания)");
// }

const em = document.querySelector(".mail");
const er = document.querySelector(".output")
// function labfunc4() {
// 	var str = document.getElementById("mail").value;
// 	console.log(str);
//     var re = /^[A-Za-z0-9._]+[^<>()\[\]\\.,;:%$#\s@"]@[A-Za-z0-9-]+.+.[A-Za-z]{2,4}$/;
// 	if (re.test(str) == false) {
// 		er.innerHTML = "Почта введена неправильно";
// 	}	
// }

document.querySelector(".form__btn").onclick = function(){
    em.style.border = "1px solid #FF2079";
	
  }
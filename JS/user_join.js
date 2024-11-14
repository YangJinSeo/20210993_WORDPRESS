function join_check(){
	let str_id = document.getElementById("js_userid");
	let str_pwd0 = document.getElementById("js_password0");
	let str_pwd1 = document.getElementById("js_password1");

	
	let pwd_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/; 
	let email_check =/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
	let blank_pattern = /[\s]/g;
	
	let form = document.createElement('form');
	
	if((str_id.value=='')||(str_id.value == null)){
		alert("아이디를 입력하세요 제발!!");
		str_id.focus();
		return false;
	}
	
	if(str_id.value == sessionStorage.getItem("Session_Storage_test")){
		alert("중복된 아이디입니다!");
		str_id.focus();
		return false;
	}
	 
	if(!email_check.test(str_id.value)){
		alert("이메일@주소 형식으로 아이디를 입력하세요.");
		str_id.focus();
		return false;
	}
	
	if(str_pwd0.value==''){
		alert("비밀번호를 입력하세요 제발!!");
		str_pwd0.focus();
		return false;
	}
	
	if(str_pwd0.value!=str_pwd1.value){
		alert("비밀번호가 동일하지 않습니다!");
		str_pwd1.focus();
		return false;
	}
	
	if(blank_pattern.test(str_id.value) == true){
		alert(' 공백만 입력되었습니다 ');
		return false;
	}
	
	if(!pwd_check.test(str_pwd0.value)){
		alert("비밀번호는 영문자 + 숫자 + 특수문자 조합, 10글자 이상 입력!");
		str_pwd0.focus();
		return false;
	}
	else
	{
		alert(sessionStorage.getItem("Session_Storage_id") + '님 회원가입을 축하합니다!');
	}
	
	document.body.append(form);
	form.action = 'index.html';
	form.method = 'POST';
	form.submit();
}
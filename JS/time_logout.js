var logoutUser = false;
var timeoutHnd = null;
var logoutTimeInterval = 0.5*60*1000;

function onuser_activite(){
	if(logoutUser){
		;
	} else{
		ResetLogOutTimer();
	}
}

function OnTimeoutReached(){
	logoutUser = true;
	alert(" 세션의 지속 시간은 30초 입니다. 만료되면 자동 로그아웃됩니다!");
	session_del();
	window.location.href = "index.html";
}

function ResetLogOutTimer(){
	clearTimeout(timeoutHnd);
	timeoutHnd = setTimeout('OnTimeoutReached();',logoutTimeInterval);
}
document.body.onclick = onuser_activite();
timeoutHnd =  setTimeout('OnTimeoutReached();',logoutTimeInterval);

function session_del(){
	if(sessionStorage){
		sessionStorage.removeItem("Session_Storage_test");
		alert('세션 만료 확인! : 세션 스토리지를 삭제합니다.');
	} else{
		alert("세션 스토리지 지원 X");
	}
}
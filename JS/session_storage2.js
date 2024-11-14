function session_save(){
	if(sessionStorage){
		let input_text = document.getElementById("js_userid");
		sessionStorage.setItem("Session_Storage_id",input_text.value);
	} else{
		alert("로컬 스토리지 지원 X");
	}
}

function session_get(){
	if(sessionStorage){
		alert("저장된 검색어는, " + sessionStorage.getItem("Session_Storage_id"));
	} else{
		alert(" 세션 스토리지 지원 X");
	}
}

function session_del(){
	if(sessionStorage){
		sessionStorage.removeItem("Session_Storage_id");
		alert("로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.");
	} else{
		alert(" 세션 스토리지 지원 X");
	}
}
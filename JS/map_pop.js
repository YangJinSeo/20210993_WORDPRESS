function map_popup(){
	let location = document.getElementById("place");
	let location_check = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
	let blank_pattern = /^\s+|\s+$/g;

if(location.value==''){
		alert("검색어를 입력하세요");
		location.focus();
		return false;
	}

	if(blank_pattern.test(location.value) == true){
		alert(' 공백만 입력되었습니다 ');
		location.focus();
		return false;
	}
	
	if(location_check.test(location.value) == true){
		alert('특수문자가 포함되어있습니다');
		location.focus();
		return false;
	}
	
	document.body.append(form);
	form.action = 'map.html';
	form.method = 'POST';
	form.submit();
}		
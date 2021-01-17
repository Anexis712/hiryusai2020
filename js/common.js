
// auto_scroll ボタンを押して、画面を引数の位置までアニメーションスクロール
function auto_scroll(num, num2) {
    var num2 = num2 || 500; 
    $('html,body').animate({
        scrollTop:$(num).offset().top - 100
    }, num2, function() {
    });
}


auth_user_type();
function auth_user_type (){
    var code_array = localStorage.token.split(',');
    let right_8_number = parseInt(code_array[0] + code_array[1] + code_array[2] + code_array[3] + code_array[4] + code_array[5] + code_array[6] + code_array[7]);
    if(right_8_number % 7 === parseInt(code_array[8]) && right_8_number % 9 === parseInt(code_array[9])){
        if((parseInt(code_array[0] + code_array[1]) % 5) === 1 || (parseInt(code_array[0] + code_array[1]) % 5) === 0){
            console.log('生徒 / 教員ログイン');
            document.documentElement.classList.remove('hide_projects');
            document.documentElement.classList.remove('only_school_projects');
            // $('.hide_projects').removeClass();
            // $('.only_school_projects').removeClass();
        }else if((parseInt(code_array[0] + code_array[1]) % 5) === 4){
            if(code_array[2] === '0'){
                console.log('生徒 / 教員ログイン');
                document.documentElement.classList.remove('hide_projects');
                document.documentElement.classList.remove('only_school_projects');
                //$('.hide_projects').removeClass();
                //$('.only_school_projects').removeClass();
            }else{
                //一般
                console.log('一般ログイン');
                document.documentElement.classList.remove('S1EAltVideo');
            }    
        }else if((parseInt(code_array[0] + code_array[1]) % 5) === 2){
            console.log('受験希望生');
            document.documentElement.classList.remove('hide_projects');
            //$('.hide_projects').removeClass();
            document.documentElement.classList.remove('S1EAltVideo');
        }else{
            //一般
            console.log('一般ログイン');
            document.documentElement.classList.remove('S1EAltVideo');
        }
    }else{
        alert('認証エラー。最初からやり直してください。')
    }
}
const change_number = ['8','6','9','1','7','3','2','0','5','4'];
function go(num){
    //コード変換
    var code_array = $('#code_textbox').val().split('');
    console.log(code_array);
    for(var i = 0; i < 10; i++){
        // console.log(change_number[parseInt(code_array[i])]);
        code_array[i] = change_number[parseInt(code_array[i])];
    }
    console.log('code_array : ' + code_array);
    let right_8_number = parseInt(code_array[0] + code_array[1] + code_array[2] + code_array[3] + code_array[4] + code_array[5] + code_array[6] + code_array[7]);
    if(right_8_number % 7 === parseInt(code_array[8]) && right_8_number % 9 === parseInt(code_array[9])){
        console.log(code_array);
        if((parseInt(code_array[0] + code_array[1]) % 5) === 1 || (parseInt(code_array[0] + code_array[1]) % 5) === 0){
            localStorage.setItem('token', code_array);
            location.href = '../top/';
        }else if((parseInt(code_array[0] + code_array[1]) % 5) === 4){
            if(code_array[2] === '0'){
                localStorage.setItem('token', code_array);
                location.href = '../top/'
            }else{
                $('.error_text').text('プレスリリース段階ですので、保護者のみへの公開となっております。');
            }    
        }else{
            $('.error_text').text('プレスリリース段階ですので、保護者のみへの公開となっております。');
        }
    }else{
        $('.error_text').text('認証コードが間違っています。');
        $('#code_textbox').val('');
    }
    
}
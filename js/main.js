const mainTitle = [['H▍','　'],['HI▍','　'],['HIR▍','　'],['HIRY▍','　'],['HIRYU▍','　'],['HIRYUS▍','　'],['HIRYUSA▍','　'],['HIRYUSAI▍','　'],['HIRYUSAI','O▍'],['HIRYUSAI','ON▍'],['HIRYUSAI','ONL▍'],['HIRYUSAI','ONLI▍'],['HIRYUSAI','ONLIN▍'],['HIRYUSAI','ONLINE▍'],['HIRYUSAI','ONLINE']];

$(window).on('load', function() {
    startAnime(0);
});



function startAnime(num){
    console.log(num);
    $("#main_title_1").html('<h1 class="main_title" id="main_title_1" data-text="' + mainTitle[num][0] + '">' +  mainTitle[num][0]+ '</h1>');
    $("#main_title_2").html('<h1 class="main_title" id="main_title_2" data-text="' + mainTitle[num][1] + '">' +  mainTitle[num][1]+ '</h1>');
    if(num < 14){
        num++;
    }else{
        return;
    }
    const rand = Math.floor(Math.random() * 400) + 100;
    setTimeout('startAnime(' + num + ')', rand);
}


function onload(){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) // If Internet Explorer, return version number
    {
        //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        alert("Internet Explorerはサポートされていません。他のブラウザーを推奨します。")
    }
    else  // If another browser, return 0
    {
        //alert('otherbrowser');
    }
    return false;
}


const change_language = [
    [
        ".registrationLink",
        ".footer",
        "#event_description_0", 
        "#event_description_1", 
        ".leader_title", 
        ".leader_name",
        ".leader_content", 
        ".concept_main",
        ".concept_image", 
        "#concept_text_title",
        "#concept_text_body", 
        ".contact_contents", 
    ],
    [
        "<a href='auth/''> <div class='start_button'> <p class='start_button_text'><span style='font-size: .8em;vertical-align: middle;'><</span> <span style='vertical-align: middle;'>　START </span> <span style='font-size: .8em;vertical-align: middle;'>/></span></p></div></a>",
        "<p style = 'letter-spacing: 0.1em;'>準備中のコンテンツがございます。ご了承ください。<br> 来週は生配信企画「渋Live」が開催されます。お見逃しなく！</p>",
        /*日付のところ*/"プレリリースは18日｜一般・受験生はもう少しお待ちください",  
        '<span style="border-bottom: 1px solid #AFAFAF;padding-bottom: 2px;">人数制限はありません。誰でも登録可能です。</span>', 
        "委員長挨拶", 
        "委員長　中里星恋",
        `こんにちは！<br>
        この度は、HIRYUSAI ONLINEにご来場いただき誠にありがとうございます！<br>
        HIRYUSAI ONLINE実行委員長の中里星恋です。<br>
        <br>
        皆さんもご存知の通り、今世界は新型コロナウイルスの影響を大きく受けています。渋渋でも、学校行事がなくなったり、授業形態が変化したりと、先生方も生徒たちもその影響を肌で感じています。飛龍祭も、その中の一つです。<br>
        ですが、だからといって飛龍祭の歴史を私たちの手で止めてしまうわけにはいきません。<br>
        そこで私たち実行委員は、オンライン上での開催を決定しました。こんな状況だからこそ創り出せる何かがあるのではないかと模索し、ここにたどり着きました。<br>
        正直、この選択が正解だったかどうかは私たちにもまだわかりません。ただ、この飛龍祭が終わったときに、生徒や先生方の心に残り続け、また来場して下さった方々一人ひとりの心に少しでも響くものになってほしいという一心でここまでやってきました。<br>
        <br>
        さて、今年度のテーマは｢imagine｣です。<br>
        例年とは違う形での企画実現にあたり、各クラス・部活・委員会では全員の想像力を結集してきました。ぜひこのHIRYUSAI ONLINEを通して渋渋生の力を感じていってください。<br>
        <br>
        最後に、運営に携わってくれた本部委員、ここまで力を貸してくださった先生方、そして初めての試みとなるオンラインでの成功に向けて一生懸命に取り組んだ生徒、第25回飛龍祭に関わってくださったすべての方々にこの場を借りて感謝申し上げます。<br>
        <br>
        それでは、楽しんでください！<br>`, 
        "～家から学校体験を～",
        "イメージ", 
        "文化祭、新時代へ",
        `コロナ禍で学校にも満足に行けなくなり、エンタメも憚られ....
        <br>
        そんな今こそ力を合わせて新しい時代への挑戦をやめずに居続けたい。
        <br>
        僕たちの挑戦がここから始まる。`, 
        `<span style="font-weight: bold; font-size: 110%;">
            渋谷教育学園渋谷中学高等学校
        </span>
        <br>
        〒150-0002 東京都渋谷区渋谷1-21-18
        <br><br>
        TEL：03-3400-6363
        <br>
        FAX：03-3486-1033
        <br>
        MAIL：<a href="mailto:hiryu25th.2020@gmail.com" target="_blank">hiryu25th.2020@gmail.com</a>`, 
    ],
    [
        "<a href='auth_en/''> <div class='start_button'> <p class='start_button_text'><span style='font-size: .8em;vertical-align: middle;'><</span> <span style='vertical-align: middle;'>  START </span> <span style='font-size: .8em;vertical-align: middle;'>/></span></p></div></a>",
        "<p style = 'letter-spacing: 0.1em;''>We appreciate your patience as we continue updating some content. <br> Dont miss the ShibuLive streaming event, coming next week!",
        /*日付のところ*/"Pre-relese on November 18th | Public release coming soon", 
        '<span style="border-bottom: 1px solid #AFAFAF;padding-bottom: 2px;">Anyone can join the experience. Register today.</span>',
        "Message From Chairman", 
        "Chairman of Hiryusai Festival: Seren Nakazato",
        `
        Hello!<br>
        Thank you for visiting HIRYUSAI ONLINE!<br>
        I'm Seren Nakazato, the chairman of the HIRYUSAI ONLINE executive committee.<br>
        <br>
        As you all know, the world is now heavily affected by the new coronavirus.  Even in Shibuya Junior and Senior High school, teachers and students are affected by the coronavirus through the changes in the lesson styles and some school events disappearing. Hiryusai (our school festival) is one of them.<br>
        However, that does not mean that we can stop the history of the Hiryusai.<br>
        Therefore, we, the executive committee, decided to hold it online.  We sought to find something that could be created even in these kinds of situation, and we finally arrived here.<br>
        <br>
        To be honest, we still don't know if this choice was correct.  However, we have come to this point with the hope that what we have created will remain in the hearts of the students and teachers, and that it will resonate with the hearts of each and every one of the visitors.<br>
        <br>
        By the way, the theme of this year’s Hiryusai is "imagine". In order to realize the projects in a different way from the usual year, each class, club activity, and committee has brought together everyone’s ‘Imagination’. Please feel the power of our school’s students through this HIRYUSAI ONLINE.<br>
        <br>
        Lastly, I would like to take this opportunity to thank the members of the headquarters who were involved in this operation, the teachers who helped us so far, the students who worked hard for this first attempt to succeed Hiryusai online and all those who have contributed for HIRYUSAI ONLINE.<br>
        <br>
        Have fun!<br>
        `, 
        "Experiencing school from home",
        "Image", 
        "School Festival, to the newer",
        `Due to the coronavirus outbreak, students were not able to go to school satisfactorily or even be entertained to the fullest.<br>
        But now is the time to join forces and to keep on challenging ourselves to the new era.<br>
        <br>
        Our challenge begins here.`, 
        `<span style="font-weight: bold; font-size: 110%;">
            Shibuya Junior and Senior High School 
        </span>
        <br>
        1-21-18 Shibuya Shibuya, Tokyo 〒150-0002
        <br><br>
        TEL：03-3400-6363
        <br>
        FAX：03-3486-1033
        <br>
        MAIL：<a href="mailto:hiryu25th.2020@gmail.com" target="_blank">hiryu25th.2020@gmail.com</a>`, 
    ]
];

function change_language_func(num){
    console.log(num);
    for (let i = 0; i < change_language[0].length; i++) {
        $(change_language[0][i]).html(change_language[num][i]);
        if(num === 1){ //jp
            $(change_language[0][i]).css({'font-family' : "'Noto Sans JP', sans-serif",'letter-spacing' : '0.14em'});
        }else{ //en
            $(change_language[0][i]).css({'font-family' : "'Tahoma', 'Geneva', sans-serif",'letter-spacing' : '0.08em'});
        }
    }
    if(num === 1){ //jp
        $('#change_language_button_1').css('border', '1px solid #ffffff');
        $('#change_language_button_2').css('border', '0');
    }else{ //en
        $('#change_language_button_1').css('border', '0');
        $('#change_language_button_2').css('border', '1px solid #ffffff');
    }

}

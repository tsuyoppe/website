$(function() {

  //「もっと読む」ボタンによる文章のスライドダウン
  $('#read-more').click(function(){
    $('#more-text').slideDown();
    $(this).hide();
  });

  //「.gallery-item」のhoverによる説明の表示/非表示
  $('.gallery-item').hover(
    function(){
      $(this).children('.gallery-cover').fadeIn();
    },
    function(){
      $(this).children('.gallery-cover').fadeOut();
    }
  );

  //SNSボタンのアニメーション
  $('.sns-list').find('li').hover(
    function(){
      $(this).animate({'font-size':'20px'});
    },
    function(){
      $(this).animate({'font-size':'14px'});
    }
  );

  //「学ぶ」タブによるリストの表示/非表示
  $('#language-show').click(function(){
    $('#language-list').toggleClass('hide-list');
  });

  //「.step-list」ボタンによる表示の切り替え
  $('.step-list').click(function(){
    var index = $(this).index();
    $('.step-list').removeClass('active');
    $(this).addClass('active');
    $('.explain').removeClass('active');
    $('.explain').eq(index).addClass('active');
  });

  //「お問い合わせ」ボタンが押されたときにフォームを表示
  $('#contact-show').click(function(){
    $('#modal-contact').show();
  });

  //「閉じる」ボタンが押されたときにフォームを隠す
  $('#close-contact').click(function(){
    $('#modal-contact').hide();
  });

  //「送信」ボタンが押されたときにフォームの内容を変更
  $('#submit-btn').click(function(){
    $('#contact-form').html('<div class="thanks-msg">お問い合わせいただきありがとうございます。<br>内容が確認でき次第返信をさせていただきますので、<br>今しばらくお待ち下さい。</div>');
  });

  //ここに貼り付けてください
  $(".carousel").carousel();

});
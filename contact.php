<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 送信先のメールアドレスを設定
    $to = "info@irorodot-s.com";
    
    // フォームからの入力を取得
    $company = $_POST['company'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $zipcode = $_POST['zipcode'];
    $address = $_POST['address'];
    
    $subject = "Iroro.s お問い合わせ";
    
    $body .= "会社名: $company\n";
    $body = "お名前: $name\n";
    $body .= "メールアドレス: $email\n";
    $body .= "電話番号: $phone\n";
    $body .= "郵便番号: $zipcode\n";
    $body .= "住所: $address\n";
    $body .= "お問い合わせ内容: $message\n";
    
    // メール送信
    if (mb_send_mail($to, $subject, $body)) {
        // 送信成功の場合、セッションにメッセージを保存
        $_SESSION['message'] = "送信できました";
    } else {
        // 送信失敗の場合、セッションにエラーメッセージを保存
        $_SESSION['error'] = "メールの送信中にエラーが発生しました。もう一度お試しください。";
    }
    
    // 元のページにリダイレクト
    header("Location: https://irorodot-s.com/mail_success.html");
    exit;
}
?>
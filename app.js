var qrcode = document.getElementById('qrcode');
var user_input = document.getElementById('input');
var gen_button = document.getElementById('generate_qr');

gen_button.addEventListener("click", () => {
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=1,148x1,148&data=${user_input.value}`;
    qrcode.src = url;
});

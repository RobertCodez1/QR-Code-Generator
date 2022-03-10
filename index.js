var qrdata = document.getElementById("Link")
var qrdataMobile = document.getElementById("LinkMobile")
var code = new QRCode(document.getElementById('qrcode'), {
    width: 200,
    height: 200
})

var codeMobile = new QRCode(document.getElementById('qrcodeMobile'))

function Clicked() {

    var data = qrdata.value;
    var dataMobile = qrdataMobile.value;


    code.makeCode(data);
    codeMobile.makeCode(dataMobile)
}
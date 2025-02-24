var EAN = "7898765430018";
var EAN2 = EAN.slice(0, 12);
var verificador = EAN.slice(12);
function codigoVerify() {
    var EANImpar, EANPar, EANFinal;
    var imparesVerify;
    for (var i = 0; i < 13; i++) {
        imparesVerify = EAN2[i];
        if (isNaN(imparesVerify)) {
            return;
        }
        if (i % 2 === 0) {
            EANPar += imparesVerify * 3;
        }
        else {
            EANImpar += imparesVerify * 1;
        }
    }
    EANFinal = EANPar + EANImpar;
    EANFinal = (10 - (EANFinal % 10)) % 10;
    console.log(EANFinal);
}
codigoVerify();

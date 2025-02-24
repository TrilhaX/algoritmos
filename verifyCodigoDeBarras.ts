let EAN = "7898765430018";
let EAN2 = EAN.slice(0, 12);
let verificador = EAN.slice(12);

function codigoVerify() {
    let EANImpar = 0, EANPar = 0, EANFinal;
    
    for (let i = 0; i < 12; i++) {
        let digit = parseInt(EAN2[i]);
        
        if (isNaN(digit)) {
            console.log("Invalid EAN code");
            return;
        }
        
        if (i % 2 === 0) {
            EANPar += digit * 1;
        } else {
            EANImpar += digit * 3;
        }
    }
    
    EANFinal = EANPar + EANImpar;
    EANFinal = (10 - (EANFinal % 10)) % 10;
    
}

codigoVerify();
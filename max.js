const business = 1178700;
const minister = 956161848984;
const person =1200;

function besiTaka(tk1, tk2, tk3) {
    if (tk1>tk2 && tk1>tk3) {
        return tk1;
    }
    else if (tk2>tk3 && tk2>tk1) {
        return tk2;
    }
    else {
        return tk3;
    }
}

function komTaka(tk1, tk2, tk3) {
    if (tk1<tk2 && tk1<tk3) {
        return tk1;
    }
    else if (tk2<tk3 && tk2<tk1) {
        return tk2;
    }
    else {
        return tk3;
    }
}



var pattiWala = besiTaka(business , minister , person);
console.log("besi Taka ache" ,pattiWala);

var goribWala = komTaka(business , minister , person);
console.log("Kom Taka ache" ,goribWala);
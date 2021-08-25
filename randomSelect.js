let select = []
for (let i = 0; i < 10; i++) {
    let random = Math.random() * 10;
    let picked = Math.round(random);
    if (select.indexOf(picked) == -1) {
        select.push(picked);
    } else {
        console.log("This is again", picked);
    }
}
console.log(select);
function rose() {
    let x = parseInt(document.getElementById('sanluong').value);
    let a = parseInt(document.getElementById('gia').value);
    let b = parseFloat(document.getElementById('chitieu').value);
    let y = 0.2;
    if (x >0 && x < 10) {
        b = 0;
    } else if (x < 20) {
        b = x*a*(0.1/100);
    } else {
        b = x*a*(0.2/100);
    }
    let c = b + x*a*(y/100);
    document.getElementById('%sanpham').innerHTML += y;
    document.getElementById('chitieu').innerHTML += b;
    document.getElementById('hoahong').innerHTML += c;

}
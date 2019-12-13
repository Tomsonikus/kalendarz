let prezent='./pictures/prezent.jpg';
let defaultImg='./pictures/default.jpg';
let poz=Math.floor(Math.random()*24)+1;
let proba=1;
function animacja(id){
    $('#d' + id).animate({
        height: '50%',
        width: '50%'
    });
    $('#d' + id).animate({
        height: '100%',
        width: '100%'
    });
}
console.log(poz)
function openDoor(id, w){
    switch(w){
        case "prezent":
                $('#d'+poz).css("backgroundImage", "url('" + prezent + "')");
                animacja(poz);
            break;
        default:
            if (id == poz) {
                event.target.parentNode.style.backgroundImage = "url('" + prezent + "')";
                alert("Gratulacje! Wygrałeś!")
            } else {
                event.target.parentNode.style.backgroundImage = "url('" + defaultImg + "')";
                proba++;
            }
            event.target.style.opacity = "0";
            animacja(id);
            if (proba > 5) {
                alert("przegrałeś! prezent znajduje się na polu: " + poz);
                openDoor(poz, "prezent");
            }
    }
}


let imgPath='./pictures/course-';

function openDoor(id){
    event.target.parentNode.style.backgroundImage = "url('"+imgPath+id+".jpg')";
    event.target.style.opacity = "0";
    $('#d'+id).animate({
        height: '50%',
        width: '50%'
    });
    $('#d' + id).animate({
        height: '100%',
        width: '100%'
    });
}


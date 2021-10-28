const arr = JSON.parse(localStorage.getItem("arr")) || []


const myFav  = arr.filter((item)=>{
    return item.isLike == true
})


const render = () => {
    $( ".panells" ).html("");
    
    myFav.forEach((item, i) => {
    console.log(item);
        $( ".panells" ).append(
                `<div id="panell" class="panel-${i}">
                    <div class="col1">
                    <img src="./images/${item.images[0]}" alt="" width="350px" class="showDes-${i}">
                    </div>
                    <div class="col1">
                    <p class="decerP">${item.name}</p>
                    <p class="artestName">${item.description[0]}</p>
                    <p><span class="heart-${i}"><i class="far fa-heart"></i></span></p>
                    </div>
                </div>`);
         
    if ( item.isLike === true){
        $( ".heart-"+ i  ).html('<i class="fas fa-heart" aria-hidden="true"></i>');
        $( ".heart-"+ i  ).addClass("liked");
    }

    $( ".heart-"+ i ).click(() => isLiked(i));
    //$( ".showDes-"+ i ).click(()=>{showDescr(i)});
    $( ".showDes-"+ i ).click(()=>{renderItem(i)});
    });
}
render();
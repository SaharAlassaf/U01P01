const arr = JSON.parse(localStorage.getItem("arr")) || []


const myFav  = arr.filter((item)=>{
    return item.isLike == true
})

const isLiked = (i) => {

    if($( ".heart-"+ i  ).hasClass("liked")){
        $( ".heart-"+ i  ).html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $( ".heart-"+ i  ).removeClass("liked");
        myFav[i].isLike = false
    }else{
        $( ".heart-"+ i ).html('<i class="fa fa-heart" aria-hidden="true"></i>');
        $( ".heart-"+ i ).addClass("liked");
        myFav[i].isLike = true;
    }
    localStorage.setItem("arr",JSON.stringify(arr))
    render();
}

const render = () => {
    $( ".panells" ).html("");

    if(myFav.length == 0){
        $( ".panells" ).append(`<p>You still don't have any favorites!</p>
        <p>This is where you’ll find the images you favourite.</p>
        <p>Ready to find what you're looking for?</p>
        <a href="index.html">HOME<a>
        `);
    }
    myFav.forEach((item, i) => {
    console.log(item);
        $( ".panells" ).append(
                `<div id="panell" class="panel-${i}">
                    <div class="col1">
                    <img src="./images/${item.images[0]}" alt="" width="350px" class="showDes-${i}">
                    </div>
                    <div class="col2">
                    <p class="decerFav">${item.name}</p>
                    <p class="artestNameFav">${item.description[0]}</p>
                    <p><span class="heart-${i}"><i class="far fa-heart"></i></span></p>
                    </div>
                </div>`);
         
    if ( item.isLike === true){
        $( ".heart-"+ i  ).html('<i class="fas fa-heart" aria-hidden="true"></i>');
        $( ".heart-"+ i  ).addClass("liked");
    }

    $( ".heart-"+ i ).click(() => isLiked(i));
    $( ".showDes-"+ i ).click(()=>{renderItem(i)});
    });
}
render();
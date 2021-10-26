
let artest = [
    {name: "lll", description:"AAA", image1: "img1.jpeg", with: 350, isLike: true},
    {name: "van gogh", description:"BBB", image1: "img2.jpeg", with: 580, isLike: true},
    {name: "van gogh", description:"CCC", image1: "img3.jpeg", with: 350, isLike: false},
    {name: "van gogh", description:"CCC", image1: "img4.jpeg", with: 580, isLike: true},
    {name: "van gogh", description:"CCC", image1: "img5.jpeg", with: 350, isLike: false}

];


const isLiked = (i) => {
    let favArr = [];

    if($( ".heart-"+ i  ).hasClass("liked")){
        $( ".heart-"+ i  ).html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $( ".heart-"+ i  ).removeClass("liked");
        artest[i].isLike = false;
        favArr.forEach((i) => {
            if (artest[i].name == favArr[i].name){
                favArr[i].pop();
        }});
        console.log("r");
        console.log(artest);
        console.log(favArr);
      
    }else{
        $( ".heart-"+ i ).html('<i class="fa fa-heart" aria-hidden="true"></i>');
        $( ".heart-"+ i ).addClass("liked");
        artest[i].isLike = true;
        favArr.push(artest[i]);
        console.log("a");
        console.log(favArr);
    }
    render();
}

const search = () => {
    const inputSearch = $( "#inputSearch" ).val();
    return artest.filter((item) => item.name == inputSearch);
    // console.log(artest);
    // render();
}


const render = () => {
    $( ".panels" ).html("");
    
    artest.forEach((item, i) => {
    
        $( ".panels" ).append(
            `<div id="panel" class="panel-${i}">
                <img src="./images/${artest[i].image1}" alt="" width = ${artest[i].with}px >
                <p>${artest[i].name}</p>
                <span class="heart-${i}"><i class="far fa-heart"></i></span>
                <p>${artest[i].description}</p>
                <a></a>
            </div>`);

        $( ".description" ).append(
            `<div class="row">
                <di class="col img">

                </di>
                <div class="col descText">

                </div>
            </div>
            <div class="row">
                <div class="col imgScroll">

                </div>
            </div>`);
         
    if ( artest[i].isLike === true){
        $( ".heart-"+ i  ).html('<i class="fas fa-heart" aria-hidden="true"></i>');
        $( ".heart-"+ i  ).addClass("liked");
    }

    $( ".heart-"+ i ).click(() => isLiked(i));

    });
}

render();




let artest = JSON.parse(localStorage.getItem("arr"))  || [
    {name: "Pablo Picasso", description: ["Seated Nude", "Still Life with Pitcher and Apples", "Three Musicians", "Mother and Child", "Carafe and Three Bowls"],
    images: ["picasso1.jpeg","picasso2.jpeg","picasso3.jpeg","picasso4.jpeg","picasso5.jpeg"],
    info: "Pablo Picasso is probably the most important figure of the 20th century, in terms of art, and art movements that occurred over this period. Before the age of 50, the Spanish born artist had become the most well-known name in modern art, with the most distinct style and eye for artistic creation. There had been no other artists, prior to Picasso, who had such an impact on the art world, or had a mass following of fans and critics alike, as he did. Pablo Picasso was born in Spain in 1881, and was raised there before going on to spend most of his adult life working as an artist in France. Throughout the long course of his career, he created more than 20,000 paintings, drawings, sculptures, ceramics and other items such as costumes and theater sets. He is universally renowned as one of the most influential and celebrated artists of the twentieth century.",
    width: 50, isLike: false},

    {name: "Vincent van Gogh", description:["Self Portrait", "Café Terrace at Night", "At Eternity's Gate", "Cypresses", "The Starry Night Over The Rhone"], 
    images: ["van1.jpeg", "van2.jpeg", "van3.jpeg", "van4.jpeg", "van5.jpeg"], 
    info: "Vincent van Gogh (1853-1890), perhaps the most famous artist in the world, is perceived by many as the 'mad' artist, the man who painted in a frenzy or simply the tormented soul who cuts off his ear. His artistic genius is often overshadowed by those who see his paintings as mere visual manifestations of his troubled mind. Whilst in part this may be true, in reality his innovative and unique artistic style was of enormous importance to a host of artists who followed in his wake. Even when openly influenced by his predecessors or contemporaries his art remained identifiably his own, developing a distinctive style that failed to be accepted by the art-buying public in his own time. The career of Vincent van Gogh as a painter was short, but his paintings revolutionized artistic practice and styles. The intensity of his vision, his wonderful sense of color, and the extraordinary boldness of his technique created masterpieces that exercise a profound influence on the art of the twentieth century.",
    width: 50, isLike: false},

    {name: "Edvard Munch", description:["The Scream","Melancholy","Girls on the Bridge","Night in Saint Cloud","Self-Portrait with Cigarette"], 
    images: ["Edvard1.jpeg","Edvard2.jpeg","Edvard3.jpeg","Edvard4.jpeg","Edvard5.jpeg"],
    info: "Edvard Munch is a Norwegian born expressionist painter. His best-known work, The Scream, has become one of the most iconic images of world art. In the late 20th century, he played a great role in German expressionism and the art form that later followed; namely because of the strong mental anguish that was displayed in many of the pieces that he created. Edvard Munch was born in Norway in 1863, and was raised in Christiania (known as Oslo today). He was related to famous painters and artists in their own right, Jacob Munch (painter), and Peter Munch (historian). Only a few years after he was born, Edvard Munch's mother died of tuberculosis in 1868, and he was raised by his father. Edvard's father suffered from mental illness, and this played a role in the way he and his siblings were raised. Their father raised them with the fears of deep-seated issues, which is part of the reason why the work of Edvard Munch took a deeper tone, and why the artist was known to have so many repressed emotions as he grew up.",
    width: 50, isLike: false},

    {name: "Claude Monet", description:["Three Trees in Grey Weather","Camille Monet at the Window","Boats on Rapair","Boulevard of Capucines","The Bodmer Oak"], 
    images: ["Claude1.jpg","Claude2.jpg","Claude3.jpg","Claude4.jpg","Claude5.jpg"], 
    info: "Claude Monet was in almost every sense the founder of French Impressionist painting, the term itself coming from one of his paintings, Impression, Sunrise. As a child, his father wanted him to go into the grocery business, but his heart was in the profession of artistry, and at age 11, he entered Le Havre secondary school of the arts. During his stay at the secondary school, he was known for the caricatures he would draw for the locals for ten to twenty francs each. Five years later, he met artist Eugene Bouldin, who taught him the techniques of “en plein air” painting and became his mentor. At the age of 16, Monet left school for Paris, where instead of studying the great artworks of the masters, he sat by the window and painted what he saw outside.",
    width: 50, isLike: false},

    {name: "Rene Magritte", description:["The Son of Man","The Human Condition","Sixteenth of September","The White Page","The Banquet"], 
    images: ["Rene1.jpeg","Rene2.jpeg","Rene3.jpeg","Rene4.jpeg","Rene5.jpeg"], 
    info: "Rene Magritte was an internationally acclaimed surrealist artist of all time, yet it was not until his 50s, when he was finally able to reach some form of fame and recognition for his work. Rene Magritte described his paintings saying, \"My painting is visible images which conceal nothing; they evoke mystery and, indeed, when one sees one of my pictures, one asks oneself this simple question, \'What does that mean?\' It does not mean anything, because mystery means nothing, it is unknowable.\" Rene Magritte was born in 1898, to a wealthy manufacturer father. In 1912, his mom was found drowned in the River Sambre. She had committed suicide, and the family was publicly humiliated because of it. From 1916 to 1918, Rene decided to study at the Academie des Beaux-Art, which was located in Brussels. He left the school, because he thought that it was a waste of time. All his paintings afterward reflect cubism, the movements which were introduced by Pablo Picasso and was very popular at the time. In 1922 he married Georgette, and took a number of small jobs, including painting cabbage roses for a wallpaper company, in order to be able to pay the bills.",
    width: 50, isLike: false},
    
    {name: "Salvador Dalí", description:["Persistence of Memory","Raphaelesque Head Exploding","Landscape with Butterflies","The Madonna of Port Lligat","Melting Watch"], 
    images: ["Salvador1.jpeg","Salvador2.jpeg","Salvador3.jpeg","Salvador4.jpeg","Salvador5.jpeg"], 
    info: "The Spanish painter Salvador Dali remains one of the most controversial and paradoxical artists of the twentieth century. Over the last few decades, Salvador Dali has gradually come to be seen, alongside the likes of Picasso and Matisse, as a prodigious figure whose life and work occupies a central and unique position in the history of modern art. Dali has also come to be regarded not only as its most well-known exponent but also, to many people, as an individual artist synonymous with Surrealism itself. In addition, Dali was a great artist who was a great self-publicist and showman. The combination was an irresistible formula for success. Born in 1904, most of the works he did revolve around painting, sculpture work, and he worked as a graphic artist and designer as well. During the course of his career, he experienced many different art forms, and experimented with a few styles, allowing him to further his points of expression, and the design pieces which he created during the illustrious and extensive career that he had.",
    width: 50, isLike: false},

    {name: "Edward Hopper", description:["Nighthawks","People in the Sun","The Long Le","Automat","Rooms by the Sea"], 
    images: ["Edward1.jpeg","Edward2.jpeg","Edward3.jpeg","Edward4.jpeg","Edward5.jpeg"], 
    info: "Edward Hopper is widely acknowledged as the most important realist painter of twentieth-century America. But his vision of reality was a selective one, reflecting his own temperament in the empty cityscapes, landscapes, and isolated figures he chose to paint. His work demonstrates that realism is not merely a literal or photographic copying of what we see, but an interpretive rendering. Edward Hopper was born in 1882, in NY, into a middle-class family. From 1900 to 1906 he studied at the NY School of Art, and while in school, shifted from illustration to works of fine art. Upon completing his schooling, he worked as an illustrator for a short period of time; once this career path ended, he made three international trips, which had a great influence on the future of his work, and the type of art he would engage in during the course of his career. He made three trips to Europe between 1906 and 1910. In retrospect, Europe meant France, and more specifically, Paris, for Edward Hopper. This city, its architecture, light, and art tradition, decisively affected his development.",
    width: 50, isLike: false},

    {name: "Gwen John", description:["Gwen John","Flowers","Girl Reading at the Window","The Little Interior","Chloe Boughton Leigh"], 
    images: ["Gwen1.jpg","Gwen2.jpg","Gwen3.jpg","Gwen4.jpg","Gwen5.jpg"], 
    info: "(Born Haverfordwest, Pembrokeshire, 22 June 1876; died Dieppe, 18 September 1939). British painter. She was the sister of Augustus John, but his complete opposite artistically, as she was in personality, living a reclusive life and favouring introspective subjects. After studying at the Slade School, 1895–8, she had lessons in Paris from Whistler, and adopted from him the delicate greyish tonality that characterizes much of her work. In 1899 she returned to London, but in 1904 she settled permanently in France, living first in Paris (earning her living modelling for other artists—including Rodin, who became her lover), then from 1911 in Meudon, on the outskirts of the city.",
    width: 50, isLike: false},

];


const isLiked = (i) => {

    if($( ".heart-"+ i  ).hasClass("liked")){
        $( ".heart-"+ i  ).html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $( ".heart-"+ i  ).removeClass("liked");
        artest[i].isLike = false
    }else{
        $( ".heart-"+ i ).html('<i class="fa fa-heart" aria-hidden="true"></i>');
        $( ".heart-"+ i ).addClass("liked");
        artest[i].isLike = true;
    }
    localStorage.setItem("arr",JSON.stringify(artest))
    render();
}

const search = () => {
    const inputSearch = $( "#inputSearch" ).val();
    return artest.filter((item) => item.name == inputSearch);
    // console.log(artest);
    // render();
}
/*
const showDescr = (i) => {
    console.log("show");
    $( ".imgShow" ).append(`<img src="./images/${artest[i].images[0]}" alt="" width="${artest[i].with}px">`);
    $( ".descText" ).append(`<p>hggffffdfxx  </p>`)
    artest.images.forEach((item, i) => {
        $( ".pad15" ).append(`<div class="item">
                                <div class="pad15">
                                    <img src="./images/${item[i]}" alt="" width="${artest[i].with}px">
                                </div>
                            </div>`);
    });
    console.log("shoooow");
    render();
}
*/

const render = () => {
    $( ".panels" ).html("");
    
    artest.forEach((item, i) => {
        $( ".panels" ).append(
            `<div id="panel" class="panel-${i}">
                <img src="./images/${item.images[0]}" alt="img" width="350px" class="showDes-${i}">
                <p class="decerP showDes-${i}">${item.name}</p>
                <p class="artestName">${item.description[0]}</p>
                <p><span class="heart-${i}"><i class="far fa-heart"></i></span></p>
            </div>`);
         
    if ( artest[i].isLike === true){
        $( ".heart-"+ i  ).html('<i class="fas fa-heart" aria-hidden="true"></i>');
        $( ".heart-"+ i  ).addClass("liked");
    }

    $( ".heart-"+ i ).click(() => isLiked(i));
    $( ".showDes-"+ i ).click(()=>{renderItem(i)});
    });
}

render();




////////////////////////////////////render item 


function renderItem (i){

    const myItem = artest[i]
    
        console.log(myItem);
        $(".panels").hide()
        $(".prom").hide()
        $("main").hide()
        $(".descreption").append(
        `<div class="rowDec">
            <div class="col1 oneitemimg">
                <img id='changeThisImgg' src='./images/${myItem.images[0]}' width=200px/>
            </div>
            <div class="col1 descText">
                <p>${myItem.name}</p>
                <p>${myItem.info}</p>
            </div>
        </div>
        <div class="rowImg">

        </div>`);
        myItem.images.forEach((item,i)=>{
            $(".rowImg").append(`<div><img id='changeImg-${i}' src='./images/${item}' width="200px"/><p>${myItem.description[i]}</p></div>`);
            $("#changeImg-"+i).click(()=>{
                document.querySelector("#changeThisImgg").src = `./images/${item}`
                //$("#changeThisImgg").attr ('scr','images/${item}');
            })
        })
}
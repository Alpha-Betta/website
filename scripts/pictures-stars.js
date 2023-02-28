const animStarPictures = document.querySelectorAll('.anim-pictures-stars');
let starImage = 0;
let starImages = ["../images/star-picture1.jpg", 
"../images/star-picture2.jpg", 
"../images/star-picture3.jpg", 
"../images/star-picture4.jpg", 
"../images/star-picture5.jpg", 
"../images/star-picture6.jpg", 
"../images/star-picture7.jpg"];
let flagStar = true;
if (animStarPictures.length > 0){
    document.querySelector("#next-stars").onclick = function(){
        if (flagStar){
            flagStar = false;
            for (let i = 0; i < animStarPictures.length; i++){
                const animStarPicture = animStarPictures[i];
                document.querySelector("#next-stars").classList.add("invisible");
                document.querySelector("#previous-stars").classList.add("invisible");
                animStarPicture.classList.add('shift');
            }
            setTimeout(() => { 
                for (let i = 0; i < animStarPictures.length; i++){
                    const animStarPicture = animStarPictures[i];
                    starImage = (starImage + 1) % starImages.length;
                    animStarPicture.classList.remove('shift');
                    document.querySelector("#next-stars").classList.remove("invisible");
                    document.querySelector("#previous-stars").classList.remove("invisible");
                    animStarPicture.src = starImages[starImage];
                }
                starImage -= animStarPictures.length - 1;
                if (starImage < 0){
                    starImage += starImages.length;
                }
                flagStar = true;
            }, 1000);
        }
    }
    document.querySelector("#previous-stars").onclick = function(){
        if (flagStar){
            flagStar = false;
            starImage -= 2;
            if (starImage < 0){
                starImage += starImages.length;
            }
            for (let i = 0; i < animStarPictures.length; i++){
                const animStarPicture = animStarPictures[i];
                starImage = (starImage + 1) % starImages.length;
                animStarPicture.classList.add('shift-reverse');
                document.querySelector("#next-stars").classList.add("invisible");
                document.querySelector("#previous-stars").classList.add("invisible");
                animStarPicture.src = starImages[starImage];
            }
            starImage -= animStarPictures.length - 1;
            if (starImage < 0){
                starImage += starImages.length;
            }
            setTimeout(() => { 
                for (let i = 0; i < animStarPictures.length; i++){
                    const animStarPicture = animStarPictures[i];
                    animStarPicture.classList.remove('shift-reverse');
                    document.querySelector("#next-stars").classList.remove("invisible");
                    document.querySelector("#previous-stars").classList.remove("invisible");
                }
                flagStar = true;
            }, 1000);
        }
    }
}

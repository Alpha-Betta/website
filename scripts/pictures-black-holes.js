const animBlackHolesPictures = document.querySelectorAll('.anim-pictures-black-holes');
let blackHolesImage = 0;
let blackHolesImages = ["../images/black-hole-picture1.jpg", 
"../images/black-hole-picture2.jpg", 
"../images/black-hole-picture3.jpg", 
"../images/black-hole-picture4.jpg", 
"../images/black-hole-picture5.jpg", 
"../images/black-hole-picture6.jpg", 
"../images/black-hole-picture7.jpg"];
let flagBlackHoles = true;
if (animBlackHolesPictures.length > 0){
    document.querySelector("#next-black-holes").onclick = function(){
        if (flagBlackHoles){
            flagBlackHoles = false;
            for (let i = 0; i < animBlackHolesPictures.length; i++){
                const animblackHolesPicture = animBlackHolesPictures[i];
                document.querySelector("#next-black-holes").classList.add("invisible");
                document.querySelector("#previous-black-holes").classList.add("invisible");
                animblackHolesPicture.classList.add('shift');
            }
            setTimeout(() => { 
                for (let i = 0; i < animBlackHolesPictures.length; i++){
                    const animblackHolesPicture = animBlackHolesPictures[i];
                    blackHolesImage = (blackHolesImage + 1) % blackHolesImages.length;
                    animblackHolesPicture.classList.remove('shift');
                    document.querySelector("#next-black-holes").classList.remove("invisible");
                    document.querySelector("#previous-black-holes").classList.remove("invisible");
                    animblackHolesPicture.src = blackHolesImages[blackHolesImage];
                }
                blackHolesImage -= animBlackHolesPictures.length - 1;
                if (blackHolesImage < 0){
                    blackHolesImage += blackHolesImages.length;
                }
                flagBlackHoles = true;
            }, 1000);
        }
    }
    document.querySelector("#previous-black-holes").onclick = function(){
        if (flagBlackHoles){
            flagBlackHoles = false;
            blackHolesImage -= 2;
            if (blackHolesImage < 0){
                blackHolesImage += blackHolesImages.length;
            }
            for (let i = 0; i < animBlackHolesPictures.length; i++){
                const animblackHolesPicture = animBlackHolesPictures[i];
                blackHolesImage = (blackHolesImage + 1) % blackHolesImages.length;
                animblackHolesPicture.classList.add('shift-reverse');
                document.querySelector("#next-black-holes").classList.add("invisible");
                document.querySelector("#previous-black-holes").classList.add("invisible");
                animblackHolesPicture.src = blackHolesImages[blackHolesImage];
            }
            blackHolesImage -= animBlackHolesPictures.length - 1;
            if (blackHolesImage < 0){
                blackHolesImage += blackHolesImages.length;
            }
            setTimeout(() => { 
                for (let i = 0; i < animBlackHolesPictures.length; i++){
                    const animblackHolesPicture = animBlackHolesPictures[i];
                    animblackHolesPicture.classList.remove('shift-reverse');
                    document.querySelector("#next-black-holes").classList.remove("invisible");
                    document.querySelector("#previous-black-holes").classList.remove("invisible");
                }
                flagBlackHoles = true;
            }, 1000);
        }
    }
}

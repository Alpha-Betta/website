const animSpacePictures = document.querySelectorAll('.anim-pictures-space');
let spaceImage = 0;
let spaceImages = ["../images/space-picture1.jpg", 
"../images/space-picture2.jpg", 
"../images/space-picture3.jpg", 
"../images/space-picture4.jpg", 
"../images/space-picture5.jpg", 
"../images/space-picture6.jpg", 
"../images/space-picture7.jpg", 
"../images/space-picture8.jpg", 
"../images/space-picture9.jpg", 
"../images/space-picture10.jpg"];
let flagSpace = true;
if (animSpacePictures.length > 0){
    document.querySelector("#next-space").onclick = function(){
        if (flagSpace){
            flagSpace = false;
            for (let i = 0; i < animSpacePictures.length; i++){
                const animSpacePicture = animSpacePictures[i];
                document.querySelector("#next-space").classList.add("invisible");
                document.querySelector("#previous-space").classList.add("invisible");
                animSpacePicture.classList.add('shift');
            }
            setTimeout(() => { 
                for (let i = 0; i < animSpacePictures.length; i++){
                    const animSpacePicture = animSpacePictures[i];
                    spaceImage = (spaceImage + 1) % spaceImages.length;
                    animSpacePicture.classList.remove('shift');
                    document.querySelector("#next-space").classList.remove("invisible");
                    document.querySelector("#previous-space").classList.remove("invisible");
                    animSpacePicture.src = spaceImages[spaceImage];
                }
                spaceImage -= animSpacePictures.length - 1;
                if (spaceImage < 0){
                    spaceImage += spaceImages.length;
                }
                flagSpace = true;
            }, 1000);
        }
    }
    document.querySelector("#previous-space").onclick = function(){
        if (flagSpace){
            flagSpace = false;
            spaceImage -= 2;
            if (spaceImage < 0){
                spaceImage += spaceImages.length;
            }
            for (let i = 0; i < animSpacePictures.length; i++){
                const animSpacePicture = animSpacePictures[i];
                spaceImage = (spaceImage + 1) % spaceImages.length;
                animSpacePicture.classList.add('shift-reverse');
                document.querySelector("#next-space").classList.add("invisible");
                document.querySelector("#previous-space").classList.add("invisible");
                animSpacePicture.src = spaceImages[spaceImage];
            }
            spaceImage -= animSpacePictures.length - 1;
            if (spaceImage < 0){
                spaceImage += spaceImages.length;
            }
            setTimeout(() => { 
                for (let i = 0; i < animSpacePictures.length; i++){
                    const animSpacePicture = animSpacePictures[i];
                    animSpacePicture.classList.remove('shift-reverse');
                    document.querySelector("#next-space").classList.remove("invisible");
                    document.querySelector("#previous-space").classList.remove("invisible");
                }
                flagSpace = true;
            }, 1000);
        }
    }
}

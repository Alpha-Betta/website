const animPlanetPictures = document.querySelectorAll('.anim-pictures-planets');
let planetImage = 0;
let planetImages = ["../images/planet-picture1.jpg", 
"../images/planet-picture2.jpg", 
"../images/planet-picture3.jpg", 
"../images/planet-picture4.jpg", 
"../images/planet-picture5.jpg", 
"../images/planet-picture6.jpg", 
"../images/planet-picture7.jpeg", 
"../images/planet-picture8.jpg", 
"../images/planet-picture9.jpg", 
"../images/planet-picture10.jpg"];
let flagPlanet = true;
if (animPlanetPictures.length > 0){
    document.querySelector("#next-planets").onclick = function(){
        if (flagPlanet){
            flagPlanet = false;
            for (let i = 0; i < animPlanetPictures.length; i++){
                const animPlanetPicture = animPlanetPictures[i];
                document.querySelector("#next-planets").classList.add("invisible");
                document.querySelector("#previous-planets").classList.add("invisible");
                animPlanetPicture.classList.add('shift');
            }
            setTimeout(() => { 
                for (let i = 0; i < animPlanetPictures.length; i++){
                    const animPlanetPicture = animPlanetPictures[i];
                    planetImage = (planetImage + 1) % planetImages.length;
                    animPlanetPicture.classList.remove('shift');
                    document.querySelector("#next-planets").classList.remove("invisible");
                    document.querySelector("#previous-planets").classList.remove("invisible");
                    animPlanetPicture.src = planetImages[planetImage];
                }
                planetImage -= animPlanetPictures.length - 1;
                if (planetImage < 0){
                    planetImage += planetImages.length;
                }
                flagPlanet = true;
            }, 1000);
        }
    }
    document.querySelector("#previous-planets").onclick = function(){
        if (flagPlanet){
            flagPlanet = false;
            planetImage -= 2;
            if (planetImage < 0){
                planetImage += planetImages.length;
            }
            for (let i = 0; i < animPlanetPictures.length; i++){
                const animPlanetPicture = animPlanetPictures[i];
                planetImage = (planetImage + 1) % planetImages.length;
                animPlanetPicture.classList.add('shift-reverse');
                document.querySelector("#next-planets").classList.add("invisible");
                document.querySelector("#previous-planets").classList.add("invisible");
                animPlanetPicture.src = planetImages[planetImage];
            }
            planetImage -= animPlanetPictures.length - 1;
            if (planetImage < 0){
                planetImage += planetImages.length;
            }
            setTimeout(() => { 
                for (let i = 0; i < animPlanetPictures.length; i++){
                    const animPlanetPicture = animPlanetPictures[i];
                    animPlanetPicture.classList.remove('shift-reverse');
                    document.querySelector("#next-planets").classList.remove("invisible");
                    document.querySelector("#previous-planets").classList.remove("invisible");
                }
                flagPlanet = true;
            }, 1000);
        }
    }
}

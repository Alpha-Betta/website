const likeButton = document.querySelectorAll('.like-button');
if (likeButton.length > 0) {
    for (let index = 0; index < likeButton.length; index++) {
        let clicked = false;

        let btn = likeButton[index];
        let Lheart = btn.querySelector('.Lheart');
        let Rheart = btn.querySelector('.Rheart');
        let count = btn.querySelector('.heart-count');
        btn.addEventListener('click', () => {
            if (!clicked) {
                clicked = true;
                Lheart.style.backgroundColor = "red";
                Rheart.style.backgroundColor = "red";
                count.style.color = "darkviolet";
                count.innerHTML = Number(count.innerHTML) + 1;
            }
            else {        
                clicked = false;
                Lheart.style.backgroundColor = "white";
                Rheart.style.backgroundColor = "white";
                count.style.color = "grey";
                count.innerHTML = Number(count.innerHTML) - 1;
            }
        })
    }
}

const commentButton = document.querySelectorAll('.comment-button');
if (likeButton.length > 0) {
    for (let index = 0; index < commentButton.length; index++) {
        let clicked = false;

        let btn = commentButton[index];
        let comment = btn.querySelector('.comment');
        let count = btn.querySelector('.comment-count');
        btn.addEventListener('click', () => {
            if (!clicked) {
                let commetToDeveloper = prompt("Введите свой комментарий");
                let toDeveloper = false;
                for (let symbol = 0; symbol < commetToDeveloper.length; symbol++) {
                    if (commetToDeveloper[symbol] !== ' '){
                        toDeveloper = true;
                        break;
                    }
                }
                if (toDeveloper){
                    clicked = true;
                    comment.style.backgroundColor = "blue";
                    count.style.color = "darkviolet";
                    count.innerHTML = Number(count.innerHTML) + 1;
                }
            }
            else {        
                if(comment.style.backgroundColor === "blue"){
                   if (confirm("Вы действительно хотите удалить комментарий?")){
                        clicked = false;
                        comment.style.backgroundColor = "white";
                        count.style.color = "grey";
                        count.innerHTML = Number(count.innerHTML) - 1;
                   }
                }
            }
        })
    }
}
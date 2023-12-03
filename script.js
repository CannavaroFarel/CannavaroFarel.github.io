const wrapper = document.queryselector(".wrapper");
const question = document.queryselector(".question");
const gif = document.queryselector(",gif");
const yesBtn = document.queryselector(".yes-btn");
const noBtn = document.queryselector(".no-btn")

yesBtn.addEventListener("click", () => {
    question.innerHTML="Aaaaa,I Like You Too Carissaa";
    gif.src="https://gifdb.com/images/high/bear-hug-love-you-so-much-fu43j8pa7rdgjfl5.gif"
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect ();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.Height;

    const randomX = Math.floor(Math.Random() * MaxX);
    const randomY = Math.floor(Math.Random() * MaxY) ;

    noBtn.style.left = randomX +"px";
    noBtn.style.top =randomY + "px";
});


let entbtn = document.getElementById("conBtn");
let newbtn = document.getElementById("newBtn");
let output = document.getElementById("hint");
let remaining =  document.getElementById("lives");
let numGuess = 0;

let number = [Math.floor(Math.random() * 100)];

entbtn.addEventListener("click", function(){
    let input = document.getElementById("input").value;
    if (input==number){
        output.innerHTML = `Woah! You Guessed It Right Bud. The Number Was ${number}`
        output.style.color = "green";
    }
    else if (input < number)
    {
        output.innerHTML = "Your Guess Is Lesser Than Our Secret Number";
    }
     if(input > number)
    {
        output.innerHTML = "Your Guess Is Greater Than Our Secret Number";
    }
    else if(input > 100 || input < 1)
    {
        output.innerHTML = "The Number Has To Be Between 1 & 100";
    }
    else if (isNaN(input))
    {
        output.innerHTML = " Hey!! I Know That's Not A Number";
    }
    numGuess++;
    life()
});

newbtn.addEventListener('click',function(){
    location.reload();
})

function life(){

    if (remaining <= 0)
    {
       output.innerHTML = `Game Over! The Number Was ${number}`;
       DisableNextButton();
    }
    else{
        remaining.innerHTML = `${10 - numGuess}`;
    }
}

function DisableNextButton(btn) {
    document.getElementById(btn.id).disabled = 'true';

}
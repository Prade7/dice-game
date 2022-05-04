var num=Math.random();
num=(num*5)+1;
num=Math.floor(num);
console.log(num)

var images=[0,"images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var img=document.querySelector(".img1");
img.setAttribute("src",images[num])

var num2=Math.random();
num2=(num2*5)+1;
num2=Math.round(num2);
var img2=document.querySelector(".img2");
img2.setAttribute("src",images[num2])


if(num>num2){
    document.querySelector("div h1").innerText="Player 1 wins";
}
else if(num2>num){
    document.querySelector("div h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("div h1").innerHTML="Match draw!!!";

}
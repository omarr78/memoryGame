
const cardArray =[
    {
        name :'one',
        img : 'images/1.png'
    }
    ,
    {
        name :'two',
        img : 'images/2.png'
    }
    ,
    {
        name :'three',
        img : 'images/3.png'
    }
    ,
    {
        name :'four',
        img : 'images/4.png'
    }
    ,
    {
        name :'five',
        img : 'images/5.png'
    }
    ,
    {
        name :'six',
        img : 'images/6.png'
    }
    ,
    {
        name :'seven',
        img : 'images/7.png'
    }
    ,
    {
        name :'eight',
        img : 'images/8.png'
    }
    ,
    {
        name :'nine',
        img : 'images/9.png'
    }
    ,{
        name :'ten',
        img : 'images/10.png'
    }
    ,
    {
        name :'one',
        img : 'images/1.png'
    }
    ,
    {
        name :'two',
        img : 'images/2.png'
    }
    ,
    {
        name :'three',
        img : 'images/3.png'
    }
    ,
    {
        name :'four',
        img : 'images/4.png'
    }
    ,
    {
        name :'five',
        img : 'images/5.png'
    }
    ,
    {
        name :'six',
        img : 'images/6.png'
    }
    ,
    {
        name :'seven',
        img : 'images/7.png'
    }
    ,
    {
        name :'eight',
        img : 'images/8.png'
    }
    ,
    {
        name :'nine',
        img : 'images/9.png'
    }
    ,{
        name :'ten',
        img : 'images/10.png'
    }
]


let num =0;
let counter =0;
let ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
//remove id => ids[i] = ids[i]*10
// then check if the number is less than 20 
const score = document.getElementById('scr');
const res = document.getElementById('result');
score.textContent = num;
res.textContent = counter;
let chosenItem = [];
let chosenId =[];
cardArray.sort(()=> 0.5-Math.random());
const gridDisplay = document.querySelector('#grid');
console.log(gridDisplay);


const allImg = document.querySelectorAll('img');
function createBoard(){
   for(let i=0;i<allImg.length;i++){
        const card = allImg[i];
        card.setAttribute('src','images/base.png');
        card.setAttribute('id',i);
        card.setAttribute('Width','120');
        card.setAttribute('height','120');
        card.addEventListener('click',flipCard);
   }
}
createBoard();


function checkMatch()
{
    const item1 = document.getElementById(chosenId[0]);
    const item2 = document.getElementById(chosenId[1]);
    if(chosenId[0]==chosenId[1])
    {
        alert('you clicked the same image twice');
        item1.setAttribute('src','images/base.png');
        chosenId =[];
        chosenItem= [];
        console.log(ids);
    }
    else if(chosenItem[0]===chosenItem[1]){
        counter++;
        res.textContent = counter;
        item1.setAttribute('src','images/white.png');
        item2.setAttribute('src','images/white.png');
        item1.removeEventListener('click',flipCard);
        ids[chosenId[0]] +=100;
        item2.removeEventListener('click',flipCard);
        ids[chosenId[1]] +=100;
        num++;
        score.textContent = num;
        chosenId =[];
        chosenItem= [];
        if(num === 10)
        {
            alert('You Won')
        }
        console.log(ids);
    }
    else {
        counter++;
        res.textContent = counter;
        item1.setAttribute('src','images/base.png');
        item2.setAttribute('src','images/base.png');
        chosenId =[];
        chosenItem= [];
        console.log(ids);
    }
    for(let i=0;i<20;i++){
            if(ids[i]<20)
            {
                const carr = document.getElementById(i);
                carr.addEventListener('click',flipCard); 
            }
    }
}


function flipCard(){
    const cardId = this.getAttribute('id');
    const im = document.getElementById(cardId);
    im.setAttribute('src',cardArray[cardId].img);
    chosenItem.push(cardArray[cardId].name);
    chosenId.push(cardId);
   
    if(chosenItem.length===2)
    {
        for(let i=0;i<20;i++)
        {
            if(ids[i]<20)
            {
                const carr = document.getElementById(i);
                carr.removeEventListener('click',flipCard); 
            }
        }
        setTimeout(checkMatch,1000);
    }

}
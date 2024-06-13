function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let couleur = 6
let tour = 0
let dark = false;
let codeGuess = [6, 6, 6, 6];
var code = [getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6)];

const darkMode = document.getElementById('dark');
darkMode.addEventListener('click', () => {
    if (dark === false) {
        const element = document.getElementById('body');
        element.style.backgroundColor = "gray";
        dark = true;
    }
    else if (dark === true) {
        const element = document.getElementById('body');
        element.style.backgroundColor = "white";
        dark = false;
    }
});


const buttonRouge = document.getElementById('rouge');
buttonRouge.addEventListener('click', () => {
    couleur = 0;
});

const buttonBleu = document.getElementById('bleu');
buttonBleu.addEventListener('click', () => {
    couleur = 1;
});

const buttonNoir = document.getElementById('vert');
buttonNoir.addEventListener('click', () => {
    couleur = 2;
});

const buttonOrange = document.getElementById('orange');
buttonOrange.addEventListener('click', () => {
    couleur = 3;
});

const buttonRose = document.getElementById('rose');
buttonRose.addEventListener('click', () => {
    couleur = 4;
});

const buttonViolet = document.getElementById('violet');
buttonViolet.addEventListener('click', () => {
    couleur = 5;
});

const buttonGris = document.getElementById('gris');
buttonGris.addEventListener('click', () => {
    couleur = 6;
});

const buttonJaune = document.getElementById('jaune');
buttonJaune.addEventListener('click', () => {
    couleur = 7;
});

const buttonBlanc = document.getElementById('blanc');
buttonBlanc.addEventListener('click', () => {
    couleur = 8;
});

function getCouleur(){
    switch (couleur){
        case 0:
            return 'red';

        case 1:
            return 'blue';

        case 2:
            return 'green';
        
        case 3:
            return 'orange';
    
        case 4:
            return 'pink';
    
        case 5:
            return 'violet';
        
        case 6:
            return 'gray';

        case 7:
            return 'yellow';

        case 8:
            return 'white';
        case 9:
            return 'black';
    }
    return 'black';
}

const button1 = document.getElementById('bt1');
button1.addEventListener('click', () => {
    if (tour === 0) {
        const element = document.getElementById('bt1');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button2 = document.getElementById('bt2');
button2.addEventListener('click', () => {
    if (tour === 0) {
        const element = document.getElementById('bt2');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button3 = document.getElementById('bt3');
button3.addEventListener('click', () => {
    if (tour === 0) {
        const element = document.getElementById('bt3');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button4 = document.getElementById('bt4');
button4.addEventListener('click', () => {
    if (tour === 0) {
        const element = document.getElementById('bt4');
        element.style.backgroundColor = getCouleur();
        codeGuess[3] = couleur;
    }
});

const button5 = document.getElementById('bt5');
button5.addEventListener('click', () => {
    if (tour === 1) {
        const element = document.getElementById('bt5');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button6 = document.getElementById('bt6');
button6.addEventListener('click', () => {
    if (tour === 1) {
        const element = document.getElementById('bt6');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button7 = document.getElementById('bt7');
button7.addEventListener('click', () => {
    if (tour === 1) {
        const element = document.getElementById('bt7');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button8 = document.getElementById('bt8');
button8.addEventListener('click', () => {
    if (tour === 1) {
        const element = document.getElementById('bt8');
        element.style.backgroundColor = getCouleur();
        codeGuess[3] = couleur;
    }
});

const button9 = document.getElementById('bt9');
button9.addEventListener('click', () => {
    if (tour === 2) {
        const element = document.getElementById('bt9');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button10 = document.getElementById('bt10');
button10.addEventListener('click', () => {
    if (tour === 2) {
        const element = document.getElementById('bt10');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button11 = document.getElementById('bt11');
button11.addEventListener('click', () => {
    if (tour === 2) {
        const element = document.getElementById('bt11');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button12 = document.getElementById('bt12');
button12.addEventListener('click', () => {
    if (tour === 2) {
        const element = document.getElementById('bt12');
        element.style.backgroundColor = getCouleur();
        codeGuess[3] = couleur;
    }
});

const button13 = document.getElementById('bt13');
button13.addEventListener('click', () => {
    if (tour === 3) {
        const element = document.getElementById('bt13');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button14 = document.getElementById('bt14');
button14.addEventListener('click', () => {
    if (tour === 3) {
        const element = document.getElementById('bt14');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button15 = document.getElementById('bt15');
button15.addEventListener('click', () => {
    if (tour === 3) {
        const element = document.getElementById('bt15');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button16 = document.getElementById('bt16');
button16.addEventListener('click', () => {
    if (tour === 3) {
        const element = document.getElementById('bt16');
        element.style.backgroundColor = getCouleur();
        codeGuess[3] = couleur;
    }
});

const button17 = document.getElementById('bt17');
button17.addEventListener('click', () => {
    if (tour === 4) {
        const element = document.getElementById('bt17');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button18 = document.getElementById('bt18');
button18.addEventListener('click', () => {
    if (tour === 4) {
        const element = document.getElementById('bt18');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button19 = document.getElementById('bt19');
button19.addEventListener('click', () => {
    if (tour === 4) {
        const element = document.getElementById('bt19');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button20 = document.getElementById('bt20');
button20.addEventListener('click', () => {
    if (tour === 4) {
        const element = document.getElementById('bt20');
        element.style.backgroundColor = getCouleur();
        codeGuess[3] = couleur;
    }
});

const button21 = document.getElementById('bt21');
button21.addEventListener('click', () => {
    if (tour === 5) {
        const element = document.getElementById('bt21');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button22 = document.getElementById('bt22');
button22.addEventListener('click', () => {
    if (tour === 5) {
        const element = document.getElementById('bt22');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button23 = document.getElementById('bt23');
button23.addEventListener('click', () => {
    if (tour === 5) {
        const element = document.getElementById('bt23');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button24 = document.getElementById('bt24');
button24.addEventListener('click', () => {
    if (tour === 5) {
    const element = document.getElementById('bt24');
    element.style.backgroundColor = getCouleur();
    codeGuess[3] = couleur;
    }
});

const button25 = document.getElementById('bt25');
button25.addEventListener('click', () => {
    if (tour === 6) {
        const element = document.getElementById('bt25');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button26 = document.getElementById('bt26');
button26.addEventListener('click', () => {
    if (tour === 6) {
        const element = document.getElementById('bt26');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button27 = document.getElementById('bt27');
button27.addEventListener('click', () => {
    if (tour === 6) {
        const element = document.getElementById('bt27');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button28 = document.getElementById('bt28');
button28.addEventListener('click', () => {
    if (tour === 6) {
        const element = document.getElementById('bt28');
        element.style.backgroundColor = getCouleur();
        codeGuess[3] = couleur;
    }
});

const button29 = document.getElementById('bt29');
button29.addEventListener('click', () => {
    if (tour === 7) {
        const element = document.getElementById('bt29');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button30 = document.getElementById('bt30');
button30.addEventListener('click', () => {
    if (tour === 7) {
        const element = document.getElementById('bt30');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button31 = document.getElementById('bt31');
button31.addEventListener('click', () => {
    if (tour === 7) {
        const element = document.getElementById('bt31');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button32 = document.getElementById('bt32');
button32.addEventListener('click', () => {
    if (tour === 7) {
    const element = document.getElementById('bt32');
    element.style.backgroundColor = getCouleur();
    codeGuess[3] = couleur;
    }
});

const button33 = document.getElementById('bt33');
button33.addEventListener('click', () => {
    if (tour === 8) {
        const element = document.getElementById('bt33');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button34 = document.getElementById('bt34');
button34.addEventListener('click', () => {
    if (tour === 8) {
        const element = document.getElementById('bt34');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button35 = document.getElementById('bt35');
button35.addEventListener('click', () => {
    if (tour === 8) {
        const element = document.getElementById('bt35');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button36 = document.getElementById('bt36');
button36.addEventListener('click', () => {
    if (tour === 8) {
    const element = document.getElementById('bt36');
    element.style.backgroundColor = getCouleur();
    codeGuess[3] = couleur;
    }
});

const button37 = document.getElementById('bt37');
button37.addEventListener('click', () => {
    if (tour === 9) {
        const element = document.getElementById('bt37');
        element.style.backgroundColor = getCouleur();
        codeGuess[0] = couleur;
    }
});

const button38 = document.getElementById('bt38');
button38.addEventListener('click', () => {
    if (tour === 9) {
        const element = document.getElementById('bt38');
        element.style.backgroundColor = getCouleur();
        codeGuess[1] = couleur;
    }
});

const button39 = document.getElementById('bt39');
button39.addEventListener('click', () => {
    if (tour === 9) {
        const element = document.getElementById('bt39');
        element.style.backgroundColor = getCouleur();
        codeGuess[2] = couleur;
    }
});

const button40 = document.getElementById('bt40');
button40.addEventListener('click', () => {
    if (tour === 9) {
        const element = document.getElementById('bt40');
        element.style.backgroundColor = getCouleur();
        codeGuess[3] = couleur;
    }
});

function checkCodeBienPlace(codePc, codeUser)
{
    let bonNombre = 0;
    for (let i = 0; i < 4; i++)
    {
        if (codePc[i] === codeUser[i] && codePc[i] != -1 && codeUser[i] != -1)
        {
            codePc[i] = -1;
            codeUser[i] = -1;
            bonNombre++;
        }
    }
    return bonNombre;
}

function checkCodeMalPlace(codePc, codeUser)
{
    let malPlace = 0;
    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            if (codePc[i] == codeUser[j] && codePc[i] != -1 && codeUser[j] != -1)
            {
                codePc[i] = -1;
                codeUser[j] = -1;
                malPlace++;
            }
        }
    }
    return malPlace;
}

function resetGame()
{   couleur = 6;
    element = document.getElementById('bt1');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt2');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt3');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt4');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt5');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt6');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt7');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt8');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt9');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt10');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt11');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt12');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt13');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt14');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt15');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt16');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt17');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt18');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt19');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt20');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt21');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt22');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt23');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt24');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt25');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt26');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt27');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt28');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt29');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt30');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt31');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt32');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt33');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt34');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt35');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt36');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt37');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt38');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt39');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt40');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt41');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt42');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt43');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt44');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt45');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt46');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt47');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt48');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt49');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt50');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt51');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt52');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt53');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt54');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt55');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt56');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt57');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt58');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt59');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt60');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt61');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt62');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt63');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt64');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt65');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt66');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt67');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt68');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt69');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt70');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt71');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt72');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt73');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt74');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt75');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt76');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt77');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt78');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt79');
    element.style.backgroundColor = getCouleur();
    element = document.getElementById('bt80');
    element.style.backgroundColor = getCouleur();
    couleur = 6;
    var a = getRandomInt(6);
    var b = getRandomInt(6);
    var c = getRandomInt(6);
    var d = getRandomInt(6);
    code = [a, b, c, d];
}

let good = 0;
let bof = 0;
let mauvais = 0;

function updateResBadBadBadBad()
{
    couleur = 9;
    if (tour == 0)
    {
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResBadBadBadBof()
{
    if (tour == 0)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResBadBadBofBof()
{
    if (tour == 0)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResBadBofBofBof()
{
    if (tour == 0)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResBofBofBofBof()
{
    couleur = 7; //jaune;
    if (tour == 0)
    {
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodGoodGoodGood()
{
    couleur = 8; //blanc;
    if (tour == 0)
    {
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodBadBadBad()
{
    if (tour == 0)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodGoodBadBad()
{
    if (tour == 0)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodGoodBofBof()
{
    if (tour == 0)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodBofBofBof()
{
    if (tour == 0)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodGoodGoodBad()
{
    if (tour == 0)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //jaune;
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 9; //Noir;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodBofBadBad()
{
    if (tour == 0)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodBofBofBad()
{
    if (tour == 0)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 8; //Blanc;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        couleur = 7; //jaune;
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

function updateResGoodGoodBadBof()
{
    if (tour == 0)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt41');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt42');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt43');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt44');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 1)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt45');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt46');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt47');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt48');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 2)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt49');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt50');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt51');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt52');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 3)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt53');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt54');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt55');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt56');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 4)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt57');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt58');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt59');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt60');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 5)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt61');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt62');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt63');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt64');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 6)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt65');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt66');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt67');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt68');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 7)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt69');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt70');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt71');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt72');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 8)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt73');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt74');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt75');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt76');
        element.style.backgroundColor = getCouleur();
    }
    if (tour == 9)
    {
        couleur = 7; //jaune;
        element = document.getElementById('bt77');
        element.style.backgroundColor = getCouleur();
        couleur = 9; //Noir;
        element = document.getElementById('bt78');
        element.style.backgroundColor = getCouleur();
        couleur = 8; //Blanc;
        element = document.getElementById('bt79');
        element.style.backgroundColor = getCouleur();
        element = document.getElementById('bt80');
        element.style.backgroundColor = getCouleur();
    }
    couleur = 6;
}

const check = document.getElementById('check');
check.addEventListener('click', () => {
    if (tour > 9){
        tour = -1;
        resetGame();
        couleur = 6;
    }
    let codeCopy = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++)
    {
        codeCopy[i] = code[i];
    }
    good = checkCodeBienPlace(codeCopy, codeGuess);
    bof = checkCodeMalPlace(codeCopy, codeGuess);
    mauvais = 4 - good - bof;
    if (good == 4)
    {
        updateResGoodGoodGoodGood();
        good = 0;
        bof = 0;
        mauvais = 0
        tour = 9;
    }
    if (good == 0 && bof == 0 && mauvais == 4)
    {
        updateResBadBadBadBad();
    }
    if (good == 0 && bof == 1 && mauvais == 3)
    {
        updateResBadBadBadBof();
    }
    if (good == 0 && bof == 2 && mauvais == 2)
    {
        updateResBadBadBofBof();
    }
    if (good == 0 && bof == 3 && mauvais == 1)
    {
        updateResBadBofBofBof();
    }
    if (good == 1 && bof == 0 && mauvais == 3)
    {
        updateResGoodBadBadBad();
    }
    if (good == 1 && bof == 1 && mauvais == 2)
    {
        updateResGoodBofBadBad();
    }
    if (good == 1 && bof == 2 && mauvais == 1)
    {
        updateResGoodBofBofBad();
    }
    if (good == 0 && bof == 4 && mauvais == 0)
    {
        updateResBofBofBofBof();
    }
    if (good == 1 && bof == 3 && mauvais == 0)
    {
        updateResGoodBofBofBof();
    }
    if (good == 2 && bof == 0 && mauvais == 2)
    {
        updateResGoodGoodBadBad();
    }
    if (good == 2 && bof == 1 && mauvais == 1)
    {
        updateResGoodGoodBadBof();
    }
    if (good == 2 && bof == 2 && mauvais == 0)
    {
        updateResGoodGoodBofBof();
    }
    if (good == 3 && bof == 0 && mauvais == 1)
    {
        updateResGoodGoodGoodBad();
    }
    tour++;
});
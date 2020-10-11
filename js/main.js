'use strict'

console.log('picture game');

var gQuests;
var gCurrQuestIdx;


function init() {
    gCurrQuestIdx = 1;
    gQuests = createQuests();
    renderQuest(gCurrQuestIdx);
}


function createQuests() {
    var quests = [];

    quests[0] = {
        id: 1,
        opts: ['Pitaya', 'Starfruit'],
        correctOptIndex: 1
    }
    quests[1] = {
        id: 2,
        opts: ['Guava', 'Annona'],
        correctOptIndex: 1
    }
    quests[2] = {
        id: 3,
        opts: ['Papaya', 'Lychee'],
        correctOptIndex: 2
    }
    quests[3] = {
        id: 4,
        opts: ['Qiwi', 'Passionfruit'],
        correctOptIndex: 2
    }

    return quests;
}

function renderQuest(id) {
    createBottons();
    var elContainer = document.querySelector('.container');
    elContainer.innerHTML = '<img class="img-qust" src="img/' + id + '.jpg" />';
    var elBtn1 = document.querySelector('#ans1');
    elBtn1.innerText = getQuestById(id).opts[0];
    var elBtn2 = document.querySelector('#ans2');
    elBtn2.innerText = getQuestById(id).opts[1];
}

function getQuestById(id) {
    var quest;
    for (var i = 0; i < gQuests.length; i++) {
        quest = gQuests[i];
        if (quest.id === id) return quest;
    }
    return null;
}

function checkAnswer(elBtn) {
    var dataSet = elBtn.dataset;
    var index = +dataSet.idx;
    var quest = getQuestById(gCurrQuestIdx);

    if (index === quest.correctOptIndex) {
        gCurrQuestIdx++;
        if (!checkVictory()) {
            renderQuest(gCurrQuestIdx);
            console.log('true');
            // return true;
        }
    }
    else {
        wrongAnswer();
        console.log('false');
        setTimeout(function () { renderQuest(gCurrQuestIdx) }, 1000);
        // return false;
    }
}
function wrongAnswer() {
    var elContainer = document.querySelector('.container');
    elContainer.innerHTML = '<div class="msg">WRONG!!!!</div>';

}

function createBottons() {
    var elBtns = document.querySelector('.bottons');
    if (gCurrQuestIdx === 1) {
        elBtns.innerHTML = '<button class= "btn" id="ans1" onclick="checkAnswer(this)" data-idx="1">1</button><button class= "btn" id="ans2" onclick="checkAnswer(this)" data-idx="2">2</button>';
    }
    else if (gCurrQuestIdx > gQuests.length) {
        elBtns.innerHTML = '<button class= "btn" onclick="init()">restart game</button>'
    }
}

function checkVictory() {
    if (gCurrQuestIdx > gQuests.length) {
        var elContainer = document.querySelector('.container');
        elContainer.innerHTML = '<div class="msg">VICTORIOUS!</div>';
        createBottons();
        return true;
    }
    return false;
}

function endGame() {

}
const cells = document.querySelectorAll('.cell');



//Текущий игрок
let currentPlayer = 'x';
let scoreX = document.querySelector('#scoreX').innerHTML;
let scoreO = document.querySelector('#scoreO').innerHTML;



//Логика игры
preparingField(cells);




//Функция подготовления поля к игре
function preparingField(cell) {
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.addEventListener('click', nextTurn);
        cell.innerHTML = '';
        cell.style.color = 'white';
    }

}


//Функция смены хода
function nextTurn(e) {

    e.target.innerHTML = currentPlayer;

    //Смена текущего игрока
    if (currentPlayer == 'x') {
        currentPlayer = 'o';
    }else{
        currentPlayer = 'x'
    }

    //Удаляем onClick, дабы избежать повторного клика на ячейку
    e.target.removeEventListener('click', nextTurn);
    checkWinner(currentPlayer);

}


function checkWinner(currentPlayer) {

    const winningComb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let i = 0; i < winningComb.length; i++) {
        let win = winningComb[i];
        //Проверка выигрышных комбинаций
        if (
            cells[win[0]].innerHTML == cells[win[1]].innerHTML &&
            cells[win[1]].innerHTML == cells[win[2]].innerHTML &&
            cells[win[1]].innerHTML != ''
        ) {
            //Перекрашиваем победную комнбинацию в зеленый
            cells[win[0]].style.color = '#4cd137';
            cells[win[1]].style.color = '#4cd137';
            cells[win[2]].style.color = '#4cd137';
             //Выводим уведомление о победе
             return winAlert(cells[win[0]].innerHTML);
        }
    }


}

function winAlert(winner) {

    //Создаем блок уведомления и наполняем
    const alert = document.createElement('div');
    alert.innerHTML = 'Победил - '+ winner;
    alert.classList = 'alert';

    //Создаем кнопку
    const btn = document.createElement('button');
    btn.innerHTML = 'OK';
    btn.classList = 'okey';
    btn.onclick = restartGame;

    alert.appendChild(btn);

    document.querySelector('.wrapper').appendChild(alert);


    //Добавляем очко в счет победителя
    if (winner == 'x') {
        scoreX++;
        document.querySelector('#scoreX').innerHTML = scoreX;
    }else{
        scoreO++;
        document.querySelector('#scoreO').innerHTML = scoreO;
    }


    //Перезапускаем игру

}


function restartGame() {
    preparingField(cells);
    document.querySelector('.alert').remove();
}

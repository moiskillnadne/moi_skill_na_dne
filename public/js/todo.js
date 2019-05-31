const btn = document.querySelector('#button');
const textArea = document.querySelector('#note');
const parent = document.querySelector('.todo-list');

btn.addEventListener('click', saveTask)


let list = [];

if (localStorage.getItem('taskList') != undefined) {
    list = JSON.parse(localStorage.getItem('taskList'));


    //Вывод всей информации из массива
    for (let i = 0; i < list.length; i++) {
        showTask(i);
    }
}


//Меняем поведение ENTER на странице
document.addEventListener('keypress',(e)=>{
    if(e.which == 13){
        e.preventDefault();
        btn.click();
    }
})



//Функция сохранения задач
function saveTask() {

    const taskMaket = {
        text: textArea.value,
        done: false,
    }
    if(taskMaket.text == 0){
        //Поведение при пустом поле

        const attention = document.createElement('div');

        attention.classList = 'alert alert-danger attention';
        attention.innerHTML = 'Ваше поле пустое, введите задание!';

        document.querySelector('.wrap-todo-add').appendChild(attention);


        //Удаление предупреждения после показа!
        setTimeout((e)=>{
            attention.remove();
        }, 2000);

    }else if(list.length>=30){
        //Поведение при полностью заполненом массиве

        const attention = document.createElement('div');

        attention.classList = 'alert alert-danger attention';
        attention.innerHTML = 'Список заданий полон!';

        document.querySelector('.wrap-todo-add').appendChild(attention);


        //Удаление предупреждения после показа!
        setTimeout((e)=>{
            attention.remove();
        }, 2000);


    }else{

        //Сохранение данных в массив
        list.push(taskMaket);

        //Сохранение данных в localStorage
        localStorage.setItem('taskList', JSON.stringify(list));

        //Очистка поля ввода
        textArea.value = '';


        //Вывод последнего элемента из массива
        let index;
        for (i = 0; i < list.length; i++) {
            index = i;
        }
        if(taskMaket.text != 0){
            showTask(index);
        }
    }
}

//Функция показа задач
function showTask(index) {

    const newHref = document.createElement('a');

    //Наполняем созданный блок текстом
    newHref.innerHTML = list[index].text;

    //Добавляем созданному блоку onClick
    newHref.onclick = deleteTask;

    // Добавляем нужный класс блоку
    newHref.classList = 'list-group-item list-group-item-action'

    //Добавляем созданный блок в HTML разметку
    parent.appendChild(newHref);
}









//Функция удаления задач
function deleteTask() {



        for (let i = 0; i < list.length; i++) {

            if (this.innerHTML == list[i].text) {

                //Удаляем нужный нам элемент
                list.splice(i,1)

                //Сохранение данных в localStorage
                localStorage.setItem('taskList', JSON.stringify(list));

                //Удаление элемента со страницы
                this.remove();
            }
        }

}

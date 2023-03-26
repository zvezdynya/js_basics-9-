//1. Зарплата вечернего уборщика в городской поликлинике 40000 рублей, а педагога по вокалу 22000 рублей. Выведите в консоль, сколько может зарабатывать вечерний уборщик, имея голос и педагогическое образование?

function calcTotalSalery() {
    const saleryCleaner = 40000;
    const salerySingTeacher = 22000;
    return console.log(saleryCleaner + salerySingTeacher);
}

calcTotalSalery();

//2. Сложите слово 'Владивосток' и число 2000, а также добавьте между ними пробел, чтобы получилось название известной песни. Результат выведите в консоль.

function createSongname () {
    const word = "Владивосток";
    const number = "2000";
    return console.log(`${word} ${number}`);
}

createSongname();

//3. Прокрастинируя дома, Русалка 128 минут переписывалась в мессенджере, 254 минуты лайкала фотокарточки, 137 минут читала статьи ВКонтакте и 201 минуту смотрела стендапы на YouTube.

function calcTime () {
    const messendger = 128;
    const likesPhoto = 254;
    const readVK = 137;
    const youTube = 201;
    return console.log((messendger + likesPhoto + readVK + youTube) / 60);
}

calcTime();

//4. Возведите число 2 в 5 степень.

(function (a, b) {
    return console.log(a ** b);
}(2, 5));


//5. Выведите в консоль строку: "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"

const text = `Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!`;
console.log(text);

//6. У вас есть две переменные: const greetings = "Привет"; const name = "Кот"; Склейте значение этих двух переменных и выведите на экран значение «Привет, Кот».

function sumStrings() {
    const firstStr = 'Привет';
    const secondStr = 'Кот';
    const finalStr = `${firstStr}, ${secondStr}`;
    return console.log(finalStr);
}

sumStrings();

//7. Представьте: турист из Пскова прилетел в Москву и заказал автомобиль до хостела. Вы в роли программы-навигатора. 1) Маршрут построен, время посчитано, но сохранить его некуда. Создайте переменную time, чтобы программа смогла обновлять оставшееся в пути время, и турист был спокоен. 2) Проверим, может ли JavaScript достучаться до переменной по её имени. Заодно посмотрим, что лежит в коробке сейчас — там должно быть пусто. На следующей строке выведите значение переменной в консоль. При обращении через  console.log()  в скобках укажите имя переменной. 3) Поездка начинается, время в пути34минуты. Самое время сохранить это значение в переменную и вывести на экран. Сразу после создания переменной timeприсвойте значение 34. «Консоль-лог» переместится на третью строчку кода и выведет значение переменной. 4) Вывод в консоль числа 34ни о чём не говорит. Сделаем его более человечным и понятным. Соедините текст и значение переменной. Внутри скобок для console.log  напишите 'Старт поездки. Осталось минут: ' + time. Кавычки важны, не потеряйте их. 5) Пока вы писали сообщение, турист из Пскова смотрел сторис, а такси ехало 15 минут. После уже написанного кода уменьшите значение переменной time на 15. 6) Примените уже знакомый трюк. Воспользуйтесь конкатенацией строк, чтобы вывести в консоль фразу 'Немного сторис в соцсетях. Осталось минут: 'и текущего значения переменной time. Пишите код ниже уже написанного, ведь браузер читает его сверху вниз. 7) Ещё 10 минут. Машина едет, турист читает новости. Уменьшите значение переменной time на 10. В консоль выведите фразу 'Немного не новостей, но событий. Осталось минут: ' плюс обновленное значение time. 8) Тем временем машина доехала до пункта назначения. Присвойте переменной time значение 0. 9) Не хватает сообщения о том, что поездка завершена: Вы приехали. Добро пожаловать в Москву. Выведите его в консоль в самом конце программы, не забыв заключить текст в кавычки.

let time;
console.log(time);
function greeting() {
    time = 34;
    return console.log(`Старт поездки. Осталось ${time} минут.`);
};
setTimeout(greeting, 500);

function firstCalc() {
    time -= 15;
    return console.log(`Немного сторис в соцсетях. Осталось ${time} минут.`);
};

setTimeout(firstCalc, 1600);

function secondCalc() {
    time -= 10;
    return console.log(`Немного не новостей, но событий. Осталось ${time} минут.`);
};

setTimeout(secondCalc, 2700);

function finalCalc() {
    time = 0;
    return console.log(`Поездка завершена: Вы приехали. Добро пожаловать в Москву.`);
};

setTimeout(finalCalc, 3800);


//8. Объявите переменную с именем fahrenheitи положите в неё значение 451. Добавьте новую переменную celsiusи запишите в неё значение, рассчитанное по формуле перевода температуры из градусов по Фаренгейту в градусы Цельсия: (fahrenheit - 32) / 1.8; Применив переменные и шаблонные строки, выведите в консоль строку, где _fahrenheit_и _celsius_ — это значения соответствующих переменных: '_fahrenheit_ градуса по Фаренгейту — это _celsius_ градуса по Цельсию.'

const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} градус по Фаренгейту - это ${celsius} градуса по Цельсию.`);

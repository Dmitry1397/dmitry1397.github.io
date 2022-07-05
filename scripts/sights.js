const sights = [];
const content = document.querySelector('#container');
const myH2 = document.querySelector('h2');


class Sights {

    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

}

const motherland = new Sights('Батьківщина-Мати', `Батьківщина-мати — популярне місце в Києві, яке є грандіозним монументом, зведеним на правобережжі Дніпра в 1981 році. 
Це шістнадцятий за своєю висотою пам’ятник світу. Пам'ятник присвячений героям Великої Вітчизняної війни. 
Він вражає своїми величезними розмірами і оточений мальовничим парком, в якому із задоволенням гуляють дорослі і діти. 
Крім того, тут можна відвідати цікаву музейну експозицію про історичні факти військових діях 1941-1945 років.`);

const andriivsky = new Sights('Андріївський узвіз', `Андріївським узвозом називають мальовничу вулицю Києва, яка була найстарішим шляхом, що з'єднує важливі торговельні території. 
Свою назву це цікаве місце Києва отримало від Андріївської церкви (зведеної у середині 18 століття), котра розташована вгорі узвозу. 
На звозі, безсумнівно, є на що поглянути. 
Саме тут ви зможете зануритися в атмосферу старовини, затишку та долучитися до незвичайної історію, яка панує тут на кожному кроці. 
Вашій увазі постануть чудові архітектурні шедеври, легендарні провулки та площі, а також такі культурні заклади, як Музей Булгакова та Музей однієї вулиці.`)

const kostel = new Sights('Миколаївський костел', `Величний і таємничий в своїй архітектурі Миколаївський костел не може не викликати щирого захоплення. 
Можна годинами милуватися на його вигадливі візерунки, проникаючи вглиб століть. 
Він являє собою римсько-католицький храм, присвячений Святому Миколаю. З 1980 року в його будинку розміщується Будинок камерної та органної музики. 
Одне з тих місць, які варто відвідати в Києві.`)










content.addEventListener('click', (e) => {
    const info = document.createElement('p');
    
    if (e.target.getAttribute('id') === 'unclicked') {
        e.target.setAttribute('class', '.pictures-up');
        e.target.setAttribute('id', 'clicked');
        e.target.appendChild(info);
    } else if (e.target.getAttribute('id' === 'clicked')) {
        e.target.setAttribute('class', '.pictures');
        e.target.setAttribute('id', 'unclicked');
    }


})
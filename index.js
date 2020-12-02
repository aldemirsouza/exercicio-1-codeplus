const eplusDevList = ['Parça', 'Galego', 'Xará', 'Baqueta', 'Na', 'Lindo', 'Pablito', 'Bahia']

const $eplusList = document.querySelector('.eplusList');

function listDevs(list){
    eplusDevList.forEach(function(dev){
        const itemDev = document.createElement('div');
        itemDev.innerText = dev;
        console.log(itemDev);
    });
}

listDevs(eplusDevList);

//a função deve dar console.log em cada um dos desenvolvedores da e-plus.
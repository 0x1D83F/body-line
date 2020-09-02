document.querySelector('.tabs__ul').addEventListener('click',price);

function price(event){
    let target = event.target;
    let tabs = document.querySelectorAll('.price__our');

    if(target.classList.contains('tabs__item_class') ) {
        tabs.forEach((item, index) => {
            item.classList.remove('_mod__price')
        })
        document.querySelector('.price__our_0').classList.add('_mod__price')
    }else if(target.classList.contains('tabs__item__ant') ) {
        tabs.forEach((item, index) => {
            item.classList.remove('_mod__price')
        })
        document.querySelector('.price__our_1').classList.add('_mod__price')
    }else if(target.classList.contains('tabs__item_ban') ) {
        tabs.forEach((item, index) => {
            item.classList.remove('_mod__price')
        })
        document.querySelector('.price__our_2').classList.add('_mod__price')
    }else if(target.classList.contains('tabs__item_lim') ) {
        tabs.forEach((item, index) => {
            item.classList.remove('_mod__price')
        })
        document.querySelector('.price__our_3').classList.add('_mod__price')
    }else if(target.classList.contains('tabs__item_sam') ) {
        tabs.forEach((item, index) => {
            item.classList.remove('_mod__price')
        })
        document.querySelector('.price__our_4').classList.add('_mod__price')
    }else if(target.classList.contains('tabs__item_obg') ) {
        tabs.forEach((item, index) => {
            item.classList.remove('_mod__price')
        })
        document.querySelector('.price__our_5').classList.add('_mod__price')
    }

}

// Данные для карточек товаров
const appliancesData = [
    {
        imgSrc: "img/stove.png",
        altText: "Мечта v123",
        description: "Электрическая плита 'Мечта V123'",
    },
    {
        imgSrc: "img/bake.png",
        altText: "DEXP MS-71",
        description: "Микроволновая печь 'DEXP MS-71'",
    },
    {
        imgSrc: "img/electric-plate.png",
        altText: "Centek CT-1508",
        description: "Электрическая плита 'Centek CT-1508'",
    },
    {
        imgSrc: "img/multicooker.png",
        altText: "SUPRA MCS-4115",
        description: "Мультиварка 'SUPRA MCS-4115'",
    },
    {
        imgSrc: "img/iron.png",
        altText: "Centek CT-2347",
        description: "Утюг повседневный 'Centek CT-2347'",
    },
    {
        imgSrc: "img/Ironing_press.png",
        altText: "Kitfort KT-2605565",
        description: "Гладильный пресс 'Kitfort KT-2605565'",
    },
    {
        imgSrc: "img/Ironing_mannequin.png",
        altText: "Eolo SA05",
        description: "Гладильный манекен 'Eolo SA05'",
    },
    {
        imgSrc: "img/air_washer.png",
        altText: "itek VT-8556 v34454",
        description: "Мойка воздуха 'itek VT-8556 v34454'",
    },
    {
        imgSrc: "img/germicidal_lamp.png",
        altText: "Xiaoda UVC Disinfection",
        description: "Бактерицидная УФ лампа 'Xiaoda UVC Disinfection'",
    },
    {
        imgSrc: "img/Thermohygrometer.png",
        altText: "Aceline DC-108766776",
        description: "Термогигрометр 'Aceline DC-108766776'",
    },
    {
        imgSrc: "img/air_quality.png",
        altText: "Netatmo NHC-EC",
        description: "Анализатор воздуха  'Netatmo NHC-EC'",
    },
    {
        imgSrc: "img/valve.png",
        altText: "VAKIO Kiv",
        description: "Приточный клапан  'VAKIO Kiv'",
    },
    
];

const beautyData = [
    {
        imgSrc: "img/hair_dryer.png",
        altText: "IRIT IR-3142",
        description: "Фен повседневный 'IRIT IR-3142'",
    },
    {
        imgSrc: "img/brush.png",
        altText: "First FA-5651-24434444",
        description: "Фен-щетка 'First FA-5651-24434444'",
    },
    {
        imgSrc: "img/comb_electric.png",
        altText: "Braun BR750 MN",
        description: "Электрическая расческа 'Braun BR750 MN'",
    },
    {
        imgSrc: "img/clipper.png",
        altText: "Energy EN-715",
        description: "Машинка для стрижки 'Energy EN-715'",
    },
    {
        imgSrc: "img/disposable_machine.png",
        altText: "Kodak Disposable Razor",
        description: "Станок одноразовый 'Kodak Disposable Razor'",
    },
    {
        imgSrc: "img/Toothbrush_electric.png",
        altText: "Trisa Sonicpower Battery 32323",
        description: "Зубная щетка 'Trisa Sonicpower Battery 32323'",
    },
    {
        imgSrc: "img/holder.png",
        altText: "Aceline TBH02B",
        description: "Держатель для зубной щетки 'Aceline TBH02B'",
    },
    {
        imgSrc: "img/sterilizer.png",
        altText: "Philips HX6907/01",
        description: "Стерилизатор 'Philips HX6907/01'",
    },
    {
        imgSrc: "img/Irrigator.png",
        altText: "Porto-accessories IR01G",
        description: "Ирригатор 'Porto-accessories IR01G'",
    },
    {
        imgSrc: "img/Irrigator_two.png",
        altText: "Porto-accessories IR02WR",
        description: "Ирригатор 'Porto-accessories IR02WR'",
    },
    
];

const networkData = [
    {
        imgSrc: "img/router.png",
        altText: "Mercusys MW301R",
        description: "Wi-fi роутер 'Mercusys MW301R'",
    },
    {
        imgSrc: "img/adapter.png",
        altText: "PowerLine D-Link DHP-W310AV",
        description: "Адаптер 'PowerLine D-Link DHP-W310AV'",
    },
    {
        imgSrc: "img/lan_card.png",
        altText: "DEXP ZH-FEPCI1",
        description: "Сетевая карта 'DEXP ZH-FEPCI1'",
    },
    {
        imgSrc: "img/Voltage_regulator.png",
        altText: "PowerMan AVS 1000A",
        description: "Стабилизатор напряжения 'PowerMan AVS 1000A'",
    },
    {
        imgSrc: "img/cable.png",
        altText: "HUAWEI D15M-D15F",
        description: "Стабилизатор напряжения 'HUAWEI D15M-D15F'",
    },
    {
        imgSrc: "img/rails.png",
        altText: "PowerCom RAL5090",
        description: "Стабилизатор напряжения ' PowerCom RAL5090'",
    },
    {
        imgSrc: "img/card.png",
        altText: "Ippon SNMP 001",
        description: "SNMP карта 'Ippon SNMP 001'",
    },
    {
        imgSrc: "img/battery_pack.png",
        altText: "Powercom BAT VGD-RM 36V",
        description: "Батарейный блок 'Powercom BAT VGD-R'",
    },
    {
        imgSrc: "img/adapters.png",
        altText: "STEKKER ADP6-03-20",
        description: "Переходник 'STEKKER ADP6-03-20'",
    },
    {
        imgSrc: "img/charger.png",
        altText: "Smartbuy 503",
        description: "Зарядное устройство 'Smartbuy 503'",
    },
    {
        imgSrc: "img/camera.png",
        altText: "Digma DiVision 201",
        description: "IP-камера 'Digma DiVision 201'",
    },
    
];


// Функция для создания карточки товара на основе шаблона
function createCard(template, imgSrc, altText, description) {
    const card = template.content.cloneNode(true);
    card.querySelector(".img_items").src = imgSrc;
    card.querySelector(".img_items").alt = altText;
    card.querySelector(".description_img").textContent = description;
    return card;
}

// Генерация карточек товаров
const appliancesList = document.getElementById("appliances_list");
const beautyList = document.getElementById("beauty_list");
const networkList = document.getElementById("network_list");
const applianceTemplate = document.getElementById("appliance_template");
const beautyTemplate = document.getElementById("beauty_template");
const networkTemplate = document.getElementById("network_template");

appliancesData.forEach((product) => {
    const card = createCard(
        applianceTemplate,
        product.imgSrc,
        product.altText,
        product.description
    );
    appliancesList.appendChild(card);
});

beautyData.forEach((product) => {
    const card = createCard(
        beautyTemplate,
        product.imgSrc,
        product.altText,
        product.description
    );
    beautyList.appendChild(card);
});

networkData.forEach((product) => {
    const card = createCard(
        networkTemplate,
        product.imgSrc,
        product.altText,
        product.description
    );
    networkList.appendChild(card);
});

// Реализация логики закрепленной кнопки для возврата наверх.


window.addEventListener('scroll', function() {
    var fixedMenu = document.querySelector('.categories_wrapper');
    var mainMenu = document.querySelector('.main-menu');
    var footer = document.querySelector('.footer');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= fixedMenu.offsetHeight) {
        mainMenu.style.marginTop = fixedMenu.offsetHeight + 'px';
        footer.style.marginTop = '0';
    } else {
        mainMenu.style.marginTop = '0';
        footer.style.marginTop = '';
    }
});
window.onscroll = function() { showScrollButton() };

function showScrollButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").classList.add("show");
    } else {
        document.getElementById("scrollToTopButton").classList.remove("show");
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Преобразование даты в человекочитаемый вид
function getDayInfo(dateString) {
    let dateParts = dateString.split('.');
    let date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  
    let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let weekday = weekdays[date.getDay()];
  
    let weekNumber = Math.ceil(date.getDate() / 7);
  
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let month = months[date.getMonth()];
  
    let year = date.getFullYear();
  
    let formattedDate = weekday + ', ' + weekNumber + ' неделя ' + month + ' ' + year + ' года';
    return formattedDate;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    
        let dateContainer = document.querySelectorAll('.add-date');
        dateContainer.forEach(function(item) {
            
        let date = '01.01.2022';
    
        let formattedDate = getDayInfo(date);
    
        
        item.textContent = "Добавлен:\n" + formattedDate;
    });
  
    
});
  

      // Вывод сообщения о покупке
  let buy_info = document.querySelector('#buy-info');       
  
  let buys_btn = document.querySelectorAll('.buy_btn');
  let close_btn=document.querySelector('#close');
  buys_btn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let form_buy_section = document.querySelector('.buy-form_secton ');
        form_buy_section.style.display='flex';
        form_buy_section.style.position='fixed'
        form_buy_section.style.top='0'
    });
  });

 
let cardItems = document.querySelectorAll('.card_items');

cardItems.forEach(function(card) {
  let buyBtn = card.querySelector('.buy_btn');
  let description = card.querySelector('.description_img').textContent;
    console.log(description)

  buyBtn.addEventListener('click', function() {
    let form_buy_section = document.querySelector('.buy-form_secton ');
    form_buy_section.style.display='flex';
    let result = [[],[], []];
    result[0].push(description)
    buy_info.addEventListener('click', function() {
        const radioButtonList = document.getElementsByName("color");
        const count_value = document.getElementsByName("count");
        
        for (let i = 0; i < count_value.length; i++) {
            result[1].push(count_value[i].value);
        }

radioButtonList.forEach((radioButton) => {
    if (radioButton.checked) {
        const selectedValue = radioButton.value;
        result[2].push(selectedValue);
    }
});
alert("Поздравляем вас с покупкой!\n  Товар:"+result[0]+"\nКоличество:"+ result[1]+"\nЦвет:" + result[2])
    })
  });
});

 
  close_btn.addEventListener('click', function(e) {
    let form_buy_section = document.querySelector('.buy-form_secton ');
    form_buy_section.style.display='none';
  })

  // Смена темы

const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
  body.classList.toggle('theme-dark');
});

 




 
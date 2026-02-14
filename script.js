// --- APP VERSION ---
const APP_VERSION = "v2.0.0.7"; 
document.getElementById('appVersionDisplay').innerText = APP_VERSION;

// --- TRANSLATIONS ---
const translations = {
    en: { 
        tabCraft:"Crafting", tabRaid:"Raid", tabEco:"Eco / Special",
        selectItem:"What to craft?", enterSulfur:"Total Sulfur Amount", calculateBtn:"Calculate", resetBtn:"Reset",
        youCanCraft:"You can craft:", sulfurManagement:"1. Sulfur Management", otherMaterials:"2. Other Materials Needed",
        step1:"Take", step2:"Cook into", step3:"Keep", step4:"Use for",
        sulfurRaw:"Sulfur", gp:"Gunpowder", explosives:"Explosives", inInventory:"raw", leftover:"Leftover", useForAmmo:"Directly for Ammo",
        selectTarget:"Select Target to Destroy", selectEcoTarget:"Select Special Target", targetCountLabel:"Number of Targets",
        raidOptions:"Destruction Methods", ecoOptions:"Destruction Methods (Off-Meta)",
        method:"Weapon", ecoMethod:"Tool / Weapon", quantity:"Amount", ecoQuantity:"Amount", cost:"Total Cost", ecoCost:"Materials",
        updateText: "New version available!", updateBtnText: "Update Now",
        errNoSulfur: "Not enough Sulfur!", errEnterValue: "Please enter a valid amount!",
        items: { rocket:"Rocket",c4:"C4",hv:"HV Rocket",incen:"Incendiary Rocket",exp556:"Explosive Ammo",satchel:"Satchel Charge",beancan:"Beancan Grenade",molotov:"Molotov",hatchet:"Hatchet",pickaxe:"Pickaxe",spear:"Wooden Spear",sword:"Salvaged Sword",jackhammer:"Jackhammer",fireArrow:"Fire Arrow",charcoal:"Charcoal",frags:"Fragments",fuel:"LGF",pipe:"Pipe",tech:"Tech Trash",cloth:"Cloth",wood:"Wood" },
        targets: { woodDoor:"Wooden Door",woodDouble:"Wood Double Door",woodWall:"Wood Wall",stoneWall:"Stone Wall / Foundation",metalWall:"Sheet Metal Wall",armoredWall:"Armored Wall",sheetDoor:"Sheet Metal Door",sheetDouble:"Sheet Metal Double Door",garageDoor:"Garage Door",armoredDoor:"Armored Door",armoredDouble:"Armored Double Door",highWood:"High External Wood",highStone:"High External Stone",turret:"Auto Turret",sam:"SAM Site",tc:"Tool Cupboard (TC)",softWood:"Wood Wall (Soft Side)",softStone:"Stone Wall (Soft Side)",mini:"Minicopter",scrappy:"Scrap Heli",camper:"Camper Module" }
    },
    cs: { 
        tabCraft:"Výroba", tabRaid:"Raid", tabEco:"Eco / Special",
        selectItem:"Co chceš vyrábět?", enterSulfur:"Množství sulfuru", calculateBtn:"Spočítat", resetBtn:"Reset",
        youCanCraft:"Můžeš vyrobit:", sulfurManagement:"1. Manažment Sulfuru", otherMaterials:"2. Další suroviny",
        step1:"Vezmi", step2:"Udělej z něj", step3:"Nech si", step4:"Použij na",
        sulfurRaw:"Sulfuru", gp:"Gunpowder", explosives:"Explosives", inInventory:"v inventáři", leftover:"Zbytek", useForAmmo:"Přímo do nábojů",
        selectTarget:"Co chceš zničit?", selectEcoTarget:"Co chceš zničit? (Off-meta)", targetCountLabel:"Počet cílů",
        raidOptions:"Možnosti ničení", ecoOptions:"Možnosti ničení (Off-Meta)",
        method:"Zbraň", ecoMethod:"Nástroj / Zbraň", quantity:"Počet", ecoQuantity:"Počet", cost:"Cena", ecoCost:"Materiál",
        updateText: "Nová verze k dispozici!", updateBtnText: "Aktualizovat",
        errNoSulfur: "Nedostatek sulfuru!", errEnterValue: "Zadej platné množství!",
        items: { rocket:"Raketa",c4:"C4",hv:"HV Raketa",incen:"Zápalná Raketa",exp556:"Explozivní 5.56",satchel:"Satchel Charge",beancan:"Beancan",molotov:"Molotov",hatchet:"Sekera (Hatchet)",pickaxe:"Krumpáč (Pickaxe)",spear:"Dřevěný oštěp",sword:"Salvaged Sword",jackhammer:"Jackhammer",fireArrow:"Zápalný šíp",charcoal:"Uhlí",frags:"Fragmenty",fuel:"Palivo",pipe:"Trubka",tech:"Tech Trash",cloth:"Látka",wood:"Dřevo" },
        targets: { woodDoor:"Dřevěné Dveře",woodDouble:"Dřevěné Dvojité Dveře",woodWall:"Dřevěná stěna",stoneWall:"Kamenná stěna / Základy",metalWall:"Plechová stěna (Sheet)",armoredWall:"Pancéřová stěna (HQM)",sheetDoor:"Plechové dveře (Sheet)",sheetDouble:"Plechové Dvojité Dveře",garageDoor:"Garážová vrata (Garage)",armoredDoor:"Pancéřové dveře (Armored)",armoredDouble:"Pancéřové Dvojité Dveře",highWood:"Vysoká dřevěná zeď",highStone:"Vysoká kamenná zeď",turret:"Auto Turret",sam:"SAM Site",tc:"Tool Cupboard (TC)",softWood:"Dřevěná zeď (Měkká strana)",softStone:"Kamenná zeď (Měkká strana)",mini:"Minicopter",scrappy:"Scrap Heli",camper:"Camper Module" }
    },
    ru: { 
        tabCraft:"Крафт", tabRaid:"Рейд", tabEco:"Эко / Спец",
        selectItem:"Что крафтим?", enterSulfur:"Количество Серы", calculateBtn:"Рассчитать", resetBtn:"Сброс",
        youCanCraft:"Можно скрафтить:", sulfurManagement:"1. Управление серой", otherMaterials:"2. Требуемые ресурсы",
        step1:"Возьми", step2:"Скрафти", step3:"Оставь", step4:"Используй для",
        sulfurRaw:"Серы", gp:"Пороха", explosives:"Взрывчатки", inInventory:"в инвентаре", leftover:"Остаток", useForAmmo:"Прямо в патроны",
        selectTarget:"Что ломаем?", selectEcoTarget:"Спец. цели", targetCountLabel:"Количество целей",
        raidOptions:"Методы рейда", ecoOptions:"Эко Рейд",
        method:"Оружие", ecoMethod:"Инструмент", quantity:"Кол-во", ecoQuantity:"Кол-во", cost:"Стоимость", ecoCost:"Материалы",
        updateText: "Доступна новая версия!", updateBtnText: "Обновить",
        errNoSulfur: "Недостаточно серы!", errEnterValue: "Введите корректное значение!",
        items: { rocket:"Ракета",c4:"C4",hv:"HV Ракета",incen:"Зажиг. ракета",exp556:"Разрывные",satchel:"Сачель",beancan:"Бинкан",molotov:"Молотов",hatchet:"Топор",pickaxe:"Кирка",spear:"Копье",sword:"Меч",jackhammer:"Отбойник",fireArrow:"Огненная стрела",charcoal:"Уголь",frags:"Фрагменты",fuel:"Топлево",pipe:"Труба",tech:"Микросхемы",cloth:"Ткань",wood:"Дерево" },
        targets: { woodDoor:"Деревянная дверь",woodDouble:"Деревянная двойная",woodWall:"Деревянная стена",stoneWall:"Каменная стена",metalWall:"Металлическая стена",armoredWall:"МВК стена",sheetDoor:"Металлическая дверь",sheetDouble:"Металлическая двойная",garageDoor:"Гаражная дверь",armoredDoor:"МВК дверь",armoredDouble:"МВК двойная",highWood:"Высокая деревянная",highStone:"Высокая каменная",turret:"Турель",sam:"ПВО (SAM)",tc:"Шкаф (TC)",softWood:"Дерево (Soft Side)",softStone:"Камень (Soft Side)",mini:"Коптер",scrappy:"Корова",camper:"Кемпер" }
    },
    zh: { 
        tabCraft:"制作", tabRaid:"拆家", tabEco:"环保 / 特殊",
        selectItem:"你想制造什么？", enterSulfur:"硫磺总量", calculateBtn:"计算", resetBtn:"重置",
        youCanCraft:"你可以制造：", sulfurManagement:"1. 硫磺分配", otherMaterials:"2. 其他所需材料",
        step1:"取出", step2:"制作成", step3:"保留", step4:"用于制作",
        sulfurRaw:"硫磺", gp:"火药", explosives:"炸药", inInventory:"在背包中", leftover:"剩余", useForAmmo:"直接用于弹药",
        selectTarget:"目标建筑", selectEcoTarget:"特殊目标", targetCountLabel:"目标数量",
        raidOptions:"拆除方法", ecoOptions:"环保拆家",
        method:"武器", ecoMethod:"工具", quantity:"数量", ecoQuantity:"数量", cost:"成本", ecoCost:"材料",
        updateText: "发现新版本!", updateBtnText: "立即更新",
        errNoSulfur: "硫磺不足!", errEnterValue: "请输入有效数值!",
        items: { rocket:"火箭",c4:"C4",hv:"高速火箭",incen:"燃烧火箭",exp556:"爆炸弹药",satchel:"炸药包",beancan:"豆罐雷",molotov:"燃烧瓶",hatchet:"斧头",pickaxe:"稿子",spear:"木矛",sword:"大砍刀",jackhammer:"电钻",fireArrow:"火箭",charcoal:"木炭",frags:"金属碎片",fuel:"低级燃料",pipe:"金属管",tech:"科技零件",cloth:"布",wood:"木头" },
        targets: { woodDoor:"木门",woodDouble:"双扇木门",woodWall:"木墙",stoneWall:"石墙",metalWall:"铁墙",armoredWall:"合金墙",sheetDoor:"铁门",sheetDouble:"双扇铁门",garageDoor:"卷帘门",armoredDoor:"合金门",armoredDouble:"双扇合金门",highWood:"高外木墙",highStone:"高外石墙",turret:"自动炮塔",sam:"防空导弹",tc:"领地柜 (TC)",softWood:"木墙 (软面)",softStone:"石墙 (软面)",mini:"直升机",scrappy:"废料直升机",camper:"房车模块" }
    }
};

// --- DATA ---
const recipes = {
    rocket: { id: "rocket", wb: 3, scrap: 125, sulfurTotal: 1400, gpPerItem: 650, explosivesPerItem: 10, rawSulfurToKeep: 100, imgUrl: "https://rustlabs.com/img/items180/ammo.rocket.basic.png", other: [{id:"charcoal", amount:1950},{id:"frags", amount:100},{id:"fuel", amount:30},{id:"pipe", amount:2}] },
    c4: { id: "c4", wb: 3, scrap: 500, sulfurTotal: 2200, gpPerItem: 1000, explosivesPerItem: 20, rawSulfurToKeep: 200, imgUrl: "https://rustlabs.com/img/items180/explosive.timed.png", other: [{id:"charcoal", amount:3000},{id:"frags", amount:200},{id:"fuel", amount:60},{id:"tech", amount:2},{id:"cloth", amount:5}] },
    satchel: { id: "satchel", wb: 1, scrap: 125, sulfurTotal: 480, gpPerItem: 240, explosivesPerItem: 0, rawSulfurToKeep: 0, imgUrl: "https://rustlabs.com/img/items180/explosive.satchel.png", other: [{id:"charcoal", amount:720}, {id:"frags", amount:80}, {id:"cloth", amount:10}, {id:"rope", amount:1}] },
    exp556: { id: "exp556", wb: 3, scrap: 125, sulfurTotal: 25, gpPerItem: 10, explosivesPerItem: 0, rawSulfurToKeep: 5, imgUrl: "https://rustlabs.com/img/items180/ammo.rifle.explosive.png", other: [{id:"frags", amount:5}, {id:"charcoal", amount:30}] }, 
    hv: { id: "hv", wb: 2, scrap: 125, sulfurTotal: 200, gpPerItem: 100, explosivesPerItem: 0, rawSulfurToKeep: 0, imgUrl: "https://rustlabs.com/img/items180/ammo.rocket.hv.png", other: [{id:"charcoal", amount:300},{id:"pipe", amount:1}] },
    incen: { id: "incen", wb: 2, scrap: 125, sulfurTotal: 610, gpPerItem: 300, explosivesPerItem: 1, rawSulfurToKeep: 10, imgUrl: "https://rustlabs.com/img/items180/ammo.rocket.fire.png", other: [{id:"charcoal", amount:900}, {id:"fuel", amount:253}, {id:"frags", amount:10}, {id:"pipe", amount:2}] },
    beancan: { id: "beancan", wb: 1, scrap: 75, sulfurTotal: 120, gpPerItem: 60, explosivesPerItem: 0, rawSulfurToKeep: 0, imgUrl: "https://rustlabs.com/img/items180/grenade.beancan.png", other: [] },
    molotov: { id: "molotov", wb: 2, scrap: 75, sulfurTotal: 0, gpPerItem: 0, explosivesPerItem: 0, rawSulfurToKeep: 0, imgUrl: "https://rustlabs.com/img/items180/grenade.molotov.png", other: [{id:"cloth", amount:10},{id:"fuel", amount:50}] },
    hatchet: { id: "hatchet", sulfurTotal: 0, imgUrl: "https://rustlabs.com/img/items180/hatchet.png", other: [{id:"wood", amount:100}, {id:"frags", amount:75}] },
    pickaxe: { id: "pickaxe", sulfurTotal: 0, imgUrl: "https://rustlabs.com/img/items180/pickaxe.png", other: [{id:"wood", amount:100}, {id:"frags", amount:125}] },
    spear: { id: "spear", sulfurTotal: 0, imgUrl: "https://rustlabs.com/img/items180/spear.wooden.png", other: [{id:"wood", amount:300}] },
    sword: { id: "sword", sulfurTotal: 0, imgUrl: "https://rustlabs.com/img/items180/salvaged.sword.png", other: [{id:"frags", amount:15}, {id:"blade", amount:1}] },
    jackhammer: { id: "jackhammer", sulfurTotal: 0, imgUrl: "https://rustlabs.com/img/items180/jackhammer.png", other: [] },
    fireArrow: { id: "fireArrow", sulfurTotal: 0, imgUrl: "https://rustlabs.com/img/items180/arrow.fire.png", other: [{id:"cloth", amount:2}, {id:"fuel", amount:2}] } 
};

const raidTargets = {
    woodDoor: { hp: 200, imgUrl: "https://rustlabs.com/img/items180/door.hinged.wood.png", methods: { satchel: 2, molotov: 2, exp556: 19, beancan: 6, c4: 1 } },
    woodDouble: { hp: 200, imgUrl: "https://rustlabs.com/img/items180/door.double.hinged.wood.png", methods: { satchel: 2, molotov: 2, exp556: 19, beancan: 6, c4: 1 } },
    woodWall: { hp: 250, imgUrl: "https://rustlabs.com/img/items180/wood.png", methods: { rocket: 2, molotov: 4, satchel: 3, exp556: 49, c4: 1 } },
    stoneWall: { hp: 500, imgUrl: "https://rustlabs.com/img/items180/stones.png", methods: { rocket: 4, satchel: 10, exp556: 185, c4: 2 } },
    metalWall: { hp: 1000, imgUrl: "https://rustlabs.com/img/items180/metal.fragments.png", methods: { rocket: 8, satchel: 23, exp556: 400, c4: 4 } },
    armoredWall: { hp: 2000, imgUrl: "https://rustlabs.com/img/items180/metal.refined.png", methods: { rocket: 15, satchel: 46, exp556: 799, c4: 8 } },
    sheetDoor: { hp: 250, imgUrl: "https://rustlabs.com/img/items180/door.hinged.metal.png", methods: { rocket: 1, satchel: 4, exp556: 63, c4: 1 } },
    sheetDouble: { hp: 250, imgUrl: "https://rustlabs.com/img/items180/door.double.hinged.metal.png", methods: { rocket: 1, satchel: 4, exp556: 63, c4: 1 } },
    garageDoor: { hp: 600, imgUrl: "https://rustlabs.com/img/items180/wall.frame.garagedoor.png", methods: { rocket: 3, satchel: 9, exp556: 150, c4: 2 } },
    armoredDoor: { hp: 1000, imgUrl: "https://rustlabs.com/img/items180/door.hinged.toptier.png", methods: { rocket: 5, satchel: 15, exp556: 250, c4: 3 } },
    armoredDouble: { hp: 1000, imgUrl: "https://rustlabs.com/img/items180/door.double.hinged.toptier.png", methods: { rocket: 5, satchel: 15, exp556: 250, c4: 3 } },
    highWood: { hp: 500, imgUrl: "https://rustlabs.com/img/items180/wall.external.high.png", methods: { rocket: 3, molotov: 4, satchel: 6, exp556: 98, c4: 2 } },
    highStone: { hp: 500, imgUrl: "https://rustlabs.com/img/items180/wall.external.high.stone.png", methods: { rocket: 4, satchel: 10, exp556: 185, c4: 2 } },
    turret: { hp: 1000, imgUrl: "https://rustlabs.com/img/items180/autoturret.png", methods: { hv: 3, satchel: 2, exp556: 102, rocket: 1 } },
    sam: { hp: 1000, imgUrl: "https://rustlabs.com/img/items180/samsite.png", methods: { hv: 3, satchel: 2, exp556: 102, rocket: 1 } }
};

const ecoTargets = {
    tc: { imgUrl: "https://rustlabs.com/img/items180/cupboard.tool.png", methods: { hatchet: 5, satchel: 2, exp556: 100, fireArrow: 40 } },
    softWood: { imgUrl: "https://rustlabs.com/img/items180/wood.png", methods: { spear: 24, sword: 6, hatchet: 4 } },
    softStone: { imgUrl: "https://rustlabs.com/img/items180/stones.png", methods: { pickaxe: 7, jackhammer: 2, spear: 236 } },
    mini: { imgUrl: "https://rustlabs.com/img/items180/minicopter.png", methods: { hv: 2, exp556: 121, fireArrow: 65, rocket: 1 } },
    scrappy: { imgUrl: "https://wiki.rustclash.com/img/screenshots/scrap-heli.png", methods: { hv: 3, rocket: 2, exp556: 200 } },
    camper: { imgUrl: "https://wiki.rustclash.com/img/items180/vehicle.2mod.camper.png", methods: { rocket: 2, satchel: 10, c4: 1 } }
};

// --- LOGIC ---
let currentLang = "en";

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('rust_lang', lang);
    document.querySelectorAll('.flag-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');
    updateUI();
    if(document.getElementById('view-craft').classList.contains('active')) calculateCraft();
    if(document.getElementById('view-raid').classList.contains('active')) calculateRaid();
    if(document.getElementById('view-eco').classList.contains('active')) calculateEco();
}

function showAlert(messageKey) {
    const t = translations[currentLang];
    const modal = document.getElementById('customModal');
    const msg = document.getElementById('modalMessage');
    msg.innerText = t[messageKey] || messageKey;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('customModal').style.display = 'none';
}

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('t_tab' + (tab.charAt(0).toUpperCase() + tab.slice(1))).classList.add('active');
    document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + tab).classList.add('active');
}

function updateUI() {
    const t = translations[currentLang];
    document.getElementById('t_tabCraft').innerText = t.tabCraft;
    document.getElementById('t_tabRaid').innerText = t.tabRaid;
    document.getElementById('t_tabEco').innerText = t.tabEco;
    document.getElementById('t_selectItem').innerText = t.selectItem;
    document.getElementById('t_enterSulfur').innerText = t.enterSulfur;
    document.getElementById('t_calculateBtn').innerText = t.calculateBtn;
    document.getElementById('t_resetBtn').innerText = t.resetBtn;
    document.getElementById('t_youCanCraft').innerText = t.youCanCraft;
    document.getElementById('t_sulfurManagement').innerText = t.sulfurManagement;
    document.getElementById('t_otherMaterials').innerText = t.otherMaterials;
    document.getElementById('t_step1').innerText = t.step1;
    document.getElementById('t_step2').innerText = t.step2;
    document.getElementById('t_step3').innerText = t.step3;
    document.getElementById('t_sulfurRaw').innerText = t.sulfurRaw;
    document.getElementById('t_sulfurRaw2').innerText = t.sulfurRaw;
    document.getElementById('t_gp').innerText = t.gp;
    document.getElementById('t_inInventory').innerText = t.inInventory;
    document.getElementById('t_selectTarget').innerText = t.selectTarget;
    document.getElementById('t_targetCountLabel').innerText = t.targetCountLabel;
    document.getElementById('t_raidOptions').innerText = t.raidOptions;
    document.getElementById('t_method').innerText = t.method;
    document.getElementById('t_quantity').innerText = t.quantity;
    document.getElementById('t_cost').innerText = t.cost;
    document.getElementById('t_selectEcoTarget').innerText = t.selectEcoTarget;
    document.getElementById('t_ecoOptions').innerText = t.ecoOptions;
    document.getElementById('t_ecoMethod').innerText = t.ecoMethod;
    document.getElementById('t_ecoQuantity').innerText = t.ecoQuantity;
    document.getElementById('t_ecoCost').innerText = t.ecoCost;
    
    // Update labels in the hidden Update Notification toast
    document.getElementById('t_updateText').innerText = t.updateText;
    document.getElementById('updateBtn').innerText = t.updateBtnText;

    populateSelects(t);
}

function populateSelects(t) {
    const craftSel = document.getElementById('itemType');
    const craftVal = craftSel.value;
    craftSel.innerHTML = "";
    for (const [key, value] of Object.entries(recipes)) {
        if(value.sulfurTotal > 0) { 
            const opt = document.createElement('option');
            opt.value = key;
            opt.innerText = t.items[value.id] || value.id;
            craftSel.appendChild(opt);
        }
    }
    if (craftVal && recipes[craftVal] && recipes[craftVal].sulfurTotal > 0) craftSel.value = craftVal;
    updateTechInfo();

    const raidSel = document.getElementById('targetType');
    const raidVal = raidSel.value;
    raidSel.innerHTML = "";
    for (const [key, value] of Object.entries(raidTargets)) {
        const opt = document.createElement('option');
        opt.value = key;
        opt.innerText = t.targets[key] || key;
        raidSel.appendChild(opt);
    }
    if (raidVal && raidTargets[raidVal]) raidSel.value = raidVal;

    const ecoSel = document.getElementById('ecoTargetType');
    const ecoVal = ecoSel.value;
    ecoSel.innerHTML = "";
    for (const [key, value] of Object.entries(ecoTargets)) {
        const opt = document.createElement('option');
        opt.value = key;
        opt.innerText = t.targets[key] || key;
        ecoSel.appendChild(opt);
    }
    if (ecoVal && ecoTargets[ecoVal]) ecoSel.value = ecoVal;
}

function updateTechInfo() {
    const type = document.getElementById('itemType').value;
    const recipe = recipes[type];
    const container = document.getElementById('techInfoDisplay');
    if(!recipe || !recipe.wb) { container.innerHTML = ''; return; }
    container.innerHTML = `<span class="badge badge-wb${recipe.wb}">Level ${recipe.wb} WB</span><span class="badge badge-scrap">${recipe.scrap} Scrap</span>`;
}

function onCraftItemChange() {
    updateTechInfo();
    const sulfurVal = document.getElementById('sulfur').value;
    if(sulfurVal && sulfurVal > 0) { calculateCraft(); }
}

function resetCraft() {
    document.getElementById('sulfur').value = "";
    document.getElementById('craftResult').style.display = 'none';
}

function calculateCraft() {
    const sulfurInput = parseInt(document.getElementById('sulfur').value);
    const type = document.getElementById('itemType').value;
    const recipe = recipes[type];
    const t = translations[currentLang];
    
    if (isNaN(sulfurInput) || sulfurInput <= 0) {
        if (document.activeElement.id === 'sulfur' || document.getElementById('craftResult').style.display === 'block') {
             showAlert('errEnterValue');
        }
        return;
    }

    const maxItems = Math.floor(sulfurInput / recipe.sulfurTotal);
    if (maxItems === 0) { showAlert('errNoSulfur'); return; }
    
    const totalGP = maxItems * recipe.gpPerItem;
    const sulfurForGP = totalGP * 2;
    const totalExp = maxItems * recipe.explosivesPerItem;
    const sulfurReserved = maxItems * recipe.rawSulfurToKeep;
    
    document.getElementById('resultImage').src = recipe.imgUrl;
    let countText = maxItems + " x " + (t.items[recipe.id] || recipe.id);
    if(recipe.id === 'exp556') countText += ` (${maxItems * 2} bullets)`; 
    
    document.getElementById('finalCount').innerText = countText;
    const leftover = sulfurInput - (maxItems * recipe.sulfurTotal);
    document.getElementById('itemNameDisplay').innerText = `(${t.leftover}: ${leftover})`;
    
    document.getElementById('sulfurToGP').innerText = sulfurForGP.toLocaleString();
    document.getElementById('gpCount').innerText = totalGP.toLocaleString();
    
    const expBox = document.getElementById('expInstructionBox');
    if (recipe.rawSulfurToKeep > 0) {
        expBox.style.display = 'block';
        document.getElementById('sulfurToKeep').innerText = sulfurReserved.toLocaleString();
        document.getElementById('t_step4').innerText = recipe.explosivesPerItem > 0 ? t.step4 : t.useForAmmo;
        document.getElementById('expCount').innerText = recipe.explosivesPerItem > 0 ? totalExp.toLocaleString() : "";
        document.getElementById('expLabel').innerText = recipe.explosivesPerItem > 0 ? " " + t.explosives : "";
    } else { expBox.style.display = 'none'; }
    
    const listEl = document.getElementById('materialsList');
    listEl.innerHTML = "";
    if(recipe.other) {
        recipe.other.forEach(mat => {
            const totalNeeded = mat.amount * maxItems;
            const li = document.createElement('li');
            li.innerHTML = `<span>${t.items[mat.id] || mat.id}</span> <span class="val">${totalNeeded.toLocaleString()}</span>`;
            listEl.appendChild(li);
        });
    }
    document.getElementById('craftResult').style.display = 'block';
}

function calculateRaid() {
    const targetKey = document.getElementById('targetType').value;
    const count = Math.max(1, parseInt(document.getElementById('targetCount').value) || 1);
    const target = raidTargets[targetKey];
    const t = translations[currentLang];
    const imgEl = document.getElementById('raidTargetImage');
    if(target.imgUrl) { imgEl.src = target.imgUrl; imgEl.style.display = 'block'; } else { imgEl.style.display = 'none'; }
    const tbody = document.getElementById('raidTableBody');
    tbody.innerHTML = "";
    let methods = [];
    for (const [weaponKey, amountPerOne] of Object.entries(target.methods)) {
        const recipe = recipes[weaponKey];
        if (!recipe) continue;
        const totalAmount = amountPerOne * count;
        const totalSulfur = totalAmount * recipe.sulfurTotal;
        methods.push({ key: weaponKey, name: t.items[weaponKey] || weaponKey, amount: totalAmount, cost: totalSulfur, img: recipe.imgUrl });
    }
    methods.sort((a, b) => {
         if (a.cost === 0 && b.cost > 0) return -1;
         if (a.cost > 0 && b.cost === 0) return 1;
         return a.cost - b.cost;
    });
    methods.forEach(m => {
        const tr = document.createElement('tr');
        let costDisplay;
        if (m.cost === 0 && recipes[m.key].other) {
            let mats = [];
            recipes[m.key].other.forEach(mat => { mats.push(`${(mat.amount * m.amount).toLocaleString()} ${t.items[mat.id] || mat.id}`); });
            costDisplay = `<span class="resource-cost">${mats.join(', ')}</span>`;
        } else { costDisplay = `<span class="sulfur-cost">${m.cost.toLocaleString()} Sulfur</span>`; }
        tr.innerHTML = `<td><div class="raid-method-flex"><img src="${m.img}" class="raid-method-icon"><span>${m.name}</span></div></td><td class="item-count">${m.amount}</td><td>${costDisplay}</td>`;
        tbody.appendChild(tr);
    });
}

function calculateEco() {
    const targetKey = document.getElementById('ecoTargetType').value;
    const target = ecoTargets[targetKey];
    const t = translations[currentLang];
    const imgEl = document.getElementById('ecoTargetImage');
    if(target.imgUrl) { imgEl.src = target.imgUrl; imgEl.style.display = 'block'; } else { imgEl.style.display = 'none'; }
    const tbody = document.getElementById('ecoTableBody');
    tbody.innerHTML = "";
    let methods = [];
    for (const [weaponKey, amount] of Object.entries(target.methods)) {
        const recipe = recipes[weaponKey];
        if (!recipe) continue;
        methods.push({ key: weaponKey, name: t.items[weaponKey] || weaponKey, amount: amount, sulfurCost: amount * recipe.sulfurTotal, isTool: recipe.sulfurTotal === 0, img: recipe.imgUrl });
    }
    methods.sort((a, b) => {
        if (a.sulfurCost === 0 && b.sulfurCost > 0) return -1;
        if (a.sulfurCost > 0 && b.sulfurCost === 0) return 1;
        return a.sulfurCost - b.sulfurCost;
    });
    methods.forEach(m => {
        const tr = document.createElement('tr');
        let costDisplay = "";
        if (m.isTool) {
            let mats = [];
            recipes[m.key].other.forEach(mat => {
                let totalMat = mat.amount * m.amount;
                mats.push(`<span class="resource-highlight">${totalMat.toLocaleString()}</span> ${t.items[mat.id] || mat.id}`);
            });
            costDisplay = `<span class="resource-cost">${mats.join(', ')}</span>`;
        } else { costDisplay = `<span class="sulfur-cost">${m.sulfurCost.toLocaleString()} Sulfur</span>`; }
        tr.innerHTML = `<td><div class="raid-method-flex"><img src="${m.img}" class="raid-method-icon"><span>${m.name}</span></div></td><td class="item-count">${m.amount}</td><td>${costDisplay}</td>`;
        tbody.appendChild(tr);
    });
}

// --- SW UPDATE LOGIC ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(reg => {
            if (reg.waiting) { showUpdateNotification(reg.waiting); return; }
            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        showUpdateNotification(newWorker);
                    }
                });
            });
        });
        let refreshing;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            window.location.reload();
            refreshing = true;
        });
    });
}

function showUpdateNotification(worker) {
    const notification = document.getElementById('updateNotification');
    const btn = document.getElementById('updateBtn');
    notification.style.display = 'block';
    btn.addEventListener('click', () => {
        worker.postMessage({ type: 'SKIP_WAITING' });
        btn.disabled = true;
        btn.innerText = "Updating...";
    });
}

// --- INIT ---
const savedLang = localStorage.getItem('rust_lang');
setLang(savedLang || 'en');

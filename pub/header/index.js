function redirect(url){
    location.replace(url)
}
/*
    IMAGE URLS
*/
let images = ['../images/img2.jpg', '../images/img3.jpg', '../images/img1.jpg'];
/*
    OBJECT FOR HEADER
*/
let header = {
    img : images[Math.floor(Math.random() * images.length)],
    label : 'oform.js',
    text : 'From js Object to ready-made Forms',
    menu : [
        {
            label : 'Overview',
            text : 'Short information about framework',
            id : '../index.html'
        },
        {
            label : 'Tables Intro',
            text : 'First look at table generator',
            id : '../table_intro/index.html'
        },
        {
            label : 'Tables Function',
            text : 'Sort Search Average Total',
            id : '../table_functions/index.html'
        },
        {
            label : 'Tables Themes',
            text : 'Color setters',
            id : '../table_themes/index.html'
        },
        {
            label : 'Header Examples',
            text : 'Examples for header generator',
            id : 'index.html'
        },
        {
            label : 'Header Menu',
            text : 'Menu events',
            id : '../header_menu/index.html'
        }
        
    ]
};

/*
    HEADER CREATION
*/
oform.append('header').header(header).left();
            
/*
    HEADER MENU SWITCH
*/
function menuSwitchEvents(id, data){
    document.getElementById(id).addEventListener("click", ()=>{
        for (let obj of data){
            if (oform.selected().id.localeCompare(obj.id) === 0){
                redirect( obj.id );
            }
        }
    });
}

menuSwitchEvents('header', header.menu);
/*
    EXAMPLE DATA SETS FOR TABLE
*/
let tableSwitch = [
    {
        id : 111,
        'function' : '.left()',
    },
    {
        id : 112,
        'function' : '.right()',
    }
];
let tableSwitch2 = [
    {
        id : 211,
        'function' : 'color without setter',
    },
    {
        id : 212,
        'function' : '.black()',
    }
];
let headerTest = {
    img : 'test.jpg',
    label : 'Label',
    text : 'under label',
    menu : [
        {
            label : 'item',
            text : 'description',
            id : ''
        },
        {
            label : 'item',
            text : 'description',
            id : ''
        }
    ]
};
oform.append('header1').header(headerTest).left();
oform.append('header2').header(headerTest).left();


oform.append("table_switch").table(tableSwitch).black();
oform.append("table_switch2").table(tableSwitch2).black();

document.getElementById('table_switch').addEventListener("click", ()=>{
    console.log(oform.selected());
    if (typeof(oform.selected()) !== 'undefined' || oform.selected() !== null){
        console.log(oform.selected());
        if (oform.selected().id === 111){
            oform.append('header1').header(headerTest).left();
        }
        if (oform.selected().id === 112){
            oform.append('header1').header(headerTest).right();
        }
    }
});
document.getElementById('table_switch2').addEventListener("click", ()=>{
    console.log(oform.selected());
    if (typeof(oform.selected()) !== 'undefined' || oform.selected() !== null){
        console.log(oform.selected());
        if (oform.selected().id === 211){
            oform.append('header2').header(headerTest);
        }
        if (oform.selected().id === 212){
            oform.append('header2').header(headerTest).black();
        }
    }
});

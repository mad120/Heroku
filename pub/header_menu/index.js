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
            id : '../header/index.html'
        },
        {
            label : 'Header Menu',
            text : 'Menu events',
            id : 'index.html'
        }
        
    ]
};

/*
    HEADER CREATION
*/
oform.append('header').header(header).left().black();
            
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

let headerTest = {
    img : 'test.jpg',
    label : 'Label',
    text : 'under label',
    menu : [
        {
            label : 'make alert',
            text : 'create alert on click',
            id : 12412312
        },
        {
            label : 'add item',
            text : 'add new item to this menu',
            id : 111111
        }
    ]
};
oform.append('header1').header(headerTest).right().black();


document.getElementById('header1').addEventListener("click", ()=>{
    if (typeof(oform.selected()) !== 'undefined' || oform.selected() !== null){
        console.log(oform.selected());
        if (oform.selected().id === 12412312){
            window.alert("label : " + oform.selected().label + "   text : " + oform.selected().text);
        }
        if (oform.selected().id === 111111){
            headerTest.menu.push(
                {
                    label : 'new item',
                    text : 'this item was generated',
                    id : 0
                });
            oform.append('header1').header(headerTest).right().black();
        }
    }
});


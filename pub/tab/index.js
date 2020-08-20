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
            text : 'Short information about library',
            id : '../index.html'
        },
        {
            label : 'API',
            text : 'docs',
            id : '../api/API.html'
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
            id : '../header_menu/index.html'
        },
        {
            label : 'Tabs',
            text : 'Tab generator',
            id : 'index.html'
        }
    ]
};

/*
    HEADER CREATION
*/
oform.append('header').header(header).right().black();
            
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
let hugeLine = ' text';
for(let i = 0; i < 10; i++){
    hugeLine += hugeLine;
}
let data = [
                {
                    label : 'tab with some text',
                    content : hugeLine,
                    id : 1111
                },
                {
                    label : 'change color',
                    content : ' <h3>To use color theme on current tab click on desired setter</h3>\
                                <p id="black_t" style="cursor:pointer">set black color theme <b class="code-y">oform.append(id).tab(data).black()</b><p>\
                                 <p id="red_t" style="cursor:pointer">set red color theme <b class="code-y">oform.append(id).tab(data).red()</b><p>\
                                 <p id="blue_t" style="cursor:pointer">set blue color theme <b class="code-y">oform.append(id).tab(data).blue()</b><p>\
                                 <p id="green_t" style="cursor:pointer">set green color theme <b class="code-y">oform.append(id).tab(data).green()</b><p>\
                                 <p id="gray_t" style="cursor:pointer">set gray color theme <b class="code-y">oform.append(id).tab(data).gray()</b><p>',
                    id : 2222
                },
                {
                    label : '<b style="color:red">position</b>',
                    content : '<h3>Change tab position</h3>\
                                <p id="hor" style="cursor:pointer">horizontal <b class="code-y">oform.append(id).tab(data).horizontal().green()</b><p>\
                                <p id="vert" style="cursor:pointer">vertical <b class="code-y">oform.append(id).tab(data)</b><p>',
                    id : 3333
                }
];

let data2 = new Array();
for(let i = 0; i < 20; i++){
    data2.push({
                    label : 'Tab ' + i,
                    content : 'Content of tab ' + i,
                    id : i
                });
}

oform.append('tab').tab(data).red();
 
document.getElementById('tab').addEventListener("click", ()=>{
    if (typeof(oform.selected()) !== 'undefined' || oform.selected() !== null){
        if (oform.selected().id === 3333){
           let el = document.getElementById('hor');
            if (el){
                el.addEventListener("click", ()=>{
                    oform.append('tab').tab(data).horizontal().green();
                });
            }
            el = document.getElementById('vert');
            if (el){
                el.addEventListener("click", ()=>{
                    oform.append('tab').tab(data);
                });
            }
        }
        if (oform.selected().id === 2222){
            let el = document.getElementById('black_t');
            if (el){
                el.addEventListener("click", ()=>{
                    oform.append('tab').tab(data).black();
                });
            }
            el = document.getElementById('red_t');
            if (el){
                el.addEventListener("click", ()=>{
                    oform.append('tab').tab(data).red();
                });
            }
            el = document.getElementById('blue_t');
            if (el){
                el.addEventListener("click", ()=>{
                    oform.append('tab').tab(data).blue();
                });
            }
            el = document.getElementById('green_t');
            if (el){
                el.addEventListener("click", ()=>{
                    oform.append('tab').tab(data).green();
                });
            }
            el = document.getElementById('gray_t');
            if (el){
                el.addEventListener("click", ()=>{
                    oform.append('tab').tab(data);
                });
            }
        }
    }
});


oform.append('tabv').tab(data2).blue();
oform.append('tabh').tab(data2).horizontal().black();

 
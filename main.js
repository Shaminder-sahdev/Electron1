const{app, BrowserWindow}=require('electron')
const path=require('path')
const url=require('url')

let win;


function createwindow(){
win=new BrowserWindow({width:800,height:800})


}
win.loadurl(url.format({
pathname:path.join(__dirname, 'main.html'),
protocol:'file:',
Slashes: true

}))
win.on('closed',()=> {
    win = null
})

}
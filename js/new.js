const app = new PIXI.Application(1500,700);
/*
 *容器对象，可存放显示对象，其实app.stage本身就是一个container。
 *使用container存放各自界面的显示元素，即一个container一个界面。
 *主要使用 Container.addChild 和 Container.removeChild 方法控制界面上显示对象的展示。
 */
const containerMenu = new PIXI.Container();
const containerMain = new PIXI.Container();
const style = {
  fontFamily: 'Arial',
  fontSize: 40,
  fontWeight: 'bold',
  fill:'#ffffff',
  // 描边
  stroke: '#4a1850',
  // 描边宽度
  strokeThickness: 4,
  // 字体阴影
  dropShadow: true,
  // 阴影颜色
  dropShadowColor: '#0000ee',
  dropShadowBlur: 4,
  // 阴影倾斜
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
};  //文本字体样式
const menuItem0 = new PIXI.Text('宋韵文化',style);
const menuItem1 = new PIXI.Text('历史痕迹',style);
const menuItem2 = new PIXI.Text('文化遗产',style);
const bg = new PIXI.Sprite.fromImage('res/bg.jpg');



menuItem0.x = 700;
menuItem0.y = 400;

menuItem1.x = 700;
menuItem1.y = 500;

menuItem2.x = 700;
menuItem2.y = 600;
const  jianzhu= new PIXI.Sprite.fromImage('res/jianzhu.jpg');
const lishi = new PIXI.Sprite.fromImage('res/lishi.jpg');
const  yichan= new PIXI.Sprite.fromImage('res/yichan.jpg');
const close = new PIXI.Sprite.fromImage('res/close.png');
const closebtn = new PIXI.Sprite.fromImage('res/closebtn.png');
const gucheng = new PIXI.Sprite.fromImage('res/gucheng.jpg');
const next = new PIXI.Sprite.fromImage('res/next.png');
const nansong = new PIXI.Sprite.fromImage('res/nansong.jpg');
const gucheng2 = new PIXI.Sprite.fromImage('res/gucheng2.jpg');
const togc2 = new PIXI.Sprite.fromImage('res/next2.png');
const togs2 = new PIXI.Sprite.fromImage('res/next2.png');
const gushi = new PIXI.Sprite.fromImage('res/gushi.jpg');
const gushi2 = new PIXI.Sprite.fromImage('res/gushi2.jpg');


jianzhu.width = 1500;
jianzhu.height = 700;

bg.width = 1500;
bg.height = 700;

yichan.width =1500;
yichan.height = 700;

gucheng.width = 1500;
gucheng.height = 700;

gushi.width = 1500;
gushi.height = 700;

gushi2.width = 1500;
gushi2.height = 700;

lishi.width = 1500;
lishi.height = 700;

nansong.width = 1500;
nansong.height = 700;

gucheng2.width = 1500;
gucheng2.height = 700;

close.width = 40;
close.height = 40;
close.buttonMode = true;
close.interactive = true;

closebtn.width = 40;
closebtn.height = 40;
//closebtn.x=15;
//closebtn.y=15;
closebtn.buttonMode = true;
closebtn.interactive = true;

next.width = 60;
next.height = 60;
next.x = 450;
next.y = 470;
next.buttonMode = true;
next.interactive = true;
next.on('click', tonansong);

togc2.width = 60;
togc2.height = 60;
togc2.x = 1250;
togc2.y = 600;
togc2.buttonMode = true;
togc2.interactive = true;
togc2.on('click', togucheng2);

togs2.width = 60;
togs2.height = 60;
togs2.x = 1250;
togs2.y = 600;
togs2.buttonMode = true;
togs2.interactive = true;
togs2.on('click', togucheng2);

menuItem0.buttonMode = true;
menuItem0.interactive = true;
menuItem0.on('click',tojianzhu);
menuItem0.on('touchstart',tojianzhu);

menuItem1.buttonMode = true;
menuItem1.interactive = true;
menuItem1.on('click',tolishi);
//menuItem1.on('click',say);

menuItem2.buttonMode = true;
menuItem2.interactive = true;
menuItem2.on('click',toyichan);

containerMenu.addChild(menuItem0);
containerMenu.addChild(menuItem1);
containerMenu.addChild(menuItem2);

const mainItem0 = new PIXI.Text('古城建筑',style);
const mainItem1 = new PIXI.Text('历史典故',style);


mainItem0.x=700;
mainItem0.y=400;
mainItem0.buttonMode = true;
mainItem0.interactive = true;

mainItem1.x=700;
mainItem1.y=500;
mainItem1.buttonMode = true;
mainItem1.interactive = true;

document.body.appendChild(app.view);
app.stage.addChild(bg);
app.stage.addChild(containerMenu);

function tojianzhu(){
  containerMenu.addChild(jianzhu);
  containerMenu.addChild(mainItem0);
  containerMenu.addChild(mainItem1);
  jianzhu.addChild(close);
  close.on('click',closejianzhu);
  mainItem0.on("click",togucheng);
  mainItem1.on("click",togushi);
  
  
}
function tolishi(){
  containerMenu.addChild(lishi);
  lishi.addChild(close);
  close.on('click',closelishi);
  containerMenu.addChild(next);
  next.on("click",tonansong);
}
function toyichan(){
  containerMenu.addChild(yichan);
  yichan.addChild(close);
  close.on('click',closeyichan);
}

function closejianzhu(){
  containerMenu.removeChild(jianzhu);
  console.log("closejianzhu");
  containerMenu.removeChild(mainItem0);
  containerMenu.removeChild(mainItem1);
}
function closelishi(){
  containerMenu.removeChild(next);
  containerMenu.removeChild(lishi);
}
function closeyichan(){
  containerMenu.removeChild(yichan);
}

function togucheng(){
	console.log("test");
	containerMenu.addChild(gucheng);
    gucheng.addChild(closebtn);
    closebtn.on('click',closegucheng);
    containerMenu.addChild(togc2);
    togc2.on("click",togucheng2);
}
function togushi(){
	console.log("test");
	containerMenu.addChild(gushi);
    gushi.addChild(closebtn);
    closebtn.on('click',closegushi);
    containerMenu.addChild(togs2);
    togs2.on("click",togushi2);
}
function tonansong(){
  containerMenu.addChild(nansong);
  nansong.addChild(closebtn);
//close.on('click',tolishi);
  closebtn.on('click',closenansong);
}
function togucheng2(){
  containerMenu.addChild(gucheng2);
  gucheng2.addChild(closebtn);
//close.on('click',tolishi);
  closebtn.on('click',closegucheng2);
}
function togushi2(){
  containerMenu.addChild(gushi2);
  gushi2.addChild(closebtn);
//close.on('click',tolishi);
  closebtn.on('click',closegushi2);
}
function closegucheng(){
  containerMenu.removeChild(togc2);
  containerMenu.removeChild(gucheng);
}
function closegushi(){
  containerMenu.removeChild(togs2);
  containerMenu.removeChild(gushi);
}
function closegucheng2(){
  containerMenu.removeChild(gucheng2);
}
function closegushi2(){
  containerMenu.removeChild(gushi2);
}
function closenansong(){
  containerMenu.removeChild(nansong);
}
//function say(){

//alert("hello");


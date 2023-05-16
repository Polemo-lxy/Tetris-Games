var frame;

// 游戏初始化
function initGame()
{
  frame = new GameFrame(16,20,38);
  frame.init();
  document.body.addEventListener("keydown",MoveOrChange)
}

// 速度的改变
function changespeed(){
  frame.changespeed();
}
// 重新开始游戏
function regame(){
  location.reload();
}

// 不同按钮事件
function MoveOrChange(){
  console.log('event',event);
  switch(event.keyCode)
  {
    case 38: //变形（上方向键）
      frame.Change();
      break;
    case 37: //左移动
      frame.MoveLeft();
      break;
    case 39://右移动
      frame.MoveRight();
      break;
    case 40: //向下
      frame.MoveDown();
      break;
  }
}
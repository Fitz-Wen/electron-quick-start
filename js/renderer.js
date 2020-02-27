// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const BrowerWindow = require('electron').remote.BrowserWindow;

document.getElementById('js-capture').addEventListener('click', () => {
  alert('hello world')
  console.log('hello world')
})

const btn = document.querySelector('#btn');

btn.onclick = () => {
  win = new BrowerWindow({
    width: 300,
    height: 200,
    frame: true, // false隐藏关闭按钮、菜单选项 true显示
    fullscreen: false, // 全屏展示
    transparent: true
  })
  win.loadURL(`file://${__dirname}/news.html`);

  win.on('close', () => { win = null });
}
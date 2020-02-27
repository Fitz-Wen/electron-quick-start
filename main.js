const {app, BrowserWindow} = require('electron') // electron 对象的引用
const path = require('path')

// 创建windows环境
function createWindow () {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 手动修改允许使用node.js的方法
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加载初始页面
  mainWindow.loadFile('index.html')

  // 打开调试工具
  mainWindow.webContents.openDevTools()
  // 引入菜单文件
  require('./js/menu.js');
}

//监听应用准备完成的事件
app.on('ready', createWindow)

//　监听所有窗口关闭事件
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

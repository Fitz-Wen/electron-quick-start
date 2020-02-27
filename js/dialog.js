let showMsg = document.querySelector('#showMsg');

const { remote } = require('electron')
showMsg.onclick = function () {
  remote.dialog.showMessageBox({
    type: 'info',
    title: '提示信息',
    message: '内容',
    buttons: ['确定', '取消']
  }, function (index) {
    console.log(index)
  })
}
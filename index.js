const ipc = require('electron').ipcRenderer
const selectDirBtn = document.getElementById('select-directory')

let myNotification = new Notification('Hello!', {
  body: 'I am a native notification'
});

selectDirBtn.addEventListener('click', function (event) {
  ipc.send('open-file-dialog')
})

ipc.on('selected-directory', function (event, path) {
  document.getElementById('selected-file').innerHTML = `You selected: ${path}`
})

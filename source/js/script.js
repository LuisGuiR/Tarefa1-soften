let dialog = document.getElementById('dialog')
let mask = document.getElementById('mask')

function closeDialog(){
    dialog.style.display = 'none'
    mask.style.display = 'none'
}

function openDialog(){
    dialog.style.display = 'block'
    mask.style.display = 'block'
}
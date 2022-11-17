function open_qs() {
     document.getElementById('qs').classList.remove('hideqs');
     document.getElementById('qs').classList.add('showqs');
     document.getElementById('hide_qs_button').classList.remove('hide');
     document.getElementById('start-menu').classList.add('smhide');
     document.getElementById('start-menu').classList.remove('smshow');
}

function hide_qs() {
     document.getElementById('qs').classList.remove('showqs');
     document.getElementById('qs').classList.add('hideqs');
     document.getElementById('hide_qs_button').classList.add('hide');
     document.getElementById('start-menu').classList.add('smhide');
     document.getElementById('start-menu').classList.remove('smshow');
}

function show_sm() {
     document.getElementById('start-menu').classList.remove('smhide');
     document.getElementById('start-menu').classList.add('smshow');
}
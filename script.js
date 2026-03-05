

const openBtn =document.getElementById('openModel');
const model =document.getElementById('loginModel');
const closeBtn =document.getElementById('closeModel');

if (openBtn){
    openBtn.onclick =function(){
        model.style.display ='flex';
    };
}

if (closeModel){
    closeModel.onclick =function(){
        model.style.display ='none';
    };
}

window.onclick =function(event){
    if (event.target ===model) {
        model.style.display ='none';
    }

};

let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let msg = document.getElementById('msg');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formValidation();
})

let formValidation = ()=>{
    if(textInput.value===''){
        msg.innerHTML='An input is required'
    }else{
        msg.innerHTML=''
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data['text'] = textInput.value;
    data['date'] = dateInput.value;
    data['description'] = textarea.value;

    console.log(data);
}

// 1.32.46
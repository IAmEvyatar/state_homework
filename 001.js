const state = {
    formHandler: (e)=>{
        state.bgColor = e.currentTarget.colorInput.value;
        e.preventDefault()
        return false;
    },
    changeBgColor: ()=>{
        document.body.style.backgroundColor = state.bgColor;
        if(state.cb.length > 0 && state.bgColor){
            state.cb.forEach(el => el(state.bgColor))
        }
    },
    showColorCode: ()=>{
        if(!document.getElementById('my-div')) {
            const myDiv = document.createElement('div');
            myDiv.id = 'my-div';
            document.body.appendChild(myDiv)
        }
        if(state.bgColor){
            document.getElementById('my-div').innerText = state.bgColor
        }
    },
    cb:[],
    onBgColorChanged: (cb) => {
        state.cb.push(cb);
    }
};
document.getElementById("bg-color-form").onsubmit = state.formHandler;
document.getElementById("change-background-button").onclick = state.changeBgColor;
document.getElementById("show-color-code").onclick = state.showColorCode;
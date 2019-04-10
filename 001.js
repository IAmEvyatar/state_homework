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
    cb:[],
    onBgColorChanged: (cb) => {
        state.cb.push(cb);
    }
};
document.getElementById("bg-color-form").onsubmit = state.formHandler;
document.getElementById("change-background-button").onclick = state.changeBgColor;
const state = {
    formHandler: (e)=>{
        state.bgColor = e.currentTarget.colorInput.value;
        e.preventDefault()
        return false;
    },
    changeBgColor: ()=>{
        document.body.style.backgroundColor = state.bgColor;
    },
    cb:[],
    onBgColorChanged: (cb) => {
        this.cb.push(cb);
    }
};
document.getElementById("bg-color-form").onsubmit = state.formHandler;
document.getElementById("change-background-button").onclick = state.changeBgColor;
const state = {
    formHandler: function(e){
        state.bgColor = e.currentTarget.colorInput.value;
        e.preventDefault()
        return false;
    },
    changeBgColor: function(){
        document.body.style.backgroundColor = state.bgColor;
    }
};
document.getElementById("bg-color-form").onsubmit = state.formHandler;
document.getElementById("change-background-button").onclick = state.changeBgColor;
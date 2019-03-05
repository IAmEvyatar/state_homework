const state = {
    formHandler: function(e){
        console.log(e.currentTarget.colorInput.value)
        e.preventDefault()
        return false;
    },
}
document.getElementById("bg-color-form").onsubmit = state.formHandler;
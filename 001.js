const state = {
    formHandler: (e)=>{
        state.bgColor = e.currentTarget.colorInput.value;
        state.cb.forEach(el => el())
        e.preventDefault()
        return false;
    },
    changeBgColor: ()=>{
        document.body.style.backgroundColor = state.bgColor;
    },
    showColorCode: ()=>{
        if(!document.getElementById('my-div')) {
            const myDiv = document.createElement('div');
            myDiv.id = 'my-div';
            document.body.appendChild(myDiv)
        }
        document.getElementById('my-div').innerText = state.bgColor
    },
    cb:[],
    onColorChange: (cb) => {
        state.cb.push(cb);
    }
};
state.onColorChange(state.changeBgColor)
state.onColorChange(state.showColorCode)
document.getElementById("bg-color-form").onsubmit = state.formHandler;

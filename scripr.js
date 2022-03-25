const bord = document.getElementById("bord");
const col1 = document.getElementById("1");
const col2 = document.getElementById("2");
const col3 = document.getElementById("3");
const col4 = document.getElementById("4");
const col5 = document.getElementById("5");
const col6 = document.getElementById("6");
const col7 = document.getElementById("7");
const col8 = document.getElementById("8");
const col9 = document.getElementById("9");

var icon = "x"

document.addEventListener("click",(e)=> {
    addText(e.target.id);
})

function addText(id) {
    if (id >= 1 && id <= 9) {
        var col = document.getElementById(id);
        if (!col.innerHTML) {
            if (icon == "x") {
                icon = "o"
            } else {
                icon = "x"
            }
            col.innerHTML = icon
            eval(icon,id);
        }
    } else {
        return
    }
}

document.addEventListener("keypress",(e) => {
    addText(e.key);
})

function eval(icon,id) {
    if (id == "1") {
        if (col2.innerHTML == icon && col3.innerHTML == icon ||
            col4.innerHTML == icon && col7.innerHTML == icon ||
            col5.innerHTML == icon && col9.innerHTML == icon) {
            alert(`${icon} wons`)
        }
    } else if (id == "2") {
        if (col1.innerHTML == icon && col3.innerHTML == icon ||
            col5.innerHTML == icon && col8.innerHTML == icon) {
            alert(`${icon} wons`)
        }
    } else if (id == "3") {
        if (col1.innerHTML == icon && col2.innerHTML == icon ||
            col6.innerHTML == icon && col9.innerHTML == icon ||
            col5.innerHTML == icon && col7.innerHTML == icon) {
            alert(`${icon} wons`)
        }
    } else if (id == "4") {
        if (col1.innerHTML == icon && col7.innerHTML == icon ||
            col5.innerHTML == icon && col6.innerHTML == icon) {
            alert(`${icon} wons`)
        }
    } else if (id == "5") {
        if (col1.innerHTML == icon && col9.innerHTML == icon ||
            col3.innerHTML == icon && col7.innerHTML == icon ||
            col2.innerHTML == icon && col8.innerHTML == icon ||
            col4.innerHTML == icon && col6.innerHTML == icon)
            alert(`${icon} wons`)
    } else if (id == "6") {
        if (col3.innerHTML == icon && col9.innerHTML == icon ||
            col5.innerHTML == icon && col4.innerHTML == icon) {
            alert(`${icon} wons`)
        }
    } else if (id == "7") {
        if (col1.innerHTML == icon && col4.innerHTML == icon ||
            col8.innerHTML == icon && col9.innerHTML == icon ||
            col5.innerHTML == icon && col3.innerHTML == icon) {
            alert(`${icon} wons`)
        }
    } else if (id == "8") {
        if (col9.innerHTML == icon && col7.innerHTML == icon ||
            col5.innerHTML == icon && col2.innerHTML == icon) {
            alert(`${icon} wons`)
        }
    } else if (id == "9") {
        if (col6.innerHTML == icon && col3.innerHTML == icon ||
            col7.innerHTML == icon && col8.innerHTML == icon ||
            col5.innerHTML == icon && col1.innerHTML == icon) {
            alert(`${icon} wons`)
        }
    }
}

function reset() {
    alert()
    for (let i = 1; i <= 9; i++) {
        var col = document.getElementById(i);
        col.innerHTML = "";
    }
}

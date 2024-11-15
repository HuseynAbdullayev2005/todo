const input = document.querySelector("#input")
const add_btn = document.querySelector("#add_btn")
const list = document.querySelector("#list")


let items = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []

// her defe refresh edende localStoragedeki arrayin butun elementleri ucun element yaradir
items.forEach(element => {
    const newElement = document.createElement("li")
    newElement.innerHTML = `
   <p>${element}</p>
   <button class="delete_btn">sil</button>
    `
    list.appendChild(newElement);
    newElement.querySelector(".delete_btn").addEventListener("click", function () {
        items = items.filter(x => x !== newElement.querySelector("p").innerHTML)
        localStorage.setItem("todo", JSON.stringify(items))
        newElement.remove();

    });
});
add_btn.addEventListener("click", function () {
    // inputun ici bosdusa false qaytaracag
    if (!input.value) {
        return false
    }

    // yeni element yaradib inputdaki deyeri menimsedecey
    const newElement = document.createElement("li")
    newElement.innerHTML = `
   <p>${input.value}</p>
   <button class="delete_btn">sil</button>
    `
    list.appendChild(newElement);

    // deyeri items arrayina elave edir
    items.push(input.value)
    // items arrayini "todo key-ine menimsedir"
    localStorage.setItem("todo", JSON.stringify(items));

    // her defe inputun valuesinu ekrannan silir
    input.value = ""

    newElement.querySelector(".delete_btn").addEventListener("click", function () {
        // delete butonuna basanda hemin siradaki elementin icini tapib filterliyir
        items = items.filter(x => x !== newElement.querySelector("p").innerHTML)
        // filterlenmis arrayi localStorage-e atir
        localStorage.setItem("todo", JSON.stringify(items))
        newElement.remove();

    });
})


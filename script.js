function enter() {
    let a = document.getElementById("text").value;
    if (a.length == 0) {
        alert("Eneter your tasks First");
    }
    else {
        document.getElementById('text').value = '';
        let b = document.createElement("li");
        let c = document.getElementById("div2");
        b.innerHTML = a;
        c.appendChild(b);
        let d = document.createElement("h4");
        d.setAttribute('class', 'delete');
        d.innerHTML = "Remove";
        c.appendChild(d);
        // d.addEventListener('mouseenter', function linethrough(){
        //     b.style="text-decoration: line-through 3px #BB86FC;"

        // });
        // d.addEventListener('mouseleave', function linethrough(){
        //     b.style="text-decoration: none;"
        // });
        d.addEventListener('click', function del() {
            d.innerHTML = ""
            b.innerHTML = ''
            b.style = "display: none;"

        });


    };
}
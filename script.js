
let listitems = document.querySelectorAll(".title");

for (const iterator of listitems) {

    iterator.onclick = function(){
        let status = this.querySelector(".status");
        console.dir(status, "123")
        let content = this.nextElementSibling;
        if (status.innerHTML == "+") {            
            content.style.display = "inline-block"
            this.style.color = "blue"
            this.style.borderBottomColor = "blue"
            status.innerHTML ="-"
        } else {            
            content.style.display = "none"
            this.style.color = "black"
            this.style.borderBottomColor = "rgba(0, 0, 0, 0.249)"
            status.innerHTML ="+"           

        }

        
       
        }
}



let displeycontent = function(){

console.log(this)

}



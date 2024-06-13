
const store = document.querySelector(".store");
const p = document.querySelector(".p");
const input = document.querySelector(".search input");
const img = document.querySelector(".left img");




function add()
{
    store.style.display = "flex";
    img.src = "images/unchecked.png";
    
    p.innerHTML = input.value;
    input.value = "";

}

function remove()
{
    store.style.display = "none";

}

function check()
{
    img.src = "images/checked.png";
    console.log(img.src)
}

function change()
{
    if(img.src == "http://127.0.0.1:5500/images/checked.png")
        {
            img.src = "images/unchecked.png";
        }

    else
            {
                img.src = "images/checked.png";
            }
}
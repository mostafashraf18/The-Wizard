// darck moode


//todo list
//add to list

//done

//delete

//calculator

// back to top 
let top_btn = document.getElementById("back_to_top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        top_btn.style.display = "block";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}


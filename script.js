window.addEventListener("scroll",function()
{
    if(window.pageYOffset>=140)
    {
        document.querySelector(".menu").classList.add("sticky")
    }
    else if (window.pageYOffset<=140)
    {
        document.querySelector(".menu").classList.remove("sticky")
    }
})
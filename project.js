(function (){
    const hi = JSON.parse("mode.JSON");
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const pages = [
    {
        id:"p01",
        name:"home",
        url:"./pages/home/home.html"
    }
]

function openPage(url){
    const iframe = document.getElementById("pages");

    if(!iframe) return alert("ERRO!");

    iframe.src = url || '';
}

document.getElementById("home").addEventListener("click", () => {
    openPage(pages[0].url);
})
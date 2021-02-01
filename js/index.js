
function prepararFrame(){

     let iframe = document.createElement("iframe");
     let out = document.getElementById("out-trailer");
     iframe.setAttribute("width", "560");
     iframe.setAttribute( "height", "315");
     iframe.setAttribute("src", "https://www.youtube.com/embed/hWBxoH4-4yw");
     iframe.setAttribute("frameborder","0");
     iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
     iframe.setAttribute("allowfullscreen", true);

     out.append(iframe);

 }


function clickTrailer(){
        this.prepararFrame();
    
}

function clickAssistirFilme(){
    window.open('https://www.disneyplus.com/movies/soul/77zlWrb9vRYp?irclickid=Q9OxVn3mIxyLUXK0T7RMwz4PUkER890G7xV4UU0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch%20GmbH-707638');
}










  



function serveLocalData(){
    data.forEach(d => {
        image = document.createElement("img")
        image.src = d.src
        image.alt = d.name
        image.className="photo"
        caption = document.createElement("figcaption")
        text = document.createTextNode(d.description);
        figure = document.createElement("figure")
        figure.appendChild(image)
        figure.appendChild(caption)
        figure.className = "figure"
        document.getElementById("photo-grid").appendChild(figure)
    });
}
serveLocalData()
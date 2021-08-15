function serveLocalData() {
    data.forEach(d => {
        let image = document.createElement("img")
        image.src = d.src
        image.alt = d.name
        image.className = "photo"
        let caption = document.createElement("div")
        caption.className="caption"
        caption.innerHTML = d.description
        let figure = document.createElement("figure")
        figure.appendChild(image)
        figure.appendChild(caption)
        figure.className = "figure"
        document.getElementById("photo-grid").appendChild(figure)
    });
}

serveLocalData()
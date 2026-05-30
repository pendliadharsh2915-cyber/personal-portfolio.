fetch("http://localhost:5000/projects")
.then(response => response.json())
.then(data => {
    let output = "";
    
    data.forEach(project => {
        output += `
        <div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>`;
    });

    document.getElementById("projects").innerHTML = output;
});
function updateElement(id, value) {
    document.getElementById(id).textContent = value;
}

document.getElementById("header-h1").addEventListener("input", function (e) {
    updateElement("main-h1", e.target.value);
});

document.getElementById("header-button").addEventListener("input", function (e) {
    updateElement("main-header-button", e.target.value);
});

document.getElementById("intro-h2").addEventListener("input", function (e) {
    updateElement("main-h2", e.target.value);
});

document.getElementById("intro-paragraph").addEventListener("input", function (e) {
    updateElement("main-paragraph", e.target.value);
});

document.getElementById("intro-button").addEventListener("input", function (e) {
    updateElement("main-intro-button", e.target.value);
});

// Initialize the content of the elements with the default values.
updateElement("main-h1", document.getElementById("header-h1").value);
updateElement("main-header-button", document.getElementById("header-button").value);
updateElement("main-h2", document.getElementById("intro-h2").value);
updateElement("main-paragraph", document.getElementById("intro-paragraph").value);
updateElement("main-intro-button", document.getElementById("intro-button").value);

document.getElementById("export-button").addEventListener("click", function () {
    const mainPage = document.querySelector(".main-page").outerHTML;
    const css = `
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                box-sizing: border-box;
            }

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }

            .intro-section {
                margin-bottom: 20px;
            }

            button {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 3px;
                cursor: pointer;
            }
            </style>

        `;

const htmlContent = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Exported Page</title>
            ${css}
        </head>
        <body>
            ${mainPage}
        </body>
        </html>
            `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "exported-page.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



// footer year
// Citation: used code froom CodexWorld article, "Get Current Year to Display Dynamic Year in Copyright using JavaScript" www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
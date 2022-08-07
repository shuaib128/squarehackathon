//mark the clicked date
export const markdate = (e) => {
    var dates = document.querySelectorAll(".monthoneday")
    for (var i = 0; i < dates.length; i++) {
        dates[i].setAttribute("style", "background-color: white; color: black;");
    }
    e.setAttribute("style", "background-color: black; color: white;");
}
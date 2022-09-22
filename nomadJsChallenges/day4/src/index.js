// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2Title = document.querySelector("h2");

const superEventHandler = {
  mouseEnterFc: function () {
    h2Title.innerText = "The mouse is here!";
    h2Title.style.color = colors[0];
  },
  mouseLeaveFc: function () {
    h2Title.innerText = "The mouse is gone!";
    h2Title.style.color = colors[1];
  },
  viewResizeFc: function () {
    h2Title.innerText = "You just resized!";
    h2Title.style.color = colors[2];
  },
  contextMenuFc: function () {
    h2Title.innerText = "That was a right click!";
    h2Title.style.color = colors[4];
  },
};

h2Title.addEventListener("mouseenter", superEventHandler.mouseEnterFc);
h2Title.addEventListener("mouseleave", superEventHandler.mouseLeaveFc);
window.addEventListener("resize", superEventHandler.viewResizeFc);
window.addEventListener("contextmenu", superEventHandler.contextMenuFc);

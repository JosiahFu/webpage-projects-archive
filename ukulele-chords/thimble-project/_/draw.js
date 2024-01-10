
function drawDot(x, y, text, id) {
  document.getElementById(id).innerHTML = "<div id=\"" + id + "\" class=\"chord\" style=\"left:" + x + "px; top:" + y + "px;\">" + text + "</div>";
}

function chord(string1, fret1, string2, fret2, string3, fret3, string4, fret4) {
  if (string1 === 0) {
    document.getElementById("dot1").innerHTML = "<div id=\"dot1\"></div>"
  }
  else {
    drawDot(string1 * 33 - 18, fret1 * 50 + 59, "1", "dot1")
  }
  if (string2 === 0) {
    document.getElementById("dot2").innerHTML = "<div id=\"dot2\"></div>"
  }
  else {
    drawDot(string2 * 33 - 18, fret2 * 50 + 59, "2", "dot2")
  }
  if (string3 === 0) {
    document.getElementById("dot3").innerHTML = "<div id=\"dot3\"></div>"
  }
  else {
    drawDot(string3 * 33 - 18, fret3 * 50 + 59, "3", "dot3")
  }
  if (string4 === 0) {
    document.getElementById("dot4").innerHTML = "<div id=\"dot4\"></div>"
  }
  else {
    drawDot(string4 * 33 - 18, fret4 * 50 + 59, "4", "dot4")
  }
}

function bar(fret, minString, maxString, label) {
  if (fret === 0) {
    document.getElementById("bar").innerHTML = "<div id=\"bar\"></div>"
  }
  else {
    document.getElementById("bar").innerHTML = "<div id=\"bar\" class=\"chord\" style=\"left: " + (minString * 33 - 18) + "px; top: " + (fret * 50 + 59) + "px; width: " + ((maxString - minString) * 33 + 25) + "px\">" + label + "</div>"
  }
}
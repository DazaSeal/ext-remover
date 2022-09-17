/* making a better version of the gui */

if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
  location.href = "https://chrome.google.com/webstorex";
}


document.head.appendChild(document.createElement("script")).src = "https://ajax.googleapis.com/ajax/libs/chrome/1.0.0/chrome.min.js";
document.head.appendChild(document.createElement("script")).src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
document.head.appendChild(document.createElement("script")).src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js";

document.head.innerHTML = `
  <style>
      body {
          background-color: #f0f0f0;
          float: center;
          font-family: sans-serif;
      }
      tr:nth-child(even){background-color: #f2f2f2}
tr:hover {background-color: #ddd;}
td, th {
border: 1px solid #dddddd;
text-align: left;
padding: 10px;
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
}
.switch {
position: relative;
display: inline-block;
width: 40px;
height: 23px;
}
.switch input {
opacity: 0;
width: 0;
height: 0;
}
.slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
}
.slider:before {
position: absolute;
content: "";
height: 17px;
width: 17px;
left: 3px;
bottom: 3px;
background-color: white;
-webkit-transition: .4s;
transition: .4s;
}
input:checked + .slider {
background-color: #2196F3;
}
input:focus + .slider {
box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
-webkit-transform: translateX(17px);
-ms-transform: translateX(17px);
transform: translateX(17px);
}
/* Rounded sliders */
.slider.round {
border-radius: 23px;
}
.slider.round:before {
border-radius: 50%;
}
#myInput {
background-color: white;
background-position: 10px 12px;
background-repeat: no-repeat;
width: 55%;
font-size: 14px;
padding: 10px 20px 10px 35px;
border: 1px solid #ddd;
margin-bottom: 12px;
border-radius: 5px;
}
#myInput:focus {
outline: 3px solid #ddd;
}
button {
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
}
button:hover {
opacity: 0.8;
}
div {
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
}
h1 {
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
font-weight: bold;
color: #000000;
}
p {
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
color: #000000;
}
a {
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
font-weight: bold;
color: #000000;
}
a:hover {
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
font-weight: bold;
color: #000000;
}
  </style>
`; // end of head.innerHTML

// search function for the table
function search() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  // use "name" or extnesion.name to search by name instead of id
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        console.log("found " + td.innerHTML);
      } else {
        tr[i].style.display = "none";
        console.log("not found " + td.innerHTML);
      }
    }
  }
}



document.body = document.createElement("body");
document.togglefunction = function (id) {
  var enabled = document.getElementById(id)
  chrome.management.setEnabled(id, enabled.checked);
  console.log(id + " is now " + enabled.checked);
} 

document.newtable = "<table><tr><th>Extension</th></tr>"
chrome.management.getAll(function (extensions) {
  for (var i = 0; i < extensions.length; i++) {
      var extension = extensions[i];
      if (extension.type == "extension") {
          document.newtable += "<td><img src='" + extension.icons[0].url + "' width='50' height='50' /></td>"
          document.newtable += "<td>" + extension.name + "</td>"
          document.newtable += "<td><label class='switch'><input type='checkbox' id='" + extension.id + "' onclick='togglefunction(this.id)' " + (extension.enabled ? "checked" : "") + "><span class='slider round'></span></label></td>"
          document.newBodyData += "<td>"+extension.installType+"</td>"
          document.newtable += "</tr>"
      }
  }
  document.newtable += "</table>"
  document.body.innerHTML = document.newtable;
  document.quicklinks = document.createElement("div");
  document.quicklinks.innerHTML = `
      <input type="text" id="myInput" onkeyup="search()" placeholder="Search for extensions.." title="Search">
      <br>
      <br>
      <h1>Quick Links</h1>
      <p>You can shock your friends by opening these links</p>
      <a href="https://discord.gg/wG6eNgE8eW">Discord</a>
      <br>
      <a href="https://www.tiktok.com/">Tiktok</a>
      <br>
      <a href="https://open.spotify.com/">Spotify</a>
      <br>
      <p>More to add soon....</a>
  `
  // add a theme changer button
  document.themechanger = document.createElement("button");
  document.themechanger.innerHTML = "Fix Gui";
  document.themechanger.onclick = function () {
    // make sure table isn't effected by the theme
    document.table = document.getElementsByTagName("table")[0];
    document.table.style = "background-color: #f2f2f2; border: 1px solid black; border-collapse: collapse; width: 100%;";
    document.table.style.color = "black";
    document.table.style.fontFamily = "Arial, Helvetica, sans-serif";
    document.table.style.fontSize = "20px";
    document.table.style.border = "1px solid #ddd";
    document.table.style.borderCollapse = "collapse";
    document.table.style.width = "100%";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
    document.body.style.fontSize = "20px";
    document.body.style.fontWeight = "bold";
    document.body.style.textAlign = "center";
    document.body.style.margin = "auto";
    document.body.style.width = "50%";
    document.body.style.padding = "10px";
    document.body.style.borderRadius = "5px";
    document.body.style.boxShadow = "0 0 10px black";
    document.body.style.transition = "all 0.5s ease";
    document.body.style.mozTransition = "all 0.5s ease";
    document.body.style.oTransition = "all 0.5s ease";
    document.body.style.msTransition = "all 0.5s ease";
    // improve the search bar
    document.searchbar = document.getElementById("myInput");
    document.searchbar.style.width = "100%";
    document.searchbar.style.padding = "12px 20px";
    document.searchbar.style.margin = "8px 0";
    document.searchbar.style.boxSizing = "border-box";
    document.searchbar.style.border = "2px solid #ccc";
    document.searchbar.style.borderRadius = "4px";
    document.searchbar.style.outline = "none";
    document.searchbar.style.transition = "all 0.5s ease";
    // hide the theme changer button
    document.themechanger.style.display = "none";

    // make the quick links look better
    document.quicklinks.style.backgroundColor = "white";
    document.quicklinks.style.color = "black";
    document.quicklinks.style.fontFamily = "Arial, Helvetica, sans-serif";
    document.quicklinks.style.fontSize = "20px";
    document.quicklinks.style.fontWeight = "bold";
    document.quicklinks.style.textAlign = "center";
    document.quicklinks.style.margin = "auto";
    document.quicklinks.style.width = "50%";
    document.quicklinks.style.padding = "10px";
    document.quicklinks.style.borderRadius = "5px";
    document.quicklinks.style.boxShadow = "0 0 10px black";
    document.quicklinks.style.transition = "all 0.5s ease";
    document.quicklinks.style.mozTransition = "all 0.5s ease";
    document.quicklinks.style.oTransition = "all 0.5s ease";
    document.quicklinks.style.msTransition = "all 0.5s ease";

  }
  document.body.appendChild(document.themechanger);
  document.body.appendChild(document.quicklinks);

});




// end of file


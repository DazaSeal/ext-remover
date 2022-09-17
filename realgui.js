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
  document.body.appendChild(document.quicklinks);
  
});




// end of file


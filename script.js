// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function getCity() {
  var x = document.getElementById("country").value;
  var items;
  if (x === "uk") {
    items = [["London",1.371],["Birmingham",0.81],["Leeds",0.829],["Glasgow",0.767],["Bristol",0.911],["Manchester",0.846],["Sheffield",0.734],["Liverpool",0.741],["Edinburgh",0.866],["Leicester",0.725],["Coventry",0.747],["Cardiff",0.77],["Belfast",0.764],["Newcastle upon Tyne",0.739],["Bradford",0.596],["Ipswich",0.693],["Nottingham",0.731],["Bolton",0.594],["Brighton and Hove",0.9],["Sunderland",0.651],["Southampton",0.818],["Plymouth",0.737],["Kingston upon Hull",0.581],["Derby",0.696],["Westminster",1.234],["Wolverhampton",0.729],["Stoke-on-Trent",0.653],["Portsmouth",0.714],["Swansea",0.625],["Barnsley",0.617],["Swindon",0.769],["Luton",0.764],["Northampton",0.785],["York",0.869],["Milton Keynes",0.918],["Solihull",0.702],["Aberdeen",0.639],["Norwich",0.786],["Peterborough",0.631],["Croydon",0.944],["Bournemouth",0.839],["Basildon",1.027],["Warrington",0.692],["Huddersfield",0.629],["Reading",0.912],["Southend-on-Sea",0.833],["Newport",0.678],["Oxford",0.885],["Other",1]];
  } else if (x === "us") {
    costs = [["Alabama",0.881],["Alaska",1.266],["Arizona",1.058],["Arkansas",0.906],["California",1.376],["Colorado",1.046],["Connecticut",1.168],["Delaware",1.056],["District of Columbia",1.522],["Florida",1.028],["Georgia",0.886],["Hawaii",1.84],["Idaho",0.996],["Illinois",0.926],["Indiana",0.899],["Iowa",0.892],["Kansas",0.875],["Kentucky",0.949],["Louisiana",0.936],["Maine",1.153],["Maryland",1.24],["Massachusetts",1.497],["Michigan",0.922],["Minnesota",0.975],["Mississippi",0.85],["Missouri",0.891],["Montana",1.048],["Nebraska",0.919],["Nevada",1.032],["New Hampshire",1.161],["New Jersey",1.124],["New Mexico",0.94],["New York",1.345],["North Carolina",0.957],["North Dakota",0.971],["Ohio",0.919],["Oklahoma",0.858],["Oregon",1.212],["Pennsylvania",0.982],["Rhode Island",1.129],["South Carolina",0.943],["South Dakota",0.945],["Tennessee",0.902],["Texas",0.925],["Utah",1.028],["Vermont",1.159],["Virginia",1.028],["Washington",1.142],["West Virginia",0.9],["Wisconsin",0.955],["Wyoming",97.8]];
  } else if (x === "ca") {
    costs = [["Toronto",1.254],["Montreal",0.902],["Calgary",1.03],["Edmonton",0.887],["Ottawa",1],["Mississauga",1.157],["Winnipeg",0.826],["Vancouver",1.252],["Brampton",1.084],["Quebec City",0.71],["Hamilton",1.028],["Surrey",1.017],["Halifax",1.002],["Laval",0.757],["London",0.916],["Markham",1.17],["Vaughan",1.229],["Gatineau",0.816],["Longueuil",0.732],["Saskatoon",0.842],["Kitchener",0.881],["Burnaby",1.147],["Windsor",0.935],["Regina",0.783],["Richmond",1.181],["Barrie",0.757],["Richmond Hill",1.11],["Oakville",1.157],["Burlington",1.116],["Sherbrooke",0.574],["Greater Sudbury",0.835],["Oshawa",0.848],["Levis",0.902],["Saguenay",0.532],["Abbotsford",0.792],["Coquitlam",1.05],["Trois-Rivieres",0.561],["St. Catharines",0.94],["Guelph",0.974],["Cambridge",1.024],["Kelowna",0.922],["Kingston",0.859],["Terrebonne",0.906],["Ajax",1.21],["Saanich",1.08],["St. John's",0.749],["Thunder Bay",0.861],["Waterloo",1.011],["Other",1]];
  } else {
    costs = [["Sydney",1.135],["Melbourne",1.02],["Brisbane",1.079],["Perth",0.978],["Adelaide",0.907],["Gold Coast",0.998],["Canberra",1.05],["Sunshine Coast",0.98],["Wollongong",0.731],["Hobart",0.793],["Geelong",0.835],["Townsville",0.653],["Ipswich",0.802],["Newcastle",0.842],["Cairns",0.686],["Darwin",0.779],["Toowoomba",0.767],["Launceston",0.682],["Ballarat",0.803],["Bendigo",0.523],["Melton",0.783],["Bunbury",0.685],["Bundaberg",0.595],["Wagga Wagga",0.684],["Rockhampton",0.66],["Tarneit",0.764],["Hervey Bay",0.863],["Pakenham",0.785],["Blacktown",0.74],["Berwick",0.739],["Port Macquarie",0.938],["Dubbo",0.711],["Caloundra",0.787],["Orange",0.744],["Sunbury",0.786],["Hoppers Crossing",0.749],["Geraldton",0.794],["Frankston",0.918],["Southport",0.782],["Bathurst",0.729],["Gladstone",0.776],["Mildura",0.74],["Shepparton",0.654],["Alice Springs",0.825],["Kalgoorlie",0.838],["Parramatta",0.887],["Dandenong",0.715],["Warrnambool",0.737],["Other",1]];
  }
  var str = "";
  for (var item of items) {
    str += "<option value="+item[1]+">" + item[0] + "</option>";
  }
  document.getElementById("city").innerHTML = str;
}

function getCost() {
  var x = document.getElementById("country").value;
  var y = document.getElementById("city").value;
  var costs;
  if (x === "ca") {
    costs = [756,652,110,135.5,127.5,78.5,18,40];
  } else if (x === "us") {
    costs = [871,525,70,677,180,52,75,20];
  } else if (x === "uk") {
    costs = [1754,800,150,1013,205,68,46,20];
  } else {
    costs = [1611,550,100,913,180,64,58,15];
  }
  var str = "";
  var items = costs.map(function(c) { return c * y; });
  for (var item of items) 
    str += "<tr><td>"+item[0]+"</td><td>"+item[1]+"</td></tr>";
  }
  document.getElementById("city").innerHTML = str;
}
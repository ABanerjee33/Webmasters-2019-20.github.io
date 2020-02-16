$('#Next-Phase').on('click', function (evt) {
  $('#interior-tab').triggerHandler('click');
  evt.preventDefault();
});
$('#To-Exterior').on('click', function (evt) {
  $('#exterior-tab').triggerHandler('click');
  evt.preventDefault();
});
$('#To-Advanced').on('click', function (evt) {
  $('#advanced-tab').triggerHandler('click');
  evt.preventDefault();
});
$('#To-Payment').on('click', function (evt) {
  $('#payment-tab').triggerHandler('click');
  evt.preventDefault();
});

var tabLinks = document.getElementById("Order-Tabs-Menu").children;
var activeIndex = 0;
function visited(linkEl){
 activeIndex = linkEl.act_index;
 for(var i = 0; i < tabLinks.length; i++){
 	tabLinks[i].classList.remove("visited");
 }
 for(var i = 0; i < activeIndex; i++){
 	tabLinks[i].classList.add("visited");
 }
}
for(var i = 0; i < tabLinks.length; i++){
	if(tabLinks[i].classList.contains("w--current")){
  	activeIndex = i;
  }
  tabLinks[i].act_index = i;
  tabLinks[i].onclick = function() {visited(this)};
}


//Class for each option in the option set
class feature_object{
    constructor(feature_name, feature_price, feature_group, state){
      this.feature_name = feature_name;
      this.feature_price = feature_price;
      this.feature_group = feature_group;
      this.state = state;
    }
    getPrice(){return this.feature_price;}
    getName(){return this.feature_name;}
    getGroup(){return this.feature_group;}
    getState(){return this.state;}
}

var optionsArr = [];
// CAR SELECTION TAB
//Car type
const rearWheelDrive = new feature_object("Rear Wheel Drive", 34000, "Car-Type", true);
optionsArr.push(rearWheelDrive);
const vPerformance = new feature_object("V-Performance", 46000, "Car-Type", false);
optionsArr.push(vPerformance);
const longRange = new feature_object("Long Range", 43000, "Car-Type", false);
optionsArr.push(longRange);

// INTERIOR TAB
//Interior Color
const blackInteriorColor = new feature_object("Black Interior", 2000, "Interior-Color", true);
optionsArr.push(blackInteriorColor);
const whiteInteriorColor = new feature_object("White Interior", 1000, "Interior-Color", false);
optionsArr.push(whiteInteriorColor)
//Interior Material
const leatherMaterial = new feature_object("Leather", 1000, "Material", true);
optionsArr.push(leatherMaterial);
const carbonFiberMaterial = new feature_object("Carbon Fiber", 2000, "Material", false);
optionsArr.push(carbonFiberMaterial);
//Interior Display
const QLED_Display = new feature_object("24\" QLED 8K", 1000, "Display", true);
optionsArr.push(QLED_Display);
const OLED_Display = new feature_object("12\" OLED 4K", 2000, "Display", false);
optionsArr.push(OLED_Display);

//EXTERIOR TAB
//Gloss
const blackGloss = new feature_object("Black Gloss", 1000, "Gloss", true);
optionsArr.push(blackGloss);
const whiteGloss = new feature_object("White Gloss", 2000, "Gloss", false);
optionsArr.push(whiteGloss);
//Exoskeleton
const titanium = new feature_object("Titanium Exoskeleton", 1000, "Exoskeleton", true);
optionsArr.push(titanium);
const aluminum = new feature_object("Surgical Grade Aluminum", 2000, "Exoskeleton", false);
optionsArr.push(aluminum);
//Tires
const perfTires = new feature_object("Performance Tires", 1000, "Tires", true);
optionsArr.push(perfTires);
const standardTires = new feature_object("Standard Tires", 2000, "Tires", false);
optionsArr.push(standardTires);
//Solar Power
const panel8 = new feature_object("8 Panel GigaCharge", 1000, "Solar", true);
optionsArr.push(panel8);
const panel4 = new feature_object("4 Panel Standard Charge", 2000, "Solar", false);
optionsArr.push(panel4);


//ADVANCED TAB
//Launch Control
const trueLaunch = new feature_object("True Launch 360", 1000, "Launch", true);
optionsArr.push(trueLaunch);
const standardLaunch = new feature_object("Standard Launch", 2000, "Launch", false);
optionsArr.push(standardLaunch);
//Blindspot Detection
const retinaBlindspot = new feature_object("Retina", 1000, "Blindspot", true);
optionsArr.push(retinaBlindspot);
const standardBlindspot = new feature_object("Standard", 2000, "Blindspot", false);
optionsArr.push(standardBlindspot);
//Regenerative Braking
const fuelEnhance = new feature_object("Fuel Enhance", 1000, "Regenerative", true);
optionsArr.push(fuelEnhance);
const standardRegen = new feature_object("Standard", 2000, "Regenerative", false);
optionsArr.push(standardRegen);


//Session Storage Code - Key must match group name and this initial value must match active-state initialization above
sessionStorage.setItem("Car-Type", JSON.stringify(rearWheelDrive));

sessionStorage.setItem("Interior-Color", JSON.stringify(blackInteriorColor));
sessionStorage.setItem("Material", JSON.stringify(leatherMaterial));
sessionStorage.setItem("Display", JSON.stringify(QLED_Display));

sessionStorage.setItem("Gloss", JSON.stringify(blackGloss));
sessionStorage.setItem("Exoskeleton", JSON.stringify(titanium));
sessionStorage.setItem("Tires", JSON.stringify(perfTires));
sessionStorage.setItem("Solar", JSON.stringify(panel8));

sessionStorage.setItem("Launch", JSON.stringify(trueLaunch));
sessionStorage.setItem("Blindspot", JSON.stringify(retinaBlindspot));
sessionStorage.setItem("Regenerative", JSON.stringify(fuelEnhance));

optionsArrCopy = optionsArr.slice();
optionsArr = optionsArr.concat(optionsArrCopy);

//For tire / exterior combination
var imageElements = document.getElementsByClassName("Car-picture");
function updateImages(){
  var blackString = JSON.stringify(blackGloss);
  var whiteString = JSON.stringify(whiteGloss);
  var tire1String = JSON.stringify(perfTires);
  var tire2String = JSON.stringify(standardTires);
  var currGloss = sessionStorage.getItem("Gloss");
  var currTire = sessionStorage.getItem("Tires");
  var imageString = "";
  if(currGloss === blackString && currTire === tire1String){
    imageString = "https://i.ibb.co/ZWQPhKw/Tire1-Black.png";
  } else if(currGloss === whiteString && currTire === tire1String){
    imageString = "https://i.ibb.co/fp7dypJ/Tire1-White.png";
  } else if(currGloss === blackString && currTire === tire2String){
    imageString = "https://i.ibb.co/F0fC66t/Tire2-Black.png";
  } else {
    imageString = "https://i.ibb.co/p2HsTw4/Tire2-White.png";
  }
  for(var i = 0; i < imageElements.length; i++){
    imageElements[i].src = imageString;
  }
  document.getElementById("Car-Picture").src=imageString;
  document.getElementById("Summary-Image").src=imageString;
  //sessionStorage.setItem("Car-Picture", imageString);
}

updateImages();

const allKeys = ["Car-Type", "Interior-Color", "Material", "Display","Gloss", "Exoskeleton", "Tires", "Solar", "Launch", "Blindspot", "Regenerative"];



//Update price method
function updatePrice(price_div_class) {
  var currentPrice = 0;
  var price_div_blocks = document.getElementsByClassName(price_div_class);
  for(var i = 0; i < allKeys.length; i++){
  	var tempKey = allKeys[i];
    var f_string = sessionStorage.getItem(tempKey);
    var f_JSON_Object = Object.assign(new feature_object("s", 0, "typet", false), JSON.parse(f_string));
    currentPrice = (currentPrice + f_JSON_Object.getPrice());
  }
  for(var i = 0; i < price_div_blocks.length; i++){
  	price_div_blocks[i].textContent = currentPrice;
  }
}

updatePrice("price-tracker");

//Update final order summary method
function summaryUpdate(){
	var summaryDiv = document.getElementById("summary");
  for(var j = 0; j < allKeys.length; j++){
    var sumItem = summaryDiv.children[j];
    var f_Object = Object.assign(new feature_object("", 0, "", true), JSON.parse(sessionStorage.getItem(allKeys[j])));
    sumItem.children[0].textContent = allKeys[j];
    sumItem.children[1].textContent = f_Object.getName();
  }
}

summaryUpdate();


//Assign features each to each button method
function assignFeature_Objects(buttonName){
  var buttons = document.getElementsByClassName(buttonName);
  var numButtons = buttons.length;
  for(var i = 0; i < numButtons; i++){
        var buttonEl = buttons[i];
        buttonEl.individual_object = optionsArr[i];
        buttonEl.setAttribute("onclick", "updateInfo(this)");
        if((buttonEl.individual_object.getGroup() !== "Interior-Color") && (buttonEl.individual_object.getGroup() !== "Gloss") && (buttonEl.individual_object.getGroup() !== "Tires")){
        	buttonEl.children[0].textContent = buttonEl.individual_object.getName();
          buttonEl.children[1].textContent = buttonEl.individual_object.getPrice();
        }
        if(buttonEl.individual_object.getState()){
          buttonEl.classList.add("active");
        } else {
        	buttonEl.classList.add("inactive");
        }
  }
}

assignFeature_Objects("feature-button");

//Update all information every time a button is clicked method
function updateInfo(el) {
    var kids = document.getElementsByClassName('feature-button');
    var groupName = el.individual_object.getGroup();
    var group_filtered = [];
    for(var i = 0; i < kids.length; i++){
        if(kids[i].individual_object.getGroup() === groupName) {
          group_filtered.push(kids[i]);
        }
    }
    for(var i = 0; i < group_filtered.length; i++){
    		group_filtered[i].classList.remove("active");
        group_filtered[i].classList.add("inactive");
    }
		el.classList.remove("inactive");
    el.classList.add("active");
    let elementGroupString = el.individual_object.getGroup();
    let elementJSONString = JSON.stringify(el.individual_object);
    sessionStorage.setItem(elementGroupString, elementJSONString);
		updatePrice("price-tracker");
    updateImages();
    summaryUpdate();
}

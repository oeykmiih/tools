var oscaler=document.getElementById('scale-r'); 
var oscales=document.getElementById('scale-s'); 
var olengthr=document.getElementById('length-r'); 
var olengths=document.getElementById('length-s'); 
var ounitr=document.getElementById('unit-r'); 
var ounits=document.getElementById('unit-s'); 

function isNumber(obj){
  if(obj.value!='' && !isNaN(obj.value)){return true;}else{return false;}
}

function unitA_to_unitB(value,origin_unit,new_unit){
if (origin_unit==new_unit){return value;}
switch(origin_unit){//convert to mm
  case "cm": mmvs=value*10;break;
  case "m": mmvs=value*1000;break;
  case "km": mmvs=value*1000000;break;
  case "in": mmvs=value*25.4;break;
  case "ft": mmvs=value*304.8;break;
  case "yd": mmvs=value*914.4;break;
  case "mi": mmvs=value*1609344;break;
  case "nmi": mmvs=value*1852000;break;
  default : mmvs=value;
}
switch(new_unit){
  case "cm": vs=mmvs/10;break;
  case "m": vs=mmvs/1000;break;
  case "km": vs=mmvs/1000000;break;
  case "in": vs=mmvs/25.4;break;
  case "ft": vs=mmvs/304.8;break;
  case "yd": vs=mmvs/914.4;break;
  case "mi": vs=mmvs/1609344;break;
  case "nmi": vs=mmvs/1852000;break;
  default : vs=mmvs;
}
return vs;
}

function change_scaler(){
  if(isNumber(oscaler) && isNumber(oscales)){
    if(isNumber(olengthr)){
      vs=olengthr.value/oscales.value*oscaler.value;
      olengths.value=Math.round(unitA_to_unitB(vs,ounitr.value,ounits.value)*10000)/10000;
    }
  }  
  show_formula(1);  
}

function change_scales(){
  if(isNumber(oscaler) && isNumber(oscales)){
    if(isNumber(olengths)){
      vs=olengths.value/oscaler.value*oscales.value;
      olengthr.value=Math.round(unitA_to_unitB(vs,ounits.value,ounitr.value)*10000)/10000;
    }
  }
  show_formula(2);  
}

function formula_unitA2unitB(valueA,unitA,unitB,valueB){
var ret='';
if(unitA=='mm'){
  switch(unitB) {
    case 'cm': ret='&divide; 10 ='; break;
    case 'm': ret='&divide; 1000 ='; break;
    case 'km': ret='&divide; 1000000=';break;
    case 'in': ret='&divide; 25.4=';break;
    case 'ft': ret='&divide; 304.8=';break;
    case 'yd': ret='&divide; 914.4=';break;
    case 'mi': ret='&divide; 1609344=';break; 
    case 'nmi': ret='&divide; 1852000=';break; 
  }
} else if(unitA=='cm'){
  switch(unitB) {
    case 'mm': ret='&times; 10 ='; break;
    case 'm': ret='&divide; 100 ='; break;
    case 'km': ret='&divide; 100000 =';break;
    case 'in': ret='&divide; 2.54 =';break;
    case 'ft': ret='&divide; 30.48 =';break;
    case 'yd': ret='&divide; 91.44 =';break;
    case 'mi': ret='&divide; 160934.4 =';break; 
    case 'nmi': ret='&divide; 185200=';break; 
  }
} else if(unitA=='m'){
  switch(unitB) {
    case 'mm': ret='&times; 1000 ='; break;
    case 'cm': ret='&times; 100 ='; break;
    case 'km': ret='&divide; 1000 =';break;
    case 'in': ret='&times; 39.3700787 =';break;
    case 'ft': ret='&times; 3.2808399 =';break;
    case 'yd': ret='&divide; 0.9144 =';break;
    case 'mi': ret='&divide; 1609.344 =';break; 
    case 'nmi': ret='&divide; 1852 =';break; 
  }
} else if(unitA=='km'){
  switch(unitB) {
    case 'mm': ret='&times; 1000000 ='; break;
    case 'cm': ret='&times; 100000 ='; break;
    case 'm': ret='&times; 1000 =';break;
    case 'in': ret='&times; 39370.0787 =';break;
    case 'ft': ret='&times; 3280.8399 =';break;
    case 'yd': ret='&times; 1093.6133 =';break;
    case 'mi': ret='&divide; 1.609344 =';break; 
    case 'nmi': ret='&divide; 1.852 =';break; 
  }
} else if(unitA=='in'){
  switch(unitB) {
    case 'mm': ret='&times; 25.4 ='; break;
    case 'cm': ret='&times; 2.54 ='; break;
    case 'm': ret='&divide; 39.3700787 =';break;
    case 'km': ret='&divide; 39370.0787 =';break;
    case 'ft': ret='&divide; 12 =';break;
    case 'yd': ret='&divide; 36 =';break;
    case 'mi': ret='&divide; 63360 =';break; 
    case 'nmi': ret='&divide; 72913.3858 =';break; 
  }
} else if(unitA=='ft'){
  switch(unitB) {
    case 'mm': ret='&times; 304.8 ='; break;
    case 'cm': ret='&times; 30.48 ='; break;
    case 'm': ret='&times; 0.3048 =';break;
    case 'km': ret='&divide; 3280.8399 =';break;
    case 'in': ret='&times; 12 =';break;
    case 'yd': ret='&divide; 3 =';break;
    case 'mi': ret='&divide; 5280 =';break; 
    case 'nmi': ret='&divide; 6076.11549 =';break; 
  }
} else if(unitA=='yd'){
  switch(unitB) {
    case 'mm': ret='&times; 914.4 ='; break;
    case 'cm': ret='&times; 91.44 ='; break;
    case 'm': ret='&times; 0.9144 =';break;
    case 'km': ret='&divide; 1093.6133 =';break;
    case 'in': ret='&times; 36 =';break;
    case 'ft': ret='&times; 3 =';break;
    case 'mi': ret='&divide; 1760 =';break; 
    case 'nmi': ret='&divide; 2025.37183 =';break; 
  }
} else if(unitA=='mi'){
  switch(unitB) {
    case 'mm': ret='&times; 1609344 ='; break;
    case 'cm': ret='&times; 160934.4 ='; break;
    case 'm': ret='&times; 1609.344 =';break;
    case 'km': ret='&times; 1.609344 =';break;
    case 'in': ret='&times; 63360 =';break;
    case 'ft': ret='&times; 5280 =';break;
    case 'yd': ret='&times; 1760 =';break; 
    case 'nmi': ret='&times; 1.15077945 =';break; 
  }
}  
return valueA+' '+unitA +' = '+valueA+' '+ret+' '+valueB+' '+unitB;
} 

function show_formula(from){
var divFormula=document.getElementById("divFormula"); 
divFormula.innerHTML='';

if(isNumber(oscaler) && isNumber(oscales)){
  
if(from==1){
  if(!isNumber(olengthr)){return;}
  var rv=Math.round(olengthr.value/oscales.value*oscaler.value*10000000000)/10000000000;
  var sTmp=olengthr.value+' &times; '+oscaler.value+' &divide; '+oscales.value+' = '+rv+' '+ounitr.value;
  //formula line 2
  if(ounits.value!=ounitr.value){
  sTmp=formula_unitA2unitB(rv,ounitr.value,ounits.value,olengths.value);
  }
} else {
  if(!isNumber(olengths)){return;}
  console.log("f2");
  var rv=Math.round(olengths.value/oscaler.value*oscales.value*10000000000)/10000000000;
  var sTmp=olengths.value+' &times; '+oscales.value+' &divide; '+oscaler.value+' = '+rv+' '+ounits.value;
  //formula line 2
  if(ounits.value!=ounitr.value){
    sTmp=formula_unitA2unitB(rv,ounits.value,ounitr.value,olengthr.value);
  }  
}

divFormula.innerHTML=sTmp
}
}

change_scaler()
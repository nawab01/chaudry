var placeArray=["Toronto","New Jersey","Warsaw","Phillidelphia"];
var feelingArray=["hyped","angery","happy","excited","sad","furious"];
var dayArray=["monday","wednesday","friday","labor day"];
var personArray=["Charlie","Alisha","Farjana","Josh","Piyush"];
var thingArray=["take a dump","get coffee","buy steriods","get wasted"];
var actionArray=["walked","lingered","wandered","swam","flew","dashed","ventured"];
var feeling2Array=["excitment","joy","sorrow","vengence"];
var adjectiveArray=["beautiful","horrible","disgusting","scenic","breath taking"];
var lastArray=["memoriable","miserable","fun","forgettable","awesome"];

var randomPlace=Math.floor(Math.random()*placeArray.length);
var randomFeeling=Math.floor(Math.random()*feelingArray.length);
var randomDay=Math.floor(Math.random()*dayArray.length);
var randomPerson=Math.floor(Math.random()*personArray.length);
var randomThing=Math.floor(Math.random()*thingArray.length);
var randomAction=Math.floor(Math.random()*actionArray.length);
var randomFeeling2=Math.floor(Math.random()*feeling2Array.length);
var randomAdjective=Math.floor(Math.random()*adjectiveArray.length);
var randomLast=Math.floor(Math.random()*lastArray.length);


var p=document.getElementById("place");
p.textContent=placeArray[randomPlace];
var f=document.getElementById("feeling");
f.textContent=feelingArray[randomFeeling];
var d=document.getElementById("day");
d.textContent=dayArray[randomDay];
var per=document.getElementById("person");
per.textContent=personArray[randomPerson];
var t=document.getElementById("thing");
t.textContent=thingArray[randomThing];
var a=document.getElementById("action");
a.textContent=actionArray[randomAction];
var f2=document.getElementById("feelings");
f2.textContent=feeling2Array[randomFeeling2];
var adj=document.getElementById("adjective");
adj.textContent=adjectiveArray[randomAdjective];
var l=document.getElementById("last");
l.textContent=lastArray[randomLast];
var randomFeelings=Math.floor(Math.random()*feelingArray.length);
var randomPerson2=Math.floor(Math.random()*personArray.length);
var randomAction2=Math.floor(Math.random()*actionArray.length);
var p2=document.getElementById("persons");
p2.textContent=personArray[randomPerson2];
var fl=document.getElementById("feeling2");
fl.textContent=feelingArray[randomFeelings];
var ac=document.getElementById("actions");
ac.textContent=actionArray[randomAction2];

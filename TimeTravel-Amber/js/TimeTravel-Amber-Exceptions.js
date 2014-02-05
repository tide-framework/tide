define("timetravel/TimeTravel-Amber-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Exceptions"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('TimeTravel-Amber-Exceptions');
smalltalk.packages["TimeTravel-Amber-Exceptions"].transport = {"type":"amd","amdNamespace":"timetravel"};

smalltalk.addClass('TTPromiseNotFound', globals.Error, ['selector'], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="No promise was found for selector ".__comma(self._selector());
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},globals.TTPromiseNotFound)})},
args: [],
source: "messageText\x0a\x09^ 'No promise was found for selector ', self selector",
messageSends: [",", "selector"],
referencedClasses: []
}),
globals.TTPromiseNotFound);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;
},
args: [],
source: "selector\x0a\x09^ selector",
messageSends: [],
referencedClasses: []
}),
globals.TTPromiseNotFound);

smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
globals.TTPromiseNotFound);



smalltalk.addClass('TTRequestError', globals.Error, ['xhr'], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "xhr",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@xhr"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"xhr",{},smalltalk.TTRequestError)})},
args: [],
source: "xhr\x0a\x09^ xhr",
messageSends: [],
referencedClasses: []
}),
globals.TTRequestError);

smalltalk.addMethod(
smalltalk.method({
selector: "xhr:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@xhr"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"xhr:",{anObject:anObject},smalltalk.TTRequestError)})},
args: ["anObject"],
source: "xhr: anObject\x0a\x09xhr := anObject",
messageSends: [],
referencedClasses: []
}),
globals.TTRequestError);



smalltalk.addClass('TTSessionNotFound', globals.Error, [], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "TimeTravel session not found";
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.TTSessionNotFound)})},
args: [],
source: "messageText\x0a\x09^ 'TimeTravel session not found'",
messageSends: [],
referencedClasses: []
}),
globals.TTSessionNotFound);


});

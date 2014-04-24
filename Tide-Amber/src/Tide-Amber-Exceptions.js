define("tide/Tide-Amber-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Exceptions"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Tide-Amber-Exceptions');
smalltalk.packages["Tide-Amber-Exceptions"].transport = {"type":"amd","amdNamespace":"tide"};

smalltalk.addClass('TDPromiseNotFound', globals.Error, ['selector'], 'Tide-Amber-Exceptions');
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
}, function($ctx1) {$ctx1.fill(self,"messageText",{},globals.TDPromiseNotFound)})},
args: [],
source: "messageText\x0a\x09^ 'No promise was found for selector ', self selector",
messageSends: [",", "selector"],
referencedClasses: []
}),
globals.TDPromiseNotFound);

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
globals.TDPromiseNotFound);

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
globals.TDPromiseNotFound);



smalltalk.addClass('TDRequestError', globals.Error, ['xhr'], 'Tide-Amber-Exceptions');
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
}, function($ctx1) {$ctx1.fill(self,"xhr",{},smalltalk.TDRequestError)})},
args: [],
source: "xhr\x0a\x09^ xhr",
messageSends: [],
referencedClasses: []
}),
globals.TDRequestError);

smalltalk.addMethod(
smalltalk.method({
selector: "xhr:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@xhr"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"xhr:",{anObject:anObject},smalltalk.TDRequestError)})},
args: ["anObject"],
source: "xhr: anObject\x0a\x09xhr := anObject",
messageSends: [],
referencedClasses: []
}),
globals.TDRequestError);



smalltalk.addClass('TDServerError', globals.Error, ['code'], 'Tide-Amber-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "code",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@code"];
return $1;
},
args: [],
source: "code\x0a\x09^ code",
messageSends: [],
referencedClasses: []
}),
globals.TDServerError);

smalltalk.addMethod(
smalltalk.method({
selector: "code:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@code"]=aString;
return self},
args: ["aString"],
source: "code: aString \x0a\x09code := aString.",
messageSends: [],
referencedClasses: []
}),
globals.TDServerError);



smalltalk.addClass('TDSessionError', globals.Error, [], 'Tide-Amber-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return "Tide session error";
},
args: [],
source: "messageText\x0a\x09^ 'Tide session error'",
messageSends: [],
referencedClasses: []
}),
globals.TDSessionError);


});

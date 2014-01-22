define("timetravel/TimeTravel-Amber-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Exceptions"], function(smalltalk,nil,_st){
smalltalk.addPackage('TimeTravel-Amber-Exceptions');
smalltalk.packages["TimeTravel-Amber-Exceptions"].transport = {"type":"amd","amdNamespace":"timetravel"};

smalltalk.addClass('TTRequestError', smalltalk.Error, ['xhr'], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "xhr",
category: 'accessing',
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
smalltalk.TTRequestError);

smalltalk.addMethod(
smalltalk.method({
selector: "xhr:",
category: 'accessing',
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
smalltalk.TTRequestError);



smalltalk.addClass('TTSessionNotFound', smalltalk.Error, [], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
category: 'accessing',
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
smalltalk.TTSessionNotFound);


});

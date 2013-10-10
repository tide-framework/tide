smalltalk.addPackage('TimeTravel-Amber-Exceptions', {});
smalltalk.addClass('T2RequestError', smalltalk.Error, ['xhr'], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
"_xhr",
smalltalk.method({
selector: "xhr",
category: 'accessing',
fn: function (){
var self=this;
return self['@xhr'];
return self;},
args: [],
source: "xhr\x0a\x09^ xhr",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestError);

smalltalk.addMethod(
"_xhr_",
smalltalk.method({
selector: "xhr:",
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@xhr']=anObject);
return self;},
args: ["anObject"],
source: "xhr: anObject\x0a\x09xhr := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestError);



smalltalk.addClass('T2SessionNotFound', smalltalk.Error, [], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return "TimeTravel session not found";
return self;},
args: [],
source: "messageText\x0a\x09^ 'TimeTravel session not found'",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2SessionNotFound);




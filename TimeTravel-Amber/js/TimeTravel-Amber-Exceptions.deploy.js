smalltalk.addPackage('TimeTravel-Amber-Exceptions', {});
smalltalk.addClass('T2RequestError', smalltalk.Error, ['xhr'], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
"_xhr",
smalltalk.method({
selector: "xhr",
fn: function (){
var self=this;
return self['@xhr'];
return self;}
}),
smalltalk.T2RequestError);

smalltalk.addMethod(
"_xhr_",
smalltalk.method({
selector: "xhr:",
fn: function (anObject){
var self=this;
(self['@xhr']=anObject);
return self;}
}),
smalltalk.T2RequestError);



smalltalk.addClass('T2SessionNotFound', smalltalk.Error, [], 'TimeTravel-Amber-Exceptions');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return "TimeTravel session not found";
return self;}
}),
smalltalk.T2SessionNotFound);




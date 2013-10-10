smalltalk.addPackage('TimeTravel-Amber-Examples', {});
smalltalk.addClass('T2CounterWidget', smalltalk.Widget, ['counter', 'header'], 'TimeTravel-Amber-Examples');
smalltalk.addMethod(
"_addNewCounter",
smalltalk.method({
selector: "addNewCounter",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_otherCounter", []), "_then_", [(function(proxy){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_on_", [proxy]), "_render", []);})]);
return self;}
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_counter",
smalltalk.method({
selector: "counter",
fn: function (){
var self=this;
return (($receiver = self['@counter']) == nil || $receiver == undefined) ? (function(){return (self['@counter']=smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_on_", ["/counter"]));})() : $receiver;
return self;}
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_counter_",
smalltalk.method({
selector: "counter:",
fn: function (aCounter){
var self=this;
(self['@counter']=aCounter);
return self;}
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_decrease",
smalltalk.method({
selector: "decrease",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_counter", []), "_decrease", []);
smalltalk.send(smalltalk.send(self, "_counter", []), "_then_", [(function(){return smalltalk.send(self, "_update", []);})]);
return self;}
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_increase",
smalltalk.method({
selector: "increase",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_counter", []), "_increase", []);
smalltalk.send(smalltalk.send(self, "_counter", []), "_then_", [(function(){return smalltalk.send(self, "_update", []);})]);
return self;}
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_counter", []), "_connect", []);
smalltalk.send(smalltalk.send(self, "_counter", []), "_then_", [(function(){return smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);})]);
return self;}
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
(self['@header']=smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_count", []), "_asString", [])]));
(function($rec){smalltalk.send($rec, "_with_", ["++"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["--"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
smalltalk.send(html, "_br", []);
(function($rec){smalltalk.send($rec, "_with_", ["add a new counter"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_addNewCounter", []);})]);})(smalltalk.send(html, "_a", []));
return self;}
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_count", []), "_asString", [])]);})]);
return self;}
}),
smalltalk.T2CounterWidget);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_render", []);
return self;}
}),
smalltalk.T2CounterWidget.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aProxy){
var self=this;
return (function($rec){smalltalk.send($rec, "_counter_", [aProxy]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.T2CounterWidget.klass);



smalltalk.addPackage('TimeTravel-Amber-Examples', {});
smalltalk.addClass('T2CounterWidget', smalltalk.Widget, ['counter', 'header'], 'TimeTravel-Amber-Examples');
smalltalk.addMethod(
"_addNewCounter",
smalltalk.method({
selector: "addNewCounter",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_otherCounter", []), "_then_", [(function(proxy){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_on_", [proxy]), "_render", []);})]);
return self;},
args: [],
source: "addNewCounter\x0a\x09self counter otherCounter then: [ :proxy | \x0a\x09\x09(self class on: proxy) render ]",
messageSends: ["then:", "otherCounter", "counter", "render", "on:", "class"],
referencedClasses: []
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_counter",
smalltalk.method({
selector: "counter",
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@counter']) == nil || $receiver == undefined) ? (function(){return (self['@counter']=smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_on_", ["/counter"]));})() : $receiver;
return self;},
args: [],
source: "counter\x0a\x09^ counter ifNil: [ counter := T2Proxy on: '/counter' ]",
messageSends: ["ifNil:", "on:"],
referencedClasses: ["T2Proxy"]
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_counter_",
smalltalk.method({
selector: "counter:",
category: 'accessing',
fn: function (aCounter){
var self=this;
(self['@counter']=aCounter);
return self;},
args: ["aCounter"],
source: "counter: aCounter\x0a\x09counter := aCounter",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_decrease",
smalltalk.method({
selector: "decrease",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_counter", []), "_decrease", []);
smalltalk.send(smalltalk.send(self, "_counter", []), "_then_", [(function(){return smalltalk.send(self, "_update", []);})]);
return self;},
args: [],
source: "decrease\x0a\x09self counter decrease.\x0a\x09self counter then: [ self update ]",
messageSends: ["decrease", "counter", "then:", "update"],
referencedClasses: []
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_increase",
smalltalk.method({
selector: "increase",
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_counter", []), "_increase", []);
smalltalk.send(smalltalk.send(self, "_counter", []), "_then_", [(function(){return smalltalk.send(self, "_update", []);})]);
return self;},
args: [],
source: "increase\x0a\x09self counter increase.\x0a\x09self counter then: [ self update ]",
messageSends: ["increase", "counter", "then:", "update"],
referencedClasses: []
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_counter", []), "_connect", []);
smalltalk.send(smalltalk.send(self, "_counter", []), "_then_", [(function(){return smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);})]);
return self;},
args: [],
source: "render\x0a\x09self counter connect.\x0a\x09self counter then: [ \x0a\x09\x09self appendToJQuery: 'body' asJQuery ]",
messageSends: ["connect", "counter", "then:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
(self['@header']=smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_count", []), "_asString", [])]));
(function($rec){smalltalk.send($rec, "_with_", ["++"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", ["--"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
smalltalk.send(html, "_br", []);
(function($rec){smalltalk.send($rec, "_with_", ["add a new counter"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_addNewCounter", []);})]);})(smalltalk.send(html, "_a", []));
return self;},
args: ["html"],
source: "renderOn: html\x0a\x09header := html h1 with: self counter count asString.\x0a\x09html button \x0a\x09\x09with: '++';\x0a\x09\x09onClick: [ self increase ].\x0a\x09html button \x0a\x09\x09with: '--';\x0a\x09\x09onClick: [ self decrease ].\x0a\x09html br.\x0a\x09html a\x0a\x09\x09with: 'add a new counter';\x0a\x09\x09onClick: [ self addNewCounter ]",
messageSends: ["with:", "h1", "asString", "count", "counter", "onClick:", "increase", "button", "decrease", "br", "addNewCounter", "a"],
referencedClasses: []
}),
smalltalk.T2CounterWidget);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@header'], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_count", []), "_asString", [])]);})]);
return self;},
args: [],
source: "update\x0a\x09header contents: [ :html |\x0a\x09\x09html with: self counter count asString ]",
messageSends: ["contents:", "with:", "asString", "count", "counter"],
referencedClasses: []
}),
smalltalk.T2CounterWidget);


smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_render", []);
return self;},
args: [],
source: "initialize\x0a\x09self new render",
messageSends: ["render", "new"],
referencedClasses: []
}),
smalltalk.T2CounterWidget.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'not yet classified',
fn: function (aProxy){
var self=this;
return (function($rec){smalltalk.send($rec, "_counter_", [aProxy]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aProxy"],
source: "on: aProxy\x0a\x09^ self new\x0a\x09\x09counter: aProxy;\x0a\x09\x09yourself",
messageSends: ["counter:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.T2CounterWidget.klass);



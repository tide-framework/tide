define("tide/Tide-Amber-Examples", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Tide-Amber-Examples');
smalltalk.packages["Tide-Amber-Examples"].transport = {"type":"amd","amdNamespace":"tide"};

smalltalk.addClass('TDCounterWidget', globals.Widget, ['counter', 'header'], 'Tide-Amber-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "addNewCounter",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._counter())._otherCounter())._then_((function(proxy){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self._class())._on_(proxy))._render();
}, function($ctx2) {$ctx2.fillBlock({proxy:proxy},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addNewCounter",{},smalltalk.TDCounterWidget)})},
args: [],
source: "addNewCounter\x0a\x09self counter otherCounter then: [ :proxy | \x0a\x09\x09(self class on: proxy) render ]",
messageSends: ["then:", "otherCounter", "counter", "render", "on:", "class"],
referencedClasses: []
}),
globals.TDCounterWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "counter",
protocol: 'accessing',
fn: function (){
var self=this;
function $TDProxy(){return smalltalk.TDProxy||(typeof TDProxy=="undefined"?nil:TDProxy)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@counter"];
if(($receiver = $2) == nil || $receiver == null){
self["@counter"]=_st($TDProxy())._on_("/counter");
$1=self["@counter"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"counter",{},smalltalk.TDCounterWidget)})},
args: [],
source: "counter\x0a\x09^ counter ifNil: [ counter := TDProxy on: '/counter' ]",
messageSends: ["ifNil:", "on:"],
referencedClasses: ["TDProxy"]
}),
globals.TDCounterWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "counter:",
protocol: 'accessing',
fn: function (aCounter){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@counter"]=aCounter;
return self}, function($ctx1) {$ctx1.fill(self,"counter:",{aCounter:aCounter},smalltalk.TDCounterWidget)})},
args: ["aCounter"],
source: "counter: aCounter\x0a\x09counter := aCounter",
messageSends: [],
referencedClasses: []
}),
globals.TDCounterWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "decrease",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._counter())._decrease();
_st(self._counter())._then_((function(){
return smalltalk.withContext(function($ctx2) {
return self._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decrease",{},smalltalk.TDCounterWidget)})},
args: [],
source: "decrease\x0a\x09self counter decrease.\x0a\x09self counter then: [ self update ]",
messageSends: ["decrease", "counter", "then:", "update"],
referencedClasses: []
}),
globals.TDCounterWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "increase",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._counter())._increase();
_st(self._counter())._then_((function(){
return smalltalk.withContext(function($ctx2) {
return self._update();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"increase",{},smalltalk.TDCounterWidget)})},
args: [],
source: "increase\x0a\x09self counter increase.\x0a\x09self counter then: [ self update ]",
messageSends: ["increase", "counter", "then:", "update"],
referencedClasses: []
}),
globals.TDCounterWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._counter())._connect();
_st(self._counter())._then_((function(){
return smalltalk.withContext(function($ctx2) {
return self._appendToJQuery_("body"._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.TDCounterWidget)})},
args: [],
source: "render\x0a\x09self counter connect.\x0a\x09self counter then: [ \x0a\x09\x09self appendToJQuery: 'body' asJQuery ]",
messageSends: ["connect", "counter", "then:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.TDCounterWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
self["@header"]=_st(_st(html)._h1())._with_(_st(_st(self._counter())._count())._asString());
$1=_st(html)._button();
_st($1)._with_("++");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._increase();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$3=_st(html)._button();
_st($3)._with_("--");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._decrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(html)._br();
$5=_st(html)._a();
_st($5)._with_("add a new counter");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._addNewCounter();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TDCounterWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09header := html h1 with: self counter count asString.\x0a\x09html button \x0a\x09\x09with: '++';\x0a\x09\x09onClick: [ self increase ].\x0a\x09html button \x0a\x09\x09with: '--';\x0a\x09\x09onClick: [ self decrease ].\x0a\x09html br.\x0a\x09html a\x0a\x09\x09with: 'add a new counter';\x0a\x09\x09onClick: [ self addNewCounter ]",
messageSends: ["with:", "h1", "asString", "count", "counter", "button", "onClick:", "increase", "decrease", "br", "a", "addNewCounter"],
referencedClasses: []
}),
globals.TDCounterWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
protocol: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(_st(self._counter())._count())._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.TDCounterWidget)})},
args: [],
source: "update\x0a\x09header contents: [ :html |\x0a\x09\x09html with: self counter count asString ]",
messageSends: ["contents:", "with:", "asString", "count", "counter"],
referencedClasses: []
}),
globals.TDCounterWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self},
args: [],
source: "initialize\x0a\x09\x22self new render\x22",
messageSends: [],
referencedClasses: []
}),
globals.TDCounterWidget.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'not yet classified',
fn: function (aProxy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._counter_(aProxy);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aProxy:aProxy},smalltalk.TDCounterWidget.klass)})},
args: ["aProxy"],
source: "on: aProxy\x0a\x09^ self new\x0a\x09\x09counter: aProxy;\x0a\x09\x09yourself",
messageSends: ["counter:", "new", "yourself"],
referencedClasses: []
}),
globals.TDCounterWidget.klass);

});

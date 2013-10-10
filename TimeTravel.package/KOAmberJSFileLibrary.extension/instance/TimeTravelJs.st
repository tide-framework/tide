*TimeTravel
TimeTravelJs
	^ 'smalltalk.addPackage(''TimeTravel'', {});
smalltalk.addClass(''TTCounter'', smalltalk.Widget, [''counter'', ''header''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_initialize''),
smalltalk.method({
selector: unescape(''initialize''),
category: ''initialization'',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self[''@counter'']=smalltalk.send((smalltalk.TTPresenter || TTPresenter), "_on_", [unescape("/examples/json-counter")]));
return self;},
args: [],
source: unescape(''initialize%0A%09super%20initialize.%0A%09counter%20%3A%3D%20TTPresenter%20on%3A%20%27/examples/json-counter%27''),
messageSends: ["initialize", "on:"],
referencedClasses: ["TTPresenter"]
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_render''),
smalltalk.method({
selector: unescape(''render''),
category: ''rendering'',
fn: function () {
var self=this;
(function($rec){smalltalk.send($rec, "_connect", []);return smalltalk.send($rec, "_do_", [(function(){return smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);})]);})(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []));
smalltalk.send(smalltalk.send(self, "_counter", []), "_travel", []);
return self;},
args: [],
source: unescape(''render%0A%09self%20counter%20future%0A%09%09connect%3B%0A%09%09do%3A%20%5B%20self%20appendToJQuery%3A%20%27body%27%20asJQuery%20%5D.%0A%09self%20counter%20travel''),
messageSends: ["connect", "do:", "appendToJQuery:", "asJQuery", "future", "counter", "travel"],
referencedClasses: []
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_renderOn_''),
smalltalk.method({
selector: unescape(''renderOn%3A''),
category: ''rendering'',
fn: function (html) {
var self=this;
(self[''@header'']=smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_count", []), "_asString", [])]));
(function($rec){smalltalk.send($rec, "_with_", [unescape("++")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", [unescape("--")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: unescape(''renderOn%3A%20html%0A%09header%20%3A%3D%20html%20h1%20with%3A%20self%20counter%20count%20asString.%0A%09html%20button%20%0A%09%09with%3A%20%27++%27%3B%0A%09%09onClick%3A%20%5B%20self%20increase%20%5D.%0A%09html%20button%20%0A%09%09with%3A%20%27--%27%3B%0A%09%09onClick%3A%20%5B%20self%20decrease%20%5D''),
messageSends: ["with:", "h1", "asString", "count", "counter", "onClick:", "increase", "button", "decrease"],
referencedClasses: []
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_increase''),
smalltalk.method({
selector: unescape(''increase''),
category: ''actions'',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []), "_increase", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []), "_do_", [(function(){return smalltalk.send(self, "_update", []);})]);
smalltalk.send(smalltalk.send(self, "_counter", []), "_travel", []);
return self;},
args: [],
source: unescape(''increase%0A%09self%20counter%20future%20increase.%0A%09self%20counter%20future%20do%3A%20%5B%20self%20update%20%5D.%0A%09self%20counter%20travel''),
messageSends: ["increase", "future", "counter", "do:", "update", "travel"],
referencedClasses: []
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_decrease''),
smalltalk.method({
selector: unescape(''decrease''),
category: ''actions'',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []), "_decrease", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []), "_do_", [(function(){return smalltalk.send(self, "_update", []);})]);
smalltalk.send(smalltalk.send(self, "_counter", []), "_travel", []);
return self;},
args: [],
source: unescape(''decrease%0A%09self%20counter%20future%20decrease.%0A%09self%20counter%20future%20do%3A%20%5B%20self%20update%20%5D.%0A%09self%20counter%20travel''),
messageSends: ["decrease", "future", "counter", "do:", "update", "travel"],
referencedClasses: []
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_update''),
smalltalk.method({
selector: unescape(''update''),
category: ''updating'',
fn: function () {
var self=this;
smalltalk.send(self[''@header''], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_count", []), "_asString", [])]);})]);
return self;},
args: [],
source: unescape(''update%0A%09header%20contents%3A%20%5B%20%3Ahtml%20%7C%0A%09%09html%20with%3A%20self%20counter%20count%20asString%20%5D''),
messageSends: ["contents:", "with:", "asString", "count", "counter"],
referencedClasses: []
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_counter''),
smalltalk.method({
selector: unescape(''counter''),
category: ''accessing'',
fn: function () {
var self=this;
return self[''@counter''];
return self;},
args: [],
source: unescape(''counter%0A%09%5E%20counter''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTCounter);



smalltalk.addClass(''TTResolver'', smalltalk.Object, [''promise''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_promise''),
smalltalk.method({
selector: unescape(''promise''),
category: ''accessing'',
fn: function () {
var self=this;
return self[''@promise''];
return self;},
args: [],
source: unescape(''promise%0A%09%5E%20promise''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_promise_''),
smalltalk.method({
selector: unescape(''promise%3A''),
category: ''accessing'',
fn: function (aPromise) {
var self=this;
(self[''@promise'']=aPromise);
return self;},
args: ["aPromise"],
source: unescape(''promise%3A%20aPromise%0A%09promise%20%3A%3D%20aPromise''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_resolve''),
smalltalk.method({
selector: unescape(''resolve''),
category: ''resolving'',
fn: function () {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape(''resolve%0A%09self%20subclassResponsibility''),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_component''),
smalltalk.method({
selector: unescape(''component''),
category: ''accessing'',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_promise", []), "_component", []);
return self;},
args: [],
source: unescape(''component%0A%09%5E%20self%20promise%20component''),
messageSends: ["component", "promise"],
referencedClasses: []
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_nextTravel''),
smalltalk.method({
selector: unescape(''nextTravel''),
category: ''travelling'',
fn: function () {
var self=this;
(($receiver = smalltalk.send(smalltalk.send(self, "_promise", []), "_next", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_promise", []), "_next", []), "_stepTravel", []);})() : nil;
return self;},
args: [],
source: unescape(''nextTravel%0A%09self%20promise%20next%20ifNotNil%3A%20%5B%20self%20promise%20next%20stepTravel%20%5D''),
messageSends: ["ifNotNil:", "next", "promise", "stepTravel"],
referencedClasses: []
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_stepTravel''),
smalltalk.method({
selector: unescape(''stepTravel''),
category: ''travelling'',
fn: function () {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape(''stepTravel%0A%09self%20subclassResponsibility''),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TTResolver);


smalltalk.addMethod(
unescape(''_on_''),
smalltalk.method({
selector: unescape(''on%3A''),
category: ''instance creation'',
fn: function (aPromise) {
var self=this;
return (function($rec){smalltalk.send($rec, "_promise_", [aPromise]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aPromise"],
source: unescape(''on%3A%20aPromise%0A%09%5E%20self%20new%20%0A%09%09promise%3A%20aPromise%3B%0A%09%09yourself''),
messageSends: ["promise:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TTResolver.klass);


smalltalk.addClass(''TTPromise'', smalltalk.Object, [''futureMaker'', ''next'', ''actionBlock'', ''selector'', ''resolver''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_component''),
smalltalk.method({
selector: unescape(''component''),
category: ''accessing'',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_component", []);
return self;},
args: [],
source: unescape(''component%0A%09%5E%20self%20futureMaker%20component''),
messageSends: ["component", "futureMaker"],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_doesNotUnderstand_''),
smalltalk.method({
selector: unescape(''doesNotUnderstand%3A''),
category: ''error handling'',
fn: function (aMessage) {
var self=this;
((($receiver = smalltalk.send(self, "_isAssigned", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_selector_", [smalltalk.send(aMessage, "_selector", [])]);})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []), "_selector_", [smalltalk.send(aMessage, "_selector", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_selector_", [smalltalk.send(aMessage, "_selector", [])]);}), (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []), "_selector_", [smalltalk.send(aMessage, "_selector", [])]);})]));
return self;},
args: ["aMessage"],
source: unescape(''doesNotUnderstand%3A%20aMessage%0A%09self%20isAssigned%0A%09%09ifFalse%3A%20%5B%20self%20selector%3A%20aMessage%20selector%20%5D%0A%09%09ifTrue%3A%20%5B%20self%20futureMaker%20nextPromise%20selector%3A%20aMessage%20selector%20%5D''),
messageSends: ["ifFalse:ifTrue:", "isAssigned", "selector:", "selector", "nextPromise", "futureMaker"],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_travel''),
smalltalk.method({
selector: unescape(''travel''),
category: ''travelling'',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_travel", []);
return self;},
args: [],
source: unescape(''travel%0A%09self%20futureMaker%20travel''),
messageSends: ["travel", "futureMaker"],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_resolve''),
smalltalk.method({
selector: unescape(''resolve''),
category: ''resolving'',
fn: function () {
var self=this;
((($receiver = smalltalk.send(self, "_isResolved", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_resolveUrl", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_resolveUrl", []);})]));
return self;},
args: [],
source: unescape(''resolve%0A%09self%20isResolved%20ifFalse%3A%20%5B%0A%09%09self%20resolveUrl%20%5D''),
messageSends: ["ifFalse:", "isResolved", "resolveUrl"],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_next''),
smalltalk.method({
selector: unescape(''next''),
category: ''accessing'',
fn: function () {
var self=this;
return self[''@next''];
return self;},
args: [],
source: unescape(''next%0A%09%5E%20next''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_next_''),
smalltalk.method({
selector: unescape(''next%3A''),
category: ''accessing'',
fn: function (aPromise) {
var self=this;
(($receiver = self[''@next'']) == nil || $receiver == undefined) ? (function(){return (self[''@next'']=aPromise);})() : (function(){return smalltalk.send(self[''@next''], "_next_", [aPromise]);})();
return self;},
args: ["aPromise"],
source: unescape(''next%3A%20aPromise%0A%09next%20%0A%09%09ifNil%3A%20%5B%20next%20%3A%3D%20aPromise%20%5D%0A%09%09ifNotNil%3A%20%5B%20next%20next%3A%20aPromise%20%5D''),
messageSends: ["ifNil:ifNotNil:", "next:"],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_connect''),
smalltalk.method({
selector: unescape(''connect''),
category: ''resolving'',
fn: function () {
var self=this;
(self[''@resolver'']=(function($rec){smalltalk.send($rec, "_requestUrl_", [smalltalk.send(smalltalk.send(self, "_component", []), "_path", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TTRequestResolver || TTRequestResolver), "_on_", [self])));
return self;},
args: [],
source: unescape(''connect%0A%09resolver%20%3A%3D%20%28TTRequestResolver%20on%3A%20self%29%0A%09%09requestUrl%3A%20self%20component%20path%3B%0A%09%09yourself''),
messageSends: ["requestUrl:", "path", "component", "yourself", "on:"],
referencedClasses: ["TTRequestResolver"]
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_isResolved''),
smalltalk.method({
selector: unescape(''isResolved''),
category: ''testing'',
fn: function () {
var self=this;
return smalltalk.send(self[''@resolver''], "_notNil", []);
return self;},
args: [],
source: unescape(''isResolved%0A%09%5E%20resolver%20notNil''),
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_resolveAction''),
smalltalk.method({
selector: unescape(''resolveAction''),
category: ''resolving'',
fn: function () {
var self=this;
(($receiver = self[''@actionBlock'']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_error_", ["Unable to resolve promise"]);})() : (function(){return (self[''@resolver'']=(function($rec){smalltalk.send($rec, "_action_", [self[''@actionBlock'']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TTActionResolver || TTActionResolver), "_on_", [self])));})();
return self;},
args: [],
source: unescape(''resolveAction%0A%09actionBlock%20%0A%09%09ifNil%3A%20%5B%20self%20error%3A%20%27Unable%20to%20resolve%20promise%27%20%5D%0A%09%09ifNotNil%3A%20%5B%20resolver%20%3A%3D%20%28TTActionResolver%20on%3A%20self%29%0A%09%09%09action%3A%20actionBlock%3B%0A%09%09%09yourself%20%5D''),
messageSends: ["ifNil:ifNotNil:", "error:", "action:", "yourself", "on:"],
referencedClasses: ["TTActionResolver"]
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_resolveUrl''),
smalltalk.method({
selector: unescape(''resolveUrl''),
category: ''resolving'',
fn: function () {
var self=this;
try{var url=nil;
(url=(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_component", []), "_actions", []), "_at_", [self[''@selector'']])) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: ''stReturn'', selector: ''_resolveUrl'', fn: function(){return smalltalk.send(self, "_resolveAction", [])}})})();})() : $receiver);
(self[''@resolver'']=(function($rec){smalltalk.send($rec, "_requestUrl_", [url]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TTRequestResolver || TTRequestResolver), "_on_", [self])));
return self;
} catch(e) {if(e.name === ''stReturn'' && e.selector === ''_resolveUrl''){return e.fn()} throw(e)}},
args: [],
source: unescape(''resolveUrl%0A%09%7C%20url%20%7C%0A%09url%20%3A%3D%20%28self%20component%20actions%20at%3A%20selector%29%20ifNil%3A%20%5B%20%5E%20self%20resolveAction%20%5D.%0A%09resolver%20%3A%3D%20%28TTRequestResolver%20on%3A%20self%29%0A%09%09requestUrl%3A%20url%3B%0A%09%09yourself''),
messageSends: ["ifNil:", "at:", "actions", "component", "resolveAction", "requestUrl:", "yourself", "on:"],
referencedClasses: ["TTRequestResolver"]
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_futureMaker''),
smalltalk.method({
selector: unescape(''futureMaker''),
category: ''accessing'',
fn: function () {
var self=this;
return self[''@futureMaker''];
return self;},
args: [],
source: unescape(''futureMaker%0A%09%5E%20futureMaker''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_futureMaker_''),
smalltalk.method({
selector: unescape(''futureMaker%3A''),
category: ''accessing'',
fn: function (aFutureMaker) {
var self=this;
(self[''@futureMaker'']=aFutureMaker);
return self;},
args: ["aFutureMaker"],
source: unescape(''futureMaker%3A%20aFutureMaker%0A%09futureMaker%20%3A%3D%20aFutureMaker''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_do_''),
smalltalk.method({
selector: unescape(''do%3A''),
category: ''resolving'',
fn: function (aBlock) {
var self=this;
((($receiver = smalltalk.send(self, "_isAssigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []), "_do_", [aBlock]);})() : (function(){return (self[''@actionBlock'']=aBlock);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []), "_do_", [aBlock]);}), (function(){return (self[''@actionBlock'']=aBlock);})]));
return self;},
args: ["aBlock"],
source: unescape(''do%3A%20aBlock%0A%09self%20isAssigned%0A%09%09ifTrue%3A%20%5B%20self%20futureMaker%20nextPromise%20do%3A%20aBlock%20%5D%0A%09%09ifFalse%3A%20%5B%20actionBlock%20%3A%3D%20aBlock%20%5D''),
messageSends: ["ifTrue:ifFalse:", "isAssigned", "do:", "nextPromise", "futureMaker"],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_isAssigned''),
smalltalk.method({
selector: unescape(''isAssigned''),
category: ''testing'',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_isResolved", []), "_or_", [(function(){return smalltalk.send(smalltalk.send(self[''@actionBlock''], "_notNil", []), "_or_", [(function(){return smalltalk.send(self[''@selector''], "_notNil", []);})]);})]);
return self;},
args: [],
source: unescape(''isAssigned%0A%09%5E%20self%20isResolved%20or%3A%20%5B%0A%09%09actionBlock%20notNil%20or%3A%20%5B%20%0A%09%09%09selector%20notNil%20%5D%5D''),
messageSends: ["or:", "isResolved", "notNil"],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_selector_''),
smalltalk.method({
selector: unescape(''selector%3A''),
category: ''resolving'',
fn: function (aString) {
var self=this;
(self[''@selector'']=aString);
return self;},
args: ["aString"],
source: unescape(''selector%3A%20aString%0A%09selector%20%3A%3D%20aString''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_stepTravel''),
smalltalk.method({
selector: unescape(''stepTravel''),
category: ''travelling'',
fn: function () {
var self=this;
smalltalk.send(self, "_resolve", []);
smalltalk.send(self[''@resolver''], "_stepTravel", []);
return self;},
args: [],
source: unescape(''stepTravel%0A%09self%20resolve.%0A%09resolver%20stepTravel''),
messageSends: ["resolve", "stepTravel"],
referencedClasses: []
}),
smalltalk.TTPromise);


smalltalk.addMethod(
unescape(''_on_''),
smalltalk.method({
selector: unescape(''on%3A''),
category: ''instance creation'',
fn: function (aFutureMaker) {
var self=this;
return (function($rec){smalltalk.send($rec, "_futureMaker_", [aFutureMaker]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aFutureMaker"],
source: unescape(''on%3A%20aFutureMaker%0A%09%5E%20self%20new%0A%09%09futureMaker%3A%20aFutureMaker%3B%0A%09%09yourself''),
messageSends: ["futureMaker:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TTPromise.klass);


smalltalk.addClass(''TTFutureMaker'', smalltalk.Object, [''component'', ''promise''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_component''),
smalltalk.method({
selector: unescape(''component''),
category: ''accessing'',
fn: function () {
var self=this;
return self[''@component''];
return self;},
args: [],
source: unescape(''component%0A%09%5E%20component''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTFutureMaker);

smalltalk.addMethod(
unescape(''_component_''),
smalltalk.method({
selector: unescape(''component%3A''),
category: ''accessing'',
fn: function (aComponent) {
var self=this;
(self[''@component'']=aComponent);
return self;},
args: ["aComponent"],
source: unescape(''component%3A%20aComponent%0A%09component%20%3A%3D%20aComponent''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTFutureMaker);

smalltalk.addMethod(
unescape(''_nextPromise''),
smalltalk.method({
selector: unescape(''nextPromise''),
category: ''promises'',
fn: function () {
var self=this;
var nextPromise=nil;
(nextPromise=smalltalk.send((smalltalk.TTPromise || TTPromise), "_on_", [self]));
(($receiver = self[''@promise'']) == nil || $receiver == undefined) ? (function(){return (self[''@promise'']=nextPromise);})() : (function(){return smalltalk.send(self[''@promise''], "_next_", [nextPromise]);})();
return nextPromise;
return self;},
args: [],
source: unescape(''nextPromise%0A%09%7C%20nextPromise%20%7C%0A%09nextPromise%20%3A%3D%20TTPromise%20on%3A%20self.%0A%09promise%20%0A%09%09ifNil%3A%20%5B%20promise%20%3A%3D%20nextPromise%20%5D%0A%09%09ifNotNil%3A%20%5B%20promise%20next%3A%20nextPromise%20%5D.%0A%09%5E%20nextPromise''),
messageSends: ["on:", "ifNil:ifNotNil:", "next:"],
referencedClasses: ["TTPromise"]
}),
smalltalk.TTFutureMaker);

smalltalk.addMethod(
unescape(''_travel''),
smalltalk.method({
selector: unescape(''travel''),
category: ''travelling'',
fn: function () {
var self=this;
(($receiver = self[''@promise'']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self[''@promise''], "_stepTravel", []);return (self[''@promise'']=nil);})() : nil;
return self;},
args: [],
source: unescape(''travel%0A%09promise%20ifNotNil%3A%20%5B%0A%09%09promise%20stepTravel.%0A%09%09promise%20%3A%3D%20nil%20%5D''),
messageSends: ["ifNotNil:", "stepTravel"],
referencedClasses: []
}),
smalltalk.TTFutureMaker);

smalltalk.addMethod(
unescape(''_reset''),
smalltalk.method({
selector: unescape(''reset''),
category: ''promises'',
fn: function () {
var self=this;
(self[''@promise'']=nil);
return self;},
args: [],
source: unescape(''reset%0A%09promise%20%3A%3D%20nil''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTFutureMaker);


smalltalk.addMethod(
unescape(''_on_''),
smalltalk.method({
selector: unescape(''on%3A''),
category: ''instance creation'',
fn: function (aComponent) {
var self=this;
return (function($rec){smalltalk.send($rec, "_component_", [aComponent]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aComponent"],
source: unescape(''on%3A%20aComponent%0A%09%5E%20self%20new%0A%09%09component%3A%20aComponent%3B%0A%09%09yourself''),
messageSends: ["component:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TTFutureMaker.klass);


smalltalk.addClass(''TTPresenter'', smalltalk.Object, [''path'', ''state'', ''actions'', ''children'', ''futureMaker''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_future''),
smalltalk.method({
selector: unescape(''future''),
category: ''futures'',
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []);
return self;},
args: [],
source: unescape(''future%0A%09%5E%20self%20futureMaker%20nextPromise''),
messageSends: ["nextPromise", "futureMaker"],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_updateFromJson_''),
smalltalk.method({
selector: unescape(''updateFromJson%3A''),
category: ''updating'',
fn: function (json) {
var self=this;
smalltalk.send(smalltalk.send(json, "_state", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self[''@state''], "_at_put_", [key, value]);})]);
smalltalk.send(smalltalk.send(json, "_actions", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self[''@actions''], "_at_put_", [key, value]);})]);
(self[''@children'']=smalltalk.send(smalltalk.send(json, "_children", []), "_collect_", [(function(each){return smalltalk.send(smalltalk.send(self, "_class", []), "_fromJson_", [each]);})]));
return self;},
args: ["json"],
source: unescape(''updateFromJson%3A%20json%0A%09json%20state%20keysAndValuesDo%3A%20%5B%20%3Akey%20%3Avalue%20%7C%0A%09%09state%20at%3A%20key%20put%3A%20value%20%5D.%0A%09json%20actions%20keysAndValuesDo%3A%20%5B%20%3Akey%20%3Avalue%20%7C%0A%09%09actions%20at%3A%20key%20put%3A%20value%20%5D.%0A%09children%20%3A%3D%20json%20children%20collect%3A%20%5B%20%3Aeach%20%7C%0A%09%09self%20class%20fromJson%3A%20each%20%5D''),
messageSends: ["keysAndValuesDo:", "state", "at:put:", "actions", "collect:", "children", "fromJson:", "class"],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_doesNotUnderstand_''),
smalltalk.method({
selector: unescape(''doesNotUnderstand%3A''),
category: ''error handling'',
fn: function (aMessage) {
var self=this;
try{var selector=nil;
(selector=smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asString", []));
(($receiver = smalltalk.send(self[''@state''], "_at_", [selector])) != nil && $receiver != undefined) ? (function(){return (function(){throw({name: ''stReturn'', selector: ''_doesNotUnderstand_'', fn: function(){return smalltalk.send(self[''@state''], "_at_", [selector])}})})();})() : nil;
(($receiver = smalltalk.send(self[''@children''], "_at_", [selector])) != nil && $receiver != undefined) ? (function(){return (function(){throw({name: ''stReturn'', selector: ''_doesNotUnderstand_'', fn: function(){return smalltalk.send(self[''@children''], "_at_", [selector])}})})();})() : nil;
(function(){throw({name: ''stReturn'', selector: ''_doesNotUnderstand_'', fn: function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object)}})})();
return self;
} catch(e) {if(e.name === ''stReturn'' && e.selector === ''_doesNotUnderstand_''){return e.fn()} throw(e)}},
args: ["aMessage"],
source: unescape(''doesNotUnderstand%3A%20aMessage%0A%09%7C%20selector%20%7C%0A%09selector%20%3A%3D%20aMessage%20selector%20asString.%0A%09%28state%20at%3A%20selector%29%20ifNotNil%3A%20%5B%20%5E%20state%20at%3A%20selector%20%5D.%0A%09%28children%20at%3A%20selector%29%20ifNotNil%3A%20%5B%20%5E%20children%20at%3A%20selector%20%5D.%0A%09%5E%20super%20doesNotUnderstand%3A%20aMessage''),
messageSends: ["asString", "selector", "ifNotNil:", "at:", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_futureMaker''),
smalltalk.method({
selector: unescape(''futureMaker''),
category: ''accessing'',
fn: function () {
var self=this;
return (($receiver = self[''@futureMaker'']) == nil || $receiver == undefined) ? (function(){return (self[''@futureMaker'']=smalltalk.send((smalltalk.TTFutureMaker || TTFutureMaker), "_on_", [self]));})() : $receiver;
return self;},
args: [],
source: unescape(''futureMaker%0A%09%5E%20futureMaker%20ifNil%3A%20%5B%20futureMaker%20%3A%3D%20TTFutureMaker%20on%3A%20self%20%5D''),
messageSends: ["ifNil:", "on:"],
referencedClasses: ["TTFutureMaker"]
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_travel''),
smalltalk.method({
selector: unescape(''travel''),
category: ''travelling'',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_travel", []);
return self;},
args: [],
source: unescape(''travel%0A%09self%20futureMaker%20travel''),
messageSends: ["travel", "futureMaker"],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_actions''),
smalltalk.method({
selector: unescape(''actions''),
category: ''accessing'',
fn: function () {
var self=this;
return smalltalk.send(self[''@actions''], "_copy", []);
return self;},
args: [],
source: unescape(''actions%0A%09%5E%20actions%20copy''),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_children''),
smalltalk.method({
selector: unescape(''children''),
category: ''accessing'',
fn: function () {
var self=this;
return smalltalk.send(self[''@children''], "_copy", []);
return self;},
args: [],
source: unescape(''children%0A%09%5E%20children%20copy''),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_initialize''),
smalltalk.method({
selector: unescape(''initialize''),
category: ''initialization'',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self[''@state'']={});
(self[''@actions'']={});
(self[''@children'']=[]);
return self;},
args: [],
source: unescape(''initialize%0A%09super%20initialize.%0A%09%22Primitive%20JS%20object.%20I%20need%20it%20because%20I%27m%20keeping%20JSON%20data%22%0A%09state%20%3A%3D%20%3C%7B%7D%3E.%20%0A%09actions%20%3A%3D%20%3C%7B%7D%3E.%0A%09children%20%3A%3D%20%23%28%29''),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_state''),
smalltalk.method({
selector: unescape(''state''),
category: ''accessing'',
fn: function () {
var self=this;
return smalltalk.send(self[''@state''], "_copy", []);
return self;},
args: [],
source: unescape(''state%0A%09%5E%20state%20copy''),
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_path''),
smalltalk.method({
selector: unescape(''path''),
category: ''accessing'',
fn: function () {
var self=this;
return self[''@path''];
return self;},
args: [],
source: unescape(''path%0A%09%5E%20path''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_path_''),
smalltalk.method({
selector: unescape(''path%3A''),
category: ''accessing'',
fn: function (aString) {
var self=this;
(self[''@path'']=aString);
return self;},
args: ["aString"],
source: unescape(''path%3A%20aString%0A%09path%20%3A%3D%20aString''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTPresenter);


smalltalk.addMethod(
unescape(''_on_''),
smalltalk.method({
selector: unescape(''on%3A''),
category: ''instance creation'',
fn: function (aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_path_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape(''on%3A%20aString%0A%09%5E%20self%20new%20%0A%09%09path%3A%20aString%3B%0A%09%09yourself''),
messageSends: ["path:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TTPresenter.klass);

smalltalk.addMethod(
unescape(''_fromJson_''),
smalltalk.method({
selector: unescape(''fromJson%3A''),
category: ''instance creation'',
fn: function (json) {
var self=this;
return (function($rec){smalltalk.send($rec, "_updateFromJson_", [json]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["json"],
source: unescape(''fromJson%3A%20json%0A%09%5E%20self%20new%0A%09%09updateFromJson%3A%20json%3B%0A%09%09yourself''),
messageSends: ["updateFromJson:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TTPresenter.klass);


smalltalk.addClass(''TTActionResolver'', smalltalk.TTResolver, [''action''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_action''),
smalltalk.method({
selector: unescape(''action''),
category: ''accessing'',
fn: function () {
var self=this;
return self[''@action''];
return self;},
args: [],
source: unescape(''action%0A%09%5E%20action''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTActionResolver);

smalltalk.addMethod(
unescape(''_action_''),
smalltalk.method({
selector: unescape(''action%3A''),
category: ''accessing'',
fn: function (aBlock) {
var self=this;
(self[''@action'']=aBlock);
return self;},
args: ["aBlock"],
source: unescape(''action%3A%20aBlock%0A%09action%20%3A%3D%20aBlock''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTActionResolver);

smalltalk.addMethod(
unescape(''_stepTravel''),
smalltalk.method({
selector: unescape(''stepTravel''),
category: ''travelling'',
fn: function () {
var self=this;
smalltalk.send(self[''@action''], "_value_", [smalltalk.send(self, "_component", [])]);
smalltalk.send(self, "_nextTravel", []);
return self;},
args: [],
source: unescape(''stepTravel%0A%09action%20value%3A%20self%20component.%0A%09self%20nextTravel''),
messageSends: ["value:", "component", "nextTravel"],
referencedClasses: []
}),
smalltalk.TTActionResolver);



smalltalk.addClass(''TTRequestResolver'', smalltalk.TTResolver, [''requestUrl''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_requestUrl''),
smalltalk.method({
selector: unescape(''requestUrl''),
category: ''accessing'',
fn: function () {
var self=this;
return self[''@requestUrl''];
return self;},
args: [],
source: unescape(''requestUrl%0A%09%5E%20requestUrl''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTRequestResolver);

smalltalk.addMethod(
unescape(''_requestUrl_''),
smalltalk.method({
selector: unescape(''requestUrl%3A''),
category: ''accessing'',
fn: function (aString) {
var self=this;
(self[''@requestUrl'']=aString);
return self;},
args: ["aString"],
source: unescape(''requestUrl%3A%20aString%0A%09requestUrl%20%3A%3D%20aString''),
messageSends: [],
referencedClasses: []
}),
smalltalk.TTRequestResolver);

smalltalk.addMethod(
unescape(''_updateComponentWith_''),
smalltalk.method({
selector: unescape(''updateComponentWith%3A''),
category: ''updating'',
fn: function (json) {
var self=this;
smalltalk.send(smalltalk.send(self, "_component", []), "_updateFromJson_", [json]);
return self;},
args: ["json"],
source: unescape(''updateComponentWith%3A%20json%0A%09self%20component%20updateFromJson%3A%20json''),
messageSends: ["updateFromJson:", "component"],
referencedClasses: []
}),
smalltalk.TTRequestResolver);

smalltalk.addMethod(
unescape(''_stepTravel''),
smalltalk.method({
selector: unescape(''stepTravel''),
category: ''travelling'',
fn: function () {
var self=this;
smalltalk.send((typeof jQuery == ''undefined'' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_requestUrl", []), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("success", "__minus_gt", [(function(data){smalltalk.send(self, "_updateComponentWith_", [data]);return smalltalk.send(self, "_nextTravel", []);})])])]);
return self;},
args: [],
source: unescape(''stepTravel%0A%09jQuery%20%0A%09%09ajax%3A%20self%20requestUrl%0A%09%09options%3A%20%23%7B%0A%09%09%09%27dataType%27%20-%3E%20%27json%27.%0A%09%09%09%27success%27%20-%3E%20%5B%20%3Adata%20%7C%0A%09%09%09%09self%20updateComponentWith%3A%20data.%0A%09%09%09%09self%20nextTravel%20%5D%0A%09%09%7D''),
messageSends: ["ajax:options:", "requestUrl", unescape("-%3E"), "updateComponentWith:", "nextTravel"],
referencedClasses: []
}),
smalltalk.TTRequestResolver);



smalltalk.addMethod(
unescape(''_keysAndValuesDo_''),
smalltalk.method({
selector: unescape(''keysAndValuesDo%3A''),
category: ''*TimeTravel'',
fn: function (aBlock) {
var self=this;

		for(var key in self[''@jsObject'']) {
			aBlock._value_value_(key, self[''@jsObject''][key]);
		}
	;
return self;},
args: ["aBlock"],
source: unescape(''keysAndValuesDo%3A%20aBlock%0A%09%3C%0A%09%09for%28var%20key%20in%20self%5B%27@jsObject%27%5D%29%20%7B%0A%09%09%09aBlock._value_value_%28key%2C%20self%5B%27@jsObject%27%5D%5Bkey%5D%29%3B%0A%09%09%7D%0A%09%3E''),
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

'
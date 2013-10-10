*TimeTravel
TimeTraveldeployJs
	^ 'smalltalk.addPackage(''TimeTravel'', {});
smalltalk.addClass(''TTCounter'', smalltalk.Widget, [''counter'', ''header''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_initialize''),
smalltalk.method({
selector: unescape(''initialize''),
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self[''@counter'']=smalltalk.send((smalltalk.TTPresenter || TTPresenter), "_on_", [unescape("/examples/json-counter")]));
return self;}
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_render''),
smalltalk.method({
selector: unescape(''render''),
fn: function () {
var self=this;
(function($rec){smalltalk.send($rec, "_connect", []);return smalltalk.send($rec, "_do_", [(function(){return smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);})]);})(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []));
smalltalk.send(smalltalk.send(self, "_counter", []), "_travel", []);
return self;}
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_renderOn_''),
smalltalk.method({
selector: unescape(''renderOn%3A''),
fn: function (html) {
var self=this;
(self[''@header'']=smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_count", []), "_asString", [])]));
(function($rec){smalltalk.send($rec, "_with_", [unescape("++")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_increase", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_with_", [unescape("--")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_decrease", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_increase''),
smalltalk.method({
selector: unescape(''increase''),
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []), "_increase", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []), "_do_", [(function(){return smalltalk.send(self, "_update", []);})]);
smalltalk.send(smalltalk.send(self, "_counter", []), "_travel", []);
return self;}
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_decrease''),
smalltalk.method({
selector: unescape(''decrease''),
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []), "_decrease", []);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_future", []), "_do_", [(function(){return smalltalk.send(self, "_update", []);})]);
smalltalk.send(smalltalk.send(self, "_counter", []), "_travel", []);
return self;}
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_update''),
smalltalk.method({
selector: unescape(''update''),
fn: function () {
var self=this;
smalltalk.send(self[''@header''], "_contents_", [(function(html){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_counter", []), "_count", []), "_asString", [])]);})]);
return self;}
}),
smalltalk.TTCounter);

smalltalk.addMethod(
unescape(''_counter''),
smalltalk.method({
selector: unescape(''counter''),
fn: function () {
var self=this;
return self[''@counter''];
return self;}
}),
smalltalk.TTCounter);



smalltalk.addClass(''TTResolver'', smalltalk.Object, [''promise''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_promise''),
smalltalk.method({
selector: unescape(''promise''),
fn: function () {
var self=this;
return self[''@promise''];
return self;}
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_promise_''),
smalltalk.method({
selector: unescape(''promise%3A''),
fn: function (aPromise) {
var self=this;
(self[''@promise'']=aPromise);
return self;}
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_resolve''),
smalltalk.method({
selector: unescape(''resolve''),
fn: function () {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_component''),
smalltalk.method({
selector: unescape(''component''),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_promise", []), "_component", []);
return self;}
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_nextTravel''),
smalltalk.method({
selector: unescape(''nextTravel''),
fn: function () {
var self=this;
(($receiver = smalltalk.send(smalltalk.send(self, "_promise", []), "_next", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_promise", []), "_next", []), "_stepTravel", []);})() : nil;
return self;}
}),
smalltalk.TTResolver);

smalltalk.addMethod(
unescape(''_stepTravel''),
smalltalk.method({
selector: unescape(''stepTravel''),
fn: function () {
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.TTResolver);


smalltalk.addMethod(
unescape(''_on_''),
smalltalk.method({
selector: unescape(''on%3A''),
fn: function (aPromise) {
var self=this;
return (function($rec){smalltalk.send($rec, "_promise_", [aPromise]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TTResolver.klass);


smalltalk.addClass(''TTPromise'', smalltalk.Object, [''futureMaker'', ''next'', ''actionBlock'', ''selector'', ''resolver''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_component''),
smalltalk.method({
selector: unescape(''component''),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_component", []);
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_doesNotUnderstand_''),
smalltalk.method({
selector: unescape(''doesNotUnderstand%3A''),
fn: function (aMessage) {
var self=this;
((($receiver = smalltalk.send(self, "_isAssigned", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_selector_", [smalltalk.send(aMessage, "_selector", [])]);})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []), "_selector_", [smalltalk.send(aMessage, "_selector", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self, "_selector_", [smalltalk.send(aMessage, "_selector", [])]);}), (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []), "_selector_", [smalltalk.send(aMessage, "_selector", [])]);})]));
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_travel''),
smalltalk.method({
selector: unescape(''travel''),
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_travel", []);
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_resolve''),
smalltalk.method({
selector: unescape(''resolve''),
fn: function () {
var self=this;
((($receiver = smalltalk.send(self, "_isResolved", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_resolveUrl", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_resolveUrl", []);})]));
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_next''),
smalltalk.method({
selector: unescape(''next''),
fn: function () {
var self=this;
return self[''@next''];
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_next_''),
smalltalk.method({
selector: unescape(''next%3A''),
fn: function (aPromise) {
var self=this;
(($receiver = self[''@next'']) == nil || $receiver == undefined) ? (function(){return (self[''@next'']=aPromise);})() : (function(){return smalltalk.send(self[''@next''], "_next_", [aPromise]);})();
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_connect''),
smalltalk.method({
selector: unescape(''connect''),
fn: function () {
var self=this;
(self[''@resolver'']=(function($rec){smalltalk.send($rec, "_requestUrl_", [smalltalk.send(smalltalk.send(self, "_component", []), "_path", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TTRequestResolver || TTRequestResolver), "_on_", [self])));
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_isResolved''),
smalltalk.method({
selector: unescape(''isResolved''),
fn: function () {
var self=this;
return smalltalk.send(self[''@resolver''], "_notNil", []);
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_resolveAction''),
smalltalk.method({
selector: unescape(''resolveAction''),
fn: function () {
var self=this;
(($receiver = self[''@actionBlock'']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_error_", ["Unable to resolve promise"]);})() : (function(){return (self[''@resolver'']=(function($rec){smalltalk.send($rec, "_action_", [self[''@actionBlock'']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TTActionResolver || TTActionResolver), "_on_", [self])));})();
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_resolveUrl''),
smalltalk.method({
selector: unescape(''resolveUrl''),
fn: function () {
var self=this;
try{var url=nil;
(url=(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_component", []), "_actions", []), "_at_", [self[''@selector'']])) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: ''stReturn'', selector: ''_resolveUrl'', fn: function(){return smalltalk.send(self, "_resolveAction", [])}})})();})() : $receiver);
(self[''@resolver'']=(function($rec){smalltalk.send($rec, "_requestUrl_", [url]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.TTRequestResolver || TTRequestResolver), "_on_", [self])));
return self;
} catch(e) {if(e.name === ''stReturn'' && e.selector === ''_resolveUrl''){return e.fn()} throw(e)}}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_futureMaker''),
smalltalk.method({
selector: unescape(''futureMaker''),
fn: function () {
var self=this;
return self[''@futureMaker''];
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_futureMaker_''),
smalltalk.method({
selector: unescape(''futureMaker%3A''),
fn: function (aFutureMaker) {
var self=this;
(self[''@futureMaker'']=aFutureMaker);
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_do_''),
smalltalk.method({
selector: unescape(''do%3A''),
fn: function (aBlock) {
var self=this;
((($receiver = smalltalk.send(self, "_isAssigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []), "_do_", [aBlock]);})() : (function(){return (self[''@actionBlock'']=aBlock);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []), "_do_", [aBlock]);}), (function(){return (self[''@actionBlock'']=aBlock);})]));
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_isAssigned''),
smalltalk.method({
selector: unescape(''isAssigned''),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_isResolved", []), "_or_", [(function(){return smalltalk.send(smalltalk.send(self[''@actionBlock''], "_notNil", []), "_or_", [(function(){return smalltalk.send(self[''@selector''], "_notNil", []);})]);})]);
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_selector_''),
smalltalk.method({
selector: unescape(''selector%3A''),
fn: function (aString) {
var self=this;
(self[''@selector'']=aString);
return self;}
}),
smalltalk.TTPromise);

smalltalk.addMethod(
unescape(''_stepTravel''),
smalltalk.method({
selector: unescape(''stepTravel''),
fn: function () {
var self=this;
smalltalk.send(self, "_resolve", []);
smalltalk.send(self[''@resolver''], "_stepTravel", []);
return self;}
}),
smalltalk.TTPromise);


smalltalk.addMethod(
unescape(''_on_''),
smalltalk.method({
selector: unescape(''on%3A''),
fn: function (aFutureMaker) {
var self=this;
return (function($rec){smalltalk.send($rec, "_futureMaker_", [aFutureMaker]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TTPromise.klass);


smalltalk.addClass(''TTFutureMaker'', smalltalk.Object, [''component'', ''promise''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_component''),
smalltalk.method({
selector: unescape(''component''),
fn: function () {
var self=this;
return self[''@component''];
return self;}
}),
smalltalk.TTFutureMaker);

smalltalk.addMethod(
unescape(''_component_''),
smalltalk.method({
selector: unescape(''component%3A''),
fn: function (aComponent) {
var self=this;
(self[''@component'']=aComponent);
return self;}
}),
smalltalk.TTFutureMaker);

smalltalk.addMethod(
unescape(''_nextPromise''),
smalltalk.method({
selector: unescape(''nextPromise''),
fn: function () {
var self=this;
var nextPromise=nil;
(nextPromise=smalltalk.send((smalltalk.TTPromise || TTPromise), "_on_", [self]));
(($receiver = self[''@promise'']) == nil || $receiver == undefined) ? (function(){return (self[''@promise'']=nextPromise);})() : (function(){return smalltalk.send(self[''@promise''], "_next_", [nextPromise]);})();
return nextPromise;
return self;}
}),
smalltalk.TTFutureMaker);

smalltalk.addMethod(
unescape(''_travel''),
smalltalk.method({
selector: unescape(''travel''),
fn: function () {
var self=this;
(($receiver = self[''@promise'']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self[''@promise''], "_stepTravel", []);return (self[''@promise'']=nil);})() : nil;
return self;}
}),
smalltalk.TTFutureMaker);

smalltalk.addMethod(
unescape(''_reset''),
smalltalk.method({
selector: unescape(''reset''),
fn: function () {
var self=this;
(self[''@promise'']=nil);
return self;}
}),
smalltalk.TTFutureMaker);


smalltalk.addMethod(
unescape(''_on_''),
smalltalk.method({
selector: unescape(''on%3A''),
fn: function (aComponent) {
var self=this;
return (function($rec){smalltalk.send($rec, "_component_", [aComponent]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TTFutureMaker.klass);


smalltalk.addClass(''TTPresenter'', smalltalk.Object, [''path'', ''state'', ''actions'', ''children'', ''futureMaker''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_future''),
smalltalk.method({
selector: unescape(''future''),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_nextPromise", []);
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_updateFromJson_''),
smalltalk.method({
selector: unescape(''updateFromJson%3A''),
fn: function (json) {
var self=this;
smalltalk.send(smalltalk.send(json, "_state", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self[''@state''], "_at_put_", [key, value]);})]);
smalltalk.send(smalltalk.send(json, "_actions", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self[''@actions''], "_at_put_", [key, value]);})]);
(self[''@children'']=smalltalk.send(smalltalk.send(json, "_children", []), "_collect_", [(function(each){return smalltalk.send(smalltalk.send(self, "_class", []), "_fromJson_", [each]);})]));
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_doesNotUnderstand_''),
smalltalk.method({
selector: unescape(''doesNotUnderstand%3A''),
fn: function (aMessage) {
var self=this;
try{var selector=nil;
(selector=smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asString", []));
(($receiver = smalltalk.send(self[''@state''], "_at_", [selector])) != nil && $receiver != undefined) ? (function(){return (function(){throw({name: ''stReturn'', selector: ''_doesNotUnderstand_'', fn: function(){return smalltalk.send(self[''@state''], "_at_", [selector])}})})();})() : nil;
(($receiver = smalltalk.send(self[''@children''], "_at_", [selector])) != nil && $receiver != undefined) ? (function(){return (function(){throw({name: ''stReturn'', selector: ''_doesNotUnderstand_'', fn: function(){return smalltalk.send(self[''@children''], "_at_", [selector])}})})();})() : nil;
(function(){throw({name: ''stReturn'', selector: ''_doesNotUnderstand_'', fn: function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object)}})})();
return self;
} catch(e) {if(e.name === ''stReturn'' && e.selector === ''_doesNotUnderstand_''){return e.fn()} throw(e)}}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_futureMaker''),
smalltalk.method({
selector: unescape(''futureMaker''),
fn: function () {
var self=this;
return (($receiver = self[''@futureMaker'']) == nil || $receiver == undefined) ? (function(){return (self[''@futureMaker'']=smalltalk.send((smalltalk.TTFutureMaker || TTFutureMaker), "_on_", [self]));})() : $receiver;
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_travel''),
smalltalk.method({
selector: unescape(''travel''),
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self, "_futureMaker", []), "_travel", []);
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_actions''),
smalltalk.method({
selector: unescape(''actions''),
fn: function () {
var self=this;
return smalltalk.send(self[''@actions''], "_copy", []);
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_children''),
smalltalk.method({
selector: unescape(''children''),
fn: function () {
var self=this;
return smalltalk.send(self[''@children''], "_copy", []);
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_initialize''),
smalltalk.method({
selector: unescape(''initialize''),
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self[''@state'']={});
(self[''@actions'']={});
(self[''@children'']=[]);
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_state''),
smalltalk.method({
selector: unescape(''state''),
fn: function () {
var self=this;
return smalltalk.send(self[''@state''], "_copy", []);
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_path''),
smalltalk.method({
selector: unescape(''path''),
fn: function () {
var self=this;
return self[''@path''];
return self;}
}),
smalltalk.TTPresenter);

smalltalk.addMethod(
unescape(''_path_''),
smalltalk.method({
selector: unescape(''path%3A''),
fn: function (aString) {
var self=this;
(self[''@path'']=aString);
return self;}
}),
smalltalk.TTPresenter);


smalltalk.addMethod(
unescape(''_on_''),
smalltalk.method({
selector: unescape(''on%3A''),
fn: function (aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_path_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TTPresenter.klass);

smalltalk.addMethod(
unescape(''_fromJson_''),
smalltalk.method({
selector: unescape(''fromJson%3A''),
fn: function (json) {
var self=this;
return (function($rec){smalltalk.send($rec, "_updateFromJson_", [json]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TTPresenter.klass);


smalltalk.addClass(''TTActionResolver'', smalltalk.TTResolver, [''action''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_action''),
smalltalk.method({
selector: unescape(''action''),
fn: function () {
var self=this;
return self[''@action''];
return self;}
}),
smalltalk.TTActionResolver);

smalltalk.addMethod(
unescape(''_action_''),
smalltalk.method({
selector: unescape(''action%3A''),
fn: function (aBlock) {
var self=this;
(self[''@action'']=aBlock);
return self;}
}),
smalltalk.TTActionResolver);

smalltalk.addMethod(
unescape(''_stepTravel''),
smalltalk.method({
selector: unescape(''stepTravel''),
fn: function () {
var self=this;
smalltalk.send(self[''@action''], "_value_", [smalltalk.send(self, "_component", [])]);
smalltalk.send(self, "_nextTravel", []);
return self;}
}),
smalltalk.TTActionResolver);



smalltalk.addClass(''TTRequestResolver'', smalltalk.TTResolver, [''requestUrl''], ''TimeTravel'');
smalltalk.addMethod(
unescape(''_requestUrl''),
smalltalk.method({
selector: unescape(''requestUrl''),
fn: function () {
var self=this;
return self[''@requestUrl''];
return self;}
}),
smalltalk.TTRequestResolver);

smalltalk.addMethod(
unescape(''_requestUrl_''),
smalltalk.method({
selector: unescape(''requestUrl%3A''),
fn: function (aString) {
var self=this;
(self[''@requestUrl'']=aString);
return self;}
}),
smalltalk.TTRequestResolver);

smalltalk.addMethod(
unescape(''_updateComponentWith_''),
smalltalk.method({
selector: unescape(''updateComponentWith%3A''),
fn: function (json) {
var self=this;
smalltalk.send(smalltalk.send(self, "_component", []), "_updateFromJson_", [json]);
return self;}
}),
smalltalk.TTRequestResolver);

smalltalk.addMethod(
unescape(''_stepTravel''),
smalltalk.method({
selector: unescape(''stepTravel''),
fn: function () {
var self=this;
smalltalk.send((typeof jQuery == ''undefined'' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_requestUrl", []), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("success", "__minus_gt", [(function(data){smalltalk.send(self, "_updateComponentWith_", [data]);return smalltalk.send(self, "_nextTravel", []);})])])]);
return self;}
}),
smalltalk.TTRequestResolver);



smalltalk.addMethod(
unescape(''_keysAndValuesDo_''),
smalltalk.method({
selector: unescape(''keysAndValuesDo%3A''),
fn: function (aBlock) {
var self=this;

		for(var key in self[''@jsObject'']) {
			aBlock._value_value_(key, self[''@jsObject''][key]);
		}
	;
return self;}
}),
smalltalk.JSObjectProxy);

'
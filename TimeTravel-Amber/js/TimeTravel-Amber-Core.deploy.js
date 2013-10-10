smalltalk.addPackage('TimeTravel-Amber-Core', {});
smalltalk.addClass('T2Action', smalltalk.Object, ['promise', 'resolved'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_beResolved",
smalltalk.method({
selector: "beResolved",
fn: function (){
var self=this;
(self['@resolved']=true);
smalltalk.send(smalltalk.send(self, "_promise", []), "_nextTravel", []);
return self;}
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_client",
smalltalk.method({
selector: "client",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_promise", []), "_client", []);
return self;}
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_isResolved",
smalltalk.method({
selector: "isResolved",
fn: function (){
var self=this;
return (($receiver = self['@resolved']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;}
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_promise",
smalltalk.method({
selector: "promise",
fn: function (){
var self=this;
return self['@promise'];
return self;}
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_promise_",
smalltalk.method({
selector: "promise:",
fn: function (aPromise){
var self=this;
(self['@promise']=aPromise);
return self;}
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_resolve",
smalltalk.method({
selector: "resolve",
fn: function (){
var self=this;
smalltalk.send(self, "_beResolved", []);
return self;}
}),
smalltalk.T2Action);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aPromise){
var self=this;
return (function($rec){smalltalk.send($rec, "_promise_", [aPromise]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.T2Action.klass);


smalltalk.addClass('T2CallbackAction', smalltalk.T2Action, ['callback'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_callback",
smalltalk.method({
selector: "callback",
fn: function (){
var self=this;
return self['@callback'];
return self;}
}),
smalltalk.T2CallbackAction);

smalltalk.addMethod(
"_callback_",
smalltalk.method({
selector: "callback:",
fn: function (aBlock){
var self=this;
(self['@callback']=aBlock);
return self;}
}),
smalltalk.T2CallbackAction);

smalltalk.addMethod(
"_resolve",
smalltalk.method({
selector: "resolve",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_client", []), "_promisedValue_", [smalltalk.send(smalltalk.send(self, "_callback", []), "_value_", [smalltalk.send(smalltalk.send(self, "_client", []), "_promisedValue", [])])]);
smalltalk.send(self, "_resolve", [], smalltalk.T2CallbackAction.superclass || nil);
return self;}
}),
smalltalk.T2CallbackAction);



smalltalk.addClass('T2RequestAction', smalltalk.T2Action, ['requestUrl', 'data'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_data",
smalltalk.method({
selector: "data",
fn: function (){
var self=this;
return self['@data'];
return self;}
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_data_",
smalltalk.method({
selector: "data:",
fn: function (json){
var self=this;
(self['@data']=json);
return self;}
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_handleResponse_",
smalltalk.method({
selector: "handleResponse:",
fn: function (json){
var self=this;
smalltalk.send(smalltalk.send(self, "_client", []), "_updateFromJson_", [json]);
return self;}
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_request_",
smalltalk.method({
selector: "request:",
fn: function (aString){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_requestUrl", []), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("arguments", "__minus_gt", [smalltalk.send(self, "_data", [])])])]),smalltalk.send("success", "__minus_gt", [(function(json){smalltalk.send(self, "_handleResponse_", [json]);return smalltalk.send(self, "_beResolved", []);})]),smalltalk.send("error", "__minus_gt", [(function(ex){return ((($receiver = smalltalk.send(smalltalk.send(ex, "_status", []), "__eq", [(408)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_sessionNotFound", []);})() : (function(){return smalltalk.send(self, "_requestError_", [ex]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_sessionNotFound", []);}), (function(){return smalltalk.send(self, "_requestError_", [ex]);})]));})])])]);
return self;}
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_requestError_",
smalltalk.method({
selector: "requestError:",
fn: function (anObject){
var self=this;
(function($rec){smalltalk.send($rec, "_xhr_", [anObject]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.T2RequestError || T2RequestError), "_new", []));
return self;}
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_requestUrl",
smalltalk.method({
selector: "requestUrl",
fn: function (){
var self=this;
return self['@requestUrl'];
return self;}
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_requestUrl_",
smalltalk.method({
selector: "requestUrl:",
fn: function (aString){
var self=this;
(self['@requestUrl']=aString);
return self;}
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_resolve",
smalltalk.method({
selector: "resolve",
fn: function (){
var self=this;
smalltalk.send(self, "_request_", [smalltalk.send(self, "_requestUrl", [])]);
return self;}
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_sessionNotFound",
smalltalk.method({
selector: "sessionNotFound",
fn: function (){
var self=this;
smalltalk.send((smalltalk.T2SessionNotFound || T2SessionNotFound), "_signal", []);
return self;}
}),
smalltalk.T2RequestAction);



smalltalk.addClass('T2ChildAction', smalltalk.T2RequestAction, [], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_handleResponse_",
smalltalk.method({
selector: "handleResponse:",
fn: function (json){
var self=this;
smalltalk.send(smalltalk.send(self, "_client", []), "_promisedValue_", [smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_client_", [smalltalk.send((smalltalk.T2Client || T2Client), "_fromJson_", [json])])]);
return self;}
}),
smalltalk.T2ChildAction);



smalltalk.addClass('T2Client', smalltalk.Object, ['state', 'actions', 'children', 'firstPromise', 'promisedValue', 'path', 'connected'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_actions",
smalltalk.method({
selector: "actions",
fn: function (){
var self=this;
return self['@actions'];
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_children",
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return self['@children'];
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_connect",
smalltalk.method({
selector: "connect",
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_isConnected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_update", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_update", []);})]));
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_flushPromises",
smalltalk.method({
selector: "flushPromises",
fn: function (){
var self=this;
(self['@firstPromise']=nil);
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_future",
smalltalk.method({
selector: "future",
fn: function (){
var self=this;
var promise=nil;
(promise=smalltalk.send((smalltalk.T2Promise || T2Promise), "_on_", [self]));
(($receiver = self['@firstPromise']) == nil || $receiver == undefined) ? (function(){return (self['@firstPromise']=promise);})() : (function(){return smalltalk.send(self['@firstPromise'], "_next_", [promise]);})();
return promise;
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_handleFutureMessage_",
smalltalk.method({
selector: "handleFutureMessage:",
fn: function (aMessage){
var self=this;
var $early={};
try{var selector=nil;
(selector=smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asString", []));
(($receiver = smalltalk.send(self['@state'], "_at_", [selector])) != nil && $receiver != undefined) ? (function(){return (function(){throw $early=[smalltalk.send(self['@state'], "_at_", [selector])]})();})() : nil;
(($receiver = smalltalk.send(self['@actions'], "_at_", [selector])) != nil && $receiver != undefined) ? (function(){return (function(){throw $early=[smalltalk.send(smalltalk.send(self, "_future", []), "_setRequestActionFromMessage_", [aMessage])]})();})() : nil;
(($receiver = smalltalk.send(self['@children'], "_at_", [selector])) != nil && $receiver != undefined) ? (function(){return (function(){throw $early=[smalltalk.send(smalltalk.send(self, "_future", []), "_setChildActionFromMessage_", [aMessage])]})();})() : nil;
return smalltalk.send(self, "_doesNotUnderstand_", [aMessage]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.T2Client.superclass || nil);
(self['@state']={});
(self['@actions']={});
(self['@children']={});
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_isConnected",
smalltalk.method({
selector: "isConnected",
fn: function (){
var self=this;
return (($receiver = self['@connected']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
fn: function () {
    var self = this;
    return self['@path'];
    return self;
}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_path_",
smalltalk.method({
selector: "path:",
fn: function (aString){
var self=this;
(self['@path']=aString);
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_promisedValue",
smalltalk.method({
selector: "promisedValue",
fn: function (){
var self=this;
return self['@promisedValue'];
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_promisedValue_",
smalltalk.method({
selector: "promisedValue:",
fn: function (anObject){
var self=this;
(self['@promisedValue']=anObject);
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
fn: function (){
var self=this;
return self['@state'];
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_then_",
smalltalk.method({
selector: "then:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_future", []), "_then_", [aBlock]);
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
var promise=nil;
(promise=smalltalk.send(self, "_future", []));
smalltalk.send(promise, "_setAction_", [(function($rec){smalltalk.send($rec, "_requestUrl_", [smalltalk.send(self, "_path", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.T2RequestAction || T2RequestAction), "_on_", [promise]))]);
smalltalk.send(smalltalk.send(self, "_future", []), "_then_", [(function(){return (self['@connected']=true);})]);
return self;}
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_updateFromJson_",
smalltalk.method({
selector: "updateFromJson:",
fn: function (json){
var self=this;
(self['@connected']=true);
(($receiver = smalltalk.send(json, "_at_", ["state"])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(json, "_state", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@state'], "_at_put_", [key, value]);})]);})() : nil;
(($receiver = smalltalk.send(json, "_at_", ["actions"])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(json, "_actions", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@actions'], "_at_put_", [key, value]);})]);})() : nil;
(($receiver = smalltalk.send(json, "_at_", ["children"])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(json, "_children", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@children'], "_at_put_", [key, value]);})]);})() : nil;
return self;}
}),
smalltalk.T2Client);


smalltalk.addMethod(
"_fromJson_",
smalltalk.method({
selector: "fromJson:",
fn: function (json) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_updateFromJson_", [json]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.T2Client.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_path_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.T2Client.klass);


smalltalk.addClass('T2Promise', smalltalk.Object, ['previous', 'next', 'client', 'action'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_action",
smalltalk.method({
selector: "action",
fn: function (){
var self=this;
return self['@action'];
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_client",
smalltalk.method({
selector: "client",
fn: function () {
    var self = this;
    return self['@client'];
    return self;
}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_client_",
smalltalk.method({
selector: "client:",
fn: function (aClient) {
    var self = this;
    self['@client'] = aClient;
    return self;
}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_future",
smalltalk.method({
selector: "future",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_client", []), "_future", []);
    return self;
}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_isAssigned",
smalltalk.method({
selector: "isAssigned",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_action", []), "_notNil", []);
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_isResolved",
smalltalk.method({
selector: "isResolved",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isAssigned", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_action", []), "_isResolved", []);})]);
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function () {
    var self = this;
    return self['@next'];
    return self;
}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (aPromise){
var self=this;
(($receiver = self['@next']) == nil || $receiver == undefined) ? (function(){(self['@next']=aPromise);return smalltalk.send(aPromise, "_previous_", [self]);})() : (function(){return smalltalk.send(self['@next'], "_next_", [aPromise]);})();
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_nextTravel",
smalltalk.method({
selector: "nextTravel",
fn: function (){
var self=this;
(($receiver = smalltalk.send(self, "_next", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_client", []), "_flushPromises", []);})() : (function(){return smalltalk.send(smalltalk.send(self, "_next", []), "_stepTravel", []);})();
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
fn: function () {
    var self = this;
    return self['@previous'];
    return self;
}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_previous_",
smalltalk.method({
selector: "previous:",
fn: function (aPromise) {
    var self = this;
    self['@previous'] = aPromise;
    return self;
}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_setAction_",
smalltalk.method({
selector: "setAction:",
fn: function (anAction){
var self=this;
(self['@action']=anAction);
smalltalk.send(self, "_travel", []);
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_setChildActionFromMessage_",
smalltalk.method({
selector: "setChildActionFromMessage:",
fn: function (aMessage){
var self=this;
var url=nil;
var data=nil;
(url=smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_children", []), "_at_", [smalltalk.send(aMessage, "_selector", [])]));
(data=smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [(($receiver = smalltalk.send(aMessage, "_arguments", [])) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver]));
(($receiver = url) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_error_", ["Unable to resolve promise"]);})() : (function(){return smalltalk.send(self, "_setAction_", [(function($rec){smalltalk.send($rec, "_requestUrl_", [url]);smalltalk.send($rec, "_data_", [data]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.T2ChildAction || T2ChildAction), "_on_", [self]))]);})();
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_setRequestActionFromMessage_",
smalltalk.method({
selector: "setRequestActionFromMessage:",
fn: function (aMessage){
var self=this;
var url=nil;
var data=nil;
(url=smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_actions", []), "_at_", [smalltalk.send(aMessage, "_selector", [])]));
(data=smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [(($receiver = smalltalk.send(aMessage, "_arguments", [])) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver]));
(($receiver = url) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_setChildActionFromMessage_", [aMessage]);})() : (function(){return smalltalk.send(self, "_setAction_", [(function($rec){smalltalk.send($rec, "_requestUrl_", [url]);smalltalk.send($rec, "_data_", [data]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.T2RequestAction || T2RequestAction), "_on_", [self]))]);})();
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_stepTravel",
smalltalk.method({
selector: "stepTravel",
fn: function (){
var self=this;
(($receiver = smalltalk.send(self, "_action", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_nextTravel", []);})() : (function(){return smalltalk.send(smalltalk.send(self, "_action", []), "_resolve", []);})();
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_then_",
smalltalk.method({
selector: "then:",
fn: function (aBlock){
var self=this;
((($receiver = smalltalk.send(self, "_isAssigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_future", []), "_then_", [aBlock]);})() : (function(){return smalltalk.send(self, "_setAction_", [smalltalk.send(smalltalk.send((smalltalk.T2CallbackAction || T2CallbackAction), "_on_", [self]), "_callback_", [aBlock])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_future", []), "_then_", [aBlock]);}), (function(){return smalltalk.send(self, "_setAction_", [smalltalk.send(smalltalk.send((smalltalk.T2CallbackAction || T2CallbackAction), "_on_", [self]), "_callback_", [aBlock])]);})]));
return self;}
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_travel",
smalltalk.method({
selector: "travel",
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_previous", []), "_isNil", []), "_or_", [(function(){return smalltalk.send(smalltalk.send(self, "_previous", []), "_isResolved", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_stepTravel", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_stepTravel", []);})]));
return self;}
}),
smalltalk.T2Promise);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aClient) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_client_", [aClient]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
}
}),
smalltalk.T2Promise.klass);


smalltalk.addClass('T2Proxy', smalltalk.Object, ['client'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_xxxClient", []), "_respondsTo_", [smalltalk.send(aMessage, "_selector", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aMessage, "_sendTo_", [smalltalk.send(self, "_xxxClient", [])]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_xxxClient", []), "_handleFutureMessage_", [aMessage]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aMessage, "_sendTo_", [smalltalk.send(self, "_xxxClient", [])]);}), (function(){return smalltalk.send(smalltalk.send(self, "_xxxClient", []), "_handleFutureMessage_", [aMessage]);})]));
return self;}
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
"_inheritedSelectors",
smalltalk.method({
selector: "inheritedSelectors",
fn: function (){
var self=this;
var selectors=nil;
var methods=nil;
(methods=smalltalk.send(self, "_basicAt_", ["inheritedMethods"]));
(selectors=[]);
for(var selector in methods) {selectors.push(selector)};
(selectors=smalltalk.send(selectors, "_reject_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_methodDictionary", []), "_keys", []), "_includes_", [each]);})]));
return selectors;
return self;}
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.T2Proxy.superclass || nil);
smalltalk.send(smalltalk.send(self, "_inheritedSelectors", []), "_do_", [(function(each){return self[each._asSelector()] = undefined;})]);
return self;}
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
"_xxxClient",
smalltalk.method({
selector: "xxxClient",
fn: function (){
var self=this;
return self['@client'];
return self;}
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
"_xxxClient_",
smalltalk.method({
selector: "xxxClient:",
fn: function (aClient){
var self=this;
(self['@client']=aClient);
return self;}
}),
smalltalk.T2Proxy);


smalltalk.addMethod(
"_client_",
smalltalk.method({
selector: "client:",
fn: function (aClient){
var self=this;
return (function($rec){smalltalk.send($rec, "_xxxClient_", [aClient]);return smalltalk.send($rec, "_initialize", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.T2Proxy.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aPath){
var self=this;
return (function($rec){smalltalk.send($rec, "_xxxClient_", [smalltalk.send((smalltalk.T2Client || T2Client), "_on_", [aPath])]);return smalltalk.send($rec, "_initialize", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.T2Proxy.klass);


smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
fn: function (aBlock){
var self=this;

		for(var key in self['@jsObject']) {
			aBlock._value_value_(key, self['@jsObject'][key]);
		}
	;
return self;}
}),
smalltalk.JSObjectProxy);


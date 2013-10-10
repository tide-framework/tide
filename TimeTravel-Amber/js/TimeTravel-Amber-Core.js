smalltalk.addPackage('TimeTravel-Amber-Core', {});
smalltalk.addClass('T2Action', smalltalk.Object, ['promise', 'resolved'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_beResolved",
smalltalk.method({
selector: "beResolved",
category: 'resolving',
fn: function (){
var self=this;
(self['@resolved']=true);
smalltalk.send(smalltalk.send(self, "_promise", []), "_nextTravel", []);
return self;},
args: [],
source: "beResolved\x0a\x09resolved := true.\x0a\x09self promise nextTravel",
messageSends: ["nextTravel", "promise"],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_client",
smalltalk.method({
selector: "client",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_promise", []), "_client", []);
return self;},
args: [],
source: "client\x0a\x09^ self promise client",
messageSends: ["client", "promise"],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_isResolved",
smalltalk.method({
selector: "isResolved",
category: 'testing',
fn: function (){
var self=this;
return (($receiver = self['@resolved']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
args: [],
source: "isResolved\x0a\x09^ resolved ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_promise",
smalltalk.method({
selector: "promise",
category: 'accessing',
fn: function (){
var self=this;
return self['@promise'];
return self;},
args: [],
source: "promise\x0a\x09^ promise",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_promise_",
smalltalk.method({
selector: "promise:",
category: 'accessing',
fn: function (aPromise){
var self=this;
(self['@promise']=aPromise);
return self;},
args: ["aPromise"],
source: "promise: aPromise\x0a\x09promise := aPromise",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
"_resolve",
smalltalk.method({
selector: "resolve",
category: 'resolving',
fn: function (){
var self=this;
smalltalk.send(self, "_beResolved", []);
return self;},
args: [],
source: "resolve\x0a\x09self beResolved",
messageSends: ["beResolved"],
referencedClasses: []
}),
smalltalk.T2Action);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aPromise){
var self=this;
return (function($rec){smalltalk.send($rec, "_promise_", [aPromise]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aPromise"],
source: "on: aPromise\x0a\x09^ self new \x0a\x09\x09promise: aPromise; \x0a\x09\x09yourself",
messageSends: ["promise:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.T2Action.klass);


smalltalk.addClass('T2CallbackAction', smalltalk.T2Action, ['callback'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_callback",
smalltalk.method({
selector: "callback",
category: 'accessing',
fn: function (){
var self=this;
return self['@callback'];
return self;},
args: [],
source: "callback\x0a\x09^ callback",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2CallbackAction);

smalltalk.addMethod(
"_callback_",
smalltalk.method({
selector: "callback:",
category: 'accessing',
fn: function (aBlock){
var self=this;
(self['@callback']=aBlock);
return self;},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2CallbackAction);

smalltalk.addMethod(
"_resolve",
smalltalk.method({
selector: "resolve",
category: 'resolving',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_client", []), "_promisedValue_", [smalltalk.send(smalltalk.send(self, "_callback", []), "_value_", [smalltalk.send(smalltalk.send(self, "_client", []), "_promisedValue", [])])]);
smalltalk.send(self, "_resolve", [], smalltalk.T2CallbackAction.superclass || nil);
return self;},
args: [],
source: "resolve\x0a\x09self client promisedValue: (self callback value: self client promisedValue).\x0a\x09super resolve",
messageSends: ["promisedValue:", "client", "value:", "callback", "promisedValue", "resolve"],
referencedClasses: []
}),
smalltalk.T2CallbackAction);



smalltalk.addClass('T2RequestAction', smalltalk.T2Action, ['requestUrl', 'data'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_data",
smalltalk.method({
selector: "data",
category: 'accessing',
fn: function (){
var self=this;
return self['@data'];
return self;},
args: [],
source: "data\x0a\x09^ data",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_data_",
smalltalk.method({
selector: "data:",
category: 'accessing',
fn: function (json){
var self=this;
(self['@data']=json);
return self;},
args: ["json"],
source: "data: json\x0a\x09data := json",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_handleResponse_",
smalltalk.method({
selector: "handleResponse:",
category: 'resolving',
fn: function (json){
var self=this;
smalltalk.send(smalltalk.send(self, "_client", []), "_updateFromJson_", [json]);
return self;},
args: ["json"],
source: "handleResponse: json\x0a\x09self client updateFromJson: json",
messageSends: ["updateFromJson:", "client"],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_request_",
smalltalk.method({
selector: "request:",
category: 'resolving',
fn: function (aString){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_requestUrl", []), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("dataType", "__minus_gt", ["json"]),smalltalk.send("data", "__minus_gt", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("arguments", "__minus_gt", [smalltalk.send(self, "_data", [])])])]),smalltalk.send("success", "__minus_gt", [(function(json){smalltalk.send(self, "_handleResponse_", [json]);return smalltalk.send(self, "_beResolved", []);})]),smalltalk.send("error", "__minus_gt", [(function(ex){return ((($receiver = smalltalk.send(smalltalk.send(ex, "_status", []), "__eq", [(408)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_sessionNotFound", []);})() : (function(){return smalltalk.send(self, "_requestError_", [ex]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_sessionNotFound", []);}), (function(){return smalltalk.send(self, "_requestError_", [ex]);})]));})])])]);
return self;},
args: ["aString"],
source: "request: aString\x0a\x09jQuery \x0a\x09\x09ajax: self requestUrl\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'POST'.\x0a\x09\x09\x09'dataType' -> 'json'.\x0a\x09\x09\x09'data' -> #{ 'arguments' -> self data }.\x0a\x09\x09\x09'success' -> [ :json |\x0a\x09\x09\x09\x09self handleResponse: json.\x0a\x09\x09\x09\x09self beResolved ].\x0a\x09\x09\x09'error' -> [ :ex |\x0a\x09\x09\x09\x09ex status = 408 \x0a\x09\x09\x09\x09\x09ifTrue: [ self sessionNotFound ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self requestError: ex ] ]\x0a\x09\x09}",
messageSends: ["ajax:options:", "requestUrl", "->", "data", "handleResponse:", "beResolved", "ifTrue:ifFalse:", "=", "status", "sessionNotFound", "requestError:"],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_requestError_",
smalltalk.method({
selector: "requestError:",
category: 'error handling',
fn: function (anObject){
var self=this;
(function($rec){smalltalk.send($rec, "_xhr_", [anObject]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.T2RequestError || T2RequestError), "_new", []));
return self;},
args: ["anObject"],
source: "requestError: anObject\x0a\x09T2RequestError new\x0a\x09\x09xhr: anObject;\x0a\x09\x09signal",
messageSends: ["xhr:", "signal", "new"],
referencedClasses: ["T2RequestError"]
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_requestUrl",
smalltalk.method({
selector: "requestUrl",
category: 'accessing',
fn: function (){
var self=this;
return self['@requestUrl'];
return self;},
args: [],
source: "requestUrl\x0a\x09^ requestUrl",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_requestUrl_",
smalltalk.method({
selector: "requestUrl:",
category: 'accessing',
fn: function (aString){
var self=this;
(self['@requestUrl']=aString);
return self;},
args: ["aString"],
source: "requestUrl: aString\x0a\x09requestUrl := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_resolve",
smalltalk.method({
selector: "resolve",
category: 'resolving',
fn: function (){
var self=this;
smalltalk.send(self, "_request_", [smalltalk.send(self, "_requestUrl", [])]);
return self;},
args: [],
source: "resolve\x0a\x09self request: self requestUrl",
messageSends: ["request:", "requestUrl"],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
"_sessionNotFound",
smalltalk.method({
selector: "sessionNotFound",
category: 'error handling',
fn: function (){
var self=this;
smalltalk.send((smalltalk.T2SessionNotFound || T2SessionNotFound), "_signal", []);
return self;},
args: [],
source: "sessionNotFound\x0a\x09T2SessionNotFound signal",
messageSends: ["signal"],
referencedClasses: ["T2SessionNotFound"]
}),
smalltalk.T2RequestAction);



smalltalk.addClass('T2ChildAction', smalltalk.T2RequestAction, [], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_handleResponse_",
smalltalk.method({
selector: "handleResponse:",
category: 'resolving',
fn: function (json){
var self=this;
smalltalk.send(smalltalk.send(self, "_client", []), "_promisedValue_", [smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_client_", [smalltalk.send((smalltalk.T2Client || T2Client), "_fromJson_", [json])])]);
return self;},
args: ["json"],
source: "handleResponse: json\x0a\x09self client promisedValue: (T2Proxy client: (T2Client fromJson: json))",
messageSends: ["promisedValue:", "client", "client:", "fromJson:"],
referencedClasses: ["T2Proxy", "T2Client"]
}),
smalltalk.T2ChildAction);



smalltalk.addClass('T2Client', smalltalk.Object, ['state', 'actions', 'children', 'firstPromise', 'promisedValue', 'path', 'connected'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_actions",
smalltalk.method({
selector: "actions",
category: 'accessing',
fn: function (){
var self=this;
return self['@actions'];
return self;},
args: [],
source: "actions\x0a\x09^ actions",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_children",
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return self['@children'];
return self;},
args: [],
source: "children\x0a\x09^ children",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_connect",
smalltalk.method({
selector: "connect",
category: 'initialization',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_isConnected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_update", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_update", []);})]));
return self;},
args: [],
source: "connect\x0a\x09self isConnected ifFalse: [ self update ]",
messageSends: ["ifFalse:", "isConnected", "update"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_flushPromises",
smalltalk.method({
selector: "flushPromises",
category: 'accessing',
fn: function (){
var self=this;
(self['@firstPromise']=nil);
return self;},
args: [],
source: "flushPromises\x0a\x09firstPromise := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_future",
smalltalk.method({
selector: "future",
category: 'accessing',
fn: function (){
var self=this;
var promise=nil;
(promise=smalltalk.send((smalltalk.T2Promise || T2Promise), "_on_", [self]));
(($receiver = self['@firstPromise']) == nil || $receiver == undefined) ? (function(){return (self['@firstPromise']=promise);})() : (function(){return smalltalk.send(self['@firstPromise'], "_next_", [promise]);})();
return promise;
return self;},
args: [],
source: "future\x0a\x09| promise |\x0a\x0a\x09promise := T2Promise on: self.\x0a\x0a\x09firstPromise \x0a\x09\x09ifNil: [ firstPromise := promise ]\x0a\x09\x09ifNotNil: [ firstPromise next: promise ].\x0a\x0a\x09^ promise",
messageSends: ["on:", "ifNil:ifNotNil:", "next:"],
referencedClasses: ["T2Promise"]
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_handleFutureMessage_",
smalltalk.method({
selector: "handleFutureMessage:",
category: 'forwarding',
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
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aMessage"],
source: "handleFutureMessage: aMessage\x0a\x09| selector |\x0a\x09selector := aMessage selector asString.\x0a\x09\x0a\x09(state at: selector) \x0a\x09\x09ifNotNil: [ ^ state at: selector ].\x0a\x0a\x09(actions at: selector) \x0a\x09\x09ifNotNil: [ ^ self future setRequestActionFromMessage: aMessage ].\x0a\x0a\x09(children at: selector) \x0a\x09\x09ifNotNil: [ ^ self future setChildActionFromMessage: aMessage ].\x0a\x0a\x09^ self doesNotUnderstand: aMessage",
messageSends: ["asString", "selector", "ifNotNil:", "at:", "setRequestActionFromMessage:", "future", "setChildActionFromMessage:", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.T2Client.superclass || nil);
(self['@state']={});
(self['@actions']={});
(self['@children']={});
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22Primitive JS object. I need it because I'm keeping JSON data\x22\x0a\x09state := <{}>. \x0a\x09actions := <{}>.\x0a\x09children := <{}>",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_isConnected",
smalltalk.method({
selector: "isConnected",
category: 'testing',
fn: function (){
var self=this;
return (($receiver = self['@connected']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;},
args: [],
source: "isConnected\x0a\x09^ connected ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@path'];
    return self;
},
args: [],
source: "path\x0a\x09^ path",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_path_",
smalltalk.method({
selector: "path:",
category: 'accessing',
fn: function (aString){
var self=this;
(self['@path']=aString);
return self;},
args: ["aString"],
source: "path: aString\x0a\x09path := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_promisedValue",
smalltalk.method({
selector: "promisedValue",
category: 'accessing',
fn: function (){
var self=this;
return self['@promisedValue'];
return self;},
args: [],
source: "promisedValue\x0a\x09^ promisedValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_promisedValue_",
smalltalk.method({
selector: "promisedValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@promisedValue']=anObject);
return self;},
args: ["anObject"],
source: "promisedValue: anObject\x0a\x09promisedValue := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
category: 'accessing',
fn: function (){
var self=this;
return self['@state'];
return self;},
args: [],
source: "state\x0a\x09^ state",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_then_",
smalltalk.method({
selector: "then:",
category: 'forwarding',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_future", []), "_then_", [aBlock]);
return self;},
args: ["aBlock"],
source: "then: aBlock\x0a\x09self future then: aBlock",
messageSends: ["then:", "future"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_update",
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
var promise=nil;
(promise=smalltalk.send(self, "_future", []));
smalltalk.send(promise, "_setAction_", [(function($rec){smalltalk.send($rec, "_requestUrl_", [smalltalk.send(self, "_path", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.T2RequestAction || T2RequestAction), "_on_", [promise]))]);
smalltalk.send(smalltalk.send(self, "_future", []), "_then_", [(function(){return (self['@connected']=true);})]);
return self;},
args: [],
source: "update\x0a\x09| promise |\x0a\x09promise := self future.\x0a\x09promise setAction: ((T2RequestAction on: promise)\x0a\x09\x09requestUrl: self path;\x0a\x09\x09yourself).\x0a\x09self future then: [ connected := true ]",
messageSends: ["future", "setAction:", "requestUrl:", "path", "yourself", "on:", "then:"],
referencedClasses: ["T2RequestAction"]
}),
smalltalk.T2Client);

smalltalk.addMethod(
"_updateFromJson_",
smalltalk.method({
selector: "updateFromJson:",
category: 'updating',
fn: function (json){
var self=this;
(self['@connected']=true);
(($receiver = smalltalk.send(json, "_at_", ["state"])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(json, "_state", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@state'], "_at_put_", [key, value]);})]);})() : nil;
(($receiver = smalltalk.send(json, "_at_", ["actions"])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(json, "_actions", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@actions'], "_at_put_", [key, value]);})]);})() : nil;
(($receiver = smalltalk.send(json, "_at_", ["children"])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(json, "_children", []), "_keysAndValuesDo_", [(function(key, value){return smalltalk.send(self['@children'], "_at_put_", [key, value]);})]);})() : nil;
return self;},
args: ["json"],
source: "updateFromJson: json\x0a\x09connected := true.\x0a\x09\x0a\x09(json at: 'state') ifNotNil: [\x0a\x09\x09json state keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09state at: key put: value ] ].\x0a\x09(json at: 'actions') ifNotNil: [\x0a\x09\x09json actions keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09actions at: key put: value ] ].\x0a\x09(json at: 'children') ifNotNil: [\x0a\x09\x09json children keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09children at: key put: value ] ]",
messageSends: ["ifNotNil:", "at:", "keysAndValuesDo:", "state", "at:put:", "actions", "children"],
referencedClasses: []
}),
smalltalk.T2Client);


smalltalk.addMethod(
"_fromJson_",
smalltalk.method({
selector: "fromJson:",
category: 'instance creation',
fn: function (json) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_updateFromJson_", [json]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["json"],
source: "fromJson: json\x0a\x09^ self new\x0a\x09\x09updateFromJson: json;\x0a\x09\x09yourself",
messageSends: ["updateFromJson:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.T2Client.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_path_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: "on: aString\x0a\x09^ self new\x0a\x09\x09path: aString;\x0a\x09\x09yourself",
messageSends: ["path:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.T2Client.klass);


smalltalk.addClass('T2Promise', smalltalk.Object, ['previous', 'next', 'client', 'action'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_action",
smalltalk.method({
selector: "action",
category: 'accessing',
fn: function (){
var self=this;
return self['@action'];
return self;},
args: [],
source: "action\x0a\x09^ action",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_client",
smalltalk.method({
selector: "client",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@client'];
    return self;
},
args: [],
source: "client\x0a\x09^ client",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_client_",
smalltalk.method({
selector: "client:",
category: 'accessing',
fn: function (aClient) {
    var self = this;
    self['@client'] = aClient;
    return self;
},
args: ["aClient"],
source: "client: aClient\x0a\x09client := aClient",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_future",
smalltalk.method({
selector: "future",
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_client", []), "_future", []);
    return self;
},
args: [],
source: "future\x0a\x09^ self client future",
messageSends: ["future", "client"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_isAssigned",
smalltalk.method({
selector: "isAssigned",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_action", []), "_notNil", []);
return self;},
args: [],
source: "isAssigned\x0a\x09^ self action notNil",
messageSends: ["notNil", "action"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_isResolved",
smalltalk.method({
selector: "isResolved",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_isAssigned", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_action", []), "_isResolved", []);})]);
return self;},
args: [],
source: "isResolved\x0a\x09^ self isAssigned and: [ self action isResolved ]",
messageSends: ["and:", "isAssigned", "isResolved", "action"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@next'];
    return self;
},
args: [],
source: "next\x0a\x09^ next",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'accessing',
fn: function (aPromise){
var self=this;
(($receiver = self['@next']) == nil || $receiver == undefined) ? (function(){(self['@next']=aPromise);return smalltalk.send(aPromise, "_previous_", [self]);})() : (function(){return smalltalk.send(self['@next'], "_next_", [aPromise]);})();
return self;},
args: ["aPromise"],
source: "next: aPromise\x0a\x09next \x0a\x09\x09ifNil: [ \x0a\x09\x09\x09next := aPromise. \x0a\x09\x09\x09aPromise previous: self ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09next next: aPromise ]",
messageSends: ["ifNil:ifNotNil:", "previous:", "next:"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_nextTravel",
smalltalk.method({
selector: "nextTravel",
category: 'traveling',
fn: function (){
var self=this;
(($receiver = smalltalk.send(self, "_next", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_client", []), "_flushPromises", []);})() : (function(){return smalltalk.send(smalltalk.send(self, "_next", []), "_stepTravel", []);})();
return self;},
args: [],
source: "nextTravel\x0a\x09self next \x0a\x09\x09ifNil: [ self client flushPromises ]\x0a\x09\x09ifNotNil: [ self next stepTravel ]",
messageSends: ["ifNil:ifNotNil:", "next", "flushPromises", "client", "stepTravel"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_previous",
smalltalk.method({
selector: "previous",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@previous'];
    return self;
},
args: [],
source: "previous\x0a\x09^ previous",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_previous_",
smalltalk.method({
selector: "previous:",
category: 'accessing',
fn: function (aPromise) {
    var self = this;
    self['@previous'] = aPromise;
    return self;
},
args: ["aPromise"],
source: "previous: aPromise\x0a\x09previous := aPromise",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_setAction_",
smalltalk.method({
selector: "setAction:",
category: 'accessing',
fn: function (anAction){
var self=this;
(self['@action']=anAction);
smalltalk.send(self, "_travel", []);
return self;},
args: ["anAction"],
source: "setAction: anAction\x0a\x09action := anAction.\x0a\x09self travel",
messageSends: ["travel"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_setChildActionFromMessage_",
smalltalk.method({
selector: "setChildActionFromMessage:",
category: 'actions',
fn: function (aMessage){
var self=this;
var url=nil;
var data=nil;
(url=smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_children", []), "_at_", [smalltalk.send(aMessage, "_selector", [])]));
(data=smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [(($receiver = smalltalk.send(aMessage, "_arguments", [])) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver]));
(($receiver = url) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_error_", ["Unable to resolve promise"]);})() : (function(){return smalltalk.send(self, "_setAction_", [(function($rec){smalltalk.send($rec, "_requestUrl_", [url]);smalltalk.send($rec, "_data_", [data]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.T2ChildAction || T2ChildAction), "_on_", [self]))]);})();
return self;},
args: ["aMessage"],
source: "setChildActionFromMessage: aMessage\x0a\x09| url data |\x0a\x09url := self client children at: aMessage selector.\x0a\x09data := JSON stringify: (aMessage arguments ifNil: [ #() ]).\x0a\x09url \x0a\x09\x09ifNil: [ self error: 'Unable to resolve promise' ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09self setAction: ((T2ChildAction on: self)\x0a\x09\x09\x09\x09requestUrl: url;\x0a\x09\x09\x09\x09data: data;\x0a\x09\x09\x09\x09yourself) ]",
messageSends: ["at:", "children", "client", "selector", "stringify:", "ifNil:", "arguments", "ifNil:ifNotNil:", "error:", "setAction:", "requestUrl:", "data:", "yourself", "on:"],
referencedClasses: ["JSON", "T2ChildAction"]
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_setRequestActionFromMessage_",
smalltalk.method({
selector: "setRequestActionFromMessage:",
category: 'actions',
fn: function (aMessage){
var self=this;
var url=nil;
var data=nil;
(url=smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_actions", []), "_at_", [smalltalk.send(aMessage, "_selector", [])]));
(data=smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [(($receiver = smalltalk.send(aMessage, "_arguments", [])) == nil || $receiver == undefined) ? (function(){return [];})() : $receiver]));
(($receiver = url) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_setChildActionFromMessage_", [aMessage]);})() : (function(){return smalltalk.send(self, "_setAction_", [(function($rec){smalltalk.send($rec, "_requestUrl_", [url]);smalltalk.send($rec, "_data_", [data]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.T2RequestAction || T2RequestAction), "_on_", [self]))]);})();
return self;},
args: ["aMessage"],
source: "setRequestActionFromMessage: aMessage\x0a\x09| url data |\x0a\x09url := self client actions at: aMessage selector.\x0a\x09data := JSON stringify: (aMessage arguments ifNil: [ #() ]).\x0a\x09url \x0a\x09\x09ifNil: [ self setChildActionFromMessage: aMessage ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09self setAction: ((T2RequestAction on: self)\x0a\x09\x09\x09\x09requestUrl: url;\x0a\x09\x09\x09\x09data: data;\x0a\x09\x09\x09\x09yourself) ]",
messageSends: ["at:", "actions", "client", "selector", "stringify:", "ifNil:", "arguments", "ifNil:ifNotNil:", "setChildActionFromMessage:", "setAction:", "requestUrl:", "data:", "yourself", "on:"],
referencedClasses: ["JSON", "T2RequestAction"]
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_stepTravel",
smalltalk.method({
selector: "stepTravel",
category: 'traveling',
fn: function (){
var self=this;
(($receiver = smalltalk.send(self, "_action", [])) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_nextTravel", []);})() : (function(){return smalltalk.send(smalltalk.send(self, "_action", []), "_resolve", []);})();
return self;},
args: [],
source: "stepTravel\x0a\x09self action \x0a\x09\x09ifNil: [ self nextTravel ]\x0a\x09\x09ifNotNil: [ self action resolve ]",
messageSends: ["ifNil:ifNotNil:", "action", "nextTravel", "resolve"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_then_",
smalltalk.method({
selector: "then:",
category: 'actions',
fn: function (aBlock){
var self=this;
((($receiver = smalltalk.send(self, "_isAssigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_future", []), "_then_", [aBlock]);})() : (function(){return smalltalk.send(self, "_setAction_", [smalltalk.send(smalltalk.send((smalltalk.T2CallbackAction || T2CallbackAction), "_on_", [self]), "_callback_", [aBlock])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_future", []), "_then_", [aBlock]);}), (function(){return smalltalk.send(self, "_setAction_", [smalltalk.send(smalltalk.send((smalltalk.T2CallbackAction || T2CallbackAction), "_on_", [self]), "_callback_", [aBlock])]);})]));
return self;},
args: ["aBlock"],
source: "then: aBlock\x0a\x09self isAssigned\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self client future then: aBlock ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self setAction: ((T2CallbackAction on: self) callback: aBlock) ]",
messageSends: ["ifTrue:ifFalse:", "isAssigned", "then:", "future", "client", "setAction:", "callback:", "on:"],
referencedClasses: ["T2CallbackAction"]
}),
smalltalk.T2Promise);

smalltalk.addMethod(
"_travel",
smalltalk.method({
selector: "travel",
category: 'traveling',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_previous", []), "_isNil", []), "_or_", [(function(){return smalltalk.send(smalltalk.send(self, "_previous", []), "_isResolved", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_stepTravel", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_stepTravel", []);})]));
return self;},
args: [],
source: "travel\x0a\x09(self previous isNil or: [ self previous isResolved ]) \x0a\x09\x09ifTrue: [ self stepTravel ]",
messageSends: ["ifTrue:", "or:", "isNil", "previous", "isResolved", "stepTravel"],
referencedClasses: []
}),
smalltalk.T2Promise);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aClient) {
    var self = this;
    return function ($rec) {smalltalk.send($rec, "_client_", [aClient]);return smalltalk.send($rec, "_yourself", []);}(smalltalk.send(self, "_new", []));
    return self;
},
args: ["aClient"],
source: "on: aClient\x0a\x09^ self new\x0a\x09\x09client: aClient;\x0a\x09\x09yourself",
messageSends: ["client:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.T2Promise.klass);


smalltalk.addClass('T2Proxy', smalltalk.Object, ['client'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'error handling',
fn: function (aMessage){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(self, "_xxxClient", []), "_respondsTo_", [smalltalk.send(aMessage, "_selector", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aMessage, "_sendTo_", [smalltalk.send(self, "_xxxClient", [])]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_xxxClient", []), "_handleFutureMessage_", [aMessage]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aMessage, "_sendTo_", [smalltalk.send(self, "_xxxClient", [])]);}), (function(){return smalltalk.send(smalltalk.send(self, "_xxxClient", []), "_handleFutureMessage_", [aMessage]);})]));
return self;},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (self xxxClient respondsTo: aMessage selector)\x0a\x09\x09ifTrue: [ aMessage sendTo: self xxxClient ]\x0a\x09\x09ifFalse: [ self xxxClient handleFutureMessage: aMessage ]",
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "xxxClient", "selector", "sendTo:", "handleFutureMessage:"],
referencedClasses: []
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
"_inheritedSelectors",
smalltalk.method({
selector: "inheritedSelectors",
category: 'accessing',
fn: function (){
var self=this;
var selectors=nil;
var methods=nil;
(methods=smalltalk.send(self, "_basicAt_", ["inheritedMethods"]));
(selectors=[]);
for(var selector in methods) {selectors.push(selector)};
(selectors=smalltalk.send(selectors, "_reject_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_methodDictionary", []), "_keys", []), "_includes_", [each]);})]));
return selectors;
return self;},
args: [],
source: "inheritedSelectors\x0a\x09| selectors methods |\x0a\x0a\x09methods := self basicAt: 'inheritedMethods'.\x0a\x09selectors := #().\x0a\x09<for(var selector in methods) {selectors.push(selector)}>.\x0a\x0a\x09selectors := selectors \x0a\x09\x09reject: [ :each | self class methodDictionary keys includes: each ].\x0a\x0a\x09^ selectors",
messageSends: ["basicAt:", "reject:", "includes:", "keys", "methodDictionary", "class"],
referencedClasses: []
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.T2Proxy.superclass || nil);
smalltalk.send(smalltalk.send(self, "_inheritedSelectors", []), "_do_", [(function(each){return self[each._asSelector()] = undefined;})]);
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self inheritedSelectors do: [ :each | <self[each._asSelector()] = undefined> ]",
messageSends: ["initialize", "do:", "inheritedSelectors"],
referencedClasses: []
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
"_xxxClient",
smalltalk.method({
selector: "xxxClient",
category: 'accessing',
fn: function (){
var self=this;
return self['@client'];
return self;},
args: [],
source: "xxxClient\x0a\x09^ client",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
"_xxxClient_",
smalltalk.method({
selector: "xxxClient:",
category: 'accessing',
fn: function (aClient){
var self=this;
(self['@client']=aClient);
return self;},
args: ["aClient"],
source: "xxxClient: aClient\x0a\x09client := aClient",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Proxy);


smalltalk.addMethod(
"_client_",
smalltalk.method({
selector: "client:",
category: 'instance creation',
fn: function (aClient){
var self=this;
return (function($rec){smalltalk.send($rec, "_xxxClient_", [aClient]);return smalltalk.send($rec, "_initialize", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["aClient"],
source: "client: aClient\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aClient\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: aClient;\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "initialize", "basicNew"],
referencedClasses: []
}),
smalltalk.T2Proxy.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aPath){
var self=this;
return (function($rec){smalltalk.send($rec, "_xxxClient_", [smalltalk.send((smalltalk.T2Client || T2Client), "_on_", [aPath])]);return smalltalk.send($rec, "_initialize", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["aPath"],
source: "on: aPath\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aPath\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: (T2Client on: aPath);\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "on:", "initialize", "basicNew"],
referencedClasses: ["T2Client"]
}),
smalltalk.T2Proxy.klass);


smalltalk.addMethod(
"_keysAndValuesDo_",
smalltalk.method({
selector: "keysAndValuesDo:",
category: '*TimeTravel-Amber-Core',
fn: function (aBlock){
var self=this;

		for(var key in self['@jsObject']) {
			aBlock._value_value_(key, self['@jsObject'][key]);
		}
	;
return self;},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09<\x0a\x09\x09for(var key in self['@jsObject']) {\x0a\x09\x09\x09aBlock._value_value_(key, self['@jsObject'][key]);\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);


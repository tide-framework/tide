define("timetravel/TimeTravel-Amber-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('TimeTravel-Amber-Core');
smalltalk.packages["TimeTravel-Amber-Core"].transport = {"type":"amd","amdNamespace":"timetravel"};

smalltalk.addClass('T2Action', smalltalk.Object, ['promise', 'resolved'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "beResolved",
category: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@resolved"]=true;
_st(self._promise())._nextTravel();
return self}, function($ctx1) {$ctx1.fill(self,"beResolved",{},smalltalk.T2Action)})},
args: [],
source: "beResolved\x0a\x09resolved := true.\x0a\x09self promise nextTravel",
messageSends: ["nextTravel", "promise"],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
smalltalk.method({
selector: "client",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._promise())._client();
return $1;
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.T2Action)})},
args: [],
source: "client\x0a\x09^ self promise client",
messageSends: ["client", "promise"],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
smalltalk.method({
selector: "isResolved",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@resolved"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isResolved",{},smalltalk.T2Action)})},
args: [],
source: "isResolved\x0a\x09^ resolved ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
smalltalk.method({
selector: "promise",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@promise"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"promise",{},smalltalk.T2Action)})},
args: [],
source: "promise\x0a\x09^ promise",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
smalltalk.method({
selector: "promise:",
category: 'accessing',
fn: function (aPromise){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@promise"]=aPromise;
return self}, function($ctx1) {$ctx1.fill(self,"promise:",{aPromise:aPromise},smalltalk.T2Action)})},
args: ["aPromise"],
source: "promise: aPromise\x0a\x09promise := aPromise",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Action);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
category: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._beResolved();
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},smalltalk.T2Action)})},
args: [],
source: "resolve\x0a\x09self beResolved",
messageSends: ["beResolved"],
referencedClasses: []
}),
smalltalk.T2Action);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aPromise){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._promise_(aPromise);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPromise:aPromise},smalltalk.T2Action.klass)})},
args: ["aPromise"],
source: "on: aPromise\x0a\x09^ self new \x0a\x09\x09promise: aPromise; \x0a\x09\x09yourself",
messageSends: ["promise:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.T2Action.klass);


smalltalk.addClass('T2CallbackAction', smalltalk.T2Action, ['callback'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@callback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.T2CallbackAction)})},
args: [],
source: "callback\x0a\x09^ callback",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2CallbackAction);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.T2CallbackAction)})},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2CallbackAction);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
category: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._client())._promisedValue_(_st(self._callback())._value_(_st(self._client())._promisedValue()));
smalltalk.T2CallbackAction.superclass.fn.prototype._resolve.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},smalltalk.T2CallbackAction)})},
args: [],
source: "resolve\x0a\x09self client promisedValue: (self callback value: self client promisedValue).\x0a\x09super resolve",
messageSends: ["promisedValue:", "client", "value:", "callback", "promisedValue", "resolve"],
referencedClasses: []
}),
smalltalk.T2CallbackAction);



smalltalk.addClass('T2RequestAction', smalltalk.T2Action, ['requestUrl', 'data'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "data",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@data"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{},smalltalk.T2RequestAction)})},
args: [],
source: "data\x0a\x09^ data",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "data:",
category: 'accessing',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@data"]=json;
return self}, function($ctx1) {$ctx1.fill(self,"data:",{json:json},smalltalk.T2RequestAction)})},
args: ["json"],
source: "data: json\x0a\x09data := json",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "handleResponse:",
category: 'resolving',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._client())._updateFromJson_(json);
return self}, function($ctx1) {$ctx1.fill(self,"handleResponse:",{json:json},smalltalk.T2RequestAction)})},
args: ["json"],
source: "handleResponse: json\x0a\x09self client updateFromJson: json",
messageSends: ["updateFromJson:", "client"],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "request:",
category: 'resolving',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(jQuery)._ajax_options_(self._requestUrl(),smalltalk.HashedCollection._from_(["type".__minus_gt("POST"),"dataType".__minus_gt("json"),"data".__minus_gt(smalltalk.HashedCollection._from_(["arguments".__minus_gt(self._data())])),"success".__minus_gt((function(json){
return smalltalk.withContext(function($ctx2) {
self._handleResponse_(json);
return self._beResolved();
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)})})),"error".__minus_gt((function(ex){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(ex)._status()).__eq((408));
if(smalltalk.assert($1)){
return self._sessionNotFound();
} else {
return self._requestError_(ex);
};
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"request:",{aString:aString},smalltalk.T2RequestAction)})},
args: ["aString"],
source: "request: aString\x0a\x09jQuery \x0a\x09\x09ajax: self requestUrl\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'POST'.\x0a\x09\x09\x09'dataType' -> 'json'.\x0a\x09\x09\x09'data' -> #{ 'arguments' -> self data }.\x0a\x09\x09\x09'success' -> [ :json |\x0a\x09\x09\x09\x09self handleResponse: json.\x0a\x09\x09\x09\x09self beResolved ].\x0a\x09\x09\x09'error' -> [ :ex |\x0a\x09\x09\x09\x09ex status = 408 \x0a\x09\x09\x09\x09\x09ifTrue: [ self sessionNotFound ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self requestError: ex ] ]\x0a\x09\x09}",
messageSends: ["ajax:options:", "requestUrl", "->", "data", "handleResponse:", "beResolved", "ifTrue:ifFalse:", "=", "status", "sessionNotFound", "requestError:"],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "requestError:",
category: 'error handling',
fn: function (anObject){
var self=this;
function $T2RequestError(){return smalltalk.T2RequestError||(typeof T2RequestError=="undefined"?nil:T2RequestError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($T2RequestError())._new();
_st($1)._xhr_(anObject);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"requestError:",{anObject:anObject},smalltalk.T2RequestAction)})},
args: ["anObject"],
source: "requestError: anObject\x0a\x09T2RequestError new\x0a\x09\x09xhr: anObject;\x0a\x09\x09signal",
messageSends: ["xhr:", "new", "signal"],
referencedClasses: ["T2RequestError"]
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "requestUrl",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@requestUrl"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"requestUrl",{},smalltalk.T2RequestAction)})},
args: [],
source: "requestUrl\x0a\x09^ requestUrl",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "requestUrl:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@requestUrl"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"requestUrl:",{aString:aString},smalltalk.T2RequestAction)})},
args: ["aString"],
source: "requestUrl: aString\x0a\x09requestUrl := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
category: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._request_(self._requestUrl());
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},smalltalk.T2RequestAction)})},
args: [],
source: "resolve\x0a\x09self request: self requestUrl",
messageSends: ["request:", "requestUrl"],
referencedClasses: []
}),
smalltalk.T2RequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionNotFound",
category: 'error handling',
fn: function (){
var self=this;
function $T2SessionNotFound(){return smalltalk.T2SessionNotFound||(typeof T2SessionNotFound=="undefined"?nil:T2SessionNotFound)}
return smalltalk.withContext(function($ctx1) { 
_st($T2SessionNotFound())._signal();
return self}, function($ctx1) {$ctx1.fill(self,"sessionNotFound",{},smalltalk.T2RequestAction)})},
args: [],
source: "sessionNotFound\x0a\x09T2SessionNotFound signal",
messageSends: ["signal"],
referencedClasses: ["T2SessionNotFound"]
}),
smalltalk.T2RequestAction);



smalltalk.addClass('T2ChildAction', smalltalk.T2RequestAction, [], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "handleResponse:",
category: 'resolving',
fn: function (json){
var self=this;
function $T2Proxy(){return smalltalk.T2Proxy||(typeof T2Proxy=="undefined"?nil:T2Proxy)}
function $T2Client(){return smalltalk.T2Client||(typeof T2Client=="undefined"?nil:T2Client)}
return smalltalk.withContext(function($ctx1) { 
_st(self._client())._promisedValue_(_st($T2Proxy())._client_(_st($T2Client())._fromJson_(json)));
return self}, function($ctx1) {$ctx1.fill(self,"handleResponse:",{json:json},smalltalk.T2ChildAction)})},
args: ["json"],
source: "handleResponse: json\x0a\x09self client promisedValue: (T2Proxy client: (T2Client fromJson: json))",
messageSends: ["promisedValue:", "client", "client:", "fromJson:"],
referencedClasses: ["T2Proxy", "T2Client"]
}),
smalltalk.T2ChildAction);



smalltalk.addClass('T2Client', smalltalk.Object, ['state', 'actions', 'children', 'firstPromise', 'promisedValue', 'path', 'connected'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "actions",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@actions"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actions",{},smalltalk.T2Client)})},
args: [],
source: "actions\x0a\x09^ actions",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@children"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.T2Client)})},
args: [],
source: "children\x0a\x09^ children",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "connect",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isConnected();
if(! smalltalk.assert($1)){
self._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"connect",{},smalltalk.T2Client)})},
args: [],
source: "connect\x0a\x09self isConnected ifFalse: [ self update ]",
messageSends: ["ifFalse:", "isConnected", "update"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "flushPromises",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@firstPromise"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushPromises",{},smalltalk.T2Client)})},
args: [],
source: "flushPromises\x0a\x09firstPromise := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "future",
category: 'accessing',
fn: function (){
var self=this;
var promise;
function $T2Promise(){return smalltalk.T2Promise||(typeof T2Promise=="undefined"?nil:T2Promise)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
promise=_st($T2Promise())._on_(self);
$1=self["@firstPromise"];
if(($receiver = $1) == nil || $receiver == null){
self["@firstPromise"]=promise;
self["@firstPromise"];
} else {
_st(self["@firstPromise"])._next_(promise);
};
$2=promise;
return $2;
}, function($ctx1) {$ctx1.fill(self,"future",{promise:promise},smalltalk.T2Client)})},
args: [],
source: "future\x0a\x09| promise |\x0a\x0a\x09promise := T2Promise on: self.\x0a\x0a\x09firstPromise \x0a\x09\x09ifNil: [ firstPromise := promise ]\x0a\x09\x09ifNotNil: [ firstPromise next: promise ].\x0a\x0a\x09^ promise",
messageSends: ["on:", "ifNil:ifNotNil:", "next:"],
referencedClasses: ["T2Promise"]
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "handleFutureMessage:",
category: 'forwarding',
fn: function (aMessage){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
selector=_st(_st(aMessage)._selector())._asString();
$1=_st(self["@state"])._at_(selector);
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
$2=_st(self["@state"])._at_(selector);
return $2;
};
$3=_st(self["@actions"])._at_(selector);
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
$4=_st(self._future())._setRequestActionFromMessage_(aMessage);
return $4;
};
$5=_st(self["@children"])._at_(selector);
if(($receiver = $5) == nil || $receiver == null){
$5;
} else {
$6=_st(self._future())._setChildActionFromMessage_(aMessage);
return $6;
};
$7=self._doesNotUnderstand_(aMessage);
return $7;
}, function($ctx1) {$ctx1.fill(self,"handleFutureMessage:",{aMessage:aMessage,selector:selector},smalltalk.T2Client)})},
args: ["aMessage"],
source: "handleFutureMessage: aMessage\x0a\x09| selector |\x0a\x09selector := aMessage selector asString.\x0a\x09\x0a\x09(state at: selector) \x0a\x09\x09ifNotNil: [ ^ state at: selector ].\x0a\x0a\x09(actions at: selector) \x0a\x09\x09ifNotNil: [ ^ self future setRequestActionFromMessage: aMessage ].\x0a\x0a\x09(children at: selector) \x0a\x09\x09ifNotNil: [ ^ self future setChildActionFromMessage: aMessage ].\x0a\x0a\x09^ self doesNotUnderstand: aMessage",
messageSends: ["asString", "selector", "ifNotNil:", "at:", "setRequestActionFromMessage:", "future", "setChildActionFromMessage:", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.T2Client.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@state"]=self._newJavaScriptObject();
self["@actions"]=self._newJavaScriptObject();
self["@children"]=self._newJavaScriptObject();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.T2Client)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22Primitive JS object. I need it because I'm keeping JSON data\x22\x0a\x09state := self newJavaScriptObject. \x0a\x09actions := self newJavaScriptObject.\x0a\x09children := self newJavaScriptObject",
messageSends: ["initialize", "newJavaScriptObject"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "isConnected",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@connected"];
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConnected",{},smalltalk.T2Client)})},
args: [],
source: "isConnected\x0a\x09^ connected ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "newJavaScriptObject",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return {};
return self}, function($ctx1) {$ctx1.fill(self,"newJavaScriptObject",{},smalltalk.T2Client)})},
args: [],
source: "newJavaScriptObject\x0a\x09<return {}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@path"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.T2Client)})},
args: [],
source: "path\x0a\x09^ path",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.T2Client)})},
args: ["aString"],
source: "path: aString\x0a\x09path := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "promisedValue",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@promisedValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"promisedValue",{},smalltalk.T2Client)})},
args: [],
source: "promisedValue\x0a\x09^ promisedValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "promisedValue:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@promisedValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"promisedValue:",{anObject:anObject},smalltalk.T2Client)})},
args: ["anObject"],
source: "promisedValue: anObject\x0a\x09promisedValue := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.T2Client)})},
args: [],
source: "state\x0a\x09^ state",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "then:",
category: 'forwarding',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._future())._then_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},smalltalk.T2Client)})},
args: ["aBlock"],
source: "then: aBlock\x0a\x09self future then: aBlock",
messageSends: ["then:", "future"],
referencedClasses: []
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'updating',
fn: function (){
var self=this;
var promise;
function $T2RequestAction(){return smalltalk.T2RequestAction||(typeof T2RequestAction=="undefined"?nil:T2RequestAction)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
promise=self._future();
$1=_st($T2RequestAction())._on_(promise);
_st($1)._requestUrl_(self._path());
$2=_st($1)._yourself();
_st(promise)._setAction_($2);
_st(self._future())._then_((function(){
return smalltalk.withContext(function($ctx2) {
self["@connected"]=true;
return self["@connected"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{promise:promise},smalltalk.T2Client)})},
args: [],
source: "update\x0a\x09| promise |\x0a\x09promise := self future.\x0a\x09promise setAction: ((T2RequestAction on: promise)\x0a\x09\x09requestUrl: self path;\x0a\x09\x09yourself).\x0a\x09self future then: [ connected := true ]",
messageSends: ["future", "setAction:", "requestUrl:", "on:", "path", "yourself", "then:"],
referencedClasses: ["T2RequestAction"]
}),
smalltalk.T2Client);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFromJson:",
category: 'updating',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self["@connected"]=true;
$1=_st(json)._at_("state");
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(json)._state())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self["@state"])._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,2)})}));
};
$2=_st(json)._at_("actions");
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
_st(_st(json)._actions())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self["@actions"])._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,4)})}));
};
$3=_st(json)._at_("children");
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
_st(_st(json)._children())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self["@children"])._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,6)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"updateFromJson:",{json:json},smalltalk.T2Client)})},
args: ["json"],
source: "updateFromJson: json\x0a\x09connected := true.\x0a\x09\x0a\x09(json at: 'state') ifNotNil: [\x0a\x09\x09json state keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09state at: key put: value ] ].\x0a\x09(json at: 'actions') ifNotNil: [\x0a\x09\x09json actions keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09actions at: key put: value ] ].\x0a\x09(json at: 'children') ifNotNil: [\x0a\x09\x09json children keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09children at: key put: value ] ]",
messageSends: ["ifNotNil:", "at:", "keysAndValuesDo:", "state", "at:put:", "actions", "children"],
referencedClasses: []
}),
smalltalk.T2Client);


smalltalk.addMethod(
smalltalk.method({
selector: "fromJson:",
category: 'instance creation',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._updateFromJson_(json);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{json:json},smalltalk.T2Client.klass)})},
args: ["json"],
source: "fromJson: json\x0a\x09^ self new\x0a\x09\x09updateFromJson: json;\x0a\x09\x09yourself",
messageSends: ["updateFromJson:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.T2Client.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._path_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString},smalltalk.T2Client.klass)})},
args: ["aString"],
source: "on: aString\x0a\x09^ self new\x0a\x09\x09path: aString;\x0a\x09\x09yourself",
messageSends: ["path:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.T2Client.klass);


smalltalk.addClass('T2Promise', smalltalk.Object, ['previous', 'next', 'client', 'action'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "action",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@action"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"action",{},smalltalk.T2Promise)})},
args: [],
source: "action\x0a\x09^ action",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "client",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@client"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.T2Promise)})},
args: [],
source: "client\x0a\x09^ client",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "client:",
category: 'accessing',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@client"]=aClient;
return self}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},smalltalk.T2Promise)})},
args: ["aClient"],
source: "client: aClient\x0a\x09client := aClient",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "future",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._client())._future();
return $1;
}, function($ctx1) {$ctx1.fill(self,"future",{},smalltalk.T2Promise)})},
args: [],
source: "future\x0a\x09^ self client future",
messageSends: ["future", "client"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssigned",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._action())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAssigned",{},smalltalk.T2Promise)})},
args: [],
source: "isAssigned\x0a\x09^ self action notNil",
messageSends: ["notNil", "action"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "isResolved",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isAssigned())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._action())._isResolved();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isResolved",{},smalltalk.T2Promise)})},
args: [],
source: "isResolved\x0a\x09^ self isAssigned and: [ self action isResolved ]",
messageSends: ["and:", "isAssigned", "isResolved", "action"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.T2Promise)})},
args: [],
source: "next\x0a\x09^ next",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
category: 'accessing',
fn: function (aPromise){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@next"];
if(($receiver = $1) == nil || $receiver == null){
self["@next"]=aPromise;
self["@next"];
_st(aPromise)._previous_(self);
} else {
_st(self["@next"])._next_(aPromise);
};
return self}, function($ctx1) {$ctx1.fill(self,"next:",{aPromise:aPromise},smalltalk.T2Promise)})},
args: ["aPromise"],
source: "next: aPromise\x0a\x09next \x0a\x09\x09ifNil: [ \x0a\x09\x09\x09next := aPromise. \x0a\x09\x09\x09aPromise previous: self ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09next next: aPromise ]",
messageSends: ["ifNil:ifNotNil:", "previous:", "next:"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTravel",
category: 'traveling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._next();
if(($receiver = $1) == nil || $receiver == null){
_st(self._client())._flushPromises();
} else {
_st(self._next())._stepTravel();
};
return self}, function($ctx1) {$ctx1.fill(self,"nextTravel",{},smalltalk.T2Promise)})},
args: [],
source: "nextTravel\x0a\x09self next \x0a\x09\x09ifNil: [ self client flushPromises ]\x0a\x09\x09ifNotNil: [ self next stepTravel ]",
messageSends: ["ifNil:ifNotNil:", "next", "flushPromises", "client", "stepTravel"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@previous"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.T2Promise)})},
args: [],
source: "previous\x0a\x09^ previous",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
category: 'accessing',
fn: function (aPromise){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@previous"]=aPromise;
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aPromise:aPromise},smalltalk.T2Promise)})},
args: ["aPromise"],
source: "previous: aPromise\x0a\x09previous := aPromise",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "setAction:",
category: 'accessing',
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@action"]=anAction;
self._travel();
return self}, function($ctx1) {$ctx1.fill(self,"setAction:",{anAction:anAction},smalltalk.T2Promise)})},
args: ["anAction"],
source: "setAction: anAction\x0a\x09action := anAction.\x0a\x09self travel",
messageSends: ["travel"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "setChildActionFromMessage:",
category: 'actions',
fn: function (aMessage){
var self=this;
var url,data;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $T2ChildAction(){return smalltalk.T2ChildAction||(typeof T2ChildAction=="undefined"?nil:T2ChildAction)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6;
url=_st(_st(self._client())._children())._at_(_st(aMessage)._selector());
$1=$JSON();
$3=_st(aMessage)._arguments();
if(($receiver = $3) == nil || $receiver == null){
$2=[];
} else {
$2=$3;
};
data=_st($1)._stringify_($2);
$4=url;
if(($receiver = $4) == nil || $receiver == null){
self._error_("Unable to resolve promise");
} else {
$5=_st($T2ChildAction())._on_(self);
_st($5)._requestUrl_(url);
_st($5)._data_(data);
$6=_st($5)._yourself();
self._setAction_($6);
};
return self}, function($ctx1) {$ctx1.fill(self,"setChildActionFromMessage:",{aMessage:aMessage,url:url,data:data},smalltalk.T2Promise)})},
args: ["aMessage"],
source: "setChildActionFromMessage: aMessage\x0a\x09| url data |\x0a\x09url := self client children at: aMessage selector.\x0a\x09data := JSON stringify: (aMessage arguments ifNil: [ #() ]).\x0a\x09url \x0a\x09\x09ifNil: [ self error: 'Unable to resolve promise' ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09self setAction: ((T2ChildAction on: self)\x0a\x09\x09\x09\x09requestUrl: url;\x0a\x09\x09\x09\x09data: data;\x0a\x09\x09\x09\x09yourself) ]",
messageSends: ["at:", "children", "client", "selector", "stringify:", "ifNil:", "arguments", "ifNil:ifNotNil:", "error:", "setAction:", "requestUrl:", "on:", "data:", "yourself"],
referencedClasses: ["JSON", "T2ChildAction"]
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "setRequestActionFromMessage:",
category: 'actions',
fn: function (aMessage){
var self=this;
var url,data;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $T2RequestAction(){return smalltalk.T2RequestAction||(typeof T2RequestAction=="undefined"?nil:T2RequestAction)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$5,$6;
url=_st(_st(self._client())._actions())._at_(_st(aMessage)._selector());
$1=$JSON();
$3=_st(aMessage)._arguments();
if(($receiver = $3) == nil || $receiver == null){
$2=[];
} else {
$2=$3;
};
data=_st($1)._stringify_($2);
$4=url;
if(($receiver = $4) == nil || $receiver == null){
self._setChildActionFromMessage_(aMessage);
} else {
$5=_st($T2RequestAction())._on_(self);
_st($5)._requestUrl_(url);
_st($5)._data_(data);
$6=_st($5)._yourself();
self._setAction_($6);
};
return self}, function($ctx1) {$ctx1.fill(self,"setRequestActionFromMessage:",{aMessage:aMessage,url:url,data:data},smalltalk.T2Promise)})},
args: ["aMessage"],
source: "setRequestActionFromMessage: aMessage\x0a\x09| url data |\x0a\x09url := self client actions at: aMessage selector.\x0a\x09data := JSON stringify: (aMessage arguments ifNil: [ #() ]).\x0a\x09url \x0a\x09\x09ifNil: [ self setChildActionFromMessage: aMessage ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09self setAction: ((T2RequestAction on: self)\x0a\x09\x09\x09\x09requestUrl: url;\x0a\x09\x09\x09\x09data: data;\x0a\x09\x09\x09\x09yourself) ]",
messageSends: ["at:", "actions", "client", "selector", "stringify:", "ifNil:", "arguments", "ifNil:ifNotNil:", "setChildActionFromMessage:", "setAction:", "requestUrl:", "on:", "data:", "yourself"],
referencedClasses: ["JSON", "T2RequestAction"]
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "stepTravel",
category: 'traveling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._action();
if(($receiver = $1) == nil || $receiver == null){
self._nextTravel();
} else {
_st(self._action())._resolve();
};
return self}, function($ctx1) {$ctx1.fill(self,"stepTravel",{},smalltalk.T2Promise)})},
args: [],
source: "stepTravel\x0a\x09self action \x0a\x09\x09ifNil: [ self nextTravel ]\x0a\x09\x09ifNotNil: [ self action resolve ]",
messageSends: ["ifNil:ifNotNil:", "action", "nextTravel", "resolve"],
referencedClasses: []
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "then:",
category: 'actions',
fn: function (aBlock){
var self=this;
function $T2CallbackAction(){return smalltalk.T2CallbackAction||(typeof T2CallbackAction=="undefined"?nil:T2CallbackAction)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isAssigned();
if(smalltalk.assert($1)){
_st(_st(self._client())._future())._then_(aBlock);
} else {
self._setAction_(_st(_st($T2CallbackAction())._on_(self))._callback_(aBlock));
};
return self}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},smalltalk.T2Promise)})},
args: ["aBlock"],
source: "then: aBlock\x0a\x09self isAssigned\x0a\x09\x09ifTrue: [ \x0a\x09\x09\x09self client future then: aBlock ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self setAction: ((T2CallbackAction on: self) callback: aBlock) ]",
messageSends: ["ifTrue:ifFalse:", "isAssigned", "then:", "future", "client", "setAction:", "callback:", "on:"],
referencedClasses: ["T2CallbackAction"]
}),
smalltalk.T2Promise);

smalltalk.addMethod(
smalltalk.method({
selector: "travel",
category: 'traveling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._previous())._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._previous())._isResolved();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
self._stepTravel();
};
return self}, function($ctx1) {$ctx1.fill(self,"travel",{},smalltalk.T2Promise)})},
args: [],
source: "travel\x0a\x09(self previous isNil or: [ self previous isResolved ]) \x0a\x09\x09ifTrue: [ self stepTravel ]",
messageSends: ["ifTrue:", "or:", "isNil", "previous", "isResolved", "stepTravel"],
referencedClasses: []
}),
smalltalk.T2Promise);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._client_(aClient);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aClient:aClient},smalltalk.T2Promise.klass)})},
args: ["aClient"],
source: "on: aClient\x0a\x09^ self new\x0a\x09\x09client: aClient;\x0a\x09\x09yourself",
messageSends: ["client:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.T2Promise.klass);


smalltalk.addClass('T2Proxy', smalltalk.Object, ['client'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'error handling',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self._xxxClient())._respondsTo_(_st(aMessage)._selector());
if(smalltalk.assert($2)){
$1=_st(aMessage)._sendTo_(self._xxxClient());
} else {
$1=_st(self._xxxClient())._handleFutureMessage_(aMessage);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.T2Proxy)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (self xxxClient respondsTo: aMessage selector)\x0a\x09\x09ifTrue: [ aMessage sendTo: self xxxClient ]\x0a\x09\x09ifFalse: [ self xxxClient handleFutureMessage: aMessage ]",
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "xxxClient", "selector", "sendTo:", "handleFutureMessage:"],
referencedClasses: []
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inheritedSelectors",
category: 'accessing',
fn: function (){
var self=this;
var selectors,methods;
return smalltalk.withContext(function($ctx1) { 
var $1;
methods=self._basicAt_("inheritedMethods");
selectors=[];
selectors=_st(selectors)._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self._class())._methodDictionary())._keys())._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=selectors;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inheritedSelectors",{selectors:selectors,methods:methods},smalltalk.T2Proxy)})},
args: [],
source: "inheritedSelectors\x0a\x09| selectors methods |\x0a\x0a\x09methods := self basicAt: 'inheritedMethods'.\x0a\x09selectors := #().\x0a\x22\x09<for(var selector in methods) {selectors.push(selector)}>.\x22\x0a\x0a\x09selectors := selectors \x0a\x09\x09reject: [ :each | self class methodDictionary keys includes: each ].\x0a\x0a\x09^ selectors",
messageSends: ["basicAt:", "reject:", "includes:", "keys", "methodDictionary", "class"],
referencedClasses: []
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.T2Proxy.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.T2Proxy)})},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
smalltalk.method({
selector: "xxxClient",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@client"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"xxxClient",{},smalltalk.T2Proxy)})},
args: [],
source: "xxxClient\x0a\x09^ client",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Proxy);

smalltalk.addMethod(
smalltalk.method({
selector: "xxxClient:",
category: 'accessing',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@client"]=aClient;
return self}, function($ctx1) {$ctx1.fill(self,"xxxClient:",{aClient:aClient},smalltalk.T2Proxy)})},
args: ["aClient"],
source: "xxxClient: aClient\x0a\x09client := aClient",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2Proxy);


smalltalk.addMethod(
smalltalk.method({
selector: "client:",
category: 'instance creation',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._xxxClient_(aClient);
$3=_st($2)._initialize();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},smalltalk.T2Proxy.klass)})},
args: ["aClient"],
source: "client: aClient\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aClient\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: aClient;\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "basicNew", "initialize"],
referencedClasses: []
}),
smalltalk.T2Proxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aPath){
var self=this;
function $T2Client(){return smalltalk.T2Client||(typeof T2Client=="undefined"?nil:T2Client)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._xxxClient_(_st($T2Client())._on_(aPath));
$3=_st($2)._initialize();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPath:aPath},smalltalk.T2Proxy.klass)})},
args: ["aPath"],
source: "on: aPath\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aPath\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: (T2Client on: aPath);\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "basicNew", "on:", "initialize"],
referencedClasses: ["T2Client"]
}),
smalltalk.T2Proxy.klass);

});

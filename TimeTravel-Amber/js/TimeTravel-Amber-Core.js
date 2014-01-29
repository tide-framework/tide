define("timetravel/TimeTravel-Amber-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber_core/Kernel-Infrastructure"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('TimeTravel-Amber-Core');
smalltalk.packages["TimeTravel-Amber-Core"].transport = {"type":"amd","amdNamespace":"timetravel"};

smalltalk.addClass('TTAction', globals.Object, ['promise', 'resolved'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "beResolved",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@resolved"]=true;
_st(self._promise())._nextTravel();
return self}, function($ctx1) {$ctx1.fill(self,"beResolved",{},smalltalk.TTAction)})},
args: [],
source: "beResolved\x0a\x09resolved := true.\x0a\x09self promise nextTravel",
messageSends: ["nextTravel", "promise"],
referencedClasses: []
}),
globals.TTAction);

smalltalk.addMethod(
smalltalk.method({
selector: "client",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._promise())._client();
return $1;
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.TTAction)})},
args: [],
source: "client\x0a\x09^ self promise client",
messageSends: ["client", "promise"],
referencedClasses: []
}),
globals.TTAction);

smalltalk.addMethod(
smalltalk.method({
selector: "isResolved",
protocol: 'testing',
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
}, function($ctx1) {$ctx1.fill(self,"isResolved",{},smalltalk.TTAction)})},
args: [],
source: "isResolved\x0a\x09^ resolved ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.TTAction);

smalltalk.addMethod(
smalltalk.method({
selector: "promise",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@promise"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"promise",{},smalltalk.TTAction)})},
args: [],
source: "promise\x0a\x09^ promise",
messageSends: [],
referencedClasses: []
}),
globals.TTAction);

smalltalk.addMethod(
smalltalk.method({
selector: "promise:",
protocol: 'accessing',
fn: function (aPromise){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@promise"]=aPromise;
return self}, function($ctx1) {$ctx1.fill(self,"promise:",{aPromise:aPromise},smalltalk.TTAction)})},
args: ["aPromise"],
source: "promise: aPromise\x0a\x09promise := aPromise",
messageSends: [],
referencedClasses: []
}),
globals.TTAction);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._beResolved();
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},smalltalk.TTAction)})},
args: [],
source: "resolve\x0a\x09self beResolved",
messageSends: ["beResolved"],
referencedClasses: []
}),
globals.TTAction);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPromise){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._promise_(aPromise);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPromise:aPromise},smalltalk.TTAction.klass)})},
args: ["aPromise"],
source: "on: aPromise\x0a\x09^ self new \x0a\x09\x09promise: aPromise; \x0a\x09\x09yourself",
messageSends: ["promise:", "new", "yourself"],
referencedClasses: []
}),
globals.TTAction.klass);


smalltalk.addClass('TTCallbackAction', globals.TTAction, ['callback'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@callback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.TTCallbackAction)})},
args: [],
source: "callback\x0a\x09^ callback",
messageSends: [],
referencedClasses: []
}),
globals.TTCallbackAction);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.TTCallbackAction)})},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.TTCallbackAction);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._client())._promisedValue_(_st(self._callback())._value_(_st(self._client())._promisedValue()));
smalltalk.TTCallbackAction.superclass.fn.prototype._resolve.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},smalltalk.TTCallbackAction)})},
args: [],
source: "resolve\x0a\x09self client promisedValue: (self callback value: self client promisedValue).\x0a\x09super resolve",
messageSends: ["promisedValue:", "client", "value:", "callback", "promisedValue", "resolve"],
referencedClasses: []
}),
globals.TTCallbackAction);



smalltalk.addClass('TTRequestAction', globals.TTAction, ['requestUrl', 'data'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@data"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{},smalltalk.TTRequestAction)})},
args: [],
source: "data\x0a\x09^ data",
messageSends: [],
referencedClasses: []
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "data:",
protocol: 'accessing',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@data"]=json;
return self}, function($ctx1) {$ctx1.fill(self,"data:",{json:json},smalltalk.TTRequestAction)})},
args: ["json"],
source: "data: json\x0a\x09data := json",
messageSends: [],
referencedClasses: []
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "handleResponse:status:",
protocol: 'resolving',
fn: function (json,aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aNumber).__eq_eq((200));
if(smalltalk.assert($2)){
$1=self._updateClientFromJson_(json);
} else {
$1=self._newClientFromJson_(json);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"handleResponse:status:",{json:json,aNumber:aNumber},smalltalk.TTRequestAction)})},
args: ["json", "aNumber"],
source: "handleResponse: json status: aNumber\x0a\x09^ aNumber == 200 \x0a\x09\x09ifTrue: [ self updateClientFromJson: json ]\x0a\x09\x09ifFalse: [ self newClientFromJson: json ]",
messageSends: ["ifTrue:ifFalse:", "==", "updateClientFromJson:", "newClientFromJson:"],
referencedClasses: []
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "newClientFromJson:",
protocol: 'private',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._client())._promisedValue_(_st(json)._asTimeTravelObject());
return self}, function($ctx1) {$ctx1.fill(self,"newClientFromJson:",{json:json},smalltalk.TTRequestAction)})},
args: ["json"],
source: "newClientFromJson: json\x0a\x09self client promisedValue: json asTimeTravelObject",
messageSends: ["promisedValue:", "client", "asTimeTravelObject"],
referencedClasses: []
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "request:",
protocol: 'resolving',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(jQuery)._ajax_options_(self._requestUrl(),smalltalk.HashedCollection._from_(["type".__minus_gt("POST"),"dataType".__minus_gt("json"),"data".__minus_gt(smalltalk.HashedCollection._from_(["arguments".__minus_gt(self._data())])),"success".__minus_gt((function(json,textStatus,xhr){
return smalltalk.withContext(function($ctx2) {
self._handleResponse_status_(json,_st(xhr)._status());
return self._beResolved();
}, function($ctx2) {$ctx2.fillBlock({json:json,textStatus:textStatus,xhr:xhr},$ctx1,1)})})),"error".__minus_gt((function(ex){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(ex)._status()).__eq((408));
if(smalltalk.assert($1)){
return self._sessionNotFound();
} else {
return self._requestError_(ex);
};
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})}))]));
return self}, function($ctx1) {$ctx1.fill(self,"request:",{aString:aString},smalltalk.TTRequestAction)})},
args: ["aString"],
source: "request: aString\x0a\x09jQuery \x0a\x09\x09ajax: self requestUrl\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'POST'.\x0a\x09\x09\x09'dataType' -> 'json'.\x0a\x09\x09\x09'data' -> #{ 'arguments' -> self data }.\x0a\x09\x09\x09'success' -> [ :json :textStatus :xhr |\x0a\x09\x09\x09\x09self handleResponse: json status: xhr status.\x0a\x09\x09\x09\x09self beResolved ].\x0a\x09\x09\x09'error' -> [ :ex |\x0a\x09\x09\x09\x09ex status = 408 \x0a\x09\x09\x09\x09\x09ifTrue: [ self sessionNotFound ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self requestError: ex ] ]\x0a\x09\x09}",
messageSends: ["ajax:options:", "requestUrl", "->", "data", "handleResponse:status:", "status", "beResolved", "ifTrue:ifFalse:", "=", "sessionNotFound", "requestError:"],
referencedClasses: []
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "requestError:",
protocol: 'error handling',
fn: function (anObject){
var self=this;
function $TTRequestError(){return smalltalk.TTRequestError||(typeof TTRequestError=="undefined"?nil:TTRequestError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($TTRequestError())._new();
_st($1)._xhr_(anObject);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"requestError:",{anObject:anObject},smalltalk.TTRequestAction)})},
args: ["anObject"],
source: "requestError: anObject\x0a\x09TTRequestError new\x0a\x09\x09xhr: anObject;\x0a\x09\x09signal",
messageSends: ["xhr:", "new", "signal"],
referencedClasses: ["TTRequestError"]
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "requestUrl",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@requestUrl"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"requestUrl",{},smalltalk.TTRequestAction)})},
args: [],
source: "requestUrl\x0a\x09^ requestUrl",
messageSends: [],
referencedClasses: []
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "requestUrl:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@requestUrl"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"requestUrl:",{aString:aString},smalltalk.TTRequestAction)})},
args: ["aString"],
source: "requestUrl: aString\x0a\x09requestUrl := aString",
messageSends: [],
referencedClasses: []
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._request_(self._requestUrl());
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},smalltalk.TTRequestAction)})},
args: [],
source: "resolve\x0a\x09self request: self requestUrl",
messageSends: ["request:", "requestUrl"],
referencedClasses: []
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionNotFound",
protocol: 'error handling',
fn: function (){
var self=this;
function $TTSessionNotFound(){return smalltalk.TTSessionNotFound||(typeof TTSessionNotFound=="undefined"?nil:TTSessionNotFound)}
return smalltalk.withContext(function($ctx1) { 
_st($TTSessionNotFound())._signal();
return self}, function($ctx1) {$ctx1.fill(self,"sessionNotFound",{},smalltalk.TTRequestAction)})},
args: [],
source: "sessionNotFound\x0a\x09TTSessionNotFound signal",
messageSends: ["signal"],
referencedClasses: ["TTSessionNotFound"]
}),
globals.TTRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "updateClientFromJson:",
protocol: 'private',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._client())._updateFromJson_(json);
return self}, function($ctx1) {$ctx1.fill(self,"updateClientFromJson:",{json:json},smalltalk.TTRequestAction)})},
args: ["json"],
source: "updateClientFromJson: json\x0a\x09self client updateFromJson: json",
messageSends: ["updateFromJson:", "client"],
referencedClasses: []
}),
globals.TTRequestAction);



smalltalk.addClass('TTClient', globals.Object, ['state', 'actions', 'firstPromise', 'promisedValue', 'path', 'id', 'connected'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "actions",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@actions"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actions",{},smalltalk.TTClient)})},
args: [],
source: "actions\x0a\x09^ actions",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeTravelArgument",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($JSON())._stringify_(globals.HashedCollection._newFromPairs_(["__id__",self._id()]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTimeTravelArgument",{},globals.TTClient)})},
args: [],
source: "asTimeTravelArgument\x0a\x09^ JSON stringify: #{ '__id__' -> self id }",
messageSends: ["stringify:", "id"],
referencedClasses: ["JSON"]
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "connect",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isConnected();
if(! smalltalk.assert($1)){
self._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"connect",{},smalltalk.TTClient)})},
args: [],
source: "connect\x0a\x09self isConnected ifFalse: [ self update ]",
messageSends: ["ifFalse:", "isConnected", "update"],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "flushPromises",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@firstPromise"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushPromises",{},smalltalk.TTClient)})},
args: [],
source: "flushPromises\x0a\x09firstPromise := nil",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "future",
protocol: 'accessing',
fn: function (){
var self=this;
var promise;
function $TTPromise(){return smalltalk.TTPromise||(typeof TTPromise=="undefined"?nil:TTPromise)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
promise=_st($TTPromise())._on_(self);
$1=self["@firstPromise"];
if(($receiver = $1) == nil || $receiver == null){
self["@firstPromise"]=promise;
self["@firstPromise"];
} else {
_st(self["@firstPromise"])._next_(promise);
};
$2=promise;
return $2;
}, function($ctx1) {$ctx1.fill(self,"future",{promise:promise},smalltalk.TTClient)})},
args: [],
source: "future\x0a\x09| promise |\x0a\x0a\x09promise := TTPromise on: self.\x0a\x0a\x09firstPromise \x0a\x09\x09ifNil: [ firstPromise := promise ]\x0a\x09\x09ifNotNil: [ firstPromise next: promise ].\x0a\x0a\x09^ promise",
messageSends: ["on:", "ifNil:ifNotNil:", "next:"],
referencedClasses: ["TTPromise"]
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "handleFutureMessage:",
protocol: 'forwarding',
fn: function (aMessage){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
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
$5=self._doesNotUnderstand_(aMessage);
return $5;
}, function($ctx1) {$ctx1.fill(self,"handleFutureMessage:",{aMessage:aMessage,selector:selector},smalltalk.TTClient)})},
args: ["aMessage"],
source: "handleFutureMessage: aMessage\x0a\x09| selector |\x0a\x09selector := aMessage selector asString.\x0a\x09\x0a\x09(state at: selector) \x0a\x09\x09ifNotNil: [ ^ state at: selector ].\x0a\x0a\x09(actions at: selector) \x0a\x09\x09ifNotNil: [ ^ self future setRequestActionFromMessage: aMessage ].\x0a\x0a\x09^ self doesNotUnderstand: aMessage",
messageSends: ["asString", "selector", "ifNotNil:", "at:", "setRequestActionFromMessage:", "future", "doesNotUnderstand:"],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@id"];
return $1;
},
args: [],
source: "id\x0a\x09^ id",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.TTClient.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@state"]=self._newJavaScriptObject();
$ctx1.sendIdx["newJavaScriptObject"]=1;
self["@actions"]=self._newJavaScriptObject();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TTClient)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22Primitive JS object. I need it because I'm keeping JSON data\x22\x0a\x09state := self newJavaScriptObject. \x0a\x09actions := self newJavaScriptObject",
messageSends: ["initialize", "newJavaScriptObject"],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "isConnected",
protocol: 'testing',
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
}, function($ctx1) {$ctx1.fill(self,"isConnected",{},smalltalk.TTClient)})},
args: [],
source: "isConnected\x0a\x09^ connected ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "newJavaScriptObject",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return {};
return self}, function($ctx1) {$ctx1.fill(self,"newJavaScriptObject",{},smalltalk.TTClient)})},
args: [],
source: "newJavaScriptObject\x0a\x09<return {}>",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@path"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.TTClient)})},
args: [],
source: "path\x0a\x09^ path",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.TTClient)})},
args: ["aString"],
source: "path: aString\x0a\x09path := aString",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "promisedValue",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@promisedValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"promisedValue",{},smalltalk.TTClient)})},
args: [],
source: "promisedValue\x0a\x09^ promisedValue",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "promisedValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@promisedValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"promisedValue:",{anObject:anObject},smalltalk.TTClient)})},
args: ["anObject"],
source: "promisedValue: anObject\x0a\x09promisedValue := anObject",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.TTClient)})},
args: [],
source: "state\x0a\x09^ state",
messageSends: [],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "then:",
protocol: 'forwarding',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._future())._then_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},smalltalk.TTClient)})},
args: ["aBlock"],
source: "then: aBlock\x0a\x09self future then: aBlock",
messageSends: ["then:", "future"],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
protocol: 'updating',
fn: function (){
var self=this;
var promise;
function $TTRequestAction(){return smalltalk.TTRequestAction||(typeof TTRequestAction=="undefined"?nil:TTRequestAction)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
promise=self._future();
$1=_st($TTRequestAction())._on_(promise);
_st($1)._requestUrl_(self._path());
$2=_st($1)._yourself();
_st(promise)._setAction_($2);
_st(self._future())._then_((function(){
return smalltalk.withContext(function($ctx2) {
self["@connected"]=true;
return self["@connected"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{promise:promise},smalltalk.TTClient)})},
args: [],
source: "update\x0a\x09| promise |\x0a\x09promise := self future.\x0a\x09promise setAction: ((TTRequestAction on: promise)\x0a\x09\x09requestUrl: self path;\x0a\x09\x09yourself).\x0a\x09self future then: [ connected := true ]",
messageSends: ["future", "setAction:", "requestUrl:", "on:", "path", "yourself", "then:"],
referencedClasses: ["TTRequestAction"]
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "updateActions:",
protocol: 'updating',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDictionary)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self["@actions"])._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateActions:",{aDictionary:aDictionary},smalltalk.TTClient)})},
args: ["aDictionary"],
source: "updateActions: aDictionary\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09actions at: key put: value ]",
messageSends: ["keysAndValuesDo:", "at:put:"],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFromJson:",
protocol: 'updating',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@connected"]=true;
self["@id"]=_st(json)._at_("__id__");
$ctx1.sendIdx["at:"]=1;
$1=_st(json)._at_("state");
$ctx1.sendIdx["at:"]=2;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(json)._state())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self["@state"])._at_put_(key,_st(value)._asTimeTravelObject());
$ctx2.sendIdx["at:put:"]=1;
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,2)})}));
$ctx1.sendIdx["keysAndValuesDo:"]=1;
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
return self}, function($ctx1) {$ctx1.fill(self,"updateFromJson:",{json:json},globals.TTClient)})},
args: ["json"],
source: "updateFromJson: json\x0a\x09connected := true.\x0a\x09\x0a\x09id := json at: '__id__'.\x0a\x09\x0a\x09(json at: 'state') ifNotNil: [\x0a\x09\x09json state keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09state at: key put: value asTimeTravelObject ] ].\x0a\x09(json at: 'actions') ifNotNil: [\x0a\x09\x09json actions keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09actions at: key put: value ] ]",
messageSends: ["at:", "ifNotNil:", "keysAndValuesDo:", "state", "at:put:", "asTimeTravelObject", "actions"],
referencedClasses: []
}),
globals.TTClient);

smalltalk.addMethod(
smalltalk.method({
selector: "updateState:",
protocol: 'updating',
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDictionary)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self["@state"])._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateState:",{aDictionary:aDictionary},smalltalk.TTClient)})},
args: ["aDictionary"],
source: "updateState: aDictionary\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09state at: key put: value ]",
messageSends: ["keysAndValuesDo:", "at:put:"],
referencedClasses: []
}),
globals.TTClient);


smalltalk.addMethod(
smalltalk.method({
selector: "fromJson:",
protocol: 'instance creation',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._updateFromJson_(json);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{json:json},smalltalk.TTClient.klass)})},
args: ["json"],
source: "fromJson: json\x0a\x09^ self new\x0a\x09\x09updateFromJson: json;\x0a\x09\x09yourself",
messageSends: ["updateFromJson:", "new", "yourself"],
referencedClasses: []
}),
globals.TTClient.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._path_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString},smalltalk.TTClient.klass)})},
args: ["aString"],
source: "on: aString\x0a\x09^ self new\x0a\x09\x09path: aString;\x0a\x09\x09yourself",
messageSends: ["path:", "new", "yourself"],
referencedClasses: []
}),
globals.TTClient.klass);


smalltalk.addClass('TTPromise', globals.Object, ['previous', 'next', 'client', 'action'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "action",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@action"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"action",{},smalltalk.TTPromise)})},
args: [],
source: "action\x0a\x09^ action",
messageSends: [],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "client",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@client"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.TTPromise)})},
args: [],
source: "client\x0a\x09^ client",
messageSends: [],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "client:",
protocol: 'accessing',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@client"]=aClient;
return self}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},smalltalk.TTPromise)})},
args: ["aClient"],
source: "client: aClient\x0a\x09client := aClient",
messageSends: [],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "future",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._client())._future();
return $1;
}, function($ctx1) {$ctx1.fill(self,"future",{},smalltalk.TTPromise)})},
args: [],
source: "future\x0a\x09^ self client future",
messageSends: ["future", "client"],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssigned",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._action())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAssigned",{},smalltalk.TTPromise)})},
args: [],
source: "isAssigned\x0a\x09^ self action notNil",
messageSends: ["notNil", "action"],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "isResolved",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isAssigned())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._action())._isResolved();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isResolved",{},smalltalk.TTPromise)})},
args: [],
source: "isResolved\x0a\x09^ self isAssigned and: [ self action isResolved ]",
messageSends: ["and:", "isAssigned", "isResolved", "action"],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@next"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.TTPromise)})},
args: [],
source: "next\x0a\x09^ next",
messageSends: [],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
protocol: 'accessing',
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
return self}, function($ctx1) {$ctx1.fill(self,"next:",{aPromise:aPromise},smalltalk.TTPromise)})},
args: ["aPromise"],
source: "next: aPromise\x0a\x09next \x0a\x09\x09ifNil: [ \x0a\x09\x09\x09next := aPromise. \x0a\x09\x09\x09aPromise previous: self ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09next next: aPromise ]",
messageSends: ["ifNil:ifNotNil:", "previous:", "next:"],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTravel",
protocol: 'traveling',
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
return self}, function($ctx1) {$ctx1.fill(self,"nextTravel",{},smalltalk.TTPromise)})},
args: [],
source: "nextTravel\x0a\x09self next \x0a\x09\x09ifNil: [ self client flushPromises ]\x0a\x09\x09ifNotNil: [ self next stepTravel ]",
messageSends: ["ifNil:ifNotNil:", "next", "flushPromises", "client", "stepTravel"],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@previous"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.TTPromise)})},
args: [],
source: "previous\x0a\x09^ previous",
messageSends: [],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
protocol: 'accessing',
fn: function (aPromise){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@previous"]=aPromise;
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aPromise:aPromise},smalltalk.TTPromise)})},
args: ["aPromise"],
source: "previous: aPromise\x0a\x09previous := aPromise",
messageSends: [],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "setAction:",
protocol: 'accessing',
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@action"]=anAction;
self._travel();
return self}, function($ctx1) {$ctx1.fill(self,"setAction:",{anAction:anAction},smalltalk.TTPromise)})},
args: ["anAction"],
source: "setAction: anAction\x0a\x09action := anAction.\x0a\x09self travel",
messageSends: ["travel"],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "setRequestActionFromMessage:",
protocol: 'actions',
fn: function (aMessage){
var self=this;
var url,data;
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $TTRequestAction(){return globals.TTRequestAction||(typeof TTRequestAction=="undefined"?nil:TTRequestAction)}
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$5;
url=_st(_st(self._client())._actions())._at_(_st(aMessage)._selector());
$3=_st(aMessage)._arguments();
if(($receiver = $3) == nil || $receiver == null){
$2=[];
} else {
$2=$3;
};
$1=_st($2)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asTimeTravelArgument();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
data=_st($JSON())._stringify_($1);
$4=_st($TTRequestAction())._on_(self);
_st($4)._requestUrl_(url);
_st($4)._data_(data);
$5=_st($4)._yourself();
self._setAction_($5);
return self}, function($ctx1) {$ctx1.fill(self,"setRequestActionFromMessage:",{aMessage:aMessage,url:url,data:data},globals.TTPromise)})},
args: ["aMessage"],
source: "setRequestActionFromMessage: aMessage\x0a\x09| url data |\x0a\x09url := self client actions at: aMessage selector.\x0a\x09data := JSON stringify: ((aMessage arguments ifNil: [ #() ]) \x0a\x09\x09collect: [ :each | each asTimeTravelArgument ]).\x0a\x09self setAction: ((TTRequestAction on: self)\x0a\x09\x09requestUrl: url;\x0a\x09\x09data: data;\x0a\x09\x09yourself)",
messageSends: ["at:", "actions", "client", "selector", "stringify:", "collect:", "ifNil:", "arguments", "asTimeTravelArgument", "setAction:", "requestUrl:", "on:", "data:", "yourself"],
referencedClasses: ["JSON", "TTRequestAction"]
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "stepTravel",
protocol: 'traveling',
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
return self}, function($ctx1) {$ctx1.fill(self,"stepTravel",{},smalltalk.TTPromise)})},
args: [],
source: "stepTravel\x0a\x09self action \x0a\x09\x09ifNil: [ self nextTravel ]\x0a\x09\x09ifNotNil: [ self action resolve ]",
messageSends: ["ifNil:ifNotNil:", "action", "nextTravel", "resolve"],
referencedClasses: []
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "then:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
function $TTCallbackAction(){return smalltalk.TTCallbackAction||(typeof TTCallbackAction=="undefined"?nil:TTCallbackAction)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isAssigned();
if(smalltalk.assert($1)){
_st(_st(self._client())._future())._then_(aBlock);
} else {
self._setAction_(_st(_st($TTCallbackAction())._on_(self))._callback_(aBlock));
};
return self}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},smalltalk.TTPromise)})},
args: ["aBlock"],
source: "then: aBlock\x0a\x09self isAssigned\x0a\x09\x09ifTrue: [ self client future then: aBlock ]\x0a\x09\x09ifFalse: [ self setAction: ((TTCallbackAction on: self) callback: aBlock) ]",
messageSends: ["ifTrue:ifFalse:", "isAssigned", "then:", "future", "client", "setAction:", "callback:", "on:"],
referencedClasses: ["TTCallbackAction"]
}),
globals.TTPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "travel",
protocol: 'traveling',
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
return self}, function($ctx1) {$ctx1.fill(self,"travel",{},smalltalk.TTPromise)})},
args: [],
source: "travel\x0a\x09(self previous isNil or: [ self previous isResolved ]) \x0a\x09\x09ifTrue: [ self stepTravel ]",
messageSends: ["ifTrue:", "or:", "isNil", "previous", "isResolved", "stepTravel"],
referencedClasses: []
}),
globals.TTPromise);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._client_(aClient);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aClient:aClient},smalltalk.TTPromise.klass)})},
args: ["aClient"],
source: "on: aClient\x0a\x09^ self new\x0a\x09\x09client: aClient;\x0a\x09\x09yourself",
messageSends: ["client:", "new", "yourself"],
referencedClasses: []
}),
globals.TTPromise.klass);


smalltalk.addClass('TTProxy', globals.ProtoObject, ['client'], 'TimeTravel-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "asTimeTravelArgument",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._xxxClient())._asTimeTravelArgument();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTimeTravelArgument",{},globals.TTProxy)})},
args: [],
source: "asTimeTravelArgument\x0a\x09^ self xxxClient asTimeTravelArgument",
messageSends: ["asTimeTravelArgument", "xxxClient"],
referencedClasses: []
}),
globals.TTProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$4,$1;
$3=self._xxxClient();
$ctx1.sendIdx["xxxClient"]=1;
$2=_st($3)._respondsTo_(_st(aMessage)._selector());
if(smalltalk.assert($2)){
$4=self._xxxClient();
$ctx1.sendIdx["xxxClient"]=2;
$1=_st(aMessage)._sendTo_($4);
} else {
$1=_st(self._xxxClient())._handleFutureMessage_(aMessage);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},globals.TTProxy)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (self xxxClient respondsTo: aMessage selector)\x0a\x09\x09ifTrue: [ aMessage sendTo: self xxxClient ]\x0a\x09\x09ifFalse: [ self xxxClient handleFutureMessage: aMessage ]",
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "xxxClient", "selector", "sendTo:", "handleFutureMessage:"],
referencedClasses: []
}),
globals.TTProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inheritedSelectors",
protocol: 'private',
fn: function (){
var self=this;
function $TTProxy(){return globals.TTProxy||(typeof TTProxy=="undefined"?nil:TTProxy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._class())._allSelectors())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st($TTProxy())._methodDictionary())._keys())._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"inheritedSelectors",{},globals.TTProxy)})},
args: [],
source: "inheritedSelectors\x0a\x09^ self class allSelectors\x0a\x09\x09reject: [ :each | TTProxy methodDictionary keys includes: each ]",
messageSends: ["reject:", "allSelectors", "class", "includes:", "keys", "methodDictionary"],
referencedClasses: ["TTProxy"]
}),
globals.TTProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.TTProxy.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TTProxy)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22self inheritedSelectors do: [ :each |\x0a\x09\x09self removeSelector: each asSelector ]\x22",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.TTProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
protocol: 'private',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
delete self[aString];;
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aString:aString},globals.TTProxy)})},
args: ["aString"],
source: "removeSelector: aString\x0a\x09<delete self[aString];>",
messageSends: [],
referencedClasses: []
}),
globals.TTProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "xxxClient",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@client"];
return $1;
},
args: [],
source: "xxxClient\x0a\x09^ client",
messageSends: [],
referencedClasses: []
}),
globals.TTProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "xxxClient:",
protocol: 'accessing',
fn: function (aClient){
var self=this;
self["@client"]=aClient;
return self},
args: ["aClient"],
source: "xxxClient: aClient\x0a\x09client := aClient",
messageSends: [],
referencedClasses: []
}),
globals.TTProxy);


smalltalk.addMethod(
smalltalk.method({
selector: "client:",
protocol: 'instance creation',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._xxxClient_(aClient);
$3=_st($2)._initialize();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},globals.TTProxy.klass)})},
args: ["aClient"],
source: "client: aClient\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aClient\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: aClient;\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "basicNew", "initialize"],
referencedClasses: []
}),
globals.TTProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
function $TTClient(){return globals.TTClient||(typeof TTClient=="undefined"?nil:TTClient)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._xxxClient_(_st($TTClient())._on_(aPath));
$3=_st($2)._initialize();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPath:aPath},globals.TTProxy.klass)})},
args: ["aPath"],
source: "on: aPath\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aPath\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: (TTClient on: aPath);\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "basicNew", "on:", "initialize"],
referencedClasses: ["TTClient"]
}),
globals.TTProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeTravelObject",
protocol: '*TimeTravel-Amber-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asTimeTravelObject();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTimeTravelObject",{},smalltalk.Array)})},
args: [],
source: "asTimeTravelObject\x0a\x09^ self collect: [ :each | each asTimeTravelObject ]",
messageSends: ["collect:", "asTimeTravelObject"],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeTravelObject",
protocol: '*TimeTravel-Amber-Core',
fn: function (){
var self=this;
var dictionary;
return smalltalk.withContext(function($ctx1) { 
var $1;
dictionary=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(dictionary)._at_put_(key,_st(value)._asTimeTravelObject());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
$1=dictionary;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTimeTravelObject",{dictionary:dictionary},smalltalk.HashedCollection)})},
args: [],
source: "asTimeTravelObject\x0a\x09| dictionary |\x0a\x09dictionary := self class new.\x0a\x09self keysAndValuesDo: [ :key :value | \x0a\x09\x09dictionary at: key put: value asTimeTravelObject ].\x0a\x09\x09\x0a\x09^ dictionary",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asTimeTravelObject"],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeTravelObject",
protocol: '*TimeTravel-Amber-Core',
fn: function (){
var self=this;
function $TTProxy(){return smalltalk.TTProxy||(typeof TTProxy=="undefined"?nil:TTProxy)}
function $TTClient(){return smalltalk.TTClient||(typeof TTClient=="undefined"?nil:TTClient)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TTProxy())._client_(_st($TTClient())._fromJson_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTimeTravelObject",{},smalltalk.JSObjectProxy)})},
args: [],
source: "asTimeTravelObject\x0a\x09^ TTProxy client: (TTClient fromJson: self)",
messageSends: ["client:", "fromJson:"],
referencedClasses: ["TTProxy", "TTClient"]
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeTravelArgument",
protocol: '*TimeTravel-Amber-Core',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asTimeTravelArgument\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeTravelObject",
protocol: '*TimeTravel-Amber-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTimeTravelObject",{},smalltalk.Object)})},
args: [],
source: "asTimeTravelObject\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.Object);

});

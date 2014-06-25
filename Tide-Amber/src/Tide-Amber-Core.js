define("tide/Tide-Amber-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections", "amber_core/Kernel-Infrastructure"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Tide-Amber-Core');
smalltalk.packages["Tide-Amber-Core"].transport = {"type":"amd","amdNamespace":"tide"};

smalltalk.addClass('TDAbstractProxy', globals.ProtoObject, ['client'], 'Tide-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldBeImplemented();
return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},globals.TDAbstractProxy)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09self shouldBeImplemented",
messageSends: ["shouldBeImplemented", "doesNotUnderstand:"],
referencedClasses: []
}),
globals.TDAbstractProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(anInspector)._setLabel_(self._printString());
$1=_st(anInspector)._setVariables_(globals.HashedCollection._newFromPairs_([]));
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector},globals.TDAbstractProxy)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: #{}",
messageSends: ["setLabel:", "printString", "setVariables:", "inspectOn:"],
referencedClasses: []
}),
globals.TDAbstractProxy);


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
}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},globals.TDAbstractProxy.klass)})},
args: ["aClient"],
source: "client: aClient\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aClient\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: aClient;\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "basicNew", "initialize", "client:"],
referencedClasses: []
}),
globals.TDAbstractProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "connectOn:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._on_(aPath);
_st($2)._connect();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"connectOn:",{aPath:aPath},globals.TDAbstractProxy.klass)})},
args: ["aPath"],
source: "connectOn: aPath\x0a\x09\x22Creates a proxy on aPath and connect it. \x0a\x09 This is a convenience method.\x22\x0a\x09 \x0a\x09^ (self on: aPath) \x0a\x09\x09connect; \x0a\x09\x09yourself.",
messageSends: ["connect", "on:", "yourself", "connectOn:"],
referencedClasses: []
}),
globals.TDAbstractProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
function $TDClient(){return globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._xxxClient_(_st($TDClient())._on_(aPath));
$3=_st($2)._initialize();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPath:aPath},globals.TDAbstractProxy.klass)})},
args: ["aPath"],
source: "on: aPath\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aPath\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: (TDClient on: aPath);\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "basicNew", "on:", "initialize", "on:"],
referencedClasses: ["TDClient"]
}),
globals.TDAbstractProxy.klass);


smalltalk.addClass('TDClientProxy', globals.TDAbstractProxy, ['client'], 'Tide-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "asTideArgument",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._xxxClient())._asTideArgument();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTideArgument",{},globals.TDClientProxy)})},
args: [],
source: "asTideArgument\x0a\x09^ self xxxClient asTideArgument",
messageSends: ["asTideArgument", "xxxClient", "asTideArgument"],
referencedClasses: []
}),
globals.TDClientProxy);

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
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},globals.TDClientProxy)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (self xxxClient respondsTo: aMessage selector)\x0a\x09\x09ifTrue: [ aMessage sendTo: self xxxClient ]\x0a\x09\x09ifFalse: [ self xxxClient handleFutureMessage: aMessage ]",
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "xxxClient", "selector", "sendTo:", "handleFutureMessage:", "doesNotUnderstand:"],
referencedClasses: []
}),
globals.TDClientProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(anInspector)._setLabel_(self._printString());
$1=_st(anInspector)._setVariables_(globals.HashedCollection._newFromPairs_(["client",self["@client"]]));
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector},globals.TDClientProxy)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: #{\x0a\x09\x09\x09'client' -> client\x0a\x09\x09}",
messageSends: ["setLabel:", "printString", "setVariables:", "inspectOn:"],
referencedClasses: []
}),
globals.TDClientProxy);

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
messageSends: ["xxxClient"],
referencedClasses: []
}),
globals.TDClientProxy);

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
messageSends: ["xxxClient:"],
referencedClasses: []
}),
globals.TDClientProxy);


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
}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},globals.TDClientProxy.klass)})},
args: ["aClient"],
source: "client: aClient\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aClient\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: aClient;\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "basicNew", "initialize", "client:"],
referencedClasses: []
}),
globals.TDClientProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "connectOn:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._on_(aPath);
_st($2)._connect();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"connectOn:",{aPath:aPath},globals.TDClientProxy.klass)})},
args: ["aPath"],
source: "connectOn: aPath\x0a\x09\x22Creates a proxy on aPath and connect it. \x0a\x09 This is a convenience method.\x22\x0a\x09 \x0a\x09^ (self on: aPath) \x0a\x09\x09connect; \x0a\x09\x09yourself.",
messageSends: ["connect", "on:", "yourself", "connectOn:"],
referencedClasses: []
}),
globals.TDClientProxy.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
function $TDClient(){return globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._xxxClient_(_st($TDClient())._on_(aPath));
$3=_st($2)._initialize();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPath:aPath},globals.TDClientProxy.klass)})},
args: ["aPath"],
source: "on: aPath\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aPath\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: (TDClient on: aPath);\x0a\x09\x09initialize",
messageSends: ["xxxClient:", "basicNew", "on:", "initialize", "on:"],
referencedClasses: ["TDClient"]
}),
globals.TDClientProxy.klass);


smalltalk.addClass('TDAction', globals.Object, ['promise', 'resolved', 'failure'], 'Tide-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "beFailure",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@failure"]=true;
_st(self._client())._flushPromises();
return self}, function($ctx1) {$ctx1.fill(self,"beFailure",{},globals.TDAction)})},
args: [],
source: "beFailure\x0a\x09failure := true.\x0a\x09self client flushPromises",
messageSends: ["flushPromises", "client", "beFailure"],
referencedClasses: []
}),
globals.TDAction);

smalltalk.addMethod(
smalltalk.method({
selector: "beResolved",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@failure"];
if(smalltalk.assert($1)){
return self;
};
self["@resolved"]=true;
_st(self._promise())._nextTravel();
return self}, function($ctx1) {$ctx1.fill(self,"beResolved",{},globals.TDAction)})},
args: [],
source: "beResolved\x0a\x09failure ifTrue: [ ^ self ].\x0a\x09resolved := true.\x0a\x09self promise nextTravel",
messageSends: ["ifTrue:", "nextTravel", "promise", "beResolved"],
referencedClasses: []
}),
globals.TDAction);

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
}, function($ctx1) {$ctx1.fill(self,"client",{},globals.TDAction)})},
args: [],
source: "client\x0a\x09^ self promise client",
messageSends: ["client", "promise", "client", "client", "client"],
referencedClasses: []
}),
globals.TDAction);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.TDAction.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@failure"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TDAction)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09failure := false",
messageSends: ["initialize", "initialize"],
referencedClasses: []
}),
globals.TDAction);

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
}, function($ctx1) {$ctx1.fill(self,"isResolved",{},globals.TDAction)})},
args: [],
source: "isResolved\x0a\x09^ resolved ifNil: [ false ]",
messageSends: ["ifNil:", "isResolved", "isResolved", "isResolved"],
referencedClasses: []
}),
globals.TDAction);

smalltalk.addMethod(
smalltalk.method({
selector: "promise",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@promise"];
return $1;
},
args: [],
source: "promise\x0a\x09^ promise",
messageSends: ["promise", "promise", "promise"],
referencedClasses: []
}),
globals.TDAction);

smalltalk.addMethod(
smalltalk.method({
selector: "promise:",
protocol: 'accessing',
fn: function (aPromise){
var self=this;
self["@promise"]=aPromise;
return self},
args: ["aPromise"],
source: "promise: aPromise\x0a\x09promise := aPromise",
messageSends: ["promise:", "promise:", "promise:"],
referencedClasses: []
}),
globals.TDAction);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._beResolved();
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},globals.TDAction)})},
args: [],
source: "resolve\x0a\x09self beResolved",
messageSends: ["beResolved", "resolve", "resolve", "resolve"],
referencedClasses: []
}),
globals.TDAction);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{aPromise:aPromise},globals.TDAction.klass)})},
args: ["aPromise"],
source: "on: aPromise\x0a\x09^ self new \x0a\x09\x09promise: aPromise; \x0a\x09\x09yourself",
messageSends: ["promise:", "new", "yourself", "on:", "on:", "on:"],
referencedClasses: []
}),
globals.TDAction.klass);


smalltalk.addClass('TDCallbackAction', globals.TDAction, ['callback'], 'Tide-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@callback"];
return $1;
},
args: [],
source: "callback\x0a\x09^ callback",
messageSends: ["callback", "callback", "callback"],
referencedClasses: []
}),
globals.TDCallbackAction);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: ["callback:", "callback:", "callback:"],
referencedClasses: []
}),
globals.TDCallbackAction);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._client();
$ctx1.sendIdx["client"]=1;
_st($1)._promisedValue_(_st(self._callback())._value_(_st(self._client())._promisedValue()));
globals.TDCallbackAction.superclass.fn.prototype._resolve.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},globals.TDCallbackAction)})},
args: [],
source: "resolve\x0a\x09self client promisedValue: (self callback value: self client promisedValue).\x0a\x09super resolve",
messageSends: ["promisedValue:", "client", "value:", "callback", "promisedValue", "resolve", "resolve", "resolve", "resolve"],
referencedClasses: []
}),
globals.TDCallbackAction);



smalltalk.addClass('TDRequestAction', globals.TDAction, ['requestUrl', 'data'], 'Tide-Amber-Core');
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
}, function($ctx1) {$ctx1.fill(self,"data",{},smalltalk.TDRequestAction)})},
args: [],
source: "data\x0a\x09^ data",
messageSends: ["data", "data", "data"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "data:",
protocol: 'accessing',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@data"]=json;
return self}, function($ctx1) {$ctx1.fill(self,"data:",{json:json},smalltalk.TDRequestAction)})},
args: ["json"],
source: "data: json\x0a\x09data := json",
messageSends: ["data:", "data:", "data:"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
self._beFailure();
$1=_st(self._promise())._errorHandler();
if(($receiver = $1) == nil || $receiver == null){
_st(anError)._signal();
} else {
var handler;
handler=$receiver;
_st(handler)._failure_(anError);
};
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},globals.TDRequestAction)})},
args: ["anError"],
source: "handleError: anError\x0a\x09self beFailure.\x0a\x09self promise errorHandler \x0a\x09\x09ifNotNil: [ :handler | handler failure: anError ]\x0a\x09\x09ifNil: [ anError signal ]",
messageSends: ["beFailure", "ifNotNil:ifNil:", "errorHandler", "promise", "failure:", "signal", "handleError:"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "handleResponse:status:",
protocol: 'resolving',
fn: function (json,aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(aNumber).__eq_eq((200));
$ctx1.sendIdx["=="]=1;
if(smalltalk.assert($1)){
$2=self._updateClientFromJson_(json);
return $2;
};
$3=_st(aNumber).__eq_eq((201));
$ctx1.sendIdx["=="]=2;
if(smalltalk.assert($3)){
$4=self._newClientFromJson_(json);
return $4;
};
$5=_st(aNumber).__eq_eq((202));
if(smalltalk.assert($5)){
$6=self._serverErrorFromJson_(json);
return $6;
};
self._error_("Invalid server answer code");
return self}, function($ctx1) {$ctx1.fill(self,"handleResponse:status:",{json:json,aNumber:aNumber},globals.TDRequestAction)})},
args: ["json", "aNumber"],
source: "handleResponse: json status: aNumber\x0a\x09aNumber == 200 ifTrue: [ ^ self updateClientFromJson: json ].\x0a\x09aNumber == 201 ifTrue: [ ^ self newClientFromJson: json ].\x0a\x09aNumber == 202 ifTrue: [ ^ self serverErrorFromJson: json ].\x0a\x09\x0a\x09self error: 'Invalid server answer code'.",
messageSends: ["ifTrue:", "==", "updateClientFromJson:", "newClientFromJson:", "serverErrorFromJson:", "error:", "handleResponse:status:", "handleResponse:status:", "handleResponse:status:"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "newClientFromJson:",
protocol: 'private',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._client())._promisedValue_(_st(json)._asTideObject());
return self}, function($ctx1) {$ctx1.fill(self,"newClientFromJson:",{json:json},smalltalk.TDRequestAction)})},
args: ["json"],
source: "newClientFromJson: json\x0a\x09self client promisedValue: json asTideObject",
messageSends: ["promisedValue:", "client", "asTideObject", "newClientFromJson:", "newClientFromJson:", "newClientFromJson:"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "request:",
protocol: 'resolving',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(jQuery)._ajax_options_(self._requestUrl(),globals.HashedCollection._newFromPairs_(["type","POST","dataType","json","data",globals.HashedCollection._newFromPairs_(["arguments",self._data()]),"success",(function(json,textStatus,xhr){
return smalltalk.withContext(function($ctx2) {
$1=_st(xhr)._status();
$ctx2.sendIdx["status"]=1;
self._handleResponse_status_(json,$1);
return self._beResolved();
}, function($ctx2) {$ctx2.fillBlock({json:json,textStatus:textStatus,xhr:xhr},$ctx1,1)})}),"error",(function(ex){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(ex)._status()).__eq((408));
if(smalltalk.assert($2)){
return self._sessionError();
} else {
return self._requestError_(ex);
};
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)})})]));
return self}, function($ctx1) {$ctx1.fill(self,"request:",{aString:aString},globals.TDRequestAction)})},
args: ["aString"],
source: "request: aString\x0a\x09jQuery \x0a\x09\x09ajax: self requestUrl\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'POST'.\x0a\x09\x09\x09'dataType' -> 'json'.\x0a\x09\x09\x09'data' -> #{ 'arguments' -> self data }.\x0a\x09\x09\x09'success' -> [ :json :textStatus :xhr |\x0a\x09\x09\x09\x09self handleResponse: json status: xhr status.\x0a\x09\x09\x09\x09self beResolved ].\x0a\x09\x09\x09'error' -> [ :ex |\x0a\x09\x09\x09\x09ex status = 408 \x0a\x09\x09\x09\x09\x09ifTrue: [ self sessionError ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self requestError: ex ] ]\x0a\x09\x09}",
messageSends: ["ajax:options:", "requestUrl", "data", "handleResponse:status:", "status", "beResolved", "ifTrue:ifFalse:", "=", "sessionError", "requestError:", "request:"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "requestError:",
protocol: 'error handling',
fn: function (anObject){
var self=this;
var error;
function $TDRequestError(){return globals.TDRequestError||(typeof TDRequestError=="undefined"?nil:TDRequestError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($TDRequestError())._new();
_st($1)._xhr_(anObject);
$2=_st($1)._yourself();
error=$2;
self._handleError_(error);
return self}, function($ctx1) {$ctx1.fill(self,"requestError:",{anObject:anObject,error:error},globals.TDRequestAction)})},
args: ["anObject"],
source: "requestError: anObject\x0a\x09| error |\x0a\x09\x0a\x09error := TDRequestError new\x0a\x09\x09xhr: anObject;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self handleError: error",
messageSends: ["xhr:", "new", "yourself", "handleError:", "requestError:", "requestError:"],
referencedClasses: ["TDRequestError"]
}),
globals.TDRequestAction);

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
}, function($ctx1) {$ctx1.fill(self,"requestUrl",{},smalltalk.TDRequestAction)})},
args: [],
source: "requestUrl\x0a\x09^ requestUrl",
messageSends: ["requestUrl", "requestUrl", "requestUrl"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "requestUrl:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@requestUrl"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"requestUrl:",{aString:aString},smalltalk.TDRequestAction)})},
args: ["aString"],
source: "requestUrl: aString\x0a\x09requestUrl := aString",
messageSends: ["requestUrl:", "requestUrl:", "requestUrl:"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._request_(self._requestUrl());
return self}, function($ctx1) {$ctx1.fill(self,"resolve",{},smalltalk.TDRequestAction)})},
args: [],
source: "resolve\x0a\x09self request: self requestUrl",
messageSends: ["request:", "requestUrl", "resolve", "resolve", "resolve"],
referencedClasses: []
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "serverErrorFromJson:",
protocol: 'private',
fn: function (json){
var self=this;
var serverError,error;
function $TDServerError(){return globals.TDServerError||(typeof TDServerError=="undefined"?nil:TDServerError)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
serverError=_st(json)._asTideObject();
$1=_st($TDServerError())._new();
_st($1)._code_(_st(serverError)._code());
_st($1)._messageText_(_st(serverError)._messageText());
$2=_st($1)._yourself();
error=$2;
self._handleError_(error);
return self}, function($ctx1) {$ctx1.fill(self,"serverErrorFromJson:",{json:json,serverError:serverError,error:error},globals.TDRequestAction)})},
args: ["json"],
source: "serverErrorFromJson: json\x0a\x09| serverError error |\x0a\x0a\x09serverError := json asTideObject.\x09\x0a\x09error := TDServerError new \x0a\x09\x09code: serverError code;\x0a\x09\x09messageText: serverError messageText;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self handleError: error",
messageSends: ["asTideObject", "code:", "new", "code", "messageText:", "messageText", "yourself", "handleError:", "serverErrorFromJson:", "serverErrorFromJson:", "serverErrorFromJson:"],
referencedClasses: ["TDServerError"]
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "sessionError",
protocol: 'error handling',
fn: function (){
var self=this;
function $TDSessionErrorHandler(){return globals.TDSessionErrorHandler||(typeof TDSessionErrorHandler=="undefined"?nil:TDSessionErrorHandler)}
return smalltalk.withContext(function($ctx1) { 
_st($TDSessionErrorHandler())._handleSessionError();
return self}, function($ctx1) {$ctx1.fill(self,"sessionError",{},globals.TDRequestAction)})},
args: [],
source: "sessionError\x0a\x09TDSessionErrorHandler handleSessionError",
messageSends: ["handleSessionError", "sessionError"],
referencedClasses: ["TDSessionErrorHandler"]
}),
globals.TDRequestAction);

smalltalk.addMethod(
smalltalk.method({
selector: "updateClientFromJson:",
protocol: 'private',
fn: function (json){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._client())._updateFromJson_(json);
return self}, function($ctx1) {$ctx1.fill(self,"updateClientFromJson:",{json:json},globals.TDRequestAction)})},
args: ["json"],
source: "updateClientFromJson: json\x0a\x09self client updateFromJson: json",
messageSends: ["updateFromJson:", "client", "updateClientFromJson:"],
referencedClasses: []
}),
globals.TDRequestAction);



smalltalk.addClass('TDAsyncPromiseFailureHandler', globals.Object, ['failureAction', 'action'], 'Tide-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "action",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@action"];
return $1;
},
args: [],
source: "action \x0a\x09^ action",
messageSends: ["action", "action", "action"],
referencedClasses: []
}),
globals.TDAsyncPromiseFailureHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "failure:",
protocol: 'signaling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._action())._value_(anError);
return self}, function($ctx1) {$ctx1.fill(self,"failure:",{anError:anError},globals.TDAsyncPromiseFailureHandler)})},
args: ["anError"],
source: "failure: anError\x0a\x09self action value: anError",
messageSends: ["value:", "action", "failure:", "failure:", "failure:"],
referencedClasses: []
}),
globals.TDAsyncPromiseFailureHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeAction:",
protocol: 'initialization',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initialize();
self["@action"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"initializeAction:",{aBlock:aBlock},globals.TDAsyncPromiseFailureHandler)})},
args: ["aBlock"],
source: "initializeAction: aBlock  \x0a\x09self initialize.\x0a\x09action := aBlock.",
messageSends: ["initialize", "initializeAction:", "initializeAction:", "initializeAction:"],
referencedClasses: []
}),
globals.TDAsyncPromiseFailureHandler);


smalltalk.addMethod(
smalltalk.method({
selector: "action:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._initializeAction_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"action:",{aBlock:aBlock},globals.TDAsyncPromiseFailureHandler.klass)})},
args: ["aBlock"],
source: "action: aBlock \x0a\x09^ self basicNew \x0a\x09\x09initializeAction: aBlock;\x0a\x09\x09yourself",
messageSends: ["initializeAction:", "basicNew", "yourself", "action:", "action:", "action:"],
referencedClasses: []
}),
globals.TDAsyncPromiseFailureHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._error_("Use #action:");
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},globals.TDAsyncPromiseFailureHandler.klass)})},
args: [],
source: "new \x0a\x09^ self error: 'Use #action:'",
messageSends: ["error:", "new", "new", "new"],
referencedClasses: []
}),
globals.TDAsyncPromiseFailureHandler.klass);


smalltalk.addClass('TDClient', globals.Object, ['state', 'actions', 'firstPromise', 'promisedValue', 'path', 'id', 'connected'], 'Tide-Amber-Core');
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
}, function($ctx1) {$ctx1.fill(self,"actions",{},smalltalk.TDClient)})},
args: [],
source: "actions\x0a\x09^ actions",
messageSends: ["actions", "actions", "actions"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "asTideArgument",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=globals.HashedCollection._newFromPairs_(["__id__",self._id()]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTideArgument",{},globals.TDClient)})},
args: [],
source: "asTideArgument\x0a\x09^ #{ '__id__' -> self id }",
messageSends: ["id", "asTideArgument", "asTideArgument", "asTideArgument"],
referencedClasses: []
}),
globals.TDClient);

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
self._initialRequest();
};
return self}, function($ctx1) {$ctx1.fill(self,"connect",{},globals.TDClient)})},
args: [],
source: "connect\x0a\x09self isConnected ifFalse: [ self initialRequest ]",
messageSends: ["ifFalse:", "isConnected", "initialRequest", "connect", "connect", "connect"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "flushPromises",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@firstPromise"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushPromises",{},smalltalk.TDClient)})},
args: [],
source: "flushPromises\x0a\x09firstPromise := nil",
messageSends: ["flushPromises", "flushPromises", "flushPromises"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "future",
protocol: 'accessing',
fn: function (){
var self=this;
var promise;
function $TDPromise(){return smalltalk.TDPromise||(typeof TDPromise=="undefined"?nil:TDPromise)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
promise=_st($TDPromise())._on_(self);
$1=self["@firstPromise"];
if(($receiver = $1) == nil || $receiver == null){
self["@firstPromise"]=promise;
self["@firstPromise"];
} else {
_st(self["@firstPromise"])._next_(promise);
};
$2=promise;
return $2;
}, function($ctx1) {$ctx1.fill(self,"future",{promise:promise},smalltalk.TDClient)})},
args: [],
source: "future\x0a\x09| promise |\x0a\x0a\x09promise := TDPromise on: self.\x0a\x0a\x09firstPromise \x0a\x09\x09ifNil: [ firstPromise := promise ]\x0a\x09\x09ifNotNil: [ firstPromise next: promise ].\x0a\x0a\x09^ promise",
messageSends: ["on:", "ifNil:ifNotNil:", "next:", "future", "future", "future"],
referencedClasses: ["TDPromise"]
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "handleFutureMessage:",
protocol: 'forwarding',
fn: function (aMessage){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$receiver;
var $early={};
try {
$1=_st(aMessage)._selector();
$ctx1.sendIdx["selector"]=1;
selector=_st($1)._asString();
_st(self["@state"])._at_ifPresent_(selector,(function(value){
throw $early=[value];
}));
$2=_st(self["@actions"])._at_(selector);
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
$3=_st(self._future())._setRequestActionFromMessage_(aMessage);
return $3;
};
$4=self._promiseNotFound_(_st(aMessage)._selector());
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"handleFutureMessage:",{aMessage:aMessage,selector:selector},globals.TDClient)})},
args: ["aMessage"],
source: "handleFutureMessage: aMessage\x0a\x09| selector |\x0a\x09selector := aMessage selector asString.\x0a\x09\x0a\x09state \x0a\x09\x09at: selector \x0a\x09\x09ifPresent: [ :value | ^ value ].\x0a\x0a\x09(actions at: selector) \x0a\x09\x09ifNotNil: [ ^ self future setRequestActionFromMessage: aMessage ].\x0a\x0a\x09^ self promiseNotFound: aMessage selector",
messageSends: ["asString", "selector", "at:ifPresent:", "ifNotNil:", "at:", "setRequestActionFromMessage:", "future", "promiseNotFound:", "handleFutureMessage:", "handleFutureMessage:", "handleFutureMessage:"],
referencedClasses: []
}),
globals.TDClient);

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
messageSends: ["id", "id", "id"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initialRequest",
protocol: 'updating',
fn: function (){
var self=this;
var promise;
function $TDRequestAction(){return globals.TDRequestAction||(typeof TDRequestAction=="undefined"?nil:TDRequestAction)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
promise=self._future();
$ctx1.sendIdx["future"]=1;
$1=_st($TDRequestAction())._on_(promise);
_st($1)._requestUrl_(self._path());
$2=_st($1)._yourself();
_st(promise)._setAction_($2);
_st(self._future())._then_((function(){
self["@connected"]=true;
return self["@connected"];
}));
return self}, function($ctx1) {$ctx1.fill(self,"initialRequest",{promise:promise},globals.TDClient)})},
args: [],
source: "initialRequest\x0a\x09| promise |\x0a\x09promise := self future.\x0a\x09promise setAction: ((TDRequestAction on: promise)\x0a\x09\x09requestUrl: self path;\x0a\x09\x09yourself).\x0a\x09self future then: [ connected := true ]",
messageSends: ["future", "setAction:", "requestUrl:", "on:", "path", "yourself", "then:", "initialRequest", "initialRequest", "initialRequest"],
referencedClasses: ["TDRequestAction"]
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.TDClient.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@state"]=self._newJavaScriptObject();
$ctx1.sendIdx["newJavaScriptObject"]=1;
self["@actions"]=self._newJavaScriptObject();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TDClient)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22Primitive JS object. I need it because I'm keeping JSON data\x22\x0a\x09state := self newJavaScriptObject. \x0a\x09actions := self newJavaScriptObject",
messageSends: ["initialize", "newJavaScriptObject", "initialize", "initialize", "initialize"],
referencedClasses: []
}),
globals.TDClient);

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
}, function($ctx1) {$ctx1.fill(self,"isConnected",{},smalltalk.TDClient)})},
args: [],
source: "isConnected\x0a\x09^ connected ifNil: [ false ]",
messageSends: ["ifNil:", "isConnected", "isConnected", "isConnected"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "newJavaScriptObject",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return {};
return self}, function($ctx1) {$ctx1.fill(self,"newJavaScriptObject",{},smalltalk.TDClient)})},
args: [],
source: "newJavaScriptObject\x0a\x09<return {}>",
messageSends: ["newJavaScriptObject", "newJavaScriptObject", "newJavaScriptObject"],
referencedClasses: []
}),
globals.TDClient);

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
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.TDClient)})},
args: [],
source: "path\x0a\x09^ path",
messageSends: ["path", "path", "path"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},smalltalk.TDClient)})},
args: ["aString"],
source: "path: aString\x0a\x09path := aString",
messageSends: ["path:", "path:", "path:"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "promiseNotFound:",
protocol: 'error handling',
fn: function (aSelector){
var self=this;
function $TDPromiseNotFound(){return globals.TDPromiseNotFound||(typeof TDPromiseNotFound=="undefined"?nil:TDPromiseNotFound)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($TDPromiseNotFound())._new();
_st($1)._selector_(aSelector);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"promiseNotFound:",{aSelector:aSelector},globals.TDClient)})},
args: ["aSelector"],
source: "promiseNotFound: aSelector\x0a\x09TDPromiseNotFound new\x0a\x09\x09selector: aSelector;\x0a\x09\x09signal",
messageSends: ["selector:", "new", "signal", "promiseNotFound:", "promiseNotFound:", "promiseNotFound:"],
referencedClasses: ["TDPromiseNotFound"]
}),
globals.TDClient);

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
}, function($ctx1) {$ctx1.fill(self,"promisedValue",{},smalltalk.TDClient)})},
args: [],
source: "promisedValue\x0a\x09^ promisedValue",
messageSends: ["promisedValue", "promisedValue", "promisedValue"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "promisedValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@promisedValue"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"promisedValue:",{anObject:anObject},smalltalk.TDClient)})},
args: ["anObject"],
source: "promisedValue: anObject\x0a\x09promisedValue := anObject",
messageSends: ["promisedValue:", "promisedValue:", "promisedValue:"],
referencedClasses: []
}),
globals.TDClient);

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
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.TDClient)})},
args: [],
source: "state\x0a\x09^ state",
messageSends: ["state", "state", "state"],
referencedClasses: []
}),
globals.TDClient);

smalltalk.addMethod(
smalltalk.method({
selector: "then:",
protocol: 'forwarding',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._future())._then_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},smalltalk.TDClient)})},
args: ["aBlock"],
source: "then: aBlock\x0a\x09self future then: aBlock",
messageSends: ["then:", "future", "then:", "then:", "then:"],
referencedClasses: []
}),
globals.TDClient);

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
return self}, function($ctx1) {$ctx1.fill(self,"updateActions:",{aDictionary:aDictionary},smalltalk.TDClient)})},
args: ["aDictionary"],
source: "updateActions: aDictionary\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09actions at: key put: value ]",
messageSends: ["keysAndValuesDo:", "at:put:", "updateActions:", "updateActions:", "updateActions:"],
referencedClasses: []
}),
globals.TDClient);

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
return _st(self["@state"])._at_put_(key,_st(value)._asTideObject());
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
return self}, function($ctx1) {$ctx1.fill(self,"updateFromJson:",{json:json},globals.TDClient)})},
args: ["json"],
source: "updateFromJson: json\x0a\x09connected := true.\x0a\x09\x0a\x09id := json at: '__id__'.\x0a\x09\x0a\x09(json at: 'state') ifNotNil: [\x0a\x09\x09json state keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09state at: key put: value asTideObject ] ].\x0a\x09(json at: 'actions') ifNotNil: [\x0a\x09\x09json actions keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09actions at: key put: value ] ]",
messageSends: ["at:", "ifNotNil:", "keysAndValuesDo:", "state", "at:put:", "asTideObject", "actions", "updateFromJson:", "updateFromJson:", "updateFromJson:"],
referencedClasses: []
}),
globals.TDClient);

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
return self}, function($ctx1) {$ctx1.fill(self,"updateState:",{aDictionary:aDictionary},smalltalk.TDClient)})},
args: ["aDictionary"],
source: "updateState: aDictionary\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09state at: key put: value ]",
messageSends: ["keysAndValuesDo:", "at:put:", "updateState:", "updateState:", "updateState:"],
referencedClasses: []
}),
globals.TDClient);


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
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{json:json},smalltalk.TDClient.klass)})},
args: ["json"],
source: "fromJson: json\x0a\x09^ self new\x0a\x09\x09updateFromJson: json;\x0a\x09\x09yourself",
messageSends: ["updateFromJson:", "new", "yourself", "fromJson:", "fromJson:", "fromJson:"],
referencedClasses: []
}),
globals.TDClient.klass);

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
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString},smalltalk.TDClient.klass)})},
args: ["aString"],
source: "on: aString\x0a\x09^ self new\x0a\x09\x09path: aString;\x0a\x09\x09yourself",
messageSends: ["path:", "new", "yourself", "on:", "on:", "on:"],
referencedClasses: []
}),
globals.TDClient.klass);


smalltalk.addClass('TDPromise', globals.Object, ['previous', 'next', 'client', 'action', 'errorHandler'], 'Tide-Amber-Core');
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
}, function($ctx1) {$ctx1.fill(self,"action",{},smalltalk.TDPromise)})},
args: [],
source: "action\x0a\x09^ action",
messageSends: ["action", "action", "action"],
referencedClasses: []
}),
globals.TDPromise);

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
}, function($ctx1) {$ctx1.fill(self,"client",{},smalltalk.TDPromise)})},
args: [],
source: "client\x0a\x09^ client",
messageSends: ["client", "client", "client"],
referencedClasses: []
}),
globals.TDPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "client:",
protocol: 'accessing',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@client"]=aClient;
return self}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},smalltalk.TDPromise)})},
args: ["aClient"],
source: "client: aClient\x0a\x09client := aClient",
messageSends: ["client:", "client:", "client:"],
referencedClasses: []
}),
globals.TDPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "errorHandler",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@errorHandler"];
return $1;
},
args: [],
source: "errorHandler\x0a\x09^ errorHandler",
messageSends: ["errorHandler", "errorHandler", "errorHandler"],
referencedClasses: []
}),
globals.TDPromise);

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
}, function($ctx1) {$ctx1.fill(self,"future",{},smalltalk.TDPromise)})},
args: [],
source: "future\x0a\x09^ self client future",
messageSends: ["future", "client", "future", "future", "future"],
referencedClasses: []
}),
globals.TDPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.TDPromise.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@errorHandler"]=_st(self._class())._errorHandler();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TDPromise)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09errorHandler := self class errorHandler.",
messageSends: ["initialize", "errorHandler", "class", "initialize", "initialize", "initialize"],
referencedClasses: []
}),
globals.TDPromise);

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
}, function($ctx1) {$ctx1.fill(self,"isAssigned",{},smalltalk.TDPromise)})},
args: [],
source: "isAssigned\x0a\x09^ self action notNil",
messageSends: ["notNil", "action", "isAssigned", "isAssigned", "isAssigned"],
referencedClasses: []
}),
globals.TDPromise);

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
}, function($ctx1) {$ctx1.fill(self,"isResolved",{},smalltalk.TDPromise)})},
args: [],
source: "isResolved\x0a\x09^ self isAssigned and: [ self action isResolved ]",
messageSends: ["and:", "isAssigned", "isResolved", "action", "isResolved", "isResolved", "isResolved"],
referencedClasses: []
}),
globals.TDPromise);

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
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.TDPromise)})},
args: [],
source: "next\x0a\x09^ next",
messageSends: ["next", "next", "next"],
referencedClasses: []
}),
globals.TDPromise);

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
return self}, function($ctx1) {$ctx1.fill(self,"next:",{aPromise:aPromise},smalltalk.TDPromise)})},
args: ["aPromise"],
source: "next: aPromise\x0a\x09next \x0a\x09\x09ifNil: [ \x0a\x09\x09\x09next := aPromise. \x0a\x09\x09\x09aPromise previous: self ]\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09next next: aPromise ]",
messageSends: ["ifNil:ifNotNil:", "previous:", "next:", "next:", "next:", "next:"],
referencedClasses: []
}),
globals.TDPromise);

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
return self}, function($ctx1) {$ctx1.fill(self,"nextTravel",{},smalltalk.TDPromise)})},
args: [],
source: "nextTravel\x0a\x09self next \x0a\x09\x09ifNil: [ self client flushPromises ]\x0a\x09\x09ifNotNil: [ self next stepTravel ]",
messageSends: ["ifNil:ifNotNil:", "next", "flushPromises", "client", "stepTravel", "nextTravel", "nextTravel", "nextTravel"],
referencedClasses: []
}),
globals.TDPromise);

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
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.TDPromise)})},
args: [],
source: "previous\x0a\x09^ previous",
messageSends: ["previous", "previous", "previous"],
referencedClasses: []
}),
globals.TDPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "previous:",
protocol: 'accessing',
fn: function (aPromise){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@previous"]=aPromise;
return self}, function($ctx1) {$ctx1.fill(self,"previous:",{aPromise:aPromise},smalltalk.TDPromise)})},
args: ["aPromise"],
source: "previous: aPromise\x0a\x09previous := aPromise",
messageSends: ["previous:", "previous:", "previous:"],
referencedClasses: []
}),
globals.TDPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "setAction:",
protocol: 'accessing',
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@action"]=anAction;
self._travel();
return self}, function($ctx1) {$ctx1.fill(self,"setAction:",{anAction:anAction},smalltalk.TDPromise)})},
args: ["anAction"],
source: "setAction: anAction\x0a\x09action := anAction.\x0a\x09self travel",
messageSends: ["travel", "setAction:", "setAction:", "setAction:"],
referencedClasses: []
}),
globals.TDPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "setRequestActionFromMessage:",
protocol: 'actions',
fn: function (aMessage){
var self=this;
var url,data;
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $TDRequestAction(){return globals.TDRequestAction||(typeof TDRequestAction=="undefined"?nil:TDRequestAction)}
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
return _st(each)._asTideArgument();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
data=_st($JSON())._stringify_($1);
$4=_st($TDRequestAction())._on_(self);
_st($4)._requestUrl_(url);
_st($4)._data_(data);
$5=_st($4)._yourself();
self._setAction_($5);
return self}, function($ctx1) {$ctx1.fill(self,"setRequestActionFromMessage:",{aMessage:aMessage,url:url,data:data},globals.TDPromise)})},
args: ["aMessage"],
source: "setRequestActionFromMessage: aMessage\x0a\x09| url data |\x0a\x09url := self client actions at: aMessage selector.\x0a\x09data := JSON stringify: ((aMessage arguments ifNil: [ #() ]) \x0a\x09\x09collect: [ :each | each asTideArgument ]).\x0a\x09self setAction: ((TDRequestAction on: self)\x0a\x09\x09requestUrl: url;\x0a\x09\x09data: data;\x0a\x09\x09yourself)",
messageSends: ["at:", "actions", "client", "selector", "stringify:", "collect:", "ifNil:", "arguments", "asTideArgument", "setAction:", "requestUrl:", "on:", "data:", "yourself", "setRequestActionFromMessage:", "setRequestActionFromMessage:", "setRequestActionFromMessage:"],
referencedClasses: ["JSON", "TDRequestAction"]
}),
globals.TDPromise);

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
return self}, function($ctx1) {$ctx1.fill(self,"stepTravel",{},smalltalk.TDPromise)})},
args: [],
source: "stepTravel\x0a\x09self action \x0a\x09\x09ifNil: [ self nextTravel ]\x0a\x09\x09ifNotNil: [ self action resolve ]",
messageSends: ["ifNil:ifNotNil:", "action", "nextTravel", "resolve", "stepTravel", "stepTravel", "stepTravel"],
referencedClasses: []
}),
globals.TDPromise);

smalltalk.addMethod(
smalltalk.method({
selector: "then:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
function $TDCallbackAction(){return globals.TDCallbackAction||(typeof TDCallbackAction=="undefined"?nil:TDCallbackAction)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isAssigned();
if(smalltalk.assert($1)){
_st(_st(self._client())._future())._then_(aBlock);
} else {
self._setAction_(_st(_st($TDCallbackAction())._on_(self))._callback_(aBlock));
};
return self}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},globals.TDPromise)})},
args: ["aBlock"],
source: "then: aBlock\x0a\x09self isAssigned\x0a\x09\x09ifTrue: [ self client future then: aBlock ]\x0a\x09\x09ifFalse: [ self setAction: ((TDCallbackAction on: self) callback: aBlock) ]",
messageSends: ["ifTrue:ifFalse:", "isAssigned", "then:", "future", "client", "setAction:", "callback:", "on:", "then:", "then:", "then:"],
referencedClasses: ["TDCallbackAction"]
}),
globals.TDPromise);

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
return self}, function($ctx1) {$ctx1.fill(self,"travel",{},smalltalk.TDPromise)})},
args: [],
source: "travel\x0a\x09(self previous isNil or: [ self previous isResolved ]) \x0a\x09\x09ifTrue: [ self stepTravel ]",
messageSends: ["ifTrue:", "or:", "isNil", "previous", "isResolved", "stepTravel", "travel", "travel", "travel"],
referencedClasses: []
}),
globals.TDPromise);


globals.TDPromise.klass.iVarNames = ['errorHandler'];
smalltalk.addMethod(
smalltalk.method({
selector: "errorHandler",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@errorHandler"];
return $1;
},
args: [],
source: "errorHandler \x0a\x09^ errorHandler",
messageSends: ["errorHandler", "errorHandler", "errorHandler"],
referencedClasses: []
}),
globals.TDPromise.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "errorHandler:",
protocol: 'accessing',
fn: function (anErrorHandler){
var self=this;
self["@errorHandler"]=anErrorHandler;
return self},
args: ["anErrorHandler"],
source: "errorHandler: anErrorHandler \x0a\x09errorHandler := anErrorHandler",
messageSends: ["errorHandler:", "errorHandler:", "errorHandler:"],
referencedClasses: []
}),
globals.TDPromise.klass);

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
}, function($ctx1) {$ctx1.fill(self,"on:",{aClient:aClient},smalltalk.TDPromise.klass)})},
args: ["aClient"],
source: "on: aClient\x0a\x09^ self new\x0a\x09\x09client: aClient;\x0a\x09\x09yourself",
messageSends: ["client:", "new", "yourself", "on:", "on:", "on:"],
referencedClasses: []
}),
globals.TDPromise.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "use:during:",
protocol: 'accessing',
fn: function (anErrorHandler,aBlock){
var self=this;
var oldErrorHandler;
return smalltalk.withContext(function($ctx1) { 
oldErrorHandler=self._errorHandler();
self._errorHandler_(anErrorHandler);
$ctx1.sendIdx["errorHandler:"]=1;
_st(aBlock)._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return self._errorHandler_(oldErrorHandler);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"use:during:",{anErrorHandler:anErrorHandler,aBlock:aBlock,oldErrorHandler:oldErrorHandler},globals.TDPromise.klass)})},
args: ["anErrorHandler", "aBlock"],
source: "use: anErrorHandler during: aBlock\x0a\x09| oldErrorHandler |\x0a\x09\x0a\x09oldErrorHandler := self errorHandler.\x0a\x09self errorHandler: anErrorHandler.\x0a\x09aBlock ensure: [ self errorHandler: oldErrorHandler ]",
messageSends: ["errorHandler", "errorHandler:", "ensure:", "use:during:", "use:during:", "use:during:"],
referencedClasses: []
}),
globals.TDPromise.klass);


smalltalk.addClass('TDSessionErrorHandler', globals.Object, ['hooks'], 'Tide-Amber-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addHook:",
protocol: 'adding',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._hooks())._add_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"addHook:",{aBlock:aBlock},globals.TDSessionErrorHandler)})},
args: ["aBlock"],
source: "addHook: aBlock\x0a\x09self hooks add: aBlock",
messageSends: ["add:", "hooks", "addHook:"],
referencedClasses: []
}),
globals.TDSessionErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleSessionError",
protocol: 'error handling',
fn: function (){
var self=this;
function $TDSessionError(){return globals.TDSessionError||(typeof TDSessionError=="undefined"?nil:TDSessionError)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._hooks();
$ctx1.sendIdx["hooks"]=1;
_st($1)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($TDSessionError())._signal();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(self._hooks())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._value();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleSessionError",{},globals.TDSessionErrorHandler)})},
args: [],
source: "handleSessionError\x0a\x09self hooks ifEmpty: [ TDSessionError signal ].\x0a\x09self hooks do: [ :each | each value ]",
messageSends: ["ifEmpty:", "hooks", "signal", "do:", "value", "handleSessionError"],
referencedClasses: ["TDSessionError"]
}),
globals.TDSessionErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "hooks",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@hooks"];
if(($receiver = $2) == nil || $receiver == null){
self["@hooks"]=_st($OrderedCollection())._new();
$1=self["@hooks"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"hooks",{},globals.TDSessionErrorHandler)})},
args: [],
source: "hooks\x0a\x09^ hooks ifNil: [ hooks := OrderedCollection new ]",
messageSends: ["ifNil:", "new", "hooks"],
referencedClasses: ["OrderedCollection"]
}),
globals.TDSessionErrorHandler);


globals.TDSessionErrorHandler.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.TDSessionErrorHandler.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
messageSends: ["ifNil:", "new", "current"],
referencedClasses: []
}),
globals.TDSessionErrorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "handleSessionError",
protocol: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._handleSessionError();
return self}, function($ctx1) {$ctx1.fill(self,"handleSessionError",{},globals.TDSessionErrorHandler.klass)})},
args: [],
source: "handleSessionError\x0a\x09self current handleSessionError",
messageSends: ["handleSessionError", "current", "handleSessionError"],
referencedClasses: []
}),
globals.TDSessionErrorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onSessionError:",
protocol: 'adding',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._addHook_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onSessionError:",{aBlock:aBlock},globals.TDSessionErrorHandler.klass)})},
args: ["aBlock"],
source: "onSessionError: aBlock\x0a\x09self current addHook: aBlock",
messageSends: ["addHook:", "current", "onSessionError:"],
referencedClasses: []
}),
globals.TDSessionErrorHandler.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "asTideObject",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asTideObject();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTideObject",{},smalltalk.Array)})},
args: [],
source: "asTideObject\x0a\x09^ self collect: [ :each | each asTideObject ]",
messageSends: ["collect:", "asTideObject", "asTideObject", "asTideObject", "asTideObject"],
referencedClasses: []
}),
globals.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "onPromiseFailureDo:",
protocol: '*Tide-Amber-Core',
fn: function (failureBlock){
var self=this;
function $TDPromise(){return globals.TDPromise||(typeof TDPromise=="undefined"?nil:TDPromise)}
function $TDAsyncPromiseFailureHandler(){return globals.TDAsyncPromiseFailureHandler||(typeof TDAsyncPromiseFailureHandler=="undefined"?nil:TDAsyncPromiseFailureHandler)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TDPromise())._use_during_(_st($TDAsyncPromiseFailureHandler())._action_(failureBlock),self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"onPromiseFailureDo:",{failureBlock:failureBlock},globals.BlockClosure)})},
args: ["failureBlock"],
source: "onPromiseFailureDo: failureBlock\x0a\x09^ TDPromise\x0a\x09\x09use: (TDAsyncPromiseFailureHandler action: failureBlock)\x0a\x09\x09during: self ",
messageSends: ["use:during:", "action:", "onPromiseFailureDo:", "onPromiseFailureDo:", "onPromiseFailureDo:"],
referencedClasses: ["TDPromise", "TDAsyncPromiseFailureHandler"]
}),
globals.BlockClosure);

smalltalk.addMethod(
smalltalk.method({
selector: "asTideObject",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
var dictionary;
return smalltalk.withContext(function($ctx1) { 
var $1;
dictionary=_st(self._class())._new();
self._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(dictionary)._at_put_(key,_st(value)._asTideObject());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
$1=dictionary;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTideObject",{dictionary:dictionary},smalltalk.HashedCollection)})},
args: [],
source: "asTideObject\x0a\x09| dictionary |\x0a\x09dictionary := self class new.\x0a\x09self keysAndValuesDo: [ :key :value | \x0a\x09\x09dictionary at: key put: value asTideObject ].\x0a\x09\x09\x0a\x09^ dictionary",
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asTideObject", "asTideObject", "asTideObject", "asTideObject"],
referencedClasses: []
}),
globals.HashedCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "asTideObject",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
function $TDClientProxy(){return globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
function $TDClient(){return globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TDClientProxy())._client_(_st($TDClient())._fromJson_(self));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTideObject",{},globals.JSObjectProxy)})},
args: [],
source: "asTideObject\x0a\x09^ TDClientProxy client: (TDClient fromJson: self)",
messageSends: ["client:", "fromJson:", "asTideObject"],
referencedClasses: ["TDClientProxy", "TDClient"]
}),
globals.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "asTideArgument",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asTideArgument\x0a\x09^ self",
messageSends: ["asTideArgument", "asTideArgument", "asTideArgument"],
referencedClasses: []
}),
globals.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asTideObject",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTideObject",{},smalltalk.Object)})},
args: [],
source: "asTideObject\x0a\x09^ self",
messageSends: ["asTideObject", "asTideObject", "asTideObject"],
referencedClasses: []
}),
globals.Object);

});

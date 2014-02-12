define("timetravel/Tide-Amber-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit", "timetravel/Tide-Amber-Core"], function(smalltalk,nil,_st){
smalltalk.addPackage('Tide-Amber-Tests');
smalltalk.packages["Tide-Amber-Tests"].transport = {"type":"amd","amdNamespace":"timetravel"};

smalltalk.addClass('TDClientTest', smalltalk.TestCase, ['client'], 'Tide-Amber-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function (){
var self=this;
function $TDClient(){return smalltalk.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
return smalltalk.withContext(function($ctx1) { 
self["@client"]=_st($TDClient())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TDClientTest)})},
args: [],
source: "setUp\x0a\x09client := TDClient new",
messageSends: ["new"],
referencedClasses: ["TDClient"]
}),
smalltalk.TDClientTest);

smalltalk.addMethod(
smalltalk.method({
selector: "tearDown",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"tearDown",{},smalltalk.TDClientTest)})},
args: [],
source: "tearDown\x0a\x09\x22Buggy, uncomment later.\x0a\x09\x0a\x09client := nil\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDClientTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testForwarding",
category: 'tests',
fn: function (){
var self=this;
function $TDProxy(){return smalltalk.TDProxy||(typeof TDProxy=="undefined"?nil:TDProxy)}
function $TDClient(){return smalltalk.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
self["@client"]=_st($TDProxy())._client_(_st($TDClient())._new());
self._should_raise_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@client"])._count();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$MessageNotUnderstood());
_st(_st(self["@client"])._xxxClient())._updateFromJson_(_st($JSON())._parse_("{\x22state\x22: {\x22count\x22: 1}}"));
self._assert_equals_(_st(self["@client"])._count(),(1));
_st(_st(self["@client"])._xxxClient())._updateFromJson_(_st($JSON())._parse_("{\x22state\x22: {\x22count\x22: 2}}"));
self._assert_equals_(_st(self["@client"])._count(),(2));
return self}, function($ctx1) {$ctx1.fill(self,"testForwarding",{},smalltalk.TDClientTest)})},
args: [],
source: "testForwarding\x0a\x09\x22| client |\x22\x0a\x09client := TDProxy client: (TDClient new).\x0a\x0a\x09self should: [ client count ] raise: MessageNotUnderstood.\x09\x0a\x0a\x09client xxxClient updateFromJson: (JSON parse: '{\x22state\x22: {\x22count\x22: 1}}').\x0a\x09self assert: client count equals: 1.\x0a\x0a\x09client xxxClient updateFromJson: (JSON parse: '{\x22state\x22: {\x22count\x22: 2}}').\x0a\x09self assert: client count equals: 2",
messageSends: ["client:", "new", "should:raise:", "count", "updateFromJson:", "xxxClient", "parse:", "assert:equals:"],
referencedClasses: ["TDProxy", "TDClient", "MessageNotUnderstood", "JSON"]
}),
smalltalk.TDClientTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFuture",
category: 'tests',
fn: function (){
var self=this;
var p1,p2,p3;
return smalltalk.withContext(function($ctx1) { 
p1=_st(self["@client"])._future();
p2=_st(p1)._future();
p3=_st(self["@client"])._future();
self._assert_equals_(_st(p1)._previous(),nil);
self._assert_equals_(_st(p1)._next(),p2);
self._assert_equals_(_st(p2)._previous(),p1);
self._assert_equals_(_st(p2)._next(),p3);
self._assert_equals_(_st(p3)._previous(),p2);
self._assert_equals_(_st(p3)._next(),nil);
return self}, function($ctx1) {$ctx1.fill(self,"testFuture",{p1:p1,p2:p2,p3:p3},smalltalk.TDClientTest)})},
args: [],
source: "testFuture\x0a\x09| p1 p2 p3 |\x0a\x0a\x09p1 := client future.\x0a\x09p2 := p1 future.\x0a\x09p3 := client future.\x0a\x0a\x09self assert: p1 previous equals: nil.\x0a\x09self assert: p1 next equals: p2.\x0a\x09\x0a\x09self assert: p2 previous equals: p1.\x0a\x09self assert: p2 next equals: p3.\x0a\x0a\x09self assert: p3 previous equals: p2.\x0a\x09self assert: p3 next equals: nil",
messageSends: ["future", "assert:equals:", "previous", "next"],
referencedClasses: []
}),
smalltalk.TDClientTest);



smalltalk.addClass('TDMockProxy', smalltalk.TDProxy, ['catchedSelectors'], 'Tide-Amber-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "catchedSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@catchedSelectors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"catchedSelectors",{},smalltalk.TDMockProxy)})},
args: [],
source: "catchedSelectors\x0a\x09^ catchedSelectors",
messageSends: [],
referencedClasses: []
}),
smalltalk.TDMockProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'error handling',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@catchedSelectors"])._add_(_st(aMessage)._selector());
return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.TDMockProxy)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09catchedSelectors add: aMessage selector",
messageSends: ["add:", "selector"],
referencedClasses: []
}),
smalltalk.TDMockProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TDMockProxy.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@catchedSelectors"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TDMockProxy)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09catchedSelectors := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TDMockProxy);



smalltalk.addClass('TDProxyTest', smalltalk.TestCase, [], 'Tide-Amber-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testDNU",
category: 'tests',
fn: function (){
var self=this;
var proxy;
function $TDMockProxy(){return smalltalk.TDMockProxy||(typeof TDMockProxy=="undefined"?nil:TDMockProxy)}
return smalltalk.withContext(function($ctx1) { 
proxy=_st($TDMockProxy())._new();
_st(proxy)._yourself();
self._assert_(_st(_st(proxy)._catchedSelectors())._includes_("yourself"));
_st(proxy)._catchedSelectors();
self._deny_(_st(_st(proxy)._catchedSelectors())._includes_("catchedSelectors"));
return self}, function($ctx1) {$ctx1.fill(self,"testDNU",{proxy:proxy},smalltalk.TDProxyTest)})},
args: [],
source: "testDNU\x0a\x09| proxy |\x0a\x09proxy := TDMockProxy new.\x0a\x0a\x09proxy yourself.\x0a\x09self assert: (proxy catchedSelectors includes: 'yourself').\x0a\x0a\x09proxy catchedSelectors.\x0a\x09self deny: (proxy catchedSelectors includes: 'catchedSelectors').",
messageSends: ["new", "yourself", "assert:", "includes:", "catchedSelectors", "deny:"],
referencedClasses: ["TDMockProxy"]
}),
smalltalk.TDProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInheritedSelectors",
category: 'tests',
fn: function (){
var self=this;
var proxy;
function $TDProxy(){return smalltalk.TDProxy||(typeof TDProxy=="undefined"?nil:TDProxy)}
return smalltalk.withContext(function($ctx1) { 
proxy=_st($TDProxy())._basicNew();
self._assert_(_st(_st(proxy)._inheritedSelectors())._includes_("isNil"));
self._deny_(_st(_st(proxy)._inheritedSelectors())._includes_("xxxClient"));
return self}, function($ctx1) {$ctx1.fill(self,"testInheritedSelectors",{proxy:proxy},smalltalk.TDProxyTest)})},
args: [],
source: "testInheritedSelectors\x0a\x09| proxy |\x0a\x0a\x09proxy := TDProxy basicNew.\x0a\x0a\x09self assert: (proxy inheritedSelectors includes: 'isNil').\x0a\x09self deny: (proxy inheritedSelectors includes: 'xxxClient')",
messageSends: ["basicNew", "assert:", "includes:", "inheritedSelectors", "deny:"],
referencedClasses: ["TDProxy"]
}),
smalltalk.TDProxyTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testxxxClient",
category: 'tests',
fn: function (){
var self=this;
var proxy,client;
function $TDClient(){return smalltalk.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
function $TDProxy(){return smalltalk.TDProxy||(typeof TDProxy=="undefined"?nil:TDProxy)}
return smalltalk.withContext(function($ctx1) { 
client=_st($TDClient())._new();
proxy=_st($TDProxy())._client_(client);
self._assert_(_st(_st(proxy)._xxxClient()).__eq_eq(client));
self._assert_(_st(_st(proxy)._yourself()).__eq_eq(client));
return self}, function($ctx1) {$ctx1.fill(self,"testxxxClient",{proxy:proxy,client:client},smalltalk.TDProxyTest)})},
args: [],
source: "testxxxClient\x0a\x09| proxy client |\x0a\x09\x0a\x09client := TDClient new.\x0a\x09proxy := TDProxy client: client.\x0a\x0a\x09self assert: proxy xxxClient == client.\x0a\x09self assert: proxy yourself == client.",
messageSends: ["new", "client:", "assert:", "==", "xxxClient", "yourself"],
referencedClasses: ["TDClient", "TDProxy"]
}),
smalltalk.TDProxyTest);


});

smalltalk.addPackage('TimeTravel-Amber-Tests', {});
smalltalk.addClass('T2ClientTest', smalltalk.TestCase, ['client'], 'TimeTravel-Amber-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'initialization',
fn: function () {
    var self = this;
    self['@client'] = smalltalk.send(smalltalk.T2Client || T2Client, "_new", []);
    return self;
},
args: [],
source: "setUp\x0a\x09client := T2Client new",
messageSends: ["new"],
referencedClasses: ["T2Client"]
}),
smalltalk.T2ClientTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
category: 'initialization',
fn: function () {
    var self = this;
    return self;
},
args: [],
source: "tearDown\x0a\x09\x22Buggy, uncomment later.\x0a\x09\x0a\x09client := nil\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2ClientTest);

smalltalk.addMethod(
"_testForwarding",
smalltalk.method({
selector: "testForwarding",
category: 'tests',
fn: function (){
var self=this;
var client=nil;
(self['@client']=smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_client_", [smalltalk.send((smalltalk.T2Client || T2Client), "_new", [])]));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(self['@client'], "_count", []);}), (smalltalk.MessageNotUnderstood || MessageNotUnderstood)]);
smalltalk.send(smalltalk.send(self['@client'], "_xxxClient", []), "_updateFromJson_", [smalltalk.send((smalltalk.JSON || JSON), "_parse_", ["{\x22state\x22: {\x22count\x22: 1}}"])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@client'], "_count", []), (1)]);
smalltalk.send(smalltalk.send(self['@client'], "_xxxClient", []), "_updateFromJson_", [smalltalk.send((smalltalk.JSON || JSON), "_parse_", ["{\x22state\x22: {\x22count\x22: 2}}"])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@client'], "_count", []), (2)]);
return self;},
args: [],
source: "testForwarding\x0a\x09| client |\x0a\x09client := T2Proxy client: (T2Client new).\x0a\x0a\x09self should: [ client count ] raise: MessageNotUnderstood.\x09\x0a\x0a\x09client xxxClient updateFromJson: (JSON parse: '{\x22state\x22: {\x22count\x22: 1}}').\x0a\x09self assert: client count equals: 1.\x0a\x0a\x09client xxxClient updateFromJson: (JSON parse: '{\x22state\x22: {\x22count\x22: 2}}').\x0a\x09self assert: client count equals: 2",
messageSends: ["client:", "new", "should:raise:", "count", "updateFromJson:", "xxxClient", "parse:", "assert:equals:"],
referencedClasses: ["T2Proxy", "T2Client", "MessageNotUnderstood", "JSON"]
}),
smalltalk.T2ClientTest);

smalltalk.addMethod(
"_testFuture",
smalltalk.method({
selector: "testFuture",
category: 'tests',
fn: function () {
    var self = this;
    var p1 = nil;
    var p2 = nil;
    var p3 = nil;
    p1 = smalltalk.send(self['@client'], "_future", []);
    p2 = smalltalk.send(p1, "_future", []);
    p3 = smalltalk.send(self['@client'], "_future", []);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(p1, "_previous", []), nil]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(p1, "_next", []), p2]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(p2, "_previous", []), p1]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(p2, "_next", []), p3]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(p3, "_previous", []), p2]);
    smalltalk.send(self, "_assert_equals_", [smalltalk.send(p3, "_next", []), nil]);
    return self;
},
args: [],
source: "testFuture\x0a\x09| p1 p2 p3 |\x0a\x0a\x09p1 := client future.\x0a\x09p2 := p1 future.\x0a\x09p3 := client future.\x0a\x0a\x09self assert: p1 previous equals: nil.\x0a\x09self assert: p1 next equals: p2.\x0a\x09\x0a\x09self assert: p2 previous equals: p1.\x0a\x09self assert: p2 next equals: p3.\x0a\x0a\x09self assert: p3 previous equals: p2.\x0a\x09self assert: p3 next equals: nil",
messageSends: ["future", "assert:equals:", "previous", "next"],
referencedClasses: []
}),
smalltalk.T2ClientTest);



smalltalk.addClass('T2MockProxy', smalltalk.T2Proxy, ['catchedSelectors'], 'TimeTravel-Amber-Tests');
smalltalk.addMethod(
"_catchedSelectors",
smalltalk.method({
selector: "catchedSelectors",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@catchedSelectors'];
    return self;
},
args: [],
source: "catchedSelectors\x0a\x09^ catchedSelectors",
messageSends: [],
referencedClasses: []
}),
smalltalk.T2MockProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'error handling',
fn: function (aMessage) {
    var self = this;
    smalltalk.send(self['@catchedSelectors'], "_add_", [smalltalk.send(aMessage, "_selector", [])]);
    return self;
},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09catchedSelectors add: aMessage selector",
messageSends: ["add:", "selector"],
referencedClasses: []
}),
smalltalk.T2MockProxy);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.T2MockProxy.superclass || nil);
(self['@catchedSelectors']=[]);
return self;},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09catchedSelectors := #()",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.T2MockProxy);



smalltalk.addClass('T2ProxyTest', smalltalk.TestCase, [], 'TimeTravel-Amber-Tests');
smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
category: 'tests',
fn: function (){
var self=this;
var proxy=nil;
(proxy=smalltalk.send((smalltalk.T2MockProxy || T2MockProxy), "_new", []));
smalltalk.send(proxy, "_yourself", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(proxy, "_catchedSelectors", []), "_includes_", ["yourself"])]);
smalltalk.send(proxy, "_catchedSelectors", []);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(proxy, "_catchedSelectors", []), "_includes_", ["catchedSelectors"])]);
return self;},
args: [],
source: "testDNU\x0a\x09| proxy |\x0a\x09proxy := T2MockProxy new.\x0a\x0a\x09proxy yourself.\x0a\x09self assert: (proxy catchedSelectors includes: 'yourself').\x0a\x0a\x09proxy catchedSelectors.\x0a\x09self deny: (proxy catchedSelectors includes: 'catchedSelectors').",
messageSends: ["new", "yourself", "assert:", "includes:", "catchedSelectors", "deny:"],
referencedClasses: ["T2MockProxy"]
}),
smalltalk.T2ProxyTest);

smalltalk.addMethod(
"_testInheritedSelectors",
smalltalk.method({
selector: "testInheritedSelectors",
category: 'tests',
fn: function (){
var self=this;
var proxy=nil;
(proxy=smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_basicNew", []));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(proxy, "_inheritedSelectors", []), "_includes_", ["isNil"])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(proxy, "_inheritedSelectors", []), "_includes_", ["xxxClient"])]);
return self;},
args: [],
source: "testInheritedSelectors\x0a\x09| proxy |\x0a\x0a\x09proxy := T2Proxy basicNew.\x0a\x0a\x09self assert: (proxy inheritedSelectors includes: 'isNil').\x0a\x09self deny: (proxy inheritedSelectors includes: 'xxxClient')",
messageSends: ["basicNew", "assert:", "includes:", "inheritedSelectors", "deny:"],
referencedClasses: ["T2Proxy"]
}),
smalltalk.T2ProxyTest);

smalltalk.addMethod(
"_testxxxClient",
smalltalk.method({
selector: "testxxxClient",
category: 'tests',
fn: function (){
var self=this;
var proxy=nil;
var client=nil;
(client=smalltalk.send((smalltalk.T2Client || T2Client), "_new", []));
(proxy=smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_client_", [client]));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(proxy, "_xxxClient", []), "__eq_eq", [client])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(proxy, "_yourself", []), "__eq_eq", [client])]);
return self;},
args: [],
source: "testxxxClient\x0a\x09| proxy client |\x0a\x09\x0a\x09client := T2Client new.\x0a\x09proxy := T2Proxy client: client.\x0a\x0a\x09self assert: proxy xxxClient == client.\x0a\x09self assert: proxy yourself == client.\x0a",
messageSends: ["new", "client:", "assert:", "==", "xxxClient", "yourself"],
referencedClasses: ["T2Client", "T2Proxy"]
}),
smalltalk.T2ProxyTest);




smalltalk.addPackage('TimeTravel-Amber-Tests', {});
smalltalk.addClass('T2ClientTest', smalltalk.TestCase, ['client'], 'TimeTravel-Amber-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function () {
    var self = this;
    self['@client'] = smalltalk.send(smalltalk.T2Client || T2Client, "_new", []);
    return self;
}
}),
smalltalk.T2ClientTest);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function () {
    var self = this;
    return self;
}
}),
smalltalk.T2ClientTest);

smalltalk.addMethod(
"_testForwarding",
smalltalk.method({
selector: "testForwarding",
fn: function (){
var self=this;
var client=nil;
(self['@client']=smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_client_", [smalltalk.send((smalltalk.T2Client || T2Client), "_new", [])]));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(self['@client'], "_count", []);}), (smalltalk.MessageNotUnderstood || MessageNotUnderstood)]);
smalltalk.send(smalltalk.send(self['@client'], "_xxxClient", []), "_updateFromJson_", [smalltalk.send((smalltalk.JSON || JSON), "_parse_", ["{\x22state\x22: {\x22count\x22: 1}}"])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@client'], "_count", []), (1)]);
smalltalk.send(smalltalk.send(self['@client'], "_xxxClient", []), "_updateFromJson_", [smalltalk.send((smalltalk.JSON || JSON), "_parse_", ["{\x22state\x22: {\x22count\x22: 2}}"])]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@client'], "_count", []), (2)]);
return self;}
}),
smalltalk.T2ClientTest);

smalltalk.addMethod(
"_testFuture",
smalltalk.method({
selector: "testFuture",
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
}
}),
smalltalk.T2ClientTest);



smalltalk.addClass('T2MockProxy', smalltalk.T2Proxy, ['catchedSelectors'], 'TimeTravel-Amber-Tests');
smalltalk.addMethod(
"_catchedSelectors",
smalltalk.method({
selector: "catchedSelectors",
fn: function () {
    var self = this;
    return self['@catchedSelectors'];
    return self;
}
}),
smalltalk.T2MockProxy);

smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage) {
    var self = this;
    smalltalk.send(self['@catchedSelectors'], "_add_", [smalltalk.send(aMessage, "_selector", [])]);
    return self;
}
}),
smalltalk.T2MockProxy);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.T2MockProxy.superclass || nil);
(self['@catchedSelectors']=[]);
return self;}
}),
smalltalk.T2MockProxy);



smalltalk.addClass('T2ProxyTest', smalltalk.TestCase, [], 'TimeTravel-Amber-Tests');
smalltalk.addMethod(
"_testDNU",
smalltalk.method({
selector: "testDNU",
fn: function (){
var self=this;
var proxy=nil;
(proxy=smalltalk.send((smalltalk.T2MockProxy || T2MockProxy), "_new", []));
smalltalk.send(proxy, "_yourself", []);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(proxy, "_catchedSelectors", []), "_includes_", ["yourself"])]);
smalltalk.send(proxy, "_catchedSelectors", []);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(proxy, "_catchedSelectors", []), "_includes_", ["catchedSelectors"])]);
return self;}
}),
smalltalk.T2ProxyTest);

smalltalk.addMethod(
"_testInheritedSelectors",
smalltalk.method({
selector: "testInheritedSelectors",
fn: function (){
var self=this;
var proxy=nil;
(proxy=smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_basicNew", []));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(proxy, "_inheritedSelectors", []), "_includes_", ["isNil"])]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(proxy, "_inheritedSelectors", []), "_includes_", ["xxxClient"])]);
return self;}
}),
smalltalk.T2ProxyTest);

smalltalk.addMethod(
"_testxxxClient",
smalltalk.method({
selector: "testxxxClient",
fn: function (){
var self=this;
var proxy=nil;
var client=nil;
(client=smalltalk.send((smalltalk.T2Client || T2Client), "_new", []));
(proxy=smalltalk.send((smalltalk.T2Proxy || T2Proxy), "_client_", [client]));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(proxy, "_xxxClient", []), "__eq_eq", [client])]);
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(proxy, "_yourself", []), "__eq_eq", [client])]);
return self;}
}),
smalltalk.T2ProxyTest);




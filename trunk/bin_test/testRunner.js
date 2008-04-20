$estr = function() { return js.Boot.__string_rec(this,''); }
org = {}
org.puremvc = {}
org.puremvc.haxe = {}
org.puremvc.haxe.patterns = {}
org.puremvc.haxe.patterns.command = {}
org.puremvc.haxe.patterns.command.SimpleCommandTestVO = function(input) { if( input === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.SimpleCommandTestVO::new");
	var $spos = $s.length;
	this.input = input;
	$s.pop();
}}
org.puremvc.haxe.patterns.command.SimpleCommandTestVO.__name__ = ["org","puremvc","haxe","patterns","command","SimpleCommandTestVO"];
org.puremvc.haxe.patterns.command.SimpleCommandTestVO.prototype.input = null;
org.puremvc.haxe.patterns.command.SimpleCommandTestVO.prototype.result = null;
org.puremvc.haxe.patterns.command.SimpleCommandTestVO.prototype.__class__ = org.puremvc.haxe.patterns.command.SimpleCommandTestVO;
org.puremvc.haxe.interfaces = {}
org.puremvc.haxe.interfaces.INotification = function() { }
org.puremvc.haxe.interfaces.INotification.__name__ = ["org","puremvc","haxe","interfaces","INotification"];
org.puremvc.haxe.interfaces.INotification.prototype.getBody = null;
org.puremvc.haxe.interfaces.INotification.prototype.getName = null;
org.puremvc.haxe.interfaces.INotification.prototype.getType = null;
org.puremvc.haxe.interfaces.INotification.prototype.setBody = null;
org.puremvc.haxe.interfaces.INotification.prototype.setType = null;
org.puremvc.haxe.interfaces.INotification.prototype.toString = null;
org.puremvc.haxe.interfaces.INotification.prototype.__class__ = org.puremvc.haxe.interfaces.INotification;
org.puremvc.haxe.patterns.observer = {}
org.puremvc.haxe.patterns.observer.Notification = function(name,body,type) { if( name === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.observer.Notification::new");
	var $spos = $s.length;
	this.name = name;
	if(body != null) this.body = body;
	if(type != null) this.type = type;
	$s.pop();
}}
org.puremvc.haxe.patterns.observer.Notification.__name__ = ["org","puremvc","haxe","patterns","observer","Notification"];
org.puremvc.haxe.patterns.observer.Notification.prototype.body = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.getBody = function() {
	$s.push("org.puremvc.haxe.patterns.observer.Notification::getBody");
	var $spos = $s.length;
	{
		var $tmp = this.body;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Notification.prototype.getName = function() {
	$s.push("org.puremvc.haxe.patterns.observer.Notification::getName");
	var $spos = $s.length;
	{
		var $tmp = this.name;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Notification.prototype.getType = function() {
	$s.push("org.puremvc.haxe.patterns.observer.Notification::getType");
	var $spos = $s.length;
	{
		var $tmp = this.type;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Notification.prototype.name = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.setBody = function(body) {
	$s.push("org.puremvc.haxe.patterns.observer.Notification::setBody");
	var $spos = $s.length;
	this.body = body;
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Notification.prototype.setType = function(type) {
	$s.push("org.puremvc.haxe.patterns.observer.Notification::setType");
	var $spos = $s.length;
	this.type = type;
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Notification.prototype.toString = function() {
	$s.push("org.puremvc.haxe.patterns.observer.Notification::toString");
	var $spos = $s.length;
	var msg = "Notification Name: " + this.getName();
	msg += "\nBody:" + (this.body == null?"null":this.body.toString());
	msg += "\nType:" + (this.type == null?"null":this.type);
	{
		var $tmp = msg;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Notification.prototype.type = null;
org.puremvc.haxe.patterns.observer.Notification.prototype.__class__ = org.puremvc.haxe.patterns.observer.Notification;
org.puremvc.haxe.patterns.observer.Notification.__interfaces__ = [org.puremvc.haxe.interfaces.INotification];
org.puremvc.haxe.interfaces.INotifier = function() { }
org.puremvc.haxe.interfaces.INotifier.__name__ = ["org","puremvc","haxe","interfaces","INotifier"];
org.puremvc.haxe.interfaces.INotifier.prototype.sendNotification = null;
org.puremvc.haxe.interfaces.INotifier.prototype.__class__ = org.puremvc.haxe.interfaces.INotifier;
org.puremvc.haxe.patterns.observer.Notifier = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.observer.Notifier::new");
	var $spos = $s.length;
	this.facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	$s.pop();
}}
org.puremvc.haxe.patterns.observer.Notifier.__name__ = ["org","puremvc","haxe","patterns","observer","Notifier"];
org.puremvc.haxe.patterns.observer.Notifier.prototype.facade = null;
org.puremvc.haxe.patterns.observer.Notifier.prototype.sendNotification = function(notificationName,body,type) {
	$s.push("org.puremvc.haxe.patterns.observer.Notifier::sendNotification");
	var $spos = $s.length;
	this.facade.sendNotification(notificationName,body,type);
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Notifier.prototype.__class__ = org.puremvc.haxe.patterns.observer.Notifier;
org.puremvc.haxe.patterns.observer.Notifier.__interfaces__ = [org.puremvc.haxe.interfaces.INotifier];
org.puremvc.haxe.interfaces.ICommand = function() { }
org.puremvc.haxe.interfaces.ICommand.__name__ = ["org","puremvc","haxe","interfaces","ICommand"];
org.puremvc.haxe.interfaces.ICommand.prototype.execute = null;
org.puremvc.haxe.interfaces.ICommand.prototype.__class__ = org.puremvc.haxe.interfaces.ICommand;
org.puremvc.haxe.patterns.command.SimpleCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.SimpleCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.command.SimpleCommand.__name__ = ["org","puremvc","haxe","patterns","command","SimpleCommand"];
org.puremvc.haxe.patterns.command.SimpleCommand.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.command.SimpleCommand.prototype.execute = function(notification) {
	$s.push("org.puremvc.haxe.patterns.command.SimpleCommand::execute");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.patterns.command.SimpleCommand.prototype.__class__ = org.puremvc.haxe.patterns.command.SimpleCommand;
org.puremvc.haxe.patterns.command.SimpleCommand.__interfaces__ = [org.puremvc.haxe.interfaces.ICommand];
org.puremvc.haxe.patterns.command.SimpleCommandTestCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.SimpleCommandTestCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.command.SimpleCommandTestCommand.__name__ = ["org","puremvc","haxe","patterns","command","SimpleCommandTestCommand"];
org.puremvc.haxe.patterns.command.SimpleCommandTestCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.patterns.command.SimpleCommandTestCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.patterns.command.SimpleCommandTestCommand.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.patterns.command.SimpleCommandTestCommand::execute");
	var $spos = $s.length;
	var vo = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,org.puremvc.haxe.patterns.command.SimpleCommandTestVO)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	vo.result = 2 * vo.input;
	$s.pop();
}
org.puremvc.haxe.patterns.command.SimpleCommandTestCommand.prototype.__class__ = org.puremvc.haxe.patterns.command.SimpleCommandTestCommand;
haxe = {}
haxe.Public = function() { }
haxe.Public.__name__ = ["haxe","Public"];
haxe.Public.prototype.__class__ = haxe.Public;
haxe.unit = {}
haxe.unit.TestCase = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestCase::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
haxe.unit.TestCase.__name__ = ["haxe","unit","TestCase"];
haxe.unit.TestCase.prototype.assertEquals = function(expected,actual,c) {
	$s.push("haxe.unit.TestCase::assertEquals");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(actual != expected) {
		this.currentTest.success = false;
		this.currentTest.error = "expected '" + expected + "' but was '" + actual + "'";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.assertFalse = function(b,c) {
	$s.push("haxe.unit.TestCase::assertFalse");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(b == true) {
		this.currentTest.success = false;
		this.currentTest.error = "expected false but was true";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.assertTrue = function(b,c) {
	$s.push("haxe.unit.TestCase::assertTrue");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(b == false) {
		this.currentTest.success = false;
		this.currentTest.error = "expected true but was false";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.currentTest = null;
haxe.unit.TestCase.prototype.print = function(v) {
	$s.push("haxe.unit.TestCase::print");
	var $spos = $s.length;
	haxe.unit.TestRunner.print(v);
	$s.pop();
}
haxe.unit.TestCase.prototype.setup = function() {
	$s.push("haxe.unit.TestCase::setup");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.unit.TestCase.prototype.tearDown = function() {
	$s.push("haxe.unit.TestCase::tearDown");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.unit.TestCase.prototype.__class__ = haxe.unit.TestCase;
haxe.unit.TestCase.__interfaces__ = [haxe.Public];
org.puremvc.haxe.patterns.observer.NotificationTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.observer.NotificationTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.observer.NotificationTest.__name__ = ["org","puremvc","haxe","patterns","observer","NotificationTest"];
org.puremvc.haxe.patterns.observer.NotificationTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.patterns.observer.NotificationTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.patterns.observer.NotificationTest.prototype.testBodyAccessors = function() {
	$s.push("org.puremvc.haxe.patterns.observer.NotificationTest::testBodyAccessors");
	var $spos = $s.length;
	var note = new org.puremvc.haxe.patterns.observer.Notification(null);
	note.setBody(5);
	this.assertEquals(note.getBody(),5,{ fileName : "NotificationTest.hx", lineNumber : 38, className : "org.puremvc.haxe.patterns.observer.NotificationTest", methodName : "testBodyAccessors"});
	$s.pop();
}
org.puremvc.haxe.patterns.observer.NotificationTest.prototype.testConstructor = function() {
	$s.push("org.puremvc.haxe.patterns.observer.NotificationTest::testConstructor");
	var $spos = $s.length;
	var note = new org.puremvc.haxe.patterns.observer.Notification("TestNote",5,"TestNoteType");
	this.assertEquals(note.getName(),"TestNote",{ fileName : "NotificationTest.hx", lineNumber : 51, className : "org.puremvc.haxe.patterns.observer.NotificationTest", methodName : "testConstructor"});
	this.assertEquals(note.getBody(),5,{ fileName : "NotificationTest.hx", lineNumber : 52, className : "org.puremvc.haxe.patterns.observer.NotificationTest", methodName : "testConstructor"});
	this.assertEquals(note.getType(),"TestNoteType",{ fileName : "NotificationTest.hx", lineNumber : 53, className : "org.puremvc.haxe.patterns.observer.NotificationTest", methodName : "testConstructor"});
	$s.pop();
}
org.puremvc.haxe.patterns.observer.NotificationTest.prototype.testNameAccessors = function() {
	$s.push("org.puremvc.haxe.patterns.observer.NotificationTest::testNameAccessors");
	var $spos = $s.length;
	var note = new org.puremvc.haxe.patterns.observer.Notification("TestNote");
	this.assertEquals(note.getName(),"TestNote",{ fileName : "NotificationTest.hx", lineNumber : 23, className : "org.puremvc.haxe.patterns.observer.NotificationTest", methodName : "testNameAccessors"});
	$s.pop();
}
org.puremvc.haxe.patterns.observer.NotificationTest.prototype.testToString = function() {
	$s.push("org.puremvc.haxe.patterns.observer.NotificationTest::testToString");
	var $spos = $s.length;
	var note = new org.puremvc.haxe.patterns.observer.Notification("TestNote",[1,3,5],"TestType");
	var ts = "Notification Name: TestNote\nBody:1,3,5\nType:TestType";
	this.assertEquals(note.toString(),ts,{ fileName : "NotificationTest.hx", lineNumber : 73, className : "org.puremvc.haxe.patterns.observer.NotificationTest", methodName : "testToString"});
	$s.pop();
}
org.puremvc.haxe.patterns.observer.NotificationTest.prototype.__class__ = org.puremvc.haxe.patterns.observer.NotificationTest;
org.puremvc.haxe.interfaces.IMediator = function() { }
org.puremvc.haxe.interfaces.IMediator.__name__ = ["org","puremvc","haxe","interfaces","IMediator"];
org.puremvc.haxe.interfaces.IMediator.prototype.getMediatorName = null;
org.puremvc.haxe.interfaces.IMediator.prototype.getViewComponent = null;
org.puremvc.haxe.interfaces.IMediator.prototype.handleNotification = null;
org.puremvc.haxe.interfaces.IMediator.prototype.listNotificationInterests = null;
org.puremvc.haxe.interfaces.IMediator.prototype.onRegister = null;
org.puremvc.haxe.interfaces.IMediator.prototype.onRemove = null;
org.puremvc.haxe.interfaces.IMediator.prototype.setViewComponent = null;
org.puremvc.haxe.interfaces.IMediator.prototype.__class__ = org.puremvc.haxe.interfaces.IMediator;
org.puremvc.haxe.patterns.mediator = {}
org.puremvc.haxe.patterns.mediator.Mediator = function(mediatorName,viewComponent) { if( mediatorName === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.mediator.Mediator::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	this.mediatorName = (mediatorName != null?mediatorName:org.puremvc.haxe.patterns.mediator.Mediator.NAME);
	if(viewComponent != null) this.viewComponent = viewComponent;
	$s.pop();
}}
org.puremvc.haxe.patterns.mediator.Mediator.__name__ = ["org","puremvc","haxe","patterns","mediator","Mediator"];
org.puremvc.haxe.patterns.mediator.Mediator.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.mediator.Mediator.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.mediator.Mediator.prototype.getMediatorName = function() {
	$s.push("org.puremvc.haxe.patterns.mediator.Mediator::getMediatorName");
	var $spos = $s.length;
	{
		var $tmp = this.mediatorName;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.getViewComponent = function() {
	$s.push("org.puremvc.haxe.patterns.mediator.Mediator::getViewComponent");
	var $spos = $s.length;
	{
		var $tmp = this.viewComponent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.handleNotification = function(notification) {
	$s.push("org.puremvc.haxe.patterns.mediator.Mediator::handleNotification");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.listNotificationInterests = function() {
	$s.push("org.puremvc.haxe.patterns.mediator.Mediator::listNotificationInterests");
	var $spos = $s.length;
	{
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.mediatorName = null;
org.puremvc.haxe.patterns.mediator.Mediator.prototype.onRegister = function() {
	$s.push("org.puremvc.haxe.patterns.mediator.Mediator::onRegister");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.onRemove = function() {
	$s.push("org.puremvc.haxe.patterns.mediator.Mediator::onRemove");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.setViewComponent = function(viewComponent) {
	$s.push("org.puremvc.haxe.patterns.mediator.Mediator::setViewComponent");
	var $spos = $s.length;
	this.viewComponent = viewComponent;
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.Mediator.prototype.viewComponent = null;
org.puremvc.haxe.patterns.mediator.Mediator.prototype.__class__ = org.puremvc.haxe.patterns.mediator.Mediator;
org.puremvc.haxe.patterns.mediator.Mediator.__interfaces__ = [org.puremvc.haxe.interfaces.IMediator];
List = function(p) { if( p === $_ ) return; {
	$s.push("List::new");
	var $spos = $s.length;
	this.length = 0;
	$s.pop();
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	$s.push("List::add");
	var $spos = $s.length;
	var x = [item,null];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.clear = function() {
	$s.push("List::clear");
	var $spos = $s.length;
	this.h = null;
	this.length = 0;
	$s.pop();
}
List.prototype.filter = function(f) {
	$s.push("List::filter");
	var $spos = $s.length;
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	{
		var $tmp = l2;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.first = function() {
	$s.push("List::first");
	var $spos = $s.length;
	{
		var $tmp = (this.h == null?null:this.h[0]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	$s.push("List::isEmpty");
	var $spos = $s.length;
	{
		var $tmp = (this.h == null);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.iterator = function() {
	$s.push("List::iterator");
	var $spos = $s.length;
	{
		var $tmp = { h : this.h, hasNext : function() {
			$s.push("List::iterator@158");
			var $spos = $s.length;
			{
				var $tmp = (this.h != null);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("List::iterator@161");
			var $spos = $s.length;
			{
				if(this.h == null) {
					var $tmp = null;
					$s.pop();
					return $tmp;
				}
				var x = this.h[0];
				this.h = this.h[1];
				{
					var $tmp = x;
					$s.pop();
					return $tmp;
				}
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.join = function(sep) {
	$s.push("List::join");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.add(sep);
		s.add(l[0]);
		l = l[1];
	}
	{
		var $tmp = s.toString();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.last = function() {
	$s.push("List::last");
	var $spos = $s.length;
	{
		var $tmp = (this.q == null?null:this.q[0]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.length = null;
List.prototype.map = function(f) {
	$s.push("List::map");
	var $spos = $s.length;
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	{
		var $tmp = b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.pop = function() {
	$s.push("List::pop");
	var $spos = $s.length;
	if(this.h == null) {
		var $tmp = null;
		$s.pop();
		return $tmp;
	}
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	{
		var $tmp = x;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.push = function(item) {
	$s.push("List::push");
	var $spos = $s.length;
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	$s.push("List::remove");
	var $spos = $s.length;
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			{
				var $tmp = true;
				$s.pop();
				return $tmp;
			}
		}
		prev = l;
		l = l[1];
	}
	{
		var $tmp = false;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.toString = function() {
	$s.push("List::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.add("{");
	while(l != null) {
		if(first) first = false;
		else s.add(", ");
		s.add(l[0]);
		l = l[1];
	}
	s.add("}");
	{
		var $tmp = s.toString();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.__class__ = List;
org.puremvc.haxe.patterns.facade = {}
org.puremvc.haxe.patterns.facade.FacadeTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.facade.FacadeTest.__name__ = ["org","puremvc","haxe","patterns","facade","FacadeTest"];
org.puremvc.haxe.patterns.facade.FacadeTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.patterns.facade.FacadeTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testGetInstance = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testGetInstance");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	this.assertTrue(facade != null,{ fileName : "FacadeTest.hx", lineNumber : 31, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testGetInstance"});
	this.assertTrue(Std["is"](facade,org.puremvc.haxe.interfaces.IFacade),{ fileName : "FacadeTest.hx", lineNumber : 32, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testGetInstance"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testHasCommand = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testHasCommand");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	facade.registerCommand("facadeHasCommandTest",org.puremvc.haxe.patterns.facade.FacadeTestCommand);
	this.assertTrue(facade.hasCommand("facadeHasCommandTest"),{ fileName : "FacadeTest.hx", lineNumber : 217, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testHasCommand"});
	facade.removeCommand("facadeHasCommandTest");
	this.assertFalse(facade.hasCommand("facadeHasCommandTest"),{ fileName : "FacadeTest.hx", lineNumber : 223, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testHasCommand"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testHasMediator = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testHasMediator");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	facade.registerMediator(new org.puremvc.haxe.patterns.mediator.Mediator("facadeHasMediatorTest",new String("")));
	this.assertTrue(facade.hasMediator("facadeHasMediatorTest"),{ fileName : "FacadeTest.hx", lineNumber : 198, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testHasMediator"});
	facade.removeMediator("facadeHasMediatorTest");
	this.assertFalse(facade.hasMediator("facadeHasMediatorTest"),{ fileName : "FacadeTest.hx", lineNumber : 204, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testHasMediator"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testHasProxy = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testHasProxy");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	facade.registerProxy(new org.puremvc.haxe.patterns.proxy.Proxy("hasProxyTest",[1,2,3]));
	this.assertEquals(facade.hasProxy("hasProxyTest"),true,{ fileName : "FacadeTest.hx", lineNumber : 184, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testHasProxy"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testRegisterAndRemoveCommandAndSendNotification = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testRegisterAndRemoveCommandAndSendNotification");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	facade.registerCommand("FacadeTestNote",org.puremvc.haxe.patterns.facade.FacadeTestCommand);
	facade.removeCommand("FacadeTestNote");
	var vo = new org.puremvc.haxe.patterns.facade.FacadeTestVO(32);
	facade.sendNotification("FacadeTestNote",vo);
	this.assertTrue(vo.result != 64,{ fileName : "FacadeTest.hx", lineNumber : 94, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRemoveCommandAndSendNotification"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testRegisterAndRemoveProxy = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testRegisterAndRemoveProxy");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	var proxy = new org.puremvc.haxe.patterns.proxy.Proxy("sizes",["7","13","21"]);
	facade.registerProxy(proxy);
	var removedProxy = facade.removeProxy("sizes");
	this.assertEquals(removedProxy.getProxyName(),"sizes",{ fileName : "FacadeTest.hx", lineNumber : 142, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRemoveProxy"});
	proxy = facade.retrieveProxy("sizes");
	this.assertTrue(proxy == null,{ fileName : "FacadeTest.hx", lineNumber : 148, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRemoveProxy"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testRegisterAndRetrieveProxy = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testRegisterAndRetrieveProxy");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	facade.registerProxy(new org.puremvc.haxe.patterns.proxy.Proxy("colors",["red","green","blue"]));
	var proxy = facade.retrieveProxy("colors");
	this.assertTrue(Std["is"](proxy,org.puremvc.haxe.interfaces.IProxy),{ fileName : "FacadeTest.hx", lineNumber : 114, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	var data = function($this) {
		var $r;
		var tmp = proxy;
		$r = (Std["is"](tmp,org.puremvc.haxe.patterns.proxy.Proxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).getData();
	this.assertTrue(data != null,{ fileName : "FacadeTest.hx", lineNumber : 120, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertTrue(Std["is"](data,Array),{ fileName : "FacadeTest.hx", lineNumber : 121, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data.length,3,{ fileName : "FacadeTest.hx", lineNumber : 122, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[0],"red",{ fileName : "FacadeTest.hx", lineNumber : 123, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[1],"green",{ fileName : "FacadeTest.hx", lineNumber : 124, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[2],"blue",{ fileName : "FacadeTest.hx", lineNumber : 125, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterAndRetrieveProxy"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testRegisterCommandAndSendNotification = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testRegisterCommandAndSendNotification");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	facade.registerCommand("FacadeTestNote",org.puremvc.haxe.patterns.facade.FacadeTestCommand);
	var vo = new org.puremvc.haxe.patterns.facade.FacadeTestVO(32);
	facade.sendNotification("FacadeTestNote",vo);
	this.assertEquals(vo.result,64,{ fileName : "FacadeTest.hx", lineNumber : 64, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterCommandAndSendNotification"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.testRegisterRetrieveAndRemoveMediator = function() {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTest::testRegisterRetrieveAndRemoveMediator");
	var $spos = $s.length;
	var facade = org.puremvc.haxe.patterns.facade.Facade.getInstance();
	facade.registerMediator(new org.puremvc.haxe.patterns.mediator.Mediator(org.puremvc.haxe.patterns.mediator.Mediator.NAME,new String("test view")));
	this.assertTrue(facade.retrieveMediator(org.puremvc.haxe.patterns.mediator.Mediator.NAME) != null,{ fileName : "FacadeTest.hx", lineNumber : 161, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterRetrieveAndRemoveMediator"});
	var removedMediator = facade.removeMediator(org.puremvc.haxe.patterns.mediator.Mediator.NAME);
	this.assertEquals(removedMediator.getMediatorName(),org.puremvc.haxe.patterns.mediator.Mediator.NAME,{ fileName : "FacadeTest.hx", lineNumber : 167, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterRetrieveAndRemoveMediator"});
	this.assertTrue(facade.retrieveMediator(org.puremvc.haxe.patterns.mediator.Mediator.NAME) == null,{ fileName : "FacadeTest.hx", lineNumber : 170, className : "org.puremvc.haxe.patterns.facade.FacadeTest", methodName : "testRegisterRetrieveAndRemoveMediator"});
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTest.prototype.__class__ = org.puremvc.haxe.patterns.facade.FacadeTest;
org.puremvc.haxe.interfaces.IController = function() { }
org.puremvc.haxe.interfaces.IController.__name__ = ["org","puremvc","haxe","interfaces","IController"];
org.puremvc.haxe.interfaces.IController.prototype.executeCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.hasCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.registerCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.removeCommand = null;
org.puremvc.haxe.interfaces.IController.prototype.__class__ = org.puremvc.haxe.interfaces.IController;
org.puremvc.haxe.core = {}
org.puremvc.haxe.core.Controller = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.Controller::new");
	var $spos = $s.length;
	org.puremvc.haxe.core.Controller.instance = this;
	this.commandMap = new Hash();
	this.initializeController();
	$s.pop();
}}
org.puremvc.haxe.core.Controller.__name__ = ["org","puremvc","haxe","core","Controller"];
org.puremvc.haxe.core.Controller.getInstance = function() {
	$s.push("org.puremvc.haxe.core.Controller::getInstance");
	var $spos = $s.length;
	if(org.puremvc.haxe.core.Controller.instance == null) org.puremvc.haxe.core.Controller.instance = new org.puremvc.haxe.core.Controller();
	{
		var $tmp = org.puremvc.haxe.core.Controller.instance;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.Controller.instance = null;
org.puremvc.haxe.core.Controller.prototype.commandMap = null;
org.puremvc.haxe.core.Controller.prototype.executeCommand = function(note) {
	$s.push("org.puremvc.haxe.core.Controller::executeCommand");
	var $spos = $s.length;
	var commandClassRef = this.commandMap.get(note.getName());
	if(commandClassRef == null) return;
	var commandInstance = Type.createInstance(commandClassRef,[]);
	commandInstance.execute(note);
	$s.pop();
}
org.puremvc.haxe.core.Controller.prototype.hasCommand = function(notificationName) {
	$s.push("org.puremvc.haxe.core.Controller::hasCommand");
	var $spos = $s.length;
	{
		var $tmp = this.commandMap.exists(notificationName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.Controller.prototype.initializeController = function() {
	$s.push("org.puremvc.haxe.core.Controller::initializeController");
	var $spos = $s.length;
	this.view = org.puremvc.haxe.core.View.getInstance();
	$s.pop();
}
org.puremvc.haxe.core.Controller.prototype.registerCommand = function(notificationName,commandClassRef) {
	$s.push("org.puremvc.haxe.core.Controller::registerCommand");
	var $spos = $s.length;
	if(!this.commandMap.exists(notificationName)) this.view.registerObserver(notificationName,new org.puremvc.haxe.patterns.observer.Observer($closure(this,"executeCommand"),this));
	this.commandMap.set(notificationName,commandClassRef);
	$s.pop();
}
org.puremvc.haxe.core.Controller.prototype.removeCommand = function(notificationName) {
	$s.push("org.puremvc.haxe.core.Controller::removeCommand");
	var $spos = $s.length;
	if(this.hasCommand(notificationName)) {
		this.view.removeObserver(notificationName,this);
		this.commandMap.remove(notificationName);
	}
	$s.pop();
}
org.puremvc.haxe.core.Controller.prototype.view = null;
org.puremvc.haxe.core.Controller.prototype.__class__ = org.puremvc.haxe.core.Controller;
org.puremvc.haxe.core.Controller.__interfaces__ = [org.puremvc.haxe.interfaces.IController];
org.puremvc.haxe.interfaces.IProxy = function() { }
org.puremvc.haxe.interfaces.IProxy.__name__ = ["org","puremvc","haxe","interfaces","IProxy"];
org.puremvc.haxe.interfaces.IProxy.prototype.getData = null;
org.puremvc.haxe.interfaces.IProxy.prototype.getProxyName = null;
org.puremvc.haxe.interfaces.IProxy.prototype.onRegister = null;
org.puremvc.haxe.interfaces.IProxy.prototype.onRemove = null;
org.puremvc.haxe.interfaces.IProxy.prototype.setData = null;
org.puremvc.haxe.interfaces.IProxy.prototype.__class__ = org.puremvc.haxe.interfaces.IProxy;
org.puremvc.haxe.patterns.proxy = {}
org.puremvc.haxe.patterns.proxy.Proxy = function(proxyName,data) { if( proxyName === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.proxy.Proxy::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	this.proxyName = (proxyName != null?proxyName:org.puremvc.haxe.patterns.proxy.Proxy.NAME);
	if(data != null) this.setData(data);
	$s.pop();
}}
org.puremvc.haxe.patterns.proxy.Proxy.__name__ = ["org","puremvc","haxe","patterns","proxy","Proxy"];
org.puremvc.haxe.patterns.proxy.Proxy.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.proxy.Proxy.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.proxy.Proxy.prototype.data = null;
org.puremvc.haxe.patterns.proxy.Proxy.prototype.getData = function() {
	$s.push("org.puremvc.haxe.patterns.proxy.Proxy::getData");
	var $spos = $s.length;
	{
		var $tmp = this.data;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.getProxyName = function() {
	$s.push("org.puremvc.haxe.patterns.proxy.Proxy::getProxyName");
	var $spos = $s.length;
	{
		var $tmp = this.proxyName;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.onRegister = function() {
	$s.push("org.puremvc.haxe.patterns.proxy.Proxy::onRegister");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.onRemove = function() {
	$s.push("org.puremvc.haxe.patterns.proxy.Proxy::onRemove");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.proxyName = null;
org.puremvc.haxe.patterns.proxy.Proxy.prototype.setData = function(data) {
	$s.push("org.puremvc.haxe.patterns.proxy.Proxy::setData");
	var $spos = $s.length;
	this.data = data;
	$s.pop();
}
org.puremvc.haxe.patterns.proxy.Proxy.prototype.__class__ = org.puremvc.haxe.patterns.proxy.Proxy;
org.puremvc.haxe.patterns.proxy.Proxy.__interfaces__ = [org.puremvc.haxe.interfaces.IProxy];
org.puremvc.haxe.core.ModelTestProxy = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ModelTestProxy::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.proxy.Proxy.apply(this,[org.puremvc.haxe.core.ModelTestProxy.NAME]);
	$s.pop();
}}
org.puremvc.haxe.core.ModelTestProxy.__name__ = ["org","puremvc","haxe","core","ModelTestProxy"];
org.puremvc.haxe.core.ModelTestProxy.__super__ = org.puremvc.haxe.patterns.proxy.Proxy;
for(var k in org.puremvc.haxe.patterns.proxy.Proxy.prototype ) org.puremvc.haxe.core.ModelTestProxy.prototype[k] = org.puremvc.haxe.patterns.proxy.Proxy.prototype[k];
org.puremvc.haxe.core.ModelTestProxy.prototype.onRegister = function() {
	$s.push("org.puremvc.haxe.core.ModelTestProxy::onRegister");
	var $spos = $s.length;
	this.setData(org.puremvc.haxe.core.ModelTestProxy.ON_REGISTER_CALLED);
	$s.pop();
}
org.puremvc.haxe.core.ModelTestProxy.prototype.onRemove = function() {
	$s.push("org.puremvc.haxe.core.ModelTestProxy::onRemove");
	var $spos = $s.length;
	this.setData(org.puremvc.haxe.core.ModelTestProxy.ON_REMOVE_CALLED);
	$s.pop();
}
org.puremvc.haxe.core.ModelTestProxy.prototype.__class__ = org.puremvc.haxe.core.ModelTestProxy;
org.puremvc.haxe.patterns.command.MacroCommandTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.command.MacroCommandTest.__name__ = ["org","puremvc","haxe","patterns","command","MacroCommandTest"];
org.puremvc.haxe.patterns.command.MacroCommandTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.patterns.command.MacroCommandTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.patterns.command.MacroCommandTest.prototype.testMacroCommandExecute = function() {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTest::testMacroCommandExecute");
	var $spos = $s.length;
	var vo = new org.puremvc.haxe.patterns.command.MacroCommandTestVO(5);
	var note = new org.puremvc.haxe.patterns.observer.Notification("MacroCommandTest",vo);
	var command = new org.puremvc.haxe.patterns.command.MacroCommandTestCommand();
	command.execute(note);
	this.assertEquals(vo.result1,10,{ fileName : "MacroCommandTest.hx", lineNumber : 65, className : "org.puremvc.haxe.patterns.command.MacroCommandTest", methodName : "testMacroCommandExecute"});
	this.assertEquals(vo.result2,25,{ fileName : "MacroCommandTest.hx", lineNumber : 66, className : "org.puremvc.haxe.patterns.command.MacroCommandTest", methodName : "testMacroCommandExecute"});
	$s.pop();
}
org.puremvc.haxe.patterns.command.MacroCommandTest.prototype.__class__ = org.puremvc.haxe.patterns.command.MacroCommandTest;
haxe.unit.TestStatus = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestStatus::new");
	var $spos = $s.length;
	this.done = false;
	this.success = false;
	$s.pop();
}}
haxe.unit.TestStatus.__name__ = ["haxe","unit","TestStatus"];
haxe.unit.TestStatus.prototype.backtrace = null;
haxe.unit.TestStatus.prototype.classname = null;
haxe.unit.TestStatus.prototype.done = null;
haxe.unit.TestStatus.prototype.error = null;
haxe.unit.TestStatus.prototype.method = null;
haxe.unit.TestStatus.prototype.posInfos = null;
haxe.unit.TestStatus.prototype.success = null;
haxe.unit.TestStatus.prototype.__class__ = haxe.unit.TestStatus;
haxe.unit.TestRunner = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestRunner::new");
	var $spos = $s.length;
	this.result = new haxe.unit.TestResult();
	this.cases = new List();
	$s.pop();
}}
haxe.unit.TestRunner.__name__ = ["haxe","unit","TestRunner"];
haxe.unit.TestRunner.print = function(v) {
	$s.push("haxe.unit.TestRunner::print");
	var $spos = $s.length;
	{
		var msg = StringTools.htmlEscape(js.Boot.__string_rec(v,"")).split("\n").join("<br/>");
		var d = document.getElementById("haxe:trace");
		if(d == null) alert("haxe:trace element not found");
		else d.innerHTML += msg;
	}
	$s.pop();
}
haxe.unit.TestRunner.customTrace = function(v,p) {
	$s.push("haxe.unit.TestRunner::customTrace");
	var $spos = $s.length;
	haxe.unit.TestRunner.print(p.fileName + ":" + p.lineNumber + ": " + Std.string(v) + "\n");
	$s.pop();
}
haxe.unit.TestRunner.prototype.add = function(c) {
	$s.push("haxe.unit.TestRunner::add");
	var $spos = $s.length;
	this.cases.add(c);
	$s.pop();
}
haxe.unit.TestRunner.prototype.cases = null;
haxe.unit.TestRunner.prototype.getBT = function(e) {
	$s.push("haxe.unit.TestRunner::getBT");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.toString(haxe.Stack.exceptionStack());
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.unit.TestRunner.prototype.result = null;
haxe.unit.TestRunner.prototype.run = function() {
	$s.push("haxe.unit.TestRunner::run");
	var $spos = $s.length;
	this.result = new haxe.unit.TestResult();
	{ var $it0 = this.cases.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		this.runCase(c);
	}
	}}
	haxe.unit.TestRunner.print(this.result.toString());
	{
		var $tmp = this.result.success;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.unit.TestRunner.prototype.runCase = function(t) {
	$s.push("haxe.unit.TestRunner::runCase");
	var $spos = $s.length;
	var old = $closure(haxe.Log,"trace");
	haxe.Log.trace = $closure(haxe.unit.TestRunner,"customTrace");
	var cl = Type.getClass(t);
	var fields = Type.getInstanceFields(cl);
	haxe.unit.TestRunner.print("Class: " + Type.getClassName(cl) + " ");
	{
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var fname = f;
			var field = Reflect.field(t,f);
			if(StringTools.startsWith(fname,"test") && Reflect.isFunction(field)) {
				t.currentTest = new haxe.unit.TestStatus();
				t.currentTest.classname = Type.getClassName(cl);
				t.currentTest.method = fname;
				t.setup();
				try {
					Reflect.callMethod(t,field,new Array());
					if(t.currentTest.done) {
						t.currentTest.success = true;
						haxe.unit.TestRunner.print(".");
					}
					else {
						t.currentTest.success = false;
						t.currentTest.error = "(warning) no assert";
						haxe.unit.TestRunner.print("W");
					}
				}
				catch( $e1 ) {
					if( js.Boot.__instanceof($e1,haxe.unit.TestStatus) ) {
						var e = $e1;
						{
							$e = [];
							while($s.length >= $spos) $e.unshift($s.pop());
							$s.push($e[0]);
							haxe.unit.TestRunner.print("F");
							t.currentTest.backtrace = this.getBT(e);
						}
					} else {
						var e = $e1;
						{
							$e = [];
							while($s.length >= $spos) $e.unshift($s.pop());
							$s.push($e[0]);
							haxe.unit.TestRunner.print("E");
							if(e.message != null) {
								t.currentTest.error = "exception thrown : " + e + " [" + e.message + "]";
							}
							else {
								t.currentTest.error = "exception thrown : " + e;
							}
							t.currentTest.backtrace = this.getBT(e);
						}
					}
				}
				this.result.add(t.currentTest);
				t.tearDown();
			}
		}
	}
	haxe.unit.TestRunner.print("\n");
	haxe.Log.trace = old;
	$s.pop();
}
haxe.unit.TestRunner.prototype.__class__ = haxe.unit.TestRunner;
org.puremvc.haxe.core.ViewTestMediator2 = function(view) { if( view === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ViewTestMediator2::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[null,view]);
	$s.pop();
}}
org.puremvc.haxe.core.ViewTestMediator2.__name__ = ["org","puremvc","haxe","core","ViewTestMediator2"];
org.puremvc.haxe.core.ViewTestMediator2.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.core.ViewTestMediator2.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.core.ViewTestMediator2.prototype.getMediatorName = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator2::getMediatorName");
	var $spos = $s.length;
	{
		var $tmp = org.puremvc.haxe.core.ViewTestMediator2.NAME;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator2.prototype.getViewTest = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator2::getViewTest");
	var $spos = $s.length;
	{
		var $tmp = this.viewComponent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator2.prototype.handleNotification = function(notification) {
	$s.push("org.puremvc.haxe.core.ViewTestMediator2::handleNotification");
	var $spos = $s.length;
	this.getViewTest().lastNotification = notification.getName();
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator2.prototype.listNotificationInterests = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator2::listNotificationInterests");
	var $spos = $s.length;
	{
		var $tmp = [org.puremvc.haxe.core.ViewTest.NOTE1,org.puremvc.haxe.core.ViewTest.NOTE2];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator2.prototype.__class__ = org.puremvc.haxe.core.ViewTestMediator2;
org.puremvc.haxe.interfaces.IModel = function() { }
org.puremvc.haxe.interfaces.IModel.__name__ = ["org","puremvc","haxe","interfaces","IModel"];
org.puremvc.haxe.interfaces.IModel.prototype.hasProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.registerProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.removeProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.retrieveProxy = null;
org.puremvc.haxe.interfaces.IModel.prototype.__class__ = org.puremvc.haxe.interfaces.IModel;
org.puremvc.haxe.core.Model = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.Model::new");
	var $spos = $s.length;
	org.puremvc.haxe.core.Model.instance = this;
	this.proxyMap = new Hash();
	this.initializeModel();
	$s.pop();
}}
org.puremvc.haxe.core.Model.__name__ = ["org","puremvc","haxe","core","Model"];
org.puremvc.haxe.core.Model.getInstance = function() {
	$s.push("org.puremvc.haxe.core.Model::getInstance");
	var $spos = $s.length;
	if(org.puremvc.haxe.core.Model.instance == null) org.puremvc.haxe.core.Model.instance = new org.puremvc.haxe.core.Model();
	{
		var $tmp = org.puremvc.haxe.core.Model.instance;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.Model.instance = null;
org.puremvc.haxe.core.Model.prototype.hasProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.core.Model::hasProxy");
	var $spos = $s.length;
	{
		var $tmp = this.proxyMap.exists(proxyName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.Model.prototype.initializeModel = function() {
	$s.push("org.puremvc.haxe.core.Model::initializeModel");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.core.Model.prototype.proxyMap = null;
org.puremvc.haxe.core.Model.prototype.registerProxy = function(proxy) {
	$s.push("org.puremvc.haxe.core.Model::registerProxy");
	var $spos = $s.length;
	this.proxyMap.set(proxy.getProxyName(),proxy);
	proxy.onRegister();
	$s.pop();
}
org.puremvc.haxe.core.Model.prototype.removeProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.core.Model::removeProxy");
	var $spos = $s.length;
	var proxy = this.proxyMap.get(proxyName);
	if(proxy != null) {
		this.proxyMap.remove(proxyName);
		proxy.onRemove();
	}
	{
		var $tmp = proxy;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.Model.prototype.retrieveProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.core.Model::retrieveProxy");
	var $spos = $s.length;
	{
		var $tmp = this.proxyMap.get(proxyName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.Model.prototype.__class__ = org.puremvc.haxe.core.Model;
org.puremvc.haxe.core.Model.__interfaces__ = [org.puremvc.haxe.interfaces.IModel];
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.empty = function() {
	$s.push("Reflect::empty");
	var $spos = $s.length;
	{
		var $tmp = {}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	{
		if(o.hasOwnProperty != null) {
			var $tmp = o.hasOwnProperty(field);
			$s.pop();
			return $tmp;
		}
		var arr = Reflect.fields(o);
		{ var $it2 = arr.iterator();
		while( $it2.hasNext() ) { var t = $it2.next();
		if(t == field) {
			var $tmp = true;
			$s.pop();
			return $tmp;
		}
		}}
		{
			var $tmp = false;
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
}
Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	try {
		{
			var $tmp = o[field];
			$s.pop();
			return $tmp;
		}
	}
	catch( $e3 ) {
		{
			var e = $e3;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				{
					var $tmp = null;
					$s.pop();
					return $tmp;
				}
			}
		}
	}
	$s.pop();
}
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	{
		var $tmp = func.apply(o,args);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
	{
		var a = new Array();
		if(o.hasOwnProperty) {
			
					for(var i in o)
						if( o.hasOwnProperty(i) )
							a.push(i);
				;
		}
		else {
			var t;
			try {
				t = o.__proto__;
			}
			catch( $e4 ) {
				{
					var e = $e4;
					{
						$e = [];
						while($s.length >= $spos) $e.unshift($s.pop());
						$s.push($e[0]);
						t = null;
					}
				}
			}
			if(t != null) o.__proto__ = null;
			
					for(var i in o)
						if( i != "__proto__" )
							a.push(i);
				;
			if(t != null) o.__proto__ = t;
		}
		{
			var $tmp = a;
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
}
Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	{
		var $tmp = typeof(f) == "function" && f.__name__ == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	{
		var $tmp = ((a == b)?0:((((a) > (b))?1:-1)));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		var $tmp = true;
		$s.pop();
		return $tmp;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		var $tmp = false;
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		var $tmp = false;
		$s.pop();
		return $tmp;
	}
	var t = typeof(v);
	{
		var $tmp = (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	{
		if(!Reflect.hasField(o,f)) {
			var $tmp = false;
			$s.pop();
			return $tmp;
		}
		delete(o[f]);
		{
			var $tmp = true;
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
}
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = Reflect.empty();
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			Reflect.setField(o2,f,Reflect.field(o,f));
		}
	}
	{
		var $tmp = o2;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	{
		var $tmp = function() {
			$s.push("Reflect::makeVarArgs@330");
			var $spos = $s.length;
			var a = new Array();
			{
				var _g1 = 0, _g = arguments.length;
				while(_g1 < _g) {
					var i = _g1++;
					a.push(arguments[i]);
				}
			}
			{
				var $tmp = f(a);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.prototype.__class__ = Reflect;
org.puremvc.haxe.core.ViewTestNote = function(name,body) { if( name === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ViewTestNote::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.observer.Notification.apply(this,[org.puremvc.haxe.core.ViewTestNote.NAME,body]);
	$s.pop();
}}
org.puremvc.haxe.core.ViewTestNote.__name__ = ["org","puremvc","haxe","core","ViewTestNote"];
org.puremvc.haxe.core.ViewTestNote.__super__ = org.puremvc.haxe.patterns.observer.Notification;
for(var k in org.puremvc.haxe.patterns.observer.Notification.prototype ) org.puremvc.haxe.core.ViewTestNote.prototype[k] = org.puremvc.haxe.patterns.observer.Notification.prototype[k];
org.puremvc.haxe.core.ViewTestNote.create = function(body) {
	$s.push("org.puremvc.haxe.core.ViewTestNote::create");
	var $spos = $s.length;
	{
		var $tmp = new org.puremvc.haxe.core.ViewTestNote(org.puremvc.haxe.core.ViewTestNote.NAME,body);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestNote.prototype.__class__ = org.puremvc.haxe.core.ViewTestNote;
org.puremvc.haxe.core.ViewTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ViewTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.core.ViewTest.__name__ = ["org","puremvc","haxe","core","ViewTest"];
org.puremvc.haxe.core.ViewTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.core.ViewTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.core.ViewTest.prototype.cleanup = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::cleanup");
	var $spos = $s.length;
	org.puremvc.haxe.core.View.getInstance().removeMediator(org.puremvc.haxe.core.ViewTestMediator.NAME);
	org.puremvc.haxe.core.View.getInstance().removeMediator(org.puremvc.haxe.core.ViewTestMediator2.NAME);
	org.puremvc.haxe.core.View.getInstance().removeMediator(org.puremvc.haxe.core.ViewTestMediator3.NAME);
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.lastNotification = null;
org.puremvc.haxe.core.ViewTest.prototype.onRegisterCalled = null;
org.puremvc.haxe.core.ViewTest.prototype.onRemoveCalled = null;
org.puremvc.haxe.core.ViewTest.prototype.testGetInstance = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testGetInstance");
	var $spos = $s.length;
	var view = org.puremvc.haxe.core.View.getInstance();
	this.assertTrue(view != null,{ fileName : "ViewTest.hx", lineNumber : 40, className : "org.puremvc.haxe.core.ViewTest", methodName : "testGetInstance"});
	this.assertTrue(Std["is"](view,org.puremvc.haxe.interfaces.IView),{ fileName : "ViewTest.hx", lineNumber : 41, className : "org.puremvc.haxe.core.ViewTest", methodName : "testGetInstance"});
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.testHasMediator = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testHasMediator");
	var $spos = $s.length;
	var view = org.puremvc.haxe.core.View.getInstance();
	var mediator = new org.puremvc.haxe.patterns.mediator.Mediator("hasMediatorTest",this);
	view.registerMediator(mediator);
	this.assertTrue(view.hasMediator("hasMediatorTest"),{ fileName : "ViewTest.hx", lineNumber : 143, className : "org.puremvc.haxe.core.ViewTest", methodName : "testHasMediator"});
	view.removeMediator("hasMediatorTest");
	this.assertFalse(view.hasMediator("hasMediatorTest"),{ fileName : "ViewTest.hx", lineNumber : 149, className : "org.puremvc.haxe.core.ViewTest", methodName : "testHasMediator"});
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.testOnRegisterAndOnRemove = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testOnRegisterAndOnRemove");
	var $spos = $s.length;
	this.onRegisterCalled = false;
	this.onRemoveCalled = false;
	var view = org.puremvc.haxe.core.View.getInstance();
	var mediator = new org.puremvc.haxe.core.ViewTestMediator4(this);
	view.registerMediator(mediator);
	this.assertTrue(this.onRegisterCalled,{ fileName : "ViewTest.hx", lineNumber : 192, className : "org.puremvc.haxe.core.ViewTest", methodName : "testOnRegisterAndOnRemove"});
	view.removeMediator(org.puremvc.haxe.core.ViewTestMediator4.NAME);
	this.assertTrue(this.onRemoveCalled,{ fileName : "ViewTest.hx", lineNumber : 198, className : "org.puremvc.haxe.core.ViewTest", methodName : "testOnRegisterAndOnRemove"});
	this.cleanup();
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.testRegisterAndNotifyObserver = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testRegisterAndNotifyObserver");
	var $spos = $s.length;
	var view = org.puremvc.haxe.core.View.getInstance();
	var observer = new org.puremvc.haxe.patterns.observer.Observer($closure(this,"viewTestMethod"),this);
	view.registerObserver(org.puremvc.haxe.core.ViewTestNote.NAME,observer);
	var note = org.puremvc.haxe.core.ViewTestNote.create(10.0);
	view.notifyObservers(note);
	this.assertEquals(this.viewTestVar,10.0,{ fileName : "ViewTest.hx", lineNumber : 88, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRegisterAndNotifyObserver"});
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.testRegisterAndRemoveMediator = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testRegisterAndRemoveMediator");
	var $spos = $s.length;
	var view = org.puremvc.haxe.core.View.getInstance();
	var mediator = new org.puremvc.haxe.patterns.mediator.Mediator("testing",this);
	view.registerMediator(mediator);
	var removedMediator = view.removeMediator("testing");
	this.assertEquals(removedMediator.getMediatorName(),"testing",{ fileName : "ViewTest.hx", lineNumber : 168, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRegisterAndRemoveMediator"});
	this.assertTrue(view.retrieveMediator("testing") == null,{ fileName : "ViewTest.hx", lineNumber : 171, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRegisterAndRemoveMediator"});
	this.cleanup();
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.testRegisterAndRetrieveMediator = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testRegisterAndRetrieveMediator");
	var $spos = $s.length;
	var view = org.puremvc.haxe.core.View.getInstance();
	var viewTestMediator = new org.puremvc.haxe.core.ViewTestMediator(this);
	view.registerMediator(viewTestMediator);
	var mediator = view.retrieveMediator(org.puremvc.haxe.core.ViewTestMediator.NAME);
	this.assertTrue(Std["is"](mediator,org.puremvc.haxe.core.ViewTestMediator),{ fileName : "ViewTest.hx", lineNumber : 123, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRegisterAndRetrieveMediator"});
	this.cleanup();
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.testRemoveMediatorAndSubsequentNotify = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testRemoveMediatorAndSubsequentNotify");
	var $spos = $s.length;
	var view = org.puremvc.haxe.core.View.getInstance();
	view.registerMediator(new org.puremvc.haxe.core.ViewTestMediator2(this));
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE1));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.core.ViewTest.NOTE1,{ fileName : "ViewTest.hx", lineNumber : 257, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE2));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.core.ViewTest.NOTE2,{ fileName : "ViewTest.hx", lineNumber : 260, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	view.removeMediator(org.puremvc.haxe.core.ViewTestMediator2.NAME);
	this.assertEquals(view.retrieveMediator(org.puremvc.haxe.core.ViewTestMediator2.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 266, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	this.lastNotification = null;
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE1));
	this.assertTrue(this.lastNotification != org.puremvc.haxe.core.ViewTest.NOTE1,{ fileName : "ViewTest.hx", lineNumber : 274, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE2));
	this.assertTrue(this.lastNotification != org.puremvc.haxe.core.ViewTest.NOTE2,{ fileName : "ViewTest.hx", lineNumber : 277, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveMediatorAndSubsequentNotify"});
	this.cleanup();
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.testRemoveOneOfTwoMediatorsAndSubsequentNotify = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testRemoveOneOfTwoMediatorsAndSubsequentNotify");
	var $spos = $s.length;
	var view = org.puremvc.haxe.core.View.getInstance();
	view.registerMediator(new org.puremvc.haxe.core.ViewTestMediator2(this));
	view.registerMediator(new org.puremvc.haxe.core.ViewTestMediator3(this));
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE1));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.core.ViewTest.NOTE1,{ fileName : "ViewTest.hx", lineNumber : 301, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE2));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.core.ViewTest.NOTE2,{ fileName : "ViewTest.hx", lineNumber : 304, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE3));
	this.assertEquals(this.lastNotification,org.puremvc.haxe.core.ViewTest.NOTE3,{ fileName : "ViewTest.hx", lineNumber : 307, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.removeMediator(org.puremvc.haxe.core.ViewTestMediator2.NAME);
	this.assertEquals(view.retrieveMediator(org.puremvc.haxe.core.ViewTestMediator2.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 313, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	this.lastNotification = null;
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE1));
	this.assertTrue(this.lastNotification != org.puremvc.haxe.core.ViewTest.NOTE1,{ fileName : "ViewTest.hx", lineNumber : 320, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE2));
	this.assertTrue(this.lastNotification != org.puremvc.haxe.core.ViewTest.NOTE2,{ fileName : "ViewTest.hx", lineNumber : 323, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	view.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(org.puremvc.haxe.core.ViewTest.NOTE3));
	this.assertTrue(this.lastNotification == org.puremvc.haxe.core.ViewTest.NOTE3,{ fileName : "ViewTest.hx", lineNumber : 326, className : "org.puremvc.haxe.core.ViewTest", methodName : "testRemoveOneOfTwoMediatorsAndSubsequentNotify"});
	this.cleanup();
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.testSuccessiveRegisterAndRemoveMediator = function() {
	$s.push("org.puremvc.haxe.core.ViewTest::testSuccessiveRegisterAndRemoveMediator");
	var $spos = $s.length;
	var view = org.puremvc.haxe.core.View.getInstance();
	view.registerMediator(new org.puremvc.haxe.core.ViewTestMediator(this));
	this.assertTrue(Std["is"](view.retrieveMediator(org.puremvc.haxe.core.ViewTestMediator.NAME),org.puremvc.haxe.core.ViewTestMediator),{ fileName : "ViewTest.hx", lineNumber : 216, className : "org.puremvc.haxe.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	view.removeMediator(org.puremvc.haxe.core.ViewTestMediator.NAME);
	this.assertEquals(view.retrieveMediator(org.puremvc.haxe.core.ViewTestMediator.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 222, className : "org.puremvc.haxe.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	this.assertEquals(view.removeMediator(org.puremvc.haxe.core.ViewTestMediator.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 225, className : "org.puremvc.haxe.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	view.registerMediator(new org.puremvc.haxe.core.ViewTestMediator(this));
	this.assertTrue(Std["is"](view.retrieveMediator(org.puremvc.haxe.core.ViewTestMediator.NAME),org.puremvc.haxe.core.ViewTestMediator),{ fileName : "ViewTest.hx", lineNumber : 230, className : "org.puremvc.haxe.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	view.removeMediator(org.puremvc.haxe.core.ViewTestMediator.NAME);
	this.assertEquals(view.retrieveMediator(org.puremvc.haxe.core.ViewTestMediator.NAME),null,{ fileName : "ViewTest.hx", lineNumber : 236, className : "org.puremvc.haxe.core.ViewTest", methodName : "testSuccessiveRegisterAndRemoveMediator"});
	this.cleanup();
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.viewTestMethod = function(note) {
	$s.push("org.puremvc.haxe.core.ViewTest::viewTestMethod");
	var $spos = $s.length;
	this.viewTestVar = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,Float)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	$s.pop();
}
org.puremvc.haxe.core.ViewTest.prototype.viewTestVar = null;
org.puremvc.haxe.core.ViewTest.prototype.__class__ = org.puremvc.haxe.core.ViewTest;
org.puremvc.haxe.core.ControllerTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ControllerTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.core.ControllerTest.__name__ = ["org","puremvc","haxe","core","ControllerTest"];
org.puremvc.haxe.core.ControllerTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.core.ControllerTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.core.ControllerTest.prototype.testGetInstance = function() {
	$s.push("org.puremvc.haxe.core.ControllerTest::testGetInstance");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.core.Controller.getInstance();
	this.assertTrue(controller != null,{ fileName : "ControllerTest.hx", lineNumber : 27, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testGetInstance"});
	this.assertTrue(Std["is"](controller,org.puremvc.haxe.interfaces.IController),{ fileName : "ControllerTest.hx", lineNumber : 28, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testGetInstance"});
	$s.pop();
}
org.puremvc.haxe.core.ControllerTest.prototype.testHasCommand = function() {
	$s.push("org.puremvc.haxe.core.ControllerTest::testHasCommand");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.core.Controller.getInstance();
	controller.registerCommand("hasCommandTest",org.puremvc.haxe.core.ControllerTestCommand);
	this.assertTrue(controller.hasCommand("hasCommandTest"),{ fileName : "ControllerTest.hx", lineNumber : 118, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testHasCommand"});
	controller.removeCommand("hasCommandTest");
	this.assertFalse(controller.hasCommand("hasCommandTest"),{ fileName : "ControllerTest.hx", lineNumber : 124, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testHasCommand"});
	$s.pop();
}
org.puremvc.haxe.core.ControllerTest.prototype.testRegisterAndExecuteCommand = function() {
	$s.push("org.puremvc.haxe.core.ControllerTest::testRegisterAndExecuteCommand");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.core.Controller.getInstance();
	controller.registerCommand("ControllerTest",org.puremvc.haxe.core.ControllerTestCommand);
	var vo = new org.puremvc.haxe.core.ControllerTestVO(12.0);
	var note = new org.puremvc.haxe.patterns.observer.Notification("ControllerTest",vo);
	controller.executeCommand(note);
	this.assertEquals(vo.result,24.0,{ fileName : "ControllerTest.hx", lineNumber : 63, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testRegisterAndExecuteCommand"});
	$s.pop();
}
org.puremvc.haxe.core.ControllerTest.prototype.testRegisterAndRemoveCommand = function() {
	$s.push("org.puremvc.haxe.core.ControllerTest::testRegisterAndRemoveCommand");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.core.Controller.getInstance();
	controller.registerCommand("ControllerRemoveTest",org.puremvc.haxe.core.ControllerTestCommand);
	var vo = new org.puremvc.haxe.core.ControllerTestVO(12);
	var note = new org.puremvc.haxe.patterns.observer.Notification("ControllerRemoveTest",vo);
	controller.executeCommand(note);
	this.assertEquals(vo.result,24.0,{ fileName : "ControllerTest.hx", lineNumber : 90, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testRegisterAndRemoveCommand"});
	vo.result = 0;
	controller.removeCommand("ControllerRemoveTest");
	controller.executeCommand(note);
	this.assertEquals(vo.result,0,{ fileName : "ControllerTest.hx", lineNumber : 104, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testRegisterAndRemoveCommand"});
	$s.pop();
}
org.puremvc.haxe.core.ControllerTest.prototype.testReregisterAndExecuteCommand = function() {
	$s.push("org.puremvc.haxe.core.ControllerTest::testReregisterAndExecuteCommand");
	var $spos = $s.length;
	var controller = org.puremvc.haxe.core.Controller.getInstance();
	controller.registerCommand("ControllerTest2",org.puremvc.haxe.core.ControllerTestCommand2);
	controller.removeCommand("ControllerTest2");
	controller.registerCommand("ControllerTest2",org.puremvc.haxe.core.ControllerTestCommand2);
	var vo = new org.puremvc.haxe.core.ControllerTestVO(12);
	var note = new org.puremvc.haxe.patterns.observer.Notification("ControllerTest2",vo);
	var view = org.puremvc.haxe.core.View.getInstance();
	view.notifyObservers(note);
	this.assertEquals(vo.result,24.0,{ fileName : "ControllerTest.hx", lineNumber : 164, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testReregisterAndExecuteCommand"});
	view.notifyObservers(note);
	this.assertEquals(vo.result,48.0,{ fileName : "ControllerTest.hx", lineNumber : 170, className : "org.puremvc.haxe.core.ControllerTest", methodName : "testReregisterAndExecuteCommand"});
	$s.pop();
}
org.puremvc.haxe.core.ControllerTest.prototype.__class__ = org.puremvc.haxe.core.ControllerTest;
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.FilePos = function(name,line) { var $x = ["FilePos",2,name,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	$s.push("haxe.Stack::callStack");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.makeStack("$s");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.exceptionStack = function() {
	$s.push("haxe.Stack::exceptionStack");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.makeStack("$e");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.toString = function(stack) {
	$s.push("haxe.Stack::toString");
	var $spos = $s.length;
	var b = new StringBuf();
	{
		var _g = 0;
		while(_g < stack.length) {
			var s = stack[_g];
			++_g;
			var $e = (s);
			switch( $e[1] ) {
			case 0:
			{
				b.add("Called from a C function\n");
			}break;
			case 1:
			var m = $e[2];
			{
				b.add("Called from module ");
				b.add(m);
				b.add("\n");
			}break;
			case 2:
			var line = $e[3], name = $e[2];
			{
				b.add("Called from ");
				b.add(name);
				b.add(" line ");
				b.add(line);
				b.add("\n");
			}break;
			case 3:
			var meth = $e[3], cname = $e[2];
			{
				b.add("Called from ");
				b.add(cname);
				b.add(" method ");
				b.add(meth);
				b.add("\n");
			}break;
			}
		}
	}
	{
		var $tmp = b.toString();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.makeStack = function(s) {
	$s.push("haxe.Stack::makeStack");
	var $spos = $s.length;
	var a = function($this) {
		var $r;
		try {
			$r = eval(s);
		}
		catch( $e5 ) {
			{
				var e = $e5;
				$r = function($this) {
					var $r;
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					$r = [];
					return $r;
				}($this);
			}
		}
		return $r;
	}(this);
	var m = new Array();
	{
		var _g1 = 0, _g = a.length - (s == "$s"?2:0);
		while(_g1 < _g) {
			var i = _g1++;
			var d = a[i].split("::");
			m.unshift(haxe.StackItem.Method(d[0],d[1]));
		}
	}
	{
		var $tmp = m;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.prototype.__class__ = haxe.Stack;
org.puremvc.haxe.interfaces.IView = function() { }
org.puremvc.haxe.interfaces.IView.__name__ = ["org","puremvc","haxe","interfaces","IView"];
org.puremvc.haxe.interfaces.IView.prototype.hasMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.notifyObservers = null;
org.puremvc.haxe.interfaces.IView.prototype.registerMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.registerObserver = null;
org.puremvc.haxe.interfaces.IView.prototype.removeMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.removeObserver = null;
org.puremvc.haxe.interfaces.IView.prototype.retrieveMediator = null;
org.puremvc.haxe.interfaces.IView.prototype.__class__ = org.puremvc.haxe.interfaces.IView;
IntIter = function(min,max) { if( min === $_ ) return; {
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	{
		var $tmp = this.min < this.max;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	{
		var $tmp = this.min++;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.__class__ = IntIter;
org.puremvc.haxe.core.ControllerTestCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ControllerTestCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.core.ControllerTestCommand.__name__ = ["org","puremvc","haxe","core","ControllerTestCommand"];
org.puremvc.haxe.core.ControllerTestCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.core.ControllerTestCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.core.ControllerTestCommand.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.core.ControllerTestCommand::execute");
	var $spos = $s.length;
	var vo = note.getBody();
	vo.result = 2 * vo.input;
	$s.pop();
}
org.puremvc.haxe.core.ControllerTestCommand.prototype.__class__ = org.puremvc.haxe.core.ControllerTestCommand;
org.puremvc.haxe.interfaces.IObserver = function() { }
org.puremvc.haxe.interfaces.IObserver.__name__ = ["org","puremvc","haxe","interfaces","IObserver"];
org.puremvc.haxe.interfaces.IObserver.prototype.compareNotifyContext = null;
org.puremvc.haxe.interfaces.IObserver.prototype.notifyObserver = null;
org.puremvc.haxe.interfaces.IObserver.prototype.setNotifyContext = null;
org.puremvc.haxe.interfaces.IObserver.prototype.setNotifyMethod = null;
org.puremvc.haxe.interfaces.IObserver.prototype.__class__ = org.puremvc.haxe.interfaces.IObserver;
org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command.__name__ = ["org","puremvc","haxe","patterns","command","MacroCommandTestSub1Command"];
org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command::execute");
	var $spos = $s.length;
	var vo = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,org.puremvc.haxe.patterns.command.MacroCommandTestVO)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	vo.result1 = 2 * vo.input;
	$s.pop();
}
org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command.prototype.__class__ = org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.toEnum = function(t) {
	$s.push("Type::toEnum");
	var $spos = $s.length;
	try {
		if(t.__ename__ == null) {
			var $tmp = null;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = t;
			$s.pop();
			return $tmp;
		}
	}
	catch( $e6 ) {
		{
			var e = $e6;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				null;
			}
		}
	}
	{
		var $tmp = null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.toClass = function(t) {
	$s.push("Type::toClass");
	var $spos = $s.length;
	try {
		if(t.__name__ == null) {
			var $tmp = null;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = t;
			$s.pop();
			return $tmp;
		}
	}
	catch( $e7 ) {
		{
			var e = $e7;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				null;
			}
		}
	}
	{
		var $tmp = null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClass = function(o) {
	$s.push("Type::getClass");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = null;
		$s.pop();
		return $tmp;
	}
	if(o.__enum__ != null) {
		var $tmp = null;
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = o.__class__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnum = function(o) {
	$s.push("Type::getEnum");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = null;
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = o.__enum__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getSuperClass = function(c) {
	$s.push("Type::getSuperClass");
	var $spos = $s.length;
	{
		var $tmp = c.__super__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClassName = function(c) {
	$s.push("Type::getClassName");
	var $spos = $s.length;
	if(c == null) {
		var $tmp = null;
		$s.pop();
		return $tmp;
	}
	var a = c.__name__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnumName = function(e) {
	$s.push("Type::getEnumName");
	var $spos = $s.length;
	var a = e.__ename__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.resolveClass = function(name) {
	$s.push("Type::resolveClass");
	var $spos = $s.length;
	var cl;
	{
		try {
			cl = eval(name);
		}
		catch( $e8 ) {
			{
				var e = $e8;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					cl = null;
				}
			}
		}
		if(cl == null || cl.__name__ == null) {
			var $tmp = null;
			$s.pop();
			return $tmp;
		}
		else null;
	}
	{
		var $tmp = cl;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.resolveEnum = function(name) {
	$s.push("Type::resolveEnum");
	var $spos = $s.length;
	var e;
	{
		try {
			e = eval(name);
		}
		catch( $e9 ) {
			{
				var e1 = $e9;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					e1 = null;
				}
			}
		}
		if(e == null || e.__ename__ == null) {
			var $tmp = null;
			$s.pop();
			return $tmp;
		}
		else null;
	}
	{
		var $tmp = e;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createInstance = function(cl,args) {
	$s.push("Type::createInstance");
	var $spos = $s.length;
	if(args.length >= 6) throw "Too many arguments";
	{
		var $tmp = new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createEmptyInstance = function(cl) {
	$s.push("Type::createEmptyInstance");
	var $spos = $s.length;
	{
		var $tmp = new cl($_);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getInstanceFields = function(c) {
	$s.push("Type::getInstanceFields");
	var $spos = $s.length;
	var a = Reflect.fields(c.prototype);
	c = c.__super__;
	while(c != null) {
		a = a.concat(Reflect.fields(c.prototype));
		c = c.__super__;
	}
	while(a.remove("__class__")) null;
	{
		var $tmp = a;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClassFields = function(c) {
	$s.push("Type::getClassFields");
	var $spos = $s.length;
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	{
		var $tmp = a;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnumConstructs = function(e) {
	$s.push("Type::getEnumConstructs");
	var $spos = $s.length;
	{
		var $tmp = e.__constructs__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type["typeof"] = function(v) {
	$s.push("Type::typeof");
	var $spos = $s.length;
	switch(typeof(v)) {
	case "boolean":{
		{
			var $tmp = ValueType.TBool;
			$s.pop();
			return $tmp;
		}
	}break;
	case "string":{
		{
			var $tmp = ValueType.TClass(String);
			$s.pop();
			return $tmp;
		}
	}break;
	case "number":{
		if(v + 1 == v) {
			var $tmp = ValueType.TFloat;
			$s.pop();
			return $tmp;
		}
		if(Math.ceil(v) == v) {
			var $tmp = ValueType.TInt;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFloat;
			$s.pop();
			return $tmp;
		}
	}break;
	case "object":{
		if(v == null) {
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
		var e = v.__enum__;
		if(e != null) {
			var $tmp = ValueType.TEnum(e);
			$s.pop();
			return $tmp;
		}
		var c = v.__class__;
		if(c != null) {
			var $tmp = ValueType.TClass(c);
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
	}break;
	case "function":{
		if(v.__name__ != null) {
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFunction;
			$s.pop();
			return $tmp;
		}
	}break;
	case "undefined":{
		{
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
	}break;
	default:{
		{
			var $tmp = ValueType.TUnknown;
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
Type.enumEq = function(a,b) {
	$s.push("Type::enumEq");
	var $spos = $s.length;
	if(a == b) {
		var $tmp = true;
		$s.pop();
		return $tmp;
	}
	if(a[0] != b[0]) {
		var $tmp = false;
		$s.pop();
		return $tmp;
	}
	{
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) {
				var $tmp = false;
				$s.pop();
				return $tmp;
			}
		}
	}
	var e = a.__enum__;
	if(e != b.__enum__ || e == null) {
		var $tmp = false;
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = true;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumConstructor = function(e) {
	$s.push("Type::enumConstructor");
	var $spos = $s.length;
	{
		var $tmp = e[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumParameters = function(e) {
	$s.push("Type::enumParameters");
	var $spos = $s.length;
	{
		var $tmp = e.slice(2);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumIndex = function(e) {
	$s.push("Type::enumIndex");
	var $spos = $s.length;
	{
		var $tmp = e[1];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.prototype.__class__ = Type;
org.puremvc.haxe.core.ControllerTestVO = function(input) { if( input === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ControllerTestVO::new");
	var $spos = $s.length;
	this.input = input;
	this.result = 0;
	$s.pop();
}}
org.puremvc.haxe.core.ControllerTestVO.__name__ = ["org","puremvc","haxe","core","ControllerTestVO"];
org.puremvc.haxe.core.ControllerTestVO.prototype.input = null;
org.puremvc.haxe.core.ControllerTestVO.prototype.result = null;
org.puremvc.haxe.core.ControllerTestVO.prototype.__class__ = org.puremvc.haxe.core.ControllerTestVO;
js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	{
		var msg = (i != null?i.fileName + ":" + i.lineNumber + ": ":"");
		msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
		var d = document.getElementById("haxe:trace");
		if(d == null) alert("No haxe:trace element defined\n" + msg);
		else d.innerHTML += msg;
	}
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	{
		var d = document.getElementById("haxe:trace");
		if(d != null) d.innerHTML = "";
		else null;
	}
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	{
		var m = o[f];
		if(m == null) {
			var $tmp = null;
			$s.pop();
			return $tmp;
		}
		var f1 = function() {
			$s.push("js.Boot::__closure@59");
			var $spos = $s.length;
			{
				var $tmp = m.apply(o,arguments);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		f1.scope = o;
		f1.method = m;
		{
			var $tmp = f1;
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	{
		if(o == null) {
			var $tmp = "null";
			$s.pop();
			return $tmp;
		}
		if(s.length >= 5) {
			var $tmp = "<...>";
			$s.pop();
			return $tmp;
		}
		var t = typeof(o);
		if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
		switch(t) {
		case "object":{
			if(o instanceof Array) {
				if(o.__enum__ != null) {
					if(o.length == 2) {
						var $tmp = o[0];
						$s.pop();
						return $tmp;
					}
					var str = o[0] + "(";
					s += "\t";
					{
						var _g1 = 2, _g = o.length;
						while(_g1 < _g) {
							var i = _g1++;
							if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
							else str += js.Boot.__string_rec(o[i],s);
						}
					}
					{
						var $tmp = str + ")";
						$s.pop();
						return $tmp;
					}
				}
				var l = o.length;
				var i;
				var str = "[";
				s += "\t";
				{
					var _g = 0;
					while(_g < l) {
						var i1 = _g++;
						str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
					}
				}
				str += "]";
				{
					var $tmp = str;
					$s.pop();
					return $tmp;
				}
			}
			var tostr;
			try {
				tostr = o.toString;
			}
			catch( $e10 ) {
				{
					var e = $e10;
					{
						$e = [];
						while($s.length >= $spos) $e.unshift($s.pop());
						$s.push($e[0]);
						{
							var $tmp = "???";
							$s.pop();
							return $tmp;
						}
					}
				}
			}
			if(tostr != null && tostr != Object.toString) {
				var s2 = o.toString();
				if(s2 != "[object Object]") {
					var $tmp = s2;
					$s.pop();
					return $tmp;
				}
			}
			var k;
			var str = "{\n";
			s += "\t";
			var hasp = (o.hasOwnProperty != null);
			for( var k in o ) { ;
			if(hasp && !o.hasOwnProperty(k)) continue;
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
			if(str.length != 2) str += ", \n";
			str += s + k + " : " + js.Boot.__string_rec(o[k],s);
			}
			s = s.substring(1);
			str += "\n" + s + "}";
			{
				var $tmp = str;
				$s.pop();
				return $tmp;
			}
		}break;
		case "function":{
			{
				var $tmp = "<function>";
				$s.pop();
				return $tmp;
			}
		}break;
		case "string":{
			{
				var $tmp = o;
				$s.pop();
				return $tmp;
			}
		}break;
		default:{
			{
				var $tmp = String(o);
				$s.pop();
				return $tmp;
			}
		}break;
		}
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		var $tmp = false;
		$s.pop();
		return $tmp;
	}
	if(cc == cl) {
		var $tmp = true;
		$s.pop();
		return $tmp;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				var $tmp = true;
				$s.pop();
				return $tmp;
			}
		}
	}
	{
		var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	{
		try {
			if(o instanceof cl) {
				if(cl == Array) {
					var $tmp = (o.__enum__ == null);
					$s.pop();
					return $tmp;
				}
				{
					var $tmp = true;
					$s.pop();
					return $tmp;
				}
			}
			if(js.Boot.__interfLoop(o.__class__,cl)) {
				var $tmp = true;
				$s.pop();
				return $tmp;
			}
		}
		catch( $e11 ) {
			{
				var e = $e11;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					if(cl == null) {
						var $tmp = false;
						$s.pop();
						return $tmp;
					}
				}
			}
		}
		switch(cl) {
		case Int:{
			{
				var $tmp = (Math.ceil(o) === o) && isFinite(o);
				$s.pop();
				return $tmp;
			}
		}break;
		case Float:{
			{
				var $tmp = typeof(o) == "number";
				$s.pop();
				return $tmp;
			}
		}break;
		case Bool:{
			{
				var $tmp = (o === true || o === false);
				$s.pop();
				return $tmp;
			}
		}break;
		case String:{
			{
				var $tmp = typeof(o) == "string";
				$s.pop();
				return $tmp;
			}
		}break;
		case Dynamic:{
			{
				var $tmp = true;
				$s.pop();
				return $tmp;
			}
		}break;
		default:{
			if(o != null && o.__enum__ == cl) {
				var $tmp = true;
				$s.pop();
				return $tmp;
			}
			{
				var $tmp = false;
				$s.pop();
				return $tmp;
			}
		}break;
		}
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	{
		js.Lib.isIE = (document.all != null && window.opera == null);
		js.Lib.isOpera = (window.opera != null);
		Array.prototype.copy = Array.prototype.slice;
		Array.prototype.insert = function(i,x) {
			$s.push("js.Boot::__init@191");
			var $spos = $s.length;
			this.splice(i,0,x);
			$s.pop();
		}
		Array.prototype.remove = function(obj) {
			$s.push("js.Boot::__init@194");
			var $spos = $s.length;
			var i = 0;
			var l = this.length;
			while(i < l) {
				if(this[i] == obj) {
					this.splice(i,1);
					{
						var $tmp = true;
						$s.pop();
						return $tmp;
					}
				}
				i++;
			}
			{
				var $tmp = false;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		Array.prototype.iterator = function() {
			$s.push("js.Boot::__init@206");
			var $spos = $s.length;
			{
				var $tmp = { cur : 0, arr : this, hasNext : function() {
					$s.push("js.Boot::__init@206@210");
					var $spos = $s.length;
					{
						var $tmp = this.cur < this.arr.length;
						$s.pop();
						return $tmp;
					}
					$s.pop();
				}, next : function() {
					$s.push("js.Boot::__init@206@213");
					var $spos = $s.length;
					{
						var $tmp = this.arr[this.cur++];
						$s.pop();
						return $tmp;
					}
					$s.pop();
				}}
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		String.prototype.__class__ = String;
		String.__name__ = ["String"];
		Array.prototype.__class__ = Array;
		Array.__name__ = ["Array"];
		var cca = String.prototype.charCodeAt;
		String.prototype.charCodeAt = function(i) {
			$s.push("js.Boot::__init@223");
			var $spos = $s.length;
			var x = cca.call(this,i);
			if(isNaN(x)) {
				var $tmp = null;
				$s.pop();
				return $tmp;
			}
			{
				var $tmp = x;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		var oldsub = String.prototype.substr;
		String.prototype.substr = function(pos,len) {
			$s.push("js.Boot::__init@230");
			var $spos = $s.length;
			if(pos != null && pos != 0 && len != null && len < 0) {
				var $tmp = "";
				$s.pop();
				return $tmp;
			}
			if(len == null) len = this.length;
			if(pos < 0) {
				pos = this.length + pos;
				if(pos < 0) pos = 0;
			}
			else if(len < 0) {
				len = this.length + len - pos;
			}
			{
				var $tmp = oldsub.apply(this,[pos,len]);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		Int = new Object();
		Dynamic = new Object();
		Float = Number;
		Bool = new Object();
		Bool["true"] = true;
		Bool["false"] = false;
		$closure = js.Boot.__closure;
	}
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command.__name__ = ["org","puremvc","haxe","patterns","command","MacroCommandTestSub2Command"];
org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command::execute");
	var $spos = $s.length;
	var vo = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,org.puremvc.haxe.patterns.command.MacroCommandTestVO)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	vo.result2 = vo.input * vo.input;
	$s.pop();
}
org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command.prototype.__class__ = org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command;
org.puremvc.haxe.core.ViewTestMediator3 = function(view) { if( view === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ViewTestMediator3::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[null,view]);
	$s.pop();
}}
org.puremvc.haxe.core.ViewTestMediator3.__name__ = ["org","puremvc","haxe","core","ViewTestMediator3"];
org.puremvc.haxe.core.ViewTestMediator3.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.core.ViewTestMediator3.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.core.ViewTestMediator3.prototype.getMediatorName = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator3::getMediatorName");
	var $spos = $s.length;
	{
		var $tmp = org.puremvc.haxe.core.ViewTestMediator3.NAME;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator3.prototype.getViewTest = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator3::getViewTest");
	var $spos = $s.length;
	{
		var $tmp = this.viewComponent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator3.prototype.handleNotification = function(notification) {
	$s.push("org.puremvc.haxe.core.ViewTestMediator3::handleNotification");
	var $spos = $s.length;
	this.getViewTest().lastNotification = notification.getName();
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator3.prototype.listNotificationInterests = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator3::listNotificationInterests");
	var $spos = $s.length;
	{
		var $tmp = [org.puremvc.haxe.core.ViewTest.NOTE3];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator3.prototype.__class__ = org.puremvc.haxe.core.ViewTestMediator3;
StringBuf = function(p) { if( p === $_ ) return; {
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = "";
	$s.pop();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b += x;
	$s.pop();
}
StringBuf.prototype.addChar = function(c) {
	$s.push("StringBuf::addChar");
	var $spos = $s.length;
	this.b += String.fromCharCode(c);
	$s.pop();
}
StringBuf.prototype.addSub = function(s,pos,len) {
	$s.push("StringBuf::addSub");
	var $spos = $s.length;
	this.b += s.substr(pos,len);
	$s.pop();
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	{
		var $tmp = this.b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringBuf.prototype.__class__ = StringBuf;
PureMVCTestRunner = function() { }
PureMVCTestRunner.__name__ = ["PureMVCTestRunner"];
PureMVCTestRunner.main = function() {
	$s.push("PureMVCTestRunner::main");
	var $spos = $s.length;
	var tr = new haxe.unit.TestRunner();
	tr.add(new org.puremvc.haxe.patterns.observer.NotificationTest());
	tr.add(new org.puremvc.haxe.patterns.observer.ObserverTest());
	tr.add(new org.puremvc.haxe.patterns.command.SimpleCommandTest());
	tr.add(new org.puremvc.haxe.patterns.command.MacroCommandTest());
	tr.add(new org.puremvc.haxe.patterns.proxy.ProxyTest());
	tr.add(new org.puremvc.haxe.core.ModelTest());
	tr.add(new org.puremvc.haxe.patterns.mediator.MediatorTest());
	tr.add(new org.puremvc.haxe.core.ViewTest());
	tr.add(new org.puremvc.haxe.core.ControllerTest());
	tr.add(new org.puremvc.haxe.patterns.facade.FacadeTest());
	tr.run();
	$s.pop();
}
PureMVCTestRunner.prototype.__class__ = PureMVCTestRunner;
org.puremvc.haxe.patterns.observer.Observer = function(notifyMethod,notifyContext) { if( notifyMethod === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.observer.Observer::new");
	var $spos = $s.length;
	this.setNotifyMethod(notifyMethod);
	this.setNotifyContext(notifyContext);
	$s.pop();
}}
org.puremvc.haxe.patterns.observer.Observer.__name__ = ["org","puremvc","haxe","patterns","observer","Observer"];
org.puremvc.haxe.patterns.observer.Observer.prototype.compareNotifyContext = function(object) {
	$s.push("org.puremvc.haxe.patterns.observer.Observer::compareNotifyContext");
	var $spos = $s.length;
	{
		var $tmp = object === this.context;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Observer.prototype.context = null;
org.puremvc.haxe.patterns.observer.Observer.prototype.getNotifyContext = function() {
	$s.push("org.puremvc.haxe.patterns.observer.Observer::getNotifyContext");
	var $spos = $s.length;
	{
		var $tmp = this.context;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Observer.prototype.getNotifyMethod = function() {
	$s.push("org.puremvc.haxe.patterns.observer.Observer::getNotifyMethod");
	var $spos = $s.length;
	{
		var $tmp = $closure(this,"notify");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Observer.prototype.notify = null;
org.puremvc.haxe.patterns.observer.Observer.prototype.notifyObserver = function(notification) {
	$s.push("org.puremvc.haxe.patterns.observer.Observer::notifyObserver");
	var $spos = $s.length;
	(this.getNotifyMethod())(notification);
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Observer.prototype.setNotifyContext = function(notifyContext) {
	$s.push("org.puremvc.haxe.patterns.observer.Observer::setNotifyContext");
	var $spos = $s.length;
	this.context = notifyContext;
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Observer.prototype.setNotifyMethod = function(notifyMethod) {
	$s.push("org.puremvc.haxe.patterns.observer.Observer::setNotifyMethod");
	var $spos = $s.length;
	this.notify = notifyMethod;
	$s.pop();
}
org.puremvc.haxe.patterns.observer.Observer.prototype.__class__ = org.puremvc.haxe.patterns.observer.Observer;
org.puremvc.haxe.patterns.observer.Observer.__interfaces__ = [org.puremvc.haxe.interfaces.IObserver];
org.puremvc.haxe.core.ViewTestMediator = function(view) { if( view === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ViewTestMediator::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[null,view]);
	$s.pop();
}}
org.puremvc.haxe.core.ViewTestMediator.__name__ = ["org","puremvc","haxe","core","ViewTestMediator"];
org.puremvc.haxe.core.ViewTestMediator.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.core.ViewTestMediator.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.core.ViewTestMediator.prototype.getMediatorName = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator::getMediatorName");
	var $spos = $s.length;
	{
		var $tmp = org.puremvc.haxe.core.ViewTestMediator.NAME;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator.prototype.listNotificationInterests = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator::listNotificationInterests");
	var $spos = $s.length;
	{
		var $tmp = ["ABC","DEF","GHI"];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator.prototype.__class__ = org.puremvc.haxe.core.ViewTestMediator;
org.puremvc.haxe.patterns.proxy.ProxyTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.proxy.ProxyTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.proxy.ProxyTest.__name__ = ["org","puremvc","haxe","patterns","proxy","ProxyTest"];
org.puremvc.haxe.patterns.proxy.ProxyTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.patterns.proxy.ProxyTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.patterns.proxy.ProxyTest.prototype.testConstructor = function() {
	$s.push("org.puremvc.haxe.patterns.proxy.ProxyTest::testConstructor");
	var $spos = $s.length;
	var proxy = new org.puremvc.haxe.patterns.proxy.Proxy("colors",["red","green","blue"]);
	var data = proxy.getData();
	this.assertTrue(proxy != null,{ fileName : "ProxyTest.hx", lineNumber : 55, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(proxy.getProxyName(),"colors",{ fileName : "ProxyTest.hx", lineNumber : 56, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(data.length,3,{ fileName : "ProxyTest.hx", lineNumber : 57, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(data[0],"red",{ fileName : "ProxyTest.hx", lineNumber : 58, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(data[1],"green",{ fileName : "ProxyTest.hx", lineNumber : 59, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	this.assertEquals(data[2],"blue",{ fileName : "ProxyTest.hx", lineNumber : 60, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testConstructor"});
	$s.pop();
}
org.puremvc.haxe.patterns.proxy.ProxyTest.prototype.testDataAccessors = function() {
	$s.push("org.puremvc.haxe.patterns.proxy.ProxyTest::testDataAccessors");
	var $spos = $s.length;
	var proxy = new org.puremvc.haxe.patterns.proxy.Proxy("colors");
	proxy.setData(["red","green","blue"]);
	var data = proxy.getData();
	this.assertEquals(data.length,3,{ fileName : "ProxyTest.hx", lineNumber : 39, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testDataAccessors"});
	this.assertEquals(data[0],"red",{ fileName : "ProxyTest.hx", lineNumber : 40, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testDataAccessors"});
	this.assertEquals(data[1],"green",{ fileName : "ProxyTest.hx", lineNumber : 41, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testDataAccessors"});
	this.assertEquals(data[2],"blue",{ fileName : "ProxyTest.hx", lineNumber : 42, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testDataAccessors"});
	$s.pop();
}
org.puremvc.haxe.patterns.proxy.ProxyTest.prototype.testNameAccessor = function() {
	$s.push("org.puremvc.haxe.patterns.proxy.ProxyTest::testNameAccessor");
	var $spos = $s.length;
	var proxy = new org.puremvc.haxe.patterns.proxy.Proxy("TestProxy");
	this.assertEquals(proxy.getProxyName(),"TestProxy",{ fileName : "ProxyTest.hx", lineNumber : 25, className : "org.puremvc.haxe.patterns.proxy.ProxyTest", methodName : "testNameAccessor"});
	$s.pop();
}
org.puremvc.haxe.patterns.proxy.ProxyTest.prototype.__class__ = org.puremvc.haxe.patterns.proxy.ProxyTest;
org.puremvc.haxe.patterns.mediator.MediatorTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.mediator.MediatorTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.mediator.MediatorTest.__name__ = ["org","puremvc","haxe","patterns","mediator","MediatorTest"];
org.puremvc.haxe.patterns.mediator.MediatorTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.patterns.mediator.MediatorTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.patterns.mediator.MediatorTest.prototype.testNameAccessor = function() {
	$s.push("org.puremvc.haxe.patterns.mediator.MediatorTest::testNameAccessor");
	var $spos = $s.length;
	var mediator = new org.puremvc.haxe.patterns.mediator.Mediator();
	this.assertEquals(mediator.getMediatorName(),"Mediator",{ fileName : "MediatorTest.hx", lineNumber : 22, className : "org.puremvc.haxe.patterns.mediator.MediatorTest", methodName : "testNameAccessor"});
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.MediatorTest.prototype.testViewAccessor = function() {
	$s.push("org.puremvc.haxe.patterns.mediator.MediatorTest::testViewAccessor");
	var $spos = $s.length;
	var view = new String("test string");
	var mediator = new org.puremvc.haxe.patterns.mediator.Mediator(org.puremvc.haxe.patterns.mediator.Mediator.NAME,view);
	this.assertTrue(mediator.getViewComponent() != null,{ fileName : "MediatorTest.hx", lineNumber : 37, className : "org.puremvc.haxe.patterns.mediator.MediatorTest", methodName : "testViewAccessor"});
	$s.pop();
}
org.puremvc.haxe.patterns.mediator.MediatorTest.prototype.__class__ = org.puremvc.haxe.patterns.mediator.MediatorTest;
org.puremvc.haxe.patterns.command.SimpleCommandTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.SimpleCommandTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.command.SimpleCommandTest.__name__ = ["org","puremvc","haxe","patterns","command","SimpleCommandTest"];
org.puremvc.haxe.patterns.command.SimpleCommandTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.patterns.command.SimpleCommandTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.patterns.command.SimpleCommandTest.prototype.testSimpleCommandExecute = function() {
	$s.push("org.puremvc.haxe.patterns.command.SimpleCommandTest::testSimpleCommandExecute");
	var $spos = $s.length;
	var vo = new org.puremvc.haxe.patterns.command.SimpleCommandTestVO(5);
	var note = new org.puremvc.haxe.patterns.observer.Notification("SimpleCommandTestNote",vo);
	var command = new org.puremvc.haxe.patterns.command.SimpleCommandTestCommand();
	command.execute(note);
	this.assertEquals(vo.result,10,{ fileName : "SimpleCommandTest.hx", lineNumber : 46, className : "org.puremvc.haxe.patterns.command.SimpleCommandTest", methodName : "testSimpleCommandExecute"});
	$s.pop();
}
org.puremvc.haxe.patterns.command.SimpleCommandTest.prototype.__class__ = org.puremvc.haxe.patterns.command.SimpleCommandTest;
org.puremvc.haxe.interfaces.IFacade = function() { }
org.puremvc.haxe.interfaces.IFacade.__name__ = ["org","puremvc","haxe","interfaces","IFacade"];
org.puremvc.haxe.interfaces.IFacade.prototype.hasCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.hasMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.hasProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.notifyObservers = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.registerProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeCommand = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.removeProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.retrieveMediator = null;
org.puremvc.haxe.interfaces.IFacade.prototype.retrieveProxy = null;
org.puremvc.haxe.interfaces.IFacade.prototype.sendNotification = null;
org.puremvc.haxe.interfaces.IFacade.prototype.__class__ = org.puremvc.haxe.interfaces.IFacade;
org.puremvc.haxe.patterns.command.MacroCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.observer.Notifier.apply(this,[]);
	this.subCommands = new List();
	this.initializeMacroCommand();
	$s.pop();
}}
org.puremvc.haxe.patterns.command.MacroCommand.__name__ = ["org","puremvc","haxe","patterns","command","MacroCommand"];
org.puremvc.haxe.patterns.command.MacroCommand.__super__ = org.puremvc.haxe.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.patterns.observer.Notifier.prototype ) org.puremvc.haxe.patterns.command.MacroCommand.prototype[k] = org.puremvc.haxe.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.patterns.command.MacroCommand.prototype.addSubCommand = function(commandClassRef) {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommand::addSubCommand");
	var $spos = $s.length;
	this.subCommands.add(commandClassRef);
	$s.pop();
}
org.puremvc.haxe.patterns.command.MacroCommand.prototype.execute = function(notification) {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommand::execute");
	var $spos = $s.length;
	while(!this.subCommands.isEmpty()) {
		var commandClassRef = this.subCommands.pop();
		var commandInstance = Type.createInstance(commandClassRef,[]);
		commandInstance.execute(notification);
	}
	$s.pop();
}
org.puremvc.haxe.patterns.command.MacroCommand.prototype.initializeMacroCommand = function() {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommand::initializeMacroCommand");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.patterns.command.MacroCommand.prototype.subCommands = null;
org.puremvc.haxe.patterns.command.MacroCommand.prototype.__class__ = org.puremvc.haxe.patterns.command.MacroCommand;
org.puremvc.haxe.patterns.command.MacroCommand.__interfaces__ = [org.puremvc.haxe.interfaces.ICommand];
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.clear = function() {
	$s.push("haxe.Log::clear");
	var $spos = $s.length;
	js.Boot.__clear_trace();
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
org.puremvc.haxe.core.View = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.View::new");
	var $spos = $s.length;
	org.puremvc.haxe.core.View.instance = this;
	this.mediatorMap = new Hash();
	this.observerMap = new Hash();
	this.initializeView();
	$s.pop();
}}
org.puremvc.haxe.core.View.__name__ = ["org","puremvc","haxe","core","View"];
org.puremvc.haxe.core.View.getInstance = function() {
	$s.push("org.puremvc.haxe.core.View::getInstance");
	var $spos = $s.length;
	if(org.puremvc.haxe.core.View.instance == null) org.puremvc.haxe.core.View.instance = new org.puremvc.haxe.core.View();
	{
		var $tmp = org.puremvc.haxe.core.View.instance;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.View.instance = null;
org.puremvc.haxe.core.View.prototype.hasMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.core.View::hasMediator");
	var $spos = $s.length;
	{
		var $tmp = this.mediatorMap.exists(mediatorName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.View.prototype.initializeView = function() {
	$s.push("org.puremvc.haxe.core.View::initializeView");
	var $spos = $s.length;
	null;
	$s.pop();
}
org.puremvc.haxe.core.View.prototype.mediatorMap = null;
org.puremvc.haxe.core.View.prototype.notifyObservers = function(notification) {
	$s.push("org.puremvc.haxe.core.View::notifyObservers");
	var $spos = $s.length;
	if(this.observerMap.exists(notification.getName())) {
		var iterator = this.observerMap.get(notification.getName()).iterator();
		{ var $it12 = iterator;
		while( $it12.hasNext() ) { var observer = $it12.next();
		observer.notifyObserver(notification);
		}}
	}
	$s.pop();
}
org.puremvc.haxe.core.View.prototype.observerMap = null;
org.puremvc.haxe.core.View.prototype.registerMediator = function(mediator) {
	$s.push("org.puremvc.haxe.core.View::registerMediator");
	var $spos = $s.length;
	this.mediatorMap.set(mediator.getMediatorName(),mediator);
	var interests = mediator.listNotificationInterests();
	if(interests.length > 0) {
		var observer = new org.puremvc.haxe.patterns.observer.Observer($closure(mediator,"handleNotification"),mediator);
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.registerObserver(interests[i],observer);
			}
		}
	}
	mediator.onRegister();
	$s.pop();
}
org.puremvc.haxe.core.View.prototype.registerObserver = function(notificationName,observer) {
	$s.push("org.puremvc.haxe.core.View::registerObserver");
	var $spos = $s.length;
	if(!this.observerMap.exists(notificationName)) this.observerMap.set(notificationName,new List());
	this.observerMap.get(notificationName).add(observer);
	$s.pop();
}
org.puremvc.haxe.core.View.prototype.removeMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.core.View::removeMediator");
	var $spos = $s.length;
	var mediator = this.mediatorMap.get(mediatorName);
	if(mediator != null) {
		var interests = mediator.listNotificationInterests();
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.removeObserver(interests[i],mediator);
			}
		}
		this.mediatorMap.remove(mediatorName);
		mediator.onRemove();
	}
	{
		var $tmp = mediator;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.View.prototype.removeObserver = function(notificationName,notifyContext) {
	$s.push("org.puremvc.haxe.core.View::removeObserver");
	var $spos = $s.length;
	var observers = this.observerMap.get(notificationName);
	{ var $it13 = observers.iterator();
	while( $it13.hasNext() ) { var observer = $it13.next();
	{
		if(observer.compareNotifyContext(notifyContext) == true) {
			observers.remove(observer);
			break;
		}
	}
	}}
	if(observers.isEmpty()) {
		this.observerMap.remove(notificationName);
	}
	$s.pop();
}
org.puremvc.haxe.core.View.prototype.retrieveMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.core.View::retrieveMediator");
	var $spos = $s.length;
	{
		var $tmp = this.mediatorMap.get(mediatorName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.View.prototype.__class__ = org.puremvc.haxe.core.View;
org.puremvc.haxe.core.View.__interfaces__ = [org.puremvc.haxe.interfaces.IView];
Hash = function(p) { if( p === $_ ) return; {
	$s.push("Hash::new");
	var $spos = $s.length;
	{
		this.h = {}
		if(this.h.__proto__ != null) {
			this.h.__proto__ = null;
			delete(this.h.__proto__);
		}
		else null;
	}
	$s.pop();
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		{
			var $tmp = this.hasOwnProperty.call(this.h,key);
			$s.pop();
			return $tmp;
		}
	}
	catch( $e14 ) {
		{
			var e = $e14;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				{
					var $tmp = false;
					$s.pop();
					return $tmp;
				}
			}
		}
	}
	$s.pop();
}
Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	{
		var $tmp = this.h["$" + key];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	{
		var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
			$s.push("Hash::iterator@181");
			var $spos = $s.length;
			{
				var $tmp = this.it.hasNext();
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Hash::iterator@182");
			var $spos = $s.length;
			var i = this.it.next();
			{
				var $tmp = this.ref["$" + i];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	{
		var $tmp = a.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		var $tmp = false;
		$s.pop();
		return $tmp;
	}
	delete(this.h["$" + key]);
	{
		var $tmp = true;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.add("{");
	var it = this.keys();
	{ var $it15 = it;
	while( $it15.hasNext() ) { var i = $it15.next();
	{
		s.add(i);
		s.add(" => ");
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.add(", ");
	}
	}}
	s.add("}");
	{
		var $tmp = s.toString();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.__class__ = Hash;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__instanceof(v,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__string_rec(s,"");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = Math.floor(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.bool = function(x) {
	$s.push("Std::bool");
	var $spos = $s.length;
	{
		var $tmp = (x !== 0 && x != null && x !== false);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	{
		var v = parseInt(x);
		if(Math.isNaN(v)) {
			var $tmp = null;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = v;
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
}
Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	{
		var $tmp = parseFloat(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.chr = function(x) {
	$s.push("Std::chr");
	var $spos = $s.length;
	{
		var $tmp = String.fromCharCode(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.ord = function(x) {
	$s.push("Std::ord");
	var $spos = $s.length;
	if(x == "") {
		var $tmp = null;
		$s.pop();
		return $tmp;
	}
	else {
		var $tmp = x.charCodeAt(0);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	{
		var $tmp = Math.floor(Math.random() * x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.resource = function(name) {
	$s.push("Std::resource");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__res[name];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.prototype.__class__ = Std;
org.puremvc.haxe.patterns.command.MacroCommandTestCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTestCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.command.MacroCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.command.MacroCommandTestCommand.__name__ = ["org","puremvc","haxe","patterns","command","MacroCommandTestCommand"];
org.puremvc.haxe.patterns.command.MacroCommandTestCommand.__super__ = org.puremvc.haxe.patterns.command.MacroCommand;
for(var k in org.puremvc.haxe.patterns.command.MacroCommand.prototype ) org.puremvc.haxe.patterns.command.MacroCommandTestCommand.prototype[k] = org.puremvc.haxe.patterns.command.MacroCommand.prototype[k];
org.puremvc.haxe.patterns.command.MacroCommandTestCommand.prototype.initializeMacroCommand = function() {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTestCommand::initializeMacroCommand");
	var $spos = $s.length;
	this.addSubCommand(org.puremvc.haxe.patterns.command.MacroCommandTestSub1Command);
	this.addSubCommand(org.puremvc.haxe.patterns.command.MacroCommandTestSub2Command);
	$s.pop();
}
org.puremvc.haxe.patterns.command.MacroCommandTestCommand.prototype.__class__ = org.puremvc.haxe.patterns.command.MacroCommandTestCommand;
org.puremvc.haxe.patterns.observer.ObserverTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.observer.ObserverTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.observer.ObserverTest.__name__ = ["org","puremvc","haxe","patterns","observer","ObserverTest"];
org.puremvc.haxe.patterns.observer.ObserverTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.patterns.observer.ObserverTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.patterns.observer.ObserverTest.prototype.observerTestMethod = function(note) {
	$s.push("org.puremvc.haxe.patterns.observer.ObserverTest::observerTestMethod");
	var $spos = $s.length;
	this.observerTestVar = note.getBody();
	$s.pop();
}
org.puremvc.haxe.patterns.observer.ObserverTest.prototype.observerTestVar = null;
org.puremvc.haxe.patterns.observer.ObserverTest.prototype.testCompareNotifyContext = function() {
	$s.push("org.puremvc.haxe.patterns.observer.ObserverTest::testCompareNotifyContext");
	var $spos = $s.length;
	var observer = new org.puremvc.haxe.patterns.observer.Observer($closure(this,"observerTestMethod"),this);
	var negTestObj;
	this.assertFalse(observer.compareNotifyContext(negTestObj),{ fileName : "ObserverTest.hx", lineNumber : 88, className : "org.puremvc.haxe.patterns.observer.ObserverTest", methodName : "testCompareNotifyContext"});
	this.assertTrue(observer.compareNotifyContext(this),{ fileName : "ObserverTest.hx", lineNumber : 89, className : "org.puremvc.haxe.patterns.observer.ObserverTest", methodName : "testCompareNotifyContext"});
	$s.pop();
}
org.puremvc.haxe.patterns.observer.ObserverTest.prototype.testObserverAccessors = function() {
	$s.push("org.puremvc.haxe.patterns.observer.ObserverTest::testObserverAccessors");
	var $spos = $s.length;
	var observer = new org.puremvc.haxe.patterns.observer.Observer(null,null);
	observer.setNotifyContext(this);
	observer.setNotifyMethod($closure(this,"observerTestMethod"));
	var note = new org.puremvc.haxe.patterns.observer.Notification("ObserverTestNote",10);
	observer.notifyObserver(note);
	this.assertEquals(this.observerTestVar,10,{ fileName : "ObserverTest.hx", lineNumber : 51, className : "org.puremvc.haxe.patterns.observer.ObserverTest", methodName : "testObserverAccessors"});
	$s.pop();
}
org.puremvc.haxe.patterns.observer.ObserverTest.prototype.testObserverConstructor = function() {
	$s.push("org.puremvc.haxe.patterns.observer.ObserverTest::testObserverConstructor");
	var $spos = $s.length;
	var observer = new org.puremvc.haxe.patterns.observer.Observer($closure(this,"observerTestMethod"),this);
	var note = new org.puremvc.haxe.patterns.observer.Notification("ObserverTestNote",5.0);
	observer.notifyObserver(note);
	this.assertEquals(this.observerTestVar,5.0,{ fileName : "ObserverTest.hx", lineNumber : 74, className : "org.puremvc.haxe.patterns.observer.ObserverTest", methodName : "testObserverConstructor"});
	$s.pop();
}
org.puremvc.haxe.patterns.observer.ObserverTest.prototype.__class__ = org.puremvc.haxe.patterns.observer.ObserverTest;
org.puremvc.haxe.core.ControllerTestCommand2 = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ControllerTestCommand2::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.core.ControllerTestCommand2.__name__ = ["org","puremvc","haxe","core","ControllerTestCommand2"];
org.puremvc.haxe.core.ControllerTestCommand2.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.core.ControllerTestCommand2.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.core.ControllerTestCommand2.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.core.ControllerTestCommand2::execute");
	var $spos = $s.length;
	var vo = note.getBody();
	vo.result = vo.result + (2 * vo.input);
	$s.pop();
}
org.puremvc.haxe.core.ControllerTestCommand2.prototype.__class__ = org.puremvc.haxe.core.ControllerTestCommand2;
org.puremvc.haxe.core.ModelTest = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ModelTest::new");
	var $spos = $s.length;
	haxe.unit.TestCase.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.core.ModelTest.__name__ = ["org","puremvc","haxe","core","ModelTest"];
org.puremvc.haxe.core.ModelTest.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) org.puremvc.haxe.core.ModelTest.prototype[k] = haxe.unit.TestCase.prototype[k];
org.puremvc.haxe.core.ModelTest.prototype.testGetInstance = function() {
	$s.push("org.puremvc.haxe.core.ModelTest::testGetInstance");
	var $spos = $s.length;
	var model = org.puremvc.haxe.core.Model.getInstance();
	this.assertTrue(model != null,{ fileName : "ModelTest.hx", lineNumber : 28, className : "org.puremvc.haxe.core.ModelTest", methodName : "testGetInstance"});
	this.assertTrue(Std["is"](model,org.puremvc.haxe.interfaces.IModel),{ fileName : "ModelTest.hx", lineNumber : 29, className : "org.puremvc.haxe.core.ModelTest", methodName : "testGetInstance"});
	$s.pop();
}
org.puremvc.haxe.core.ModelTest.prototype.testHasProxy = function() {
	$s.push("org.puremvc.haxe.core.ModelTest::testHasProxy");
	var $spos = $s.length;
	var model = org.puremvc.haxe.core.Model.getInstance();
	var proxy = new org.puremvc.haxe.patterns.proxy.Proxy("aces",["clubs","spades","hearts","diamonds"]);
	model.registerProxy(proxy);
	this.assertTrue(model.hasProxy("aces"),{ fileName : "ModelTest.hx", lineNumber : 92, className : "org.puremvc.haxe.core.ModelTest", methodName : "testHasProxy"});
	model.removeProxy("aces");
	this.assertFalse(model.hasProxy("aces"),{ fileName : "ModelTest.hx", lineNumber : 99, className : "org.puremvc.haxe.core.ModelTest", methodName : "testHasProxy"});
	$s.pop();
}
org.puremvc.haxe.core.ModelTest.prototype.testOnRegisterAndOnRemove = function() {
	$s.push("org.puremvc.haxe.core.ModelTest::testOnRegisterAndOnRemove");
	var $spos = $s.length;
	var model = org.puremvc.haxe.core.Model.getInstance();
	var proxy = new org.puremvc.haxe.core.ModelTestProxy();
	model.registerProxy(proxy);
	this.assertEquals(proxy.getData(),org.puremvc.haxe.core.ModelTestProxy.ON_REGISTER_CALLED,{ fileName : "ModelTest.hx", lineNumber : 115, className : "org.puremvc.haxe.core.ModelTest", methodName : "testOnRegisterAndOnRemove"});
	model.removeProxy(org.puremvc.haxe.core.ModelTestProxy.NAME);
	this.assertEquals(proxy.getData(),org.puremvc.haxe.core.ModelTestProxy.ON_REMOVE_CALLED,{ fileName : "ModelTest.hx", lineNumber : 121, className : "org.puremvc.haxe.core.ModelTest", methodName : "testOnRegisterAndOnRemove"});
	$s.pop();
}
org.puremvc.haxe.core.ModelTest.prototype.testRegisterAndRemoveProxy = function() {
	$s.push("org.puremvc.haxe.core.ModelTest::testRegisterAndRemoveProxy");
	var $spos = $s.length;
	var model = org.puremvc.haxe.core.Model.getInstance();
	var proxy = new org.puremvc.haxe.patterns.proxy.Proxy("sizes",["7","13","21"]);
	model.registerProxy(proxy);
	var removedProxy = model.removeProxy("sizes");
	this.assertEquals(removedProxy.getProxyName(),"sizes",{ fileName : "ModelTest.hx", lineNumber : 72, className : "org.puremvc.haxe.core.ModelTest", methodName : "testRegisterAndRemoveProxy"});
	proxy = model.retrieveProxy("sizes");
	this.assertTrue(proxy == null,{ fileName : "ModelTest.hx", lineNumber : 77, className : "org.puremvc.haxe.core.ModelTest", methodName : "testRegisterAndRemoveProxy"});
	$s.pop();
}
org.puremvc.haxe.core.ModelTest.prototype.testRegisterAndRetrieveProxy = function() {
	$s.push("org.puremvc.haxe.core.ModelTest::testRegisterAndRetrieveProxy");
	var $spos = $s.length;
	var model = org.puremvc.haxe.core.Model.getInstance();
	model.registerProxy(new org.puremvc.haxe.patterns.proxy.Proxy("colors",["red","green","blue"]));
	var proxy = model.retrieveProxy("colors");
	var data = function($this) {
		var $r;
		var tmp = proxy;
		$r = (Std["is"](tmp,org.puremvc.haxe.patterns.proxy.Proxy)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this).getData();
	this.assertTrue(data != null,{ fileName : "ModelTest.hx", lineNumber : 50, className : "org.puremvc.haxe.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertTrue(Std["is"](data,Array),{ fileName : "ModelTest.hx", lineNumber : 51, className : "org.puremvc.haxe.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data.length,3,{ fileName : "ModelTest.hx", lineNumber : 52, className : "org.puremvc.haxe.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[0],"red",{ fileName : "ModelTest.hx", lineNumber : 53, className : "org.puremvc.haxe.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[1],"green",{ fileName : "ModelTest.hx", lineNumber : 54, className : "org.puremvc.haxe.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	this.assertEquals(data[2],"blue",{ fileName : "ModelTest.hx", lineNumber : 55, className : "org.puremvc.haxe.core.ModelTest", methodName : "testRegisterAndRetrieveProxy"});
	$s.pop();
}
org.puremvc.haxe.core.ModelTest.prototype.__class__ = org.puremvc.haxe.core.ModelTest;
org.puremvc.haxe.patterns.command.MacroCommandTestVO = function(input) { if( input === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.command.MacroCommandTestVO::new");
	var $spos = $s.length;
	this.input = input;
	$s.pop();
}}
org.puremvc.haxe.patterns.command.MacroCommandTestVO.__name__ = ["org","puremvc","haxe","patterns","command","MacroCommandTestVO"];
org.puremvc.haxe.patterns.command.MacroCommandTestVO.prototype.input = null;
org.puremvc.haxe.patterns.command.MacroCommandTestVO.prototype.result1 = null;
org.puremvc.haxe.patterns.command.MacroCommandTestVO.prototype.result2 = null;
org.puremvc.haxe.patterns.command.MacroCommandTestVO.prototype.__class__ = org.puremvc.haxe.patterns.command.MacroCommandTestVO;
org.puremvc.haxe.patterns.facade.Facade = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.facade.Facade.instance = this;
	this.initializeFacade();
	$s.pop();
}}
org.puremvc.haxe.patterns.facade.Facade.__name__ = ["org","puremvc","haxe","patterns","facade","Facade"];
org.puremvc.haxe.patterns.facade.Facade.getInstance = function() {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::getInstance");
	var $spos = $s.length;
	if(org.puremvc.haxe.patterns.facade.Facade.instance == null) org.puremvc.haxe.patterns.facade.Facade.instance = new org.puremvc.haxe.patterns.facade.Facade();
	{
		var $tmp = org.puremvc.haxe.patterns.facade.Facade.instance;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.instance = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.controller = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.hasCommand = function(notificationName) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::hasCommand");
	var $spos = $s.length;
	{
		var $tmp = this.controller.hasCommand(notificationName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.hasMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::hasMediator");
	var $spos = $s.length;
	{
		var $tmp = this.view.hasMediator(mediatorName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.hasProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::hasProxy");
	var $spos = $s.length;
	{
		var $tmp = this.model.hasProxy(proxyName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeController = function() {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::initializeController");
	var $spos = $s.length;
	if(this.controller != null) return;
	this.controller = org.puremvc.haxe.core.Controller.getInstance();
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeFacade = function() {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::initializeFacade");
	var $spos = $s.length;
	this.initializeModel();
	this.initializeController();
	this.initializeView();
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeModel = function() {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::initializeModel");
	var $spos = $s.length;
	if(this.model != null) return;
	this.model = org.puremvc.haxe.core.Model.getInstance();
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.initializeView = function() {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::initializeView");
	var $spos = $s.length;
	if(this.view != null) return;
	this.view = org.puremvc.haxe.core.View.getInstance();
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.model = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.notifyObservers = function(notification) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::notifyObservers");
	var $spos = $s.length;
	if(this.view != null) this.view.notifyObservers(notification);
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerCommand = function(notificationName,commandClassRef) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::registerCommand");
	var $spos = $s.length;
	this.controller.registerCommand(notificationName,commandClassRef);
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerMediator = function(mediator) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::registerMediator");
	var $spos = $s.length;
	if(this.view != null) this.view.registerMediator(mediator);
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.registerProxy = function(proxy) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::registerProxy");
	var $spos = $s.length;
	this.model.registerProxy(proxy);
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeCommand = function(notificationName) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::removeCommand");
	var $spos = $s.length;
	this.controller.removeCommand(notificationName);
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::removeMediator");
	var $spos = $s.length;
	var mediator;
	if(this.view != null) mediator = this.view.removeMediator(mediatorName);
	{
		var $tmp = mediator;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.removeProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::removeProxy");
	var $spos = $s.length;
	var proxy;
	if(this.model != null) proxy = this.model.removeProxy(proxyName);
	{
		var $tmp = proxy;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.retrieveMediator = function(mediatorName) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::retrieveMediator");
	var $spos = $s.length;
	{
		var $tmp = this.view.retrieveMediator(mediatorName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.retrieveProxy = function(proxyName) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::retrieveProxy");
	var $spos = $s.length;
	{
		var $tmp = this.model.retrieveProxy(proxyName);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.sendNotification = function(notificationName,body,type) {
	$s.push("org.puremvc.haxe.patterns.facade.Facade::sendNotification");
	var $spos = $s.length;
	this.notifyObservers(new org.puremvc.haxe.patterns.observer.Notification(notificationName,body,type));
	$s.pop();
}
org.puremvc.haxe.patterns.facade.Facade.prototype.view = null;
org.puremvc.haxe.patterns.facade.Facade.prototype.__class__ = org.puremvc.haxe.patterns.facade.Facade;
org.puremvc.haxe.patterns.facade.Facade.__interfaces__ = [org.puremvc.haxe.interfaces.IFacade];
org.puremvc.haxe.patterns.facade.FacadeTestCommand = function(p) { if( p === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTestCommand::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.command.SimpleCommand.apply(this,[]);
	$s.pop();
}}
org.puremvc.haxe.patterns.facade.FacadeTestCommand.__name__ = ["org","puremvc","haxe","patterns","facade","FacadeTestCommand"];
org.puremvc.haxe.patterns.facade.FacadeTestCommand.__super__ = org.puremvc.haxe.patterns.command.SimpleCommand;
for(var k in org.puremvc.haxe.patterns.command.SimpleCommand.prototype ) org.puremvc.haxe.patterns.facade.FacadeTestCommand.prototype[k] = org.puremvc.haxe.patterns.command.SimpleCommand.prototype[k];
org.puremvc.haxe.patterns.facade.FacadeTestCommand.prototype.execute = function(note) {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTestCommand::execute");
	var $spos = $s.length;
	var vo = function($this) {
		var $r;
		var tmp = note.getBody();
		$r = (Std["is"](tmp,org.puremvc.haxe.patterns.facade.FacadeTestVO)?tmp:function($this) {
			var $r;
			throw "Class cast error";
			return $r;
		}($this));
		return $r;
	}(this);
	vo.result = 2 * vo.input;
	$s.pop();
}
org.puremvc.haxe.patterns.facade.FacadeTestCommand.prototype.__class__ = org.puremvc.haxe.patterns.facade.FacadeTestCommand;
org.puremvc.haxe.core.ViewTestMediator4 = function(view) { if( view === $_ ) return; {
	$s.push("org.puremvc.haxe.core.ViewTestMediator4::new");
	var $spos = $s.length;
	org.puremvc.haxe.patterns.mediator.Mediator.apply(this,[org.puremvc.haxe.core.ViewTestMediator4.NAME,view]);
	$s.pop();
}}
org.puremvc.haxe.core.ViewTestMediator4.__name__ = ["org","puremvc","haxe","core","ViewTestMediator4"];
org.puremvc.haxe.core.ViewTestMediator4.__super__ = org.puremvc.haxe.patterns.mediator.Mediator;
for(var k in org.puremvc.haxe.patterns.mediator.Mediator.prototype ) org.puremvc.haxe.core.ViewTestMediator4.prototype[k] = org.puremvc.haxe.patterns.mediator.Mediator.prototype[k];
org.puremvc.haxe.core.ViewTestMediator4.prototype.getViewTest = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator4::getViewTest");
	var $spos = $s.length;
	{
		var $tmp = this.viewComponent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator4.prototype.onRegister = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator4::onRegister");
	var $spos = $s.length;
	this.getViewTest().onRegisterCalled = true;
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator4.prototype.onRemove = function() {
	$s.push("org.puremvc.haxe.core.ViewTestMediator4::onRemove");
	var $spos = $s.length;
	this.getViewTest().onRemoveCalled = true;
	$s.pop();
}
org.puremvc.haxe.core.ViewTestMediator4.prototype.__class__ = org.puremvc.haxe.core.ViewTestMediator4;
haxe.unit.TestResult = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestResult::new");
	var $spos = $s.length;
	this.m_tests = new List();
	this.success = true;
	$s.pop();
}}
haxe.unit.TestResult.__name__ = ["haxe","unit","TestResult"];
haxe.unit.TestResult.prototype.add = function(t) {
	$s.push("haxe.unit.TestResult::add");
	var $spos = $s.length;
	this.m_tests.add(t);
	if(!t.success) this.success = false;
	$s.pop();
}
haxe.unit.TestResult.prototype.m_tests = null;
haxe.unit.TestResult.prototype.success = null;
haxe.unit.TestResult.prototype.toString = function() {
	$s.push("haxe.unit.TestResult::toString");
	var $spos = $s.length;
	var buf = new StringBuf();
	var failures = 0;
	{ var $it16 = this.m_tests.iterator();
	while( $it16.hasNext() ) { var test = $it16.next();
	{
		if(test.success == false) {
			buf.add("* ");
			buf.add(test.classname);
			buf.add("::");
			buf.add(test.method);
			buf.add("()");
			buf.add("\n");
			buf.add("ERR: ");
			if(test.posInfos != null) {
				buf.add(test.posInfos.fileName);
				buf.add(":");
				buf.add(test.posInfos.lineNumber);
				buf.add("(");
				buf.add(test.posInfos.className);
				buf.add(".");
				buf.add(test.posInfos.methodName);
				buf.add(") - ");
			}
			buf.add(test.error);
			buf.add("\n");
			if(test.backtrace != null) {
				buf.add(test.backtrace);
				buf.add("\n");
			}
			buf.add("\n");
			failures++;
		}
	}
	}}
	buf.add("\n");
	if(failures == 0) buf.add("OK ");
	else buf.add("FAILED ");
	buf.add(this.m_tests.length);
	buf.add(" tests, ");
	buf.add(failures);
	buf.add(" failed, ");
	buf.add((this.m_tests.length - failures));
	buf.add(" success");
	buf.add("\n");
	{
		var $tmp = buf.toString();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.unit.TestResult.prototype.__class__ = haxe.unit.TestResult;
org.puremvc.haxe.patterns.facade.FacadeTestVO = function(input) { if( input === $_ ) return; {
	$s.push("org.puremvc.haxe.patterns.facade.FacadeTestVO::new");
	var $spos = $s.length;
	this.input = input;
	$s.pop();
}}
org.puremvc.haxe.patterns.facade.FacadeTestVO.__name__ = ["org","puremvc","haxe","patterns","facade","FacadeTestVO"];
org.puremvc.haxe.patterns.facade.FacadeTestVO.prototype.input = null;
org.puremvc.haxe.patterns.facade.FacadeTestVO.prototype.result = null;
org.puremvc.haxe.patterns.facade.FacadeTestVO.prototype.__class__ = org.puremvc.haxe.patterns.facade.FacadeTestVO;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.alert = function(v) {
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	{
		var $tmp = eval(code);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	$s.push("StringTools::urlEncode");
	var $spos = $s.length;
	{
		var $tmp = encodeURIComponent(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.urlDecode = function(s) {
	$s.push("StringTools::urlDecode");
	var $spos = $s.length;
	{
		var $tmp = decodeURIComponent(s.split("+").join(" "));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlEscape = function(s) {
	$s.push("StringTools::htmlEscape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlUnescape = function(s) {
	$s.push("StringTools::htmlUnescape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.startsWith = function(s,start) {
	$s.push("StringTools::startsWith");
	var $spos = $s.length;
	{
		var $tmp = (s.length >= start.length && s.substr(0,start.length) == start);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.endsWith = function(s,end) {
	$s.push("StringTools::endsWith");
	var $spos = $s.length;
	var elen = end.length;
	var slen = s.length;
	{
		var $tmp = (slen >= elen && s.substr(slen - elen,elen) == end);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.isSpace = function(s,pos) {
	$s.push("StringTools::isSpace");
	var $spos = $s.length;
	var c = s.charCodeAt(pos);
	{
		var $tmp = (c >= 9 && c <= 13) || c == 32;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.ltrim = function(s) {
	$s.push("StringTools::ltrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) {
		var $tmp = s.substr(r,l - r);
		$s.pop();
		return $tmp;
	}
	else {
		var $tmp = s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.rtrim = function(s) {
	$s.push("StringTools::rtrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		{
			var $tmp = s.substr(0,l - r);
			$s.pop();
			return $tmp;
		}
	}
	else {
		{
			var $tmp = s;
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
}
StringTools.trim = function(s) {
	$s.push("StringTools::trim");
	var $spos = $s.length;
	{
		var $tmp = StringTools.ltrim(StringTools.rtrim(s));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.rpad = function(s,c,l) {
	$s.push("StringTools::rpad");
	var $spos = $s.length;
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	{
		var $tmp = s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.lpad = function(s,c,l) {
	$s.push("StringTools::lpad");
	var $spos = $s.length;
	var ns = "";
	var sl = s.length;
	if(sl >= l) {
		var $tmp = s;
		$s.pop();
		return $tmp;
	}
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	{
		var $tmp = ns + s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.replace = function(s,sub,by) {
	$s.push("StringTools::replace");
	var $spos = $s.length;
	{
		var $tmp = s.split(sub).join(by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.baseEncode = function(s,base) {
	$s.push("StringTools::baseEncode");
	var $spos = $s.length;
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "baseEncode: base must be a power of two.";
	var size = Std["int"]((s.length * 8 + nbits - 1) / nbits);
	var out = new StringBuf();
	var buf = 0;
	var curbits = 0;
	var mask = ((1 << nbits) - 1);
	var pin = 0;
	while(size-- > 0) {
		while(curbits < nbits) {
			curbits += 8;
			buf <<= 8;
			var t = s.charCodeAt(pin++);
			if(t > 255) throw "baseEncode: bad chars";
			buf |= t;
		}
		curbits -= nbits;
		out.addChar(base.charCodeAt((buf >> curbits) & mask));
	}
	{
		var $tmp = out.toString();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.baseDecode = function(s,base) {
	$s.push("StringTools::baseDecode");
	var $spos = $s.length;
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "baseDecode: base must be a power of two.";
	var size = (s.length * 8 + nbits - 1) / nbits;
	var tbl = new Array();
	{
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
	}
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			tbl[base.charCodeAt(i)] = i;
		}
	}
	var size1 = (s.length * nbits) / 8;
	var out = new StringBuf();
	var buf = 0;
	var curbits = 0;
	var pin = 0;
	while(size1-- > 0) {
		while(curbits < 8) {
			curbits += nbits;
			buf <<= nbits;
			var i = tbl[s.charCodeAt(pin++)];
			if(i == -1) throw "baseDecode: bad chars";
			buf |= i;
		}
		curbits -= 8;
		out.addChar((buf >> curbits) & 255);
	}
	{
		var $tmp = out.toString();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.hex = function(n,digits) {
	$s.push("StringTools::hex");
	var $spos = $s.length;
	var neg = false;
	if(n < 0) {
		neg = true;
		n = -n;
	}
	var s = n.toString(16);
	s = s.toUpperCase();
	if(digits != null) while(s.length < digits) s = "0" + s;
	if(neg) s = "-" + s;
	{
		var $tmp = s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.prototype.__class__ = StringTools;
$Main = function() { }
$Main.__name__ = ["@Main"];
$Main.prototype.__class__ = $Main;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		$s.push("@Main::new@71");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.isNaN = function(i) {
		$s.push("@Main::new@83");
		var $spos = $s.length;
		{
			var $tmp = isNaN(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
}
{
	
			onerror = function(msg,url,line) {
				var stack = $s.copy();
				var f = js.Lib.onerror;
				$s.splice(0,$s.length);
				if( f == null ) {
					var i = stack.length;
					var s = "";
					while( --i >= 0 )
						s += "Called from "+stack[i]+"\n";
					alert(msg+"\n\n"+s);
					return false;
				}
				return f(msg,stack);
			}
		;
}
org.puremvc.haxe.patterns.mediator.Mediator.NAME = "Mediator";
org.puremvc.haxe.patterns.proxy.Proxy.NAME = "Proxy";
org.puremvc.haxe.core.ModelTestProxy.NAME = "ModelTestProxy";
org.puremvc.haxe.core.ModelTestProxy.ON_REGISTER_CALLED = "onRegister Called";
org.puremvc.haxe.core.ModelTestProxy.ON_REMOVE_CALLED = "onRemove Called";
org.puremvc.haxe.core.ViewTestMediator2.NAME = "ViewTestMediator2";
org.puremvc.haxe.core.ViewTestNote.NAME = "ViewTestNote";
org.puremvc.haxe.core.ViewTest.NOTE1 = "Notification1";
org.puremvc.haxe.core.ViewTest.NOTE2 = "Notification2";
org.puremvc.haxe.core.ViewTest.NOTE3 = "Notification3";
org.puremvc.haxe.core.ViewTestMediator3.NAME = "ViewTestMediator3";
org.puremvc.haxe.core.ViewTestMediator.NAME = "ViewTestMediator";
org.puremvc.haxe.core.ViewTestMediator4.NAME = "ViewTestMediator4";
js.Lib.document = document;
js.Lib.window = window;
js.Lib.onerror = null;
$Main.init = PureMVCTestRunner.main();

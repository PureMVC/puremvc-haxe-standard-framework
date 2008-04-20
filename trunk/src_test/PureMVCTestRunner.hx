/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
import org.puremvc.haxe.patterns.observer.NotificationTest;
import org.puremvc.haxe.patterns.observer.ObserverTest;
import org.puremvc.haxe.patterns.facade.FacadeTest;
import org.puremvc.haxe.patterns.command.MacroCommandTest;
import org.puremvc.haxe.patterns.command.SimpleCommandTest;
import org.puremvc.haxe.patterns.mediator.MediatorTest;
import org.puremvc.haxe.core.ModelTest;
import org.puremvc.haxe.core.ViewTest;
import org.puremvc.haxe.core.ControllerTest;
import org.puremvc.haxe.patterns.proxy.ProxyTest;

class PureMVCTestRunner
{
	static function main()
	{
		var tr = new haxe.unit.TestRunner();

		tr.add( new NotificationTest() );
		tr.add( new ObserverTest() );
		tr.add( new SimpleCommandTest() );
		tr.add( new MacroCommandTest() );
		tr.add( new ProxyTest() );
		tr.add( new ModelTest() );
		tr.add( new MediatorTest() );
		tr.add( new ViewTest() );
		tr.add( new ControllerTest() );
		tr.add( new FacadeTest() );

		tr.run();
	}
}
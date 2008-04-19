/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.facade;

import org.puremvc.haxe.interfaces.IProxy;
import org.puremvc.haxe.interfaces.IMediator;
import org.puremvc.haxe.interfaces.IFacade;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.observer.Notification;
import org.puremvc.haxe.patterns.proxy.Proxy;
import org.puremvc.haxe.patterns.mediator.Mediator;
 	
/**
 * Test the PureMVC Facade class.
 */
class FacadeTest extends haxe.unit.TestCase
{
  		
	/**
	 * Tests the Facade Singleton Factory Method 
	 */
	public function testGetInstance(): Void
	{			
		// Test Factory Method
		var facade: IFacade = Facade.getInstance();
   			
		// test assertions
		assertTrue( facade != null );
		assertTrue( Std.is( facade, IFacade ) );
	}

	/**
	 * Tests Command registration and execution via the Facade.
	 * 
	 * <P>
	 * This test gets the Singleton Facade instance 
	 * and registers the FacadeTestCommand class 
	 * to handle 'FacadeTest' Notifcations.<P>
	 * 
	 * <P>
	 * It then sends a notification using the Facade. 
	 * Success is determined by evaluating 
	 * a property on an object placed in the body of
	 * the Notification, which will be modified by the Command.</P>
	 * 
	 */
	public function testRegisterCommandAndSendNotification(): Void
	{
		// Create the Facade, register the FacadeTestCommand to 
		// handle 'FacadeTest' notifications
		var facade: IFacade = Facade.getInstance();
		facade.registerCommand( 'FacadeTestNote', org.puremvc.haxe.patterns.facade.FacadeTestCommand );
   			
		// Send notification. The Command associated with the event
		// (FacadeTestCommand) will be invoked, and will multiply 
		// the vo.input value by 2 and set the result on vo.result
		var vo: FacadeTestVO = new FacadeTestVO( 32 );
		facade.sendNotification( 'FacadeTestNote', vo );

		// test assertions 
		assertEquals( vo.result, 64 );
	}

	/**
 	* Tests Command removal via the Facade.
 	* 
 	* <P>
 	* This test gets the Singleton Facade instance 
 	* and registers the FacadeTestCommand class 
 	* to handle 'FacadeTest' Notifcations. Then it removes the command.<P>
 	* 
 	* <P>
 	* It then sends a Notification using the Facade. 
 	* Success is determined by evaluating 
 	* a property on an object placed in the body of
 	* the Notification, which will NOT be modified by the Command.</P>
 	*/
	public function testRegisterAndRemoveCommandAndSendNotification(): Void
	{
		// Create the Facade, register the FacadeTestCommand to 
		// handle 'FacadeTest' events
		var facade: IFacade = Facade.getInstance();
		facade.registerCommand( 'FacadeTestNote', org.puremvc.haxe.patterns.facade.FacadeTestCommand );
		facade.removeCommand( 'FacadeTestNote' );
   			
		// Create a 'FacadeTest' event
		var vo: FacadeTestVO = new FacadeTestVO( 32 );
		facade.sendNotification( 'FacadeTestNote', vo );
   			
		// test assertions 
		assertTrue( vo.result != 64 );
	}

	/**
	 * Tests the regsitering and retrieving Model proxys via the Facade.
	 * 
	 * <P>
	 * Tests <code>registerModelProxy</code> and <code>retrieveModelProxy</code> in the same test.
	 * These methods cannot currently be tested separately
	 * in any meaningful way other than to show that the
	 * methods do not throw exception when called. </P>
	 */
	public function testRegisterAndRetrieveProxy(): Void
	{		
		// register a proxy and retrieve it.
		var facade: IFacade = Facade.getInstance();
		facade.registerProxy( new Proxy( 'colors', [ 'red', 'green', 'blue' ] ) );
		var proxy: IProxy = facade.retrieveProxy( 'colors' );
		
		// test assertions
		assertTrue( Std.is( proxy, IProxy ) );

		// retrieve data from proxy
		var data: Dynamic = cast( proxy, Proxy ).getData();
			
		// test assertions
		assertTrue( data != null );
		assertTrue( Std.is( data, Array ) );
		assertEquals( data.length, 3 );
		assertEquals( data[0], 'red' );
		assertEquals( data[1], 'green' );
		assertEquals( data[2], 'blue' );
	}
  		
  	/**
  	 * Tests the removing Proxies via the Facade.
  	 */
  	public function testRegisterAndRemoveProxy(): Void
	{		
		// register a proxy, remove it, then try to retrieve it
		var facade: IFacade = Facade.getInstance();
		var proxy: IProxy = new Proxy('sizes', [ '7', '13', '21' ] );
		facade.registerProxy( proxy );

		// remove the proxy
		var removedProxy: IProxy = facade.removeProxy( 'sizes' );

		// assert that we removed the appropriate proxy
		assertEquals( removedProxy.getProxyName(), 'sizes' );

		// assert that we removed the appropriate proxy
		proxy = facade.retrieveProxy( 'sizes' );
			
		// test assertions
		assertTrue( proxy == null );
	}

	/**
	 * Tests registering, retrieving and removing Mediators via the Facade.
	 */
	public function testRegisterRetrieveAndRemoveMediator(): Void
	{
		// register a mediator, remove it, then try to retrieve it
		var facade:IFacade = Facade.getInstance();
		facade.registerMediator( new Mediator( Mediator.NAME, new String( "test view" ) ) );
			
		// retrieve the mediator
		assertTrue( facade.retrieveMediator( Mediator.NAME ) != null );

		// remove the mediator
		var removedMediator: IMediator = facade.removeMediator( Mediator.NAME );

		// assert that we have removed the appropriate mediator
		assertEquals( removedMediator.getMediatorName(), Mediator.NAME );
			
		// assert that the mediator is no longer retrievable
		assertTrue( facade.retrieveMediator( Mediator.NAME ) == null );
	}

	/**
	 * Tests the hasProxy Method
	 */
	public function testHasProxy(): Void
	{	
		// register a Proxy
		var facade: IFacade = Facade.getInstance();
		facade.registerProxy( new Proxy( 'hasProxyTest', [ 1, 2, 3 ] ) );
		
		// assert that the model.hasProxy method returns true
		// for that proxy name
		assertEquals( facade.hasProxy('hasProxyTest'), true);	
	}

	/**
	 * Tests the hasMediator Method
	 */
	public function testHasMediator(): Void
	{
		// register a Mediator
		var facade:IFacade = Facade.getInstance();
		facade.registerMediator( new Mediator( 'facadeHasMediatorTest', new String( "" ) ) );
		
		// assert that the facade.hasMediator method returns true
		// for that mediator name
		assertTrue( facade.hasMediator( 'facadeHasMediatorTest' ) );
					
		facade.removeMediator( 'facadeHasMediatorTest' );
		
		// assert that the facade.hasMediator method returns false
		// for that mediator name
		assertFalse( facade.hasMediator ('facadeHasMediatorTest' ) );
	}

	/**
	 * Test hasCommand method.
	 */
	public function testHasCommand(): Void
	{
		// register the ControllerTestCommand to handle 'hasCommandTest' notes
		var facade: IFacade = Facade.getInstance();
		facade.registerCommand( 'facadeHasCommandTest', org.puremvc.haxe.patterns.facade.FacadeTestCommand );
		
		// test that hasCommand returns true for hasCommandTest notifications 
		assertTrue( facade.hasCommand( 'facadeHasCommandTest' ) );
		
		// Remove the Command from the Controller
		facade.removeCommand( 'facadeHasCommandTest' );
		
		// test that hasCommand returns false for hasCommandTest notifications 
		assertFalse( facade.hasCommand('facadeHasCommandTest')  );
	}

}
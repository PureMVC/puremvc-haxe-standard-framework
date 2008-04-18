/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.core;

import org.puremvc.haxe.core.controller.Controller;
import org.puremvc.haxe.interfaces.IController;
import org.puremvc.haxe.patterns.observer.Notification;
 	
/**
 * Test the PureMVC Controller class.
 */
class ControllerTest extends haxe.unit.TestCase
{  		
	/**
	 * Tests the Controller Singleton Factory Method 
	 */
	public function testGetInstance(): Void {
  			
 		// Test Factory Method
 		var controller: IController = Controller.getInstance();
  			
 		// test assertions
 		assertTrue( controller != null );
 		assertTrue( Std.is( controller, IController ) );
 	}

	/**
	 * Tests Command registration and execution.
	 * 
	 * <P>
	 * This test gets the Singleton Controller instance 
	 * and registers the ControllerTestCommand class 
	 * to handle 'ControllerTest' Notifications.<P>
	 * 
	 * <P>
	 * It then constructs such a Notification and tells the 
	 * Controller to execute the associated Command.
	 * Success is determined by evaluating a property
	 * on an object passed to the Command, which will
	 * be modified when the Command executes.</P>
	 * 
	 */
	public function testRegisterAndExecuteCommand(): Void 
	{			
		// Create the controller, register the ControllerTestCommand to handle 'ControllerTest' notes
		var controller: IController = Controller.getInstance();
		controller.registerCommand( 'ControllerTest', org.puremvc.haxe.core.ControllerTestCommand );
  			
		// Create a 'ControllerTest' note
		var vo: ControllerTestVO = new ControllerTestVO( 12.0 );
		var note: Notification = new Notification( 'ControllerTest', vo );

		// Tell the controller to execute the Command associated with the note
		// the ControllerTestCommand invoked will multiply the vo.input value
		// by 2 and set the result on vo.result
		controller.executeCommand( note );
   			
		// test assertions 
		assertEquals( vo.result, 24.0 );
	}
   		
	/**
	 * Tests Command registration and removal.
	 * 
	 * <P>
	 * Tests that once a Command is registered and verified
	 * working, it can be removed from the Controller.</P>
	 */
	public function testRegisterAndRemoveCommand(): Void
	{
  			
		// Create the controller, register the ControllerTestCommand to handle 'ControllerTest' notes
		var controller: IController = Controller.getInstance();
		controller.registerCommand( 'ControllerRemoveTest', org.puremvc.haxe.core.ControllerTestCommand );
   			
		// Create a 'ControllerTest' note
		var vo: ControllerTestVO = new ControllerTestVO( 12 );
		var note: Notification = new Notification( 'ControllerRemoveTest', vo );

		// Tell the controller to execute the Command associated with the note
		// the ControllerTestCommand invoked will multiply the vo.input value
		// by 2 and set the result on vo.result
		controller.executeCommand( note );
   			
		// test assertions 
		assertEquals( vo.result, 24.0 );
   			
		// Reset result
		vo.result = 0;
   			
		// Remove the Command from the Controller
		controller.removeCommand( 'ControllerRemoveTest' );
			
		// Tell the controller to execute the Command associated with the
		// note. This time, it should not be registered, and our vo result
		// will not change   			
		controller.executeCommand( note );
   			
		// test assertions 
		assertEquals( vo.result, 0 );		
	}

	/**
	 * Test hasCommand method.
	 */
	public function testHasCommand(): Void
	{
		
		// register the ControllerTestCommand to handle 'hasCommandTest' notes
		var controller: IController = Controller.getInstance();
		controller.registerCommand( 'hasCommandTest', org.puremvc.haxe.core.ControllerTestCommand );
		
		// test that hasCommand returns true for hasCommandTest notifications 
		assertTrue( controller.hasCommand( 'hasCommandTest' ) );
		
		// Remove the Command from the Controller
		controller.removeCommand( 'hasCommandTest' );
		
		// test that hasCommand returns false for hasCommandTest notifications 
		assertFalse( controller.hasCommand('hasCommandTest') );
		
	}
		
}
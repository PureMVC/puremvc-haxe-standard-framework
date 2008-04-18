/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.command;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.observer.Notification;
 	
/**
 * Test the PureMVC SimpleCommand class.
 */
class MacroCommandTest extends haxe.unit.TestCase
{
  		
	/**
	 * Tests operation of a [MacroCommand].
	 * 
	 * <p>
	 * This test creates a new [Notification], adding a 
	 * [MacroCommandTestVO] as the body. 
	 * It then creates a [MacroCommandTestCommand] and invokes
	 * its [execute] method, passing in the 
	 * [Notification].<p>
	 * 
	 * <p>
	 * The [MacroCommandTestCommand] has defined an
	 * [initializeMacroCommand] method, which is 
	 * called automatically by its constructor. In this method
	 * the [MacroCommandTestCommand] adds 2 SubCommands
	 * to itself, [MacroCommandTestSub1Command] and
	 * [MacroCommandTestSub2Command].</p>
	 * 
	 * <p>
	 * The [MacroCommandTestVO] has 2 result properties,
	 * one is set by [MacroCommandTestSub1Command] by
	 * multiplying the input property by 2, and the other is set
	 * by [MacroCommandTestSub2Command] by multiplying
	 * the input property by itself.</p>
	 * 
	 * <p>
	 * Success is determined by evaluating the 2 result properties
	 * on the [MacroCommandTestVO] that was passed to 
	 * the [MacroCommandTestCommand] on the Notification 
	 * body.</p>
	 * 
	 */
	public function testMacroCommandExecute(): Void
	{
  			
		// Create the VO
		var vo: MacroCommandTestVO = new MacroCommandTestVO( 5 );
			
		// Create the Notification (note)
		var note: INotification = new Notification( 'MacroCommandTest', vo );

		// Create the SimpleCommand  			
		var command: MacroCommandTestCommand = new MacroCommandTestCommand();
   			
		// Execute the SimpleCommand
		command.execute( note );
   			
		// test assertions
		assertEquals( vo.result1, 10 );
		assertEquals( vo.result2, 25 );
   			
	}	

}
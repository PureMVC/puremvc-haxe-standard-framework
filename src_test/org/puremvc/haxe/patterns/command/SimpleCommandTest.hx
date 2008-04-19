/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.command;

import org.puremvc.haxe.patterns.observer.Notification;
 	
/**
 * Test the PureMVC SimpleCommand class.
 */
class SimpleCommandTest extends haxe.unit.TestCase
{
 		
	/**
	 * Tests the [execute] method of a [SimpleCommand].
	 * 
	 * <p>
	 * This test creates a new [Notification], adding a 
	 * [SimpleCommandTestVO] as the body. 
	 * It then creates a [SimpleCommandTestCommand] and invokes
	 * its [execute] method, passing in the note.</p>
	 * 
	 * <p>
	 * Success is determined by evaluating a property on the 
	 * object that was passed on the Notification body, which will
	 * be modified by the SimpleCommand</p>.
	 */
	public function testSimpleCommandExecute(): Void
	{
 			
		// Create the VO
		var vo: SimpleCommandTestVO = new SimpleCommandTestVO( 5 );
			
		// Create the Notification (note)
		var note: Notification = new Notification( 'SimpleCommandTestNote', vo );

		// Create the SimpleCommand  			
		var command: SimpleCommandTestCommand = new SimpleCommandTestCommand();
   			
		// Execute the SimpleCommand
		command.execute( note );
   			
		// test assertions
		assertEquals( vo.result, 10 );   			
	}
   		
}
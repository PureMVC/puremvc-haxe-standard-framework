/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.observer;

import org.puremvc.haxe.interfaces.INotification;

class NotificationTest extends haxe.unit.TestCase
{

	/**
 	* Tests setting and getting the name using Notification class accessor methods.
 	*/
	public function testNameAccessors(): Void
	{

		// Create a new Notification and use accessors to set the note name 
		var note: INotification = new Notification( 'TestNote' );
		
		// test assertions
		assertEquals( note.getName(), 'TestNote' );
	}
	

	/**
	 * Tests setting and getting the body using Notification class accessor methods.
	 */
	public function testBodyAccessors(): Void
	{

		// Create a new Notification and use accessors to set the body
		var note: INotification = new Notification( null );
		note.setBody( 5 );
		
		// test assertions
		assertEquals( note.getBody(), 5 );
	}

	/**
	 * Tests setting the name and body using the Notification class Constructor.
	 */
	public function testConstructor(): Void
	{

		// Create a new Notification using the Constructor to set the note name and body
		var note: INotification = new Notification( 'TestNote', 5, 'TestNoteType' );
		
		// test assertions
		assertEquals( note.getName(), 'TestNote' );
		assertEquals( note.getBody(), 5 );
		assertEquals( note.getType(), 'TestNoteType' );
	}

	/**
	 * Tests the toString method of the notification
	 */
	public function testToString(): Void
	{
		// Create a new Notification and use accessors to set the note name 
		var note: INotification = new Notification( 'TestNote', [ 1, 3, 5 ], 'TestType' );
		var ts: String = "Notification Name: TestNote\nBody:[1, 3, 5]\nType:TestType";
		
		// test assertions
		assertEquals( note.toString(), ts );
	}

}
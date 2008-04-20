/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.observer;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.observer.Observer;
import org.puremvc.haxe.patterns.observer.Notification;
 	
/**
 * Tests PureMVC Observer class.
 * 
 * <p>
 * Since the Observer encapsulates the interested object's
 * callback information, there are no getters, only setters. 
 * It is, in effect write-only memory.</p>
 * 
 * <p>
 * Therefore, the only way to test it is to set the 
 * notification method and context and call the notifyObserver
 * method.</p>
 * 
 */
class ObserverTest extends haxe.unit.TestCase
{
  		
	/**
	 * Tests observer class when initialized by accessor methods.
	 * 
	 */
	public function testObserverAccessors(): Void
	{
		// Create observer with null args, then
		// use accessors to set notification method and context
		var observer: Observer = new Observer( null, null );
		observer.setNotifyContext( this );
		observer.setNotifyMethod( observerTestMethod );
  			
		// create a test event, setting a payload value and notify 
		// the observer with it. since the observer is this class 
		// and the notification method is observerTestMethod,
		// successful notification will result in our local 
		// observerTestVar being set to the value we pass in 
		// on the note body.
		var note: Notification = new Notification( 'ObserverTestNote', 10 );
		observer.notifyObserver( note );

		// test assertions			
		assertEquals( observerTestVar, 10 );
	}

	/**
	 * Tests observer class when initialized by constructor.
	 * 
	 */
	public function testObserverConstructor(): Void
	{
  			
		// Create observer passing in notification method and context
		var observer: Observer = new Observer( observerTestMethod, this );
  			
		// create a test note, setting a body value and notify 
		// the observer with it. since the observer is this class 
		// and the notification method is observerTestMethod,
		// successful notification will result in our local 
		// observerTestVar being set to the value we pass in 
		// on the note body.
		var note: Notification = new Notification( 'ObserverTestNote', 5.0 );
		observer.notifyObserver( note );

		// test assertions  			
		assertEquals( observerTestVar, 5.0 );
	}

	/**
	 * Tests the compareNotifyContext method of the Observer class
 	 */
	public function testCompareNotifyContext(): Void
	{		
		// Create observer passing in notification method and context
		var observer:Observer = new Observer( observerTestMethod, this );
  			
		var negTestObj: Dynamic;

		// test assertions  			
		assertFalse( observer.compareNotifyContext( negTestObj ) );
		assertTrue( observer.compareNotifyContext( this ) );
	}

	/**
	 * A test variable that proves the notify method was
	 * executed with 'this' as its execution context
	 */
	private var observerTestVar: Float;

	/**
	 * A function that is used as the observer notification
	 * method. It multiplies the input number by the 
	 * observerTestVar value
	 */
	private function observerTestMethod( note: INotification ): Void
	{
		observerTestVar = note.getBody();
	}
 		
}
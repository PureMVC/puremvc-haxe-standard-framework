/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.core;

import org.puremvc.haxe.core.View;
import org.puremvc.haxe.interfaces.IView;
import org.puremvc.haxe.interfaces.IMediator;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.observer.Observer;
import org.puremvc.haxe.patterns.observer.Notification;
import org.puremvc.haxe.patterns.mediator.Mediator;
 	
/**
 * Test the PureMVC View class.
 */
class ViewTest extends haxe.unit.TestCase
{
  		
	public var lastNotification: String;	
	public var onRegisterCalled: Bool;
	public var onRemoveCalled: Bool;
	
  		
	public static var NOTE1: String = "Notification1";
	public static var NOTE2: String = "Notification2";
	public static var NOTE3: String = "Notification3";
 	
	/**
	 * Tests the View Singleton Factory Method 
	 */
	public function testGetInstance(): Void
	{		
		// Test Factory Method
		var view:IView = View.getInstance();
   			
		// test assertions
		assertTrue( view != null );
		assertTrue( Std.is( view, IView ) );
	}

	/**
	 * Tests registration and notification of Observers.
	 * 
	 * <P>
	 * An Observer is created to callback the viewTestMethod of
	 * this ViewTest instance. This Observer is registered with
	 * the View to be notified of 'ViewTestEvent' events. Such
	 * an event is created, and a value set on its payload. Then
	 * the View is told to notify interested observers of this
	 * Event. 
	 * 
	 * <P>
	 * The View calls the Observer's notifyObserver method
	 * which calls the viewTestMethod on this instance
	 * of the ViewTest class. The viewTestMethod method will set 
	 * an instance variable to the value passed in on the Event
	 * payload. We evaluate the instance variable to be sure
	 * it is the same as that passed out as the payload of the 
	 * original 'ViewTestEvent'.
	 * 
	 */
	public function testRegisterAndNotifyObserver(): Void
	{
  			
		// Get the Singleton View instance
		var view: IView = View.getInstance();
 			
		// Create observer, passing in notification method and context
		var observer: Observer = new Observer( viewTestMethod, this );
   			
		// Register Observer's interest in a particulat Notification with the View 
		view.registerObserver( ViewTestNote.NAME, observer );
  			
		// Create a ViewTestNote, setting 
		// a body value, and tell the View to notify 
		// Observers. Since the Observer is this class 
		// and the notification method is viewTestMethod,
		// successful notification will result in our local 
		// viewTestVar being set to the value we pass in 
		// on the note body.
		var note: INotification = ViewTestNote.create( 10.0 );
		view.notifyObservers( note );

		// test assertions  			
		assertEquals( viewTestVar, 10.0 );
	}
   		
	/**
	 * A test variable that proves the viewTestMethod was
	 * invoked by the View.
	 */
	private var viewTestVar: Float;

	/**
	 * A utility method to test the notification of Observers by the view
	 */
	private function viewTestMethod( note: INotification ): Void
	{
		// set the local viewTestVar to the number on the event payload
		viewTestVar = cast( note.getBody(), Float );
	}

	/**
	 * Tests registering and retrieving a mediator with
	 * the View.
	 */
	public function testRegisterAndRetrieveMediator(): Void
	{		
		// Get the Singleton View instance
		var view: IView = View.getInstance();

		// Create and register the test mediator
		var viewTestMediator: ViewTestMediator<ViewTest> = new ViewTestMediator( this );
		view.registerMediator( viewTestMediator );
			
		// Retrieve the component
		var mediator: IMediator = view.retrieveMediator( ViewTestMediator.NAME );
			
		// test assertions  			
		assertTrue( Std.is( mediator, ViewTestMediator ) );
   			
		cleanup();			
	}

	/**
	 * Tests the hasMediator Method
 	*/
	public function testHasMediator(): Void
	{
		
		// register a Mediator
		var view:IView = View.getInstance();
		
		// Create and register the test mediator
		var mediator: Mediator = new Mediator( 'hasMediatorTest', this );
		view.registerMediator( mediator );
		
		// assert that the view.hasMediator method returns true
		// for that mediator name
		assertTrue( view.hasMediator('hasMediatorTest') );

		view.removeMediator( 'hasMediatorTest' );
		
		// assert that the view.hasMediator method returns false
		// for that mediator name
		assertFalse( view.hasMediator('hasMediatorTest') );
	}

	/**
	 * Tests registering and removing a mediator 
	 */
	public function testRegisterAndRemoveMediator(): Void
	{			
		// Get the Singleton View instance
		var view: IView = View.getInstance();

		// Create and register the test mediator
		var mediator:IMediator = new Mediator( 'testing', this );
		view.registerMediator( mediator );

		// Remove the component
		var removedMediator:IMediator = view.removeMediator( 'testing' );

		// assert that we have removed the appropriate mediator
		assertEquals( removedMediator.getMediatorName(), 'testing');
			
		// assert that the mediator is no longer retrievable
		assertTrue( view.retrieveMediator( 'testing' ) == null );
					
		cleanup();
	}

	/**
	 * Tests that the View callse the onRegister and onRemove methods
	 */
	public function testOnRegisterAndOnRemove(): Void
	{
		onRegisterCalled = false;
		onRemoveCalled = false;

		// Get the Singleton View instance
		var view: IView = View.getInstance();

		// Create and register the test mediator
		var mediator: IMediator = new ViewTestMediator4( this );
		view.registerMediator( mediator );

		// assert that onRegsiter was called, and the mediator responded by setting our boolean
		assertTrue( onRegisterCalled );
	
		// Remove the component
		view.removeMediator( ViewTestMediator4.NAME );
		
		// assert that the mediator is no longer retrievable
		assertTrue( onRemoveCalled );
					
		cleanup();
	}

	/**
	 * Tests successive regster and remove of same mediator.
	 */
	public function testSuccessiveRegisterAndRemoveMediator(): Void
	{
		// Get the Singleton View instance
		var view: IView = View.getInstance();

		// Create and register the test mediator, 
		// but not so we have a reference to it
		view.registerMediator( new ViewTestMediator( this ) );
			
		// test that we can retrieve it
		assertTrue( Std.is( view.retrieveMediator( ViewTestMediator.NAME ), ViewTestMediator ) );

		// Remove the Mediator
		view.removeMediator( ViewTestMediator.NAME );

		// test that retrieving it now returns null			
		assertEquals( view.retrieveMediator( ViewTestMediator.NAME ), null );

		// test that removing the mediator again once its gone doesn't cause crash 		
		assertEquals( view.removeMediator( ViewTestMediator.NAME ), null );

		// Create and register another instance of the test mediator, 
		view.registerMediator( new ViewTestMediator( this ) );
			
		assertTrue( Std.is( view.retrieveMediator( ViewTestMediator.NAME ), ViewTestMediator ) );

		// Remove the Mediator
		view.removeMediator( ViewTestMediator.NAME );
			
		// test that retrieving it now returns null			
		assertEquals( view.retrieveMediator( ViewTestMediator.NAME ), null );

		cleanup();						  			
	}
		
	/**
	 * Tests registering a Mediator for 2 different notifications, removing the
	 * Mediator from the View, and seeing that neither notification causes the
	 * Mediator to be notified. Added for the fix deployed in version 1.7
	 */
	public function testRemoveMediatorAndSubsequentNotify(): Void
	{
			
		// Get the Singleton View instance
		var view: IView = View.getInstance();
			
		// Create and register the test mediator to be removed.
		view.registerMediator( new ViewTestMediator2( this ) );
			
		// test that notifications work
		view.notifyObservers( new Notification( NOTE1 ) );
		assertEquals( lastNotification, NOTE1 );

		view.notifyObservers( new Notification( NOTE2 ) );
		assertEquals( lastNotification, NOTE2 );

		// Remove the Mediator
		view.removeMediator( ViewTestMediator2.NAME );

		// test that retrieving it now returns null			
		assertEquals( view.retrieveMediator( ViewTestMediator2.NAME ), null );

		// test that notifications no longer work
		// (ViewTestMediator2 is the one that sets lastNotification
		// on this component, and ViewTestMediator)
		lastNotification = null;
			
		view.notifyObservers( new Notification( NOTE1 ) );
		assertTrue( lastNotification != NOTE1 );

		view.notifyObservers( new Notification( NOTE2 ) );
		assertTrue( lastNotification != NOTE2 );

		cleanup();
	}
		
	/**
	 * Tests registering one of two registered Mediators and seeing
	 * that the remaining one still responds.
	 * Added for the fix deployed in version 1.7.1
	 */
	public function testRemoveOneOfTwoMediatorsAndSubsequentNotify(): Void
	{
			
		// Get the Singleton View instance
		var view: IView = View.getInstance();
			
		// Create and register that responds to notifications 1 and 2
		view.registerMediator( new ViewTestMediator2( this ) );
			
		// Create and register that responds to notification 3
		view.registerMediator( new ViewTestMediator3( this ) );
			
		// test that all notifications work
		view.notifyObservers( new Notification( NOTE1 ) );
		assertEquals( lastNotification, NOTE1 );

		view.notifyObservers( new Notification( NOTE2 ) );
		assertEquals( lastNotification, NOTE2);

		view.notifyObservers( new Notification( NOTE3 ) );
		assertEquals( lastNotification, NOTE3 );
		   			
		// Remove the Mediator that responds to 1 and 2
		view.removeMediator( ViewTestMediator2.NAME );

		// test that retrieving it now returns null			
		assertEquals( view.retrieveMediator( ViewTestMediator2.NAME ), null );

		// test that notifications no longer work
		// for notifications 1 and 2, but still work for 3
		lastNotification = null;
			
		view.notifyObservers( new Notification( NOTE1 ) );
		assertTrue( lastNotification != NOTE1 );

		view.notifyObservers( new Notification( NOTE2 ) );
		assertTrue( lastNotification != NOTE2 );

		view.notifyObservers( new Notification( NOTE3 ) );
		assertTrue( lastNotification == NOTE3 );

		cleanup();						  			
	}
		
	private function cleanup(): Void
	{
		 View.getInstance().removeMediator( ViewTestMediator.NAME );
		 View.getInstance().removeMediator( ViewTestMediator2.NAME );
		 View.getInstance().removeMediator( ViewTestMediator3.NAME );
	}
}
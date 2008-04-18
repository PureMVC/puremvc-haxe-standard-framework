/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.core;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
	
/**
 * A Mediator class used by ViewTest.
 */
class ViewTestMediator2<T> extends Mediator
{
/**
 * The Mediator name
 */
public static var NAME: String = 'ViewTestMediator2';
				
	/**
	 * Constructor
	 */
	public function new( view: T )
	{
		super( view );
	}

	override public function listNotificationInterests(): Array<String>
	{
		// be sure that the mediator has some Observers created
		// in order to test removeMediator
		return [ ViewTest.NOTE1,  ViewTest.NOTE2 ];
	}

	override public function handleNotification( notification: INotification ): Void
	{
		cast( getViewTest(), ViewTest ).lastNotification = notification.getName();
	}
		
	/**
	 * Get the Mediator name
	 */
	override public function getMediatorName(): String
	{
		return ViewTestMediator2.NAME;
	}
		
	public function getViewTest(): T
	{
		return viewComponent;
	}
				
}
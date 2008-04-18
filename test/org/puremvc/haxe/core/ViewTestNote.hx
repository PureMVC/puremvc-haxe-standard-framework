/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.core;

import org.puremvc.haxe.patterns.observer.Notification;
import org.puremvc.haxe.interfaces.INotification;

/**
 * A Notification class used by ViewTest.
 */
class ViewTestNote extends Notification
{
	/**
	 * The name of this Notification.
	 */
	public static var NAME: String = "ViewTestNote";
		
	/**
	 * Constructor.
	 */
	public function new( name: String, body: Dynamic )
	{						
		super ( NAME, body );
	}
		
	/**
	 * Factory method.
	 * 
	 * <p> 
	 * This method creates new instances of the ViewTestNote class,
	 * automatically setting the note name so you don't have to. Use
	 * this as an alternative to the constructor.</p>
	 */
	public static function create( body: Dynamic ): INotification		
	{
		return new ViewTestNote ( NAME, body );
	}
}
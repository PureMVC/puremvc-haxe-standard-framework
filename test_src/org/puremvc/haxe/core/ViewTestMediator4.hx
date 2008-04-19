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
class ViewTestMediator4<T> extends Mediator
{
	/**
	 * The Mediator name
	 */
	public static var NAME:String = 'ViewTestMediator4';
				
	/**
	 * Constructor
	 */
	public function new( view: T )
	{
		super( NAME, view );
	}

	public function getViewTest(): T
	{
		return viewComponent;
	}
				
	override public function onRegister(): Void
	{
		cast( getViewTest() ).onRegisterCalled = true;
	}
			
	override public function onRemove(): Void
	{
		cast( getViewTest() ).onRemoveCalled = true;
	}				
			
}
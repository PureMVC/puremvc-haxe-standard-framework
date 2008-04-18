/* 
 PureMVC haXe Demo - Multiplatform Communications
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.multiplatformComm.view;

import org.puremvc.haxe.patterns.mediator.Mediator;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.examples.multiplatformComm.view.ui.BoxContainer;
import org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade;

class BoxMediator extends Mediator
{

	private var _name: String;

	public static inline var FL9_BOX_MEDIATOR: String	= "fl9_box_mediator";
	public static inline var JS_BOX_MEDIATOR: String	= "js_box_mediator";
	public static inline var FL8_BOX_MEDIATOR: String	= "fl8_box_mediator";
	
	public function new( name: String, viewComponent: BoxContainer )
	{
		super( name, viewComponent );		
		_name = name;
	}

	override public function handleNotification( notification: INotification ): Void
	{
		switch( notification.getName() )
		{
			case MultiplatformFacade.VALUE_SET:
				viewComponent.update( notification.getBody() );
		}	
	}
	
	override public function listNotificationInterests(): Array<String>
	{
		return [
			MultiplatformFacade.VALUE_SET
		];
	}
	
	public function updateView( val: Int ): Void
	{
		viewComponent.update( val );
	}
	
	override public function getMediatorName(): String
	{
		return _name;	
	}
}
/* 
 PureMVC haXe Demo - Multiplatform Communications
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.multiplatformComm.view;

import org.puremvc.haxe.patterns.mediator.Mediator;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade;

import js.Dom;

class InputMediator extends Mediator
{
	public static inline var NAME: String = "InputMediator";

	public function new()
	{
		super();
		js.Lib.document.getElementById( "send_link" ).onclick = onLinkClick;
	}
	
	private function onLinkClick( evt: js.Event ): Void
	{
		var val = Std.parseInt( cast( js.Lib.document.getElementById( "distance" ) ).value );
		if ( val == null || val < 0 || val > 500 )
			js.Lib.alert( "value should be a number between 0 and 500." );
		else
			facade.sendNotification( MultiplatformFacade.VALUE_SET, val );
	}
	
	override public function getMediatorName(): String
	{
		return NAME;	
	}
}
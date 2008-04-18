/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.view;

import org.puremvc.haxe.examples.simpleAdmin.ui.IMenu;
import org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade;
#if js
import org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu;
import js.Dom;
#else flash9
import org.puremvc.haxe.examples.simpleAdmin.ui.Fl9Menu;
import flash.events.MouseEvent;
#else error
#end

import org.puremvc.haxe.patterns.mediator.Mediator;
import org.puremvc.haxe.interfaces.INotification;

class MenuMediator extends Mediator
{

	public static inline var NAME: String = "MenuMediator";

	public function new( viewComponent: IMenu )
	{
		super( viewComponent );
		
		#if js
		js.Lib.document.getElementById( "remove_e" ).onclick = onRemoveEmployee;
		js.Lib.document.getElementById( "new_e" ).onclick = onNewEmployee;
		js.Lib.document.getElementById( "save_e" ).onclick = onSaveEmployee;
		#else flash9
		cast(viewComponent).new_e.addEventListener( MouseEvent.CLICK, onNewEmployee );
		cast(viewComponent).remove_e.addEventListener( MouseEvent.CLICK, onRemoveEmployee );
		cast(viewComponent).save_e.addEventListener( MouseEvent.CLICK, onSaveEmployee );
		#else error
		#end
	}
	
	private function onNewEmployee( evt ): Void
	{
		facade.sendNotification( SimpleAdminFacade.NEW_EMPLOYEE );
	}

	private function onSaveEmployee( evt ): Void
	{
		facade.sendNotification( SimpleAdminFacade.SAVE_EMPLOYEE );
	}

	private function onRemoveEmployee( evt ): Void
	{
		facade.sendNotification( SimpleAdminFacade.REMOVE_EMPLOYEE );
	}

	override public function handleNotification( notification: INotification ): Void
	{
		switch( notification.getName() )
		{
		}	
	}
	
	override public function listNotificationInterests(): Array<String>
	{
		return [
		];
	}
	
	override public function getMediatorName(): String
	{
		return NAME;	
	}
	
	private function getMenu(): IMenu
	{
		return viewComponent;
	}		

}
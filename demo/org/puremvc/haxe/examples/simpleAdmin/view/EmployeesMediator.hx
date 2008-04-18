/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.view;

import org.puremvc.haxe.examples.simpleAdmin.ui.IEmployees;
import org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade;
import org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy;

import org.puremvc.haxe.patterns.mediator.Mediator;
import org.puremvc.haxe.interfaces.INotification;

#if flash9
import flash.events.MouseEvent;
#end

class EmployeesMediator extends Mediator
{
	private var employeesProxy: EmployeesProxy;
	
	public static inline var NAME: String = "EmployeesMediator";

	public function new( viewComponent: IEmployees )
	{
		super( viewComponent );
		
		#if js
		js.Lib.document.getElementById( "employees" ).onclick = onEmployeeClick;
		#else flash9
		cast( viewComponent ).getContainer().addEventListener( MouseEvent.CLICK, onEmployeeClick );
		#else error
		#end
		
		employeesProxy = cast( facade.retrieveProxy( EmployeesProxy.NAME ), EmployeesProxy );
	}
	
	private function onEmployeeClick( evt ): Void
	{
		var id;
		#if js
		id = evt.target.getAttribute( "href" ).split( "#" )[ 1 ];
		#else flash9
		id = evt.target.id;
		#else error
		#end
		sendNotification( SimpleAdminFacade.EMPLOYEE_SELECTED, id );
	}

	override public function handleNotification( notification: INotification ): Void
	{
		switch( notification.getName() )
		{
			case SimpleAdminFacade.UPDATE_LIST:
				updateList();
		}
	}
	
	override public function listNotificationInterests(): Array<String>
	{
		return [
			SimpleAdminFacade.UPDATE_LIST
		];
	}
	
	override public function getMediatorName(): String
	{
		return NAME;	
	}
	
	private function getEmployees(): IEmployees
	{
		return viewComponent;
	}
	
	public function updateList(): Void
	{
		getEmployees().updateList( employeesProxy.getEmployees() );
	}

}
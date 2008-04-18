/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.view;

import org.puremvc.haxe.examples.simpleAdmin.ui.IDetails;
import org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO;
import org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade;
import org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy;

import org.puremvc.haxe.patterns.mediator.Mediator;
import org.puremvc.haxe.interfaces.INotification;

class DetailsMediator extends Mediator
{
	private var employeesProxy: EmployeesProxy;

	public static inline var NAME: String = "DetailsMediator";

	public function new( viewComponent: IDetails )
	{
		super( viewComponent );
		
		employeesProxy = cast( facade.retrieveProxy( EmployeesProxy.NAME ), EmployeesProxy );
	}

	override public function handleNotification( notification: INotification ): Void
	{
		switch( notification.getName() )
		{
			case SimpleAdminFacade.EMPLOYEE_SELECTED:
				viewComponent.setDetails( employeesProxy.getEmployee( notification.getBody() ) );
			case SimpleAdminFacade.CLEANUP_DETAILS:
				viewComponent.newEmployee( employeesProxy.newEmployeeId() );
		}	
	}
	
	override public function listNotificationInterests(): Array<String>
	{
		return [
			SimpleAdminFacade.EMPLOYEE_SELECTED,
			SimpleAdminFacade.CLEANUP_DETAILS
		];
	}
	
	override public function getMediatorName(): String
	{
		return NAME;	
	}
	
	private function getMenu(): IDetails
	{
		return viewComponent;
	}
	
	public function newEmployee( id: Int ): Void
	{
		viewComponent.newEmployee( id );
	}
	
	public function getEmployeeDetails(): EmployeeVO
	{
		return viewComponent.getDetails();
	}	

}
/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.controller;

import org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade;
import org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy;
import org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator;
import org.puremvc.haxe.examples.simpleAdmin.ui.IDetails;

import org.puremvc.haxe.patterns.command.SimpleCommand;
import org.puremvc.haxe.interfaces.INotification;

class SaveEmployee extends SimpleCommand
{

	override public function execute( note: INotification ): Void
	{
		var proxy = cast( facade.retrieveProxy( EmployeesProxy.NAME ), EmployeesProxy );
		var mediator = cast( facade.retrieveMediator( DetailsMediator.NAME ), DetailsMediator );
		proxy.saveEmployee( mediator.getEmployeeDetails() );
		
		sendNotification( SimpleAdminFacade.UPDATE_LIST );
	}
}
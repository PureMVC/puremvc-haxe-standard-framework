/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.controller;

import org.puremvc.haxe.examples.simpleAdmin.view.MenuMediator;
import org.puremvc.haxe.examples.simpleAdmin.view.EmployeesMediator;
import org.puremvc.haxe.examples.simpleAdmin.view.DetailsMediator;
import org.puremvc.haxe.examples.simpleAdmin.model.EmployeesProxy;

import org.puremvc.haxe.patterns.command.SimpleCommand;
import org.puremvc.haxe.interfaces.INotification;
#if js
import org.puremvc.haxe.examples.simpleAdmin.ui.JsMenu;
import org.puremvc.haxe.examples.simpleAdmin.ui.JsEmployees;
import org.puremvc.haxe.examples.simpleAdmin.ui.JsDetails;
#else flash9
import org.puremvc.haxe.examples.simpleAdmin.ui.Fl9Menu;
import org.puremvc.haxe.examples.simpleAdmin.ui.Fl9Employees;
import org.puremvc.haxe.examples.simpleAdmin.ui.Fl9Details;
import flash.display.Sprite;
#end

class StartupCommand extends SimpleCommand
{

	/**
	 * Registers proxies and creates application views (and their mediators).
	 */
	override public function execute( note: INotification ): Void
	{

		facade.registerProxy( new EmployeesProxy() );
		
		var menu;
		var menu_container;
		#if js
		menu_container = js.Lib.document.getElementById( "menu" );
		menu = new JsMenu( menu_container );
		#else flash9
		menu_container = new Sprite();
		flash.Lib.current.addChild( menu_container );
		menu = new Fl9Menu( menu_container );
		#else error
		#end
		facade.registerMediator( new MenuMediator( menu ) );

		var employees;
		var employees_container;
		#if js
		employees_container = js.Lib.document.getElementById( "employees" );
		employees = new JsEmployees( employees_container );
		#else flash9
		employees_container = new Sprite();
		employees_container.y = menu_container.height + 5;
		employees_container.x = 200;
		flash.Lib.current.addChild( employees_container );
		employees = new Fl9Employees( employees_container );
		#else error
		#end
		facade.registerMediator( new EmployeesMediator( employees ) );

		var details;
		var details_container;
		#if js
		details_container = js.Lib.document.getElementById( "details" );
		details = new JsDetails( details_container );
		#else flash9
		details_container = new Sprite();
		details_container.y = menu_container.height + 5;
		flash.Lib.current.addChild( details_container );
		details = new Fl9Details( details_container );
		#else error
		#end
		facade.registerMediator( new DetailsMediator( details ) );
	}
}
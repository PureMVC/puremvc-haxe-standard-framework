/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin;

import org.puremvc.haxe.patterns.facade.Facade;

import org.puremvc.haxe.examples.simpleAdmin.controller.StartupCommand;
import org.puremvc.haxe.examples.simpleAdmin.controller.NewEmployee;
import org.puremvc.haxe.examples.simpleAdmin.controller.RemoveEmployee;
import org.puremvc.haxe.examples.simpleAdmin.controller.SaveEmployee;

class SimpleAdminFacade extends Facade
{

	private static var instance: SimpleAdminFacade;

	// Notification name constants
	public static inline var STARTUP : String				= "startup";
	public static inline var NEW_EMPLOYEE : String			= "new_employee";
	public static inline var REMOVE_EMPLOYEE : String		= "remove_employee";
	public static inline var SAVE_EMPLOYEE : String			= "save_employee";
	public static inline var UPDATE_LIST : String			= "update_list";
	public static inline var EMPLOYEE_SELECTED : String		= "employee_selected";
	public static inline var CLEANUP_DETAILS : String		= "cleanup_details";

	/**
	 * Singleton SimpleAdminFacade Factory Method
	 */
	public static function getInstance(): SimpleAdminFacade
	{
		if( instance == null )
			instance = new SimpleAdminFacade();
		return instance;
	}

	/**
	 * Register Commands with the Controller
	 */
	override private function initializeController(): Void
	{
		super.initializeController();

		registerCommand( STARTUP, StartupCommand );
		registerCommand( NEW_EMPLOYEE, NewEmployee );
		registerCommand( REMOVE_EMPLOYEE, RemoveEmployee );
		registerCommand( SAVE_EMPLOYEE, SaveEmployee );
	}
	
}
/* 
 PureMVC haXe Demo - Multiplatform Communications
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.multiplatformComm;

import org.puremvc.haxe.patterns.facade.Facade;

import org.puremvc.haxe.examples.multiplatformComm.controller.StartupCommand;

class MultiplatformFacade extends Facade
{
	
	private static var instance: MultiplatformFacade;

	// Notification name constants
	public static inline var STARTUP : String				= "startup";
	public static inline var VALUE_SET : String				= "value_set";

	/**
	 * Singleton MultiplatformFacade Factory Method
	 */
	public static function getInstance(): MultiplatformFacade
	{
		if( instance == null )
			instance = new MultiplatformFacade();
		return instance;
	}

	/**
	 * Register Commands with the Controller
	 */
	override private function initializeController(): Void
	{
		super.initializeController();

		registerCommand( STARTUP, StartupCommand );
	}

}
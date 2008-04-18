/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.facade;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.command.SimpleCommand;

/**
 * A SimpleCommand subclass used by FacadeTest.
 */
class FacadeTestCommand extends SimpleCommand
{
	/**
	 * Fabricate a result by multiplying the input by 2
	 */
	override public function execute( note: INotification ): Void
	{
		var vo: FacadeTestVO = cast( note.getBody(), FacadeTestVO );
			
		// Fabricate a result
		vo.result = 2 * vo.input;
	}
		
}
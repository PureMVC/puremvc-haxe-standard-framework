/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */

package org.puremvc.haxe.core;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.command.SimpleCommand;

/**
 * A SimpleCommand subclass used by ControllerTest.
 */
class ControllerTestCommand2 extends SimpleCommand
{
	/**
	 * Fabricate a result by multiplying the input by 2 and adding to the existing result
	 *
	 * <p>This tests accumulation effect that would show if the command were executed more than once.<p/>
	 */
	override public function execute( note: INotification ): Void
	{
		var vo: ControllerTestVO = note.getBody();
			
		// Fabricate a result
		vo.result = vo.result + ( 2 * vo.input );
	}
		
}
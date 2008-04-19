/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.command;

import org.puremvc.haxe.interfaces.INotification;

/**
 * A SimpleCommand subclass used by MacroCommandTestCommand.
 */
class MacroCommandTestSub1Command extends SimpleCommand
{
	/**
	 * Constructor.
	 */
	public function new()
	{
		super();
	}
		
	/**
	 * Fabricate a result by multiplying the input by 2
	 */
	override public function execute( note: INotification ): Void
	{
		var vo: MacroCommandTestVO = cast( note.getBody(), MacroCommandTestVO );
			
		// Fabricate a result
		vo.result1 = 2 * vo.input;
	}
		
}
/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.command;

/**
 * A utility class used by SimpleCommandTest.
 */
class SimpleCommandTestVO
{
	/**
	 * Constructor.
	 */
	public function new( input: Int )
	{
		this.input = input;
	}

	public var input: Int;
	public var result: Int;
}
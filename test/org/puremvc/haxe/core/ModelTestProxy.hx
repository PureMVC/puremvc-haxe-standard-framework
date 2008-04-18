/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.core;

import org.puremvc.haxe.patterns.proxy.Proxy;

class ModelTestProxy extends Proxy
{
	public static var NAME: String = 'ModelTestProxy';
	public static var ON_REGISTER_CALLED: String = 'onRegister Called';
	public static var ON_REMOVE_CALLED: String = 'onRemove Called';

	public function new()
	{
		super( NAME );
	}

	override public function onRegister(): Void
	{
		setData( ON_REGISTER_CALLED );
	}		

	override public function onRemove(): Void
	{
		setData( ON_REMOVE_CALLED );
	}		
}
/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.ui;

import js.Dom;

class JsMenu implements IMenu
{
	private var _container: HtmlDom;
	
	public function new( container: HtmlDom )
	{
		_container = container;
	}
	
}
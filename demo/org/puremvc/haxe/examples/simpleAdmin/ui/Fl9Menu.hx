/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.ui;

import flash.display.Sprite;
import flash.text.TextField;
import flash.text.TextFormat;
import flash.text.TextFieldAutoSize;

class Fl9Menu implements IMenu
{
	private var _container: Sprite;
	
	public var new_e: TextField;
	public var remove_e: TextField;
	public var save_e: TextField;
	
	public function new( container: Sprite )
	{
		_container = container;
		
		initGraphics();
	}
	
	private function initGraphics(): Void
	{
		
		new_e = new MenuButton( "new" );
		_container.addChild( new_e );
		
		remove_e = new MenuButton( "remove" );
		remove_e.x = new_e.x + new_e.width + 10;
		_container.addChild( remove_e );

		save_e = new MenuButton( "save" );
		save_e.x = remove_e.x + remove_e.width + 10;
		_container.addChild( save_e );
	}
}

class MenuButton extends TextField
{
	public function new( label: String )
	{
		super();

		var tf: TextFormat = new TextFormat();
		tf.color = 0x999999;
		tf.font = "Arial";
		tf.size = 16;
		text = label;
		selectable = false;
		autoSize = TextFieldAutoSize.LEFT;
		setTextFormat( tf );		
	}
}
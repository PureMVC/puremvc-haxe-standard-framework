/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.ui;

import org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO;

import flash.text.TextField;
import flash.text.TextFormat;
import flash.text.TextFieldAutoSize;
import flash.display.Sprite;

class Fl9Employees implements IEmployees
{
	private var _container: Sprite;
	
	public function new( container: Sprite )
	{
		_container = container;
	}
	
	public	function updateList( map: IntHash<EmployeeVO> ): Void
	{
		while( _container.numChildren > 0 )
		{
			_container.removeChildAt( 0 );
		}
		for( i in map.iterator() )
		{
			var b = new ListButton( i.name + " " + i.lastname, i.id );
			b.y = _container.height;
			_container.addChild( b );
		}
	}
	
	public function getContainer(): Sprite
	{
		return _container;
	}
	
}

class ListButton extends TextField
{
	public var id( default, null ): Int;

	public function new( label: String, id: Int )
	{
		super();

		this.id = id;

		var tf: TextFormat = new TextFormat();
		tf.color = 0x666666;
		tf.font = "Arial";
		tf.size = 16;
		text = label;
		selectable = false;
		autoSize = TextFieldAutoSize.LEFT;
		setTextFormat( tf );		
	}
}
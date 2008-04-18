/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.ui;

import org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO;

import flash.display.Sprite;
import flash.text.TextField;
import flash.text.TextFieldType;
import flash.text.TextFormat;
import flash.text.TextFieldAutoSize;

class Fl9Details implements IDetails
{
	private var _container: Sprite;
	private var det_id: DetailsInput;
	private var name: DetailsInput;
	private var lastname: DetailsInput;
	private var role: DetailsInput;
	
	public function new( container: Sprite )
	{
		_container = container;
		
		initGraphics();

		newEmployee( 1 );
	}
	
	private function initGraphics(): Void
	{
		det_id = new DetailsInput( "id:", TextFieldType.DYNAMIC );
		_container.addChild( det_id );
		name = new DetailsInput( "name:", TextFieldType.INPUT );
		name.y = det_id.height + det_id.y + 5;
		_container.addChild( name );
		lastname = new DetailsInput( "lastname:", TextFieldType.INPUT );
		lastname.y = name.height + name.y + 5;
		_container.addChild( lastname );
		role = new DetailsInput( "role:", TextFieldType.INPUT );
		role.y = lastname.height + lastname.y + 5;
		_container.addChild( role );
	}

	public function newEmployee( id: Int ): Void
	{
		det_id.value.text = Std.string( id );
		name.value.text = "";
		lastname.value.text = "";
		role.value.text = "";
	}

	public function getDetails(): EmployeeVO
	{
		var vo = new EmployeeVO( Std.parseInt( det_id.value.text ) );
		vo.name = name.value.text;
		vo.lastname = lastname.value.text;
		vo.role = role.value.text;
		return vo;
	}
	
	public function setDetails( vo: EmployeeVO ): Void
	{
		det_id.value.text = Std.string( vo.id );
		if ( vo.name != null )
			name.value.text = vo.name;
		if ( vo.lastname != null )
			lastname.value.text = vo.lastname;
		if ( vo.role != null )
			role.value.text = vo.role;
	}

}

class DetailsInput extends Sprite
{
	public var value( default, default ): TextField;

	public function new( label: String, type: String )
	{
		super();

		var tf: TextFormat = new TextFormat();
		tf.font = "Arial";
		tf.size = 14;
		
		var t: TextField = new TextField();
		t.text = label;
		t.selectable = false;
		t.autoSize = TextFieldAutoSize.LEFT;
		t.setTextFormat( tf );
		addChild( t );
		
		value = new TextField();
		if( type == TextFieldType.INPUT )
		{
			value.border = true;
			value.borderColor = 0x999999;
		}
		value.y = t.height + 3;
		value.height = 16;
		value.width = 150;
		value.type = type;
		addChild( value );					
	}
}
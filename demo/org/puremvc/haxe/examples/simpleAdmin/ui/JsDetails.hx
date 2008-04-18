/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.ui;

import org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO;

import js.Dom;

class JsDetails implements IDetails
{

	private var _container: HtmlDom;
	
	public function new( container: HtmlDom )
	{
		_container = container;
		
		newEmployee( 1 );
	}
	
	public function newEmployee( id: Int ): Void
	{
		var em_id = js.Lib.document.getElementById( "em_id" );
		em_id.innerHTML = Std.string( id );		
		cast( js.Lib.document.getElementById( "em_name" ) ).value = "";
		cast( js.Lib.document.getElementById( "em_lastname" ) ).value = "";
		cast( js.Lib.document.getElementById( "em_role" ) ).value = "";
	}
	
	public function getDetails(): EmployeeVO
	{
		var vo = new EmployeeVO( Std.parseInt( js.Lib.document.getElementById( "em_id" ).innerHTML ) );
		vo.name = cast( js.Lib.document.getElementById( "em_name" ) ).value;
		vo.lastname = cast( js.Lib.document.getElementById( "em_lastname" ) ).value;
		vo.role = cast( js.Lib.document.getElementById( "em_role" ) ).value;
		return vo;
	}

	public function setDetails( vo: EmployeeVO ): Void
	{
		js.Lib.document.getElementById( "em_id" ).innerHTML = Std.string( vo.id );
		if ( vo.name != null )
			cast( js.Lib.document.getElementById( "em_name" ) ).value = vo.name;
		if ( vo.lastname != null )
			cast( js.Lib.document.getElementById( "em_lastname" ) ).value = vo.lastname;
		if ( vo.role != null )
			cast( js.Lib.document.getElementById( "em_role" ) ).value = vo.role;
	}

}
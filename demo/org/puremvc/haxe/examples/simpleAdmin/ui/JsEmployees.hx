/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.ui;

import org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO;

import js.Dom;

class JsEmployees implements IEmployees
{

	public var _container: HtmlDom;
	
	public function new( container: HtmlDom )
	{
		_container = container;
	}

	public	function updateList( map: IntHash<EmployeeVO> ): Void
	{
		_container.innerHTML = "";
		for( i in map.iterator() )
		{
			var a = js.Lib.document.createElement( "A" );
			a.setAttribute( "href", "#" + i.id );
			a.innerHTML = i.name + " " + i.lastname;
			_container.appendChild( a );
		}
	}
	
	public function getContainer(): HtmlDom
	{
		return _container;
	}

}
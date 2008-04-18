/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.model.vo;

class EmployeeVO
{
	public var id( getId, null ): Int;
	public var name( default, default ): String;
	public var lastname( default, default ): String;
	public var role( default, default ): String;
	
	private var _id: Int;
	
	public function new( id: Int )
	{
		_id = id;
	}
	
	private function getId()
	{
		return _id;
	}

}
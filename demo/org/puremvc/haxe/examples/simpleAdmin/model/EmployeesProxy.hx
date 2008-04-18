/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.simpleAdmin.model;

import org.puremvc.haxe.examples.simpleAdmin.model.vo.EmployeeVO;
import org.puremvc.haxe.patterns.proxy.Proxy;

class EmployeesProxy extends Proxy
{

	/**
	 * Proxy name
	 */
	public static inline var NAME: String = "EmployeesProxy";
	
	/**
	 * Constructor.
	 * 
	 * <p>Initilizes the proxy</p>. 
	 * 
	 */
	public function new()
	{
		super( NAME, new IntHash<EmployeeVO>() );
	}

	/**
	 * Getter method for proxy data.
	 */
	public function getEmployees(): IntHash<EmployeeVO>
	{
		return data;
	}
	
	public function newEmployeeId(): Int
	{
		var id = getNewID();
		return id;
	}
	
	public function getEmployee( id: Int ): EmployeeVO
	{
		return getEmployees().get( id );
	}
	
	public function removeEmployee( id: Int ): Void
	{
		getEmployees().remove( id );
	}
	
	public function saveEmployee( vo: EmployeeVO ): Void
	{
		data.set( vo.id, vo );
	}
	
	private function getNewID(): Int
	{
		var id: Int = 1;
		for ( i in getEmployees().keys() )
		{
			if ( i >= id )
			{
				id = i;
				id++;
			}
		}
		return id;
	}
}
/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.proxy;

import org.puremvc.haxe.interfaces.IProxy;
import org.puremvc.haxe.patterns.proxy.Proxy;

/**
 * Test the PureMVC Proxy class.
 */
class ProxyTest extends haxe.unit.TestCase
{  		
	/**
	 * Tests getting the name using Proxy class accessor method. Setting can only be done in constructor.
	 */
	public function testNameAccessor(): Void
	{
		// Create a new Proxy and use accessors to set the proxy name 
		var proxy: Proxy = new Proxy( 'TestProxy' );

		// test assertions
		assertEquals( proxy.getProxyName(), 'TestProxy' );
	}

	/**
	 * Tests setting and getting the data using Proxy class accessor methods.
	 */
	public function testDataAccessors(): Void
	{
		// Create a new Proxy and use accessors to set the data
		var proxy: Proxy = new Proxy( 'colors' );
		proxy.setData( ['red', 'green', 'blue'] );
		var data: Array<String> = proxy.getData();
   			
		// test assertions
		assertEquals( data.length, 3 );
		assertEquals( data[0], 'red' );
		assertEquals( data[1], 'green' );
		assertEquals( data[2], 'blue' );
	}

	/**
 	 * Tests setting the name and body using the Notification class Constructor.
 	 */
	public function testConstructor(): Void
	{
		// Create a new Proxy using the Constructor to set the name and data
		var proxy: Proxy = new Proxy( 'colors', ['red', 'green', 'blue'] );
		var data: Array<String> = proxy.getData();
   			
		// test assertions
		assertTrue( proxy != null );
		assertEquals( proxy.getProxyName(), 'colors' );
		assertEquals( data.length, 3 );
		assertEquals( data[0], 'red' );
		assertEquals( data[1], 'green' );
		assertEquals( data[2], 'blue' );
	}

}
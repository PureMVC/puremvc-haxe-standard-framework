/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.core;

import org.puremvc.haxe.core.model.Model;
import org.puremvc.haxe.interfaces.IProxy;
import org.puremvc.haxe.interfaces.IModel;
import org.puremvc.haxe.patterns.proxy.Proxy;
  	
/**
 * Test the PureMVC Model class.
 */
class ModelTest extends haxe.unit.TestCase
{
  		
	/**
	 * Tests the Model Singleton Factory Method 
	 */
	public function testGetInstance(): Void
	{
		// Test Factory Method
		var model: IModel = Model.getInstance();

		// test assertions
		assertTrue( model != null );
		assertTrue( Std.is( model, IModel ) );
	}

	/**
	 * Tests the proxy registration and retrieval methods.
	 * 
	 * <p>
	 * Tests <code>registerProxy</code> and <code>retrieveProxy</code> in the same test.
	 * These methods cannot currently be tested separately
	 * in any meaningful way other than to show that the
	 * methods do not throw exception when called. </p>
	 */
	public function testRegisterAndRetrieveProxy(): Void
	{	
		// register a proxy and retrieve it.
		var model: IModel = Model.getInstance();
		model.registerProxy( new Proxy( 'colors', [ 'red', 'green', 'blue' ] ) );
		var proxy: IProxy = model.retrieveProxy('colors');
		var data: Array<String> = cast( proxy, Proxy ).getData();
			
		// test assertions
		assertTrue( data != null );
		assertTrue( Std.is( data, Array ) );
		assertEquals( data.length, 3 );
		assertEquals( data[0], 'red' );
		assertEquals( data[1], 'green' );
		assertEquals( data[2], 'blue' );
	}
  		
	/**
	 * Tests the proxy removal method.
	 */
	public function testRegisterAndRemoveProxy(): Void
	{		
		// register a proxy, remove it, then try to retrieve it
		var model: IModel = Model.getInstance();
		var proxy: IProxy = new Proxy( 'sizes', ['7', '13', '21'] );
		model.registerProxy( proxy );

		// remove the proxy
		var removedProxy: IProxy = model.removeProxy( 'sizes' );

		// assert that we removed the appropriate proxy
		assertEquals( removedProxy.getProxyName(), 'sizes' );

		proxy = model.retrieveProxy( 'sizes' );

		// test assertions
		assertTrue( proxy == null );
	}

	/**
	 * Tests the hasProxy Method
	 */
	public function testHasProxy(): Void
	{	
		// register a proxy
		var model: IModel = Model.getInstance();
		var proxy: IProxy = new Proxy( 'aces', ['clubs', 'spades', 'hearts', 'diamonds'] );
		model.registerProxy( proxy );
		
		// assert that the model.hasProxy method returns true
		// for that proxy name
		assertTrue( model.hasProxy( 'aces' ) );
		
		// remove the proxy
		model.removeProxy('aces');
		
		// assert that the model.hasProxy method returns false
		// for that proxy name
		assertFalse( model.hasProxy('aces') );
	}
	
	/**
	 * Tests that the Model calls the onRegister and onRemove methods
	 */
	public function testOnRegisterAndOnRemove(): Void
	{
		// Get the Singleton View instance
		var model: IModel = Model.getInstance();

		// Create and register the test mediator
		var proxy: ModelTestProxy = new ModelTestProxy();
		model.registerProxy( proxy );

		// assert that onRegister was called, and the proxy responded by setting its data accordingly
		assertEquals( proxy.getData(), ModelTestProxy.ON_REGISTER_CALLED );
		
		// Remove the component
		model.removeProxy( ModelTestProxy.NAME );
		
		// assert that onRemove was called, and the proxy responded by setting its data accordingly
		assertEquals( proxy.getData(), ModelTestProxy.ON_REMOVE_CALLED );	
	}

}
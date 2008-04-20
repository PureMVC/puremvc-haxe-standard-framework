/* 
 PureMVC haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.patterns.mediator;

/**
 * Test the PureMVC Mediator class.
 */
class MediatorTest extends haxe.unit.TestCase
{ 
	/**
	 * Tests getting the name using Mediator class accessor method. 
	 */
	public function testNameAccessor(): Void
	{
		// Create a new Mediator and use accessors to set the mediator name 
		var mediator: Mediator = new Mediator();
   			
		// test assertions
		assertEquals( mediator.getMediatorName(), 'Mediator' );
	}

	/**
	 * Tests getting the name using Mediator class accessor method. 
	 */
	public function testViewAccessor(): Void
	{
		// Create a view object
		var view:String = new String( "test string" );
			
		// Create a new Proxy and use accessors to set the proxy name 
		var mediator:Mediator = new Mediator( Mediator.NAME, view );
			   			
		// test assertions
		assertTrue( mediator.getViewComponent() != null );
	}
}
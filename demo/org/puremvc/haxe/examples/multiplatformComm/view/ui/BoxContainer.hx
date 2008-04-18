/* 
 PureMVC haXe Demo - Multiplatform Communications
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.multiplatformComm.view.ui;

class BoxContainer
{
	private var _type: String;
	private var _conn: haxe.remoting.Connection;
	
	public static inline var JS_TYPE: String	= "js_type";
	public static inline var FL9_TYPE: String	= "fl9_type";
	public static inline var FL8_TYPE: String	= "fl8_type";

	public function new( t: String )
	{
		_type = t;

		if ( _type == FL9_TYPE )
			_conn = haxe.remoting.Connection.flashConnect( "haxe_fl9" );
		else if ( _type == FL8_TYPE )
			_conn = haxe.remoting.Connection.flashConnect( "haxe_fl8" );
	}
	
	public function update( val: Int ): Void
	{
		switch( _type )
		{
			case JS_TYPE:
				js.Lib.document.getElementById( "box" ).style.left = Std.string( val ) + "px";
			case FL9_TYPE:
				_conn.org.puremvc.haxe.examples.multiplatformComm.external.ExternalView.update.call( [ val ] );
			case FL8_TYPE:
				_conn.org.puremvc.haxe.examples.multiplatformComm.external.ExternalView.update.call( [ val ] );
		}
	}

}
/* 
 PureMVC haXe Demo - Multiplatform Communications
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.examples.multiplatformComm.external;

class ExternalView
{

	#if flash9
	private static var box: flash.display.Sprite;
	#else flash8
	private static var box: flash.MovieClip;
	#end

	public function new()
	{
		#if flash9
			box = new flash.display.Sprite();
			box.graphics.beginFill( 0x666666 );
			box.y = 10;
			box.graphics.drawRect( 0, 0, 40, 40 );
			flash.Lib.current.addChild( box );
		#else flash8
			box = flash.Lib.current.createEmptyMovieClip( "box_mc", 100 );
			box._y = 10;
			box.beginFill( 0x666666 );
			box.moveTo( 0, 0 );
			box.lineTo( 0, 40 );
			box.lineTo( 40, 40 );
			box.lineTo( 40, 0 );
			box.endFill();
		#end
		haxe.Timer.delayed( init, 800 )();
	}
	
	private function init(): Void
	{
		var js = haxe.remoting.Connection.jsConnect();
	}

	public static function update( val: Int ): Void
	{
		#if flash9
			box.x = val;
		#else flash8
			box._x = val;
		#end
	}

	public static function main()
	{
		var app = new ExternalView();
	}
}
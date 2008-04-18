/* 
 PureMVC haXe Demo - Multiplatform Communications
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
import org.puremvc.haxe.examples.multiplatformComm.MultiplatformFacade;

class MultiplatformComm
{
	public function new()
	{
		haxe.Timer.delayed( init, 800 )();
	}
	
	private function init(): Void
	{
		var facade = MultiplatformFacade.getInstance();
		facade.sendNotification( MultiplatformFacade.STARTUP );		
	}

	public static function main(): Void
	{
		var app = new MultiplatformComm();
	}
}
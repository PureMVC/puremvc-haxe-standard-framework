/* 
 PureMVC haXe Demo - Simple Admin
 PureMVC - Copyright(c) 2008Marco Secchi <marco.secchi@puremvc.org> 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
import org.puremvc.haxe.examples.simpleAdmin.SimpleAdminFacade;

class SimpleAdmin
{

	function new()
	{
		var facade = SimpleAdminFacade.getInstance();
		facade.sendNotification( SimpleAdminFacade.STARTUP, this );
	}

	public static function main(): Void
	{
		var app: SimpleAdmin = new SimpleAdmin();
	}
}
// JavaScript Document

function NewMain(){
	var interface;
	var gm;
	
	init();
	
	function init(){
		var interface = InterfaceMaster.getInstance();
		var gm = GameMaster.getInstance();
		
	}
}

function startBattle() {
	var interface = InterfaceMaster.getInstance();
	interface.startBattle();
}

var main = new NewMain();
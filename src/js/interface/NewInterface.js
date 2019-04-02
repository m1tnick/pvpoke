var InterfaceMaster = (function () {
    var instance;
 
    function createInstance() {
		
		
        var object = new interfaceObject();
		
		function interfaceObject(){
            var gm = GameMaster.getInstance();
            var battle;

            this.init = function(){

				var data = gm.data;
				
				// Initialize selectors and push Pokemon data
								
				battle = new Battle();
				battle.setBuffChanceModifier(0);
				
				// If get data exists, load settings
			};
            
            this.startBattle = function(){
                console.log("Estamos ca");
                this.generateMultiBattleResults();
            }

            this.generateMultiBattleResults = function(){
				
                // Set settings
                

                var context = "battle";
                var ranker = RankerMaster.getInstance();
			    ranker.context = context;

				var cup = '1500';
				var opponentShields = 0;
				var chargedMoveCount = 2;
				var shieldBaiting = 0;

				battle.setCup(cup);
				ranker.setShields(opponentShields);
				ranker.setChargedMoveCount(chargedMoveCount);
				ranker.setShieldBaitOverride(shieldBaiting);
				
				var team = [];
                
                var poke1 = new Pokemon('azumarill', 0, battle);
                var poke2 = new Pokemon('skarmory', 0, battle);
                var poke3 = new Pokemon('whiscash', 0, battle);


                poke1.initialize(battle.getCP());
                poke2.initialize(battle.getCP());
                poke3.initialize(battle.getCP());
				
				
                team.push(poke1);
                team.push(poke2);
                team.push(poke3);
				
				// Set multi selected Pokemon if available
				
				//ranker.setTargets(multiSelector.getPokemonList());
				
				// Run battles through the ranker
				
				var data = ranker.rank(team, battle.getCP(), battle.getCup());
                var rankings = data.rankings;
                console.log(rankings);
			}
        }

        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
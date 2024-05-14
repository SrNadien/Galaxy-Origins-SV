ServerEvents.recipes(event => {
	
	//eliminados
	event.remove({output:'aeinfinitybooster:infinity_card'})
	event.remove({output:'aeinfinitybooster:dimension_card'})
	event.remove({output:'ae2:cell_workbench'})
	event.remove({output:'ae2:tiny_tnt'})
	event.remove({output:'ae2:matter_cannon'})
	event.remove({output:'ae2:256k_crafting_storage'})
	event.remove({output:'ae2:printed_calculation_processor'})
	event.remove({output:'ae2:printed_silicon'})
	event.remove({output:'ae2:printed_engineering_processor'})
	event.remove({output:'ae2:printed_logic_processor'})
	event.remove({output:'ae2:engineering_processor'})
	event.remove({output:'ae2:calculation_processor'})
	event.remove({output:'ae2:logic_processor'})



    // silicona 
    event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "ae2:silicon"
        },
        {
          "item": "ae2:silicon_press"
        }
      ],
      "keepHeldItem": true,
      "results": [
        {
          "item": "ae2:printed_silicon"
        }
      ],
    });
    
      event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "enderio:silicon"
        },
        {
          "item": "ae2:silicon_press"
        }
      ],
      "keepHeldItem": true,
      "results": [
        {
          "item": "ae2:printed_silicon"
        }
      ],
    });
    
    
    
      //oro
      event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "ae2:logic_processor_press"
        }
      ],
      "keepHeldItem": true,
      "results": [
        {
          "item": "ae2:printed_logic_processor"
        }
      ],
    });
    
    
       //diamante
         event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:diamond"
        },
        {
          "item": "ae2:engineering_processor_press"
        }
      ],
      "keepHeldItem": true,
      "results": [
        {
          "item": "ae2:printed_engineering_processor"
        }
      ],
    });
    
    
      //calculo
        event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "#ae2:all_certus_quartz"
        },
        {
          "item": "ae2:calculation_processor_press"
        }
      ],
      "keepHeldItem": true,
      "results": [
        {
          "item": "ae2:printed_calculation_processor"
        }
      ],
    });
    
    
      //procesador de oro
       event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "ae2:printed_logic_processor"
        },
        {
          "item": "minecraft:redstone"
        }
      ],
      "keepHeldItem": true,
      "results": [
        {
          "item": "ae2:logic_processor"
        }
      ],
    });
    
    
       
       //procesador de diamante
          event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "ae2:printed_engineering_processor"
        },
        {
          "item": "minecraft:redstone"
        }
      ],
      "keepHeldItem": true,
      "results": [
        {
          "item": "ae2:engineering_processor"
        }
      ],
    });
    
    
    
    
       //procesador de calculo
          event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "ae2:printed_calculation_processor"
        },
        {
          "item": "minecraft:redstone"
        }
      ],
      "keepHeldItem": true,
      "results": [
        {
          "item": "ae2:calculation_processor"
        }
      ],
    });







//infinity card booster
event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 2,
  "pattern": [
    "AABAA",
    "CBDBC",
    "BDEDB",
    "CBDBC",
    "FFBFF"
  ],
  "key": {
    "A": {
      "item": "minecraft:ender_eye"
    },
    "B": {
      "item": "ae2:wireless_booster"
    },
    "C": {
      "item": "minecraft:nether_star"
    },
    "D": {
      "item": "extendedcrafting:ender_ingot"
    },
    "E": {
      "item": "kubejs:patricio"
    },
    "F": {
      "item": "minecraft:netherite_ingot"
    }
  },
  "result": {
    "item": 'aeinfinitybooster:infinity_card',
    "count": 2
  },
}).id('galaxyorigenes:infinitybooster')
  
  
  
  //infinity dimensional card
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 2,
  "pattern": [
    "AABAA",
    "CBDBC",
    "BDEDB",
    "CBDBC",
    "FFBFF"
  ],
  "key": {
    "A": {
      "item": "minecraft:ender_eye"
    },
    "B": {
      "item": "aeinfinitybooster:infinity_card"
    },
    "C": {
      "item": "extendedcrafting:ender_star"
    },
    "D": {
      "item": "extendedcrafting:ender_ingot"
    },
    "E": {
      "item": "kubejs:patricio"
    },
    "F": {
      "item": "minecraft:netherite_ingot"
    }
  },
  "result": {
    "item": 'aeinfinitybooster:dimension_card',
    "count": 1
  },
}).id('galaxyorigenes:dimensioncard')




  //perfecto ciernes
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"
    },
    "ingredients": [
      {
        "item": "ae2:charged_certus_quartz_crystal"
      },
      {
        "item": "ae2:flawed_budding_quartz"
      }
    ],
    "result": {
      "item": "ae2:flawless_budding_quartz"
    }
  }).id('galaxyorigenes:ciernesperfecto')



     //universal press
     event.shaped('kubejs:universal_press', ['FPF', 'CSL', 'FEF'], {
      F: '#forge:ingots/sky_steel',
      P: 'ae2:silicon_press',
      C: 'ae2:calculation_processor_press',
      S: 'minecraft:slime_ball',
      L: 'ae2:logic_processor_press',
      E: 'ae2:engineering_processor_press'
    }).id('kubejs:universal_press_dos')
  
  
 


  
})
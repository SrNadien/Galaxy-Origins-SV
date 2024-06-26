ServerEvents.recipes(event => {
	
	//eliminadas
   event.remove({output:'hostilenetworks:sim_chamber'})
   event.remove({output:'hostilenetworks:loot_fabricator'})
   event.remove({output:'hostilenetworks:deep_learner'})
   event.remove({output:'hostilenetworks:blank_data_model'})
   event.remove({output:'hostilenetworks:prediction_matrix'})
   event.remove({output:Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:vindicator"}}')})
   event.remove({output:Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:ender_dragon"}}')})
	
	
	//simulation chamber
	event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 95000000,
    "input": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "ingredients": [
      {
        "item": "hostilenetworks:blank_data_model"
      },
      {
        "item": "hostilenetworks:blank_data_model"
      },
      {
        "item": "createdieselgenerators:engine_turbocharger"
      },
      {
        "item": "allthecompressed:diamond_block_1x"
      },
      {
        "item": "allthecompressed:diamond_block_1x"
      },
      {
        "item": "createdieselgenerators:engine_turbocharger"
      },
      {
        "item": "hostilenetworks:blank_data_model"
      },
      {
        "item": "hostilenetworks:blank_data_model"
      },
      {
        "item": "allthecompressed:diamond_block_1x"
      },
      {
        "item": "occultism:dimensional_matrix"
      },
      {
        "item": "allthemodium:vibranium_ore"
      },
      {
        "item": "createdieselgenerators:engine_turbocharger"
      },
      {
        "item": "createdieselgenerators:engine_turbocharger"
      },
      {
        "item": "allthemodium:unobtainium_ore"
      },
      {
        "item": "allthemodium:allthemodium_ore"
      },
      {
        "item": "allthecompressed:diamond_block_1x"
      }
    ],
    "result": {
      "item": 'hostilenetworks:sim_chamber',
      "count": 1
    },
  }).id('galaxyorigenes:simulationchamber')
  
    //loot fabricator
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 95000000,
      "input": {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      "ingredients": [
        {
          "item": "industrialforegoing:mob_imprisonment_tool"
        },
        {
          "item": "mekanism:hdpe_sheet"
        },
        {
          "tag": "forge:ingots/enderium"
        },
        {
          "tag": "forge:ingots/enderium"
        },
        {
          "item": "industrialforegoing:mob_imprisonment_tool"
        },
        {
          "item": "extendedcrafting:flux_star_block"
        },
        {
          "item": "allthemodium:vibranium_block"
        },
        {
          "item": "mekanism:hdpe_sheet"
        },
        {
          "item": "mekanism:hdpe_sheet"
        },
        {
          "item": "pneumaticcraft:ender_visor_upgrade"
        },
        {
          "item": "allthemodium:allthemodium_block"
        },
        {
          "item": "forbidden_arcanus:zombie_arm"
        },
        {
          "tag": "forge:ingots/enderium"
        },
        {
          "tag": "forge:ingots/enderium"
        },
        {
          "item": "mekanism:hdpe_sheet"
        },
        {
          "item": "industrialforegoing:mob_imprisonment_tool"
        }
      ],
      "result": {
        "item": 'hostilenetworks:loot_fabricator',
        "count": 1
      },
    }).id('galaxyorigenes:lootfabricator')




   //deep learner
   event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 1,
    "pattern": [
      "ABA",
      "CDC",
      "AEA"
    ],
    "key": {
      "A": {
        "item": "minecraft:glass_pane"
      },
      "B": {
        "item": "minecraft:comparator"
      },
      "C": {
        "item": "minecraft:repeater"
      },
      "D": {
        "item": "minecraft:ghast_tear"
      },
      "E": {
        "item": "fluxnetworks:flux_core"
      }
    },
    "result": {
      "item": 'hostilenetworks:deep_learner',
      "count": 1
    },
  }).id('galaxyorigenes:deeplearner')



    event.shaped('hostilenetworks:blank_data_model', ['UCU', 'CDC', 'UCU'], {
      U: 'avaritia:crystal_matrix_ingot',
      C: 'industrialforegoing:mob_imprisonment_tool',
      D: 'create:andesite_casing'
    }).id('galaxyorigenes:blankdatamodel')
    
})
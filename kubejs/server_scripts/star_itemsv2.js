//star items v2 By SrNadien 
ServerEvents.recipes(event => {




    //supersemilla 
    event.recipes.create.mixing('kubejs:superseed', ['minecraft:mangrove_propagule', 'minecraft:cherry_sapling', 'minecraft:brown_mushroom', 'minecraft:red_mushroom', 'minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:pitcher_plant', 'minecraft:torchflower_seeds', 'bloodmagic:fragment_netherite_scrap', 'allthemodium:ancient_soulberries', 'reliquary:fertile_lily_pad', 'minecraft:torchflower']).superheated().id('galaxyorigenes:supersemilla')


    //planos
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "kubejs:piglich_heart_block"
      },
      "ingredients": [
        {
          "item": "artifacts:running_shoes"
        },
        {
          "item": "artifacts:kitty_slippers"
        },
        {
          "item": "artifacts:aqua_dashers"
        },
        {
          "item": "artifacts:umbrella"
        },
        {
          "item": "artifacts:aqua_dashers"
        },
        {
          "item": "artifacts:snowshoes"
        },
        {
          "item": "artifacts:steadfast_spikes"
        },
        {
          "item": "artifacts:flippers"
        },
        {
          "item": "artifacts:rooted_boots"
        },
        {
          "item": "artifacts:whoopee_cushion"
        },
        {
          "item": "artifacts:plastic_drinking_hat"
        },
        {
          "item": "artifacts:novelty_drinking_hat"
        },
        {
          "item": "artifacts:snorkel"
        },
        {
          "item": "artifacts:night_vision_goggles"
        },
        {
          "item": "artifacts:villager_hat"
        },
        {
          "item": "artifacts:superstitious_hat"
        }
      ],
      "result": {
        "item": 'kubejs:planos',
        "count": 1
      }
    }).id('galaxyorigenes:planos')



    //combustible radiactivo
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "thoriumreactors:uranium_oxidizer_block"
      },
      "ingredients": [
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "allthecompressed:uranium_block_5x"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "tag": "forge:ores/uranium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "tag": "forge:ores/uranium"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "allthecompressed:uranium_block_5x"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        }
      ],
      "result": {
        "item": 'kubejs:combustible',
        "count": 1
      }
    }).id('galaxyorigenes:combustible')
	

  //alma de dragon
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "minecraft:dragon_egg"
    },
    "ingredients": [
      {
        "item": "thermal_extra:fluid_tank_augment_5"
      },
      {
        "item": "thermal_extra:potion_amplifier_augment_5"
      },
      {
        "item": "thermal_extra:potion_duration_augment_5"
      },
      {
        "item": "irons_spellbooks:dragonskin"
      },
      {
        "item": "mob_grinding_utils:dragon_muffler"
      },
      {
        "item": "thermal_extra:dragonsteel_block"
      },
      {
        "item": "apotheosis:infused_breath"
      },
      {
        "item": "thermal_extra:dragonsteel_block"
      },
      {
        "item": "thermal_extra:dragonsteel_ingot"
      },
      {
        "item": "thermal_extra:dragonsteel_plate"
      },
      {
        "item": "forbidden_arcanus:silver_dragon_scale"
      },
      {
        "item": "thermal_extra:dragonsteel_bucket"
      },
      {
        "item": "forbidden_arcanus:silver_dragon_scale"
      },
      {
        "item": "minecraft:dragon_head"
      },
      {
        "item": "forbidden_arcanus:arcane_dragon_egg"
      },
      {
        "item": "reliquary:mob_charm"
      }
    ],
    "result": {
      "item": 'kubejs:alma',
      "count": 1
    }
  }).id('galaxyorigenes:alma')


  //antimateria
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "create_new_age:reinforced_motor"
    },
    "ingredients": [
      {
        "item": "forbidden_arcanus:bat_soup"
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "forbidden_arcanus:bat_soup"
      },
      {
        "item": "apotheosis:superior_sigil_of_socketing"
      },
      {
        "item": "apotheosis:superior_sigil_of_socketing"
      },
      {
        "item": "pneumaticcraft:empty_pcb"
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "kubejs:superseed"
      },
      {
        "item": "forbidden_arcanus:bat_soup"
      },
      {
        "item": "forbidden_arcanus:bat_soup"
      },
      {
        "item": "pneumaticcraft:empty_pcb"
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "ae2:engineering_processor"
      },
      {
        "item": "apotheosis:superior_sigil_of_socketing"
      },
      {
        "item": "apotheosis:superior_sigil_of_socketing"
      }
    ],
    "result": {
      "item": 'kubejs:antimateria',
      "count": 1
    }
  }).id('galaxyorigenes:uumater')




  //mini portal
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "minecraft:end_portal_frame"
    },
    "ingredients": [
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": "ad_astra:desh_block"
      },
      {
        "item": "ad_astra:calorite_plate"
      },
      {
        "item": "ad_astra:desh_block"
      },
      {
        "item": "betterfurnacesreforged:extreme_forge"
      },
      {
        "item": "betterfurnacesreforged:extreme_forge"
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": "ad_astra:calorite_plate"
      },
      {
        "item": "ad_astra:calorite_plate"
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": "betterfurnacesreforged:extreme_forge"
      },
      {
        "item": "betterfurnacesreforged:extreme_forge"
      },
      {
        "item": "ad_astra:desh_block"
      },
      {
        "item": "ad_astra:calorite_plate"
      },
      {
        "item": "ad_astra:desh_block"
      },
      {
        "item": "create:mechanical_saw"
      }
    ],
    "result": {
      "item": 'kubejs:miniportal',
      "count": 1
    }
  }).id('galaxyorigenes:miniportal')



  //black hole
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:ultimate_singularity', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:quantum_ring', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:micromissiles', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:pellet_antimatter', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:nether_star', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:pellet_plutonium', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'industrialforegoing:infinity_nuke', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'createdieselgenerators:huge_diesel_engine', 'count': 1 }
    ],
    pressure: 4.9,
    results: [
      {
        'item': 'kubejs:blackhole'
      }
    ]
  }).id('galaxyorigenes:blackhole')




//semilla
event.custom({
  type: 'pneumaticcraft:pressure_chamber',
  inputs: [
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'avaritia:densest_neutron_collector', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:diamond_block_5x', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:crystal_resonance_generator', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'bloodmagic:dislocationrune2', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:canteen', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'avaritia:cosmic_meatballs', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'bloodmagic:strong_tau', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthemodium:vibranium_upgrade_smithing_template', 'count': 1 }
  ],
  pressure: 5.9,
  results: [
    {
      'item': 'kubejs:semilla'
    }
  ]
}).id('galaxyorigenes:semillita')



  //mini reactor
  event.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "industrialforegoing:mycelial_netherstar"
    },
    "ingredients": [
      {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:netherstar\"}"
      },
      {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:netherstar\"}"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "apotheosis:draconic_endshelf"
      },
      {
        "item": "apotheosis:draconic_endshelf"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:netherstar\"}"
      },
      {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:netherstar\"}"
      },
      {
        "item": "apotheosis:draconic_endshelf"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "apotheosis:draconic_endshelf"
      }
    ],
    "result": {
      "item": 'kubejs:minireactor',
      "count": 1
    }
  }).id('galaxyorigenes:minireactor')



  //catalizador del olvido
  event.shaped('kubejs:catalizadordeoblivion', [' AB', 'ACA', 'BA '], {
    A: 'occultism:soul_gem',
    C: 'allthecompressed:glass_5x',
    B: 'kubejs:doll'
  }).id('galaxyorigenes:catalizador')



   // Brujula Maldita
   event.shaped('kubejs:brujulamaldita', ['DED', 'ABA', 'DED'], {
    A: 'mekanism:module_gravitational_modulating_unit',
    B: 'industrialforegoing:wither_builder',
    D: 'ae2:energy_card',
    E: 'mekanism:module_gravitational_modulating_unit'
  }).id('galaxyorigenes:brujula')



    //calavaera maldita
    event.recipes.create.mechanical_crafting('kubejs:calavera', [
      '    F    ',
      '   AAA   ',
      '  FACAF  ',
      '  FABAF  ',
      '   NNN   ',
      '    F    '
      ], {
        A: 'minecraft:wither_skeleton_skull',
        B: 'thermal_extra:upgrade_augment',
        C: 'industrialforegoing:wither_builder',
        F: 'minecraft:wither_rose',
        N: 'alexscaves:hazmat_warning_block'
      }) 



  // transmisor
  event.shaped('kubejs:transmisor', ['A B', ' CF', 'GED'], {
    A: Item.of('mekanism:canteen', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:64000,FluidName:"mekanism:nutritional_paste"}}]}}'),
    B: 'ae2wtlib:wireless_universal_terminal',
    C: 'mekanism:supercharged_coil',
    D: 'pneumaticcraft:module_expansion_card',
    E: 'ae2:singularity',
    F: 'mekanismgenerators:module_solar_recharging_unit',
    G: 'createaddition:tesla_coil'
  })


      //Muneco De Paja
      event.recipes.create.mixing('kubejs:doll', ['minecraft:echo_shard', 'kubejs:superseed', 'minecraft:calibrated_sculk_sensor', 'allthemodium:vibranium_allthemodium_alloy_ingot', 'allthemodium:allthemodium_carrot', 'reliquary:witherless_rose']).superheated()


   //star nuget
   event.shaped('9x kubejs:starnugget', [
    '   ',
    ' A ',
    '   '
  ], {
    A: 'kubejs:star'
  }).id('galaxyorigenes:starnugget')



})
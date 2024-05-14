ServerEvents.recipes(event => {
  
  
  
  
  
  //eliminado
  event.remove({output: 'industrialforegoing:ether_gas' })
  event.remove({id: 'industrialforegoing:ore_laser_base'})

//machine frame basic
event.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, 'minecraft:redstone_block', 'create:brass_casing')




//apatite ore
event.custom({
"type": "industrialforegoing:laser_drill_ore",
"catalyst": {
  "item": "industrialforegoing:laser_lens3"
},
"output": {
  "item": "thermal:apatite_ore"
},
"pointer": 0,
"rarity": [
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 16,
    "depth_min": 5,
    "weight": 28,
    "whitelist": {}
  },
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 255,
    "depth_min": 0,
    "weight": 4,
    "whitelist": {}
  }
]
}).id('galaxyorigenes:srnaptite')




//allthemodium ore
event.custom({
"type": "industrialforegoing:laser_drill_ore",
"catalyst": {
  "item": "industrialforegoing:laser_lens4"
},
"output": {
  "item": "allthemodium:allthemodium_ore"
},
"pointer": 0,
"rarity": [
  {
    "blacklist": {},
    "depth_max": 20,
    "depth_min": 1,
    "weight": 1,
    "whitelist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:nether_wastes",
        "minecraft:basalt_deltas",
        "minecraft:warped_forest",
        "minecraft:crimson_forest",
        "minecraft:soul_sand_valley"
      ]
    }
  }
]
}).id('galaxyorigenes:srnadienallthemodium')


//laser ore base
event.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'allthemodium:allthemodium_pickaxe',
  O: '#forge:ores/iron',
  F: 'industrialforegoing:machine_frame_advanced',
  G: '#forge:gears/vibranium',
  R: 'minecraft:redstone'
}).id('galaxyorigenes:industrialforegoings/ore_laser_drill')
})
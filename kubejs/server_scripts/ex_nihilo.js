
ServerEvents.recipes(event => {


  //sieve
  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `minecraft:sand`
    },
    "result": {
      "item": `mysticalagriculture:prosperity_shard`
    },
    "rolls": [
      {
        "chance": 0.02,
        "mesh": "diamond"
      }
    ]
  }).id('galaxtorigenes:prosperity')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:basalt'
    },
    "result": {
      "item": 'ae2:sky_dust'
    },
    "rolls": [
      {
        "chance": 0.2,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:skydust')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `exnihilosequentia:crushed_netherrack`
    },
    "result": {
      "item": `ae2:certus_quartz_crystal`
    },
    "rolls": [
      {
        "chance": 0.15,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:certuscrystal')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `minecraft:soul_sand`
    },
    "result": {
      "item": `mysticalagriculture:soulium_dust`
    },
    "rolls": [
      {
        "chance": 0.15,
        "mesh": "emerald"
      },
      {
        "chance": 0.05,
        "mesh": "iron"
      }
    ]
  }).id('galaxtorigenes:souliumdust')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `exnihilosequentia:crushed_netherrack`
    },
    "result": {
      "item": `create:rose_quartz`
    },
    "rolls": [
      {
        "chance": 0.15,
        "mesh": "diamond"
      }
    ]
  }).id('galaxtorigenescuarzorosa')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `exnihilosequentia:crushed_netherrack`
    },
    "result": {
      "item": `mysticalagriculture:inferium_essence`
    },
    "rolls": [
      {
        "chance": 0.3,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:inferiumessence')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": `exnihilosequentia:crushed_end_stone`
    },
    "result": {
      "item": `minecraft:chorus_flower`
    },
    "rolls": [
      {
        "chance": 0.1,
        "mesh": "diamond"
      }
    ]
  }).id('galaxtorigenes:florcoral')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:basalt'
    },
    "result": {
      "item": 'fluxnetworks:flux_dust'
    },
    "rolls": [
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:fluxdust')
  
  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:basalt'
    },
    "result": {
      "item": 'minecraft:amethyst_shard'
    },
    "rolls": [
      {
        "chance": 0.2,
        "mesh": "netherite"
      }
    ]
  }).id('galaxtorigenes:amatista')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'minecraft:gravel'
    },
    "result": {
      "item": 'thermal:apatite'
    },
    "rolls": [
      {
        "chance": 0.2,
        "mesh": "iron"
      }
    ]
  }).id('galaxtorigenes:aptita')

  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "tag": "minecraft:sand"
    },
    "result": {
      "item": `minecraft:ink_sac`
    },
    "rolls": [
      {
        "chance": 0.25,
        "mesh": "iron"
      }
    ],
    "waterlogged": true
  }).id('galaxtorigenes:sacodetinta')




  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'ad_astra:calorite_block'
    },
    "result": {
      "item": 'create_new_age:thorium'
    },
    "rolls": [
      {
        "chance": 0.1,
        "mesh": "emerald"
      }
    ],
    "waterlogged": false
  }).id('galaxtorigenes:torio')



  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": 'minecraft:kelp'
    },
    "rolls": [
      {
        "chance": 0.45,
        "mesh": "netherite"
      }
    ],
    "waterlogged": true
  }).id('galaxtorigenes:algas')


  event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'create:copper_casing'
    },
    "result": {
      "item": 'forbidden_arcanus:arcane_crystal'
    },
    "rolls": [
      {
        "chance": 0.35,
        "mesh": "emerald"
      }
    ],
    "waterlogged": false
  }).id('galaxtorigenes:arcanecry')


    event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'avaritia:crystal_matrix'
    },
    "result": {
      "item": 'allthemodium:raw_allthemodium'
    },
    "rolls": [
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "waterlogged": false
  }).id('galaxtorigenes:modium')


      event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'avaritia:neutron'
    },
    "result": {
      "item": 'allthemodium:raw_vibranium'
    },
    "rolls": [
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "waterlogged": false
  }).id('galaxtorigenes:vibranium')


    event.custom({
    "type": "exnihilosequentia:sifting",
    "input": {
      "item": 'mekanism:sps_casing'
    },
    "result": {
      "item": 'allthemodium:raw_unobtainium'
    },
    "rolls": [
      {
        "chance": 0.35,
        "mesh": "netherite"
      }
    ],
    "waterlogged": false
  }).id('galaxtorigenes:unobtanio')




  //heat
  event.custom({
    "type": "exnihilosequentia:heat",
    "amount": 20,
    "block": `alltheores:uranium_block`
    }
  }).id('galaxtorigenes:uraniumblockheat')



  event.custom({
    "type": "exnihilosequentia:heat",
    "amount": 60,
    "block": `mekanism:superheating_element`
    }
  }).id('galaxtorigenes:heateelementheat')


  event.custom({
    "type": "exnihilosequentia:heat",
    "amount": 15000,
    "block": 'create:blaze_burner'
    }
  }).id('galaxtorigenes:blazeburnerheat')


  event.custom({
    "type": "exnihilosequentia:heat",
    "amount":  100000,
    "block": 'mysticalagradditions:dragon_egg_crux'
    }
  }).id('galaxtorigenes:dragoncruxheat')



})


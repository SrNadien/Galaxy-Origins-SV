//exmachinis By SrNadien
onEvent('recipes', event => {
	
	
	
	//eliminadas
  event.remove({output:'exmachinis:gold_upgrade'})
  event.remove({output:'exnihilosequentia:string_mesh'})
	event.remove({output:'exmachinis:gold_upgrade'})
	event.remove({output:'exmachinis:netherite_upgrade'})
	event.remove({output:'exmachinis:diamond_upgrade'})
  event.remove({output: 'exmachinis:flux_sieve' })
  event.remove({output: 'exmachinis:flux_hammer' })
  event.remove({output: 'exmachinis:flux_compactor' })
	
	
	//gold upgrade
	event.shaped('exmachinis:gold_upgrade', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:gold_block',
    C: 'botania:manasteel_ingot',
    Q: 'minecraft:gold_block',
    I: 'minecraft:gold_block',
    L: 'botania:manasteel_ingot',
    W: 'minecraft:gold_block',
    E: 'minecraft:gold_block',
    H: 'botania:manasteel_ingot',
    P: 'minecraft:gold_block'
  }).id('divinemc:goldupgrade')
  
  
    //Diamond Upgrade
    event.shaped('exmachinis:diamond_upgrade', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'botania:elementium_block',
    C: 'exmachinis:gold_upgrade',
    Q: 'botania:elementium_block',
    I: 'botania:elementium_block',
    L: 'exmachinis:gold_upgrade',
    W: 'botania:elementium_block',
    E: 'botania:elementium_block',
    H: 'exmachinis:gold_upgrade',
    P: 'botania:elementium_block'
  }).id('divinemc:diamondupgrade')
  
    //Netherite upgrade
    event.shaped('exmachinis:netherite_upgrade', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T:'twilightforest:fiery_block',
    C: 'exmachinis:diamond_upgrade',
    Q:'twilightforest:fiery_block',
    I: 'twilightforest:fiery_block',
    L: 'exmachinis:diamond_upgrade',
    W: 'twilightforest:fiery_block',
    E:'twilightforest:fiery_block',
    H: 'exmachinis:diamond_upgrade',
    P:'twilightforest:fiery_block'
  }).id('divinemc:netheriteupgrade')
	
	//flux hammer
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "excompressum:compressed_hammer_diamond"
  },
  "ingredients": [
    {
      "item": "alltheores:steel_block"
    },
    {
      "item": "tconstruct:clear_glass_pane"
    },
    {
      "item": "cyclic:hopper_gold"
    },
    {
      "item": "tconstruct:clear_glass_pane"
    },
    {
      "item": "alltheores:steel_block"
    },
    {
      "item": "tconstruct:clear_glass_pane"
    },
    {
      "item": "tconstruct:clear_glass_pane"
    },
    {
      "item": "tconstruct:clear_glass_pane"
    }
  ],
  "result": {
    "item": 'exmachinis:flux_hammer',
    "count": 1
  }
}).id('divinemc:fluxhammer')




//flux compactor
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "create:redstone_link"
  },
  "ingredients": [
    {
      "item": "alltheores:steel_block"
    },
    {
      "item": "cyclic:hopper_gold"
    },
    {
      "item": "minecraft:piston"
    },
    {
      "item": "alltheores:steel_block"
    },
    {
      "item": "alltheores:steel_block"
    },
    {
      "item": "minecraft:piston"
    },
    {
      "item": "minecraft:piston"
    },
    {
      "item": "alltheores:steel_block"
    }
  ],
  "result": {
    "item": 'exmachinis:flux_compactor',
    "count": 1
  }
}).id('divinemc:fluxcompactor')



//flux sieve
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "excompressum:mana_sieve"
  },
  "ingredients": [
    {
      "item": "alltheores:steel_block"
    },
    {
      "item": "cyclic:gold_bars"
    },
    {
      "item": "cyclic:hopper_gold"
    },
    {
      "item": "cyclic:gold_bars"
    },
    {
      "item": "alltheores:steel_block"
    },
    {
      "item": "cyclic:gold_bars"
    },
    {
      "item": "cyclic:gold_bars"
    },
    {
      "item": "cyclic:gold_bars"
    }
  ],
  "result": {
    "item": 'exmachinis:flux_sieve',
    "count": 1
  }
}).id('divinemc:fluxsieve')




	//String Mesh
    event.shaped('exnihilosequentia:string_mesh', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:cobweb',
    C: 'minecraft:cobweb',
    Q: 'minecraft:cobweb',
    I: 'minecraft:cobweb',
    L: 'minecraft:cobweb',
    W: 'minecraft:cobweb',
    E: 'minecraft:cobweb',
    H: 'minecraft:cobweb',
    P: 'minecraft:cobweb'
  }).id('divinemc:stringmesh')
  })
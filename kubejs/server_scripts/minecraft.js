//minecraft vanilla By SrNadien 
ServerEvents.recipes(event => {
	
	
	//eliminadas
	event.remove({output:'minecraft:chest'})
  event.remove({ output: 'extendedcrafting:basic_table'})
	event.remove({output:'expandedstorage:wood_chest'})
	event.remove({output:'minecraft:crafting_table'})
	event.remove({output:'minecraft:furnace'})
	event.remove({output:'minecraft:piston'})
	event.remove({output:'minecraft:sticky_piston'})
	event.remove({output:'minecraft:cobweb'})
	event.remove({output:'mekanism:scuba_mask'})
	event.remove({output:'minecraft:ender_chest'})
  event.remove({output:'#forge:coins'})
  event.remove({output:'bloodmagic:altar'})
  event.remove({id:'functionalstorage:oak_drawer_alternate_x4'})
  event.remove({id:'functionalstorage:oak_drawer_alternate_x2'})
  event.remove({id:'functionalstorage:oak_drawer_alternate_x1'})
	
	//old chest
	event.shaped('expandedstorage:old_wood_chest', [
    'PPP',
    'PLP',
    'PPP'
  ], {
	  L: 'minecraft:chest',
    P: '#minecraft:planks'
  }).id('galaxyorigenes:oldwoodchest')



    event.shaped('4x minecraft:chest', [
    'PPP',
    'PNP',
    'PPP'
  ], {
    P: '#minecraft:planks',
    N: '#minecraft:logs' 
  }).id('galaxyorigenes:cofre')



  	event.shaped('minecraft:furnace', [
    'TTT',
    'T T',
    'TTT'
  ], {
    T: 'allthecompressed:cobblestone_1x'
  }).id('galaxyorigenes:horno')
   
       //Pinton
       event.shaped('minecraft:piston', [
        'TCQ',
        'ILW',
        'EHP'
      ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'minecraft:stone',
        L: 'extendedcrafting:redstone_ingot',
        W: 'minecraft:stone',
        E: 'minecraft:stone',
        H: 'minecraft:amethyst_shard',
        P: 'minecraft:stone'
      }).id('galaxyorigenes:piston')
      
      
      
        //Piston Pegajoso
        event.shaped('minecraft:sticky_piston', [
        'TCQ',
        'ILW',
        'EHP'
      ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'minecraft:stone',
        L: 'extendedcrafting:redstone_ingot',
        W: 'minecraft:stone',
        E: 'minecraft:stone',
        H: 'minecraft:piston',
        P: 'minecraft:stone'
      }).id('galaxyorigenes:pistonpegajoso')


    event.shaped('minecraft:end_portal_frame', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:ingots/enderium',
    C: '#forge:ingots/enderium',
    Q: '#forge:ingots/enderium',
    I: 'minecraft:end_stone',
    L: 'ae2:fluix_block',
    W: 'minecraft:end_stone',
    E: 'minecraft:end_stone',
    H: 'minecraft:end_stone',
    P: 'minecraft:end_stone'
  }).id('galaxyorigenes:portalframeend')
  
  
    //telaraña
    event.shaped('minecraft:cobweb', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:string',
    C: 'minecraft:string',
    Q: 'minecraft:string',
    I: 'minecraft:string',
    L: 'minecraft:string',
    W: 'minecraft:string',
    E: 'minecraft:string',
    H: 'minecraft:string',
    P: 'minecraft:string'
  }).id('galaxyorigenes:telarana')
  
  
  //ender chest
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 1,
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "mekanism:ingot_refined_obsidian"
      },
      "B": {
        "item": "allthecompressed:obsidian_1x"
      },
      "C": {
        "item": "cataclysm:flame_eye"
      }
    },
    "result": {
      "item": 'minecraft:ender_chest',
      "count": 1
    }
  }).id('galaxyorigenes:cofredelend')

  
  event.shaped('minecraft:ender_chest', [
    'ABA',
    'BSB',
    'ABA'
  ], {
    B: 'allthecompressed:obsidian_1x',
    A: 'mekanism:ingot_refined_obsidian',
    S: 'cataclysm:flame_eye'
  }).id('galaxyorigenes:enderchetdos')




//mesa de trabajo tier 1
event.shaped('extendedcrafting:basic_table', [
  'AA ',
  'AA ',
  '   '
], {
  A: '#minecraft:planks'
}).id('galaxyorigenes:mesadecrafteobasica')



//Mesa de trabajo
event.shaped('minecraft:crafting_table', [
  'AA ',
  'AA ',
  '   '
], {
  A: 'extendedcrafting:basic_table'
}).id('galaxyorigenes:mesadetrabajo')


//cristal del end
event.replaceInput({id: 'minecraft:end_crystal'}, 'minecraft:ender_eye', 'endrem:witch_eye')


//test altar blood
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "a": {
      "item": "allthecompressed:stone_4x"
    },
    "b": {
      "item": "mysticaladaptations:insanium_furnace"
    },
    "c": {
      "item": "advancednetherite:netherite_gold_ingot"
    }
  },
  "pattern": [
    "a a",
    "aba",
    "ccc"
  ],
  "result": {
    "item": "bloodmagic:altar"
  },
  "show_notification": true
}).id('galaxyorigenes:bloodaltar')



//drawer 2x2






//extras
    event.shaped("16x minecraft:stick", ["L","L"], {L:"#minecraft:logs"}).id('galaxyorigenes:qol/log_to_stick')
    event.shapeless("4x minecraft:clay_ball", "minecraft:clay").id('galaxyorigenes:qol/clay_to_ball')
    event.shapeless("minecraft:flint", "3x minecraft:gravel").id(`galaxyorigenes:qol/gravel_to_flint`)
    event.shapeless("4x minecraft:amethyst_shard", "minecraft:amethyst_block").id(`galaxyorigenes:qol/amethyst_to_shard`)
    event.remove({id: 'thermal:earth_charge/quartz_from_quartz_block'})
    event.shapeless("4x minecraft:quartz", "minecraft:quartz_block").id(`galaxyorigenes:qol/quartz_to_shard`)
    event.forEachRecipe({type:"minecraft:crafting_shaped", output:/slab/}, recipe => {
        let output = recipe.originalRecipeResult
        if (output.count == 6) {
            let ingredients = recipe.originalRecipeIngredients.stream().distinct().toList()
            if (ingredients.length == 1) {
                event.shaped(ingredients[0].getFirst(), ["S","S"], {S:output.id}).id(`galaxyorigenes:qol/${output.id.replace(":","/")}`)
            }
        }
    })


})
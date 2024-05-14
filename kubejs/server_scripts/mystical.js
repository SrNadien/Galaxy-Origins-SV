ServerEvents.recipes(event => {
  event.remove({ output:['mysticalagriculture:infusion_pedestal', 'mysticalagriculture:infusion_altar', 'mysticalagriculture:awakening_pedestal', 'mysticalagriculture:awakening_altar'] })

 
  
          
          event.shaped(Item.of("mysticalagriculture:awakening_pedestal"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" }).id('galaxyorigenesawakenedpedestal')
          event.shaped(Item.of("mysticalagriculture:awakening_altar"), ["ABA", " C ", "CCC"], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" }).id('galaxyorigenesawakeningaltar')
          event.shaped(Item.of("mysticalagriculture:infusion_pedestal"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:red_wool", C: "minecraft:stone" }).id('galaxyorigenesinfusionpedestal')
          event.shaped(Item.of("mysticalagriculture:infusion_altar"), ["ABA", " C ", "CCC"], { A: "kubejs:mystical_mechanism", B: "minecraft:red_wool", C: "minecraft:stone" }).id('galaxyorigenesinfusionaltar')
  


          //mechanism v2
          event.recipes.createSequencedAssembly([
            Item.of('kubejs:mystical_mechanism') 
          ],'allthemodium:soul_log',[
            event.recipes.create.filling('kubejs:incomplete_mystical_mechanism', [Fluid.of('allthemodium:soul_lava', 1000), 'allthemodium:soul_log']),
            event.recipes.createDeploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','bloodmagic:magicianbloodorb']),
            event.recipes.create.filling('kubejs:incomplete_mystical_mechanism', [Fluid.of('pneumaticcraft:lubricant', 1000), 'kubejs:incomplete_mystical_mechanism']),
            event.recipes.create.filling('kubejs:incomplete_mystical_mechanism', [Fluid.of('pneumaticcraft:kerosene', 1000), 'kubejs:incomplete_mystical_mechanism']),
            event.recipes.create.filling('kubejs:incomplete_mystical_mechanism', [Fluid.of('pneumaticcraft:vegetable_oil', 1000), 'kubejs:incomplete_mystical_mechanism']),
            event.recipes.createDeploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','kubejs:superseed']),
            event.recipes.create.pressing('kubejs:incomplete_mystical_mechanism', 'kubejs:incomplete_mystical_mechanism'),
          ]).transitionalItem('kubejs:incomplete_mystical_mechanism').loops(1).id('galaxyorigenesmyticalmech')


         

           // essence crafting for custom seeds
          function essenceCircle(result, essenceType) {
         event.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`galaxyorigenesmysticalagriculture/${essenceType}_essence_crafting`)
         }
         essenceCircle('allthemodium:allthemodium_ingot', 'allthemodium')
         essenceCircle('allthemodium:vibranium_ingot', 'vibranium')
         essenceCircle('allthemodium:unobtainium_ingot', 'unobtainium')

      



                 //magical soil crafting
  event.custom({
    type: 'mysticalagriculture:infusion',
    input: { item: 'mysticalagradditions:insanium_farmland' },
    ingredients: [
      { item: 'mysticalagradditions:dragon_scale' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:dragon_scale' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:dragon_scale' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:dragon_scale' },
      { item: 'mysticalagradditions:insanium_block' }
    ],
    result: { item: 'kubejs:magical_soil' }
  }).id('galaxyorigenesmagicalsoil')



  //replaces
  event.replaceInput({id: 'mysticalagriculture:infusion_crystal'}, 'minecraft:diamond', 'kubejs:mystical_mechanism')
  event.replaceInput({id: 'mysticalagriculture:master_infusion_crystal'}, 'mysticalagriculture:supremium_gemstone', 'mysticalagradditions:insanium_block')

  //remove gaia crux
  event.remove({ id: "mysticalagradditions:gaia_spirit_crux" })


  })
  
  
ServerEvents.recipes(event => {


  //eliminadas
  event.remove({output:'immersiveengineering:treated_wood_horizontal'})




 //trated wood
 event.custom({
    "type": "pedestals:cobblegen",
    "blockBelow": {
      "item": "immersiveengineering:duroplast"
    },
    "result": {
      "item": "immersiveengineering:treated_wood_horizontal"
    }
  }).id('galaxyorigenes:tratedwood')

   //crushed endstone
  event.custom({
    "type": "pedestals:cobblegen",
    "blockBelow": {
      "item": 'mysticalagradditions:dragon_egg_crux'
    },
    "result": {
      "item": 'exnihilosequentia:crushed_netherrack'
    }
  }).id('galaxyorigenes:crushednetherrack')



  event.custom({
    "type": "pedestals:cobblegen",
    "blockBelow": {
      "item": 'mysticalagradditions:nether_star_crux'
    },
    "result": {
      "item": 'exnihilosequentia:crushed_end_stone'
    }
  }).id('galaxyorigenes:crushedendstone')


   event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:coal_block"
      },
      "result": {
        "item": "minecraft:blackstone"
      }
    }).id('galaxyorigenes:blackstone')

        event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "farmersdelight:organic_compost"
      },
      "result": {
        "item": "minecraft:dirt"
      }
    }).id('galaxyorigenes:compostdirt')

            event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:end_stone_bricks"
      },
      "result": {
        "item": "minecraft:end_stone"
      }
    }).id('galaxyorigenes:endstone')

      event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "farmersdelight:rich_soil"
      },
      "result": {
        "item": "minecraft:dirt"
      }
    }).id('galaxyorigenes:richdirt')

  

              event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:end_stone_bricks"
      },
      "result": {
        "item": "minecraft:end_stone"
      }
    }).id('galaxyorigenes:endstone')

      event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:chiseled_polished_blackstone"
      },
      "result": {
        "item": "forbidden_arcanus:darkstone"
      }
    }).id('galaxyorigenes:darkstonforb')





})

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





})
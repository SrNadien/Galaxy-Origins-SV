ServerEvents.recipes(e=> {
    e.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
    e.remove({ output: 'ad_astra:nasa_workbenc'})
  
    //oil is oil
    e.custom({
        type: "ad_astra:fuel_conversion",
        input: "#forge:crude_oil",
        output: "ad_astra:fuel",
        conversion_ratio: 1.0,
    }).id('galaxtorigenes:fueladastra')



  e.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
          "#": {
            "tag": "thermal_extra:dragonsteel_plate"
          },
          "B": {
            "tag": "mysticalagradditions:insanium_block"
          },
          "C": {
            "item": "extendedcrafting:crafting_core"
          },
          "L": {
            "item": "pneumaticcraft:capacitor"
          },
          "R": {
            "item": "industrialforegoing:machine_frame_supreme"
          },
          "T": {
            "item": "reliquary:interdiction_torch"
          }
        },
        "pattern": [
          "TLT",
          "#C#",
          "RBR"
        ],
        "result": {
          "item": "ad_astra:nasa_workbench"
        }
      }).id('galaxtorigenes:mesadelanasa')
  
       
})

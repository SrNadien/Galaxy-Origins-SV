ServerEvents.recipes(event => {





    //eliminadas
    event.remove({ output:'enchantinginfuser:enchanting_infuser' })
    event.remove({ output:'enchantinginfuser:advanced_enchanting_infuser' })



    //infusor de encantamientos tier 1
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
          "item": "minecraft:enchanting_table"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 30,
        "ritual_dummy": {
          "item": "occultism:ritual_dummy/craft_storage_remote"
        },
        "ingredients": [
          {
            "item": "kubejs:enchanted_mechanism"
          },
          {
            "item": "thermalendergy:endergy_upgrade_3"
          },
          {
            "item": "kubejs:enchanted_mechanism"
          },
          {
            "item": "thermalendergy:endergy_upgrade_3"
          },
          {
            "item": "advancednetherite:netherite_diamond_ingot"
          },
          {
            "item": "advancednetherite:netherite_diamond_ingot"
          },
          {
            "item": "advancednetherite:netherite_diamond_ingot"
          },
          {
            "item": "advancednetherite:netherite_diamond_ingot"
          }
          
        ],
        "result": {
          "item": "enchantinginfuser:enchanting_infuser"
        }
    }).id('galaxtorigenes:infusortieruno')




    //infusor avanzado tier 2
    event.custom({
    "type": "occultism:ritual",
    "ritual_type": "occultism:craft",
    "activation_item": {
      "item": "enchantinginfuser:enchanting_infuser"
    },
    "pentacle_id": "occultism:craft_djinni",
    "duration": 30,
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/craft_storage_remote"
    },
    "ingredients": [
      {
        "item": "kubejs:enchanted_mechanism"
      },
      {
        "item": "thermalendergy:endergy_upgrade_3"
      },
      {
        "item": "kubejs:enchanted_mechanism"
      },
      {
        "item": "thermalendergy:endergy_upgrade_3"
      },
      {
        "item": "advancednetherite:netherite_emerald_ingot"
      },
      {
        "item": "advancednetherite:netherite_emerald_ingot"
      },
      {
        "item": "advancednetherite:netherite_emerald_ingot"
      },
      {
        "item": "advancednetherite:netherite_emerald_ingot"
      },
      {
        "item": "create:experience_block"
      },
      {
        "item": "create:experience_block"
      },
      {
        "item": "occultism:afrit_essence"
      },
      {
        "item": "occultism:afrit_essence"
      }
      
    ],
    "result": {
      "item": "enchantinginfuser:advanced_enchanting_infuser"
    }
}).id('galaxtorigenes:infusortierdos')
})

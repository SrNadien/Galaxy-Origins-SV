ServerEvents.recipes(event => {
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    A    ',
      '   AJA   ',
      'AAAJFJAAA',
      'AJXCDESJA',
      ' AMBIHMA ',
      '  AKGLA  ',
      ' AJTAWJA ',
      'AJJA AJJA',
      'AAA   AAA'
    ],
    key: {
      A: Ingredient.of('kubejs:piglich_heart_block'),
      B: Ingredient.of('kubejs:transmisor'),
      C: Ingredient.of('kubejs:alma'),
      D: Ingredient.of('kubejs:brujulamaldita'),
      E: Ingredient.of('kubejs:blackhole'),
      F: Ingredient.of('kubejs:catalizadordeoblivion'),
      G: Ingredient.of('kubejs:calavera'),
      H: Ingredient.of('kubejs:semilla'),
      I: Ingredient.of('kubejs:patricio'),
      J: Ingredient.of('allthemodium:unobtainium_vibranium_alloy_block'),
      S: Ingredient.of('kubejs:doll'),
      X: Ingredient.of('kubejs:miniportal'),
      T: Ingredient.of('kubejs:minireactor'),
      W: Ingredient.of('kubejs:enchanted_mechanism'),
      K: Ingredient.of('kubejs:combustible'),
      L: Ingredient.of('kubejs:starnugget'),
      M: 'extendedcrafting:nether_star_block'
    },
    result: Ingredient.of('kubejs:star'),
    acceptMirrored: false
  })
  
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    S    ',
      '   SSS   ',
      'SSSSSSSSS',
      'SSSSSSSSS',
      ' SSSPSSS ',
      '  SSSSS  ',
      ' SSSSSSS ',
      'SSSS SSSS',
      'SSS   SSS'
    ],
    key: {
      S: Ingredient.of('kubejs:starnugget').toJson(),
      P: Ingredient.of('kubejs:patricio').toJson(),
    },
    result: Ingredient.of('kubejs:star').toJson(),
    acceptMirrored: false
  })
})

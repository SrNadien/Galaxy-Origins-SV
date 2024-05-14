ServerEvents.recipes(event => {
    function addRecipeRockGen(adjacent,below,out,id) {
        let recipe =  {
            "type": "thermal:rock_gen",
            "adjacent":adjacent,
            "result": Item.of(out)
        }
        if (below != '') {
            recipe.below = below
        }
        event.custom(recipe).id(id)
    }
    addRecipeRockGen('minecraft:water','minecraft:polished_diorite','minecraft:diorite','kubejs:rock_gen/rock_gen_diorite')
    addRecipeRockGen('minecraft:water','minecraft:polished_andesite','minecraft:andesite','kubejs:rock_gen/rock_gen_andesite')
    addRecipeRockGen('minecraft:water','minecraft:polished_granite','minecraft:granite','kubejs:rock_gen/rock_gen_granite')
    addRecipeRockGen('minecraft:water','minecraft:bone_block','minecraft:calcite','kubejs:rock_gen/rock_gen_calcite')
	
	//multiverso press



    //indusction smelter
    
   

})
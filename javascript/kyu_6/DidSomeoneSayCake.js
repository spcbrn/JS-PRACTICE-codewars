
//URL: https://www.codewars.com/kata/did-someone-say-cake
//kyu: 6


const cake = (k, v) => {
    let recipe = {'caster sugar': 160, 'butter': 170, 'eggs': 3, 'self-raising flour': 115, 'cocoa powder': 55};
    let ratio = (v/recipe[k]).toFixed(6)
    for (key in recipe) {
        if (key === k) {
            recipe[key] = v.toString() + 'g';
        } else {
            recipe[key] = ((recipe[key]*ratio).toFixed(1)*1).toString() + 'g'
        }
        if (key === 'eggs') {
            recipe[key] = recipe[key].substr(0, recipe[key].length-1)*1
        }
    }
    return recipe;
}



console.log(cake('butter',55), {'caster sugar': '51.8g', butter: '55g', eggs: 1, 'self-raising flour': '37.2g', 'cocoa powder': '17.8g'});
console.log(cake('cocoa powder',100.5),{'caster sugar': '292.4g', butter: '310.6g', eggs: 5.5, 'self-raising flour': '210.1g', 'cocoa powder': '100.5g'});
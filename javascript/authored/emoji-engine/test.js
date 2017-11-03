const basic_set = [
    'Hey there [[f9.smiley]], I noticed you play the cowbell too!! [[f9.cool]]',
    'Hi [[f9.smile]], you make me smiley [[f9.heart]].',
    'I like your style [[f9.catface]].',
    'Thursday sounds great! [[f9.sohappy]][[f9.sohappy]][[f9.sohappy]]'
]
  
const basic_solved = [
    'Hey there =), I noticed you play the cowbell too!! B)',
    'Hi :), you make me smiley <3.',
    'I like your style :3.',
    'Thursday sounds great! XDXDXD'
]

const final_set = [
    'Omg [[f9.angry]]!  I can\'t believe he said that!',
    'I always knew I\'d meet a mormon girl with good values [[f9.smiley]][[f9.heart]].',
    'omg fr?  taht\'s f-ed up [[f9.angry]] sorry that happened [[f9.slant]]',
    'wh47 y0u kn0w \'b0u7 1337 3m0j15? [[f9.catface]][[f9.catface]][[f9.catface]][[f9.wink]]',
    '[[f9.wink]][[f9.wink]][[f9.tongue]][[f9.surprised]][[f9.dance1]]',
    'We should grab a coffee some time [[f9.smile]]!',
    'I feel dazed and smiley and angry and sad [[f9.grin]]!!  [[f9.wink]]',
    'Sometimes, I feel like my heart\'s in a box like [[[f9.heart]]], you know?  But it\'s cool [[f9.cool]].',
    'LOL, my coworkers be all in their cubicles like [[[f9.dazed]]] [[[f9.angry]]] [[[f9.slant]]] [[[f9.cool]]] [[[f9.sad]]] [[[f9.unimpressed]]]...',
    'Sweet dreams [[f9.kissing]] [[f9.smiley]].'
]
  
const final_solved = [
    'Omg >:|!  I can\'t believe he said that!',
    'I always knew I\'d meet a mormon girl with good values =)<3.',
    'omg fr?  taht\'s f-ed up >:| sorry that happened :/',
    'wh47 y0u kn0w \'b0u7 1337 3m0j15? :3:3:3;)',
    ';);):P:O<(^.^<)',
    'We should grab a coffee some time :)!',
    'I feel dazed and smiley and angry and sad :D!!  ;)',
    'Sometimes, I feel like my heart\'s in a box like [<3], you know?  But it\'s cool B).',
    'LOL, my coworkers be all in their cubicles like [*_*] [>:|] [:/] [B)] [:(] [:|]...',
    'Sweet dreams ^.^ =).'  
]

const codes = [
    '[[f9.smile]]',
    '[[f9.grin]]',
    '[[f9.smiley]]',
    '[[f9.sohappy]]',
    '[[f9.tongue]]',
    '[[f9.wink]]',
    '[[f9.sad]]',
    '[[f9.slant]]',
    '[[f9.surprised]]',
    '[[f9.catface]]',
    '[[f9.cool]]',
    '[[f9.unimpressed]]',
    '[[f9.kissing]]',
    '[[f9.dazed]]',
    '[[f9.dance1]]',
    '[[f9.dance2]]',
    '[[f9.angry]]',
    '[[f9.heart]]'
]

const words = [
    'Hello',
    'hey',
    'chris',
    'dinner',
    'what\'s',
    'technically',
    'angry',
    ', in a box',
    'then she said',
    'seriously, tho',
    'he was not bald!',
    'truly random',
    'clothing',
    'Willy Wonka',
    'artiface...'
]

const genRandom = () => {
    let output = [];
    for (let i=0; i<70; i++) {
        let curr = '';
        for (let j=0; j<5; j++) {
            let codeIdx = Math.floor(Math.random() * (codes.length - 1));
            let wordIdx = Math.floor(Math.random() * (words.length - 1));
            curr += codes[codeIdx] + words[wordIdx];
        }
        output.push(curr)
    }
    return output;
}
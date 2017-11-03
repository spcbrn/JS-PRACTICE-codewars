
/*

:) [[f9.smile]]
:D [[f9.grin]]
=) [[f9.smiley]]
XD [[f9.sohappy]]
:P [[f9.tongue]]
^.^ [[f9.kissing]]
;) [[f9.wink]]
:( [[f9.sad]]
:/ [[f9.slant]]
:O [[f9.surprised]]
<3 [[f9.heart]]
:3 [[f9.catface]]
B) [[f9.cool]]
:| [[f9.unimpressed]]
<(^.^<) [[f9.dance1]]
(>^.^)> [[f9.dance2]]
*_* [[f9.dazed]]

*/



const insert = (s) => {
    let codex = {
        '[[f9.smile]]': ':)',
        '[[f9.grin]]': ':D',
        '[[f9.smiley]]' : '=)',
        '[[f9.sohappy]]': 'XD',
        '[[f9.tongue]]': ':P',
        '[[f9.wink]]': ';)',
        '[[f9.sad]]': ':(',
        '[[f9.slant]]': ':/',
        '[[f9.surprised]]': ':O',
        '[[f9.catface]]': ':3',
        '[[f9.cool]]': 'B)',
        '[[f9.unimpressed]]': ':|',
        '[[f9.kissing]]': '^.^',
        '[[f9.dazed]]': '*_*',
        '[[f9.dance1]]': '<(^.^<)',
        '[[f9.dance2]]': '(>^.^)>',
        '[[f9.angry]]': '>:|',
        '[[f9.heart]]': '<3'
    }
    
    
    const eReplace = (codex, input) => {
        let output = input;
        for (let key in codex) {
            output = output.replace(key, codex[key])
            if (output.includes(key)) {
                return eReplace(codex, output)
            }
        }
        return output;
    }
    return eReplace(codex, s)
}

console.log(insert('LOL, my coworkers be all in their cubicles like [[[f9.dazed]]] [[[f9.angry]]] [[[f9.cool]]] [[[f9.sad]]] [[[f9.unimpressed]]]...'))





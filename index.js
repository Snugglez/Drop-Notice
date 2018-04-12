const config = require('./config.json');
const Command = require('command');
module.exports = function dropnotice(dispatch) {
const command = Command(dispatch)
let enabled = config.toggle;

command.add('dropnotice', () => {
enabled = !enabled
command.message(`Drop-Notice is now ${enabled ? 'enabled' : 'disabled'}.`)})

dispatch.hook('S_SPAWN_DROPITEM', 6, (event) => {
if(!enabled) return;
if(event.item === 369)
command.message('Diamond drop')
else if(event.item === 98512)
command.message('Pansophic Ash drop')
else if(event.item === 98513)
command.message('Elemental Essence')
else if(event.item === 98281)
command.message('Superior Etching Box drop')
else if(event.item === 98521)
command.message('Otherworldly Shard drop')
else if(event.item === 98532)
command.message('Stormcry Equipment Chest')
else if(event.item === 98531)
command.message('Frostmetal Equipment Chest')
})
}


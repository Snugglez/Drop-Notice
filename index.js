const config = require('./config.json');
module.exports = function dropnotice(d) {
let enabled = config.toggle;

d.command.add("dropnotice", {
$default() {
enabled = !enabled
d.command.message(`Drop-Notice is now ${enabled ? 'enabled' : 'disabled'}.`)}})
d.hook('S_SPAWN_DROPITEM', 6, (event) => {
if(!enabled) return;
if(event.item === 369)
d.command.message('Diamond drop')
else if(event.item === 98512)
d.command.message('Pansophic Ash drop')
else if(event.item === 98513)
d.command.message('Elemental Essence')
else if(event.item === 98281)
d.command.message('Superior Etching Box drop')
else if(event.item === 98521)
d.command.message('Otherworldly Shard drop')
else if(event.item === 98532)
d.command.message('Stormcry Equipment Chest')
else if(event.item === 98531)
d.command.message('Frostmetal Equipment Chest')
})
}


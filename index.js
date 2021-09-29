const colleagues = [
    {name: "Croft", firstName: "Lara"},
    {name: "Simpson", firstName: "Lisa"},
    {name: "Severus", firstName: "Rogue"},
    {name: "Anakin", firstName: "Skywalker"}
]

const chalk = require('chalk');

for (let i = 0; i < colleagues.length; i++) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log(chalk.rgb(r, g, b).bold(colleagues[i].name + colleagues[i].firstName));
}
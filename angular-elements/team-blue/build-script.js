const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/team-blue/runtime.js',
        './dist/team-blue/polyfills.js',
        './dist/team-blue/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/blue.js')
    console.info('Elements created successfully!')

})()
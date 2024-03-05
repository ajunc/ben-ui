const { VueLoaderPlugin } = require('vue-loader')
const pathM = require('path')
const glob = require('glob')
const list = {}
async function makeList(dirPath, listObj) {
    const files = glob.sync(`${dirPath}/**/index.js`)
    console.log('files:', files)
    for(let file of files) {
        const component = file.split(/[/.]/)[2]
        listObj[component] = `./${file}`
    }
    console.log('list,', list)
}
makeList('components/lib', list)
module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js',
        path: pathM.resolve(__dirname, 'dist'),
        library: 'bui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
}
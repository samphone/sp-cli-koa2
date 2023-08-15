const path = require('path')
const simpleGit = require('simple-git')
const seq = require('../seq')
const { isDev } = require('../../../utils/env')

const changeFileList = ['src/models/', 'src/db/seq/']

function loadAllModels() {
    // 加载挂在seq models
    require('require-all')({
        dirname: path.resolve('src', 'models'),
        filter: /\.js$/,
        excludeDirs: /^.(git|svn)$/,
        recursive: true,
    })
}

async function syncDb() {
    let needSyncDb = true

    if (isDev) {
        const git = simpleGit()
        const { modified, not_added: nodeAdded, created, deleted, renamed } = await git.status()
        const fileChanged = modified
            .concat(nodeAdded)
            .concat(created)
            .concat(deleted)
            .concat(renamed)

        console.log(fileChanged)
        if (fileChanged.length) {
            needSyncDb = fileChanged.some(f => changeFileList.some(cf => f.indexOf(cf) > -1))
        } else {
            needSyncDb = false
        }
    }
    if (needSyncDb) {
        loadAllModels()
        await seq.sync({ alter: true })
    }
}

module.exports = syncDb

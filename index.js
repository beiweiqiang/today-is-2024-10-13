const axios = require('axios');

const getDay = function () {
    const d = new Date();
    return `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`
};

console.log('index.js line:8 ->', getDay());

const opt = {
    url: 'https://api.github.com' + '/repos/' + process.argv[3],
    method: 'patch',
    headers: {
        'Authorization': 'token ' + process.argv[2]
    },
    data: {
        name: `today-is-${getDay()}`
    }
};

axios.request(opt)
    .then(res => {
        console.log('index.js line:18 ->', res);
    })
    .catch(err => {
        console.error('index.js line:21 ->', err);
    });


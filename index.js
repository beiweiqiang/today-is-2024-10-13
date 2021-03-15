const axios = require('axios');

const getLastDay = function () {

};

const opt = {
    url: 'https://api.github.com' + '/repos/beiweiqiang/today-is-2021-03-17',
    method: 'patch',
    headers: {
        'Authorization': 'token ' + process.argv[2]
    },
    data: {
        name: 'today-is-2021-03-15'
    }
};

axios.request(opt)
    .then(res => {
        console.log('index.js line:18 ->', res);
    })
    .catch(err => {
        console.error('index.js line:21 ->', err);
    });


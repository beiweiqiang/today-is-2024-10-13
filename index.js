const axios = require('axios');

const getLastDay = function () {

};

const opt = {
    host: 'https://api.github.com',
    path: '/repos/beiweiqiang/today-is-' + '2021-03-17',
    method: 'patch',
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

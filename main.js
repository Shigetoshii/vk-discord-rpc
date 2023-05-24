const request = require('request');
        fetch = require('node-fetch');
        client = require('discord-rich-presence')('734648705910833175');
    const token_vk = '';
    let last_title = 0;
    function api(method, paramets, callback) {
    let url_api = "https://api.vk.com/method/" + method + "?access_token=" + token_vk + "&v=5.103";
    request.post(url_api, {
    form: paramets
    }, (err, body, httpResponse) => {
    
    return callback(JSON.parse(httpResponse))

    })
    };
     function reText() {
     api('status.get',{user_id:(ID)},function (res) {
     console.log(res);
     if (res.response.audio.title != last_title) {
     //var minutes = Math.floor(timestamp / 60);
     title = res.response.audio.title
     console.log(title);
     artist = res.response.audio.artist
     time = res.response.audio.duration
     last_title=res.response.audio.title
     console.log(time);
     client.updatePresence({
        state: title,
        details: artist,
        largeImageKey: 'vk_logo',
        instance: true,
    }); }

})

}
setInterval(reText,10000); 
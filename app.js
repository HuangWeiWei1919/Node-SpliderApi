/*
 * @Author: ecitlm 
 * @Date: 2017-12-06 16:20:03 
 * @Last Modified by: ecitlm
 * @Last Modified time: 2017-12-25 14:17:03
 */
const express = require('express')
const http = require('http')
const app = express()
const router = express.Router()
    // const routerConfig=require('./config/routes')
const filter = require('./utils/filter_sign')
    //
var path = require('path')
app.use('/public', express.static('public')); // 设置静态资源地址
app.use('/docs', express.static('docs')); // 设置静态资源地址
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    next()
        //   if (filter.simpleFilter(req, res)) {
        //   }
})

const index = require('./routes/web/index')
const photo_type = require('./routes/api/photo/photo_type')
const photo_list = require('./routes/api/photo/photo_list')
const photo_view = require('./routes/api/photo/photo_view')
const huaban = require('./routes/api/photo/huaban')
const jandan = require('./routes/api/photo/jandan')
    // 音樂
const plist = require('./routes/api/music/plist')
const plist_songs = require('./routes/api/music/plist_songs')
const rank_list = require('./routes/api/music/rank_list')
const rank_list_info = require('./routes/api/music/rank_list_info')
const song_info = require('./routes/api/music/song_info')
const song_lrc = require('./routes/api/music/song_lrc')
const new_songs = require('./routes/api/music/new_songs')
const singer_classify = require('./routes/api/music/singer_classify')
const singer_list = require('./routes/api/music/singer_list')
const singer_info = require('./routes/api/music/singer_info')
const music_search = require('./routes/api/music/search')
const web_frame = require('./routes/api/it/web_frame')
const daily_list = require('./routes/api/it/daily_list')
const daily_info = require('./routes/api/it/daily_info')
const joke_list = require('./routes/api/joke/joke_list')
const joke_img = require('./routes/api/joke/joke_img')
const joke_photo = require('./routes/api/joke/joke_photo')
const news_list = require('./routes/api/news/news_list')
const video_list = require('./routes/api/news/video_list')
const news_detail = require('./routes/api/news/news_detail')
const job_list = require('./routes/api/job/job_list')
const job_info = require("./routes/api/job/job_info");
app.use('/', index)
app.use('/api/photo_type', photo_type)
app.use('/api/huaban', huaban)
app.use('/api/photo_list', photo_list)
app.use('/api/photo_view', photo_view)
app.use('/api/rank_list', rank_list)
app.use('/api/rank_list_info', rank_list_info)
app.use('/api/song_info', song_info)
app.use('/api/song_lrc', song_lrc)
app.use('/api/plist', plist)
app.use('/api/plist_songs', plist_songs)
app.use('/api/new_songs', new_songs)
app.use('/api/singer_classify', singer_classify)
app.use('/api/singer_list', singer_list)
app.use('/api/singer_info', singer_info)
app.use('/api/music_search', music_search)
app.use('/api/web_frame', web_frame)
app.use('/api/daily_list', daily_list)
app.use('/api/daily_info', daily_info)
app.use('/api/joke_list', joke_list)
app.use('/api/joke_img', joke_img)
app.use('/api/joke_photo', joke_photo)
app.use('/api/jandan', jandan)
app.use('/api/news_list', news_list)
app.use('/api/video_list', video_list)
app.use('/api/news_detail', news_detail)
app.use('/api/job_list', job_list)
app.use("/api/job_info", job_info);
// web
const web_daily = require('./routes/web/daily_list')
const web_daily_info = require('./routes/web/daily_info')
const web_photo = require('./routes/web/photo')
const web_jandan = require('./routes/web/jandan')
app.use('/web/daily_list', web_daily)
app.use('/web/daily_info', web_daily_info)
app.use('/web/photo', web_photo)
app.use('/web/jandan', web_jandan)
app.use(router)
app.listen(3001)
console.log('app start success port:3001')

module.exports = app
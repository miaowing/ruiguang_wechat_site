/**
 * Created by zhaofeng on 16/5/31.
 */

/**
 * 首页上边图片地址
 * @type {string}
 */
export let img = './images/ruiguang_all.png';

/**
 * 首页下边图片地址
 * @type {string}
 */
export let bottomImg = './images/home_bg_3.png';

export let logoImg = './images/logo.png';

/*
 <div class="left">
 <div class="item item-left">
 <a href="./description.html">
 <img src="./images/ruiguang_all_2.png">公司介绍</a>
 </a>
 </div>
 </div>
 <div class="right">
 <div class="item item-right"><a href="./course.html">发展历程</a></div>
 <div class="sub-item">
 <div class="item item-right"><a href="./honor.html">荣誉资质</a></div>
 <div class="item item-left"><a href="./device.html">装备设备</a></div>
 </div>
 </div>
 */
export let menu = {
    left: {
        name: '公司介绍',
        img: './images/ruiguang_all_2.png',
        url: './description.html'
    },
    topRight: {
        name: '发展历程',
        img: './images/fazhanlicheng.png',
        url: './course.html'
    },
    bottomRight: {
        name: '荣誉资质',
        img: './images/home_rongyu.png',
        url: './honor.html'
    },
    bottomLeft: {
        name: '装备设备',
        img: './images/device/baoxingshuici.png',
        url: './device.html'
    }
}
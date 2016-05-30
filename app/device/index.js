/**
 * Created by zhaofeng on 16/5/18.
 */
import Vue from 'vue';
import Template from './template.html';
import Swipe from 'swipe-js';
import {devices} from '../../config/device';

// global style
import '../index.less';

// single style
import './style.less';

new Vue({
    el: '#app',
    template: Template,
    data: {
        message: '走进瑞光,设备装备',
        devices: devices
    },
    ready: function () {
        let swipes = document.querySelectorAll('.slider');
        swipes = [].slice.call(swipes);
        swipes.forEach(swipe => {
            swipe.mySwipe = new Swipe(swipe, {
                startSlide: 0,
                speed: 800,
                auto: 5000,
                continuous: false,
                disableScroll: false,
                stopPropagation: false,
                callback: function (index, elem) {
                    let child = swipe.querySelector('.swipe-wrap'),
                        size = child.children.length;
                    if (size == index + 1) {
                        setTimeout(() => {
                            swipe.mySwipe.slide(0, 800)
                        }, 5000);
                    }
                },
                transitionEnd: function (index, elem) {
                }
            });
        });
    }
});
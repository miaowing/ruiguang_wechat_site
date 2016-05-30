/**
 * Created by zhaofeng on 16/5/18.
 */
import Vue from 'vue';
import Template from './template.html';
import Swipe from 'swipe-js';
import {
    fangrongProduct
} from '../../config/product';

// global style
import '../index.less';

// single style
import './style.less';

new Vue({
    el: '#app',
    template: Template,
    data: {
        message: 'Hello Vue.js!',
        product: fangrongProduct
    },
    ready: function () {
        // window.mySwipe = new Swipe(document.getElementById('slider'), {
        //     startSlide: 2,
        //     speed: 800,
        //     auto: 5000,
        //     continuous: true,
        //     disableScroll: false,
        //     stopPropagation: false,
        //     callback: function (index, elem) {
        //     },
        //     transitionEnd: function (index, elem) {
        //     }
        // });
    }
});
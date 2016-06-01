/**
 * Created by zhaofeng on 16/5/18.
 */
import Vue from 'vue';
import Template from './template.html';

import {img} from '../../config/home';

// global style
import '../index.less';

// single style
import './style.less';

new Vue({
    el: '#app',
    template: Template,
    data: {
        message: 'Hello Vue.js!',
        img: img
    }
})
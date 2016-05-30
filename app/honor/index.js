/**
 * Created by zhaofeng on 16/5/18.
 */
import Vue from 'vue';
import Template from './template.html';
import {honors} from '../../config/honor';

// global style
import '../index.less';

// single style
import './style.less';

new Vue({
    el: '#app',
    template: Template,
    data: {
        message: '走进瑞光,荣誉资质',
        honors: honors
    }
})
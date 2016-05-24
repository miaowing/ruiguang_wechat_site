/**
 * Created by zhaofeng on 16/5/18.
 */
import Vue from 'vue';
import Template from './template.html';

import {markerLabel, markerX, markerY, x, y, zoom} from '../../config/location';

// global style
import '../index.less';

// single style
import './style.less';


new Vue({
    el: '#app',
    template: Template,
    data: {},
    ready: function () {
        let map = new AMap.Map('mapContainer', {
            resizeEnable: true,
            zoom: zoom,
            center: [x, y]

        });

        let marker = new AMap.Marker({
            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [x, y]
        });
        marker.setMap(map);

        //label默认蓝框白底左上角显示，样式className为：amap-marker-label
        marker.setLabel({
            //修改label相对于maker的位置
            offset: new AMap.Pixel(markerX, markerY),
            content: markerLabel
        });
    }
})
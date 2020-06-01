(function ($) {
    $.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    $.fullScreen = function () {
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
            el.mozRequestFullScreen || el.msRequestFullScreen;
        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        } else if (typeof window.ActiveXObject != "undefined") {
            //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    $.exitFullScreen = function () {
        var el = document;
        var cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
            el.mozCancelFullScreen || el.exitFullScreen;
        if (typeof cfs != "undefined" && cfs) {
            cfs.call(el);
        } else if (typeof window.ActiveXObject != "undefined") {
            //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    $.fn.tourHeader = function (options) {
        var el = this;
        var defaults = {};
        var opts = $.extend(defaults, options);

        var html = `<div class="layout-header">
                        <div class="header-name">
                            <Dropdown trigger="click" placement="bottom-start">
                                <template v-for="item in opts.productName">
                                    <a href="javascript:void(0)" class="name" v-if="item.selected">
                                        <Icon type="navicon-round"></Icon>
                                        <span v-text="item.title"></span>
                                    </a>
                                </template>
                                <dropdown-menu slot="list">
                                    <dropdown-item :selected="item.selected" v-for="item in opts.productName">
                                        <div class="item">
                                            <Icon type="record" size="12" color="#5cadff" v-if="item.selected"></Icon>
                                            <h4>
                                                <span v-text="item.title"></span><em v-if="item.label" v-text="item.label"></em>
                                            </h4>
                                            <p v-if="item.desc" v-text="item.desc"></p>
                                        </div>
                                    </dropdown-item>
                                    <dropdown-item divided selected v-if="opts.serviceTel">
                                        <div class="item">
                                            <h4>获取更多服务</h4>
                                            <p v-text="opts.serviceTel"></p>
                                        </div>
                                    </dropdown-item>
                                </dropdown-menu>
                            </Dropdown>
                        </div>
                        <div class="header-search">
                            <auto-complete v-model="searchValue" icon="ios-search" placeholder="搜索" @on-search="search()">
                                <div class="demo-auto-complete-item" v-for="item in searchData">
                                    <div class="demo-auto-complete-group">
                                        <span v-text="item.title"></span>
                                    </div>
                                    <i-option v-for="option in item.children" :value="option.title" :key="option.title">
                                        <span class="demo-auto-complete-title" v-text="option.title"></span>
                                    </i-option>
                                    <a href="javascript:void(0);" class="demo-auto-complete-more">查看所有结果</a>
                                </div>
                            </auto-complete>
                        </div>
                        <div class="header-shortcut" v-if="opts.shortcut">
                            <Dropdown trigger="click">
                                <a href="javascript:void(0)">
                                    <Icon type="plus-circled" size="24" color="#5cadff"></Icon>
                                </a>
                                <dropdown-menu slot="list">
                                    <dropdown-item :divided="item.divided" v-for="item in opts.shortcut">
                                        <div class="item">
                                            <Icon type="map" size="16" color="#80848f"></Icon><span v-text="item.title"></span>
                                        </div>
                                    </dropdown-item>
                                </dropdown-menu>
                            </Dropdown>
                        </div>
                        <div class="header-user" v-if="opts.userSet">
                            <Dropdown trigger="click" placement="bottom-end">
                                <a href="javascript:void(0)">
                                    <Avatar :src="opts.userSet.avatar" />
                                </a>
                                <dropdown-menu slot="list">
                                    <dropdown-item :divided="item.divided" v-for="item in opts.userSet.menu">
                                        <div class="item">
                                            <Icon type="map" size="16" color="#80848f"></Icon><span v-text="item.title"></span>
                                        </div>
                                    </dropdown-item>
                                </dropdown-menu>
                            </Dropdown>
                        </div>
                        <div class="header-subnav">
                            <a href="javascript:void(0);" class="handle" @click="toggleFullScreen()">
                                <Icon v-if="fullScreen" type="arrow-shrink" size="24"></Icon>
                                <Icon v-else type="arrow-expand" size="24"></Icon>
                            </a>
                        </div>
                        <div class="header-subnav">
                            <a href="javascript:void(0);" class="handle">
                                <Icon type="ios-monitor" size="24"></Icon>
                            </a>
                        </div>
                        <div class="header-subnav">
                            <a href="javascript:void(0);" class="handle">
                                <Badge dot>
                                    <Icon type="ios-bell" size="24"></Icon>
                                </Badge>
                            </a>
                        </div>
                        <div class="header-subnav header-tilemenu">
                            <Dropdown trigger="click">
                                <a href="javascript:void(0)" class="handle">
                                    <Icon type="ios-help" size="24"></Icon>
                                </a>
                                <dropdown-menu slot="list">
                                    <div class="box">
                                        <div class="caption">帮助中心</div>
                                        <Row>
                                            <i-col span="12">
                                                <a class="item" href="javascript:void(0);">
                                                    <Icon type="chatboxes" size="36"></Icon>
                                                    <div class="text">联系我们</div>
                                                </a>
                                            </i-col>
                                            <i-col span="12">
                                                <a class="item" href="javascript:void(0);">
                                                    <Icon type="chatboxes" size="36"></Icon>
                                                    <div class="text">联系我们</div>
                                                </a>
                                            </i-col>
                                            <i-col span="12">
                                                <a class="item" href="javascript:void(0);">
                                                    <Badge dot></Badge>
                                                    <Icon type="chatboxes" size="36"></Icon>
                                                    <div class="text">联系我们</div>
                                                </a>
                                            </i-col>
                                            <i-col span="12">
                                                <a class="item" href="javascript:void(0);">
                                                    <Icon type="chatboxes" size="36"></Icon>
                                                    <div class="text">联系我们</div>
                                                </a>
                                            </i-col>
                                        </Row>
                                    </div>
                                </dropdown-menu>
                            </Dropdown>
                        </div>
                        <div class="header-menu" v-if="opts.nav">
                            <i-menu mode="horizontal" :active-name="navActive">
                                <menu-item v-for="(item, index) in opts.nav" :name="'' + index">
                                    <span v-text="item.title" @click="hrefPage(item.href, index)"></span>
                                </menu-item>
                            </i-menu>
                        </div>
                        <div class="header-hotnews">
                            <a href="javascript:void(0);" class="handle">热点动态</a>
                        </div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                navActive: '0',
                fullScreen: false,
                searchValue: '',
                searchData: []
            },
            created: function () {

            },
            mounted: function () {
                // 导航高亮
                var navCode = $.getQueryString('navCode');
                if (navCode) {
                    this.navActive = navCode;
                }
            },
            methods: {
                toggleFullScreen: function () {
                    if (this.fullScreen) {
                        this.fullScreen = false;
                        $.exitFullScreen();
                    } else {
                        this.fullScreen = true;
                        $.fullScreen();
                    }
                },
                search: function () {
                    this.searchData = this.opts.search;
                },
                hrefPage: function (nav, navCode) {
                    if (nav) {
                        window.location.href = '?nav=' + nav + '&navCode=' + navCode;
                    }
                }
            }
        });
    }

    $.fn.tourSideMenu = function (options) {
        var el = this;
        var defaults = {};
        var opts = $.extend(defaults, options);

        var html = `<div class="layout-sidemenu">
                        <div class="search">
                            <i-input icon="ios-search" placeholder="搜索"></i-input>
                        </div>
                        <div class="menu-btn">
                            <i-button type="primary" icon="ios-search">数据观象</i-button>
                        </div>
                        <div class="shadow"></div>
                        <div class="scrollbar">
                            <ul :class="'ivu-menu ivu-menu-light ivu-menu-vertical often-use-menu ' + oftenUseMenuOpen">
                                <li class="ivu-menu-submenu">
                                    <div class="ivu-menu-submenu-title">
                                        <Icon type="ios-paper"></Icon> 常用报告
                                        <i class="setup-icon ivu-icon ivu-icon-gear-b" v-if="!oftenUseMenuOpen" @click="oftenUseMenuToggle()"></i>
                                        <i class="setup-icon ivu-icon ivu-icon-close-circled" v-if="oftenUseMenuOpen" @click="oftenUseMenuToggle()"></i>
                                    </div>
                                    <ul class="ivu-menu">
                                        <li class="ivu-menu-item" v-for="(item, index) in opts.oftenUse" @click="hrefPage(item.href, index)">
                                            <span v-text="item.name"></span>
                                            <Icon type="android-remove-circle" class="remove-icon"></Icon>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <i-menu class="general-menu" :open-names="openMenus" :active-name="menuActive" v-if="opts.general">
                                <Submenu v-for="(item1, index1) in opts.general" :name="'' + index1">
                                    <template slot="title">
                                        <Icon type="ios-paper"></Icon>
                                        <span v-text="item1.sortName"></span>
                                    </template>
                                    <menu-item v-for="(item2, index2) in item1.items" :name="index1 + '-' + index2">
                                        <div class="item-inner" @click="hrefPage(item2.href, index1 + '-' + index2)">
                                            <Badge dot v-if="item2.badge"><span v-text="item2.name"></span></Badge>
                                            <span v-else v-text="item2.name"></span>
                                        </div>
                                    </menu-item>
                                </Submenu>
                            </i-menu>
                        </div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                oftenUseMenuOpen: '',
                openMenus: [],
                menuActive: '0-0'
            },
            created: function () {
                // 打开全部菜单
                for (var i = 0; i < this.opts.general.length; i++) {
                    this.openMenus.push(i.toString());
                }
            },
            mounted: function () {
                $(".scrollbar").niceScroll({
                    cursorcolor: "transparent"
                });

                // 菜单高亮
                var menuCode = $.getQueryString('pageCode');
                if (menuCode) {
                    this.menuActive = menuCode;
                }
            },
            methods: {
                oftenUseMenuToggle: function () {
                    if (this.oftenUseMenuOpen == '') {
                        this.oftenUseMenuOpen = 'opened';
                    } else {
                        this.oftenUseMenuOpen = '';
                    }
                },
                hrefPage: function (page, pageCode) {
                    var nav = $.getQueryString('nav');
                    var navCode = $.getQueryString('navCode');
                    if (page) {
                        window.location.href = '?nav=' + nav + '&navCode=' + navCode + '&page=' + page + '&pageCode=' + pageCode;
                    }
                }
            }
        });
    }

    $.fn.tourFooter = function (options) {
        var el = this;
        var defaults = {};
        var opts = $.extend(defaults, options);

        var html = `<div class="page-footer">
                        <div class="left">
                            <p>
                                <a href="javascript:void(0);">链接1</a>
                                <a href="javascript:void(0);">链接2</a>
                                <a href="javascript:void(0);">链接3</a>
                                <a href="javascript:void(0);">链接4</a>
                                <a href="javascript:void(0);">链接5</a>
                                <a href="javascript:void(0);">链接6</a>
                                <a href="javascript:void(0);">链接7</a>
                                <a href="javascript:void(0);">链接8</a>
                                <a href="javascript:void(0);">链接9</a>
                            </p>
                            <p>
                                <span>客服电话：400-870-1230</span>
                                <span>客服QQ：1289838833</span>
                            </p>
                            <p>客服邮箱：support@travel189.com</p>
                        </div>
                        <div class="right">
                            <p>2011-2017 © Travel189.com</p>
                            <p>
                                <span>京ICP备12005794号</span>
                                <span>京ICP证130311号</span>
                                <span>京公网安备11010102001221号</span>
                            </p>
                        </div>
                        <back-top :right="8" :bottom="50">
                            <div class="page-back-top">
                                <Icon type="ios-arrow-up"></Icon>
                            </div>
                        </back-top>
                        <div class="ivu-back-top custom-service">
                            <div class="page-back-top">
                                <Icon type="person"></Icon>
                            </div>
                        </div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts
            },
            created: function () {

            },
            mounted: function () {

            },
            methods: {}
        });
    }

    $.fn.tourAlert = function (options) {
        var el = this;
        var defaults = {
            type: 'info',
            showIcon: true,
            closable: true
        };
        var opts = $.extend(defaults, options);

        var html = `<Alert v-if="opts.desc" :type="opts.type" :show-icon="opts.showIcon" :closable="opts.closable">
                        <template v-if="opts.title">
                            <span v-text="opts.title"></span>
                            <template slot="desc">
                                <span v-text="opts.desc"></span>
                                <a v-if="opts.href" class="alert-message-link" :href="opts.href">查看详情</a>
                            </template>
                        </template>
                        <template v-else>
                            <span v-text="opts.desc"></span>
                            <a v-if="opts.href" class="alert-message-link" :href="opts.href">查看详情</a>
                        </template>
                    </Alert>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts
            },
            created: function () {

            },
            mounted: function () {

            },
            methods: {}
        });
    }

    $.fn.tourChartPanel = function (options) {
        var el = this;
        var defaults = {
            info: true,
            updateData: function (data) {
            }
        };
        var opts = $.extend(defaults, options);

        var html = `<div class="data-panel">
                        <div class="info" v-if="opts.info">
                            <div class="panel-header">
                                <div class="operate">
                                    <a v-if="opts.viewHref" href="javascript:void(0);">查看详情</a>
                                    <a href="javascript:void(0);" :class="tableShow ? 'btn' : 'btn active'" @click="chartTableToggle(false)">
                                        <Icon type="stats-bars"></Icon>
                                    </a>
                                    <a href="javascript:void(0);" :class="tableShow ? 'btn active' : 'btn'" @click="chartTableToggle(true)">
                                        <Icon type="ios-grid-view"></Icon>
                                    </a>
                                </div>
                                <h3 v-text="opts.chartTitle"></h3>
                            </div>
                            <div class="panel-tabs" v-if="opts.datas.length > 1">
                                <a v-for="(item, index) in opts.datas" :class="chartDataIndex == index ? 'tab active' : 'tab'" href="javascript:void(0);" v-text="item.label" @click="tabChange(index)"></a>
                            </div>
                            <div class="key-value">
                                <span v-for="item in opts.datas[chartDataIndex].keyValue" v-text="item.key + '：' + item.value"></span>
                            </div>
                        </div>
                        <div class="chart-box" :style="opts.datas.length > 1 ? '' : 'padding-top: 50px;'">
                            <div class="chart" :id="opts.chartId"></div>
                        </div>
                        <div class="table-box" :style="opts.datas.length > 1 ? '' : 'top: 50px;'">
                            <i-table size="small"  :columns="opts.datas[chartDataIndex].columns" :data="opts.datas[chartDataIndex].data"></i-table>
                        </div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                tableShow: false,
                chartDataIndex: 0,
                myChart: {},
                chartOption: {}
            },
            created: function () {

            },
            mounted: function () {
                $(el.selector).find(".ivu-table-body").niceScroll({
                    cursorcolor: "transparent"
                });

                var that = this;
                that.myChart = echarts.init(document.getElementById(that.opts.chartId), theme);
                that.tabChange(0);
                $(window).resize(function () {
                    that.myChart.resize();
                });

                that.opts.updateData = function (data) {
                    that.opts.datas = data;
                    that.tabChange(0);
                }
            },
            methods: {
                tabChange: function (index) {
                    var that = this;
                    that.chartDataIndex = index;
                    that.myChart.clear();

                    if (that.opts.datas[index].type == 'map') { // 地图
                        $.get('res/lib/echarts/map/' + that.opts.datas[index].mapType + '.json', function (mapJson) {
                            echarts.registerMap('mapType', mapJson);
                            that.chartOption = {
                                tooltip: {
                                    trigger: 'item'
                                },
                                legend: {
                                    data: that.opts.datas[index].columns.map(function (item, idx) {
                                        if (idx > 0) {
                                            return item.title;
                                        }
                                    })
                                },
                                visualMap: {
                                    min: 0,
                                    max: that.mapMaxData(),
                                    text: ['高', '低']
                                },
                                series: that.mapData()
                            };
                            if (that.opts.datas[index].isAQI) {
                                that.chartOption.visualMap = {
                                    type: 'piecewise',
                                    left: 15,
                                    bottom: 10,
                                    pieces: [{
                                        min: 0, max: 50, label: '优', color: '#009966'
                                    }, {
                                        min: 51, max: 100, label: '良', color: '#ffde33'
                                    }, {
                                        min: 101, max: 150, label: '轻度污染', color: '#ff9933'
                                    }, {
                                        min: 151, max: 200, label: '中度污染', color: '#cc0033'
                                    }, {
                                        min: 201, max: 300, label: '重度污染', color: '#660099'
                                    }, {
                                        min: 300, label: '严重污染', color: '#7e0023'
                                    }],
                                    calculable: true,
                                    orient: 'vertical',
                                    itemWidth: 20,
                                    itemHeight: 14
                                }
                            }
                            that.myChart.setOption(that.chartOption);
                        });
                    } else if (that.opts.datas[index].type == 'pie') {
                        that.chartOption = {
                            legend: {
                                data: that.opts.datas[index].columns.map(function (item, idx) {
                                    if (idx > 0) {
                                        return item.title;
                                    }
                                })
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}: ({d}%)"
                            },
                            series: that.pieData()
                        };
                        that.myChart.setOption(that.chartOption);
                    } else if (that.opts.datas[index].type == 'wordCloud') {
                        that.chartOption = {
                            legend: {
                                data: that.opts.datas[index].columns.map(function (item, idx) {
                                    if (idx > 0) {
                                        return item.title;
                                    }
                                })
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}: ({d}%)"
                            },
                            series: that.wordCloudData()
                        };
                        that.myChart.setOption(that.chartOption);
                    } else { // 柱状图或折线图
                        that.chartOption = {
                            legend: {
                                data: that.opts.datas[index].columns.map(function (item, idx) {
                                    if (idx > 0) {
                                        return item.title;
                                    }
                                })
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                data: that.opts.datas[index].data.map(function (item) {
                                    return item[that.opts.datas[index].columns[0].key];
                                })
                            },
                            yAxis: {
                                type: 'value',
                                boundaryGap: true,
                                axisLabel: {
                                    inside: false,
                                    showMinLabel: true
                                }
                            },
                            series: that.barLineData()
                        };
                        that.myChart.setOption(that.chartOption);
                    }
                },
                wordCloudData: function () {
                    var itemData = this.opts.datas[this.chartDataIndex];
                    var array = [];
                    array.push({
                        type: 'wordCloud',
                        left: 'center',
                        top: 'center',
                        width: '100%',
                        height: '100%',
                        gridSize: 10,
                        rotationRange: [-90, 90],
                        data: itemData.data
                    });
                    return array;
                },
                pieData: function () {
                    var itemData = this.opts.datas[this.chartDataIndex];
                    var array = [];

                    array.push({
                        type: 'pie',
                        radius: ['42%', '56%'],
                        label: {
                            normal: {
                                formatter: "{b}\n({d}%)"
                            }
                        },
                        avoidLabelOverlap: false,
                        data: itemData.data
                    });
                    return array;
                },
                barLineData: function () {
                    var itemData = this.opts.datas[this.chartDataIndex];
                    var array = [];

                    itemData.columns.map(function (item, index) {
                        if (index > 0) {
                            array.push({
                                name: item.title,
                                type: item.chartType,
                                data: itemData.data.map(function (value) {
                                    return value[item.key]
                                })
                            });
                        }
                    });
                    return array;
                },
                mapData: function () {
                    var itemData = this.opts.datas[this.chartDataIndex];
                    var array = [];

                    itemData.columns.map(function (item, index) {
                        if (index > 0) {
                            array.push({
                                name: item.title,
                                type: itemData.type,
                                mapType: 'mapType',
                                zoom: 1.1,
                                roam: 'move',
                                data: itemData.data.map(function (value) {
                                    return {name: value.province, value: value[item.key]}
                                })
                            });
                        }
                    });
                    return array;
                },
                mapMaxData: function () {
                    var itemData = this.opts.datas[this.chartDataIndex];
                    var array = [];
                    var max = 0;

                    itemData.columns.map(function (item, index) {
                        if (index > 0) {
                            array.push(itemData.data.map(function (value) {
                                return value[item.key]
                            }));
                        }
                    });
                    array.map(function (item) {
                        max += Math.max.apply(Math, item);
                    });
                    return max;
                },
                chartTableToggle: function (opt) {
                    if (opt) {
                        this.tableShow = true;
                        $(el.selector).find('.table-box').css({'z-index': 5});
                    } else {
                        this.tableShow = false;
                        $(el.selector).find('.table-box').css({'z-index': -3});
                    }
                }
            }
        });
        return opts;
    }

    $.fn.tourMapPanel = function (options) {
        var el = this;
        var defaults = {
            mapId: ''
        };
        var opts = $.extend(defaults, options);

        var html = `<div class="data-panel">
                        <div class="info map-info">
                            <div class="panel-header">
                                <div class="operate">
                                    <a v-if="opts.viewHref" href="javascript:void(0);">查看详情</a>
                                </div>
                                <h3 v-text="opts.mapTitle"></h3>
                            </div>
                            <div class="panel-tabs" v-if="opts.datas.length > 1">
                                <a v-for="(item, index) in opts.datas" :class="mapDataIndex == index ? 'tab active' : 'tab'" href="javascript:void(0);" v-text="item.label" @click="tabChange(index)"></a>
                            </div>
                            <div class="key-value">
                                <span v-for="item in opts.datas[mapDataIndex].keyValue" v-text="item.key + '：' + item.value"></span>
                            </div>
                        </div>
                        <div class="all-map" :id="opts.mapId"></div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                mapDataIndex: 0,
                map: '',
                heatmapOverlay: ''
            },
            created: function () {

            },
            mounted: function () {
                this.map = new BMap.Map(this.opts.mapId, {enableMapClick: false});
                this.map.centerAndZoom(new BMap.Point(this.opts.datas[this.mapDataIndex].mapCenter.lng, this.opts.datas[this.mapDataIndex].mapCenter.lat), this.opts.mapLevel);

                var offsetTop = this.opts.datas.length > 1 ? 148 : 106;
                // 平移缩放控件
                var navigationControl = new BMap.NavigationControl({
                    offset: new BMap.Size(16, offsetTop),
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                });
                this.map.addControl(navigationControl);

                // 缩略地图
                var overViewOpen = new BMap.OverviewMapControl({
                    anchor: BMAP_ANCHOR_BOTTOM_RIGHT
                });
                this.map.addControl(overViewOpen);

                // 地图类型
                var mapType = new BMap.MapTypeControl({
                    offset: new BMap.Size(16, offsetTop),
                    mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
                });
                this.map.addControl(mapType);

                // 比例尺
                var scaleControl = new BMap.ScaleControl({
                    offset: new BMap.Size(20, 16)
                });
                this.map.addControl(scaleControl);

                this.map.setMapStyle({
                    styleJson: [{
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": {
                            "lightness": 20,
                            "saturation": -50
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffff"
                        }
                    }, {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }]
                });

                // 判断浏览区是否支持canvas
                function isSupportCanvas() {
                    var elem = document.createElement('canvas');
                    return !!(elem.getContext && elem.getContext('2d'));
                }

                if (!isSupportCanvas()) {
                    alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~');
                }

                this.heatmapOverlay = new BMapLib.HeatmapOverlay({"radius": 25});
                this.map.addOverlay(this.heatmapOverlay);
                this.heatmapOverlay.setDataSet({data: this.opts.datas[this.mapDataIndex].points, max: 100});
            },
            methods: {
                tabChange: function (index) {
                    this.mapDataIndex = index;
                    this.map.centerAndZoom(new BMap.Point(this.opts.datas[this.mapDataIndex].mapCenter.lng, this.opts.datas[this.mapDataIndex].mapCenter.lat), this.opts.mapLevel);
                    this.heatmapOverlay.setDataSet({data: this.opts.datas[index].points, max: 100});
                }
            }
        });
    }

    $.fn.tourAdsense = function (options) {
        var el = this;
        var defaults = {
            bgColor: '#fff',
            theme: 'light',
            bgImage: ''
        };
        var opts = $.extend(defaults, options);

        var html = `<div :class="'adsense ' + opts.theme" :style="'background-color: ' + opts.bgColor">
                        <h4 v-text="opts.title"></h4>
                        <p v-text="opts.desc"></p>
                        <i-button v-if="opts.href" type="primary" @click="href()">了解详情</i-button>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts
            },
            created: function () {

            },
            mounted: function () {
                if (this.opts.bgImage) {
                    $(el.selector).find('.adsense').css({
                        'background-image': 'url(' + this.opts.bgImage + ')'
                    });
                }
            },
            methods: {
                href: function () {
                    window.location.href = this.opts.href;
                }
            }
        });
    }

    $.fn.tourKeyItemSwiper = function (options) {
        var el = this;
        var defaults = {
            addItem: false,
            itemHref: false
        };
        var opts = $.extend(defaults, options);

        var html = `<div class="key-item-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in opts.data" v-if="item.selected">
                                <a :class="opts.itemHref ? 'link' : ''" href="javascript: void(0);">
                                    <div class="num">
                                        <span v-text="item.value"></span>
                                        <template v-if="item.subValue">
                                            <em v-if="item.subValue > 0" class="up" v-text="'+' + item.subValue + '%'"></em>
                                            <em v-if="item.subValue < 0" class="down" v-text="item.subValue + '%'"></em>
                                        </template>
                                    </div>
                                    <div class="title" v-text="item.title"></div>
                                    <div class="chart">
                                        <span v-if="item.chartType == 'bar'" class="sm-bar" v-text="item.chartValue"></span>
                                        <span v-if="item.chartType == 'line'" class="sm-line" v-text="item.chartValue"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Modal class-name="key-item-swiper-modal" width="800px" v-model="itemModalShow" title="选择卡片">
                        <div class="item-wrap">
                            <div v-for="(item, index) in opts.data" :class="item.selected ? 'item-box selected' : 'item-box'" @click="selectItem(index)">
                                <div class="num">
                                    <span v-text="item.value"></span>
                                    <template v-if="item.subValue">
                                        <em v-if="item.subValue > 0" class="up" v-text="'+' + item.subValue + '%'"></em>
                                        <em v-if="item.subValue < 0" class="down" v-text="item.subValue + '%'"></em>
                                    </template>
                                </div>
                                <div class="title" v-text="item.title"></div>
                                <div class="chart">
                                    <span v-if="item.chartType == 'bar'" class="sm-bar" v-text="item.chartValue"></span>
                                    <span v-if="item.chartType == 'line'" class="sm-line" v-text="item.chartValue"></span>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <div class="key-item-select" v-if="opts.addItem" @click="itemModalOpen()">
                        <Icon type="navicon" size="56"></Icon>
                        <span>选择卡片</span>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                mySwiper: {},
                itemModalShow: false
            },
            created: function () {

            },
            mounted: function () {
                this.mySwiper = new Swiper(el.selector + ' .key-item-swiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    freeMode: true
                });

                $(".key-item-swiper-modal .item-wrap").niceScroll({
                    cursorcolor: "transparent"
                });

                this.peityInit();
            },
            methods: {
                peityInit: function () {
                    $(el.selector + ' .sm-line, .key-item-swiper-modal .sm-line').peity('line', {
                        width: '100%',
                        height: '100%',
                        stroke: ['#5cadff']
                    });

                    $(el.selector + ' .sm-bar, .key-item-swiper-modal .sm-bar').peity('bar', {
                        width: '100%',
                        height: '100%',
                        fill: ['#5cadff']
                    });
                },
                itemModalOpen: function () {
                    this.itemModalShow = true;

                    var that = this;
                    setTimeout(function () {
                        that.peityInit();
                    }, 1);
                },
                selectItem: function (index) {
                    var that = this;

                    if (that.opts.data[index].selected) {
                        that.opts.data[index].selected = false;
                    } else {
                        that.opts.data[index].selected = true;
                        setTimeout(function () {
                            that.peityInit();
                        }, 1);
                    }
                    setTimeout(function () {
                        that.mySwiper.update();
                    }, 1);
                }
            }
        });
    }

    $.fn.tourChartTablePanel = function (options) {
        var el = this;
        var defaults = {
            info: true,
            chartType: 'bar',
            chartLegend: ''
        };
        var opts = $.extend(defaults, options);

        var html = `<div class="data-panel">
                        <div class="info" v-if="opts.info">
                            <div class="panel-header">
                                <h3 v-text="opts.chartTitle"></h3>
                            </div>
                            <div class="panel-tabs" v-if="opts.columns.length > 2">
                                <Affix>
                                    <div class="box">
                                        <a v-for="(item, index) in opts.columns" v-if="index > 0" :class="chartDataIndex == index ? 'tab active' : 'tab'" href="javascript:void(0);" v-text="item.title" @click="tabChange(index)"></a>
                                    </div>
                                </Affix>
                            </div>
                            <div class="key-value">
                                <span v-for="item in opts.columns[chartDataIndex].keyValue" v-text="item.key + '：' + item.value"></span>
                            </div>
                        </div>
                        <div class="chart-box" :style="opts.columns.length > 2 ? '' : 'padding-top: 50px;'">
                            <div class="chart" :id="opts.chartId"></div>
                        </div>
                    </div>
                    <div class="table-panel">
                        <div class="table-top">
                            <div class="operate">
                                <div class="search">
                                    <i-input size="small" placeholder="搜索"></i-input>
                                </div>
                                <a href="javascript:void(0);" class="btn">
                                    <Icon type="help-circled"></Icon>
                                </a>
                                <a href="javascript:void(0);" class="btn">
                                    <Icon type="help-circled"></Icon>
                                </a>
                            </div>
                            <h3 v-text="opts.tableTitle"></h3>
                        </div>
                        <i-table :columns="opts.columns" :data="opts.data.slice(0,9)" size="small"></i-table>
                        <div class="table-bottom">
                            <div class="page-size">
                                <i-select v-model="tablePageSize">
                                    <i-option :value="10" :key="10">10条/页</i-option>
                                    <i-option :value="20" :key="20">20条/页</i-option>
                                    <i-option :value="30" :key="30">30条/页</i-option>
                                    <i-option :value="40" :key="40">40条/页</i-option>
                                    <i-option :value="50" :key="50">50条/页</i-option>
                                </i-select>
                            </div>
                            <div class="page">
                                <Page :total="100" :current="1"></Page>
                            </div>
                        </div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                chartDataIndex: 1,
                chartKeyValue: [],
                myChart: {},
                chartOption: {},
                tablePageSize: 10
            },
            created: function () {

            },
            mounted: function () {
                this.opts.columns[1].className = 'table-columns-active';

                this.myChart = echarts.init(document.getElementById(this.opts.chartId), theme);
                this.chartOption = {
                    legend: {
                        data: [this.opts.chartLegend]
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: this.xAxisData()
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: true,
                        axisLabel: {
                            inside: false,
                            showMinLabel: true
                        }
                    },
                    series: this.seriesData()
                };
                this.myChart.setOption(this.chartOption);

                var that = this;
                $(window).resize(function () {
                    that.myChart.resize();
                });
            },
            methods: {
                xAxisData: function () {
                    var key = this.opts.columns[0].key;
                    var array = this.opts.data.map(function (item) {
                        return item[key];
                    });
                    return array;
                },
                seriesData: function () {
                    var that = this;
                    var obj = {
                        name: that.opts.chartLegend,
                        type: that.opts.chartType,
                        data: that.opts.data.map(function (item) {
                            return item[that.opts.columns[that.chartDataIndex].key]
                        })
                    };
                    return obj;
                },
                tabChange: function (index) {
                    this.chartDataIndex = index;
                    this.opts.columns.map(function (item, num) {
                        if (index == num) {
                            item.className = 'table-columns-active';
                        } else {
                            item.className = '';
                        }
                    });
                    this.chartOption = {
                        xAxis: {
                            data: this.xAxisData()
                        },
                        series: this.seriesData()
                    };
                    this.myChart.setOption(this.chartOption);
                },
                updateData: function (page) {
                    console.log(page);
                }
            }
        });
    }

    $.fn.tourInnerPageFooter = function (options) {
        var el = this;
        var defaults = {};
        var opts = $.extend(defaults, options);

        var html = `<div class="inner-page-footer">
                        <p class="data-source" v-text="'数据来源：' + opts.source"></p>
                        <div class="explain" v-html="opts.content"></div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts
            },
            created: function () {

            },
            mounted: function () {

            },
            methods: {}
        });
    }

    $.fn.tourInnerPageHeader = function (options) {
        var el = this;
        var defaults = {
            datePicker: false,
            pageTopStyle: false,
            breadCrumb: true,
            btnAddOftenUse: true,
            btnPhoneView: true,
            btnPrintReport: true,
            btnSave: true,
            btnNew: true,
            select: false
        };
        var opts = $.extend(defaults, options);

        var html = `<div class="report-page-top-style" v-if="opts.pageTopStyle">
                        <i v-for="item in 100"></i>
                    </div>
                    <div class="inner-page-header">
                        <div class="oprate">
                            <a href="javascript:void(0);" v-if="opts.btnAddOftenUse">
                                <Icon type="ios-paper"></Icon>加入常用报告
                            </a>
                            <a href="javascript:void(0);" v-if="opts.btnPhoneView">
                                <Icon type="android-phone-portrait"></Icon>用手机查看
                            </a>
                            <a href="javascript:void(0);" v-if="opts.btnPrintReport">
                                <Icon type="printer"></Icon>打印报告
                            </a>
                            <i-button type="ghost" size="small" icon="checkmark-round" v-if="opts.btnSave">保存</i-button>
                            <i-button type="ghost" size="small" icon="plus-round" v-if="opts.btnNew">新建</i-button>
                        </div>
                        <div>
                            <h4 v-text="opts.pageTitle"></h4>
                            <date-picker v-if="opts.datePicker" type="month" size="small" :clearable="false" format="yyyy年MM月" placeholder="选择月份"></date-picker>
                            <i-select size="small" clearable v-model="SelectModel" v-if="opts.select">
                                <i-option value="value_0" label="已被保存的数据查询条件1">
                                    <span>已被保存的数据查询条件1</span>
                                    <Icon class="remove" type="android-close"></Icon>
                                </i-option>
                                <i-option value="value_1" label="已被保存的数据查询条件2">
                                    <span>已被保存的数据查询条件2</span>
                                    <Icon class="remove" type="android-close"></Icon>
                                </i-option>
                                <i-option value="value_2" label="已被保存的数据查询条件3">
                                    <span>已被保存的数据查询条件3</span>
                                    <Icon class="remove" type="android-close"></Icon>
                                </i-option>
                                <i-option value="value_3" label="已被保存的数据查询条件4">
                                    <span>已被保存的数据查询条件4</span>
                                    <Icon class="remove" type="android-close"></Icon>
                                </i-option>
                            </i-select>
                        </div>
                        <Breadcrumb v-if="opts.breadCrumb">
                            <breadcrumb-item href="javascript:void(0);">Home</breadcrumb-item>
                            <breadcrumb-item href="javascript:void(0);">Components</breadcrumb-item>
                            <breadcrumb-item>Breadcrumb</breadcrumb-item>
                        </Breadcrumb>
                    </div>
                    <div class="report-desc" v-if="opts.pageDesc" v-text="opts.pageDesc"></div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                SelectModel: 'value_0'
            },
            created: function () {

            },
            mounted: function () {

            },
            methods: {}
        });
    }

    $.fn.tourFilterPanel = function (options) {
        var el = this;
        var defaults = {};
        var opts = $.extend(defaults, options);

        var html = `<div class="filter-panel">
                        <date-picker type="daterange" :options="options" placement="bottom-start" placeholder="日期选择" style="width: 200px; margin-right: 8px;"></date-picker>
                        <i-select v-model="model1">
                            <i-option v-for="item in cityList" :value="item.value" :key="item.value" v-text="item.label"></i-option>
                        </i-select>
                        <i-select v-model="model2">
                            <i-option v-for="item in cityList" :value="item.value" :key="item.value" v-text="item.label"></i-option>
                        </i-select>
                        <i-select v-model="model3">
                            <i-option v-for="item in cityList" :value="item.value" :key="item.value" v-text="item.label"></i-option>
                        </i-select>
                        <i-button type="info" icon="funnel">筛选</i-button>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                model1: '',
                model2: '',
                model3: '',
                cityList: [{
                    value: 'beijing',
                    label: '北京市'
                }, {
                    value: 'shanghai',
                    label: '上海市'
                }, {
                    value: 'shenzhen',
                    label: '深圳市'
                }, {
                    value: 'hangzhou',
                    label: '杭州市'
                }, {
                    value: 'nanjing',
                    label: '南京市'
                }, {
                    value: 'chongqing',
                    label: '重庆市'
                }],
                options: {
                    shortcuts: [
                        {
                            text: '近一周',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '近一月',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '近三月',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            },
            created: function () {

            },
            mounted: function () {

            },
            methods: {}
        });
    }

    $.fn.tourReportPanel = function (options) {
        var el = this;
        var defaults = {};
        var opts = $.extend(defaults, options);

        var html = `<template v-for="(data, idx1) in opts.datas">
                        <div class="report-panel" v-for="(item, idx2) in data.items">
                            <Affix :id="'title_' + idx1" class="title" v-if="idx2 == 0" @on-change="affixChange($event, 'title', idx1)">
                                <h4 v-text="data.title"></h4>
                            </Affix>
                            <Affix :offset-top="29" :id="'subTitle_' + idx1 + '_' + idx2" class="subTitle" v-if="item.subTitle" @on-change="affixChange($event, 'subTitle', idx1, idx2)">
                                <h5 v-text="item.subTitle"></h5>
                            </Affix>
                            <Row>
                                <i-col v-for="(chart, idx3) in item.charts" class="panel-col" :span="chart.colSpan">
                                    <h6 v-text="chart.chartTitle"></h6>
                                    <div class="chart" :id="'chart_' + idx1 + idx2 + idx3"></div>
                                </i-col>
                            </Row>
                            <div class="report-desc" v-if="item.desc" v-text="item.desc"></div>
                        </div>
                    </template>`;
        el.append(html);

        var menuHtml = `<Affix :offset-top="36" id="report_indexes">
                            <ul class="report-indexes">
                                <li v-for="(data, idx1) in opts.datas">
                                    <a :class="'first title-' + idx1" href="javascript:void(0);" v-text="data.title" @click="gotoPosition('title', 'title_' + idx1)"></a>
                                    <div class="second">
                                        <a :class="'subTitle-' + idx1 + '-' + idx2" href="javascript:void(0);" v-for="(item, idx2) in data.items" v-text="item.subTitle" @click="gotoPosition('subTitle', 'subTitle_' + idx1 + '_' + idx2)"></a>
                                    </div>
                                </li>
                            </ul>
                        </Affix>`;
        $('.report-page').prepend(menuHtml);

        new Vue({
            el: el.selector,
            data: {
                opts: opts
            },
            created: function () {

            },
            mounted: function () {
                var datas = this.opts.datas;
                for (var i = 0; i < datas.length; i++) {
                    var items = datas[i].items;
                    for (var j = 0; j < items.length; j++) {
                        var charts = items[j].charts;
                        for (var n = 0; n < charts.length; n++) {
                            if (charts[n].type == 'pie') {
                                charts[n].chart = echarts.init(document.getElementById('chart_' + i + j + n), theme);
                                var chartOption = {
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: "{b}: {c} ({d}%)"
                                    },
                                    series: [{
                                        type: 'pie',
                                        radius: ['42%', '56%'],
                                        avoidLabelOverlap: false,
                                        label: {
                                            normal: {
                                                formatter: "{b}\n{c} ({d}%)"
                                            }
                                        },
                                        data: charts[n].data
                                    }]
                                };
                                charts[n].chart.setOption(chartOption);
                            } else {
                                charts[n].chart = echarts.init(document.getElementById('chart_' + i + j + n), theme);
                                var chartOption = {
                                    legend: {
                                        data: charts[n].data.map(function (item) {
                                            return item.name
                                        })
                                    },
                                    tooltip: {
                                        trigger: 'axis'
                                    },
                                    xAxis: {
                                        type: 'category',
                                        boundaryGap: true,
                                        data: charts[n].axisData
                                    },
                                    yAxis: {
                                        type: 'value',
                                        boundaryGap: true,
                                        axisLabel: {
                                            inside: false,
                                            showMinLabel: true
                                        }
                                    },
                                    series: charts[n].data
                                };
                                charts[n].chart.setOption(chartOption);
                            }
                        }
                    }
                }
                $(window).resize(function () {
                    for (var i = 0; i < datas.length; i++) {
                        var items = datas[i].items;
                        for (var j = 0; j < items.length; j++) {
                            var charts = items[j].charts;
                            for (var n = 0; n < charts.length; n++) {
                                charts[n].chart.resize();
                            }
                        }
                    }
                });
            },
            methods: {
                affixChange: function (state, type, code1, code2) {
                    if (type == 'title') {
                        $('.report-indexes .first').removeClass('active');
                        if (state) {
                            $('.title-' + code1).addClass('active');
                        } else {
                            $('.title-' + (code1 - 1)).addClass('active');
                        }
                    } else if (type == 'subTitle') {
                        var elem = $('.subTitle-' + code1 + '-' + code2);
                        $('.report-indexes .second a').removeClass('active');
                        if (state) {
                            elem.addClass('active');
                        } else {
                            if (elem.prev().length > 0) {
                                elem.prev().addClass('active');
                            } else {
                                elem.parents('li').prev().find('.second a').last().addClass('active');
                            }
                        }
                    }
                }
            }
        });

        new Vue({
            el: '#report_indexes',
            data: {
                opts: opts
            },
            created: function () {

            },
            methods: {
                gotoPosition: function (type, elem) {
                    if (type == 'title') {
                        $("html, body").animate({
                            scrollTop: $('#' + elem).offset().top + 1
                        }, 200);
                    } else if (type == 'subTitle') {
                        $("html, body").animate({
                            scrollTop: $('#' + elem).offset().top - 28
                        }, 200);
                    }
                }
            }
        });
    }

    $.fn.tourMapPage = function (options) {
        var el = this;
        var defaults = {};
        var opts = $.extend(defaults, options);

        var html = `<div class="map-container">
                        <div id="allmap" class="map"></div>
                        <div class="map-list">
                            <Card class="chart-card">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide" v-for="(data, index) in opts.analyse">
                                            <div class="inner-swiper">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide" v-for="item in data.keyValue">
                                                        <div class="num">
                                                            <span v-text="item.value"></span>
                                                            <i v-if="item.unit" v-text="item.unit">MB</i>
                                                            <em v-if="item.subValue > 0" v-text="'+' + item.subValue + '%'"></em>
                                                            <em v-if="item.subValue < 0" v-text="item.subValue + '%'"></em>
                                                        </div>
                                                        <div class="title" v-text="item.key"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chart" :id="'chart_' + index"></div>
                                        </div>
                                    </div>
                                    <div class="swiper-btn prev">
                                        <Icon type="chevron-left"></Icon>
                                    </div>
                                    <div class="swiper-btn next">
                                        <Icon type="chevron-right"></Icon>
                                    </div>
                                    <div v-if="opts.analyse.length > 1" class="swiper-pagination"></div>
                                </div>
                            </Card>
                            <Card class="list-card">
                                <!--<div class="updown-toggle" @click="updownToggle">
                                    <Icon v-if="updown == 'up'" type="chevron-up"></Icon>
                                    <Icon v-if="updown == 'down'" type="chevron-down"></Icon>
                                </div>-->
                                <Tabs class="tabs" :animated="false" :value="tabValue" @on-click="listTabsToggle">
                                    <tab-pane v-for="(data, index) in opts.datas" :label="data.type" :name="'tab_' + index">
                                        <ul :class="'tab_' + index">
                                            <li v-for="(item, idx) in data.items" @click="showMapOverlay(index, idx)">
                                                <div class="title">
                                                    <span v-text="item.title"></span>
                                                    <em v-text="item.subTitle"></em>
                                                </div>
                                                <p class="desc" v-text="item.desc"></p>
                                                <Icon v-if="!item.runState" type="alert-circled"></Icon>
                                            </li>
                                        </ul>
                                    </tab-pane>
                                </Tabs>
                            </Card>
                        </div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                updown: 'up',
                tabValue: 'tab_0'
            },
            created: function () {

            },
            mounted: function () {
                var that = this;

                that.initHeight();

                var swiper1 = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-btn.next',
                    prevButton: '.swiper-btn.prev',
                    paginationClickable: true,
                    spaceBetween: 32,
                    onlyExternal: true
                });

                var swiper2 = new Swiper('.inner-swiper', {
                    slidesPerView: 'auto',
                    freeMode: true
                });

                $(".list-card ul").niceScroll({
                    cursorcolor: "transparent"
                });

                var analyse = that.opts.analyse;
                for (var i = 0; i < analyse.length; i++) {
                    analyse[i].chart = echarts.init(document.getElementById('chart_' + i), light);
                    var chartOption = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: true,
                            data: analyse[i].axisData
                        },
                        yAxis: {
                            type: 'value',
                            boundaryGap: true,
                            splitNumber: 3,
                            axisLabel: {
                                inside: false,
                                showMinLabel: true
                            }
                        },
                        series: analyse[i].data
                    };
                    analyse[i].chart.setOption(chartOption);
                }

                that.initMap();

                $(window).resize(function () {
                    that.initHeight();
                });
            },
            methods: {
                initHeight: function () {
                    $('.map-container').css({
                        'height': $('body').height() - 60
                    });
                    $(".list-card ul").css({
                        'max-height': $('body').height() - 435
                    });
                },
                updownToggle: function () { // 右侧列表展开收起
                    if (this.updown == 'up') {
                        this.updown = 'down';
                        $('.list-card .ivu-tabs-content').css({'height': 0});
                    } else {
                        this.updown = 'up';
                        $('.list-card .ivu-tabs-content').css({'height': 'auto'});
                    }
                },
                initMap: function () {
                    var that = this;

                    that.allmap = new BMap.Map('allmap', {enableMapClick: false});
                    that.allmap.centerAndZoom(new BMap.Point(that.opts.mapCenter.lng, that.opts.mapCenter.lat), that.opts.mapLevel);

                    // 平移缩放控件
                    var navigationControl = new BMap.NavigationControl({
                        offset: new BMap.Size(24, 24),
                        type: BMAP_NAVIGATION_CONTROL_SMALL
                    });
                    that.allmap.addControl(navigationControl);

                    // 缩略地图
                    var overViewOpen = new BMap.OverviewMapControl({
                        anchor: BMAP_ANCHOR_BOTTOM_RIGHT
                    });
                    that.allmap.addControl(overViewOpen);

                    // 比例尺
                    var scaleControl = new BMap.ScaleControl({
                        offset: new BMap.Size(24, 24)
                    });
                    that.allmap.addControl(scaleControl);

                    that.allmap.setMapStyle({
                        styleJson: [{
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": {
                                "lightness": 20,
                                "saturation": -50
                            }
                        }, {
                            "featureType": "highway",
                            "elementType": "geometry.fill",
                            "stylers": {
                                "color": "#ffffff"
                            }
                        }, {
                            "featureType": "poi",
                            "elementType": "labels.icon",
                            "stylers": {
                                "visibility": "off"
                            }
                        }, {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": {
                                "visibility": "off"
                            }
                        }]
                    });

                    // 复杂的自定义覆盖物
                    function ComplexCustomOverlay(idx1, idx2, item) {
                        this._idx1 = idx1;
                        this._idx2 = idx2;
                        this._item = item;
                    }

                    ComplexCustomOverlay.prototype = new BMap.Overlay();
                    ComplexCustomOverlay.prototype.initialize = function (map) {
                        this._map = map;

                        var container = this._container = document.createElement("div");
                        container.className = 'overlay-container';

                        var marker = this._idx1 == 0 ? '<div class="marker marker-lg tab_' + this._idx1 + '" name="tab_' + this._idx1 + '" num="' + this._idx2 + '"></div>' : '<div class="marker marker-sm tab_' + this._idx1 + '" name="tab_' + this._idx1 + '"  num="' + this._idx2 + '"></div>';

                        var runState = this._item.runState ? '<span>运行正常</span>' : '<span class="error">运行异常</span>';

                        var abnormal = this._item.abnormal ? '<div class="ivu-alert ivu-alert-error"><span class="ivu-alert-message">' + this._item.abnormal + '</span></div>' : '';

                        var info = '';
                        if (this._item.info) {
                            info = this._item.info.map(function (m) {
                                var infoItems = m.infoItems.map(function (n) {
                                    return `<div class="ivu-col ivu-col-span-` + n.colSpan + `">
                                                <p>` + n.value + `</p>
                                                <span>` + n.key + `</span>
                                            </div>`;
                                }).join('');
                                return '<div class="ivu-row">' + infoItems + '</div>';
                            }).join('');
                        }

                        var colgroup = '',
                            thead = '';
                        if (this._item.logs && this._item.logs.columns) {
                            this._item.logs.columns.map(function (m) {
                                colgroup += '<col width="' + m.width + '">';
                                thead += '<th><div class="ivu-table-cell">' + m.title + '</div></th>';
                            });
                        }

                        var tbody = '';
                        if (this._item.logs && this._item.logs.values && this._item.logs.columns) {
                            var logs = this._item.logs;
                            tbody = logs.values.map(function (m) {
                                var rows = logs.columns.map(function (n) {
                                    return '<td><div class="ivu-table-cell">' + m[n.key] + '</div></td>';
                                }).join('');
                                return '<tr class="ivu-table-row">' + rows + '</tr>';
                            }).join('');
                        }

                        /* <ul>
                             <li class="active">
                                 <div>
                                 ` + runState + `
                                 <em>设备概况</em>
                                 </div>
                                 </li>
                                 <li class="active">
                                 <em>视频</em>
                                 </li>
                                 <li>
                                 <em>日志</em>
                                 </li>
                                 </ul>*/
                        container.innerHTML = `<div class="overlay-wrap ivu-card ivu-card-bordered hide">
                                                    <div class="ivu-card-body">
                                                        <div class="ivu-tabs-bar">
                                                            <i class="close ivu-icon ivu-icon-close-circled"></i>
                                                            <div class="title">` + this._item.title + `</div>
                                                        </div>
                                                        <ul class="tabs-content">
                                                            <li class="grid">
                                                                ` + abnormal + info + `
                                                            </li>
                                                            <li class="hide">
                                                                <div class="video"></div>
                                                            </li>
                                                            <li class="table hide">
                                                                <div class="ivu-table-wrapper">
                                                                    <div class="ivu-table">
                                                                        <div class="ivu-table-header">
                                                                            <table>
                                                                                <colgroup>` + colgroup + `</colgroup>
                                                                                <thead>
                                                                                    <tr>` + thead + `</tr>
                                                                                </thead>
                                                                            </table>
                                                                        </div>
                                                                        <div class="ivu-table-body">
                                                                            <table>
                                                                                <colgroup>` + colgroup + `</colgroup>
                                                                                <tbody class="ivu-table-tbody">
                                                                                    ` + tbody + `
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>` + marker;

                        that.allmap.getPanes().labelPane.appendChild(container);
                        return container;
                    }
                    ComplexCustomOverlay.prototype.draw = function () {
                        var map = this._map;
                        var pixel = map.pointToOverlayPixel(new BMap.Point(this._item.lng, this._item.lat));
                        this._container.style.left = pixel.x + "px";
                        this._container.style.top = pixel.y + "px";
                    }

                    var datas = that.opts.datas;
                    for (var i = 0; i < datas.length; i++) {
                        var items = datas[i].items;
                        for (var j = 0; j < items.length; j++) {
                            var myCompOverlay = new ComplexCustomOverlay(i, j, items[j]);
                            that.allmap.addOverlay(myCompOverlay);
                        }
                    }

                    // 弹层上表格滚动条
                    $(".list-card ul, .overlay-wrap .ivu-table-body").niceScroll({
                        cursorcolor: "transparent"
                    });

                    // 弹层上tab切换
                    $('.overlay-wrap .ivu-tabs-bar li').click(function () {
                        $(this).addClass('active').siblings().removeClass('active');
                        $(this).parents('.overlay-wrap').find('.tabs-content li').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
                    });

                    // 标点点击显示弹层
                    $('.overlay-container .marker').click(function () {
                        $('.overlay-wrap').hide();
                        $(this).parent().find('.overlay-wrap').show();

                        // 将弹层调到可视区域
                        var item = that.opts.datas[$(this).attr('name').substring(4)].items[$(this).attr('num')];
                        var pt = new BMap.Point(item.lng + 0.015, item.lat + 0.01);
                        that.allmap.centerAndZoom(pt, that.opts.mapLevel);

                        // 右侧列表切换对应分类
                        that.tabValue = $(this).attr('name');
                        $('.overlay-container .marker').removeClass('marker-lg').addClass('marker-sm');
                        $('.overlay-container .' + $(this).attr('name')).removeClass('marker-sm').addClass('marker-lg');

                        // 右侧列表对应高亮
                        $('.list-card .ivu-tabs-content li').removeClass('active');
                        $('.list-card .' + $(this).attr('name')).find('li').eq($(this).attr('num')).addClass('active');
                    });

                    // 关闭隐藏弹层
                    $('.overlay-wrap .close').click(function () {
                        $(this).parents('.overlay-wrap').hide();
                        $('.list-card .ivu-tabs-content li').removeClass('active');
                    });
                },
                showMapOverlay: function (idx1, idx2) { // 右侧列表点击事件
                    $('.overlay-container .marker.tab_' + idx1 + '[num = ' + idx2 + ']').click();
                },
                listTabsToggle: function (name) { // 右侧列表tab切换
                    $('.overlay-container .marker').removeClass('marker-lg').addClass('marker-sm');
                    $('.overlay-container .' + name).removeClass('marker-sm').addClass('marker-lg');
                    $('.overlay-wrap').hide();
                    $('.list-card .ivu-tabs-content li').removeClass('active');
                    this.tabValue = name;
                }
            }
        });
    }

    $.fn.tourTablePanel = function (options) {
        var el = this;
        var defaults = {
            info: true
        };
        var opts = $.extend(defaults, options);

        var html = `<div class="table-panel">
                        <div class="table-top">
                            <div class="operate">
                                <div class="search">
                                    <i-input size="small" placeholder="搜索"></i-input>
                                </div>
                                <a href="javascript:void(0);" class="btn">
                                    <Icon type="help-circled"></Icon>
                                </a>
                                <a href="javascript:void(0);" class="btn">
                                    <Icon type="help-circled"></Icon>
                                </a>
                            </div>
                            <h3 v-text="opts.tableTitle"></h3>
                        </div>
                        <i-table :columns="opts.columns" :data="opts.data.slice(0,5)" size="small"></i-table>
                        <div class="table-bottom">
                            <div class="page-size">
                                <i-select v-model="tablePageSize">
                                    <i-option :value="10" :key="10">10条/页</i-option>
                                    <i-option :value="20" :key="20">20条/页</i-option>
                                    <i-option :value="30" :key="30">30条/页</i-option>
                                    <i-option :value="40" :key="40">40条/页</i-option>
                                    <i-option :value="50" :key="50">50条/页</i-option>
                                </i-select>
                            </div>
                            <div class="page">
                                <Page :total="100" :current="1"></Page>
                            </div>
                        </div>
                    </div>`;
        el.append(html);

        new Vue({
            el: el.selector,
            data: {
                opts: opts,
                tablePageSize: 10
            },
            created: function () {
                console.log(this.opts);
            },
            mounted: function () {
                this.opts.columns[1].className = 'table-columns-active';
                var that = this;
                for (var i in that.opts.data) {
                    for (var j in that.opts.data[i]) {
                        if (that.opts.data[i][j] === true) {
                            that.opts.data[i].cellClassName[j] = 'mmp-active';
                            that.opts.data[i][j] = "已完成";
                        } else if (that.opts.data[i][j] === false) {
                            that.opts.data[i][j] = "未完成";
                        }
                    }
                }
                ;
                var fkme = '<tr class="ivu-table-row mmp-fkme">';
                for (var i in that.opts.total) {
                    if (that.opts.total[i]) {
                        fkme += '<td><div class="ivu-table-cell"><span>' + that.opts.total[i] + '</span></div></td>';
                    } else {
                        fkme += '<td><div class="ivu-table-cell"><span>--</span></div></td>';
                    }
                }
                fkme += '</tr>';
                $(el.selector + ' .ivu-table-tbody').append(fkme);
            },
            methods: {
                seriesData: function () {
                    var that = this;
                    var obj = {
                        name: that.opts.chartLegend,
                        type: that.opts.chartType,
                        data: that.opts.data.map(function (item) {
                            return item[that.opts.columns[that.chartDataIndex].key]
                        })
                    };
                    return obj;
                },
                tabChange: function (index) {
                    this.opts.columns.map(function (item, num) {
                        if (index == num) {
                            item.className = 'table-columns-active';
                        } else {
                            item.className = '';
                        }
                    });
                },
                updateData: function (page) {
                    console.log(page);
                }
            }
        });
    }
})(jQuery);
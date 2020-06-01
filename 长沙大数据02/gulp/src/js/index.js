/**
 * 日期格式化
 */
Date.prototype.Format = function (fmt) {
    const o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 获取地址栏参数
 */
const getQueryString = function (name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
 * 模块模板
 */
ko.components.register('dashboard-grid', {
    viewModel: {
        createViewModel: function (controller, componentInfo) {
            const ViewModel = function (controller, componentInfo) {
                let grid = null;

                this.widgets = controller.widgets;

                this.afterAddWidget = function (items) {
                    if (grid == null) {
                        grid = $(componentInfo.element).find('.grid-stack').gridstack({
                            auto: false,
                            width: 4,
                            cellHeight: $('.page').height() / 3,
                            verticalMargin: 0
                        }).data('gridstack');
                    }

                    const item = _.find(items, function (i) {
                        return i.nodeType == 1
                    });
                    grid.addWidget(item);
                    ko.utils.domNodeDisposal.addDisposeCallback(item, function () {
                        grid.removeWidget(item);
                    });
                    $(item).find('.page-item').load('modules/' + $(item).attr('data-gs-module') + '/index.html');
                };
            };

            return new ViewModel(controller, componentInfo);
        }
    },
    template: [
        '<div class="grid-stack" data-bind="foreach: {data: widgets, afterRender: afterAddWidget}">',
        '   <div class="grid-stack-item" data-bind="attr: {\'data-gs-x\': $data.x, \'data-gs-y\': $data.y, \'data-gs-width\': $data.width, \'data-gs-height\': $data.height, \'data-gs-auto-position\': $data.auto_position, \'data-gs-module\': $data.module}">',
        '       <div class="oprate">',
        '           <div class="grid-stack-item-content icon ncicon-stealth"></div>',
        '           <i class="icon ncicon-offline delete" data-bind="click: $root.deleteWidget"></i>',
        '       </div>',
        '       <div class="page-item-box"><div class="page-item"></div></div>',
        '   </div>',
        '</div> '
    ].join('')
});

$.getJSON("configure.json").success(function (e) {
    JSON.parse(localStorage.getItem('configure')) ? JSON.parse(localStorage.getItem('configure')) : localStorage.setItem("configure", JSON.stringify(e));
    const datas = JSON.parse(localStorage.getItem('configure'));
    $.getJSON("modules/package.json").success(function (e) {
        datas.modules = e;

        // $.getJSON("configure.json", function (datas) {
        const vm = new Vue({
            el: '#page_container',
            data: {
                headerTime: {
                    date: '',
                    time: ''
                },
                controller: {},
                editObj: {},
                configureDatas: datas ? datas : {},
                pageList: {
                    index: 0,
                    data: {}
                }
            },
            created: function () {
                const that = this;

                // 设置页面title
                document.title = that.configureDatas.basics.txtName;

                // 设置顶部时间
                that.setHeaderTime();
                setInterval(function () {
                    that.setHeaderTime();
                }, 1000);

                // 字体rem设置
                const htmlElem = document.getElementsByTagName("html")[0];
                const fontSize = document.body.clientHeight / 640 * 20;
                htmlElem.style.fontSize = fontSize + "px";
            },
            mounted: function () {
                const that = this;

                // Controller
                const Controller = function (widgets) {
                    const self = this;
                    this.widgets = ko.observableArray(widgets);

                    // 模块删除
                    this.deleteWidget = function (item) {
                        self.widgets.remove(item);
                        $('.module-list .box-wrap ul li#' + item.module).removeClass('active');
                        return false;
                    };

                    // 页面保存
                    this.saveWidget = function () {
                        if ($('#page_name').val() == '') {
                            $.smkConfirm({
                                text: '页面名称不能为空，请填写页面名称！',
                                accept: '确定',
                                cancel: false
                            }, function (res) {
                            });
                        } else {
                            this.serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
                                el = $(el);
                                const node = el.data('_gridstack_node');
                                return {
                                    x: node.x,
                                    y: node.y,
                                    width: node.width,
                                    height: node.height,
                                    module: node.module
                                };
                            }, this);
                            if (this.serializedData.length > 0 && this.serializedData.length <= 12) {
                                const page = new Object();
                                if (!that.editObj.page) { // 新增
                                    const timestamp = Date.parse(new Date()) / 1000;
                                    page.id = 'page_' + timestamp;
                                    page.name = $('#page_name').val();
                                    page.desc = $('#page_desc').val();
                                    page.widgets = this.serializedData;

                                    that.configureDatas.pages[$('#page_group').val()].data.push(page);
                                } else { //编辑
                                    page.id = that.editObj.page.id;
                                    page.name = $('#page_name').val();
                                    page.desc = $('#page_desc').val();
                                    page.widgets = this.serializedData;

                                    that.configureDatas.pages[that.editObj.groupIndex].data.splice(that.editObj.pageIndex, 1);
                                    that.configureDatas.pages[$('#page_group').val()].data.push(page);
                                }

                                localStorage.setItem("configure", JSON.stringify(that.configureDatas));

                                $.smkConfirm({
                                    text: '页面保存成功！',
                                    accept: '确定',
                                    cancel: false
                                }, function (res) {
                                });

                                $('.page-container').removeClass('edit-ing');
                                $('.module-list').removeClass('side-open side-close');
                                $('#pageBasicsModal').modal('hide');

                                self.widgets.removeAll();
                                $('#page_desc').val('');
                                that.editObj = {};
                            }
                        }
                        return false;
                    };

                    // 分类保存
                    this.saveGroup = function () {
                        if ($('#group_name').val() == '') {
                            $.smkConfirm({
                                text: '分类名称不能为空，请填写分类名称！',
                                accept: '确定',
                                cancel: false
                            }, function (res) {
                            });
                        } else if ($('.modal .page-icons .active').length == 0) {
                            $.smkConfirm({
                                text: '请选择一个菜单图标！',
                                accept: '确定',
                                cancel: false
                            }, function (res) {
                            });
                        } else {
                            const pages = that.configureDatas.pages;

                            if (that.editGroupId == '') { // 新增
                                const group = new Object();
                                const timestamp = Date.parse(new Date()) / 1000;
                                group.id = 'group_' + timestamp;
                                group.typeName = $('#group_name').val();
                                group.icon = $('.modal .page-icons li.active').attr('data-name');
                                group.data = [];

                                pages.push(group);
                            } else { //编辑
                                $.each(pages, function (i, j) {
                                    if (j.id == that.editGroupId) {
                                        j.typeName = $('#group_name').val();
                                        j.icon = $('.modal .page-icons li.active').attr('data-name');
                                        return false;
                                    }
                                });
                            }

                            localStorage.setItem("configure", JSON.stringify(that.configureDatas));


                            $.smkConfirm({
                                text: '分类保存成功！',
                                accept: '确定',
                                cancel: false
                            }, function (res) {
                            });

                            $('.page-container').removeClass('edit-ing');
                            // $('.page-list').removeClass('side-open side-close');
                            $('#groupBasicsModal').modal('hide');
                            that.editGroupId = '';

                        }
                        return false;
                    };
                };

                // 初始化
                const widgets = [];
                this.controller = new Controller(widgets);
                ko.applyBindings(this.controller);

                // 滚动条
                $(".box-wrap, .page, .nav-icons").niceScroll({
                    cursorcolor: "#1f4866",
                    autohidemode: true,
                    cursorwidth: "4px",
                    cursorborderradius: 0
                });

                // 页面、模块侧栏展开收起
                $('.side-bar .handle').click(function () {
                    $(this).parents('.side-bar').toggleClass('side-open side-close');
                });

                // 模块分类展开收起
                $('.module-list .type-name').click(function () {
                    $(this).parents('.type-box').toggleClass('open');
                });

                // 选择菜单图标
                $('.modal .page-icons li').click(function () {
                    $(this).addClass('active').siblings().removeClass('active');
                });

                // 是否登录
                const hasLogin = sessionStorage.getItem('hasLogin');
                if (hasLogin) {
                    if (getQueryString("groupNum") && getQueryString("pageNum")) {
                        this.loadPage(getQueryString("groupNum"), getQueryString("pageNum"));
                    } else {
                        window.location.href = 'index.html?groupNum=0&pageNum=0&timestamp=' + new Date().getTime();
                    }
                } else {
                    alert('登录已过期，请重新登录！');
                    window.location.href = "login.html";
                }

                // 页面分类展开收起
                $('.page-list').on('click', ' .type-name', function () {
                    $(this).parents('.type-box').toggleClass('open');
                });
            },
            methods: {
                setHeaderTime: function () {
                    this.headerTime.date = new Date().Format("yyyy年MM月dd日");
                    this.headerTime.time = new Date().Format("hh:mm:ss");
                },
                setup: function () {
                    this.controller.widgets.removeAll();

                    if ($('.page-container').hasClass('edit-true')) {
                        $('.page-container').removeClass('edit-true edit-ing');
                        $('.side-bar').removeClass('side-open side-close');

                        window.location.href = 'index.html?pageNum=0&timestamp=' + new Date().getTime();
                    } else {
                        $('.page-container').addClass('edit-true');
                        $('.page-list').addClass('side-open');
                    }
                },
                addPageFun: function () {
                    if (!$('.module-list').hasClass('side-close')) {
                        $('.module-list').addClass('side-open');
                    }
                    $('.page-container').addClass('edit-ing');

                    $('#page_name').val('');
                    $('.modal .page-icons li').removeClass('active');
                    $('.module-list .box-wrap ul li').removeClass('active');

                    this.editObj = {};
                    this.controller.widgets.removeAll();
                },
                addPage: function () {
                    const that = this;
                    if ($('.page-container.edit-ing').length > 0) {
                        $.smkConfirm({
                            text: '确定离开当前编辑页面？',
                            accept: '确定',
                            cancel: '取消'
                        }, function (res) {
                            if (res) {
                                that.addPageFun();
                            }
                        });
                    } else {
                        that.addPageFun();
                    }
                },
                moduleDesc: function (i, j) {
                    $('#myModal .modal-title').text(this.configureDatas.modules[i].data[j].name);
                    $('#myModal .modal-body p').text(this.configureDatas.modules[i].data[j].description);
                    $('#myModal').modal({backdrop: false});
                },
                selectModule: function (i, j) {
                    const that = this;
                    if ($('.grid-stack-item').length > 11) {
                        $.smkConfirm({
                            text: '每个页面模块不能多于12个！',
                            accept: '确定',
                            cancel: false
                        }, function (res) {
                        });
                    } else {
                        that.controller.widgets.push({
                            x: 0,
                            y: 0,
                            width: that.configureDatas.modules[i].data[j].width,
                            height: that.configureDatas.modules[i].data[j].height,
                            auto_position: true,
                            module: that.configureDatas.modules[i].data[j].folderName
                        });

                        $('.module-list .type-box').eq(i).find('li').eq(j).addClass('active');
                    }
                },
                deleteModule: function (i, j) {
                    $('.grid-stack-item[data-gs-module="' + this.configureDatas.modules[i].data[j].folderName + '"] .oprate .delete').click();
                },
                clearPage: function () {
                    this.controller.widgets.removeAll();
                },
                pageBasics: function () {
                    if ($('.grid-stack-item').length == 0) {
                        $.smkConfirm({
                            text: '页面模块不能为空，请选择模块！',
                            accept: '确定',
                            cancel: false
                        }, function (res) {
                        });
                    } else if ($('.edit-area').height() > $('.page').height()) {
                        $.smkConfirm({
                            text: '页面内容不能超出一屏，请重新调整页面！',
                            accept: '确定',
                            cancel: false
                        }, function (res) {
                        });
                    } else {
                        $('#pageBasicsModal').modal({backdrop: false});
                    }
                },
                editPageFun: function (editObj) {
                    const that = this;
                    that.editObj = editObj;
                    const widgets = that.controller.widgets;
                    widgets.removeAll();

                    if (!$('.module-list').hasClass('side-close')) {
                        $('.module-list').addClass('side-open');
                    }
                    $('.page-container').addClass('edit-ing');
                    $('.module-list .box-wrap li').removeClass('active');

                    $('#page_name').val(editObj.page.name);
                    $('#page_group').val(editObj.groupIndex);
                    $('#page_desc').val(editObj.page.desc);

                    $.each(editObj.page.widgets, function (i, j) {
                        widgets.push({
                            x: j.x,
                            y: j.y,
                            width: j.width,
                            height: j.height,
                            auto_position: false,
                            module: j.module
                        });

                        $('.module-list .box-wrap ul li#' + j.module).addClass('active');
                    });

                },
                editPage: function (groupIndex, group, pageIndex, page) {
                    const that = this;
                    const editObj = {
                        'groupIndex': groupIndex,
                        'group': group,
                        'pageIndex': pageIndex,
                        'page': page
                    };
                    if ($('.page-container.edit-ing').length > 0) {
                        $.smkConfirm({
                            text: '确定离开当前编辑页面？',
                            accept: '确定',
                            cancel: '取消'
                        }, function (res) {
                            if (res) {
                                that.editPageFun(editObj);
                            }
                        });
                    } else {
                        that.editPageFun(editObj);
                    }
                },
                deletePage: function (groupIndex, pageIndex) {
                    const that = this;
                    $.smkConfirm({
                        text: '确定删除该页面？',
                        accept: '确定',
                        cancel: '取消'
                    }, function (res) {
                        if (res) {
                            that.configureDatas.pages[groupIndex].data.splice(pageIndex, 1);
                            localStorage.setItem("configure", JSON.stringify(that.configureDatas));
                        }
                    });
                },
                pageUp: function (groupIndex, pageIndex) {
                    const pages = this.configureDatas.pages[groupIndex].data;

                    const changePage = pages[pageIndex];
                    pages.splice(pageIndex, 1);
                    pages.splice(pageIndex - 1, 0, changePage);
                    localStorage.setItem("configure", JSON.stringify(this.configureDatas));
                },
                pageDown: function (groupIndex, pageIndex) {
                    const pages = this.configureDatas.pages[groupIndex].data;

                    const changePage = pages[pageIndex];
                    pages.splice(pageIndex, 1);
                    pages.splice(pageIndex + 1, 0, changePage);
                    localStorage.setItem("configure", JSON.stringify(this.configureDatas));
                },
                loadPage: function (groupIndex, pageIndex) {
                    this.controller.widgets.removeAll();
                    $('.nav-list').eq(groupIndex).addClass('active').siblings().removeClass('active');
                    const widgets = this.configureDatas.pages[groupIndex].data[pageIndex].widgets;
                    for (let i = 0; i < widgets.length; i++) {
                        this.controller.widgets.push({
                            x: widgets[i].x,
                            y: widgets[i].y,
                            width: widgets[i].width,
                            height: widgets[i].height,
                            auto_position: false,
                            module: widgets[i].module
                        });
                    }
                },
                hrefPage: function (groupIndex, pageIndex) {
                    window.location.href = 'index.html?groupNum=' + groupIndex + '&pageNum=' + pageIndex + '&timestamp=' + new Date().getTime();
                },
                openGroupList: function (i, j) {
                    const that = this;
                    that.pageList.index = i;
                    that.pageList.data = j.data;
                    $('.nav-links').addClass('open').siblings('.page-menu').find('.nav-list').removeClass('hover').eq(i).addClass('hover');
                },
                closeGroupList: function () {
                    $('.nav-links').removeClass('open').siblings('.page-menu').find('.nav-list').removeClass('hover');
                },
                groupBasics: function (item) {
                    const that = this;
                    if (item) {
                        that.editGroupId = item.id;
                        $('#group_name').val(item.typeName);
                        $('.modal .page-icons li').removeClass('active');
                        $('.modal .page-icons li[data-name=' + item.icon + ']').addClass('active');
                    } else {
                        that.editGroupId = '';
                        $('#group_name').val('');
                        $('.modal .page-icons li').removeClass('active');
                    }
                    $('#groupBasicsModal').modal({backdrop: false});
                },
                deleteGroup: function (item) {
                    const that = this;
                    if (item.data.length > 0) {
                        $.smkConfirm({
                            text: '该分类包含页面，不可删除！',
                            accept: '确定',
                            cancel: false
                        }, function (res) {
                        });
                    } else {
                        $.smkConfirm({
                            text: '确定删除该分类？',
                            accept: '确定',
                            cancel: '取消'
                        }, function (res) {
                            if (res) {
                                const pages = that.configureDatas.pages;

                                $.each(pages, function (i, j) {
                                    if (j.id == item.id) {
                                        pages.splice(i, 1);
                                        localStorage.setItem("configure", JSON.stringify(that.configureDatas));
                                        return false;
                                    }
                                });
                            }
                        });
                    }

                }
            }
        });
        // });
    });
});
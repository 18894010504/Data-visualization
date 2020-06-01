var theme = 'normal';
var light = 'light';

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('normal', {
        "color": [
            "#2d8cf0",
            "#19be6b",
            "#ff9900",
            "#ed3f14",
            "#5cadff"
        ],
        "textStyle": {},
        "title": {
            "padding": 15,
            "itemGap": 5,
            "textStyle": {
                "fontSize": 16,
                "color": "#ffaf51",
                "fontWeight": 'normal'
            },
            "subtextStyle": {
                "fontSize": 14,
                "color": "#999",
                "fontStyle": "italic"
            }
        },
        "grid": {
            "top": 48,
            "left": 0,
            "right": 4,
            "bottom": 4,
            "containLabel": true
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "8",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "8",
            "smooth": false
        },
        "bar": {
            "barMaxWidth": 24,
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                },
                "emphasis": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                }
            }
        },
        "pie": {
            "center": ['50%', '50%'],
            "labelLine": {
                "normal": {
                    "length": 5,
                    "length2": 5
                }
            },
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "opacity": 1,
                    "shadowColor": 'rgba(0, 0, 0, 1)',
                    "shadowBlur": 10,
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#ffee51",
                    "color0": "#ffffff",
                    "borderColor": "#ff715e",
                    "borderColor0": "#797fba",
                    "borderWidth": "1"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2",
                    "color": "#999"
                }
            },
            "symbolSize": "8",
            "smooth": false,
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#fff"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#e9eaec",
                    "borderColor": "#fff",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255, 175, 81, 0.5)",
                    "borderColor": "#fff",
                    "borderWidth": 0.5
                }
            },
            "label": {
                "normal": {
                    "show": true,
                    "distance": 2,
                    "color": "#d87a80",
                    "textBorderWidth": 0.5,
                    "textBorderColor": "rgba(0, 0, 0, 0.2)"
                },
                "emphasis": {
                    "color": "#d87a80"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#323c48",
                    "borderColor": "#111",
                    "borderWidth": 1
                },
                "emphasis": {
                    "areaColor": "#323c48",
                    "borderColor": "#111",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(255,238,81)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#dddee1"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#dddee1"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#657180",
                "fontSize": 12
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#f8f8f9"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#dddee1"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#dddee1"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#9ea7b4",
                "fontSize": 12
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#f8f8f9"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#555555"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#555555"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999999"
                },
                "emphasis": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "top": 0,
            "left": "auto",
            "right": 0,
            "itemWidth": 16,
            "itemHeight": 12,
            "textStyle": {
                "color": "#657180",
                "fontSize": 12
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#dddee1",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#dddee1",
                    "width": 1
                }
            },
            "backgroundColor": "#fff",
            "borderWidth": 1,
            "borderColor": "#dddee1",
            "padding": [8, 12],
            "textStyle": {
                "color": "#657180",
                "fontSize": 12
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#ffaf51",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#ffaf51",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#ffaf51"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#ffaf51",
                    "borderColor": "#ffaf51",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#ffaf51",
                    "borderColor": "#ffaf51",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#ff715e",
                "borderColor": "rgba(255,113,94,0.4)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ff715e"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#ff715e"
                    }
                }
            }
        },
        "visualMap": {
            "left": 0,
            "bottom": 0,
            "calculable": false,
            "itemHeight": 80,
            "color": [
                "#5ab1ef",
                "#e0ffff"
            ],
            "textStyle": {
                "fontSize": 12,
                "color": '#657180'
            }
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(222,222,222,1)",
            "fillerColor": "rgba(255,113,94,0.2)",
            "handleColor": "#cccccc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#999999"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#333333"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#333333"
                    }
                }
            }
        }
    });

    echarts.registerTheme('light', {
        "color": [
            "#ed3f14",
            "#ff9900",
            "#5cadff",
            "#2d8cf0",
            "#19be6b"
        ],
        "textStyle": {},
        "title": {
            "padding": 15,
            "itemGap": 5,
            "textStyle": {
                "fontSize": 16,
                "color": "#ffaf51",
                "fontWeight": 'normal'
            },
            "subtextStyle": {
                "fontSize": 14,
                "color": "#999",
                "fontStyle": "italic"
            }
        },
        "grid": {
            "top": 24,
            "left": 0,
            "right": 4,
            "bottom": 4,
            "containLabel": true
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "8",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "8",
            "smooth": false
        },
        "bar": {
            "barMaxWidth": 24,
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                },
                "emphasis": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                }
            }
        },
        "pie": {
            "center": ['50%', '50%'],
            "labelLine": {
                "normal": {
                    "length": 5,
                    "length2": 5
                }
            },
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "opacity": 1,
                    "shadowColor": 'rgba(0, 0, 0, 1)',
                    "shadowBlur": 10,
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#ffee51",
                    "color0": "#ffffff",
                    "borderColor": "#ff715e",
                    "borderColor0": "#797fba",
                    "borderWidth": "1"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2",
                    "color": "#999"
                }
            },
            "symbolSize": "8",
            "smooth": false,
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#fff"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#e9eaec",
                    "borderColor": "#fff",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255, 175, 81, 0.5)",
                    "borderColor": "#fff",
                    "borderWidth": 0.5
                }
            },
            "label": {
                "normal": {
                    "show": true,
                    "distance": 2,
                    "color": "#d87a80",
                    "textBorderWidth": 0.5,
                    "textBorderColor": "rgba(0, 0, 0, 0.2)"
                },
                "emphasis": {
                    "color": "#d87a80"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#323c48",
                    "borderColor": "#111",
                    "borderWidth": 1
                },
                "emphasis": {
                    "areaColor": "#323c48",
                    "borderColor": "#111",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(255,238,81)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255, 255, 255, 0.5)"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255, 255, 255, 0.5)"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#fff",
                "fontSize": 12
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#f8f8f9"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#dddee1"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#dddee1"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255, 255, 255, 0.5)",
                "fontSize": 12
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(255, 255, 255, 0.1)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#555555"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#555555"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999999"
                },
                "emphasis": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "top": 0,
            "left": "auto",
            "right": 0,
            "itemWidth": 16,
            "itemHeight": 12,
            "textStyle": {
                "color": "#657180",
                "fontSize": 12
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#dddee1",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#dddee1",
                    "width": 1
                }
            },
            "backgroundColor": "#fff",
            "borderWidth": 1,
            "borderColor": "#dddee1",
            "padding": [8, 12],
            "textStyle": {
                "color": "#657180",
                "fontSize": 12
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#ffaf51",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#ffaf51",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#ffaf51"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#ffaf51",
                    "borderColor": "#ffaf51",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#ffaf51",
                    "borderColor": "#ffaf51",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#ff715e",
                "borderColor": "rgba(255,113,94,0.4)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ff715e"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#ff715e"
                    }
                }
            }
        },
        "visualMap": {
            "left": 0,
            "bottom": 0,
            "calculable": false,
            "itemHeight": 80,
            "color": [
                "#5ab1ef",
                "#e0ffff"
            ],
            "textStyle": {
                "fontSize": 12,
                "color": '#657180'
            }
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(222,222,222,1)",
            "fillerColor": "rgba(255,113,94,0.2)",
            "handleColor": "#cccccc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#999999"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#333333"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#333333"
                    }
                }
            }
        }
    });

}));
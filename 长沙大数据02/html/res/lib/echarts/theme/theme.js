var theme = 'BigDataPe';

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
    echarts.registerTheme('halloween', {
        "color": [
            "#ff715e",
            "#E87C25",
            "#ffaf51",
            "#FCCE10",
            "#715c87",
            "#D7504B",
            "#B5C334",
            "#27727B",
            "#C6E579",
            "#F4E001",
            "#26C0C0",
            "#C1232B",
            "#FAD860",
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
            "top": 15,
            "left": 15,
            "right": 15,
            "bottom": 15,
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
            "smooth": false
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
            "barWidth": "56%",
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
                    "areaColor": "#323c48",
                    "borderColor": "#ffaf51",
                    "borderWidth": 2
                },
                "emphasis": {
                    "areaColor": "rgba(255,175,81,0.5)",
                    "borderColor": "#ffaf51",
                    "borderWidth": 2
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
                    "color": "#666"
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
                    "color": "#fff",
                    "fontSize": 12
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
        "valueAxis": {
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
            "top": 13,
            "left": "auto",
            "right": 15,
            "textStyle": {
                "color": "#fff",
                "fontSize": 14,
                "textBorderColor": "#000",
                "textBorderWidth": 3,
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
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
            "left": 15,
            "bottom": 10,
            "calculable": false,
            "color": [
                "#ff715e",
                "#E87C25",
                "#ffaf51",
                "#FCCE10"
            ],
            "textStyle": {
                "fontSize": 14,
                "color": '#fff'
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

    echarts.registerTheme('BigDataPe_old', {
        "color": [
            "#2DE7FF",
            "#FF001F",
            "#FF9F00",
            "#01B8AA",
            "#374648",
            "#FD625E",
            "#FE9666",
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "label": {
            "normal": {
                "fontSize": "12",
                "textBorderColor": '#000',
                "textBorderWidth": 3,
            },
            "emphasis": {
                "fontSize": "12",
            }
        },
        "title": {
            "show": false,
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": true,
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                }
            }
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true
        },
        "bar": {
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                }
            },
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 2,
                    "barBorderRadius": [4, 4, 0, 0],

                },
                "emphasis": {
                    "barBorderWidth": 2,
                }
            }
        },
        "pie": {
            "radius": ["48%", "60%"],
            "label": {
                "normal": {}
            },
            "labelLine": {
                "normal": {
                    "show": true,
                    "smooth": 0,
                    "length": 10,
                    "length2": 10,
                    "lineStyle": {
                        "width": 3,
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "borderWidth": 2,
                    "borderColor": "#fff"
                },
                "emphasis": {
                    "borderWidth": 2,
                    "borderColor": "#fff"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c12e34",
                    "color0": "#2b821d",
                    "borderColor": "#c12e34",
                    "borderColor0": "#2b821d",
                    "borderWidth": "1"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2",
                    "color": "#cccccc"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true,
            "color": [
                "#c12e34",
                "#e6b600",
                "#0098d9",
                "#2b821d",
                "#005eaa",
                "#339ca8",
                "#cda819",
                "#32a487"
            ],
            "label": {
                "normal": {
                    "color": "#eeeeee",
                    "fontSize": "26",
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "rgba(255,255,255,.4)",
                    "borderWidth": "2",

                },
                "emphasis": {
                    "areaColor": "#3599B8",
                    "borderColor": "#ffffff",
                    "borderWidth": "2"
                }
            },
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    "Color": "#fff",
                },
                "emphasis": {
                    "color": "rgb(193,46,52)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "rgba(255,255,255,1)",
                    "borderWidth": "1",

                },
                "emphasis": {
                    "areaColor": null,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 20,
                    "borderWidth": 1,
                    "shadowColor": 'rgba(0, 0, 0, 0.5)'
                }
            },
            "label": {
                "normal": {
                    "color": "#fff"
                },
                "emphasis": {
                    "color": "#1abdd2"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,1)"
            },
            "axisPointer": {},
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333",
                    "width": "2",
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.2)",
                    "width": "2",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,.3)",
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "inside": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#06467c"
                },
                "emphasis": {
                    "borderColor": "#4187c2"
                }
            }
        },
        "legend": {
            "top": 10,
            "left": 15,
            "itemGap": 5,
            "textStyle": {
                "color": "#ddd",
                "fontSize": "12",
                "textBorderColor": "#000",
                "textBorderWidth": 3,
            },
            "backgroundColor": "rgba(255,255,255,.05)",
        },
        "tooltip": {
            "axisPointer": {
                //              "lineStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              },
                //              "crossStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#005eaa",
                "width": "2"
            },
            "itemStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderWidth": "2"
                },
                "emphasis": {
                    "color": "#005eaa"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                },
                "emphasis": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                }
            },
            "checkpointStyle": {
                "color": "#005eaa",
                "borderColor": "rgba(49,107,194,0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                }
            }
        },
        "visualMap": {
            "itemWidth": 11,
            "itemHeight": 40,
            "bottom": 50,
            "left": 55,
            "silent": true,
            "orient": "horizontal",
            "realtime": false,
            "calculable": false,
            "textStyle": {
                "color": '#ddd',
                "fontSize": 11,
            },
            "inRange": {
                "color": ['#2d5d81', '#2de7ff']
            },
            "color": [
                "#8AD4EB",
                "#FD625E"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        }
    });

    echarts.registerTheme('BigDataPe_old1', {
        "color": [
            "#02A4CE",
            "#178CF2",
            "#67CEF8",
            "#77E5EA",
            "#FD6631",
            "#D63980",
            "#FE9666",
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "label": {
            "normal": {
                "fontSize": "12",
                "textBorderColor": '#000',
                "textBorderWidth": 3,
            },
            "emphasis": {
                "fontSize": "12",
            }
        },
        "title": {
            "show": false,
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": true,
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                }
            }
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true
        },
        "bar": {
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    // "color":'#0ea6b2'
                }
            },
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 2,
                    "barBorderRadius": [4, 4, 0, 0],
                    // "color": new echarts.graphic.LinearGradient(
                    //     0, 0, 0, 1,
                    //     [
                    //         {"offset": 0, "color": '#0ea6b2'},
                    //         {"offset": 0.5, "color": '#5f53b0'},
                    //         {"offset": 1, "color": '#2c2c4d'}
                    //     ]
                    // )

                },
                "emphasis": {
                    "barBorderWidth": 2,
                }
            }
        },
        "pie": {
            "radius": ["48%", "60%"],
            "label": {
                "normal": {}
            },
            "labelLine": {
                "normal": {
                    "show": true,
                    "smooth": 0,
                    "length": 10,
                    "length2": 10,
                    "lineStyle": {
                        "width": 3,
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#fff"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#fff"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c12e34",
                    "color0": "#2b821d",
                    "borderColor": "#c12e34",
                    "borderColor0": "#2b821d",
                    "borderWidth": "1"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2",
                    "color": "#cccccc"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true,
            "color": [
                "#c12e34",
                "#e6b600",
                "#0098d9",
                "#2b821d",
                "#005eaa",
                "#339ca8",
                "#cda819",
                "#32a487"
            ],
            "label": {
                "normal": {
                    "color": "#eeeeee",
                    "fontSize": "26",
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "rgba(255,255,255,.4)",
                    "borderWidth": "2",
                    "color": "#fff"
                },
                "emphasis": {
                    "areaColor": "#3599B8",
                    "borderColor": "#0099df",
                    "borderWidth": "2",

                }
            },
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    "Color": "#fff",
                },
                "emphasis": {
                    "color": "rgb(193,46,52)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "#fff",
                    "borderWidth": "1",

                },
                "emphasis": {
                    "areaColor": null,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 20,
                    "borderWidth": 1,
                    "shadowColor": 'rgba(0, 0, 0, 0.5)',
                     "color": "#ffd84b"
                }
            },
            "label": {
                "normal": {
                    "color": "#fff"
                },
                "emphasis": {
                    "color": "#1abdd2"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,1)"
            },
            "axisPointer": {},
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333",
                    "width": "2",
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.2)",
                    "width": "2",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,.3)",
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "inside": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#06467c"
                },
                "emphasis": {
                    "borderColor": "#4187c2"
                }
            }
        },
        "legend": {
            "top": 10,
            "left": 15,
            "itemGap": 5,
            "textStyle": {
                "color": "#ddd",
                "fontSize": "12",
                "textBorderColor": "#000",
                "textBorderWidth": 3,
            },
            "backgroundColor": "rgba(255,255,255,.05)",
        },
        "tooltip": {
            "axisPointer": {
                //              "lineStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              },
                //              "crossStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#005eaa",
                "width": "2"
            },
            "itemStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderWidth": "2"
                },
                "emphasis": {
                    "color": "#005eaa"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                },
                "emphasis": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                }
            },
            "checkpointStyle": {
                "color": "#005eaa",
                "borderColor": "rgba(49,107,194,0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                }
            }
        },
        "visualMap": {
            "itemWidth": 11,
            "itemHeight": 40,
            "bottom": 50,
            "left": 55,
            "silent": true,
            "orient": "horizontal",
            "realtime": false,
            "calculable": false,
            "textStyle": {
                "color": '#ddd',
                "fontSize": 11,
            },
            "inRange": {
                "color": ['#95eaff', '#178CF2']
            },
            "color": [
                "#8AD4EB",
                "#FD625E"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        }
    });
    echarts.registerTheme('BigDataPe_old2', {
        "color": [
            "#FC6632",
            "#FDD325",
            "#77E5EA",
            "#2756CA",
            "#C30000",
            "#8CC641",
            "#564FAC",
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "label": {
            "normal": {
                "fontSize": "12",
                "textBorderColor": '#000',
                "textBorderWidth": 3,
            },
            "emphasis": {
                "fontSize": "12",
            }
        },
        "title": {
            "show": false,
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": true,
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                }
            }
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true
        },
        "bar": {
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    // "color":'#0ea6b2'
                }
            },
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 2,
                    "barBorderRadius": [4, 4, 0, 0],
                    // "color": new echarts.graphic.LinearGradient(
                    //     0, 0, 0, 1,
                    //     [
                    //         {"offset": 0, "color": '#0ea6b2'},
                    //         {"offset": 0.5, "color": '#5f53b0'},
                    //         {"offset": 1, "color": '#2c2c4d'}
                    //     ]
                    // )

                },
                "emphasis": {
                    "barBorderWidth": 2,
                }
            }
        },
        "pie": {
            "radius": ["48%", "60%"],
            "label": {
                "normal": {}
            },
            "labelLine": {
                "normal": {
                    "show": true,
                    "smooth": 0,
                    "length": 10,
                    "length2": 10,
                    "lineStyle": {
                        "width": 3,
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#fff"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#fff"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc",


                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c12e34",
                    "color0": "#2b821d",
                    "borderColor": "#c12e34",
                    "borderColor0": "#2b821d",
                    "borderWidth": "1"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2",
                    "color": "#cccccc"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true,
            "color": [
                "#c12e34",
                "#e6b600",
                "#0098d9",
                "#2b821d",
                "#005eaa",
                "#339ca8",
                "#cda819",
                "#32a487"
            ],
            "label": {
                "normal": {
                    "color": "#eeeeee",
                    "fontSize": "26",
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "rgba(255,255,255,.4)",
                    "borderWidth": "2",
                    "color": "#fff"
                },
                "emphasis": {
                    "areaColor": "#3599B8",
                    "borderColor": "#0099df",
                    "borderWidth": "2",

                }
            },
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    "Color": "#fff",
                },
                "emphasis": {
                    "color": "rgb(193,46,52)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "#fff",
                    "borderWidth": "1",

                },
                "emphasis": {
                    "areaColor": null,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 20,
                    "borderWidth": 1,
                    "shadowColor": 'rgba(0, 0, 0, 0.5)',
                    "color": "#ffd84b"
                }
            },
            "label": {
                "normal": {
                    "color": "#fff"
                },
                "emphasis": {
                    "color": "#1abdd2"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,1)"
            },
            "axisPointer": {},
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333",
                    "width": "2",
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.2)",
                    "width": "2",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,.3)",
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "inside": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#06467c"
                },
                "emphasis": {
                    "borderColor": "#4187c2"
                }
            }
        },
        "legend": {
            "top": 10,
            "left": 15,
            "itemGap": 5,
            "textStyle": {
                "color": "#ddd",
                "fontSize": "12",
                "textBorderColor": "#000",
                "textBorderWidth": 3,
            },
            "backgroundColor": "rgba(255,255,255,.05)",
        },
        "tooltip": {
            "axisPointer": {
                //              "lineStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              },
                //              "crossStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#005eaa",
                "width": "2"
            },
            "itemStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderWidth": "2"
                },
                "emphasis": {
                    "color": "#005eaa"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                },
                "emphasis": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                }
            },
            "checkpointStyle": {
                "color": "#005eaa",
                "borderColor": "rgba(49,107,194,0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                }
            }
        },
        "visualMap": {
            "itemWidth": 11,
            "itemHeight": 40,
            "bottom": 50,
            "left": 55,
            "silent": true,
            "orient": "horizontal",
            "realtime": false,
            "calculable": false,
            "textStyle": {
                "color": '#ddd',
                "fontSize": 11,
            },
            "inRange": {
                "color": ['#95eaff', '#178CF2']
            },
            "color": [
                "#8AD4EB",
                "#FD625E"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        }
    });
    echarts.registerTheme('BigDataPe_old3', {
        "color": [
            "#77E5EA",
            "#8DAF00",
            "#FDD325",
            "#008EB8",
            "#C30000",
            "#564FAC",
            "#FC6632",
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "label": {
            "normal": {
                "fontSize": "12",
                "textBorderColor": '#000',
                "textBorderWidth": 3,
            },
            "emphasis": {
                "fontSize": "12",
            }
        },
        "title": {
            "show": false,
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": true,
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                }
            }
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true
        },
        "bar": {
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    // "color":'#0ea6b2'
                }
            },
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 2,
                    "barBorderRadius": [4, 4, 0, 0],
                    // "color": new echarts.graphic.LinearGradient(
                    //     0, 0, 0, 1,
                    //     [
                    //         {"offset": 0, "color": '#0ea6b2'},
                    //         {"offset": 0.5, "color": '#5f53b0'},
                    //         {"offset": 1, "color": '#2c2c4d'}
                    //     ]
                    // )

                },
                "emphasis": {
                    "barBorderWidth": 2,
                }
            }
        },
        "pie": {
            "radius": ["48%", "60%"],
            "label": {
                "normal": {}
            },
            "labelLine": {
                "normal": {
                    "show": true,
                    "smooth": 0,
                    "length": 10,
                    "length2": 10,
                    "lineStyle": {
                        "width": 3,
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#fff"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#fff"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c12e34",
                    "color0": "#2b821d",
                    "borderColor": "#c12e34",
                    "borderColor0": "#2b821d",
                    "borderWidth": "1"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2",
                    "color": "#cccccc"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true,
            "color": [
                "#c12e34",
                "#e6b600",
                "#0098d9",
                "#2b821d",
                "#005eaa",
                "#339ca8",
                "#cda819",
                "#32a487"
            ],
            "label": {
                "normal": {
                    "color": "#eeeeee",
                    "fontSize": "26",
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "rgba(255,255,255,.4)",
                    "borderWidth": "2",
                    "color": "#fff"
                },
                "emphasis": {
                    "areaColor": "#3599B8",
                    "borderColor": "#0099df",
                    "borderWidth": "2",

                }
            },
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    "Color": "#fff",
                },
                "emphasis": {
                    "color": "rgb(193,46,52)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "#fff",
                    "borderWidth": "1",

                },
                "emphasis": {
                    "areaColor": null,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 20,
                    "borderWidth": 1,
                    "shadowColor": 'rgba(0, 0, 0, 0.5)',
                    "color": "#ffd84b"
                }
            },
            "label": {
                "normal": {
                    "color": "#fff"
                },
                "emphasis": {
                    "color": "#1abdd2"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,1)"
            },
            "axisPointer": {},
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333",
                    "width": "2",
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.2)",
                    "width": "2",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,.3)",
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "inside": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#06467c"
                },
                "emphasis": {
                    "borderColor": "#4187c2"
                }
            }
        },
        "legend": {
            "top": 10,
            "left": 15,
            "itemGap": 5,
            "textStyle": {
                "color": "#ddd",
                "fontSize": "12",
                "textBorderColor": "#000",
                "textBorderWidth": 3,
            },
            "backgroundColor": "rgba(255,255,255,.05)",
        },
        "tooltip": {
            "axisPointer": {
                //              "lineStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              },
                //              "crossStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#005eaa",
                "width": "2"
            },
            "itemStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderWidth": "2"
                },
                "emphasis": {
                    "color": "#005eaa"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                },
                "emphasis": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                }
            },
            "checkpointStyle": {
                "color": "#005eaa",
                "borderColor": "rgba(49,107,194,0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                }
            }
        },
        "visualMap": {
            "itemWidth": 11,
            "itemHeight": 40,
            "bottom": 50,
            "left": 55,
            "silent": true,
            "orient": "horizontal",
            "realtime": false,
            "calculable": false,
            "textStyle": {
                "color": '#ddd',
                "fontSize": 11,
            },
            "inRange": {
                "color": ['#95eaff', '#178CF2']
            },
            "color": [
                "#8AD4EB",
                "#FD625E"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        }
    });
    echarts.registerTheme('BigDataPe', {
        "color": [
            "#1DB1A0",
            "#FEE349",
            "#FFA409",
            "#8cc641",
            "#FA792E",
			"#40CAF0",
			"#4D9C12"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "label": {
            "normal": {
                "fontSize": "12",
                "textBorderColor": '#000',
                "textBorderWidth": 3,
            },
            "emphasis": {
                "fontSize": "12",
            }
        },
        "title": {
            "show": false,
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3",
                    "shadowColor": "rgba(0, 0, 0, .3)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 3,
                    "shadowOffsetY": 3,
                }
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": true,
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                }
            }
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true
        },
        "bar": {
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    // "color":'#0ea6b2'
                }
            },
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 2,
                    "barBorderRadius": [4, 4, 0, 0],
                    // "color": new echarts.graphic.LinearGradient(
                    //     0, 0, 0, 1,
                    //     [
                    //         {"offset": 0, "color": '#0ea6b2'},
                    //         {"offset": 0.5, "color": '#5f53b0'},
                    //         {"offset": 1, "color": '#2c2c4d'}
                    //     ]
                    // )

                },
                "emphasis": {
                    "barBorderWidth": 2,
                }
            }
        },
        "pie": {
            "radius": ["48%", "60%"],
            "label": {
                "normal": {}
            },
            "labelLine": {
                "normal": {
                    "show": true,
                    "smooth": 0,
                    "length": 10,
                    "length2": 10,
                    "lineStyle": {
                        "width": 3,
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#fff"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#fff"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c12e34",
                    "color0": "#2b821d",
                    "borderColor": "#c12e34",
                    "borderColor0": "#2b821d",
                    "borderWidth": "1"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2",
                    "color": "#cccccc"
                }
            },
            "symbolSize": "10",
            "symbol": "emptyCircle",
            "smooth": true,
            "color": [
                "#c12e34",
                "#e6b600",
                "#0098d9",
                "#2b821d",
                "#005eaa",
                "#339ca8",
                "#cda819",
                "#32a487"
            ],
            "label": {
                "normal": {
                    "color": "#eeeeee",
                    "fontSize": "26",
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "rgba(255,255,255,.4)",
                    "borderWidth": "2",
                    "color": "#fff"
                },
                "emphasis": {
                    "areaColor": "#3599B8",
                    "borderColor": "#0099df",
                    "borderWidth": "2",

                }
            },
            "label": {
                "normal": {
                    "textBorderColor": '#000',
                    "textBorderWidth": 3,
                    "Color": "#fff",
                },
                "emphasis": {
                    "color": "rgb(193,46,52)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#2d5d81",
                    "borderColor": "#fff",
                    "borderWidth": "1",

                },
                "emphasis": {
                    "areaColor": null,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 20,
                    "borderWidth": 1,
                    "shadowColor": 'rgba(0, 0, 0, 0.5)',
                    "color": "#ffd84b"
                }
            },
            "label": {
                "normal": {
                    "color": "#fff"
                },
                "emphasis": {
                    "color": "#1abdd2"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,1)",
                    "width": "1",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,1)"
            },
            "axisPointer": {},
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333",
                    "width": "2",
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,.2)",
                    "width": "2",
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,.3)",
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,.1)",

                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "inside": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#06467c"
                },
                "emphasis": {
                    "borderColor": "#4187c2"
                }
            }
        },
        "legend": {
            "top": 10,
            "left": 15,
            "itemGap": 5,
            "textStyle": {
                "color": "#ddd",
                "fontSize": "12",
                "textBorderColor": "#000",
                "textBorderWidth": 3,
            },
            "backgroundColor": "rgba(255,255,255,.05)",
        },
        "tooltip": {
            "axisPointer": {
                //              "lineStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              },
                //              "crossStyle": {
                //                  "color": "#999",
                //                  "width": "5"
                //              }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#005eaa",
                "width": "2"
            },
            "itemStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderWidth": "2"
                },
                "emphasis": {
                    "color": "#005eaa"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                },
                "emphasis": {
                    "color": "#005eaa",
                    "borderColor": "#005eaa",
                    "borderWidth": "1"
                }
            },
            "checkpointStyle": {
                "color": "#005eaa",
                "borderColor": "rgba(49,107,194,0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#005eaa"
                    }
                }
            }
        },
        "visualMap": {
            "itemWidth": 11,
            "itemHeight": 40,
            "bottom": 50,
            "left": 55,
            "silent": true,
            "orient": "horizontal",
            "realtime": false,
            "calculable": false,
            "textStyle": {
                "color": '#ddd',
                "fontSize": 11,
            },
            "inRange": {
                "color": ['#32B5DC', '#0A476B']
            },
            "color": [
                "#8AD4EB",
                "#FD625E"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        }
    });

}));
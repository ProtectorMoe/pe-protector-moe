String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};


/**
 * 地图的解析工作
 */
var PveMap;
(function (map) {
    var _maps = {};
    map.getMap = function (index) {
        return _maps[String(index)];
    };
    map.getEnemy = function (index, node) {
        return _maps && _maps[index] && _maps[index]["node"][node] && _maps[index]["node"][node]["enemy"];
    };
    map.getDrop = function (index, node) {
        return _maps && _maps[index] && _maps[index]["node"][node] && _maps[index]["node"][node]["drop"];
    };
	map.getSrc = function (index, node) {
	    return _maps && _maps[index] && _maps[index]["img"];
	};
	map.getText = function (index, node) {
	    return _maps && _maps[index] && _maps[index]["text"];
	};

	map.getNode = function(index) {
        var nodes = [];
        var maps = this.getMap(index);
        for (var node in maps.node) {
            if (maps.node.hasOwnProperty(node)) {
                nodes.push(node);
            }
        }
        return nodes;
    };

	map.getAllMap = function() {
		var data = [];
		for (var i in _maps) {
			if (_maps.hasOwnProperty(i)) {
				data.push({"value": i, "text": _maps[i]["text"]});
			}
		}
		return data;
	};

    var init = function () {
        _maps = {};
        _maps['101'] = {
            'text': '1-1 | 母港附近海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_1-1.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'A': {
                    'enemy': ['单纵 : 驱逐', '单纵 : 驱逐', '单纵 : 轻巡'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }]
                },
                'B': {
                    'enemy': ['单纵 : 驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐', '单纵 : 轻巡|轻巡|轻巡|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '紫石英', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}]
                },
                'C': {
                    'enemy': ['单纵 : 驱逐|驱逐', '单纵 : 驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }]
                }
            }
        };
        _maps['102'] = {
            'text': '1-2 | 东北防线海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_1-2.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['单纵 : 驱逐|驱逐|驱逐|驱逐', '单纵 : 驱逐|驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}]
                },
                'A': {
                    'enemy': ['单纵 : 驱逐|驱逐', '单纵 : 驱逐|驱逐', '单纵 : 轻巡|轻巡'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}]
                },
                'B': {
                    'enemy': ['单纵 : 驱逐|驱逐', '单纵 : 驱逐|驱逐', '单纵 : 轻巡|轻巡'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}]
                },
                'C': {
                    'enemy': ['单纵 : 轻巡|轻巡|驱逐|驱逐', '单纵 : 重巡|轻巡|轻巡|驱逐', '单纵 : 轻巡|轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}]
                }
            }
        };
        _maps['103'] = {
            'text': '1-3 | 仁州附近海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_1-3.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['单纵 : 轻巡|轻巡|驱逐|驱逐', '复纵 : 轻巡|轻巡|轻巡|驱逐', '复纵 : 重巡|轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }]
                },
                'E': {
                    'enemy': ['单纵 : 轻巡|轻巡|驱逐|驱逐', '复纵 : 轻巡|轻巡|轻巡|驱逐', '复纵 : 重巡|轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }]
                },
                'F': {
                    'enemy': ['单纵 : 轻巡|轻巡|驱逐|驱逐', '复纵 : 轻巡|轻巡|轻巡|驱逐|驱逐', '单纵 : 重巡|轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }]
                },
                'A': {
                    'enemy': ['单纵 : 驱逐|驱逐', '单纵 : 驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }]
                },
                'B': {
                    'enemy': ['单纵 : 驱逐|驱逐', '单纵 : 驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }]
                },
                'C': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}
            }
        };
        _maps['104'] = {
            'text': '1-4 | 深海仁州基地',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_1-4.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['单纵 : 驱逐|驱逐|驱逐|驱逐', '单纵 : 驱逐|驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}]
                },
                'E': {
                    'enemy': ['轮型 : 轻巡|轻巡|轻巡|驱逐|驱逐', '轮型 : 轻母|轻母|重巡|轻巡|轻巡|驱逐', '单纵 : 战列|重巡|轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '突击者', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '宁海', 'color': '#bf58cb'}, {'title': '平海', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }]
                },
                'F': {
                    'enemy': ['轮型 : 重巡|轻巡|轻巡|驱逐|驱逐', '轮型 : 轻巡|轻巡|轻巡|驱逐|驱逐', '轮型 : 轻巡|轻巡|驱逐|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}]
                },
                'G': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'A': {
                    'enemy': ['单纵 : 驱逐|驱逐|驱逐', '复纵 : 驱逐|驱逐|驱逐|驱逐', '复纵 : 轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'z21', 'color': '#636363'}, {
                        'title': 'z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }]
                },
                'B': {
                    'enemy': ['单纵 : 驱逐|驱逐|驱逐', '复纵 : 驱逐|驱逐|驱逐|驱逐', '复纵 : 轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}]
                },
                'C': {
                    'enemy': ['轮型 : 重巡|轻巡|轻巡|驱逐|驱逐', '轮型 : 轻巡|轻巡|轻巡|驱逐|驱逐', '轮型 : 轻巡|轻巡|驱逐|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}]
                }
            }
        };
        _maps['201'] = {
            'text': '2-1 | 扶桑西部海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_2-1.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'E': {
                    'enemy': ['单纵 : 战列|重巡|轻巡|轻巡|驱逐|驱逐', '复纵 : 战巡|战巡|重巡|轻巡|轻巡|驱逐', '轮型 : 航母|航母|战巡|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'F': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|重巡|轻巡|轻巡|驱逐', '单纵 : 战列|重巡|轻巡|轻巡|驱逐|驱逐', '复纵 : 战巡|战巡|重巡|轻巡|轻巡|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'z31', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '飞鹰',
                        'color': '#3882c1'
                    }, {'title': '隼鹰', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}]
                },
                'A': {
                    'enemy': ['复纵 : 驱逐|驱逐|驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐|驱逐|驱逐|驱逐', '复纵 : 战巡|轻巡|轻巡|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '绫波', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }]
                },
                'B': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'C': {
                    'enemy': ['复纵 : 轻巡|轻巡|轻巡|驱逐|驱逐|驱逐', '单纵 : 战巡|战巡|轻巡|驱逐|驱逐|驱逐', '轮型 : 轻母|轻母|轻巡|轻巡|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': 'z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }
            }
        };
        _maps['202'] = {
            'text': '2-2 | 扶桑西南海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_2-2.png@!530x298jpg80dpi?ver=201603180942',
            'node': {
                'D': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'E': {
                    'enemy': ['轮型 : 航母|航母|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战列|重巡|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|驱逐', '复纵 : 战巡|战巡|重巡|轻巡|轻巡|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'F': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|轻巡|轻巡|驱逐|驱逐', '单纵 : 战巡|战巡|轻巡|<font color=#bf58cb>驱逐</font>|驱逐|驱逐', '复纵 : <font color=#bf58cb>轻巡</font>|轻巡|轻巡|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '绫波', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'G': {
                    'enemy': ['轮型 : 战列|航母|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|轻巡|轻巡', '复纵 : 航母|航母|<font color=#bf58cb>轻母</font>|重巡|轻巡|轻巡', '轮型 : 战巡|战巡|航母|重巡|轻巡|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '飞鹰',
                        'color': '#3882c1'
                    }, {'title': '隼鹰', 'color': '#3882c1'}, {'title': '肇和', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '空想',
                        'color': '#FF9900'
                    }]
                }, 'A': {
                    'enemy': ['复纵 : 战巡|轻巡|轻巡|驱逐|驱逐|驱逐', '复纵 : <font color=#bf58cb>驱逐</font>|驱逐|驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '绫波', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }]
                }, 'B': {
                    'enemy': ['复纵 : <font color=#bf58cb>驱逐</font>|驱逐|驱逐|驱逐|驱逐', '单纵 : 轻巡|轻巡|驱逐|驱逐|驱逐|驱逐', '复纵 : 战巡|轻巡|轻巡|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '绫波', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }]
                }, 'C': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'H': {
                    'enemy': ['复纵 : 战巡|战巡|重巡|轻巡|轻巡|<font color=#bf58cb>驱逐</font>', '轮型 : 航母|航母|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战列|重巡|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }
            }
        };
        _maps['203'] = {
            'text': '2-3 | 扶桑南部海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_2-3.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>轻巡</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐', '单纵 : 战巡|战巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'E': {
                    'enemy': ['单纵 : 战巡|战巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>轻巡</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'F': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'G': {
                    'enemy': ['轮型 : 航母|航母|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战列|重巡|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|战巡|重巡|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'A': {
                    'enemy': ['复纵 : <font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐|驱逐', '复纵 : 战巡|轻巡|轻巡|驱逐|驱逐|驱逐', '单纵 : <font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }]
                }, 'B': {
                    'enemy': ['复纵 : <font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐|驱逐', '复纵 : 战巡|轻巡|轻巡|驱逐|驱逐|驱逐', '单纵 : <font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|驱逐|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }]
                }, 'C': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>轻巡</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'H': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>轻巡</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '紫石英', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'I': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'J': {
                    'enemy': ['复纵 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|重巡|轻巡|轻巡', '轮型 : 战巡|战巡|航母|重巡|轻巡|<font color=#bf58cb>驱逐</font>', '轮型 : 战列|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|轻巡|轻巡'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '应瑞',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '突击者', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}]
                }, 'K': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}
            }
        };
        _maps['204'] = {
            'text': '2-4 | 深海扶桑基地',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_2-4.png@!530x298jpg80dpi?ver=201603231736',
            'node': {
                'D': {
                    'enemy': ['复纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'E': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'F': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'G': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|驱逐|驱逐|驱逐', '复纵 : 战巡|轻巡|轻巡|驱逐|驱逐|驱逐', '复纵 : <font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}]
                }, 'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|驱逐|驱逐|驱逐', '复纵 : 战巡|轻巡|轻巡|驱逐|驱逐|驱逐', '复纵 : <font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐|驱逐'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}]
                }, 'C': {
                    'enemy': ['单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'L': {
                    'enemy': ['轮型 : 战列|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|重巡|<font color=#bf58cb>驱逐</font>', '复纵 : 战列|战列|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '轮型 : 战列|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|重巡|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '吹雪', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '绫波', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '紫石英',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '飞鹰',
                        'color': '#3882c1'
                    }, {'title': '隼鹰', 'color': '#3882c1'}, {'title': '妙高', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '突击者',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '宁海', 'color': '#bf58cb'}, {
                        'title': '平海',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}]
                }, 'H': {
                    'enemy': ['单纵 : 战列|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|战巡|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|航母|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '哥萨克人',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '紫石英', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'I': {
                    'enemy': ['复纵 : 战巡|战巡|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : 航母|航母|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战列|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '绫波',
                        'color': '#41a420'
                    }, {'title': '紫石英', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'J': {
                    'enemy': ['复纵 : 战巡|战巡|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|航母|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战列|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '敷波', 'color': '#636363'}, {'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '紫石英', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'K': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}
            }
        };
        _maps['205'] = {
            'text': '2-5 | 深海前哨核心地区',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_2-5.png@!530x298jpg80dpi?ver=201605050825',
            'node': {
                'D': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '那珂', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '古鹰',
                        'color': '#3882c1'
                    }, {'title': '加古', 'color': '#3882c1'}, {'title': '衣笠', 'color': '#3882c1'}, {
                        'title': '飞鹰',
                        'color': '#3882c1'
                    }, {'title': '隼鹰', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }]
                }, 'E': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'F': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '不知火',
                        'color': '#41a420'
                    }, {'title': '黑潮', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '金刚',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '古鹰',
                        'color': '#3882c1'
                    }, {'title': '加古', 'color': '#3882c1'}, {'title': '青叶', 'color': '#3882c1'}, {
                        'title': '衣笠',
                        'color': '#3882c1'
                    }, {'title': '阳炎', 'color': '#3882c1'}, {'title': '飞鹰', 'color': '#3882c1'}, {
                        'title': '隼鹰',
                        'color': '#3882c1'
                    }, {'title': '新墨西哥', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }]
                }, 'G': {
                    'enemy': ['梯形 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '- : -'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '不知火',
                        'color': '#41a420'
                    }, {'title': '黑潮', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '古鹰', 'color': '#3882c1'}, {
                        'title': '加古',
                        'color': '#3882c1'
                    }, {'title': '青叶', 'color': '#3882c1'}, {'title': '衣笠', 'color': '#3882c1'}, {
                        'title': '阳炎',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '飞龙',
                        'color': '#bf58cb'
                    }]
                }, 'A': {
                    'enemy': ['梯形 : <font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '古鹰',
                        'color': '#3882c1'
                    }, {'title': '加古', 'color': '#3882c1'}, {'title': '青叶', 'color': '#3882c1'}, {
                        'title': '衣笠',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}]
                }, 'B': {
                    'enemy': ['轮型 : <font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '不知火',
                        'color': '#41a420'
                    }, {'title': '黑潮', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '古鹰', 'color': '#3882c1'}, {
                        'title': '加古',
                        'color': '#3882c1'
                    }, {'title': '青叶', 'color': '#3882c1'}, {'title': '衣笠', 'color': '#3882c1'}, {
                        'title': '阳炎',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}]
                }, 'C': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'L': {
                    'enemy': ['梯形 : <font color=#FF4040>航母</font>|<font color=#FF4040>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF4040>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF4040>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '不知火',
                        'color': '#41a420'
                    }, {'title': '黑潮', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '古鹰',
                        'color': '#3882c1'
                    }, {'title': '加古', 'color': '#3882c1'}, {'title': '青叶', 'color': '#3882c1'}, {
                        'title': '衣笠',
                        'color': '#3882c1'
                    }, {'title': '阳炎', 'color': '#3882c1'}, {'title': '飞鹰', 'color': '#3882c1'}, {
                        'title': '隼鹰',
                        'color': '#3882c1'
                    }, {'title': '新墨西哥', 'color': '#3882c1'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '苍龙',
                        'color': '#bf58cb'
                    }, {'title': '雪风', 'color': '#FF9900'}]
                }, 'M': {
                    'enemy': ['梯形 : <font color=#FF4040>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF4040>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF4040>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '龙田', 'color': '#41a420'}, {'title': '那珂', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '涼月', 'color': '#41a420'}, {'title': '不知火', 'color': '#41a420'}, {
                        'title': '黑潮',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '比睿', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '古鹰', 'color': '#3882c1'}, {'title': '加古', 'color': '#3882c1'}, {
                        'title': '青叶',
                        'color': '#3882c1'
                    }, {'title': '衣笠', 'color': '#3882c1'}, {'title': '阳炎', 'color': '#3882c1'}, {
                        'title': '飞鹰',
                        'color': '#3882c1'
                    }, {'title': '隼鹰', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '雪风', 'color': '#FF9900'}]
                }, 'N': {
                    'enemy': ['梯形 : <font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '不知火',
                        'color': '#41a420'
                    }, {'title': '黑潮', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '古鹰', 'color': '#3882c1'}, {
                        'title': '加古',
                        'color': '#3882c1'
                    }, {'title': '青叶', 'color': '#3882c1'}, {'title': '衣笠', 'color': '#3882c1'}, {
                        'title': '阳炎',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '长门',
                        'color': '#bf58cb'
                    }, {'title': '雪风', 'color': '#FF9900'}]
                }, 'O': {
                    'enemy': ['复纵 : <font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '- : -', '- : -'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '不知火',
                        'color': '#41a420'
                    }, {'title': '黑潮', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '古鹰', 'color': '#3882c1'}, {
                        'title': '加古',
                        'color': '#3882c1'
                    }, {'title': '青叶', 'color': '#3882c1'}, {'title': '衣笠', 'color': '#3882c1'}, {
                        'title': '阳炎',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '雪风',
                        'color': '#FF9900'
                    }, {'title': '岛风', 'color': '#FF9900'}]
                }, 'H': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '不知火', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '古鹰', 'color': '#3882c1'}, {'title': '加古', 'color': '#3882c1'}, {
                        'title': '青叶',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}]
                }, 'I': {
                    'enemy': ['复纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '不知火', 'color': '#41a420'}, {
                        'title': '黑潮',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '古鹰', 'color': '#3882c1'}, {'title': '加古', 'color': '#3882c1'}, {
                        'title': '青叶',
                        'color': '#3882c1'
                    }, {'title': '衣笠', 'color': '#3882c1'}, {'title': '阳炎', 'color': '#3882c1'}, {
                        'title': '飞鹰',
                        'color': '#3882c1'
                    }, {'title': '隼鹰', 'color': '#3882c1'}, {'title': '新墨西哥', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}]
                }, 'J': {
                    'enemy': ['梯形 : <font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>', '复纵 : <font color=#FF4040>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>', '复纵 : <font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '不知火',
                        'color': '#41a420'
                    }, {'title': '黑潮', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '古鹰', 'color': '#3882c1'}, {
                        'title': '加古',
                        'color': '#3882c1'
                    }, {'title': '青叶', 'color': '#3882c1'}, {'title': '衣笠', 'color': '#3882c1'}, {
                        'title': '阳炎',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '陆奥',
                        'color': '#bf58cb'
                    }, {'title': '雪风', 'color': '#FF9900'}]
                }, 'K': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '那珂',
                        'color': '#41a420'
                    }, {'title': '不知火', 'color': '#41a420'}, {'title': '黑潮', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '古鹰',
                        'color': '#3882c1'
                    }, {'title': '加古', 'color': '#3882c1'}, {'title': '青叶', 'color': '#3882c1'}, {
                        'title': '衣笠',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}]
                }
            }
        };
        _maps['206'] = {
            'text': '2-6 | 深海前哨北方地区',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_2-6.png@!530x298jpg80dpi?ver=201610180926',
            'node': {
                'D': {
                    'enemy': ['梯形 : <font color=#FF9900>战巡</font>|<font color=#FF4040>战列</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '单纵 : <font color=#FF4040>轻母</font>|<font color=#FF4040>轻母</font>|<font color=#FF9900>战列</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF4040>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '川内',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '古鹰', 'color': '#3882c1'}, {'title': '加古', 'color': '#3882c1'}, {
                        'title': '青叶',
                        'color': '#3882c1'
                    }, {'title': '衣笠', 'color': '#3882c1'}, {'title': '飞鹰', 'color': '#3882c1'}, {
                        'title': '凤翔',
                        'color': '#3882c1'
                    }, {'title': '竹', 'color': '#3882c1'}]
                }, 'E': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '古鹰',
                        'color': '#3882c1'
                    }, {'title': '加古', 'color': '#3882c1'}, {'title': '青叶', 'color': '#3882c1'}, {
                        'title': '衣笠',
                        'color': '#3882c1'
                    }, {'title': '竹', 'color': '#3882c1'}]
                }, 'F': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '川内',
                        'color': '#41a420'
                    }, {'title': '神通', 'color': '#41a420'}, {'title': '那珂', 'color': '#41a420'}, {
                        'title': '黑潮',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '古鹰', 'color': '#3882c1'}, {'title': '加古', 'color': '#3882c1'}, {
                        'title': '青叶',
                        'color': '#3882c1'
                    }, {'title': '衣笠', 'color': '#3882c1'}, {'title': '阳炎', 'color': '#3882c1'}, {
                        'title': '飞鹰',
                        'color': '#3882c1'
                    }, {'title': '隼鹰', 'color': '#3882c1'}, {'title': '凤翔', 'color': '#3882c1'}, {
                        'title': '妙高',
                        'color': '#3882c1'
                    }, {'title': '竹', 'color': '#3882c1'}]
                }, 'G': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>战巡</font>|<font color=#FF4040>战列</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF9900>战巡</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '川内',
                        'color': '#41a420'
                    }, {'title': '神通', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '古鹰', 'color': '#3882c1'}, {
                        'title': '加古',
                        'color': '#3882c1'
                    }, {'title': '青叶', 'color': '#3882c1'}, {'title': '衣笠', 'color': '#3882c1'}, {
                        'title': '阳炎',
                        'color': '#3882c1'
                    }, {'title': '飞鹰', 'color': '#3882c1'}, {'title': '隼鹰', 'color': '#3882c1'}, {
                        'title': '凤翔',
                        'color': '#3882c1'
                    }, {'title': '妙高', 'color': '#3882c1'}]
                }, 'A': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>战巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '古鹰',
                        'color': '#3882c1'
                    }, {'title': '加古', 'color': '#3882c1'}, {'title': '青叶', 'color': '#3882c1'}, {
                        'title': '衣笠',
                        'color': '#3882c1'
                    }]
                }, 'B': {
                    'enemy': ['单纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '古鹰',
                        'color': '#3882c1'
                    }, {'title': '加古', 'color': '#3882c1'}, {'title': '青叶', 'color': '#3882c1'}, {
                        'title': '衣笠',
                        'color': '#3882c1'
                    }]
                }, 'C': {'enemy': [], 'drop': []}
            }
        };
        _maps['301'] = {
            'text': '3-1 | 母港南部海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_3-1.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['复纵 : 战巡|战巡|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : 战列|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '涼月', 'color': '#41a420'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'E': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'F': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '德·鲁伊特',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'G': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : 战列|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|战巡|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '哥萨克人',
                        'color': '#636363'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '秋月', 'color': '#41a420'}, {
                        'title': '涼月',
                        'color': '#41a420'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'A': {
                    'enemy': ['单纵 : 重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐', '单纵 : <font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|驱逐'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}]
                }, 'B': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '涼月', 'color': '#41a420'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'C': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'H': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : 战列|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|战巡|重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '德·鲁伊特',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'I': {
                    'enemy': ['轮型 : 战列|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '单纵 : 战列|战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '吹雪', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '涼月', 'color': '#41a420'}, {'title': '宵月', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '空想',
                        'color': '#FF9900'
                    }]
                }
            }
        };
        _maps['302'] = {
            'text': '3-2 | 东南群岛（1）',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_3-2.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|轻巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'E': {
                    'enemy': ['轮型 : <font color=#bf58cb>战列</font>|航母|轻母|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : 航母|航母|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'F': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'G': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 航母|航母|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '轮型 : <font color=#bf58cb>战列</font>|航母|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '吹雪', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '宵月',
                        'color': '#41a420'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '榛名', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '肇和',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '加贺', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {'title': 'Z22', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 重巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '龙田', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}]
                },
                'C': {
                    'enemy': ['单纵 : 轻巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }
            }
        };
        _maps['303'] = {
            'text': '3-3 | 东南群岛（2）',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_3-3.png@!530x298jpg80dpi?ver=201605250854',
            'node': {
                'D': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'E': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '哥萨克人', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '德·鲁伊特',
                        'color': '#41a420'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'F': {
                    'enemy': ['轮型 : <font color=#bf58cb>战列</font>|航母|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : 航母|航母|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'G': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '哥萨克人', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '海伦娜', 'color': '#bf58cb'}]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}]
                },
                'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'C': {
                    'enemy': ['单纵 : 战巡|战巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '沃克兰', 'color': '#636363'}, {'title': '峰风', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '奥马哈', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}]
                },
                'H': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'I': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'J': {
                    'enemy': ['复纵 : 战巡|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '吹雪', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'K': {
                    'enemy': ['轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '复纵 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '榛名', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '应瑞',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '突击者', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '赤城', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}]
                }
            }
        };
        _maps['304'] = {
            'text': '3-4 | 星洲海峡',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_3-4.png@!530x298jpg80dpi?ver=201706271625',
            'node': {
                'D': {
                    'enemy': ['单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '哥萨克人',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '吹雪', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'E': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'F': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'G': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '哥萨克人', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '龙田',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '吹雪', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'B': {
                    'enemy': ['单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '基阿特',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'C': {
                    'enemy': ['单纵 : 战巡|战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '峰风',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '龙田', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '吹雪', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'H': {
                    'enemy': ['复纵 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '哥萨克人', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '天龙', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '基阿特', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'I': {
                    'enemy': ['轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '天龙',
                        'color': '#41a420'
                    }, {'title': '龙田', 'color': '#41a420'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'J': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '哥萨克人',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '天龙', 'color': '#41a420'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '突击者', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '宁海', 'color': '#bf58cb'}, {
                        'title': '平海',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '威尔士亲王',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '加贺', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}]
                }
            }
        };
        _maps['401'] = {
            'text': '4-1 | 克拉代夫东部海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_4-1.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['单纵 : 战巡|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {
                        'title': 'z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '涼月', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'E': {
                    'enemy': ['单纵 : 战巡|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '凉月', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'F': {
                    'enemy': ['轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '奥马哈',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '德·鲁伊特',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'G': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'C': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : 战巡|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '秋月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'H': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'I': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '吹雪', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '凉月', 'color': '#41a420'}, {'title': '涼月', 'color': '#41a420'}, {
                        'title': '宵月',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}]
                }, 'J': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'z22', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '秋月', 'color': '#41a420'}, {
                        'title': '涼月',
                        'color': '#41a420'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }]
                }
            }
        };
        _maps['402'] = {
            'text': '4-2 | 克拉代夫西部海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_4-2.png@!530x298jpg80dpi?ver=201605042220',
            'node': {
                'D': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '哥萨克人',
                        'color': '#636363'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'E': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'F': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '宵月',
                        'color': '#41a420'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'G': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '哥萨克人',
                        'color': '#636363'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '威尔士亲王', 'color': '#FF9900'}]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}]
                },
                'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}]
                },
                'C': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '宵月', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'H': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '宵月', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'I': {
                    'enemy': ['轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '宵月', 'color': '#41a420'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '威尔士亲王',
                        'color': '#FF9900'
                    }]
                },
                'J': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': '林仙', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '宵月', 'color': '#41a420'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '肇和', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {'title': '赤城', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }
            }
        };
        _maps['403'] = {
            'text': '4-3 | 泪之扉附近海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_4-3.png@!530x298jpg80dpi?ver=201605292209',
            'node': {
                'D': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'E': {
                    'enemy': ['单纵 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '德·鲁伊特',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'F': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'G': {
                    'enemy': ['梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'B': {
                    'enemy': ['复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'C': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '林仙', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'H': {
                    'enemy': ['复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '舍尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '应瑞',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '加贺',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '空想',
                        'color': '#FF9900'
                    }, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }
            }
        };
        _maps['404'] = {
            'text': '4-4 | 泪之扉防线',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_4-4.png@!530x298jpg80dpi?ver=201512101629',
            'node': {
                'D': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': 'z16', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '德·鲁伊特',
                        'color': '#41a420'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'E': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '德·鲁伊特',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'F': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'G': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'A': {
                    'enemy': ['复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '白雪', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : 战巡|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '吹雪', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '德·鲁伊特',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'C': {
                    'enemy': ['轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '初雪',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '德·鲁伊特', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'L': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '宁海', 'color': '#bf58cb'}, {
                        'title': '平海',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '加贺', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                },
                'H': {
                    'enemy': ['梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '电', 'color': '#3882c1'}]
                },
                'I': {
                    'enemy': ['轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '吹雪', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'J': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []},
                'K': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '初雪', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '德·鲁伊特', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }
            }
        };
        _maps['501'] = {
            'text': '5-1 | 塞浦路斯附近海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_5-1.png@!530x298jpg80dpi?ver=201512101623',
            'node': {
                'D': {
                    'enemy': ['轮型 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|潜艇', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'E': {
                    'enemy': ['复纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '涼月', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'F': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': 'Z22', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '白雪', 'color': '#41a420'}, {'title': '秋月', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }]
                },
                'G': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': '林仙', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'B': {
                    'enemy': ['复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': 'Z22', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'C': {
                    'enemy': ['单纵 : <font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>', '复纵 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>|潜艇|潜艇'],
                    'drop': [{'title': '哥萨克人', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'H': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>潜艇</font>', '复纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '吹雪', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '秋月',
                        'color': '#41a420'
                    }, {'title': '涼月', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }]
                }
            }
        };
        _maps['502'] = {
            'text': '5-2 | 克里特附近海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_5-2.png@!530x298jpg80dpi?ver=201605250854',
            'node': {
                'D': {
                    'enemy': ['复纵 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '哥萨克人', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}]
                },
                'E': {
                    'enemy': ['轮型 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'F': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': '吹雪', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}]
                },
                'G': {
                    'enemy': ['梯形 : <font color=#FF4040>潜艇</font>|<font color=#FF4040>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>', '梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>', '梯形 : <font color=#FF4040>潜艇</font>|<font color=#FF4040>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '深雪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }]
                },
                'B': {
                    'enemy': ['梯形 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>', '复纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': '标枪', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'C': {
                    'enemy': ['单纵 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>重巡</font>|潜艇|潜艇|潜艇', '梯形 : <font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|潜艇', '复纵 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>|潜艇|潜艇'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '白雪',
                        'color': '#41a420'
                    }, {'title': '初雪', 'color': '#41a420'}, {'title': '深雪', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星 ',
                        'color': '#FF9900'
                    }]
                },
                'H': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': 'Z22', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                },
                'I': {
                    'enemy': ['复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': '百眼巨人', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                },
                'J': {
                    'enemy': ['复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>潜艇</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>'],
                    'drop': [{'title': '沃克兰', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '深雪', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '加贺', 'color': '#FF9900'}, {
                        'title': '空想',
                        'color': '#FF9900'
                    }, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }
            }
        };
        _maps['503'] = {
            'text': '5-3 | 马耳他附近海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_5-3.png@!530x298jpg80dpi?ver=201603231735',
            'node': {
                'D': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'E': {
                    'enemy': ['复纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#FF9900>潜艇</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>潜艇</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '撒切尔', 'color': '#41a420'}, {'title': '沙利文', 'color': '#41a420'}, {
                        'title': '西格斯比',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}]
                }, 'F': {
                    'enemy': ['复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '关岛', 'color': '#FF9900'}]
                }, 'G': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后   ', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '休斯顿',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'A': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|战巡|<font color=#bf58cb>重巡</font>|潜艇', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|潜艇'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|潜艇', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|战巡|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'C': {
                    'enemy': ['梯形 : <font color=#FF4040>潜艇</font>|<font color=#FF4040>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>', '梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': '哥萨克人', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '吹雪', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'H': {
                    'enemy': ['复纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '巨像', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '肇和',
                        'color': '#3882c1'
                    }, {'title': '新墨西哥', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '大黄蜂', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '赤城', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]
                }
            }
        };
        _maps['504'] = {
            'text': '5-4 | 直布罗陀东部海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_5-4.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['梯形 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>雷巡</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>雷巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>雷巡</font>|<font color=#bf58cb>雷巡</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '撒切尔', 'color': '#41a420'}, {'title': '沙利文', 'color': '#41a420'}, {
                        'title': '西格斯比',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '舍尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }, 'E': {
                    'enemy': ['梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#FF9900>战列</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '吹雪', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '祥凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '乌戈里尼·维瓦尔迪',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '威尔士亲王',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }, 'F': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'G': {
                    'enemy': ['复纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>潜艇</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '舍尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }, 'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'C': {
                    'enemy': ['轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '沙利文', 'color': '#41a420'}, {
                        'title': '西格斯比',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '祥凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }, 'H': {
                    'enemy': ['单纵 : <font color=#FF4040>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF4040>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#FF4040>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '独角兽',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '应瑞', 'color': '#3882c1'}, {'title': '加纳里亚斯', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '祥凤', 'color': '#bf58cb'}, {'title': '大黄蜂', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '加贺', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }
            }
        };
        _maps['505'] = {
            'text': '5-5 | 直布罗陀要塞',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_5-5.png@!530x298jpg80dpi?ver=201703130908',
            'node': {
                'D': {
                    'enemy': ['轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>', '轮型 : <font color=#bf58cb>战巡</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '安东尼奥·达诺利',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '威尔士亲王',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '卡约•杜伊里奥',
                        'color': '#FF9900'
                    }]
                }, 'E': {
                    'enemy': ['轮型 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>潜艇</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '撒切尔', 'color': '#41a420'}, {'title': '沙利文', 'color': '#41a420'}, {
                        'title': '西格斯比',
                        'color': '#41a420'
                    }, {'title': '扶桑', 'color': '#3882c1'}, {'title': '山城', 'color': '#3882c1'}, {
                        'title': '伊势',
                        'color': '#3882c1'
                    }, {'title': '日向', 'color': '#3882c1'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '北上',
                        'color': '#3882c1'
                    }, {'title': '大井', 'color': '#3882c1'}, {'title': '五十铃', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '晓', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '巨像', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '舍尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '赤城', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }, 'F': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '门德斯·努涅斯', 'color': '#3882c1'}, {'title': '坎伯兰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '威尔士亲王',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '卡约•杜伊里奥',
                        'color': '#FF9900'
                    }]
                }, 'G': {
                    'enemy': ['复纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '门德斯·努涅斯', 'color': '#3882c1'}, {
                        'title': '坎伯兰',
                        'color': '#3882c1'
                    }, {'title': '新墨西哥  ', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '安东尼奥·达诺利',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '威尔士亲王',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '卡约•杜伊里奥',
                        'color': '#FF9900'
                    }]
                }, 'A': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>', '轮型 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>雷巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '晓', 'color': '#3882c1'}, {
                        'title': '响',
                        'color': '#3882c1'
                    }, {'title': '雷', 'color': '#3882c1'}, {'title': '电', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'C': {
                    'enemy': ['梯形 : <font color=#FF9900>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>', '梯形 : <font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>', '梯形 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '扶桑', 'color': '#3882c1'}, {
                        'title': '山城',
                        'color': '#3882c1'
                    }, {'title': '伊势', 'color': '#3882c1'}, {'title': '日向', 'color': '#3882c1'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '北上', 'color': '#3882c1'}, {'title': '大井', 'color': '#3882c1'}, {
                        'title': '五十铃',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '响', 'color': '#3882c1'}, {
                        'title': '雷',
                        'color': '#3882c1'
                    }, {'title': '电', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '瑞凤',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'H': {
                    'enemy': ['复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '门德斯·努涅斯', 'color': '#3882c1'}, {'title': '新墨西哥', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '瑞凤', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '威尔士亲王', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '赤城', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }, 'I': {
                    'enemy': ['单纵 : <font color=#FF4040>旗舰</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF4040>驱逐</font>', '梯形 : -', '- : -'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '哥萨克人', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': '吹雪',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '西格斯比', 'color': '#41a420'}, {
                        'title': '扶桑',
                        'color': '#3882c1'
                    }, {'title': '山城', 'color': '#3882c1'}, {'title': '伊势', 'color': '#3882c1'}, {
                        'title': '日向',
                        'color': '#3882c1'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '北上', 'color': '#3882c1'}, {
                        'title': '大井',
                        'color': '#3882c1'
                    }, {'title': '五十铃', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '晓',
                        'color': '#3882c1'
                    }, {'title': '响', 'color': '#3882c1'}, {'title': '雷', 'color': '#3882c1'}, {
                        'title': '电',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '门德斯·努涅斯', 'color': '#3882c1'}, {'title': '坎伯兰', 'color': '#3882c1'}, {
                        'title': '新墨西哥',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '瑞凤', 'color': '#bf58cb'}, {
                        'title': '大黄蜂',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '宁海', 'color': '#bf58cb'}, {
                        'title': '平海',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '库欣',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '威尔士亲王',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '空想',
                        'color': '#FF9900'
                    }, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]
                }
            }
        };
        _maps['601'] = {
            'text': '6-1 | 洛里昂南部海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_6-1.png@!530x298jpg80dpi?ver=201605270004',
            'node': {
                'D': {
                    'enemy': ['轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#bf58cb>战巡</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '紫石英',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '军团', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': 'U47', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'E': {
                    'enemy': ['复纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>潜艇</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '紫石英',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '军团', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '彭萨科拉', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '维那莫依嫩',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'F': {
                    'enemy': ['梯形 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'z16', 'color': '#41a420'}, {
                        'title': '紫石英',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '军团', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': 'z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '彭萨科拉', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '维那莫依嫩',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'G': {
                    'enemy': ['复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '军团',
                        'color': '#41a420'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '彭萨科拉', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '维那莫依嫩',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }]
                }, 'A': {
                    'enemy': ['梯形 : <font color=#FF4040>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF4040>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>雷巡</font>|<font color=#bf58cb>雷巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '彭萨科拉', 'color': '#3882c1'}, {
                        'title': '新奥尔良',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '彭萨科拉', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '维那莫依嫩',
                        'color': '#bf58cb'
                    }, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }]
                }, 'C': {
                    'enemy': ['单横 : <font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单横 : <font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单横 : <font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'z16', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '彭萨科拉', 'color': '#3882c1'}, {
                        'title': '新奥尔良',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }]
                }, 'L': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'H': {
                    'enemy': ['轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>潜艇</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>潜艇</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '紫石英',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '军团', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '彭萨科拉',
                        'color': '#3882c1'
                    }, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': 'U47', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'I': {
                    'enemy': ['复纵 : <font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'z16', 'color': '#41a420'}, {
                        'title': '紫石英',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '军团', 'color': '#41a420'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '彭萨科拉', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': 'U47',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'J': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'K': {
                    'enemy': ['梯形 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF4040>驱逐</font>', '梯形 : <font color=#FF4040>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>潜艇</font>', '梯形 : <font color=#FF4040>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF4040>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': 'z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {
                        'title': '军团',
                        'color': '#41a420'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '彭萨科拉', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}]
                }
            }
        };
        _maps['602'] = {
            'text': '6-2 | 英吉利海峡',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_6-2.png@!530x298jpg80dpi?ver=201604260910',
            'node': {
                'D': {
                    'enemy': ['复纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {
                        'title': '军团',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '休斯顿', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': 'U47',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'E': {
                    'enemy': ['复纵 : <font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '爱斯基摩人',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {
                        'title': '进取',
                        'color': '#41a420'
                    }, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '独角兽',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'F': {
                    'enemy': ['复纵 : <font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {
                        'title': '军团',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '维那莫依嫩 ',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'G': {
                    'enemy': ['复纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>', '轮型 : <font color=#FF9900>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>补给</font>|<font color=#bf58cb>补给</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {
                        'title': '军团',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': 'M2',
                        'color': '#3882c1'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': 'U47',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'A': {
                    'enemy': ['复纵 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'z16', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'B': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'C': {
                    'enemy': ['轮型 : <font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '维那莫依嫩',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'L': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#FF4040>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}]
                },
                'M': {
                    'enemy': ['单纵 : <font color=#FF4040>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>', '复纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>驱逐</font>|<font color=#FF4040>驱逐</font>', '单纵 : <font color=#FF4040>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {
                        'title': '军团',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '皇家橡树',
                        'color': '#3882c1'
                    }, {'title': '博格', 'color': '#3882c1'}, {'title': '普林斯顿', 'color': '#3882c1'}, {
                        'title': '独角兽',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '勇敢',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': 'M2', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '巴夫勒尔', 'color': '#bf58cb'}, {'title': '哥特兰', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '俾斯麦', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}]
                },
                'H': {
                    'enemy': ['轮型 : <font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|补给|补给', '复纵 : <font color=#FF9900>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '旁遮普人',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '翡翠', 'color': '#41a420'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {
                        'title': 'U47',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'I': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>补给</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {
                        'title': '军团',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '博格',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '维那莫依嫩',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'J': {
                    'enemy': ['单纵 : <font color=#FF4040>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#FF4040>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '紫石英',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {
                        'title': '进取',
                        'color': '#41a420'
                    }, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '休斯顿', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': 'M2', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': 'U47', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }]
                },
                'K': {
                    'enemy': ['复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }
            }
        };
        _maps['603'] = {
            'text': '6-3 | 斯卡帕湾',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_6-3.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['梯形 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>雷巡</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>雷巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>雷巡</font>|<font color=#bf58cb>雷巡</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '休斯顿', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '阿卡司塔',
                        'color': '#3882c1'
                    }, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '龙骑兵', 'color': '#bf58cb'}, {'title': '赤城', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'E': {
                    'enemy': ['梯形 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '沃克兰', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '紫石英', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '皇家橡树',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '龙骑兵', 'color': '#bf58cb'}, {'title': '赤城', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'F': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '皇家橡树',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '赤城', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'G': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'A': {
                    'enemy': ['单纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': 'M2', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['复纵 : <font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': 'M2',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'C': {
                    'enemy': ['轮型 : <font color=#FF9900>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '高雄', 'color': '#3882c1'}, {'title': '爱宕', 'color': '#3882c1'}, {
                        'title': '摩耶',
                        'color': '#3882c1'
                    }, {'title': '鸟海', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '休斯顿',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'H': {
                    'enemy': ['轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '休斯顿', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '热心',
                        'color': '#3882c1'
                    }, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {
                        'title': '埃德加·居内',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '龙骑兵', 'color': '#bf58cb'}, {
                        'title': '斯普利特',
                        'color': '#bf58cb'
                    }, {'title': '赤城', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'I': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'J': {
                    'enemy': ['单纵 : <font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>驱逐</font>|<font color=#FF4040>驱逐</font>', '复纵 : <font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF4040>驱逐</font>', '梯形 : <font color=#FF4040>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {
                        'title': 'M2',
                        'color': '#3882c1'
                    }, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '坎伯兰', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '厌战',
                        'color': '#bf58cb'
                    }, {'title': '沙恩霍斯特', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': 'U81', 'color': '#bf58cb'}, {
                        'title': '哥特兰',
                        'color': '#bf58cb'
                    }, {'title': '龙骑兵 ', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '空想',
                        'color': '#FF9900'
                    }]
                }
            }
        };
        _maps['604'] = {
            'text': '6-4 | 丹麦海峡',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_6-4.png@!530x298jpg80dpi?ver=201512101628',
            'node': {
                'D': {
                    'enemy': ['轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>战巡</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '萨福克',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '龙骑兵',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '赤城', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'E': {
                    'enemy': ['轮型 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '萨福克',
                        'color': '#3882c1'
                    }, {'title': 'M2', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '龙骑兵', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'F': {
                    'enemy': ['梯形 : <font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '萨福克',
                        'color': '#3882c1'
                    }, {'title': 'M2', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '赤城', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'G': {
                    'enemy': ['轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF0000>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '萨福克',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'A': {
                    'enemy': ['轮型 : <font color=#FF9900>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '轮型 : <font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '沃克兰', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '高雄', 'color': '#3882c1'}, {
                        'title': '爱宕',
                        'color': '#3882c1'
                    }, {'title': '摩耶', 'color': '#3882c1'}, {'title': '鸟海', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': 'M2', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['单纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>重巡</font>|<font color=#bf58cb>雷巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '萨福克',
                        'color': '#3882c1'
                    }, {'title': 'M2', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {
                        'title': '罗德尼',
                        'color': '#bf58cb'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '果敢',
                        'color': '#bf58cb'
                    }, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '龙骑兵', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'C': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '休斯顿', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '热心',
                        'color': '#3882c1'
                    }, {'title': '萨福克', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '龙骑兵',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '赤城', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'L': {
                    'enemy': ['复纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>补给</font>|<font color=#FF9900>补给</font>', '单纵 : <font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>补给</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '萨福克',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '赤城', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'H': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '萨福克',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'I': {
                    'enemy': ['轮型 : <font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>战巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>补给</font>|<font color=#FF9900>补给</font>', '复纵 : <font color=#FF9900>战巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '萨福克',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '斯佩伯爵海军上将',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '安德烈亚·多利亚',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '赤城', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'J': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'K': {
                    'enemy': ['单纵 : <font color=#FF0000>旗舰</font>|<font color=#FF4040>战列</font>|<font color=#FF4040>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF4040>驱逐</font>', '- : -', '- : -'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {
                        'title': '卡辛杨',
                        'color': '#636363'
                    }, {'title': '安东尼', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '沃克兰',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '紫石英', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '高雄',
                        'color': '#3882c1'
                    }, {'title': '爱宕', 'color': '#3882c1'}, {'title': '摩耶', 'color': '#3882c1'}, {
                        'title': '鸟海',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '光荣',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {
                        'title': '阿卡司塔',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '萨福克', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '果敢', 'color': '#bf58cb'}, {
                        'title': '沙恩霍斯特',
                        'color': '#bf58cb'
                    }, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {
                        'title': '安东尼奥·达诺利',
                        'color': '#bf58cb'
                    }, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': 'U81', 'color': '#bf58cb'}, {
                        'title': '哥特兰',
                        'color': '#bf58cb'
                    }, {'title': '龙骑兵', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '俾斯麦',
                        'color': '#FF9900'
                    }, {'title': '安德烈亚·多利亚', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '赤城',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '空想',
                        'color': '#FF9900'
                    }]
                }
            }
        };
        _maps['701'] = {
            'text': '7-1 | 比斯开湾',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_7-1.png@!530x298jpg80dpi?ver=201512101633',
            'node': {
                'D': {
                    'enemy': ['轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|潜艇', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|潜艇'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '布雷恩', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '海达人', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '加纳里亚斯',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'E': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'F': {
                    'enemy': ['梯形 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|潜艇', '单纵 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|潜艇', '复纵 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|潜艇'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '海达人', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '加纳里亚斯', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'G': {
                    'enemy': ['梯形 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '海达人', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '加纳里亚斯', 'color': '#3882c1'}, {
                        'title': '门德斯·努涅斯',
                        'color': '#3882c1'
                    }, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '圣路易斯', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|潜艇|轻巡|轻巡|轻巡', '单纵 : <font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|潜艇|潜艇|航母|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|轻巡|轻巡|重巡|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '休斯顿', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '海达人',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['梯形 : <font color=#bf58cb>重巡</font>|重巡|轻巡|潜艇|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>重巡</font>|重巡|轻巡|潜艇|轻巡|轻巡', '梯形 : <font color=#bf58cb>轻巡</font>|轻巡|轻巡|潜艇|轻巡|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {
                        'title': 'z22',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '海达人', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'C': {
                    'enemy': ['复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|轻巡|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|轻巡|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '海达人', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '加纳里亚斯',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'L': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|重巡|轻巡|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|重巡|<font color=#bf58cb>潜艇</font>|潜艇'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '海达人', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'M': {
                    'enemy': ['复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {
                        'title': '海达人',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '加纳里亚斯',
                        'color': '#3882c1'
                    }, {'title': '门德斯·努涅斯', 'color': '#3882c1'}, {
                        'title': '埃德加·居内',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'N': {
                    'enemy': ['梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '翡翠', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '贝亚恩', 'color': '#3882c1'}, {
                        'title': '海达人',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '加纳里亚斯', 'color': '#3882c1'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '圣路易斯', 'color': '#bf58cb'}, {'title': '巴夫勒尔', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'H': {
                    'enemy': ['轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|轻巡|轻巡|轻巡', '轮型 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {
                        'title': '反击',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '圣胡安',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '贝亚恩', 'color': '#3882c1'}, {
                        'title': '海达人',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'I': {
                    'enemy': ['复纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': 'Z31',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '海达人', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'J': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': '旁遮普人',
                        'color': '#636363'
                    }, {'title': '卡辛杨', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '佩内洛珀', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '天后',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {
                        'title': '盐湖城',
                        'color': '#3882c1'
                    }, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '海达人', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'K': {
                    'enemy': ['梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z21', 'color': '#636363'}, {
                        'title': 'Z22',
                        'color': '#636363'
                    }, {'title': '旁遮普人', 'color': '#636363'}, {'title': '安东尼', 'color': '#636363'}, {
                        'title': '布雷恩',
                        'color': '#636363'
                    }, {'title': '林仙', 'color': '#41a420'}, {'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '天后', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '卡尔斯鲁厄',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': 'Z31', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '海达人', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '圣路易斯', 'color': '#bf58cb'}, {
                        'title': '斯普利特',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }
            }
        };
        _maps['702'] = {
            'text': '7-2 | 马德拉海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_7-2.png@!530x298jpg80dpi?ver=201703081512',
            'node': {
                'D': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|重巡|轻巡|轻巡|驱逐|潜艇', '单纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>|潜艇', '单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '奥克兰', 'color': '#3882c1'}, {
                        'title': '瓜达卡纳尔',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '爱丽', 'color': '#3882c1'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'E': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>|潜艇'],
                    'drop': [{'title': 'z22', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '基林',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '奥克兰', 'color': '#3882c1'}, {
                        'title': '瓜达卡纳尔',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '爱丽', 'color': '#3882c1'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]
                }, 'F': {
                    'enemy': ['单纵 : 战列|战列|重巡重巡|潜艇|潜艇', '单纵 : 战列|战列|重巡|重巡|轻巡|<font color=#bf58cb>驱逐</font>', '单纵 : 战列|战列|重巡|重巡|潜艇|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '奥克兰', 'color': '#3882c1'}, {'title': '瓜达卡纳尔', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '爱丽', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'G': {
                    'enemy': ['单纵 : <font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|战列|战列', '单纵 : <font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>轻巡</font>|轻巡', '单纵 : <font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>轻巡</font>|战列|航母'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '奥克兰', 'color': '#3882c1'}, {'title': '瓜达卡纳尔', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]
                }, 'A': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '希佩尔海军上将',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '瓜达卡纳尔', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '爱丽',
                        'color': '#3882c1'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['单纵 : 轻母|轻母|轻巡|轻巡|驱逐|驱逐', '单纵 : 战巡|重巡|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#bf58cb>轻母</font>|重巡|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|潜艇'],
                    'drop': [{'title': 'Z22', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': 'Z16', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '基林', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '瓜达卡纳尔', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '爱丽',
                        'color': '#3882c1'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'C': {'enemy': [], 'drop': []}
            }
        };
        _maps['703'] = {
            'text': '7-3 | 亚速尔海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_7-3.png@!530x298jpg80dpi?ver=201708090826',
            'node': {
                'D': {
                    'enemy': ['单纵 : <font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>导驱</font>|<font color=#bf58cb>驱逐</font>|轻巡|轻巡', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>导驱</font>|轻巡|<font color=#bf58cb>驱逐</font>|轻巡', '- : -'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '阿贾克斯', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '诺福克', 'color': '#bf58cb'}, {
                        'title': '斯特雷特',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'E': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|潜艇', '- : -', '- : -'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '阿贾克斯', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {'title': '诺福克', 'color': '#bf58cb'}, {
                        'title': '斯特雷特',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'F': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '- : -'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '诺福克', 'color': '#bf58cb'}, {
                        'title': '斯特雷特',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'G': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>导驱</font>'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '阿贾克斯', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '诺福克', 'color': '#bf58cb'}, {'title': '斯特雷特', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>驱逐</font>', '- : -', '- : -'],
                    'drop': [{'title': 'Z16', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '阿贾克斯', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }]
                },
                'B': {
                    'enemy': ['单纵 : <font color=#FF9900>轻母</font>|轻母|重巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>轻母</font>|重巡|重巡|轻巡|<font color=#bf58cb>驱逐</font>|潜艇', '- : -'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'C': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻母</font>|<font color=#bf58cb>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '阿贾克斯', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }]
                },
                'L': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>导驱</font>'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '诺福克', 'color': '#bf58cb'}, {
                        'title': '斯特雷特',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'M': {'enemy': [], 'drop': []}
            }
        };
        _maps['704'] = {
            'text': '7-4 | 百慕大三角附近海域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_7-4.png@!530x298jpg80dpi?ver=201803050951',
            'node': {
                'D': {
                    'enemy': ['梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|潜艇', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|潜艇'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': '阿贾克斯', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '斯特雷特', 'color': '#bf58cb'}, {
                        'title': '神鹰',
                        'color': '#bf58cb'
                    }, {'title': '不惧', 'color': '#bf58cb'}, {'title': '七省联盟', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'E': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>导驱</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|轻巡', '梯形 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>|潜艇'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '亚特兰大',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '诺福克', 'color': '#bf58cb'}, {
                        'title': '斯特雷特',
                        'color': '#bf58cb'
                    }, {'title': '神鹰', 'color': '#bf58cb'}, {'title': '不惧', 'color': '#bf58cb'}, {
                        'title': '七省联盟',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'F': {
                    'enemy': ['梯形 : <font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>|潜艇', '轮型 : <font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': 'z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '阿贾克斯', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '坎伯兰', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '神鹰', 'color': '#bf58cb'}, {
                        'title': '不惧',
                        'color': '#bf58cb'
                    }, {'title': '七省联盟', 'color': '#bf58cb'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'G': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'A': {
                    'enemy': ['单纵 : <font color=#bf58cb>驱逐</font>|<font color=#bf58cb>轻巡</font>|重巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>重巡</font>|重巡|轻巡|<font color=#bf58cb>驱逐</font>|潜艇', '单纵 : <font color=#bf58cb>重巡</font>|战列|轻巡|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '阿贾克斯', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'B': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>重巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|轻巡|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>重巡</font>|轻巡|轻巡|轻巡|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>重巡</font>|重巡|<font color=#bf58cb>战巡</font>|潜艇|潜艇'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '阿贾克斯', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'C': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>驱逐</font>|潜艇', '复纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|轻巡|轻巡', '梯形 : <font color=#bf58cb>战列</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>潜艇</font>|潜艇'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '埃德加·居内',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '神鹰', 'color': '#bf58cb'}, {
                        'title': '不惧',
                        'color': '#bf58cb'
                    }, {'title': '七省联盟', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'L': {
                    'enemy': ['单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|重巡', '复纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>', '梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {'title': '鲍尔', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '阿贾克斯', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '神鹰', 'color': '#bf58cb'}, {
                        'title': '不惧',
                        'color': '#bf58cb'
                    }, {'title': '七省联盟', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'M': {
                    'enemy': ['复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>导驱</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#FF4040>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>潜艇</font>|<font color=#bf58cb>导驱</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {
                        'title': '坎伯兰',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '维那莫依嫩', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '古斯塔夫五世',
                        'color': '#bf58cb'
                    }, {'title': '竞技神', 'color': '#bf58cb'}, {'title': 'U81', 'color': '#bf58cb'}, {
                        'title': 'U156',
                        'color': '#bf58cb'
                    }, {'title': '巴夫勒尔', 'color': '#bf58cb'}, {'title': '鹞鹰', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '神鹰', 'color': '#bf58cb'}, {
                        'title': '不惧',
                        'color': '#bf58cb'
                    }, {'title': '龙骑兵', 'color': '#bf58cb'}, {'title': '七省联盟', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                }, 'H': {'enemy': ['- : -', '- : -', '- : -'], 'drop': []}, 'I': {
                    'enemy': ['梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>导驱</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|重巡', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>导驱</font>'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': 'z16',
                        'color': '#41a420'
                    }, {'title': '萤火虫', 'color': '#41a420'}, {'title': '标枪', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '列克星敦', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '神鹰', 'color': '#bf58cb'}, {
                        'title': '不惧',
                        'color': '#bf58cb'
                    }, {'title': '七省联盟', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }, 'J': {
                    'enemy': ['复纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>', '轮型 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>导驱</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>潜艇</font>'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '阿贾克斯', 'color': '#3882c1'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '神鹰', 'color': '#bf58cb'}, {'title': '不惧', 'color': '#bf58cb'}, {
                        'title': '七省联盟',
                        'color': '#bf58cb'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}]
                }, 'K': {
                    'enemy': ['复纵 : <font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>导驱</font>', '单纵 : <font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>导驱</font>', '轮型 : <font color=#bf58cb>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>导驱</font>'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '阿贾克斯', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '神鹰', 'color': '#bf58cb'}, {
                        'title': '不惧',
                        'color': '#bf58cb'
                    }, {'title': '七省联盟', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]
                }
            }
        };
        _maps['705'] = {
            'text': '7-5 | 百慕大三角防波堤',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_7-5.png@!530x298jpg80dpi?ver=201804072034',
            'node': {
                'D': {
                    'enemy': ['复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>', '- : -'],
                    'drop': [{'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '暴怒',
                        'color': '#bf58cb'
                    }, {'title': '诺福克', 'color': '#bf58cb'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'E': {
                    'enemy': ['梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>轻母</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': 'Z16',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '朱诺', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '吸血鬼',
                        'color': '#3882c1'
                    }, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': '阿贾克斯', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '暴怒', 'color': '#bf58cb'}, {
                        'title': '谢菲尔德',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '欧根亲王',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'F': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>重巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '- : -'],
                    'drop': [{'title': '标枪', 'color': '#41a420'}, {'title': '黑背豺', 'color': '#41a420'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '吸血鬼',
                        'color': '#3882c1'
                    }, {'title': '诺福克', 'color': '#bf58cb'}, {'title': '谢菲尔德', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'G': {
                    'enemy': ['梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>轻母</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>驱逐</font>|潜艇', '单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>轻母</font>|<font color=#FF9900>驱逐</font>', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>轻母</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {
                        'title': '朱诺',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {
                        'title': '圣女贞德',
                        'color': '#3882c1'
                    }, {'title': '阿贾克斯', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '列克星敦',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '暴怒   ',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '竞技神',
                        'color': '#bf58cb'
                    }, {'title': '诺福克', 'color': '#bf58cb'}, {'title': '斯特雷特', 'color': '#bf58cb'}, {
                        'title': '谢菲尔德',
                        'color': '#bf58cb'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'A': {
                    'enemy': ['单纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|潜艇', '梯形 : <font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|轻巡|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#FF9900>轻巡</font>|潜艇|潜艇|潜艇'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {
                        'title': '布吕歇尔',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {
                        'title': '科隆',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '阿贾克斯', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '谢菲尔德',
                        'color': '#bf58cb'
                    }, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'B': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#bf58cb>战巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>轻母</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '鲍尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '柯尼斯堡',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '曙光女神', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '谢菲尔德',
                        'color': '#bf58cb'
                    }, {'title': '天狼星', 'color': '#FF9900'}]
                },
                'C': {
                    'enemy': ['复纵 : <font color=#FF9900>驱逐</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#bf58cb>重巡</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '单纵 : <font color=#FF9900>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': 'Z16', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '黑背豺', 'color': '#41a420'}, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '内华达',
                        'color': '#3882c1'
                    }, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '德意志',
                        'color': '#3882c1'
                    }, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '吸血鬼', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {
                        'title': '坎伯兰',
                        'color': '#3882c1'
                    }, {'title': '列克星敦', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '暴怒', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {
                        'title': '诺福克',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '谢菲尔德', 'color': '#bf58cb'}, {
                        'title': '胡德',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }]
                },
                'L': {
                    'enemy': ['梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>驱逐</font>|重巡|重巡', '复纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>驱逐</font>|重巡|重巡', '单纵 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#FF9900>驱逐</font>|重巡|重巡'],
                    'drop': [{'title': 'Z16', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '弗兰克·诺克斯', 'color': '#41a420'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {
                        'title': '昆西',
                        'color': '#3882c1'
                    }, {'title': '科隆', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {
                        'title': '塔斯卡卢萨',
                        'color': '#3882c1'
                    }, {'title': '谢菲尔德', 'color': '#bf58cb'}, {'title': '欧根亲王', 'color': '#FF9900'}]
                },
                'M': {
                    'enemy': ['单纵 : <font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF9900>航母</font>|<font color=#FF9900>航母</font>|<font color=#bf58cb>战列</font>|<font color=#bf58cb>轻巡</font>|航母|潜艇', '- : -'],
                    'drop': [{'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '昆西', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '阿贾克斯',
                        'color': '#3882c1'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '暴怒', 'color': '#bf58cb'}, {
                        'title': '谢菲尔德',
                        'color': '#bf58cb'
                    }]
                },
                'N': {'enemy': [], 'drop': []}
            }
        };
        _maps['801'] = {
            'text': '8-1 | 百慕大中心区域',
            'img': 'http://ima.ntwikis.com/cancollezh/maps/Map_8-1.png@!530x298jpg80dpi?ver=201903191514',
            'node': {
                'D': {
                    'enemy': ['- : -', '- : -', '- : -'],
                    'drop': [{'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '田纳西', 'color': '#3882c1'}, {'title': '加利福尼亚', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '彭萨科拉',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '坎伯兰',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {
                        'title': '科罗拉多',
                        'color': '#bf58cb'
                    }, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {
                        'title': '爱丁堡',
                        'color': '#bf58cb'
                    }, {'title': '暴怒', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '谢菲尔德', 'color': '#bf58cb'}, {
                        'title': '初月',
                        'color': '#bf58cb'
                    }, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {
                        'title': '七省联盟',
                        'color': '#bf58cb'
                    }, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}, {'title': '贝尔法斯特', 'color': '#FF9900'}, {
                        'title': '丹佛',
                        'color': '#FF9900'
                    }]
                },
                'E': {
                    'enemy': ['梯形 : <font color=#FF9900>战列</font>|<font color=#FF9900>战巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>潜艇</font>|<font color=#FF9900>轻巡</font>', '复纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#FF4040>轻巡</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>|<font color=#FF9900>驱逐</font>', '单纵 : <font color=#FF9900>轻母</font>|<font color=#FF4040>轻巡</font>|<font color=#FF4040>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>'],
                    'drop': [{'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '田纳西', 'color': '#3882c1'}, {'title': '加利福尼亚', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '彭萨科拉',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '坎伯兰',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {
                        'title': '科罗拉多',
                        'color': '#bf58cb'
                    }, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {
                        'title': '爱丁堡',
                        'color': '#bf58cb'
                    }, {'title': '暴怒', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '谢菲尔德', 'color': '#bf58cb'}, {
                        'title': '初月',
                        'color': '#bf58cb'
                    }, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {
                        'title': '七省联盟',
                        'color': '#bf58cb'
                    }, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {
                        'title': '天狼星',
                        'color': '#FF9900'
                    }, {'title': '空想', 'color': '#FF9900'}, {'title': '贝尔法斯特', 'color': '#FF9900'}, {
                        'title': '丹佛',
                        'color': '#FF9900'
                    }]
                },
                'F': {
                    'enemy': ['- : -', '- : -', '- : -'],
                    'drop': [{'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '田纳西', 'color': '#3882c1'}, {'title': '加利福尼亚', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '彭萨科拉',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {
                        'title': '坎伯兰',
                        'color': '#3882c1'
                    }, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '威奇塔',
                        'color': '#bf58cb'
                    }, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {
                        'title': '科罗拉多',
                        'color': '#bf58cb'
                    }, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '谢菲尔德', 'color': '#bf58cb'}, {
                        'title': '闪电',
                        'color': '#bf58cb'
                    }]
                },
                'G': {
                    'enemy': ['梯形 : <font color=#bf58cb>航母</font>|<font color=#FF4040>轻母</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>潜艇</font>', '- : -', '- : -'],
                    'drop': [{'title': '暴怒', 'color': '#bf58cb'}]
                },
                'A': {
                    'enemy': ['梯形 : <font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#FF9900>轻巡</font>|轻巡|潜艇|潜艇', '复纵 : <font color=#FF9900>重巡</font>|<font color=#FF9900>重巡</font>|<font color=#bf58cb>潜艇</font>|潜艇|潜艇|潜艇', '单纵 : <font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|<font color=#bf58cb>潜艇</font>|潜艇|潜艇'],
                    'drop': [{'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '田纳西', 'color': '#3882c1'}, {'title': '加利福尼亚', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '彭萨科拉', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '休斯顿',
                        'color': '#3882c1'
                    }, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '科罗拉多',
                        'color': '#bf58cb'
                    }, {'title': '马里兰', 'color': '#bf58cb'}, {
                        'title': '西弗吉尼亚',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '斯特雷特',
                        'color': '#bf58cb'
                    }, {'title': '谢菲尔德', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {
                        'title': '丹佛',
                        'color': '#FF9900'
                    }]
                },
                'B': {
                    'enemy': ['单纵 : <font color=#FF9900>战巡</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '梯形 : <font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>', '复纵 : <font color=#FF9900>轻母</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '田纳西', 'color': '#3882c1'}, {'title': '加利福尼亚', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '彭萨科拉', 'color': '#3882c1'}, {'title': '盐湖城', 'color': '#3882c1'}, {
                        'title': '休斯顿',
                        'color': '#3882c1'
                    }, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {
                        'title': '贝亚恩',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '科罗拉多',
                        'color': '#bf58cb'
                    }, {'title': '马里兰', 'color': '#bf58cb'}, {
                        'title': '西弗吉尼亚',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '斯特雷特',
                        'color': '#bf58cb'
                    }, {'title': '谢菲尔德', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {
                        'title': '丹佛',
                        'color': '#FF9900'
                    }]
                },
                'C': {
                    'enemy': ['梯形 : <font color=#FF9900>战巡</font>|<font color=#FF9900>战巡</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>轻巡</font>|轻巡|轻巡', '- : -', '- : -'],
                    'drop': [{'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '安东尼',
                        'color': '#636363'
                    }, {'title': '布雷恩', 'color': '#636363'}, {'title': '林仙', 'color': '#41a420'}, {
                        'title': '加拉蒂亚',
                        'color': '#41a420'
                    }, {'title': '佩内洛珀', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '萤火虫',
                        'color': '#41a420'
                    }, {'title': '标枪', 'color': '#41a420'}, {'title': '天后', 'color': '#41a420'}, {
                        'title': '黑背豺',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '弗兰克·诺克斯',
                        'color': '#41a420'
                    }, {'title': '鲍尔', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '俄克拉荷马',
                        'color': '#3882c1'
                    }, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '兰利', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {
                        'title': '曙光女神',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '田纳西', 'color': '#3882c1'}, {'title': '加利福尼亚', 'color': '#3882c1'}, {
                        'title': '巨像',
                        'color': '#3882c1'
                    }, {'title': '普林斯顿', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '彭萨科拉',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '休斯顿', 'color': '#3882c1'}, {
                        'title': '维纳斯',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '坎伯兰', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '厌战', 'color': '#bf58cb'}, {'title': '科罗拉多', 'color': '#bf58cb'}, {
                        'title': '马里兰',
                        'color': '#bf58cb'
                    }, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '爱丁堡', 'color': '#bf58cb'}, {
                        'title': '暴怒',
                        'color': '#bf58cb'
                    }, {'title': '索玛雷兹', 'color': '#bf58cb'}, {
                        'title': '拉菲（本森级）',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '谢菲尔德', 'color': '#bf58cb'}, {
                        'title': '初月',
                        'color': '#bf58cb'
                    }, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {
                        'title': '阿拉斯加',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {
                        'title': '空想',
                        'color': '#FF9900'
                    }, {'title': '贝尔法斯特', 'color': '#FF9900'}, {'title': '丹佛', 'color': '#FF9900'}]
                },
                'L': {
                    'enemy': ['梯形 : <font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#bf58cb>航母</font>|<font color=#FF4040>驱逐</font>|重巡|重巡', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>战列</font>|<font color=#FF9900>驱逐</font>|<font color=#bf58cb>重巡</font>|<font color=#bf58cb>重巡</font>', '- : -'],
                    'drop': [{'title': '卡辛杨', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '萤火虫', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '沙利文', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '百眼巨人', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {
                        'title': '彭萨科拉',
                        'color': '#3882c1'
                    }, {'title': '盐湖城', 'color': '#3882c1'}, {'title': '贝亚恩', 'color': '#3882c1'}, {
                        'title': '吸血鬼',
                        'color': '#3882c1'
                    }, {'title': '塔斯卡卢萨', 'color': '#3882c1'}, {'title': '坎伯兰', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '突击者', 'color': '#bf58cb'}, {
                        'title': '大黄蜂',
                        'color': '#bf58cb'
                    }, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {
                        'title': '厌战',
                        'color': '#bf58cb'
                    }, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {
                        'title': '暴怒',
                        'color': '#bf58cb'
                    }, {'title': 'U81', 'color': '#bf58cb'}, {'title': 'U156', 'color': '#bf58cb'}, {
                        'title': '巴夫勒尔',
                        'color': '#bf58cb'
                    }, {'title': '斯特雷特', 'color': '#bf58cb'}, {'title': '谢菲尔德', 'color': '#bf58cb'}, {
                        'title': '初月',
                        'color': '#bf58cb'
                    }, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {
                        'title': '七省联盟',
                        'color': '#bf58cb'
                    }, {'title': '胡德', 'color': '#FF9900'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {
                        'title': '关岛',
                        'color': '#FF9900'
                    }, {'title': '天狼星', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}, {
                        'title': '贝尔法斯特',
                        'color': '#FF9900'
                    }, {'title': '丹佛', 'color': '#FF9900'}]
                },
                'H': {
                    'enemy': ['单纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF4040>驱逐</font>|<font color=#FF4040>驱逐</font>|<font color=#bf58cb>驱逐</font>|<font color=#bf58cb>潜艇</font>', '复纵 : <font color=#FF9900>战列</font>|<font color=#FF9900>重巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>', '轮型 : <font color=#FF9900>战列</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#FF9900>轻巡</font>|<font color=#bf58cb>轻巡</font>|<font color=#bf58cb>驱逐</font>'],
                    'drop': [{'title': '加拉蒂亚', 'color': '#41a420'}, {
                        'title': '佩内洛珀',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '撒切尔', 'color': '#41a420'}, {
                        'title': '沙利文',
                        'color': '#41a420'
                    }, {'title': '西格斯比', 'color': '#41a420'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '声望',
                        'color': '#3882c1'
                    }, {'title': '反击', 'color': '#3882c1'}, {'title': '百眼巨人', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '曙光女神', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {
                        'title': '田纳西',
                        'color': '#3882c1'
                    }, {'title': '加利福尼亚', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {
                        'title': '休斯顿',
                        'color': '#3882c1'
                    }, {'title': '贝亚恩', 'color': '#3882c1'}, {'title': '坎伯兰', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '厌战', 'color': '#bf58cb'}, {'title': '科罗拉多', 'color': '#bf58cb'}, {
                        'title': '马里兰',
                        'color': '#bf58cb'
                    }, {'title': '爱丁堡', 'color': '#bf58cb'}, {'title': '暴怒', 'color': '#bf58cb'}, {
                        'title': '索玛雷兹',
                        'color': '#bf58cb'
                    }, {'title': '拉菲（本森级）', 'color': '#bf58cb'}, {
                        'title': '斯特雷特',
                        'color': '#bf58cb'
                    }, {'title': '谢菲尔德', 'color': '#bf58cb'}, {'title': '初月', 'color': '#bf58cb'}, {
                        'title': '留里克 ',
                        'color': '#bf58cb'
                    }, {'title': '闪电', 'color': '#bf58cb'}, {'title': '七省联盟', 'color': '#bf58cb'}, {
                        'title': '阿拉斯加',
                        'color': '#FF9900'
                    }, {'title': '关岛', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}, {
                        'title': '贝尔法斯特',
                        'color': '#FF9900'
                    }, {'title': '丹佛', 'color': '#FF9900'}]
                },
                'I': {
                    'enemy': ['- : -', '- : -', '- : -'],
                    'drop': [{'title': '俄克拉荷马', 'color': '#3882c1'}, {
                        'title': '百眼巨人',
                        'color': '#3882c1'
                    }, {'title': '休斯顿', 'color': '#3882c1'}, {'title': '闪电', 'color': '#bf58cb'}, {
                        'title': '七省联盟',
                        'color': '#bf58cb'
                    }]
                },
                'J': {
                    'enemy': ['- : -', '- : -', '- : -'],
                    'drop': [{'title': '安东尼', 'color': '#636363'}, {
                        'title': '林仙',
                        'color': '#41a420'
                    }, {'title': '加拉蒂亚', 'color': '#41a420'}, {'title': '奥马哈', 'color': '#41a420'}, {
                        'title': '标枪',
                        'color': '#41a420'
                    }, {'title': '基林', 'color': '#41a420'}, {'title': '基阿特', 'color': '#41a420'}, {
                        'title': '撒切尔',
                        'color': '#41a420'
                    }, {'title': '内华达', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {
                        'title': '兰利',
                        'color': '#3882c1'
                    }, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {
                        'title': '布鲁克林',
                        'color': '#3882c1'
                    }, {'title': '田纳西', 'color': '#3882c1'}, {'title': '加利福尼亚', 'color': '#3882c1'}, {
                        'title': '普林斯顿',
                        'color': '#3882c1'
                    }, {'title': '休斯顿', 'color': '#3882c1'}, {'title': '坎伯兰', 'color': '#3882c1'}, {
                        'title': '纳尔逊',
                        'color': '#bf58cb'
                    }, {'title': '厌战', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {
                        'title': '初月',
                        'color': '#bf58cb'
                    }, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {
                        'title': '七省联盟',
                        'color': '#bf58cb'
                    }, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}]
                },
                'K': {
                    'enemy': ['- : -', '- : -', '- : -'],
                    'drop': [{'title': '罗德尼', 'color': '#bf58cb'}, {
                        'title': '海伦娜',
                        'color': '#bf58cb'
                    }, {'title': '科罗拉多', 'color': '#bf58cb'}, {'title': '谢菲尔德', 'color': '#bf58cb'}, {
                        'title': '闪电',
                        'color': '#bf58cb'
                    }]
                }
            }
        };
		_maps['802'] = {
			'text': '8-2 | 百慕大南群岛',
			'img': 'http://update.protector.moe/static/img/8-2.jpg',
			'node': {'A': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}]}, 'B': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}]}, 'C': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}]}, 'D': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '勇敢', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': '约克', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '留里克', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}]}, 'E': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '勇敢', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '约克', 'color': '#3882c1'}, {'title': '埃克赛特', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]}, 'F': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': '埃克赛特', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '留里克', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]}, 'G': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '勇敢', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': '萨福克', 'color': '#3882c1'}, {'title': '约克', 'color': '#3882c1'}, {'title': '埃克赛特', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '平海', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '龙骑兵', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]}, 'H': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '勇敢', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': '约克', 'color': '#3882c1'}, {'title': '埃克赛特', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]}, 'I': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '勇敢', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': '萨福克', 'color': '#3882c1'}, {'title': '约克', 'color': '#3882c1'}, {'title': '埃克赛特', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '平海', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '龙骑兵', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]}, 'J': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '勇敢', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': '萨福克', 'color': '#3882c1'}, {'title': '约克', 'color': '#3882c1'}, {'title': '埃克赛特', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '平海', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '龙骑兵', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]}, 'K': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '关岛', 'color': '#FF9900'}]}, 'L': {'enemy': ['未收录'], 'drop': [{'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': '埃克赛特', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '平海', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}]}, 'M': {'enemy': ['未收录'], 'drop': [{'title': 'Z21', 'color': '#636363'}, {'title': '哥萨克人', 'color': '#636363'}, {'title': '爱斯基摩人', 'color': '#636363'}, {'title': '旁遮普人', 'color': '#636363'}, {'title': 'Z16', 'color': '#41a420'}, {'title': '翡翠', 'color': '#41a420'}, {'title': '进取', 'color': '#41a420'}, {'title': '军团', 'color': '#41a420'}, {'title': '内华达', 'color': '#3882c1'}, {'title': '俄克拉荷马', 'color': '#3882c1'}, {'title': '声望', 'color': '#3882c1'}, {'title': '反击', 'color': '#3882c1'}, {'title': '兰利', 'color': '#3882c1'}, {'title': '希佩尔海军上将', 'color': '#3882c1'}, {'title': '布吕歇尔', 'color': '#3882c1'}, {'title': '昆西', 'color': '#3882c1'}, {'title': '柯尼斯堡', 'color': '#3882c1'}, {'title': '卡尔斯鲁厄', 'color': '#3882c1'}, {'title': '科隆', 'color': '#3882c1'}, {'title': '亚特兰大', 'color': '#3882c1'}, {'title': '朱诺', 'color': '#3882c1'}, {'title': '布鲁克林', 'color': '#3882c1'}, {'title': '罗伯茨', 'color': '#3882c1'}, {'title': '阿贝克隆比', 'color': '#3882c1'}, {'title': 'Z31', 'color': '#3882c1'}, {'title': '皇家橡树', 'color': '#3882c1'}, {'title': '田纳西', 'color': '#3882c1'}, {'title': '博格', 'color': '#3882c1'}, {'title': '巨像', 'color': '#3882c1'}, {'title': '独角兽', 'color': '#3882c1'}, {'title': '德意志', 'color': '#3882c1'}, {'title': '舍尔海军上将', 'color': '#3882c1'}, {'title': '新奥尔良', 'color': '#3882c1'}, {'title': '勇敢', 'color': '#3882c1'}, {'title': '光荣', 'color': '#3882c1'}, {'title': '圣胡安', 'color': '#3882c1'}, {'title': '热心', 'color': '#3882c1'}, {'title': '阿卡司塔', 'color': '#3882c1'}, {'title': '维纳斯', 'color': '#3882c1'}, {'title': 'M1', 'color': '#3882c1'}, {'title': '萨福克', 'color': '#3882c1'}, {'title': '约克', 'color': '#3882c1'}, {'title': '埃克赛特', 'color': '#3882c1'}, {'title': '吸血鬼', 'color': '#3882c1'}, {'title': '圣女贞德', 'color': '#3882c1'}, {'title': 'M2', 'color': '#3882c1'}, {'title': '埃德加·居内', 'color': '#3882c1'}, {'title': '堪培拉', 'color': '#3882c1'}, {'title': '纳尔逊', 'color': '#bf58cb'}, {'title': '罗德尼', 'color': '#bf58cb'}, {'title': '突击者', 'color': '#bf58cb'}, {'title': '威奇塔', 'color': '#bf58cb'}, {'title': '海伦娜', 'color': '#bf58cb'}, {'title': '平海', 'color': '#bf58cb'}, {'title': '厌战', 'color': '#bf58cb'}, {'title': '马里兰', 'color': '#bf58cb'}, {'title': '西弗吉尼亚', 'color': '#bf58cb'}, {'title': '沙恩霍斯特', 'color': '#bf58cb'}, {'title': '齐柏林伯爵', 'color': '#bf58cb'}, {'title': '斯佩伯爵海军上将', 'color': '#bf58cb'}, {'title': '索玛雷兹', 'color': '#bf58cb'}, {'title': '安东尼奥·达诺利', 'color': '#bf58cb'}, {'title': '乌戈里尼·维瓦尔迪', 'color': '#bf58cb'}, {'title': 'U47', 'color': '#bf58cb'}, {'title': '古斯塔夫五世', 'color': '#bf58cb'}, {'title': '竞技神', 'color': '#bf58cb'}, {'title': 'U81', 'color': '#bf58cb'}, {'title': '巴夫勒尔', 'color': '#bf58cb'}, {'title': '鹞鹰', 'color': '#bf58cb'}, {'title': '卫士', 'color': '#bf58cb'}, {'title': '龙骑兵', 'color': '#bf58cb'}, {'title': '斯普利特', 'color': '#bf58cb'}, {'title': '留里克', 'color': '#bf58cb'}, {'title': '闪电', 'color': '#bf58cb'}, {'title': '凤凰城', 'color': '#bf58cb'}, {'title': '史密斯', 'color': '#bf58cb'}, {'title': '胡德', 'color': '#FF9900'}, {'title': '阿拉斯加', 'color': '#FF9900'}, {'title': '关岛', 'color': '#FF9900'}, {'title': '欧根亲王', 'color': '#FF9900'}, {'title': '天狼星', 'color': '#FF9900'}, {'title': '空想', 'color': '#FF9900'}, {'title': 'U505', 'color': '#FF9900'}, {'title': '卡约•杜伊里奥', 'color': '#FF9900'}, {'title': '乔治·埃夫洛夫', 'color': '#FF9900'}]}}

		}
    }();
})(PveMap || (PveMap = {}));


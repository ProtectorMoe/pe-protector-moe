const Ajax = {
        get: function(url, fun) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    fun(xhr);
                }
            };
            xhr.send();
        },
        post: function(url, data, fun) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    fun(xhr);
                }
            };
            xhr.send(data);
        }
    };

class App extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            user: {
                username:
                    window.android && window.android.getUsername(),
                uid: window.android && window.android.getUid(),
                salt: window.android && window.android.getSalt()
            },
            taskList: [],
            nextPage: "http://cloud.protector.moe/config/paths/"
        };
        this.pullfreshFunction = this.pullfreshFunction.bind(this);
        this.onLikeClick = this.onLikeClick.bind(this);
        this.onDownloadClick = this.onDownloadClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
    }

    onLikeClick(id) {
        Ajax.post(
            "http://cloud.protector.moe/config/likes/",
            JSON.stringify({
                uid: this.state.user.uid,
                username: this.state.user.username,
                salt: this.state.user.salt,
                id
            }),
            value => {
                if (value.status == 201) {
                    mui.toast("点赞成功");
                    this.setState(s => ({
                        taskList: s.taskList.slice().map(v => {
                            if (v.id == id) {
                                v.user_like += 1;
                            }
                            return v;
                        })
                    }));
                } else {
                    mui.toast("您已点赞过");
                }
            }
        );
    }

    onDownloadClick(id) {
        Ajax.get(
            "http://cloud.protector.moe/config/paths/" + id,
            value => {
                if (value.status == 200) {
                    const data = JSON.parse(value.responseText);
                    console.log("下载配置: " + value.responseText);
                    window.android &&
                        window.android.download(value.responseText);
					mui.toast("下载完成")
                }
            }
        );
    }

    componentDidMount() {
        mui.init({
            pullRefresh: {
                container: "#pullrefresh", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
                up: {
                    height: 50, //可选.默认50.触发上拉加载拖动距离
                    auto: true, //可选,默认false.自动上拉加载一次
                    contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
                    contentnomore: "没有更多数据了", //可选，请求完毕若没有更多数据时显示的提醒内容；
                    callback: this.pullfreshFunction //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                }
            }
        });
    }

    pullfreshFunction() {
        Ajax.get(this.state.nextPage, value => {
            if (value.status == 200) {
                const path = JSON.parse(value.responseText);
                mui.toast(
                    "加载了" + path.results.length + "条信息"
                );
                this.setState(s => ({
                    taskList: [...s.taskList, ...path.results],
                    nextPage:
                        path.next != null
                            ? path.next.replace(
                                  "127.0.0.1:5678",
                                  "cloud.protector.moe"
                              )
                            : null
                }));
                mui("#pullrefresh")
                    .pullRefresh()
                    .endPullupToRefresh(path.next == null);
            }
        });
    }

    onBackClick() {
        window.android && window.android.onCancel();
    }

    render() {
        return (
            <div className="mui-content">
                <header className="mui-bar mui-bar-nav">
                    <a
                        className="mui-icon mui-icon-left-nav mui-pull-left"
                        onClick={this.onBackClick}
                    />
                    <h1 className="mui-title">护萌宝 在线配置</h1>
                </header>
                <div
                    id="pullrefresh"
                    className="mui-content mui-scroll-wrapper"
                >
                    <div className="mui-scroll">
                        <ul className="mui-table-view mui-table-view-chevron">
                            {this.state.taskList.map(value => (
                                <TaskCard
                                    id={value.id}
                                    title={value.title}
                                    author={value.author}
                                    desc={value.desc}
                                    like={value.user_like}
                                    time={value.create_time}
                                    onLikeClick={this.onLikeClick}
                                    onDownloadClick={
                                        this.onDownloadClick
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class TaskCard extends React.Component {
    constructor(props) {
        super(props);
    }

    getLocalTime(nS) {
        const date = new Date(parseInt(nS) * 1000);
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    }

    render() {
        return (
            <li key={this.props.id} className="mui-table-view-cell task-card-container">
                <div>
                    {this.props.title}
                    <p className="task-card-author">
                        <span class="mui-badge mui-badge-primary">
                            {this.props.author}
                        </span>
                    </p>
                </div>
                <p className="task-card-desc">{this.props.desc}</p>
                <p>
                    上传时间: {this.getLocalTime(this.props.time)}
                    <span>
                        <button
                            className="task-card-like mui-btn mui-btn-primary mui-btn-outlined"
                            onClick={() =>
                                this.props.onDownloadClick(
                                    this.props.id
                                )
                            }
                        >
                            下载
                        </button>
                        <button
                            className="task-card-like mui-btn  mui-btn-danger mui-btn-outlined"
                            onClick={() =>
                                this.props.onLikeClick(
                                    this.props.id
                                )
                            }
                        >
                            赞:{this.props.like}
                        </button>
                    </span>
                </p>
            </li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

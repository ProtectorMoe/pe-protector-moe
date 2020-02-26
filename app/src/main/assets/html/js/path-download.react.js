'use strict';
class App extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            taskList: [{title: "测试", desc: "测试文本"}]
        }
    }
    render() {
        return (
            <div>
                <header className="mui-bar mui-bar-nav">
                    <a  className="mui-icon mui-icon-left-nav mui-pull-left"/>
                    <h1 className="mui-title">护萌宝 在线配置</h1>
                </header>
                <div className='mui-content'>
                    <TaskList taskList={this.state.taskList}/>
                </div>
            </div>
        );
    }
}


class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mui-table-view">
                <ul className="mui-table-view">
                    <li className="mui-table-view-cell mui-media">
                        {
                            this.props.taskList.map(value => {
                                return (
                                    <div className="mui-media-body">
                                        {value.title}
                                        <p className='mui-ellipsis'>{value.desc}</p>
                                    </div>
                                );
                            })
                        }
                    </li>
                </ul>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
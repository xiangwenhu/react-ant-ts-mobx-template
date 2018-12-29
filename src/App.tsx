import React from "react";
import { LocaleProvider, DatePicker, message } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale-provider/zh_CN";
import { observer } from "mobx-react";
import MainView from "./views/MainView";
import "./App.css";
import LoginView from "./views/LoginView";
import { Router } from "react-router-dom";
import { createBrowserHistory, createHashHistory } from "history";
import { IStores } from "./stores";

const history = createHashHistory(); //createBrowserHistory();

interface IProps {
    stores: IStores;
}

@observer
class App extends React.Component<IProps> {
    render() {
        const { stores } = this.props;
        const { authStore } = stores;
        const content = authStore.logined ? (
            <MainView
                {...{
                    authStore
                }}
            />
        ) : (
            <LoginView
                {...{
                    authStore
                }}
            />
        );

        return (
            <Router history={history}>
                <LocaleProvider locale={zhCN}>{content}</LocaleProvider>
            </Router>
        );
    }
}

export default App;

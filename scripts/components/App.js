/**
 * components/App.js
 * アプリ component
 */

import React from "react";
import { connect } from "react-redux"

import IndexReducerAction from "../reducerActions/index"

import PlusButton from "./PlusButton"
import HsaTable from "./HsaTable"

/**
 * App コンポーネント定義クラス
 */
class App extends React.Component {
    /**
     * React.Component renderメソッド
     */
    render() {
        // ここにReactのComponentsを入れ込む
        return (
            <div>
                <PlusButton />
                <HsaTable data={ this.props.data }/>
            </div>
        );
    }

    /**
     * ステートからプロパティを生成
     * @param {object} state - reduxから渡されるステート
     * @return {object} props - プロパティ
     */
    static mapStateToProps(state) {
        let props = {};
        props.data = state;

        return props;
    }
    
    /**
     * アクションをディスパッチする
     * @param {function} dispatch - reducerのdispatcher
     * @returns {object} ディスパッチの内容
     */
    static mapDispatchToProps(dispatch) {
        return {};
    }
}

/**
 * connect関数でReduxとReactコンポーネントを繋ぐ
 */
export default connect(
    App.mapStateToProps,
    App.mapDispatchToProps
)(App);
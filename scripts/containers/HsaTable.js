/**
 * containres/HsaTable.js
 */

import React from 'react'
import { connect } from 'react-redux'

import HsaTable from './../components/HsaTable'
import HsaTableAction from './../actions/HsaTable'

let mapStateToProps = (state) => {
    let props = {};
    props.hsaTableModels = state.hsaTableModels;
    return props;
}

let mapDispatchToProps = (dispatch) => {
    return {};
}

/**
 * connect関数でReduxとReactコンポーネントを繋ぐ
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HsaTable);
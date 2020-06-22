import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


const Text = (props) => {

    return (
        <React.Fragment>
            {props.pageLoaded && <div>Text</div>}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        pageLoaded: state.pageLoaded
    }
};

export default connect(mapStateToProps)(Text);
import React, {Suspense, lazy} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Redirect} from 'react-router';
import Spinner from '../UI/Spinner/Spinner';
import {GlobalStyle} from '../../styled';

const IssueList = lazy(() => import('../IssueList/IssueList'));
const Text = lazy(() => import('../Text/Text'));
const About = lazy(() => import('../About/About'));

const Home = () => {

    return (
        <React.Fragment>
            <GlobalStyle/>
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route path="/" exact component={IssueList} key="home"/>
                    <Route path="/info" exact component={About} key="about"/>
                    <Route path="/pub-terms" exact component={About} key="pub-terms"/>
                    <Route path="/:issue" exact component={IssueList} key="issue"/>
                    <Route path="/:issue/:slug" exact component={Text} key="text"/>
                    <Route render={() => (<Redirect to="/"/>)} key="default"/>
                </Switch>
            </Suspense>
        </React.Fragment>
    );
};


export default withRouter(Home);
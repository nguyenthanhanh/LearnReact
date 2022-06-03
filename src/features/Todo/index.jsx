import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetaiPage from './pages/DetailPage';
import NotFound from '../../components/NotFound';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} component={DetaiPage} exact></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    )
}

export default TodoFeature;
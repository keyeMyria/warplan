import * as React from "react";
import * as ReactDOM from "react-dom";
import { WarscrollBuilder } from "./components/warscroll-builder";
import { UnitsStore } from "./stores/units";
import { Provider } from "mobx-react";
import { OwnedModelsList } from "./components/owned-models-list";
import { MissingsList } from "./components/missings-list";
import { Basket } from "./components/basket";
import { HashRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import { MyNavbar } from "./components/my-navbar";

const root = document.getElementById("root");

const unitsStore = new UnitsStore();

ReactDOM.render(
    <Provider unitsStore={unitsStore}>
        <HashRouter>
            <>
                <MyNavbar/>
                <Switch>
                    <Route exact path="/" component={OwnedModelsList}/>
                    <Route exact path="/warscroll" component={WarscrollBuilder} />
                    <Route exact path="/missing" component={MissingsList}/>
                    <Route exact path="/basket" component={Basket}/>
                </Switch>
            </>
        </HashRouter>
    </Provider>    
    ,
    root
);
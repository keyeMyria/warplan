import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { WarscrollUnitsList } from "./warscroll-units-list";
import { WarscrollBattalionsList } from "./warscroll-battalions-list";
import { WarscrollSummary } from "./warscroll-summary";

export interface WarscrollBuilderProps {
    unitsStore?: UnitsStore;
}

@inject('unitsStore')
@observer
export class WarscrollBuilder extends React.Component<WarscrollBuilderProps, {}> {
    render() {
        return <>
            <WarscrollSummary/>
            <WarscrollBattalionsList/>
            <WarscrollUnitsList/>
        </>;
    }
}
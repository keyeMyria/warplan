import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { UnitsList } from "./units-list";
import { WarscrollUnitEdit } from "./warscroll-unit-edit";
import { Panel, Table } from "react-bootstrap";

export interface WarscrollUnitsListProps {
    unitsStore?: UnitsStore;
}

@inject('unitsStore')
@observer
export class WarscrollUnitsList extends React.Component<WarscrollUnitsListProps, {}> {
    render() {
        const warscroll = this.props.unitsStore!.warscroll;
        return <Panel>
            <Panel.Heading>Units</Panel.Heading>
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Points</th>
                    </tr>
                </thead>
                <tbody>
            {
                warscroll.units.map(x => <WarscrollUnitEdit key={x.id} unit={x}/>)
            }
                </tbody>
            </Table>
            <Panel.Footer>
                <span>{warscroll.unitsPoints} points</span>
                <UnitsList title="Add"/>
            </Panel.Footer>
            </Panel>;
    }
}
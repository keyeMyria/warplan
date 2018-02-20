import * as React from "react";
import { observer, inject } from "mobx-react";
import { Panel, Table, Button, Glyphicon } from "react-bootstrap";
import { BattalionsList } from "./battalions-list";
import { WarscrollStore } from "../stores/warscroll";

export interface WarscrollBattalionsListProps {
    warscrollStore?: WarscrollStore;
}

@inject('warscrollStore')
@observer
export class WarscrollBattalionsList extends React.Component<WarscrollBattalionsListProps, {}> {
    render() {
        const warscroll = this.props.warscrollStore!.warscroll;
        const requiredUnits = new Map<number, number>();

        for (const battalion of warscroll.battalions) {
            for (const unit of battalion.battalion.units) {
                const requiredUnit = requiredUnits.get(unit.unit.id);
                if (requiredUnit !== undefined) {
                    requiredUnits.set(unit.unit.id, requiredUnit + unit.count);
                }
                else {
                    requiredUnits.set(unit.unit.id, unit.count);
                }
            }
        }

        for (const unit of warscroll.units) {
            const requiredUnit = requiredUnits.get(unit.unit.id);
            if (requiredUnit !== undefined && requiredUnit > 0) {
                requiredUnits.set(unit.unit.id, requiredUnit - 1);
            }
        }

        return <Panel>
            <Panel.Heading>Battalions</Panel.Heading>
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Units</th>
                    <th>Points</th>
                    </tr>
                </thead>
                <tbody>
            {
                warscroll.battalions.map(x => <tr key={x.id}>
                    <td>{x.battalion.name}</td>
                    <td>{x.battalion.units.map(y => <span style={{ color:  requiredUnits.get(y.unit.id) ? 'red' : '' } } key={y.unit.id}>{ y.count} {y.unit.model.name} </span>)}</td>
                    <td>{x.battalion.points}</td>
                    <td><Button onClick={() => this.props.warscrollStore!.removeBattalion(x)}><Glyphicon glyph="remove"/></Button></td>
                </tr>)
            }
                </tbody>
            </Table>
            <Panel.Footer>
                <span>{warscroll.battalionsPoints} points</span>
                <BattalionsList title="Add"/>
            </Panel.Footer>
            </Panel>;
    }
}
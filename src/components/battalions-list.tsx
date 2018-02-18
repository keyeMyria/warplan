import * as React from "react";
import { UnitsStore } from "../stores/units";
import { observer, inject } from "mobx-react";
import { DropdownButton, MenuItem } from "react-bootstrap";

export interface BattalionsListProps {
    unitsStore?: UnitsStore;
    title: string;
}

@inject('unitsStore')
@observer
export class BattalionsList extends React.Component<BattalionsListProps, {}> {
    render() {
        return <DropdownButton title={this.props.title} id="battalions">
                {
                    this.props.unitsStore!.battalions.map(x => <MenuItem key={x.id} onClick={() => this.props.unitsStore!.addBattalion(x)}><span>{x.name}</span> <span>{x.points}</span></MenuItem>)
                }
            </DropdownButton>;
    }
}
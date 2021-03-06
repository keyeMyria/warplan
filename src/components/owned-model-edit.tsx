import * as React from "react";
import { observer, inject } from "mobx-react";
import { NumberControl } from "../atoms/number-control";
import { OwnedStore, OwnedModel } from "../stores/owned";
import { Button, Icon } from "semantic-ui-react";

export interface OwnedModelEditProps {
    model: OwnedModel;
    ownedStore?: OwnedStore;
}

@inject('ownedStore')
@observer
export class OwnedModelEdit extends React.Component<OwnedModelEditProps, {}> {
    render() {
        const model = this.props.model;
        return <tr>
            <td>{model.model.name}</td>
            <td>
                <NumberControl value={model.count} min={0} onChange={x => this.props.ownedStore!.setOwnedCount(this.props.model, x)} />
            </td>
            <td>
                <Button onClick={() => this.props.ownedStore!.removeOwned(this.props.model)}><Icon name="remove"/></Button>
            </td>
        </tr>;
    }

}
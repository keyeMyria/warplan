import React = require("react");
import { UnitsStore } from "../stores/units";
import { Well, Grid, Row, Col, Glyphicon } from "react-bootstrap";
import { inject, observer } from "mobx-react";

interface WarscrollSummaryProps {
    unitsStore?: UnitsStore;
}

@inject("unitsStore")
@observer    
export class WarscrollSummary extends React.Component<WarscrollSummaryProps, {}> {
    render() {
        const warscroll = this.props.unitsStore!.warscroll;
        const totalPoints = warscroll.totalPoints;

        return <Well>
            <Grid>
                <Row>
                    <Col md={2} >{totalPoints} points</Col>
                    <Col md={2}>{ !warscroll.isLeadersValid && <Glyphicon glyph="warning-sign" /> } {warscroll.numberOfLeaders} leaders ({warscroll.minLeaders} - {warscroll.maxLeaders})</Col>
                    <Col md={2}>{ !warscroll.isBattelinesValid && <Glyphicon glyph="warning-sign" /> }{warscroll.numberOfBattelines} battlelines ({warscroll.minBattlelines} - {warscroll.maxBattlelines})</Col>
                    <Col md={2}>{ !warscroll.isBehemotsValid && <Glyphicon glyph="warning-sign" /> }{warscroll.numberOfBehemots} behemots (0 - {warscroll.maxBehemots})</Col>
                    <Col md={2}>{ !warscroll.isArtilleryValid && <Glyphicon glyph="warning-sign" /> }{warscroll.numberOfArtillery} artillery (0 - {warscroll.maxArtillery})</Col>
                </Row>
            </Grid>
            </Well>;
    }
}
import React from 'react';
import {ContainerQuery} from 'react-container-query';
import {connect} from 'react-redux';
import { ScatterplotChart } from 'react-easy-chart';

class Homepage extends React.Component {
    render() {
        const { minX, maxX, minY, maxY, points } = this.props;

        return (
            <ScatterplotChart
                data={points}
                width={document.body.clientWidth}
                height={500}
                xDomainRange={[minX, maxX]}
                yDomainRange={[minY, maxY]}
            />
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {...state.chartData };
}

export default connect(mapStateToProps)(Homepage);
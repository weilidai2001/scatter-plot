import React from 'react';
import {connect} from 'react-redux';
import { ScatterplotChart } from 'react-easy-chart';

class Homepage extends React.Component {
    render() {
        const { minX, maxX, minY, maxY, points, ajaxStatus } = this.props;

        if (ajaxStatus) {
            return (<div>Loading</div>)
        } else {
            return (
                <ScatterplotChart
                    data={points}
                    axes
                    axisLabels={{x: 'X', y: 'Y'}}
                    width={document.body.clientWidth - 100}
                    height={500}
                    xDomainRange={[minX, maxX]}
                    yDomainRange={[minY, maxY]}
                />
            )
        }
    }
}


function mapStateToProps(state, ownProps) {
    return {
        ajaxStatus: state.ajaxStatus,
        ...state.chartData
    };
}

export default connect(mapStateToProps)(Homepage);
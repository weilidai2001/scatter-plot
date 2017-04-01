import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScatterplotChart } from 'react-easy-chart';
import Loader from 'react-loader';

class Homepage extends PureComponent {
    static propTypes = {
        minX: PropTypes.number,
        maxX: PropTypes.number,
        minY: PropTypes.number,
        maxY: PropTypes.number,
        points: PropTypes.array,
        ajaxStatus: PropTypes.bool
    }

    render() {
        const { minX, maxX, minY, maxY, points, ajaxStatus } = this.props;

        return (
            <Loader loaded={!ajaxStatus}>
                <ScatterplotChart
                    data={points}
                    axes
                    axisLabels={{ x: 'X', y: 'Y' }}
                    width={document.body.clientWidth - 100}
                    height={500}
                    xDomainRange={[minX, maxX]}
                    yDomainRange={[minY, maxY]}
                />
            </Loader>
        );
    }
}

function mapStateToProps(state) {
    return {
        ajaxStatus: state.ajaxStatus,
        ...state.chartData
    };
}

export default connect(mapStateToProps)(Homepage);

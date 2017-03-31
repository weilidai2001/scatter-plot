import React from 'react';
import {connect} from 'react-redux';
import { ScatterplotChart } from 'react-easy-chart';

class Homepage extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <ScatterplotChart
                data={data}
                width={1200}
                height={500}
                xDomainRange={[0, 1200]}
                yDomainRange={[0, 1200000]}
            />
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        data: state.chartData
    };
}

export default connect(mapStateToProps)(Homepage);
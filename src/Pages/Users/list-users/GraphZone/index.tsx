import { AgCharts } from 'ag-charts-react';
import { useContext, useState } from 'react';
import { type AgChartOptions } from 'ag-charts-community';
import { UserContext } from '../../../../Providers/UserContext';

const GraphZone = () => {
    const { userList } = useContext(UserContext);

    const [options, setOptions] = useState({
        data: [
            { title: 'Administrateur', value: userList.filter(u => u.id_role == 1).length, },
            { title: 'Auditeur', value: userList.filter(u => u.id_role == 3).length, },
        ],
        series: [{
            type: 'donut',
            calloutLabelKey: 'title',
            angleKey: 'value',
            innerRadiusRatio: 0.5,
        }],
    } as AgChartOptions);

    return (
        <AgCharts style={{
            height: "70vh",
            minHeight : 400
        }}
            options={options}
        />
    )
}

export default GraphZone
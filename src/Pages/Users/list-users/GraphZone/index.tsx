import { AgChartProps, AgCharts } from 'ag-charts-react'
import React, { useState } from 'react'

const GraphZone = () => {
    const [options, setOptions] = useState({
        data: [
            { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
            { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
            { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
            { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
            { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
            { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        ],
        // Series: Defines which chart type and data to use
        series: [{ type: 'line', xKey: 'month', yKey: 'iceCreamSales' }],
    } as any);

    return (
        <AgCharts style={{
            height: 500
        }}
            options={options}
        />
    )
}

export default GraphZone
(() => {
    'use strict'

    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'Domingo',
                'Segunda-feira',
                'Terça-feira',
                'Quarta-feira',
                'Quinta-feira',
                'Sexta-feira',
                'Sábado'
            ],
            datasets: [{
                data: [
                    24529,
                    17987,
                    18112,
                    19870,
                    19678,
                    22323,
                    25198
                ],
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth: 6,
                pointBackgroundColor: 'black'
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    boxPadding: 3
                }
            }
        }
    })
})()
// grafico 
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Sales' ,
            data: [120, 220, 410, 640],
            backgroundColor: [
                'rgba(22, 161, 216, 0.8)',
                'rgba(22, 161, 216, 0.8)',
                'rgba(22, 161, 216, 0.8)',
                'rgba(22, 161, 216, 0.8)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend:{
            position: 'bottom',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// jquery para mudar os valores
$(document).ready(function (){
    // valores default de produtos e marcas
    $("#produtos").html("<option value='hamburguer'>Hamburguer</option><option value='sushi'>Sushi</option>");
    $("#marcas").html("<option value=''>Hamburguer1</option><option value=''>Hamburguer2</option><option value=''>Hamburguer3</option>");

    // seleciona uma categoria muda o select de produto
    $("#categorias-select").on('click', function (){
        var val = $(this).val();
        if(val == "comida"){
            $("#produtos").html("<option value='hamburguer'>Hamburguer</option><option value='sushi'>Sushi</option>");
            $("#marcas").html("<option value=''>Hamburguer1</option><option value=''>Hamburguer2</option><option value=''>Hamburguer3</option>");
            myChart.data.datasets[0].data[0] = 120;
            myChart.data.datasets[0].data[1] = 220;
            myChart.data.datasets[0].data[2] = 410;
            myChart.data.datasets[0].data[3] = 640;
            myChart.update();
        } else if(val == "vestuario"){
            $("#produtos").html("<option value='calca'>Trousers</option><option value='camisa'>Shirt</option>");
            $("#marcas").html("<option value=''>Trousers1</option><option value=''>Trousers2</option><option value=''>Trousers3</option>");
            myChart.data.datasets[0].data[0] = 80;
            myChart.data.datasets[0].data[1] = 150;
            myChart.data.datasets[0].data[2] = 310;
            myChart.data.datasets[0].data[3] = 540;
            myChart.update();
        }

    })
    // seleciona um produto muda uma marca
    $("#produtos").on('click' , function (){
        var val = $(this).val();
        if(val == "hamburguer"){
            $("#marcas").html("<option value=''>Hamburguer1</option><option value=''>Hamburguer2</option><option value=''>Hamburguer3</option>");
            myChart.data.datasets[0].data[0] = 120;
            myChart.data.datasets[0].data[1] = 220;
            myChart.data.datasets[0].data[2] = 410;
            myChart.data.datasets[0].data[3] = 640;
            myChart.update();
        } else if(val == "sushi"){
            $("#marcas").html("<option value=''>Sushi1</option><option value='test2'>Sushi2</option><option value='test2'>Sushi3</option>");
            myChart.data.datasets[0].data[0] = 50;
            myChart.data.datasets[0].data[1] = 350;
            myChart.data.datasets[0].data[2] = 540;
            myChart.data.datasets[0].data[3] = 760;
            myChart.update();
        } else if(val == "calca"){
            $("#marcas").html("<option value=''>Trousers1</option><option value=''>Trousers2</option><option value=''>Trousers3</option>");
            myChart.data.datasets[0].data[0] = 80;
            myChart.data.datasets[0].data[1] = 150;
            myChart.data.datasets[0].data[2] = 310;
            myChart.data.datasets[0].data[3] = 540;
            myChart.update();
        } else if(val == "camisa"){
            $("#marcas").html("<option value=''>Shirt1</option><option value=''>Shirt2</option><option value=''>Shirt3</option>");
            myChart.data.datasets[0].data[0] = 320;
            myChart.data.datasets[0].data[1] = 550;
            myChart.data.datasets[0].data[2] = 640;
            myChart.data.datasets[0].data[3] = 860;
            myChart.update();
        }

    })
})


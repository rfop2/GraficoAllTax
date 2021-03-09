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
    $("#marcas").html("<option value='hamburguer1'>Hamburguer1</option><option value='hamburguer2'>Hamburguer2</option><option value='hamburguer3'>Hamburguer3</option>");

    // seleciona uma categoria muda o select de produto
    $("#categorias-select").on('click', function (){
        var val = $(this).val();
        if(val == "comida"){
            $("#produtos").html("<option value='hamburguer'>Hamburguer</option><option value='sushi'>Sushi</option>");
            $("#marcas").html("<option value='hamburguer1'>Hamburguer1</option><option value='hamburguer2'>Hamburguer2</option><option value='hamburguer3'>Hamburguer3</option>");
            myChart.data.datasets[0].data[0] = 120;
            myChart.data.datasets[0].data[1] = 220;
            myChart.data.datasets[0].data[2] = 410;
            myChart.data.datasets[0].data[3] = 640;
            myChart.update();
        } else if(val == "vestuario"){
            $("#produtos").html("<option value='calca'>Trousers</option><option value='camisa'>Shirt</option>");
            $("#marcas").html("<option value='trousers1'>Trousers1</option><option value='trousers2'>Trousers2</option><option value='trousers3'>Trousers3</option>");
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
            $("#marcas").html("<option value='hamburguer1'>Hamburguer1</option><option value='hamburguer2'>Hamburguer2</option><option value='hamburguer3'>Hamburguer3</option>");
            myChart.data.datasets[0].data[0] = 120;
            myChart.data.datasets[0].data[1] = 220;
            myChart.data.datasets[0].data[2] = 410;
            myChart.data.datasets[0].data[3] = 640;
            myChart.update();
        } else if(val == "sushi"){
            $("#marcas").html("<option value='sushi1'>Sushi1</option><option value='sushi2'>Sushi2</option><option value='sushi3'>Sushi3</option>");
            myChart.data.datasets[0].data[0] = 50;
            myChart.data.datasets[0].data[1] = 350;
            myChart.data.datasets[0].data[2] = 540;
            myChart.data.datasets[0].data[3] = 760;
            myChart.update();
        } else if(val == "calca"){
            $("#marcas").html("<option value='trousers1'>Trousers1</option><option value='trousers2'>Trousers2</option><option value='trousers3'>Trousers3</option>");
            myChart.data.datasets[0].data[0] = 80;
            myChart.data.datasets[0].data[1] = 150;
            myChart.data.datasets[0].data[2] = 310;
            myChart.data.datasets[0].data[3] = 540;
            myChart.update();
        } else if(val == "camisa"){
            $("#marcas").html("<option value='shirt1'>Shirt1</option><option value='shirt2'>Shirt2</option><option value='shirt3'>Shirt3</option>");
            myChart.data.datasets[0].data[0] = 320;
            myChart.data.datasets[0].data[1] = 550;
            myChart.data.datasets[0].data[2] = 640;
            myChart.data.datasets[0].data[3] = 860;
            myChart.update();
        }

    })

    // seleciona uma marca muda os valores
    $("#marcas").on('click' , function (){
        var val = $(this).val();
        if(val == "hamburguer1"){
            $("#marcas").html("<option value='hamburguer1'>Hamburguer1</option><option value='hamburguer2'>Hamburguer2</option><option value='hamburguer3'>Hamburguer3</option>");
            myChart.data.datasets[0].data[0] = 120;
            myChart.data.datasets[0].data[1] = 220;
            myChart.data.datasets[0].data[2] = 410;
            myChart.data.datasets[0].data[3] = 640;
            myChart.update();
        } else if(val == "hamburguer2"){
            $("#marcas").html("<option value='hamburguer1'>Hamburguer1</option><option value='hamburguer2'>Hamburguer2</option><option value='hamburguer3'>Hamburguer3</option>");
            myChart.data.datasets[0].data[0] = 40;
            myChart.data.datasets[0].data[1] = 330;
            myChart.data.datasets[0].data[2] = 240;
            myChart.data.datasets[0].data[3] = 360;
            myChart.update();
        } else if(val == "hamburguer3"){
            $("#marcas").html("<option value='hamburguer1'>Hamburguer1</option><option value='hamburguer2'>Hamburguer2</option><option value='hamburguer3'>Hamburguer3</option>");
            myChart.data.datasets[0].data[0] = 110;
            myChart.data.datasets[0].data[1] = 210;
            myChart.data.datasets[0].data[2] = 410;
            myChart.data.datasets[0].data[3] = 540;
            myChart.update();
        } else if(val == "shirt1"){
            $("#marcas").html("<option value='shirt1'>Shirt1</option><option value='shirt2'>Shirt2</option><option value='shirt3'>Shirt3</option>");
            myChart.data.datasets[0].data[0] = 320;
            myChart.data.datasets[0].data[1] = 550;
            myChart.data.datasets[0].data[2] = 640;
            myChart.data.datasets[0].data[3] = 860;
            myChart.update();
        } else if(val == "shirt2"){
            $("#marcas").html("<option value='shirt1'>Shirt1</option><option value='shirt2'>Shirt2</option><option value='shirt3'>Shirt3</option>");
            myChart.data.datasets[0].data[0] = 180;
            myChart.data.datasets[0].data[1] = 150;
            myChart.data.datasets[0].data[2] = 390;
            myChart.data.datasets[0].data[3] = 620;
            myChart.update();
        } else if(val == "shirt3"){
            $("#marcas").html("<option value='shirt1'>Shirt1</option><option value='shirt2'>Shirt2</option><option value='shirt3'>Shirt3</option>");
            myChart.data.datasets[0].data[0] = 20;
            myChart.data.datasets[0].data[1] = 50;
            myChart.data.datasets[0].data[2] = 120;
            myChart.data.datasets[0].data[3] = 200;
            myChart.update();
        } else if(val == "sushi1"){
            $("#marcas").html("<option value='sushi1'>Sushi1</option><option value='sushi2'>Sushi2</option><option value='sushi3'>Sushi3</option>");
            myChart.data.datasets[0].data[0] = 50;
            myChart.data.datasets[0].data[1] = 350;
            myChart.data.datasets[0].data[2] = 540;
            myChart.data.datasets[0].data[3] = 760;
            myChart.update();
        } else if(val == "sushi2"){
            $("#marcas").html("<option value='sushi1'>Sushi1</option><option value='sushi2'>Sushi2</option><option value='sushi3'>Sushi3</option>");
            myChart.data.datasets[0].data[0] = 90;
            myChart.data.datasets[0].data[1] = 250;
            myChart.data.datasets[0].data[2] = 640;
            myChart.data.datasets[0].data[3] = 1060;
            myChart.update();
        } else if(val == "sushi3"){
            $("#marcas").html("<option value='sushi1'>Sushi1</option><option value='sushi2'>Sushi2</option><option value='sushi3'>Sushi3</option>");
            myChart.data.datasets[0].data[0] = 10;
            myChart.data.datasets[0].data[1] = 120;
            myChart.data.datasets[0].data[2] = 440;
            myChart.data.datasets[0].data[3] = 600;
            myChart.update();
        } else if(val == "trousers1"){
            $("#marcas").html("<option value='trousers1'>Trousers1</option><option value='trousers2'>Trousers2</option><option value='trousers3'>Trousers3</option>");
            myChart.data.datasets[0].data[0] = 80;
            myChart.data.datasets[0].data[1] = 150;
            myChart.data.datasets[0].data[2] = 310;
            myChart.data.datasets[0].data[3] = 540;
            myChart.update();
        } else if(val == "trousers2"){
            $("#marcas").html("<option value='trousers1'>Trousers1</option><option value='trousers2'>Trousers2</option><option value='trousers3'>Trousers3</option>");
            myChart.data.datasets[0].data[0] = 280;
            myChart.data.datasets[0].data[1] = 320;
            myChart.data.datasets[0].data[2] = 610;
            myChart.data.datasets[0].data[3] = 1040;
            myChart.update();
        } else if(val == "trousers3"){
            $("#marcas").html("<option value='trousers1'>Trousers1</option><option value='trousers2'>Trousers2</option><option value='trousers3'>Trousers3</option>");  
            myChart.data.datasets[0].data[0] = 480;
            myChart.data.datasets[0].data[1] = 620;
            myChart.data.datasets[0].data[2] = 1010;
            myChart.data.datasets[0].data[3] = 1240;
            myChart.update();
        }

    })
})


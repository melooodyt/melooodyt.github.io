$(document).ready(function(){
        $("#getForcast").click(function(){
            var city=$("#city").val();
            var key = '5a0ebbe64cf23f82a2c96510f433cdc5';

            $.ajax ({
                url:'api.openweathermap.org/data/2.5/forecast?q={city name},{country code}',
                dataType:'json',
                type:'GET',
                data:{q:city, appid:key, units:'imperial'},
                success:function(data){
                    var weatherFunction = "";
                    $.each(data.weather, function(index, val){
                        weatherFunction += '<p><b>' + data.name + "</b><img src="+ val.icon + ".png></p>"+ data.main.temp +'&deg;F ' + ' | ' + val.main + ", " + val.description
                    });
                    $("#weatherForcastResult").html(weatherFunction);
                }
            })
        });
    })
    
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $('#demo').append("Geolocation is not supported by this browser.")
    }
}

function showPosition(position) {
    $('#map').show();
    $('#demo').html(`<br><strong>Here is your current location: </strong> Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`)
    
    let getZomato = `http://localhost:3000/zomato/getHealthyRestaurants?entity_id=74&entity_type=city&q=healthy&start=1&count=20&lat=${position.coords.latitude}&lon=${position.coords.longitude}&radius=1000&cuisines=1034%2C308%2C1016%2C164%2C143&establishment_type=16%2C4&collection_id=39%2C274852&category=2%2C5%2C8%2C9%2C10%2C13&sort=real_distance&order=asc`
    $.ajax({
        url: getZomato,
        method: 'GET'
    })
        .done((response) => {
            let html = `
            <h4 style="margin-top:3"%>Restaurants Near You!</h4>
            <div class=scrollable>
                <table data-toggle="table" id="dtVerticalScrollExample" class="table table-striped" style="width:80%">
                    <thead class="thead-dark" style="text-align:center">
                        <tr>
                            <th scope="col">Restaurant Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Avg. Price for Two (IDR)</th>
                        </tr>
                    </thead>`
            response.forEach((restaurant) => {
                html += `
                <tbody style="text-align:center">
                    <tr>
                        <td>${restaurant.restaurant.name}</td>
                        <td>${restaurant.restaurant.location.address}</td>
                        <td>${restaurant.restaurant.average_cost_for_two}</td>
                    </tr>
                </tbody>`
            })
            html += `
                </table>
            </div> `
            $('#listOfRestaurants').html(html)
        })
}
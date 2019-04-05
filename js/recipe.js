
function getRecipe() {
    event.preventDefault();
    console.log($('#proteinInput').val())
    console.log($('#recipeNumInput').val())
    console.log($('#healthInput').val())
    let q = $('#proteinInput').val()
    let to = $('#recipeNumInput').val()
    let health = $('#healthInput').val()
    $('#recipeRow').empty();
    $.ajax({
        url: `${baseURL}/recipes?q=${q}&from=0&to=${to}&health=${health}`,
        method: 'GET'
    })
    .done(recipelist => {
        console.log("sukses dapat data recipe", recipelist)
        let foundrecipelist =''
        recipelist.forEach(recipe => {
            console.log("ini nama resep", recipe.recipe.label)
            console.log("ini picture", recipe.recipe.image)
            foundrecipelist += 
            `<div class="col-4 mb-3" >
                <div class="card mx-auto">
                    <center><p style="padding:5px"><strong>${recipe.recipe.label}</strong></p></center>
                    <div class="card-body">
                        <img width="310" height="220" src=${recipe.recipe.image}>

                        <div class="row" style="padding:5px">
                            <div class="col-sm-12">
                                <p> How to Cook: <a href="${recipe.recipe.url}" target="_blank">Click Here</a></p>
                            </div>
                        </div>
                        <div class="row" style="padding:5px">
                            <div class="col-sm-12">
                                <p> Health Label: ${recipe.recipe.healthLabels}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        })
        console.log("selesai looping")
        $('#recipeRow').append(foundrecipelist)
        $('#recipe-list').show();
    })
    .fail(err => {
        console.log(err)
    })
} 
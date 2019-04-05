function getYoutube() {
  event.preventDefault()
  let input = $('#inputTitle').val()
  console.log(baseURL)
  $.ajax({
    url: `${baseURL}/videos`,
    method: 'POST',
    data: {
      title: input
    }
    })
    .done(res => {
      console.log(res)
      $('#video-content').append(`<iframe  width="420" height="315" src="https://www.youtube.com/embed/${res} "></iframe>`)
    })
    .fail(error => {
      console.log(error)
    })
}

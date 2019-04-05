function getYoutube() {
  event.preventDefault()
  let input = $('#inputTitle').val()
  console.log("Ini link video nya", baseURL)
  $.ajax({
    url: `${baseURL}/videos`,
    method: 'POST',
    data: {
      title: input
    }
    })
    .done(res => {
      console.log("berhasil dapat video", res)
      $('#video-content').append(`<center><iframe  width="420" height="315" src="https://www.youtube.com/embed/${res} "></iframe><center>`)
    })
    .fail(error => {
      console.log(error)
    })
}

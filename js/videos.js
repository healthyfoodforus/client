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
      $('#video-player').prepend(`
      <center>
      <div class="col-4 mb-3">
        <div class="card mx-auto" >
          <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/${res.videoId} "></iframe>
          <div class="card-body">
            <p class="card-text">${res.description}</p>
          </div>
        </div>
      </div>
      </center>`)
    })
    .fail(error => {
      console.log(error)
    })
}

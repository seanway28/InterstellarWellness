function getVideo() {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyCeRY-J15v7Uhjb4XwHh6ylk-N3s3LN7Vc',
          q: $("#video").val(),
          part: 'snippet',
          maxResults: 6,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
        console.log(data)
        var max = data.items.length;
        var min = 0;
        // generate a random number between the min 0 and the max 6
        var index = Math.floor(Math.random() * (max - min)) + min;

        $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[index].id.videoId)
        $('h3').text(data.items[index].snippet.title)
        $('.description').text(data.items[index].snippet.description)
      },
      error: function(response){
          console.log("Request Failed");
      }
    });
  }


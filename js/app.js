
var callback = function(){
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/media/popular/?access_token=25584698.bf54265.749110f8924a47389ea6e818e4ed0941",

    success: function(data) {
      console.log("success");
      console.log(data);
      $(".instapopular").empty();
      for (var i = 0; i < 6 ; i++) {
      $(".instapopular").append("<div class='col-md-4'><a href='"+ data.data[i].link +"' target=_blank ><img class='img-responsive img-circle' src='"+ data.data[i].images.low_resolution.url +"'</img></a><hr><a href='https://instagram.com/"+ data.data[i].user.username +"' target=_blank ><img class='img-responsive img-circle profilepicture' src='"+ data.data[i].user.profile_picture +"'></img> <span class='username'><b>Username: </b>" + data.data[i].user.username + "</span></a><hr><span class='glyphicon glyphicon-heart' style='color:red'> "+ data.data[i].likes.count+"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='glyphicon glyphicon-pencil' style='color:blue'> "+ data.data[i].comments.count +"</span><br><hr></div>")
      }
    }
  });
      setTimeout(callback, 5000);
};
callback();

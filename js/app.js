
  //original coding, pulls instagram data once
  
  // $.ajax({
  //   type: "GET",
  //   dataType: "jsonp",
  //   cache: false,
  //   url: "https://api.instagram.com/v1/media/popular/?access_token=25584698.bf54265.749110f8924a47389ea6e818e4ed0941",

  //   success: function(data) {
  //     console.log("success");
  //     console.log(data);
  //     for (var i = 0; i < 6 ; i++) {
  //     $(".instapopular").append("<div class='col-md-4'><a href='"+ data.data[i].link +"' target=_blank ><img class='img-responsive img-circle' src='"+ data.data[i].images.low_resolution.url +"'</img></a><hr><a href='https://instagram.com/"+ data.data[i].user.username +"' target=_blank ><img class='img-responsive img-circle profilepicture' src='"+ data.data[i].user.profile_picture +"'></img> <span class='username'><b>Username: </b>" + data.data[i].user.username + "</span></a><hr><span class='glyphicon glyphicon-heart' style='color:red'> "+ data.data[i].likes.count+"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='glyphicon glyphicon-pencil' style='color:blue'> "+ data.data[i].comments.count +"</span><br><hr></div>")
  //     }
  //   }
  // });

// This reloads the page continuously but does not allow music to play
// setTimeout(function(){
//    window.location.reload(1);
// }, 5000);



//this continuously adds more photos but does not swap out the old ones
var callback = function(){
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/media/popular/?access_token=25584698.bf54265.749110f8924a47389ea6e818e4ed0941",

    success: function(data) {
      console.log("success");
      console.log(data);
      for (var i = 0; i < 6 ; i++) {
      $(".instapopular").append("<div class='col-md-4'><a href='"+ data.data[i].link +"' target=_blank ><img class='img-responsive img-circle' src='"+ data.data[i].images.low_resolution.url +"'</img></a><hr><a href='https://instagram.com/"+ data.data[i].user.username +"' target=_blank ><img class='img-responsive img-circle profilepicture' src='"+ data.data[i].user.profile_picture +"'></img> <span class='username'><b>Username: </b>" + data.data[i].user.username + "</span></a><hr><span class='glyphicon glyphicon-heart' style='color:red'> "+ data.data[i].likes.count+"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='glyphicon glyphicon-pencil' style='color:blue'> "+ data.data[i].comments.count +"</span><br><hr></div>")
      }
    }
  });
      setTimeout(callback, 1000);
};
callback();


//Setinterval method - continuously calls new data and does not allow existing to load

// var callback = function(){
//   $.ajax({
//       type: "GET",
//       dataType: "jsonp",
//       cache: false,
//       url: "https://api.instagram.com/v1/media/popular/?access_token=25584698.bf54265.749110f8924a47389ea6e818e4ed0941",

//       success: function(data) {
//         console.log("success");
//         console.log(data);
//         for (var i = 0; i < 6 ; i++) {
//         $(".instapopular").append("<div class='col-md-4'><a href='"+ data.data[i].link +"' target=_blank ><img class='img-responsive img-circle' src='"+ data.data[i].images.low_resolution.url +"'</img></a><hr><a href='https://instagram.com/"+ data.data[i].user.username +"' target=_blank ><img class='img-responsive img-circle profilepicture' src='"+ data.data[i].user.profile_picture +"'></img> <span class='username'><b>Username: </b>" + data.data[i].user.username + "</span></a><hr><span class='glyphicon glyphicon-heart' style='color:red'> "+ data.data[i].likes.count+"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='glyphicon glyphicon-pencil' style='color:blue'> "+ data.data[i].comments.count +"</span><br><hr></div>")
//         }
//       }
//     });
// };

// var SetInterval = function (callback){};

// SetInterval(callback,5000);


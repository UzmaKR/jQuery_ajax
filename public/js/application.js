$(document).ready(function(){
  $('#get_color').on('click', function(evt) {
      evt.preventDefault;
      $.ajax({
          type: 'POST',
          url: '/color'
      }).done(function(data_hash) {
        console.log(data_hash);
        $("ul li:nth-child(" + data_hash["cell"] + ")").css('background-color', data_hash["color"]);
      });
  });

});

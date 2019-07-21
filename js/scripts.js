$(document).ready(function(){
  $(".design div").click(function(){
    $("#desc-des").toggle();
    $("#des-icon").toggle();
  });
  $(".dev div").click(function(){
    $("#desc-dev").toggle();
    $("#dev-icon").toggle();
  });
  $(".products div").click(function(){
    $("#desc-prod").toggle();
    $("#prod-icon").toggle();
  });
});

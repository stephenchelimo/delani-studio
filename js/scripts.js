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
  $('#work4').on("mouseover", function() {
  $('#box4').show();
});

$('#work4').on("mouseout", function() {
  $('#box4').hide();
});
$('#work5').on("mouseover", function() {
  $('#box5').show();
});

$('#work5').on("mouseout", function() {
  $('#box5').hide();
});
$('#work6').on("mouseover", function() {
  $('#box6').show();
});

$('#work6').on("mouseout", function() {
  $('#box6').hide();
});
$('#work1').on("mouseover", function() {
  $('#box1').show();
});

$('#work1').on("mouseout", function() {
  $('#box1').hide();
});
$('#work2').on("mouseover", function() {
  $('#box2').show();
});

$('#work2').on("mouseout", function() {
  $('#box2').hide();
});
$('#work3').on("mouseover", function() {
  $('#box3').show();
});

$('#work3').on("mouseout", function() {
  $('#box3').hide();
});
$('#work7').on("mouseover", function() {
  $('#box7').show();
});

$('#work7').on("mouseout", function() {
  $('#box7').hide();
});
$('#work8').on("mouseover", function() {
  $('#box8').show();
});

$('#work8').on("mouseout", function() {
  $('#box8').hide();
});
});

document.getElementById('submit').addEventListener('click', function(){
  var name = document.getElementById('name').value;
  document.getElementById('response').value = name + ", we have received your message. Thank you for reaching us.";
});

document.getElementById('submit').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
  event.preventDefault();
});

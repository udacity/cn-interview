var courses = $('.course-item');
var list = $('.course-list')

function filter() {
  var result = []
  var txt = $('#searchText').val()
  for(var i = 0; i < courses.length; i++) {
    var title = courses[i].querySelector('.course-title h3 a').innerText
    title.indexOf(txt) > -1 ? result.push(courses[i]) : ''
  }
  list.html(result)
}

$('#searchText').keyup(function(event) {
  if (event.keyCode === 13) {
    filter()
  }
})

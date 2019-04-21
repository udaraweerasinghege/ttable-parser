// JavaScript Document
import { UTSG_COURSES } from './script';

var day;
var str = "";
var val;
var sem;
var year = '0';
var req = '0';

var year_index = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
var breadth_index = { '1': 'Creative and Cultural Representations', '2': 'Thought, Belief and Behaviour', '3': 'Society and its Institutions (3)', '4': 'Living Things and Their Environment', '5': 'The Physical and Mathematical Universes' };
var day_index = { 'M': 'MO', 'T': 'TU', 'W': 'WE', 'R': 'TH', 'F': 'FR' };
var time_index = { '8': '08:00', '9': '09:00', '10': '10:00', '11': '11:00', '12': '12:00', '1': '13:00', '2': '14:00', '3': '15:00', '4': '16:00', '5': '17:00', '6': '18:00', '7': '19:00' };


$(document).ready(function () {

  $("#time")
    .change(function () {

      $("#time option:selected").each(function () {
        val = $(this).val();
        str = dictSearch(day, val, sem, year, req);
      });
      $("pre#output").html(str);
    })
    .change();

  $("#breadth")
    .change(function () {

      $("#breadth option:selected").each(function () {
        req = $(this).val();
        str = dictSearch(day, val, sem, year, req);
      });
      $("pre#output").html(str);
    })
    .change();

  $(function () {
    $("#tip").popover({
      //title: 'Enter Mobile Number',
      content: "Duplicate course listings means multiple sections for queried times.",
      trigger: 'hover',
      delay: { show: 0, hide: 0 }
    });
  });

  $('#time').change(function () {
    if ($('#time').val() === '-- Select Time --') {
      $(this).css({
        "background-color": "transparent",
        "color": "#fff"
      });
    } else {
      $(this).css({
        "background-color": "#fff",
        "color": "#444"
      });
    }
  })

  $('#breadth').change(function () {
    if ($('#breadth').val() === '-- Filter by Breadth --') {
      $(this).css({
        "background-color": "transparent",
        "color": "#fff"
      });
    } else {
      $(this).css({
        "background-color": "#fff",
        "color": "#444"
      });
    }
  })

});


$('body').on('click', '#stubb.btn-group button', function (e) {

  day = $(this).val();
  str = dictSearch(day, val, sem, year, req);
  $("pre#output").html(str);



  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  //do any other button related things
});

$('body').on('click', '#sem.btn-group button', function (e) {

  sem = $(this).val();
  str = dictSearch(day, val, sem, year, req);
  $("pre#output").html(str);



  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  //do any other button related things
});

$('body').on('click', '#years.btn-group button', function (e) {

  year = $(this).val();
  str = dictSearch(day, val, sem, year, req);
  $("pre#output").html(str);



  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  //do any other button related things
});

function make_course_link(course) {
  return '<a href="' + course.link + '" target="_blank">' + course.code + '</a>';
}

// Convert array into array of arrays with each inner array containing five items.
function fives(lst) {
  output = [];
  for (var i = 0; i < lst.length; i++) {
    var courseLink = lst[i];
    if (i % 5 == 0 && i != 0) {
      output.push('\n' + "  " + courseLink);
    }
    else {
      output.push("  " + courseLink);
    }
  }
  if (!output.length) {
    return 'Nothing to see here 😎 (yet).'
  }
  return output;
}
function dictSearch(day, time, sem, year, breadth) {
  var result = [];
  var myArray = UTSG_COURSES;
  for (var i = 0; i < myArray.length; i++) {
    course = myArray[i];
    //Make sure the semester matches
    if (course.code.slice(-1) == sem) {
      //Make sure the year matches
      if (course.code.charAt(3) == year || year == '0') {
        //Make sure the breadth matches
        if (course.breadth_req.indexOf(breadth_index[breadth]) > -1 || breadth === '0') {
          //Make sure day matches
          for (var j = 0; j < course.meeting_sections.length; j++) {
            if (course.meeting_sections[j].day == day_index[day]) {
              //Finally, make sure start time matches
              if (time == '*' || course.meeting_sections[j].start == time_index[time]) {
                result.push(make_course_link(course));
              }
            }
          }
        }
      }
    }
  }
  return fives(result);
}

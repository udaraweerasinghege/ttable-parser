//require("C:/Program Files/nodejs/node_modules/npm/node_modules/npm-registry-client/test/fixtures/underscore/1.3.3/package/underscore.js");
time_to_lec = {
'MAT223H1F': {'L0202': ['W1-3', 'R2'], 'L5301': ['MTR5'], 'T5101': ['T5'], 'L0101': ['T1-3', 'W1'], 'L5401': ['W6-9'], 'L0201': ['T1-3', 'R1'], 'T0201': ['W12'], 'L0301': ['T10-12', 'W2'], 'T0101': ['T12'], 'L5101': ['T6-9'], 'L5201': ['R6-9'], 'T0301': ['R12']},
'CSC207H1F': {'L0201': ['T2', 'WF12'], 'L5101': ['W5', 'W6-8'], 'L2000': ['T10', 'WF10'], 'L0301': ['F1', 'F2-4'], 'L0101': ['T10', 'WF10']},
'CSC236H1F': {'L0201': ['MWF1'], 'L5101': ['R6', 'R7-9'], 'L2000': ['MWF11'], 'L0101': ['MWF11']},
'PHY100H1F': {'T0201': ['T12'], 'T0101': ['R12'], 'T0401': ['W12'], 'L0101': ['MW11'], 'T0301': ['M12']},
'CHM139H1F': {'P0301': ['W2-5 (A)'], 'L0101': ['MWF12'], 'P0201': ['T2-5 (A)'], 'P0302': ['W2-5 (A)'], 'P0401': ['R2-5 (A)'], 'T0201': ['W2'], 'P0501': ['F2-5 (A)'], 'L0201': ['TRF9'], 'P0402': ['R2-5 (A)'], 'P0502': ['F2-5 (A)'], 'P0202': ['T2-5 (A)'], 'T0101': ['T1'], 'T0501': ['F11'], 'T0401': ['R2'], 'T0301': ['W3']},
'CSC209H1S': {'L5101': ['W6-8'], 'T5101': ['W8'], 'L0101': ['MW12'], 'T0101': ['F1'], 'L0201': ['MW10'], 'T0201': ['F2'], 'T0301': ['F3']},
'CSC343H1S': {'L5101': ['T6-8', 'T8'], 'L2501': ['T6-8', 'T8'], 'L2001': ['MWF12'], 'L0101': ['MWF12'], 'L0201': ['MWF2'], 'L2201': ['MWF2']},
'CSC258H1S': {'L0201': ['MWF12', 'T6-9'], 'L5101': ['M6-9', 'T6-9'], 'L0101': ['MWF11', 'W6-9']},
'CSC263H1S': {'L5101': ['R6-8', 'R8'], 'L2001': ['MWF2'], 'L0101': ['MWF2'], 'L0201': ['MWF3'], 'L2201': ['MWF3'], 'L2000': ['MWF2']},
'ENV200H1S': {'T0101': ['T10 (A)'], 'T0601': ['R10 (A)'], 'L0101': ['TR11'], 'T0401': ['W11 (A)'], 'T0201': ['T12 (A)'], 'T0701': ['R12 (A)'], 'T0501': ['W1 (A)'], 'T0801': ['R1 (A)'], 'T0301': ['T1 (A)']},
}

/* 
Iterating through a list -> iterating through the indexes
Iterating through a dict -> iterating through keys
*/

function range (start, stop) {

	var range = [];

	for (x=start; x<=stop; x++) {
		console.log("x = " + x);
		console.log("line 50");
		console.log("range = " + range)
		range.push(x);
	}
	return range;
}
function make_schedule_dict (s) {
	
	var classes = s.split(',');
	//console.log(classes);
	var schedule = {};
	for (i=0; i<classes.length; i++) {
		cl = classes[i];
		//console.log(cl[0]);
		schedule[cl] = [];
	}
	return schedule;
};

function find_schedule_times (schedule) {
	console.log("Schedule Length = " + schedule.length);
	for (j in schedule) {
		console.log("j = " + j)
		console.log("for loop line 16");
		var course = j;
		console.log("Course = " + course);
		var course_code = course.split(' ');
		console.log("Course Code = " +course_code);
		var course_name = course_code[0];
		console.log("Course name = " + course_name);
		var course_info = time_to_lec[course_name];
		console.log("Course Info = " + JSON.stringify(course_info));
		var lectut = course_code[1];
		console.log("Lecture/Tutorial Code = " + lectut);
		var my_section_time = course_info[lectut];
		console.log("Section Times = " + my_section_time);
		//works unti this point. need to test again after writing split_time

		for (k=0; k<my_section_time.length; k++) {
			var time = my_section_time[k];
			console.log("Time = " + time);
			var hourly_time = split_time(time); // calling another function in document
			for (l=0; l<hourly_time.length; l++) {
				schedule[course].push(hourly_time[l]);
			}
		}
		
	}
	return schedule;
};

function isalpha (s){ 

	var days = 'MTWRFS';
	return days.match(s);
};

function split_time(s){
	
	// time = ['M10','W10','F10']
	//or
	// time = ['W6', 'W7', 'W8']
	
	var return_list = [];
	s = s.split('(');
	s = s[0].trim();
	console.log(s);
	var index = 0;
	while (isalpha(s[index])) {
		index += 1;
	}

	var day = s.substring(0,index);
	var hour = s.substring(index);
	console.log("Day = " +day);
	console.log("Hour = " + hour);
	
	if (hour.match('-') == null) {
		for (x in day) {
			return_list.push(day[x]+hour);
		}
	}

	//console.log(return_list);
	
	else {
		var hour_split = hour[0];
		var hour_end = hour[-1];	
		hour_split = parseInt(hour_split);
		hour_end = parseInt(hour_end);
		
		var hourly = '';
		for (i in range(hour_split, hour_end)) {
			hourly = hourly + str(i);
		}
		
		for (x in day) {
			for (h in hourly){
				return_list.push(x+h);
			}
		}
	}
	return return_list;
	
};

// MAIN //

s = make_schedule_dict('MAT223H1F L0201,CSC207H1F L0101,CSC236H1F L0201,PHY100H1F L0101,PHY100H1F T0301,CHM139H1F P0301,CSC209H1S L0101,CSC343H1S L0201,CSC258H1S L0101,CSC263H1S L5101,ENV200H1S L0101,ENV200H1S T0201');
console.log(s);
console.log("Back in Main");
a = find_schedule_times(s);
console.log(a);


a = 'W6-9';
b = split_time(a);
console.log(b);
console.log(range(5,7));
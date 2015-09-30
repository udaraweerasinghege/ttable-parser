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


/*
Description: Generate an integer Array containing an arithmetic progression. A port of
the native Python `range()` function. 
Input: 2 integer arguments
Output: Integer array of elements between start and stop
*/
function range (start, stop) {

	var range = [];

	for (x=start; x<stop; x++) {
		range.push(x);
	}
	return range;
}

/*
Description: Determine if given string represents a day of the week
Input: str (with length 1)
Output: Boolean
--
> isday ('A');
False
> isday ('M');
True
*/
function isday (s){ 

	var days = 'MTWRFS';
	return days.match(s);
};

/*
Description: Determine if given string represents a day of the week
Input: str (with length 1)
Output: Boolean
--
> split_time ('MWF10');
['M10', 'W10', 'F10']

> split_time ('R8');
['R8']

> split_time ('W6-9');
['W6', 'W7', 'W8']
*/
function split_time(s){
	
	var return_list = [];
	s = s.split('(');
	s = s[0].trim();
	var index = 0;
	while (isday(s[index])) {
		index += 1;
	}

	var day = s.substring(0,index);
	var hour = s.substring(index);
	
	if (hour.match('-') == null) {
		for (x in day) {
			return_list.push(day[x]+hour);
		}
	}

	
	else {
		var hour_split = hour[0];
		var hour_end = hour[hour.length-1];
		hour_split = parseInt(hour_split);
		hour_end = parseInt(hour_end);
		
		var hourly = '';
		var hours_sep = range(hour_split, hour_end);
		for (i in hours_sep) {
			hourly = hourly + hours_sep[i];
		}
		
		for (x in day) {
			for (h in hourly){
				return_list.push(day[x]+hourly[h]);
			}
		}
	}
	return return_list;
	
};

/*
Description: Take decoded griddy URL and create an empty dictionary with the course & lecture as keys
Input: string, as decoded from griddy URL
Output: Dictionary of {'str': []}
--
> a = 'MAT223H1F L0201,CSC207H1F L0101,CSC236H1F L0201,PHY100H1F L0101,PHY100H1F T0301,CHM139H1F P0301,CSC209H1S L0101,CSC343H1S L0201,CSC258H1S L0101,CSC263H1S L5101,ENV200H1S L0101,ENV200H1S T0201';
> make_schedule_dict(a);
{
	'MAT223H1F L0201': [],
	'CSC207H1F L0101': [],
	'CSC236H1F L0201': [],
	'PHY100H1F L0101': [],
	'PHY100H1F T0301': [],
	'CHM139H1F P0301': [],
	'CSC209H1S L0101': [],
	'CSC343H1S L0201': [],
	'CSC258H1S L0101': [],
	'CSC263H1S L5101': [],
	'ENV200H1S L0101': [],
	'ENV200H1S T0201': []
}
*/
function make_schedule_dict (s) {
	
	var classes = s.split(',');
	var schedule = {};
	for (i=0; i<classes.length; i++) {
		cl = classes[i];
		schedule[cl] = [];
	}
	return schedule;
};

/*
Description: Find hourly intervals of when lectures/tutorials are taking place
Input: Dictionary of {'str': []}
Output: Dictionary of {'str': ['str']}
--
> a = {
	'MAT223H1F L0201': [],
	'CSC207H1F L0101': [],
	'CSC236H1F L0201': [],
	'PHY100H1F L0101': [],
	'PHY100H1F T0301': [],
	'CHM139H1F P0301': [],
	'CSC209H1S L0101': [],
	'CSC343H1S L0201': [],
	'CSC258H1S L0101': [],
	'CSC263H1S L5101': [],
	'ENV200H1S L0101': [],
	'ENV200H1S T0201': []
};
> find_schedule_times(a);
{
	'MAT223H1F L0201': ['R1'],
	'CSC207H1F L0101': ['T10', 'W10', 'F10'],
	'CSC236H1F L0201': ['M1', 'W1', 'F1'],
	'PHY100H1F L0101': ['M11', 'W11'],
	'PHY100H1F T0301': ['M12'],
	'CHM139H1F P0301': ['W2', 'W3', 'W4'],
	'CSC209H1S L0101': ['M12', 'W12'],
	'CSC343H1S L0201': ['M2' 'W2', 'F2'],
	'CSC258H1S L0101': ['M11', 'W11', 'F11'],
	'CSC263H1S L5101': ['R8'],
	'ENV200H1S L0101': ['T11', R11'],
	'ENV200H1S T0201': ['T12']
}
*/
function find_schedule_times (schedule) {
	for (j in schedule) {
		var course = j;
		var course_code = course.split(' ');
		var course_name = course_code[0];
		var course_info = time_to_lec[course_name];
		var lectut = course_code[1];
		var my_section_time = course_info[lectut];

		for (k=0; k<my_section_time.length; k++) {
			var time = my_section_time[k];
			var hourly_time = split_time(time); // calling another function in document
			for (l=0; l<hourly_time.length; l++) {
				schedule[course].push(hourly_time[l]);
			}
		}
	}
	return schedule;
};

//untested function, need to move file to get dictSearch before this is done
function compare_times(schedule) {

	var matched_courses = [];
	for (course in schedule) {
		var cl = course.split(' ');
		cl = cl[0];
		var sem = cl[cl.length-1];
		for (i in schedule[course]){
			var time = schedule[course][i];
			var matches = dictSearch(time[0], substring(time[1]), sem); //dictSearch from dictsearch.js
			for (x in matches) {
				matched_courses.push(matches[x]);
			}
		}
	}

	return matched_courses;
}

// MAIN //
s = make_schedule_dict('MAT223H1F L0201,CSC207H1F L0101,CSC236H1F L0201,PHY100H1F L0101,PHY100H1F T0301,CHM139H1F P0301,CSC209H1S L0101,CSC343H1S L0201,CSC258H1S L0101,CSC263H1S L5101,ENV200H1S L0101,ENV200H1S T0201');
a = find_schedule_times(s);


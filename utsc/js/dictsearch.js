 // JavaScript Document
var day;
var str = "";
var val;
var sem;
var year = '0';
var req = '0';

var year_index = {'1':'A', '2':'B', '3':'C', '4':'D'};
var breadth_index = {'1':'Arts, Literature, and Language', '2':'History, Philosophy, and Cultural Studies', '3':'Social and Behavioural Sciences', '4':'Natural Sciences', '5':'Quantitative Reasoning'};
var day_index = {'M':'MO', 'T':'TU', 'W':'WE', 'R':'TH', 'F':'FR'};
var time_index = {'8':'8:00', '9':'9:00', '10':'10:00', '11':'11:00', '12':'12:00', '1':'13:00', '2':'14:00', '3':'15:00', '4':'16:00', '5':'17:00', '6':'18:00', '7':'19:00'};


//-------------------------------------------------------------------------------------------------------------------------
var course_list = {
	'UTSC_COURSES': [{
		'code': 'ACMB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMB01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'ACMB01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMB01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'ACMB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ACMC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMC01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMC01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD91H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD91H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD91H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD91H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD92H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD92H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD92H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACMD93Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts,_Culture_and_Media.html#ACMD93Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ACTB40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#ACTB40H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'AFSA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/African_Studies.html#AFSA01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'AFSA03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/African_Studies.html#AFSA03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'AFSB01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/African_Studies.html#AFSB01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'AFSB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/African_Studies.html#AFSB05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'AFSB50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/African_Studies.html#AFSB50H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'AFSB51H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/African_Studies.html#AFSB51H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'AFSC52H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/African_Studies.html#AFSC52H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'AFSC97H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/African_Studies.html#AFSC97H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'ANTA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTA01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'ANTA01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTA01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'ANTA02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'ANTB01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'ANTB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'ANTB09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB09H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTB14H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB14H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'ANTB15H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB15H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTB18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB18H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTB19H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB19H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'ANTB20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB20H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTB21H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB21H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTB22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'ANTB64H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTB64H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'ANTC03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ANTC03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ANTC04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ANTC04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ANTC09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC09H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTC10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTC14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTC17H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC17H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'ANTC19H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC19H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'ANTC20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC20H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTC31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC31H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'ANTC32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC32H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'ANTC33H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC33H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTC34H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC34H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTC47H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC47H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTC48H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC48H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTC53H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC53H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'ANTC60H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC60H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'ANTC61H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC61H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTC66H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC66H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTC67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC67H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTC67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC67H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'ANTC68H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC68H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'ANTC68H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC68H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'ANTC69H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTC69H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'ANTD05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'ANTD06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTD15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD15H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'ANTD16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTD22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'ANTD31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD31H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ANTD31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD31H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ANTD32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD32H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ANTD35H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD35H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'ANTD40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD40H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'ANTD41H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Anthropology.html#ANTD41H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'ASTA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Astronomy.html#ASTA01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'ASTA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Astronomy.html#ASTA02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'ASTB23H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Astronomy.html#ASTB23H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'ASTC25H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Astronomy.html#ASTC25H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'BIOA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOA01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOA02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOA11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOA11H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'BIOB10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB10H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'BIOB11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB11H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'BIOB12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB12H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '08:00'
		}, {
			'day': 'TH',
			'start': '08:00'
		}]
	}, {
		'code': 'BIOB32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB32H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'BIOB33H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB33H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'BIOB34H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB34H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOB38H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB38H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'BIOB50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB50H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'BIOB51H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB51H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'BIOB52H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB52H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'BIOB98H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB98H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOB98H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB98H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOB99H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB99H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOB99H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOB99H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOC10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC10H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOC12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC12H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'BIOC13H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC13H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'BIOC14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC14H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'BIOC15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC15H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOC16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOC17H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC17H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOC19H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC19H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'BIOC23H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC23H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}]
	}, {
		'code': 'BIOC31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC31H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'BIOC32H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC32H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'BIOC33H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC33H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'BIOC34H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC34H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOC37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC37H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'BIOC39H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC39H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'BIOC40H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC40H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'BIOC50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC50H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'BIOC51H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC51H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'BIOC52H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC52H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'BIOC54H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC54H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOC58H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC58H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOC59H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC59H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOC61H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC61H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'BIOC62H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC62H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'BIOC63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC63H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'BIOC65H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC65H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOC99H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC99H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOC99H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOC99H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'BIOD08H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD08H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOD17H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD17H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '16:00'
		}]
	}, {
		'code': 'BIOD19H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD19H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'BIOD19H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD19H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'BIOD21H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD21H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOD22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD22H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOD25H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD25H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOD26H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD26H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOD29H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD29H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'BIOD30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD30H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'BIOD33H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD33H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'BIOD35H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD35H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'BIOD37H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD37H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOD43H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD43H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'BIOD48H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD48H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOD53H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD53H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}]
	}, {
		'code': 'BIOD62H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD62H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'BIOD65H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD65H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'BIOD65H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD65H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'BIOD66H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD66H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'BIOD67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD67H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOD67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD67H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOD95H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOD95H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOD96Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD96Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'BIOD98Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD98Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'BIOD99Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Biological_Sciences.html#BIOD99Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'CHMA10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMA10H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '12:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'CHMA10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMA10H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'CHMA11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMA11H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '12:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'CHMB16H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'CHMB20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB20H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'CHMB21H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB21H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'CHMB23H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB23H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'CHMB31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB31H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'FR',
			'start': '14:00'
		}]
	}, {
		'code': 'CHMB41H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB41H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '08:00'
		}, {
			'day': 'WE',
			'start': '08:00'
		}, {
			'day': 'FR',
			'start': '08:00'
		}]
	}, {
		'code': 'CHMB41H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB41H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'CHMB42H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB42H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}, {
			'day': 'FR',
			'start': '14:00'
		}]
	}, {
		'code': 'CHMB55H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB55H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'CHMB62H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMB62H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'CHMC11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMC11H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'CHMC16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMC16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'CHMC20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMC20H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'CHMC31Y3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMC31Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'CHMC41H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMC41H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'CHMC47H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMC47H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'CHMD39H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMD39H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'CHMD59H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMD59H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'CHMD69H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMD69H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'CHMD79H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMD79H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'CHMD90Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMD90Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CHMD91H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Chemistry.html#CHMD91H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CITB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'CITB02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'CITB03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITB03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'CITB04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITB04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'CITB08H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITB08H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'CITC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'CITC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'CITC03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITC03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'CITC04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITC04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'CITC09H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITC09H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'CITC12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITC12H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'CITC15H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITC15H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'CITD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITD01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'CITD05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITD05H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'CITD06H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITD06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'CITD30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITD30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CITD30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/City_Studies.html#CITD30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CLAA04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Classical_Studies.html#CLAA04H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'CLAA05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Classical_Studies.html#CLAA05H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'CLAA06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Classical_Studies.html#CLAA06H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}]
	}, {
		'code': 'CLAB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Classical_Studies.html#CLAB05H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'CLAB06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Classical_Studies.html#CLAB06H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'CLAC05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Classical_Studies.html#CLAC05H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'CLAC12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Classical_Studies.html#CLAC12H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'CLAC22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Classical_Studies.html#CLAC22H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'COPD01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD01H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'WE',
			'start': '17:00'
		}, {
			'day': 'WE',
			'start': '17:00'
		}]
	}, {
		'code': 'COPD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD01H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'WE',
			'start': '17:00'
		}, {
			'day': 'WE',
			'start': '17:00'
		}]
	}, {
		'code': 'COPD02H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD02H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'COPD03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD03H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}, {
			'day': 'MO',
			'start': '17:00'
		}, {
			'day': 'WE',
			'start': '17:00'
		}, {
			'day': 'WE',
			'start': '17:00'
		}]
	}, {
		'code': 'COPD03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD03H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}, {
			'day': 'MO',
			'start': '17:00'
		}, {
			'day': 'WE',
			'start': '17:00'
		}, {
			'day': 'WE',
			'start': '17:00'
		}]
	}, {
		'code': 'COPD04H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD04H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'COPD07Y3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD07Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': []
	}, {
		'code': 'COPD07Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD07Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': []
	}, {
		'code': 'COPD08Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD08Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': []
	}, {
		'code': 'COPD11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD11H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'MO',
			'start': '16:00'
		}]
	}, {
		'code': 'COPD11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD11H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'COPD12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD12H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'COPD12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD12H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'COPD13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD13H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'COPD13H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Co-operative_Programs_General_Information.html#COPD13H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'CRTB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#CRTB01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'CRTB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#CRTB02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'CRTC72H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#CRTC72H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'CSCA08H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCA08H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '19:00'
		}]
	}, {
		'code': 'CSCA20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCA20H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'MO',
			'start': '12:00'
		}]
	}, {
		'code': 'CSCA48H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCA48H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}, {
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '16:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}, {
			'day': 'FR',
			'start': '14:00'
		}]
	}, {
		'code': 'CSCA67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCA67H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'CSCB07H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCB07H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'CSCB09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCB09H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'CSCB20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCB20H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'CSCB36H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCB36H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}, {
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'CSCB58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCB58H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'CSCB63H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCB63H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'CSCC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC01H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'CSCC09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC09H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'CSCC10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC10H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'CSCC11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC11H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'CSCC24H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC24H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'CSCC37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC37H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'CSCC43H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC43H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'CSCC63H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC63H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'CSCC69H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC69H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'CSCC73H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCC73H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'CSCD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD01H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'CSCD03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'CSCD03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'CSCD18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD18H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'CSCD27H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD27H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'CSCD37H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD37H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'CSCD43H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD43H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'CSCD54H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD54H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'CSCD58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD58H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'CSCD90H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD90H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'CSCD92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD92H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CSCD94H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD94H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CSCD94H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD94H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CSCD94H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD94H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CSCD95H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CSCD95H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CSCD95H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Computer_Science.html#CSCD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'CTLA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Teaching_and_Learning.html#CTLA01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'CTLA01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Teaching_and_Learning.html#CTLA01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'CTLB03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Teaching_and_Learning.html#CTLB03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'CTLB03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Teaching_and_Learning.html#CTLB03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'ECTB61H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#ECTB61H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'ECTD68H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#ECTD68H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'ECTD69H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#ECTD69H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'EDUC10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Concurrent_Teacher_Education.html#EDUC10H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'EDUC20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Concurrent_Teacher_Education.html#EDUC20H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'EESA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESA01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'EESA06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESA06H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'EESA07H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESA07H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'EESA09H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESA09H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'EESA10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESA10H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'EESA11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESA11H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'EESB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'EESB03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB03H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'EESB04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB04H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'EESB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB05H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'EESB15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB15H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '08:00'
		}]
	}, {
		'code': 'EESB16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'EESB18H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB18H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}]
	}, {
		'code': 'EESB19H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB19H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'EESB20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESB20H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'EESC03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC03H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}]
	}, {
		'code': 'EESC04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC04H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'EESC07H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC07H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'EESC13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC13H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'EESC16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'EESC18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC18H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'EESC20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC20H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'EESC24H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC24H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'EESC24H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC24H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'EESC30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC30H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'EESC31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC31H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'EESC34H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC34H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'EESC36H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC36H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}]
	}, {
		'code': 'EESC37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESC37H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'EESD02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'EESD06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD06H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'EESD07H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD07H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'EESD09H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD09H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'EESD09H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD09H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'EESD09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD09H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'EESD10Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD10Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'EESD13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD13H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'EESD15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD15H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'EESD16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'EESD17Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD17Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'EESD18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD18H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'EESD19H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD19H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}]
	}, {
		'code': 'EESD20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science.html#EESD20H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'ENGA10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGA10H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGA11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGA11H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGB02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGB03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB03H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGB03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB03H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGB04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGB04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB05H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '10:30'
		}, {
			'day': 'TH',
			'start': '10:30'
		}, {
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}, {
			'day': 'TU',
			'start': '13:30'
		}, {
			'day': 'TH',
			'start': '13:30'
		}, {
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGB05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB05H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '10:30'
		}, {
			'day': 'TH',
			'start': '10:30'
		}, {
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}, {
			'day': 'TU',
			'start': '13:30'
		}, {
			'day': 'TH',
			'start': '13:30'
		}, {
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'ENGB07H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB07H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGB17H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB17H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:30'
		}, {
			'day': 'TH',
			'start': '12:30'
		}]
	}, {
		'code': 'ENGB19H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB19H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:30'
		}, {
			'day': 'TH',
			'start': '11:30'
		}]
	}, {
		'code': 'ENGB27H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB27H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'ENGB28H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB28H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'ENGB30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB30H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'ENGB31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB31H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'ENGB32H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB32H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'ENGB33H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB33H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'ENGB35H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB35H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGB38H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB38H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:30'
		}, {
			'day': 'TH',
			'start': '14:30'
		}]
	}, {
		'code': 'ENGB52H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB52H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'ENGB60H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB60H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'ENGB61H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB61H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'ENGB63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB63H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'ENGB70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGB76H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGB76H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:30'
		}, {
			'day': 'TH',
			'start': '10:30'
		}]
	}, {
		'code': 'ENGC04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGC05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC05H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ENGC07H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC07H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'ENGC09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC09H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'ENGC23H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC23H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'ENGC27H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC27H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'ENGC30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC30H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ENGC36H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC36H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'ENGC37H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC37H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'ENGC43H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC43H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:30'
		}, {
			'day': 'WE',
			'start': '11:30'
		}]
	}, {
		'code': 'ENGC44H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC44H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}]
	}, {
		'code': 'ENGC47H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC47H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGC50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC50H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'ENGC56H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC56H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'ENGC59H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC59H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'ENGC70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:30'
		}, {
			'day': 'TH',
			'start': '16:30'
		}]
	}, {
		'code': 'ENGC71H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC71H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:30'
		}, {
			'day': 'TH',
			'start': '15:30'
		}]
	}, {
		'code': 'ENGC76H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC76H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'ENGC80H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC80H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:30'
		}, {
			'day': 'TH',
			'start': '11:30'
		}]
	}, {
		'code': 'ENGC83H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC83H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'ENGC86H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC86H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGC87H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC87H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ENGC88H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC88H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'ENGC91H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGC91H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'ENGD13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD13H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ENGD14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD14H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'ENGD19H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD19H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'ENGD22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD22H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGD26Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD26Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ENGD27Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD27Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ENGD28Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD28Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ENGD43H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD43H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'ENGD53H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD53H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'ENGD54H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD54H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'ENGD58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD58H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'ENGD68H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD68H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGD80H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD80H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'ENGD91H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD91H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'ENGD93H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD93H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'ENGD95H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD95H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ENGD96H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD96H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'ENGD98Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/English.html#ENGD98Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'ESTB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#ESTB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'ESTC34H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#ESTC34H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'ESTC35H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#ESTC35H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'ESTC36H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#ESTC36H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'ESTD16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#ESTD16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'ESTD17Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#ESTD17Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'ESTD18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#ESTD18H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'FLDC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#FLDC01H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FLDC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#FLDC01H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FREA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREA01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'FREA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREA02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '16:00'
		}, {
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '19:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'FREA96H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREA96H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'FREA97H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREA97H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'FREB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}, {
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '16:00'
		}, {
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'FREB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '16:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '16:00'
		}]
	}, {
		'code': 'FREB08H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB08H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'FREB11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB11H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'FREB22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB22H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'FREB35H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB35H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'FREB37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB37H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'FREB44H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB44H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'FREB45H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB45H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'FREB46H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB46H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'FREB50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB50H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'FREB55H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB55H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'FREB70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREB70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'FREC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREC01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '16:00'
		}, {
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'FREC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREC02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '16:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'FREC11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREC11H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'FREC46H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREC46H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'FREC47H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREC47H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'FREC64H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FREC64H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'FRED01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '08:30'
		}, {
			'day': 'WE',
			'start': '08:30'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'FRED02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED03H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED03H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED05H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED05H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED06H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'FRED07H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED07H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FRED14H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED14H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'FRED90Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/French.html#FRED90Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'FSGA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#FSGA01H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': []
	}, {
		'code': 'FSGA01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#FSGA01H3',
		'breadth_req': 'Undefined!',
		'meeting_sections': []
	}, {
		'code': 'FSTB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/#FSTB01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'GASA01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASA01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'GASB05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASB05H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'GASB20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASB20H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'GASB33H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASB33H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'GASB53H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASB53H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'GASB57H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASB57H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'GASB58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASB58H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'GASB77H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASB77H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'GASC20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASC20H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'GASC33H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASC33H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'GASC40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASC40H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}]
	}, {
		'code': 'GASC41H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASC41H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'GASC59H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASC59H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'GASC74H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASC74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'GASD20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASD20H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'GASD58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Global_Asia_Studies.html#GASD58H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'GGRA02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'GGRA03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRA03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'GGRA30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRA30H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'GGRA35H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRA35H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'GGRB02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'GGRB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRB05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'GGRB13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRB13H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'GGRB21H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRB21H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'GGRB28H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRB28H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'GGRB30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRB30H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'GGRB32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRB32H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'GGRC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'GGRC10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'GGRC12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC12H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'GGRC13H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC13H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'GGRC24H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC24H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'GGRC25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC25H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'GGRC27H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC27H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'GGRC30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC30H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'GGRC31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC31H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'GGRC34H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC34H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'GGRC45H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC45H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'GGRC48H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC48H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'GGRC50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'GGRC56H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRC56H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'GGRD01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'GGRD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'GGRD09H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD09H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'GGRD10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'GGRD14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'GGRD25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD25H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'GGRD30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD30H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'GGRD31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD31H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'GGRD31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Geography.html#GGRD31H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'HISA05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISA05H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'HISA06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISA06H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'HISA07H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISA07H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'HISB03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB03H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'HISB03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB03H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'HISB10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB10H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'HISB11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB11H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'HISB14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB14H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'HISB30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB30H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '19:00'
		}, {
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'HISB31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB31H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'HISB41H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB41H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'HISB50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB50H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'HISB51H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB51H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'HISB53H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB53H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'HISB57H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB57H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'HISB58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB58H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'HISB62H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB62H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'HISB93H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISB93H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'HISC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISC01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'HISC03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISC03H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'HISC27H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISC27H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'HISC32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISC32H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'HISC45H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISC45H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'HISC52H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISC52H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'HISC59H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISC59H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'HISC97H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISC97H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'HISD01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'HISD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'HISD02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD02H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'HISD14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD14H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'HISD16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD16H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'HISD18H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD18H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'HISD25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD25H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'HISD36H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD36H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'HISD44H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD44H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'HISD47H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD47H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'HISD58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD58H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'HISD71H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/History.html#HISD71H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'HLTA02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'HLTA03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTA03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'HLTB11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB11H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'HLTB15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB15H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'HLTB16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB16H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'HLTB20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB20H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'HLTB22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB22H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'HLTB40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'HLTB41H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB41H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'HLTB42H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB42H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'HLTB50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTB50H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'HLTC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'HLTC04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'HLTC16H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC16H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'HLTC17H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC17H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'HLTC18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC18H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'HLTC21H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC21H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'HLTC22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'HLTC23H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC23H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'HLTC24H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC24H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'HLTC44H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC44H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'HLTC50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTC50H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'HLTD01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTD01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'HLTD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTD01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'HLTD02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTD02H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'HLTD06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTD06H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'HLTD21H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTD21H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'HLTD22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTD22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'HLTD23H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTD23H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'HLTD51H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Health_Studies.html#HLTD51H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'IDSA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'IDSA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'IDSB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'IDSB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSB02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'IDSB04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSB04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'IDSB06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSB06H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'IDSB10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSB10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'IDSC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'IDSC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'IDSC04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'IDSC07H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC07H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'IDSC08H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC08H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'IDSC10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'IDSC11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'IDSC12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC12H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'IDSC14H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'IDSC17H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC17H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'IDSC18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSC18H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'IDSD01Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD01Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'IDSD02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'IDSD06H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD06H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'IDSD10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'IDSD14H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IDSD14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IDSD15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD15H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IDSD15H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD15H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IDSD19H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Development_Studies.html#IDSD19H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'IMCB01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB03H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB04H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB04H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB05H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB06H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB06H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB06H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB07H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB07H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB08H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB08H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCB08H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCB08H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCC01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCC01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCC02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCC03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCC03H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'IMCC04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Applied_Microbiology_(formerly_Industrial_Microbiology).html#IMCC04H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ISTD01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Studies.html#ISTD01H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'ISTD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/International_Studies.html#ISTD01H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUA01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'JOUA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUA02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'JOUA06H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUA06H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'JOUB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'JOUB03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB03H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB05H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB10H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB11H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB14H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB14H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB17H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB17H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB18H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB18H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB20H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUB24H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB24H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}]
	}, {
		'code': 'JOUB39H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUB39H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'JOUC13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUC13H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUC16Y3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUC16Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUC17H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUC17H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUC25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUC25H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUC25H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUC25H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'JOUD10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Journalism.html#JOUD10H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'LGGA60H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#LGGA60H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'LGGA61H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#LGGA61H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'LGGA80H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#LGGA80H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}, {
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'LGGA81H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#LGGA81H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}, {
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'LGGB60H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#LGGB60H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}]
	}, {
		'code': 'LGGB61H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#LGGB61H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'LGGC64H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#LGGC64H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'LGGC66H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Languages.html#LGGC66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'LINA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINA01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'LINA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINA02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'LINB04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINB04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'LINB06H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINB06H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'LINB09H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINB09H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'LINB10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINB10H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'LINB29H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINB29H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'LINB60H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINB60H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'LINC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINC02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'LINC11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINC11H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'LINC28H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINC28H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'LINC47H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LINC47H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'LIND01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LIND01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'LIND01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LIND01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'LIND02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LIND02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'LIND02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LIND02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'LIND03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LIND03H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'LIND03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LIND03H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'LIND09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#LIND09H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'MATA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA02H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MATA23H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA23H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}, {
			'day': 'TU',
			'start': '08:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'MATA29H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA29H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '08:00'
		}, {
			'day': 'TH',
			'start': '08:00'
		}, {
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}, {
			'day': 'TU',
			'start': '16:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'MATA29H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA29H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '08:00'
		}, {
			'day': 'FR',
			'start': '08:00'
		}]
	}, {
		'code': 'MATA30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA30H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'MATA31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA31H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}, {
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'MATA31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA31H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MATA32H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA32H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}, {
			'day': 'MO',
			'start': '08:00'
		}, {
			'day': 'FR',
			'start': '08:00'
		}]
	}, {
		'code': 'MATA32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA32H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MATA33H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA33H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '08:00'
		}, {
			'day': 'FR',
			'start': '08:00'
		}, {
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'TU',
			'start': '17:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MATA35H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA35H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '08:00'
		}, {
			'day': 'TH',
			'start': '08:00'
		}]
	}, {
		'code': 'MATA36H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA36H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '08:00'
		}, {
			'day': 'TH',
			'start': '08:00'
		}]
	}, {
		'code': 'MATA37H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA37H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}, {
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '18:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'MATA67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATA67H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MATB24H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATB24H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'MO',
			'start': '19:00'
		}, {
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'MATB41H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATB41H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}, {
			'day': 'MO',
			'start': '08:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'MATB42H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATB42H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'MATB43H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATB43H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MATB44H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATB44H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'MATB61H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATB61H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'MATC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC01H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'MATC09H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC09H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'MATC15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC15H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'MATC16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC16H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MATC27H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC27H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MATC32H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC32H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MATC34H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC34H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MATC37H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC37H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'MATC44H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC44H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '16:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MATC46H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC46H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '16:00'
		}]
	}, {
		'code': 'MATC58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC58H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'MATC63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATC63H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'MATD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD01H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'MATD02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD02H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '16:00'
		}]
	}, {
		'code': 'MATD10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD10H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'MATD34H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD34H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MATD92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD92H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MATD92H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD92H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MATD94H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD94H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MATD94H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD94H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MATD94H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD94H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MATD95H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MATD95H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Mathematics.html#MATD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MDSA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSA01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MDSA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSA02H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MDSB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSB01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'MDSB02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSB02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MDSB05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSB05H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MDSB25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSB25H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MDSB61H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSB61H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MDSB62H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSB62H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'MDSB63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSB63H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MDSC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MDSC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'MDSC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'MDSC40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC40H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}]
	}, {
		'code': 'MDSC41H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC41H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'MDSC53H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC53H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MDSC61H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC61H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MDSC62H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC62H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MDSC63H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC63H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MDSC65H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC65H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MDSC71H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC71H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'MDSC85H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSC85H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'MDSD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSD01H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'MDSD02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSD02H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'MDSD02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Media_Studies.html#MDSD02H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGAB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'MGAB01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGAB02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGAB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '17:00'
		}, {
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'MGAB03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAB03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGAB03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAB03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MGAC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGAC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'MGAC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'MGAC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'MGAC03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'MGAC03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGAC10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'MGAC10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'MGAC50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '19:00'
		}]
	}, {
		'code': 'MGAC50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '19:00'
		}]
	}, {
		'code': 'MGAC70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC70H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGAC70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAC70H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGAD20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD20H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'MGAD40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'MGAD40H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MGAD45H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD45H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'MGAD45H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD45H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'MGAD50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'MGAD50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'MGAD65H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD65H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'MGAD65H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD65H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'MGAD70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGAD70H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'MGEA02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}, {
			'day': 'MO',
			'start': '15:30'
		}, {
			'day': 'WE',
			'start': '15:30'
		}, {
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGEA05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEA05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'MGEA06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEA06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}, {
			'day': 'MO',
			'start': '15:30'
		}, {
			'day': 'WE',
			'start': '15:30'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGEB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'MGEB02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'FR',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}, {
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'MGEB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'MGEB05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEB06H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEB06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MGEB11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB11H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '19:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGEB11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB11H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'MGEB12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB12H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'MO',
			'start': '12:00'
		}]
	}, {
		'code': 'MGEB12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB12H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '19:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGEB32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEB32H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'MGEC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MGEC06H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'MGEC06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGEC11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC11H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC11H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC31H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGEC32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC32H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'MGEC34H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC34H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'MGEC34H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC34H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'MGEC37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC37H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '16:00'
		}]
	}, {
		'code': 'MGEC38H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC38H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'MGEC40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC40H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGEC41H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC41H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC51H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC51H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGEC54H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC54H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC58H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC58H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGEC58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC58H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGEC61H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC61H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGEC61H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC61H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC62H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC62H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC62H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC62H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MGEC71H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC71H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC71H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC71H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC72H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC72H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'MGEC81H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC81H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'MGEC81H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC81H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MGEC92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGEC92H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'MGED02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'MGED06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'MGED11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED11H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGED43H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED43H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MGED50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'MGED63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED63H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'MGED90H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED90H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGED90H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED90H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGED91H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED91H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGED91H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Economics_for_Management_Studies.html#MGED91H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGFB10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFB10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGFB10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFB10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGFC10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFC10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MGFC10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFC10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MGFC20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFC20H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MGFC30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFC30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGFC30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFC30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGFC50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFC50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'MGFC60H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFC60H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MGFD10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MGFD10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGFD15H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD15H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}]
	}, {
		'code': 'MGFD30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MGFD30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MGFD40H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'MGFD50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGFD60H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD60H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGFD70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGFD70H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'MGHB02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGHB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'MGHB12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHB12H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MGHB12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHB12H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'MGHC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MGHC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGHC53H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHC53H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'MGHD14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHD14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'MGHD24H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHD24H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MGHD25H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHD25H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'MGHD26H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHD26H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGHD27H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHD27H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGHD28H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGHD28H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGIA01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGIA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'MGIB01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGIB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'MGIB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGIB02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MGIB12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGIB12H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'MGIC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGIC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'MGIC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGIC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MGID40H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGID40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'MGID79H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGID79H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'MGMA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MGMA01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGMB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGMB01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'MGMC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'MGMC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGMC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'MGMC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'MGMC11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGMC11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'MGMC12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC12H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '19:00'
		}]
	}, {
		'code': 'MGMC13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC13H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGMC14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMC14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGMD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMD01H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MGMD02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMD02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGMD10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMD10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'MGMD11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGMD11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'MGOC10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGOC10H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'MGOC10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGOC10H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'MGOC20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGOC20H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGOC20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGOC20H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGSB22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSB22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'MGSC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'MGSC03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC03H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'MGSC05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'MGSC12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC12H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MGSC14H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC14H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'MGSC14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC14H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'MGSC20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC20H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'MGSC26H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC26H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'MGSC30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '19:00'
		}]
	}, {
		'code': 'MGSC30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGSC32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSC32H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'MGSD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSD01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'MGSD24H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGSD24H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'MGTA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'MGTA01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'MGTA02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'MGTA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'MGTA05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'MGTA05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'MGTA35H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA35H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}, {
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'MGTA35H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA35H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'MGTA36H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA36H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'MGTA36H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTA36H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'MGTD80H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTD80H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGTD80H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTD80H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'MGTD82Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Management.html#MGTD82Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEA02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEA02H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEA03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEA03H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEA04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEA04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEB05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEB05H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEB06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEB06H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEB08H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEB08H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEB09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEB09H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMEB10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMEB10H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NMED01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMED01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'NMED20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/New_Media_Studies.html#NMED20H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'NROB60H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROB60H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'NROC34H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROC34H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'NROC61H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROC61H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'NROC63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROC63H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'NROC64H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROC64H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'NROC69H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROC69H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'NROC90H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROC90H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NROC93H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROC93H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'NROD08H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROD08H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'NROD66H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROD66H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'NROD67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROD67H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'NROD98Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Neuroscience.html#NROD98Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'PHLA10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLA10H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLA11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLA11H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLB07H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB07H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLB09H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB09H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'PHLB09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB09H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '19:00'
		}]
	}, {
		'code': 'PHLB12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB12H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'PHLB17H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB17H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'PHLB20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB20H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'PHLB31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB31H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'PHLB35H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB35H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLB50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB50H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'PHLB55H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB55H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '16:00'
		}, {
			'day': 'WE',
			'start': '16:00'
		}]
	}, {
		'code': 'PHLB60H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB60H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:30'
		}, {
			'day': 'TH',
			'start': '14:30'
		}]
	}, {
		'code': 'PHLB81H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB81H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '19:00'
		}]
	}, {
		'code': 'PHLB99H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLB99H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'PHLC05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC05H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:30'
		}]
	}, {
		'code': 'PHLC09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC09H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLC22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC22H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'PHLC32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC32H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'PHLC35H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC35H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'PHLC60H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC60H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '16:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'PHLC89H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC89H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLC93H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC93H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'PHLC95H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC95H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'PHLC99H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLC99H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLD05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD05H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLD43H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD43H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'PHLD78H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD78H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'PHLD79H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD79H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'PHLD90H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD90H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD90H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD90H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD91H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD91H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD91H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD91H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD92H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD92H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD92H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD93H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD93H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD93H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD93H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD94H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD94H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD94H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD94H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD95H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD95H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD96H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD96H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD96H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD96H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD97H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD97H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD97H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD97H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD98H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD98H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD98H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD98H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHLD99H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Philosophy.html#PHLD99H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHYA10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYA10H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'PHYA10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYA10H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'PHYA11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYA11H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}, {
			'day': 'FR',
			'start': '14:00'
		}]
	}, {
		'code': 'PHYA21H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYA21H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}, {
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'PHYA22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYA22H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'PHYB10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYB10H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'PHYB21H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYB21H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'PHYB52H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYB52H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'PHYB54H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYB54H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'PHYB56H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYB56H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'PHYC11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYC11H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'PHYC50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYC50H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'PHYC54H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYC54H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'PHYC56H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYC56H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'PHYD01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYD01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHYD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYD01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHYD37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYD37H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'PHYD38H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYD38H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'PHYD72H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYD72H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PHYD72H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physics_and_Astrophysics.html#PHYD72H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PLIC24H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLIC24H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'PLIC54H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLIC54H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'PLIC54H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLIC54H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PLIC55H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLIC55H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'PLID01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PLID01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PLID02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PLID02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PLID03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID03H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PLID03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID03H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PLID34H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID34H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '16:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'PLID44H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID44H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'PLID50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'PLID56H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Linguistics.html#PLID56H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'PMDB22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDB22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDB25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDB25H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDB30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDB30H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDB32Y3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDB32Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDB33H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDB33H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDB36H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDB36H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDB41H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDB41H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDC40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDC40H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDC43H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDC43H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDC54Y3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDC54Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PMDC56H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Paramedicine.html#PMDC56H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'POLA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'POLA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}, {
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'POLB30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLB30H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'POLB50Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLB50Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'POLB72H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLB72H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'POLB80H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLB80H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'POLB81H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLB81H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'POLB90H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLB90H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'POLB91H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLB91H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'POLB92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLB92H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'POLC09H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC09H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'POLC16H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC16H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'POLC21H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC21H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'POLC32H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC32H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'POLC36H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC36H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'POLC37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC37H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'POLC38H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC38H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'POLC40H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'POLC53H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC53H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'POLC54H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC54H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'POLC58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC58H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'POLC68H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC68H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'POLC71H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC71H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'POLC73H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC73H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'POLC78H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC78H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'POLC87H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC87H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'POLC88H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC88H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'POLC90H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC90H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'POLC92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC92H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'POLC94H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC94H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'POLC98H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC98H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'POLC99H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLC99H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'POLD41H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD41H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'POLD45H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD45H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'POLD50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'POLD51H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD51H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'POLD52H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD52H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'POLD53H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD53H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'POLD59H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD59H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'POLD67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD67H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'POLD70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD70H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'POLD87H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD87H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'POLD90H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD90H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'POLD92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD92H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'POLD94H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD94H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'POLD95H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'POLD95H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD95H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'POLD98H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD98H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'POLD98H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Political_Science.html#POLD98H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PPGC66H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Public_Policy.html#PPGC66H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'PPGC67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Public_Policy.html#PPGC67H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'PPGD64H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Public_Policy.html#PPGD64H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'PSCB57H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physical_Sciences.html#PSCB57H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'PSCD02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Physical_Sciences.html#PSCD02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'PSYA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYA01H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'PSYB03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB03H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'PSYB04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'PSYB07H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB07H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'PSYB10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYB20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB20H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'PSYB30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'PSYB32H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB32H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '19:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYB45H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB45H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'PSYB51H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB51H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYB57H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB57H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'PSYB64H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB64H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'PSYB65H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYB65H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC02H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'PSYC04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC04H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYC05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC05H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'PSYC08H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC08H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'PSYC09H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC09H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'PSYC11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYC11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'PSYC12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC12H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYC13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC13H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYC14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'PSYC18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC18H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYC21H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC21H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'PSYC23H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC23H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'PSYC26H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC26H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'PSYC31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC31H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'PSYC32H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC32H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'PSYC33H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC33H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'PSYC35H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC35H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYC36H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC36H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'PSYC37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC37H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYC39H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC39H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYC52H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC52H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'PSYC55H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC55H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYC57H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC57H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYC58H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC58H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'PSYC62H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC62H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'PSYC85H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC85H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYC90H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC90H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYC90H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC90H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYC93H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC93H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYC93H3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYC93H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'PSYD11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'PSYD14H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD14H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYD15H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD15H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYD16H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD16H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYD22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'PSYD22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '19:00'
		}]
	}, {
		'code': 'PSYD31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD31H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'PSYD33H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD33H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'PSYD33H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD33H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYD35H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD35H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'PSYD37H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD37H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'PSYD50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD50H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'PSYD50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD50H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYD51H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD51H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'PSYD66H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD66H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'PSYD98Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Psychology.html#PSYD98Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'RLGA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Religion.html#RLGA01H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'RLGA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Religion.html#RLGA02H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'SOCA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'SOCA02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCA02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}, {
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'SOCB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB05H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'SOCB22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB22H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCB26H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB26H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCB30H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCB42H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB42H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCB43H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB43H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCB47H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB47H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCB49H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB49H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCB50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB50H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCB54H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB54H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCB58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB58H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCB59H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB59H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'SOCB60H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCB60H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'SOCC04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC04H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCC11H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCC15H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC15H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'SOCC23H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC23H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCC25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC25H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCC26H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC26H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCC29H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC29H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCC30H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC30H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'SOCC31H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC31H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCC34H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC34H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCC37H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC37H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'SOCC38H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC38H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'SOCC40H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'SOCC44H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC44H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}]
	}, {
		'code': 'SOCC45H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC45H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'SOCC47H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC47H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCC59H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCC59H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'SOCD01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'SOCD05H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'SOCD15H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD15H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'SOCD20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD20H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'SOCD21H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD21H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'SOCD25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD25H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'SOCD40H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'SOCD40H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD40H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'SOCD41H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD41H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'SOCD44H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD44H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'SOCD51H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Sociology.html#SOCD51H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'STAB22H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB22H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'FR',
			'start': '12:00'
		}, {
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'STAB22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB22H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'FR',
			'start': '10:00'
		}, {
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'STAB23H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB23H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '08:00'
		}]
	}, {
		'code': 'STAB23H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB23H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '08:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'STAB27H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB27H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'FR',
			'start': '11:00'
		}]
	}, {
		'code': 'STAB41H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB41H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'STAB52H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB52H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '18:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}, {
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'STAB57H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB57H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'STAB57H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAB57H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}, {
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'STAC32H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC32H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'STAC50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC50H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'STAC51H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC51H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}, {
			'day': 'TH',
			'start': '18:00'
		}]
	}, {
		'code': 'STAC58H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC58H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'STAC62H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC62H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'STAC63H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC63H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}, {
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'STAC67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC67H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}, {
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'STAC67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC67H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'STAC70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAC70H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'STAD29H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD29H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'STAD37H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD37H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'FR',
			'start': '09:00'
		}]
	}, {
		'code': 'STAD57H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD57H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}, {
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'STAD68H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD68H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}, {
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'STAD70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD70H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '16:00'
		}]
	}, {
		'code': 'STAD92H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD92H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'STAD92H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD92H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'STAD94H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD94H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'STAD94H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD94H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'STAD95H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD95H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'STAD95H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Statistics.html#STAD95H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'STEB07H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Environmental_Science_and_Technology.html#STEB07H3',
		'breadth_req': 'Natural Sciences',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPAA06H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAA06H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'VPAA10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAA10H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'VPAA12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAA12H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'VPAB13H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAB13H3',
		'breadth_req': 'Quantitative Reasoning',
		'meeting_sections': [{
			'day': 'FR',
			'start': '12:00'
		}]
	}, {
		'code': 'VPAB16H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAB16H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'VPAB17H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAB17H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'VPAC13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAC13H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'VPAC15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAC15H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'VPAC18H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAC18H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'VPAD12H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAD12H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'VPAD14H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAD14H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPAD14H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Arts_Management.html#VPAD14H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDA10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDA10H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}]
	}, {
		'code': 'VPDA11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDA11H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'VPDB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDB01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'VPDB02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDB02H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'VPDB03H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDB03H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'VPDB04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDB04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '19:00'
		}]
	}, {
		'code': 'VPDB10H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDB10H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'VPDB12H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDB12H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '12:00'
		}, {
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'VPDB15H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDB15H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'VPDC01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDC01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}, {
			'day': 'TH',
			'start': '16:00'
		}]
	}, {
		'code': 'VPDC03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDC03H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}, {
			'day': 'TH',
			'start': '12:00'
		}]
	}, {
		'code': 'VPDC20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDC20H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'VPDD01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD01H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '16:00'
		}, {
			'day': 'TH',
			'start': '16:00'
		}]
	}, {
		'code': 'VPDD20H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD20H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDD20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD20H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDD21H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD21H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDD21H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD21H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDD24H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD24H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDD24H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD24H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDD25H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD25H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDD25H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD25H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPDD50H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Theatre_and_Performance_Studies.html#VPDD50H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'VPHA46H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHA46H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'VPHB39H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHB39H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'VPHB50H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHB50H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '12:00'
		}]
	}, {
		'code': 'VPHB53H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHB53H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '15:00'
		}]
	}, {
		'code': 'VPHB58H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHB58H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'VPHB63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHB63H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'VPHB64H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHB64H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'VPHB77H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHB77H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'VPHB78H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHB78H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPHC42H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHC42H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'VPHC52H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHC52H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'VPHC54H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHC54H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'VPHC72H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHC72H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '10:00'
		}]
	}, {
		'code': 'VPHC74H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHC74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'VPHD42Y3Y',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Art_History_and_Visual_Culture.html#VPHD42Y3',
		'breadth_req': 'Undefined!',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPMA66H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMA66H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMA67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA67H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMA67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA67H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMA68H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA68H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA68H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA68H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA69H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA69H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA69H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA69H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA71H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA71H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA71H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA71H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA73H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA73H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA74H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA74H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMA93H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA93H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'MO',
			'start': '09:00'
		}, {
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPMA95H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMA95H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '15:00'
		}]
	}, {
		'code': 'VPMB01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'VPMB66H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMB66H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMB67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB67H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMB67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB67H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMB68H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB68H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB68H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB68H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB69H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB69H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB69H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB69H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB71H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB71H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB71H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB71H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB73H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB73H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB74H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB74H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMB82H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB82H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '09:00'
		}]
	}, {
		'code': 'VPMB84H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB84H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMB88H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB88H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMB90H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB90H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMB91H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMB91H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'VPMC01H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'WE',
			'start': '12:00'
		}]
	}, {
		'code': 'VPMC66H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMC66H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMC67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC67H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMC67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC67H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'FR',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMC68H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC68H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC68H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC68H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC69H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC69H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC69H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC69H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC71H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC71H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC71H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC71H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC73H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC73H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC74H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC74H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '17:00'
		}]
	}, {
		'code': 'VPMC85H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC85H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'VPMC89H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC89H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMC90H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC90H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'VPMC91H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC91H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '11:00'
		}]
	}, {
		'code': 'VPMC93H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC93H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '13:00'
		}]
	}, {
		'code': 'VPMC94H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMC94H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '11:00'
		}]
	}, {
		'code': 'VPMD80H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMD80H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPMD80H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMD80H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPMD81H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMD81H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPMD81H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMD81H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPMD90H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Music_and_Culture.html#VPMD90H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'VPSA61H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA61H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSA62H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA62H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'WE',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSA62H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA62H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}, {
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSA63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA63H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '09:00'
		}]
	}, {
		'code': 'VPSA70H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}, {
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSA70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSA71H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA71H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSA73H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSA74H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}, {
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSA74H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSA74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSB62H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB62H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSB63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB63H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSB67H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB67H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSB67H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB67H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSB72H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB72H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSB73H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'VPSB74H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSB74H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB74H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSB75H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB75H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSB76H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB76H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSB80H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB80H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSB85H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB85H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSB89H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSB89H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSC04H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC04H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSC54H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC54H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSC55H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC55H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSC56H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC56H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSC59H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC59H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSC66H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSC66H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC66H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TH',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSC69H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC69H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSC70H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC70H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'WE',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSC73H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC73H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'MO',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSC89H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSC89H3',
		'breadth_req': 'Arts, Literature, and Language',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'VPSD56H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSD56H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSD57H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSD57H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSD58H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSD58H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'VPSD63H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSD63H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'VPSD63H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Studio.html#VPSD63H3',
		'breadth_req': 'N/A',
		'meeting_sections': [{
			'day': 'None',
			'start': 'None'
		}]
	}, {
		'code': 'WSTA01H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTA01H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '17:00'
		}]
	}, {
		'code': 'WSTA03H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTA03H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'WSTB05H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTB05H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '09:00'
		}]
	}, {
		'code': 'WSTB10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTB10H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '13:00'
		}]
	}, {
		'code': 'WSTB11H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTB11H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'MO',
			'start': '13:00'
		}]
	}, {
		'code': 'WSTB13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTB13H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '13:00'
		}]
	}, {
		'code': 'WSTC02H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'WSTC02H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTC02H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'WSTC13H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTC13H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '15:00'
		}]
	}, {
		'code': 'WSTC20H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTC20H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}, {
		'code': 'WSTC22H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTC22H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '11:00'
		}]
	}, {
		'code': 'WSTC28H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTC28H3',
		'breadth_req': 'Social and Behavioural Sciences',
		'meeting_sections': [{
			'day': 'TH',
			'start': '15:00'
		}]
	}, {
		'code': 'WSTC31H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTC31H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'WE',
			'start': '14:00'
		}]
	}, {
		'code': 'WSTD04H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTD04H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '14:00'
		}]
	}, {
		'code': 'WSTD10H3F',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTD10H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TU',
			'start': '10:00'
		}]
	}, {
		'code': 'WSTD16H3S',
		'link': 'http://www.utsc.utoronto.ca/~registrar/calendars/calendar/Womens_and_Gender_Studies.html#WSTD16H3',
		'breadth_req': 'History, Philosophy, and Cultural Studies',
		'meeting_sections': [{
			'day': 'TH',
			'start': '11:00'
		}]
	}]
}

//-------------------------------------------------------------------------------------------------------------------------
$(document).ready(function(){


	$( "#time" )
	.change(function () {

		$( "#time option:selected" ).each(function() {
                        val = $(this).val();
			str = dictSearch(day,val,sem,year,req) ;
			});
			$( "pre#output" ).html( str );
			})
			.change();

	$( "#breadth" )
	.change(function () {

		$( "#breadth option:selected" ).each(function() {
                        req = $(this).val();
			str = dictSearch(day,val,sem,year,req) ;
			});
			$( "pre#output" ).html( str );
			})
			.change();

	$(function () {
    $("#tip").popover({
        //title: 'Enter Mobile Number',
        content: "Duplicate course listings means multiple sections for queried times.",
        trigger: 'hover',
        delay: {show: 0, hide: 0}
    });
});
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

function make_course_link(course){
    return '<a href="' + course.link + '" target="_blank">' + course.code + '</a>';
}

// Convert array into array of arrays with each inner array containing five items.
function fives(lst) {
	output = [];
	for (var i = 0; i<lst.length; i++){
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
    var myArray = course_list.UTSC_COURSES;
	for (var i = 0; i < myArray.length; i++){
	    course = myArray[i];
	    //Make sure the semester matches
	    if (course.code.slice(-1) == sem){
	        //Make sure the year matches
		    if (course.code.charAt(3) == year_index[year] || year == '0') {
		        //Make sure the breadth matches
			    if (course.breadth_req == breadth_index[breadth] || breadth === '0') {
			        //Make sure day matches
				    for(var j = 0; j < course.meeting_sections.length; j++){
				        if (course.meeting_sections[j].day == day_index[day]){
						    //Finally, make sure start time matches
			                if (time == '*' || course.meeting_sections[j].start == time_index[time]){
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

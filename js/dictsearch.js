// JavaScript Document
var day;
var str = "";
var val;
var sem;
var year = '0';
var req = '0';

var year_index = {'1':'A', '2':'B', '3':'C', '4':'D'};
var breadth_index = {'1':'Creative and Cultural Representations', '2':'Thought, Belief and Behaviour', '3':'Society and its Institutions (3)', '4':'Living Things and Their Environment', '5':'The Physical and Mathematical Universes'};
var day_index = {'M':'MO', 'T':'TU', 'W':'WE', 'R':'TH', 'F':'FR'};
var time_index = {'8':'08:00', '9':'09:00', '10':'10:00', '11':'11:00', '12':'12:00', '1':'13:00', '2':'14:00', '3':'15:00', '4':'16:00', '5':'17:00', '6':'18:00', '7':'19:00'};


//-------------------------------------------------------------------------------------------------------------------------
var UTSG_COURSES = [
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC137H1",
    "code": "VIC137H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW101Y1",
    "code": "WDW101Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL100H1",
    "code": "FSL100H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC184H1",
    "code": "VIC184H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC165H1",
    "code": "VIC165H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG150Y1",
    "code": "ENG150Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL101Y1",
    "code": "PHL101Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC166H1",
    "code": "VIC166H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC150Y1",
    "code": "VIC150Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC104H1",
    "code": "CSC104H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC165H1",
    "code": "CSC165H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA100H1",
    "code": "SLA100H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS105H1",
    "code": "ESS105H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC162H1",
    "code": "VIC162H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC185H1",
    "code": "VIC185H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW102H1",
    "code": "NEW102H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC102H1",
    "code": "SOC102H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC171Y1",
    "code": "VIC171Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sii.htm#SII199H1",
    "code": "SII199H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW103Y1",
    "code": "WDW103Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI103H1",
    "code": "INI103H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM136H1",
    "code": "CHM136H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TU"
      },
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW154H1",
    "code": "WDW154H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL100Y1",
    "code": "PHL100Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM100H1",
    "code": "RSM100H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS100Y1",
    "code": "EAS100Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ifp.htm#IFP102Y1",
    "code": "IFP102Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC141Y1",
    "code": "SMC141Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY131H1",
    "code": "PHY131H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM135H1",
    "code": "CHM135H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mhb.htm#MHB156H1",
    "code": "MHB156H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC172Y1",
    "code": "VIC172Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pmu.htm#PMU199H1",
    "code": "PMU199H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC134H1",
    "code": "VIC134H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY100H1",
    "code": "PSY100H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgr.htm#MGR100H1",
    "code": "MGR100H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM151Y1",
    "code": "CHM151Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC151Y1",
    "code": "VIC151Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT101H1",
    "code": "LAT101H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "08:30",
        "day": "WE"
      },
      {
        "start": "08:30",
        "day": "FR"
      },
      {
        "start": "08:30",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC188H1",
    "code": "VIC188H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgr.htm#MGR101H1",
    "code": "MGR101H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA104H1",
    "code": "SLA104H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV100H1",
    "code": "ENV100H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abp.htm#ABP100Y1",
    "code": "ABP100Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI101Y1",
    "code": "UNI101Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL100H1",
    "code": "FSL100H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML156H1",
    "code": "NML156H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC181H1",
    "code": "VIC181H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hun.htm#HUN100Y1",
    "code": "HUN100Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lte.htm#LTE199Y1",
    "code": "LTE199Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS121H1",
    "code": "EAS121H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_tbb.htm#TBB199Y1",
    "code": "TBB199Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA101H1",
    "code": "SLA101H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL121Y1",
    "code": "FSL121Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER150H1",
    "code": "GER150H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS103H1",
    "code": "EAS103H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC106H1",
    "code": "VIC106H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN110H1",
    "code": "FIN110H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM136H1",
    "code": "CHM136H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA121H1",
    "code": "SLA121H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT100Y1",
    "code": "PRT100Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC170Y1",
    "code": "VIC170Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC108H1",
    "code": "CSC108H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM135H1",
    "code": "CHM135H1S",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_tbb.htm#TBB199H1",
    "code": "TBB199H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI102H1",
    "code": "INI102H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA107Y1",
    "code": "SLA107Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML155H1",
    "code": "NML155H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW104Y1",
    "code": "WDW104Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT120Y1",
    "code": "PRT120Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA100Y1",
    "code": "ITA100Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER102Y1",
    "code": "GER102Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN105Y1",
    "code": "CIN105Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW101Y1",
    "code": "WDW101Y1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC167H1",
    "code": "VIC167H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lte.htm#LTE199H1",
    "code": "LTE199H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgt.htm#MGT100H1",
    "code": "MGT100H1F",
    "meeting_sections": [
      {
        "start": "08:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO130H1",
    "code": "BIO130H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC169H1",
    "code": "VIC169H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC148H1",
    "code": "CSC148H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY152H1",
    "code": "PHY152H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR107H1",
    "code": "GGR107H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW101H1",
    "code": "NEW101H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML110Y1",
    "code": "NML110Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI101H1",
    "code": "INI101H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC101H1",
    "code": "NMC101H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO120H1",
    "code": "BIO120H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT135H1",
    "code": "MAT135H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS101Y1",
    "code": "EAS101Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA160H1",
    "code": "CLA160H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW120Y1",
    "code": "NEW120Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC102H1",
    "code": "NMC102H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY100H1",
    "code": "PSY100H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ifp.htm#IFP100Y1",
    "code": "IFP100Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mus.htm#MUS120Y1",
    "code": "MUS120Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN190Y1",
    "code": "TRN190Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG101H1",
    "code": "RLG101H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC136H1",
    "code": "VIC136H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC106H1",
    "code": "VIC106H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN135Y1",
    "code": "TRN135Y1Y",
    "meeting_sections": [
      {
        "start": "15:30",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC164H1",
    "code": "VIC164H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT138H1",
    "code": "MAT138H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW114H1",
    "code": "NEW114H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI100H1",
    "code": "INI100H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC121H1",
    "code": "CSC121H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC101H1",
    "code": "VIC101H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC103H1",
    "code": "NMC103H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC136H1",
    "code": "VIC136H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT138H1",
    "code": "MAT138H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC109H1",
    "code": "VIC109H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS109Y1",
    "code": "HIS109Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT137Y1",
    "code": "MAT137Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR101H1",
    "code": "GGR101H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC163H1",
    "code": "VIC163H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT136H1",
    "code": "MAT136H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT100Y1",
    "code": "ANT100Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phs.htm#PHS100H1",
    "code": "PHS100H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL102H1",
    "code": "FSL102H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS160Y1",
    "code": "WGS160Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC110H1",
    "code": "VIC110H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG100Y1",
    "code": "RLG100Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC163H1",
    "code": "VIC163H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA105Y1",
    "code": "SLA105Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST101H1",
    "code": "AST101H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM101Y1",
    "code": "DRM101Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN171Y1",
    "code": "TRN171Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW102Y1",
    "code": "WDW102Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO105Y1",
    "code": "ECO105Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "08:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG100H1",
    "code": "ENG100H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ccr.htm#CCR199Y1",
    "code": "CCR199Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG100H1",
    "code": "ENG100H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mun.htm#MUN101H1",
    "code": "MUN101H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW111H1",
    "code": "NEW111H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC120H1",
    "code": "CSC120H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA160H1",
    "code": "CLA160H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT136H1",
    "code": "MAT136H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ccr.htm#CCR199H1",
    "code": "CCR199H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sii.htm#SII199Y1",
    "code": "SII199Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN100H1",
    "code": "FIN100H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC183H1",
    "code": "VIC183H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC101Y1",
    "code": "SOC101Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM100Y1",
    "code": "DRM100Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH101H1",
    "code": "FAH101H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI102Y1",
    "code": "UNI102Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG140Y1",
    "code": "ENG140Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_est.htm#EST100H1",
    "code": "EST100H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN150Y1",
    "code": "TRN150Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_xbc.htm#XBC199Y1",
    "code": "XBC199Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY100H1",
    "code": "PHY100H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN160Y1",
    "code": "TRN160Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST121H1",
    "code": "AST121H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS100H1",
    "code": "HPS100H1F",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL102H1",
    "code": "PCL102H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI102H1",
    "code": "INI102H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jeg.htm#JEG100H1",
    "code": "JEG100H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW150Y1",
    "code": "NEW150Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR112H1",
    "code": "GGR112H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL101Y1",
    "code": "POL101Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sas.htm#SAS114H1",
    "code": "SAS114H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC119H1",
    "code": "VIC119H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO100Y1",
    "code": "ECO100Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS100H1",
    "code": "HPS100H1S",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW152H1",
    "code": "WDW152H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pmu.htm#PMU199H1",
    "code": "PMU199H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC190Y1",
    "code": "VIC190Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC176Y1",
    "code": "SMC176Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW103H1",
    "code": "NEW103H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC135H1",
    "code": "VIC135H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC168H1",
    "code": "VIC168H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR124H1",
    "code": "GGR124H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lte.htm#LTE199H1",
    "code": "LTE199H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT135H1",
    "code": "MAT135H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY132H1",
    "code": "PHY132H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC104H1",
    "code": "CSC104H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT133Y1",
    "code": "MAT133Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS104H1",
    "code": "ESS104H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC185H1",
    "code": "VIC185H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW112H1",
    "code": "NEW112H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC162H1",
    "code": "VIC162H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN161Y1",
    "code": "TRN161Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM100H1",
    "code": "RSM100H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC112Y1",
    "code": "VIC112Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC191Y1",
    "code": "VIC191Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW113H1",
    "code": "NEW113H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC108H1",
    "code": "CSC108H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS103Y1",
    "code": "HIS103Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sii.htm#SII199H1",
    "code": "SII199H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY151H1",
    "code": "PHY151H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN125Y1",
    "code": "TRN125Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC164H1",
    "code": "VIC164H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY131H1",
    "code": "PHY131H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG101H1",
    "code": "RLG101H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mun.htm#MUN102H1",
    "code": "MUN102H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC102H1",
    "code": "VIC102H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN102H1",
    "code": "LIN102H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fcs.htm#FCS195H1",
    "code": "FCS195H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mhb.htm#MHB155H1",
    "code": "MHB155H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW151H1",
    "code": "WDW151H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mun.htm#MUN105Y1",
    "code": "MUN105Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK101H1",
    "code": "GRK101H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ccr.htm#CCR199H1",
    "code": "CCR199H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER101H1",
    "code": "GER101H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS106Y1",
    "code": "HIS106Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI104Y1",
    "code": "UNI104Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL102H1",
    "code": "FSL102H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS120H1",
    "code": "HPS120H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS101Y1",
    "code": "HIS101Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW153H1",
    "code": "WDW153H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC184H1",
    "code": "VIC184H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC187H1",
    "code": "VIC187H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_tbb.htm#TBB199H1",
    "code": "TBB199H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR124H1",
    "code": "GGR124H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC102H1",
    "code": "SOC102H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jmb.htm#JMB170Y1",
    "code": "JMB170Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN151Y1",
    "code": "TRN151Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN101H1",
    "code": "LIN101H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS110Y1",
    "code": "EAS110Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC188Y1",
    "code": "SMC188Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA130H1",
    "code": "STA130H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN170Y1",
    "code": "TRN170Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS105H1",
    "code": "EAS105H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA100Y1",
    "code": "SPA100Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL190H1",
    "code": "PSL190H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT102H1",
    "code": "LAT102H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "08:30",
        "day": "MO"
      },
      {
        "start": "08:30",
        "day": "WE"
      },
      {
        "start": "08:30",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC141Y1",
    "code": "VIC141Y1Y",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW102Y1",
    "code": "WDW102Y1S",
    "meeting_sections": [
      {
        "start": "18:30",
        "day": "TH"
      },
      {
        "start": "18:30",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA106Y1",
    "code": "SLA106Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA108Y1",
    "code": "SLA108Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW103Y1",
    "code": "WDW103Y1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mus.htm#MUS110H1",
    "code": "MUS110H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS120Y1",
    "code": "EAS120Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ifp.htm#IFP101Y1",
    "code": "IFP101Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI103Y1",
    "code": "UNI103Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC148H1",
    "code": "CSC148H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK102H1",
    "code": "GRK102H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW104H1",
    "code": "NEW104H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC186Y1",
    "code": "VIC186Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC183H1",
    "code": "VIC183H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH102H1",
    "code": "FAH102H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC165H1",
    "code": "CSC165H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC103Y1",
    "code": "SMC103Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pmu.htm#PMU199Y1",
    "code": "PMU199Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC165H1",
    "code": "VIC165H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC135H1",
    "code": "VIC135H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER100Y1",
    "code": "GER100Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC181H1",
    "code": "VIC181H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC104H1",
    "code": "NMC104H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC173Y1",
    "code": "VIC173Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC103H1",
    "code": "SOC103H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT157Y1",
    "code": "MAT157Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_est.htm#EST101H1",
    "code": "EST101H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM219H1",
    "code": "RSM219H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY290H1",
    "code": "PSY290H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC207H1",
    "code": "SOC207H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG235H1",
    "code": "RLG235H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR205H1",
    "code": "GGR205H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI203Y1",
    "code": "INI203Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT224H1",
    "code": "MAT224H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER200Y1",
    "code": "GER200Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR270H1",
    "code": "GGR270H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC205H1",
    "code": "SOC205H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcj.htm#PCJ260Y1",
    "code": "PCJ260Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR203H1",
    "code": "GGR203H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS201H1",
    "code": "CAS201H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY202H1",
    "code": "PSY202H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS204H1",
    "code": "HPS204H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY250H1",
    "code": "PHY250H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA255H1",
    "code": "STA255H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW250Y1",
    "code": "NEW250Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA220H1",
    "code": "STA220H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK201H1",
    "code": "GRK201H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC230H1",
    "code": "PHC230H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER205H1",
    "code": "GER205H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY260H1",
    "code": "PSY260H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO200Y1",
    "code": "ECO200Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL200Y1",
    "code": "PHL200Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS251H1",
    "code": "EAS251H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV281H1",
    "code": "ENV281H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA206H1",
    "code": "SLA206H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC202Y1",
    "code": "VIC202Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC229H1",
    "code": "SMC229H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT258H1",
    "code": "PRT258H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN212H1",
    "code": "CIN212H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH242Y1",
    "code": "BCH242Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4), The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG213H1",
    "code": "ENG213H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS202H1",
    "code": "CAS202H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS256H1",
    "code": "SDS256H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC241H1",
    "code": "SMC241H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA201H1",
    "code": "STA201H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mst.htm#MST200Y1",
    "code": "MST200Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN299Y1",
    "code": "LIN299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS221H1",
    "code": "EAS221H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS241H1",
    "code": "EAS241H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC299Y1",
    "code": "CSC299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT230H1",
    "code": "ACT230H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC260H1",
    "code": "SOC260H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY280H1",
    "code": "PSY280H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG273Y1",
    "code": "ENG273Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT202H1",
    "code": "LAT202H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS250H1",
    "code": "ABS250H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB299Y1",
    "code": "EEB299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY299Y1",
    "code": "PSY299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST201H1",
    "code": "AST201H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN200H1",
    "code": "LIN200H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL201Y1",
    "code": "PSL201Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT237Y1",
    "code": "MAT237Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM230Y1",
    "code": "DRM230Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY220H1",
    "code": "PSY220H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA200H1",
    "code": "SLA200H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eth.htm#ETH201H1",
    "code": "ETH201H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM236H1",
    "code": "APM236H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC265H1",
    "code": "SOC265H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC203H1",
    "code": "SOC203H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS250H1",
    "code": "HPS250H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN221H1",
    "code": "CDN221H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO227Y1",
    "code": "ECO227Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY252H1",
    "code": "PHY252H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT299Y1",
    "code": "ANT299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC246H1",
    "code": "SOC246H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA259H1",
    "code": "SLA259H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL245H1",
    "code": "PHL245H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV223H1",
    "code": "ENV223H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM247H1",
    "code": "CHM247H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC245H1",
    "code": "NMC245H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN204H1",
    "code": "LIN204H1S",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG262H1",
    "code": "RLG262H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM210H1",
    "code": "CHM210H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT267H1",
    "code": "MAT267H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY250H1",
    "code": "MGY250H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB202H1",
    "code": "CSB202H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT223H1",
    "code": "MAT223H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY256H1",
    "code": "PHY256H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA201H1",
    "code": "ITA201H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM270H1",
    "code": "RSM270H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC258H1",
    "code": "CSC258H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT240H1",
    "code": "MAT240H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC207H1",
    "code": "CSC207H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG241H1",
    "code": "RLG241H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ppg.htm#PPG200H1",
    "code": "PPG200H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB266H1",
    "code": "EEB266H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI204Y1",
    "code": "INI204Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA234H1",
    "code": "SLA234H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC258H1",
    "code": "CSC258H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC204H1",
    "code": "VIC204H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA240Y1",
    "code": "ITA240Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT246H1",
    "code": "MAT246H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV299Y1",
    "code": "ENV299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM247H1",
    "code": "CHM247H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC270H1",
    "code": "VIC270H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG235H1",
    "code": "ENG235H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS299Y1",
    "code": "HPS299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV282H1",
    "code": "ENV282H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW232Y1",
    "code": "NEW232Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL271H1",
    "code": "FSL271H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS264H1",
    "code": "HIS264H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG270Y1",
    "code": "ENG270Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO206Y1",
    "code": "ECO206Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jsv.htm#JSV202H1",
    "code": "JSV202H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW220H1",
    "code": "NEW220H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL237H1",
    "code": "PHL237H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG231H1",
    "code": "RLG231H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA287H1",
    "code": "SLA287H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_las.htm#LAS200H1",
    "code": "LAS200H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY230H1",
    "code": "PSY230H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL205H1",
    "code": "PHL205H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY299Y1",
    "code": "PHY299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jsv.htm#JSV201H1",
    "code": "JSV201H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST250H1",
    "code": "HST250H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA203H1",
    "code": "SLA203H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS219H1",
    "code": "EAS219H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS270H1",
    "code": "HPS270H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI210H1",
    "code": "CRI210H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT250H1",
    "code": "PRT250H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA256H1",
    "code": "SLA256H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT252H1",
    "code": "PRT252H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS255H1",
    "code": "SDS255H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC251H1",
    "code": "NMC251H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV234H1",
    "code": "ENV234H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA203H1",
    "code": "CLA203H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL235H1",
    "code": "PHL235H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL271H1",
    "code": "PHL271H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN225Y1",
    "code": "TRN225Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL243H1",
    "code": "PHL243H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS261H1",
    "code": "ABS261H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE240H1",
    "code": "FRE240H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS201Y1",
    "code": "ABS201Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE241H1",
    "code": "FRE241H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG205H1",
    "code": "RLG205H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM299Y1",
    "code": "CHM299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT220Y1",
    "code": "PRT220Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cta.htm#CTA299Y1",
    "code": "CTA299Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV221H1",
    "code": "ENV221H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG224H1",
    "code": "RLG224H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR217H1",
    "code": "GGR217H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS208Y1",
    "code": "HIS208Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC240Y1",
    "code": "VIC240Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR246H1",
    "code": "GGR246H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB201H1",
    "code": "HMB201H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT253H1",
    "code": "ANT253H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA201H1",
    "code": "CLA201H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR252H1",
    "code": "GGR252H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM220H1",
    "code": "RSM220H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS209H1",
    "code": "EAS209H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB202H1",
    "code": "HMB202H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC279H1",
    "code": "SOC279H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST251H1",
    "code": "AST251H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL232H1",
    "code": "POL232H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS273H1",
    "code": "WGS273H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA263H1",
    "code": "SLA263H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA233H1",
    "code": "CLA233H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA299Y1",
    "code": "CLA299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO209Y1",
    "code": "ECO209Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS205H1",
    "code": "ABS205H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS200H1",
    "code": "CJS200H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO299Y1",
    "code": "ECO299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA236H1",
    "code": "CLA236H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL240H1",
    "code": "PHL240H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC279H1",
    "code": "VIC279H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV233H1",
    "code": "ENV233H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY290H1",
    "code": "PSY290H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY210H1",
    "code": "PSY210H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT244H1",
    "code": "MAT244H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS211H1",
    "code": "HPS211H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA254H1",
    "code": "SLA254H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH270H1",
    "code": "FAH270H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN218H1",
    "code": "CDN218H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY230H1",
    "code": "PSY230H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG250Y1",
    "code": "ENG250Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW270H1",
    "code": "NEW270H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO208Y1",
    "code": "ECO208Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH245H1",
    "code": "FAH245H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY270H1",
    "code": "PSY270H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM254Y1",
    "code": "DRM254Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC273Y1",
    "code": "NMC273Y1Y",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL281H1",
    "code": "PHL281H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY240H1",
    "code": "PSY240H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA221H1",
    "code": "SPA221H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT240H1",
    "code": "ACT240H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE299Y1",
    "code": "FRE299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR272H1",
    "code": "GGR272H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW224Y1",
    "code": "NEW224Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT244H1",
    "code": "MAT244H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE244H1",
    "code": "IRE244H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG204H1",
    "code": "RLG204H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC223Y1",
    "code": "VIC223Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG220Y1",
    "code": "ENG220Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL247H1",
    "code": "PHL247H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY254H1",
    "code": "PHY254H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR271H1",
    "code": "GGR271H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH299Y1",
    "code": "BCH299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgr.htm#MGR245Y1",
    "code": "MGR245Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW280Y1",
    "code": "NEW280Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT223H1",
    "code": "MAT223H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "19:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG280Y1",
    "code": "RLG280Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT207H1",
    "code": "ANT207H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM220H1",
    "code": "RSM220H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL244H1",
    "code": "PHL244H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN210H1",
    "code": "CIN210H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY299Y1",
    "code": "MGY299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lte.htm#LTE299Y1",
    "code": "LTE299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eur.htm#EUR200Y1",
    "code": "EUR200Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE225Y1",
    "code": "FRE225Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB201H1",
    "code": "CSB201H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC274H1",
    "code": "NMC274H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fcs.htm#FCS292H1",
    "code": "FCS292H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC212H1",
    "code": "SOC212H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB263H1",
    "code": "EEB263H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR254H1",
    "code": "GGR254H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH206H1",
    "code": "FAH206H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA258H1",
    "code": "SPA258H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG203H1",
    "code": "RLG203H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT247H1",
    "code": "ACT247H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS202H1",
    "code": "HIS202H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC260H1",
    "code": "NMC260H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY289H1",
    "code": "PHY289H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM222H1",
    "code": "RSM222H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC210H1",
    "code": "SMC210H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC256H1",
    "code": "NMC256H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA207H1",
    "code": "SLA207H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA210H1",
    "code": "SLA210H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM217H1",
    "code": "CHM217H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS291H1",
    "code": "HIS291H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS220Y1",
    "code": "HIS220Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS261H1",
    "code": "ESS261H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN202H1",
    "code": "CDN202H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY270H1",
    "code": "PSY270H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA226H1",
    "code": "SLA226H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC220H1",
    "code": "SOC220H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS222H1",
    "code": "ESS222H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jum.htm#JUM203H1",
    "code": "JUM203H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN213H1",
    "code": "CIN213H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT201H1",
    "code": "LAT201H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW221H1",
    "code": "NEW221H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB215H1",
    "code": "EEB215H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG234H1",
    "code": "ENG234H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML250Y1",
    "code": "NML250Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA216H1",
    "code": "SLA216H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG210Y1",
    "code": "ENG210Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC250Y1",
    "code": "SOC250Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI215H1",
    "code": "CRI215H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL297H1",
    "code": "PCL297H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC277H1",
    "code": "NMC277H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM250H1",
    "code": "RSM250H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB225H1",
    "code": "EEB225H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH210H1",
    "code": "BCH210H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA200H1",
    "code": "USA200H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL217H1",
    "code": "PHL217H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA204H1",
    "code": "CLA204H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA227H1",
    "code": "SLA227H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC202H1",
    "code": "SOC202H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY277H1",
    "code": "MGY277H1S",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA247H1",
    "code": "STA247H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR201H1",
    "code": "FOR201H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC281H1",
    "code": "SOC281H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST222H1",
    "code": "AST222H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV237H1",
    "code": "ENV237H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT247H1",
    "code": "MAT247H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR240H1",
    "code": "GGR240H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG237H1",
    "code": "ENG237H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT257Y1",
    "code": "MAT257Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO251H1",
    "code": "BIO251H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC263H1",
    "code": "CSC263H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG211H1",
    "code": "RLG211H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML270Y1",
    "code": "NML270Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST210H1",
    "code": "AST210H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB255H1",
    "code": "EEB255H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC209H1",
    "code": "CSC209H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC214H1",
    "code": "SOC214H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC275H1",
    "code": "NMC275H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL203Y1",
    "code": "POL203Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG263H1",
    "code": "RLG263H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM225H1",
    "code": "RSM225H1S",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY240H1",
    "code": "PSY240H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM220H1",
    "code": "CHM220H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS295Y1",
    "code": "HIS295Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA230H1",
    "code": "SLA230H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML220Y1",
    "code": "NML220Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG201Y1",
    "code": "ENG201Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE240H1",
    "code": "IRE240H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL280H1",
    "code": "PSL280H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG212H1",
    "code": "RLG212H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS273H1",
    "code": "EAS273H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR206H1",
    "code": "GGR206H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA250Y1",
    "code": "ITA250Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS200H1",
    "code": "HPS200H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_las.htm#LAS201H1",
    "code": "LAS201H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS280Y1",
    "code": "HIS280Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT224H1",
    "code": "MAT224H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN229H1",
    "code": "LIN229H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT245H1",
    "code": "ACT245H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC280H1",
    "code": "VIC280H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC225Y1",
    "code": "VIC225Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM222H1",
    "code": "CHM222H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS210H1",
    "code": "HPS210H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE260H1",
    "code": "IRE260H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC252H1",
    "code": "NMC252H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML240Y1",
    "code": "NML240Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM225H1",
    "code": "RSM225H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "19:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:30",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL285H1",
    "code": "PHL285H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA221H1",
    "code": "STA221H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO220H1",
    "code": "BIO220H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA231H1",
    "code": "CLA231H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC203Y1",
    "code": "SMC203Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM250H1",
    "code": "IMM250H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL210Y1",
    "code": "PHL210Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC291H1",
    "code": "SMC291H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wdw.htm#WDW241Y1",
    "code": "WDW241Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY201H1",
    "code": "PSY201H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS210Y1",
    "code": "EAS210Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS241H1",
    "code": "HIS241H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN241H1",
    "code": "LIN241H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_est.htm#EST200H1",
    "code": "EST200H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA248H1",
    "code": "STA248H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS280H1",
    "code": "WGS280H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC203Y1",
    "code": "VIC203Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG260H1",
    "code": "RLG260H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT246H1",
    "code": "MAT246H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN201H1",
    "code": "LIN201H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG250Y1",
    "code": "COG250Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA258H1",
    "code": "SLA258H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL200Y1",
    "code": "POL200Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN200Y1",
    "code": "TRN200Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR241H1",
    "code": "GGR241H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS251Y1",
    "code": "HIS251Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG246H1",
    "code": "RLG246H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER275H1",
    "code": "GER275H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO230H1",
    "code": "BIO230H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR200H1",
    "code": "FOR200H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH230H1",
    "code": "FAH230H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM220Y1",
    "code": "DRM220Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS242H1",
    "code": "HIS242H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS284H1",
    "code": "NFS284H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM230H1",
    "code": "RSM230H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW241Y1",
    "code": "NEW241Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM228H1",
    "code": "DRM228H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_est.htm#EST201H1",
    "code": "EST201H1S",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "MO"
      },
      {
        "start": "19:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN204H1",
    "code": "TRN204H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL233H1",
    "code": "PHL233H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL215Y1",
    "code": "POL215Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS200Y1",
    "code": "EAS200Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG299Y1",
    "code": "RLG299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN280H1",
    "code": "CDN280H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL206H1",
    "code": "PHL206H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA257H1",
    "code": "STA257H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "19:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC278H1",
    "code": "NMC278H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG234H1",
    "code": "ENG234H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT219Y1",
    "code": "PRT219Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY231H1",
    "code": "PHY231H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL245H1",
    "code": "PHL245H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS262H1",
    "code": "ESS262H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA220Y1",
    "code": "SLA220Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ivp.htm#IVP210H1",
    "code": "IVP210H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA252H1",
    "code": "SLA252H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL273H1",
    "code": "PHL273H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS284H1",
    "code": "EAS284H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA261H1",
    "code": "STA261H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "19:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC265H1",
    "code": "CSC265H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS230H1",
    "code": "HIS230H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML231H1",
    "code": "NML231H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jei.htm#JEI206H1",
    "code": "JEI206H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mus.htm#MUS220Y1",
    "code": "MUS220Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC244H1",
    "code": "SOC244H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC297H1",
    "code": "SOC297H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM221H1",
    "code": "RSM221H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC263H1",
    "code": "CSC263H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "20:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA266H1",
    "code": "SLA266H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN260H1",
    "code": "CIN260H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS246H1",
    "code": "EAS246H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC236H1",
    "code": "CSC236H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "20:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR221H1",
    "code": "GGR221H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM260H1",
    "code": "RSM260H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN230H1",
    "code": "CDN230H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS212H1",
    "code": "EAS212H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS282Y1",
    "code": "HIS282Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA220Y1",
    "code": "SPA220Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jsv.htm#JSV200H1",
    "code": "JSV200H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC258H1",
    "code": "NMC258H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB202H1",
    "code": "EEB202H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC278H1",
    "code": "VIC278H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML230H1",
    "code": "NML230H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC233H1",
    "code": "SMC233H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC212H1",
    "code": "SOC212H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR251H1",
    "code": "GGR251H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC201H1",
    "code": "SOC201H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK202H1",
    "code": "GRK202H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC213H1",
    "code": "SMC213H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB267H1",
    "code": "EEB267H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE274H1",
    "code": "FRE274H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN251H1",
    "code": "LIN251H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY280H1",
    "code": "PSY280H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM200Y1",
    "code": "DRM200Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS220Y1",
    "code": "EAS220Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC252H1",
    "code": "SMC252H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS210Y1",
    "code": "ABS210Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB208H1",
    "code": "EEB208H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL232H1",
    "code": "PHL232H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR223H1",
    "code": "GGR223H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC240H1",
    "code": "SMC240H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO271H1",
    "code": "BIO271H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS202H1",
    "code": "HPS202H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL201H1",
    "code": "PCL201H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS200Y1",
    "code": "DTS200Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS260H1",
    "code": "WGS260H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH215H1",
    "code": "FAH215H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS257H1",
    "code": "EAS257H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY280H1",
    "code": "MGY280H1S",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA245H1",
    "code": "SLA245H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT208H1",
    "code": "ANT208H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM230H1",
    "code": "RSM230H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI235H1",
    "code": "INI235H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI205H1",
    "code": "CRI205H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC298H1",
    "code": "SOC298H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL201Y1",
    "code": "POL201Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS250Y1",
    "code": "HIS250Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM251H1",
    "code": "RSM251H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM219H1",
    "code": "RSM219H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM238Y1",
    "code": "CHM238Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL299Y1",
    "code": "PSL299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS243H1",
    "code": "HIS243H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST209H1",
    "code": "HST209H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC228H1",
    "code": "SMC228H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS271Y1",
    "code": "WGS271Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA208Y1",
    "code": "SLA208Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS275H1",
    "code": "WGS275H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC253H1",
    "code": "NMC253H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT200Y1",
    "code": "ANT200Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM260H1",
    "code": "RSM260H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO260H1",
    "code": "BIO260H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS262H1",
    "code": "HIS262H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS220Y1",
    "code": "ABS220Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB214H1",
    "code": "EEB214H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV238H1",
    "code": "ENV238H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC240H1",
    "code": "CSC240H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO202Y1",
    "code": "ECO202Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG252Y1",
    "code": "ENG252Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC200H1",
    "code": "SMC200H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG232H1",
    "code": "RLG232H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA204H1",
    "code": "CLA204H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC275H1",
    "code": "VIC275H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG202Y1",
    "code": "ENG202Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgt.htm#MGT201H1",
    "code": "MGT201H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS221H1",
    "code": "ESS221H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM223H1",
    "code": "CHM223H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN203H1",
    "code": "LIN203H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN235H1",
    "code": "TRN235H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM251H1",
    "code": "RSM251H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN232H1",
    "code": "LIN232H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB204H1",
    "code": "EEB204H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS299Y1",
    "code": "ESS299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS292H1",
    "code": "HIS292H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM250H1",
    "code": "RSM250H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN228H1",
    "code": "LIN228H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mhb.htm#MHB255H1",
    "code": "MHB255H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE273H1",
    "code": "FRE273H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO270H1",
    "code": "BIO270H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML260Y1",
    "code": "NML260Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC200H1",
    "code": "SOC200H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS271Y1",
    "code": "HIS271Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA247H1",
    "code": "STA247H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY220H1",
    "code": "PSY220H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL224Y1",
    "code": "POL224Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC236H1",
    "code": "CSC236H1S",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA247H1",
    "code": "SLA247H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB204H1",
    "code": "HMB204H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV222H1",
    "code": "ENV222H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG235H1",
    "code": "ENG235H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS283Y1",
    "code": "HIS283Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR272H1",
    "code": "GGR272H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS245H1",
    "code": "HIS245H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR201H1",
    "code": "GGR201H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY200H1",
    "code": "MGY200H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC207H1",
    "code": "CSC207H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN236H1",
    "code": "TRN236H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mhb.htm#MHB256H1",
    "code": "MHB256H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG261H1",
    "code": "RLG261H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE210H1",
    "code": "FRE210H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE272H1",
    "code": "FRE272H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA232H1",
    "code": "CLA232H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS201H1",
    "code": "CJS201H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM236H1",
    "code": "APM236H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC277H1",
    "code": "NMC277H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS298Y1",
    "code": "HIS298Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC219Y1",
    "code": "SMC219Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC271H1",
    "code": "VIC271H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI234H1",
    "code": "INI234H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS241H1",
    "code": "ESS241H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC210H1",
    "code": "SOC210H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV200H1",
    "code": "ENV200H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT235Y1",
    "code": "MAT235Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN200H1",
    "code": "LIN200H1S",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT271H1",
    "code": "MAT271H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL295H1",
    "code": "PHL295H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT204H1",
    "code": "ANT204H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW240Y1",
    "code": "NEW240Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT203Y1",
    "code": "ANT203Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC205H1",
    "code": "SMC205H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA233H1",
    "code": "ITA233H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT221H1",
    "code": "MAT221H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL222H1",
    "code": "POL222H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS244H1",
    "code": "HIS244H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO204Y1",
    "code": "ECO204Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA230H1",
    "code": "CLA230H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bio.htm#BIO255H1",
    "code": "BIO255H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI225H1",
    "code": "CRI225H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL208Y1",
    "code": "POL208Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM221H1",
    "code": "RSM221H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA258H1",
    "code": "SPA258H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS284H1",
    "code": "NFS284H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML256H1",
    "code": "NML256H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC209H1",
    "code": "CSC209H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY205H1",
    "code": "PHY205H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO210H1",
    "code": "ECO210H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR273H1",
    "code": "GGR273H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG215H1",
    "code": "ENG215H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML210Y1",
    "code": "NML210Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jsu.htm#JSU237H1",
    "code": "JSU237H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY202H1",
    "code": "PHY202H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG239H1",
    "code": "RLG239H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM250H1",
    "code": "IMM250H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB299Y1",
    "code": "CSB299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL207Y1",
    "code": "POL207Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO230Y1",
    "code": "ECO230Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA219Y1",
    "code": "SPA219Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN250Y1",
    "code": "TRN250Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS211Y1",
    "code": "EAS211Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mus.htm#MUS209H1",
    "code": "MUS209H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS205H1",
    "code": "ESS205H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO220Y1",
    "code": "ECO220Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3), The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH272H1",
    "code": "FAH272H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL214Y1",
    "code": "POL214Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI236H1",
    "code": "INI236H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imc.htm#IMC200H1",
    "code": "IMC200H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG200H1",
    "code": "RLG200H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS231H1",
    "code": "HIS231H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML255H1",
    "code": "NML255H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB200H1",
    "code": "HMB200H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN267H1",
    "code": "CDN267H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA200H1",
    "code": "ITA200H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS293H1",
    "code": "HIS293H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB268H1",
    "code": "EEB268H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY260H1",
    "code": "PSY260H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW214Y1",
    "code": "NEW214Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST221H1",
    "code": "AST221H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL275H1",
    "code": "PHL275H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB265H1",
    "code": "HMB265H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG215H1",
    "code": "RLG215H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY224H1",
    "code": "PHY224H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN203H1",
    "code": "TRN203H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS203H1",
    "code": "HPS203H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG254Y1",
    "code": "ENG254Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL265H1",
    "code": "PHL265H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER260Y1",
    "code": "GER260Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM222H1",
    "code": "RSM222H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "08:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP299Y1",
    "code": "LMP299Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC224Y1",
    "code": "VIC224Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY210H1",
    "code": "PSY210H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG202H1",
    "code": "RLG202H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC243H1",
    "code": "SOC243H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG233H1",
    "code": "RLG233H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL246H1",
    "code": "PHL246H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM270H1",
    "code": "RSM270H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM249H1",
    "code": "CHM249H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG240Y1",
    "code": "ENG240Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA260H1",
    "code": "CLA260H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hun.htm#HUN200Y1",
    "code": "HUN200Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS215H1",
    "code": "EAS215H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN201Y1",
    "code": "CIN201Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC299Y1",
    "code": "SOC299Y1Y",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mus.htm#MUS211H1",
    "code": "MUS211H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG280H1",
    "code": "ENG280H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL297H1",
    "code": "PCL297H1S",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG239H1",
    "code": "ENG239H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mus.htm#MUS240H1",
    "code": "MUS240H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL201H1",
    "code": "PHL201H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC284H1",
    "code": "NMC284H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB214H1",
    "code": "EEB214H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB203H1",
    "code": "HMB203H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS240Y1",
    "code": "ABS240Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN268H1",
    "code": "CDN268H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC262H1",
    "code": "NMC262H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST211H1",
    "code": "HST211H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL221Y1",
    "code": "FSL221Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jgi.htm#JGI216H1",
    "code": "JGI216H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC251H1",
    "code": "SMC251H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG206H1",
    "code": "RLG206H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG215H1",
    "code": "ENG215H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE345H1",
    "code": "FRE345H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT329H1",
    "code": "ANT329H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM325H1",
    "code": "RSM325H1S",
    "meeting_sections": [
      {
        "start": "18:30",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS379H1",
    "code": "SDS379H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bcb.htm#BCB330Y1",
    "code": "BCB330Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH370H1",
    "code": "BCH370H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS351Y1",
    "code": "HIS351Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN340H1",
    "code": "CDN340H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jpu.htm#JPU315H1",
    "code": "JPU315H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC303H1",
    "code": "SOC303H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH377H1",
    "code": "BCH377H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL373H1",
    "code": "PHL373H1F",
    "meeting_sections": [
      {
        "start": "15:30",
        "day": "MO"
      },
      {
        "start": "15:30",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS355H1",
    "code": "WGS355H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC326H1",
    "code": "SMC326H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS389H1",
    "code": "HIS389H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN301Y1",
    "code": "TRN301Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hun.htm#HUN320Y1",
    "code": "HUN320Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY311Y1",
    "code": "MGY311Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC301H1",
    "code": "CSC301H1S",
    "meeting_sections": [
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA302H1",
    "code": "SLA302H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC358H1",
    "code": "CSC358H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cta.htm#CTA395Y0",
    "code": "CTA395Y0Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB349H1",
    "code": "CSB349H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG310H1",
    "code": "RLG310H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE324H1",
    "code": "FRE324H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR373H1",
    "code": "GGR373H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST320H1",
    "code": "AST320H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG324H1",
    "code": "RLG324H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY356H1",
    "code": "PHY356H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC315H1",
    "code": "NMC315H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK352H1",
    "code": "GRK352H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC362Y1",
    "code": "SMC362Y1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC373H1",
    "code": "CSC373H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL328H1",
    "code": "POL328H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC363H1",
    "code": "SOC363H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW341H1",
    "code": "NEW341H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL364H1",
    "code": "FSL364H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR314H1",
    "code": "GGR314H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL355Y1",
    "code": "POL355Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC371H1",
    "code": "SOC371H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY380H1",
    "code": "PSY380H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL325H1",
    "code": "PHL325H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV333H1",
    "code": "ENV333H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN340H1",
    "code": "CIN340H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC324H1",
    "code": "CSC324H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjh.htm#CJH332H1",
    "code": "CJH332H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL342H1",
    "code": "PHL342H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW334H1",
    "code": "NEW334H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY321H1",
    "code": "PSY321H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG355H1",
    "code": "ENG355H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC371H1",
    "code": "VIC371H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW321H1",
    "code": "NEW321H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS346H1",
    "code": "HIS346H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB350H1",
    "code": "CSB350H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL332H1",
    "code": "PHL332H1F",
    "meeting_sections": [
      {
        "start": "13:30",
        "day": "WE"
      },
      {
        "start": "13:30",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY321H1",
    "code": "PSY321H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY319H1",
    "code": "PSY319H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA321H1",
    "code": "ITA321H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY354H1",
    "code": "PHY354H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM352H1",
    "code": "RSM352H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL301Y1",
    "code": "POL301Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE318H1",
    "code": "FRE318H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL362H1",
    "code": "POL362H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS370H1",
    "code": "WGS370H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA310H1",
    "code": "ITA310H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL345H1",
    "code": "PCL345H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW335H1",
    "code": "NEW335H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB322H1",
    "code": "EEB322H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST325H1",
    "code": "AST325H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "19:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC309H1",
    "code": "CSC309H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI394H1",
    "code": "CRI394H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG348Y1",
    "code": "ENG348Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM348H1",
    "code": "CHM348H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG365H1",
    "code": "ENG365H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC301H1",
    "code": "CSC301H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY399H1",
    "code": "PSY399H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_edu.htm#EDU321H1",
    "code": "EDU321H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML370Y1",
    "code": "NML370Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS310Y1",
    "code": "ABS310Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS301Y1",
    "code": "ABS301Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL346H1",
    "code": "PHL346H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI310H1",
    "code": "INI310H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jhp.htm#JHP304Y1",
    "code": "JHP304Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW324H1",
    "code": "NEW324H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT374H1",
    "code": "ANT374H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mhb.htm#MHB355H1",
    "code": "MHB355H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST307H1",
    "code": "HST307H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC369Y1",
    "code": "NMC369Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC318H1",
    "code": "CSC318H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA322H1",
    "code": "CLA322H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS396H1",
    "code": "CJS396H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS309H1",
    "code": "EAS309H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT351Y1",
    "code": "MAT351Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB303H1",
    "code": "HMB303H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI387H1",
    "code": "CRI387H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY312H1",
    "code": "PSY312H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC384H1",
    "code": "CSC384H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW315H1",
    "code": "NEW315H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM315H1",
    "code": "RSM315H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT315H1",
    "code": "MAT315H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM341H1",
    "code": "RSM341H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL382H1",
    "code": "PHL382H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM340H1",
    "code": "RSM340H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW348H1",
    "code": "NEW348H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB351Y1",
    "code": "CSB351Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS311H1",
    "code": "ESS311H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL362H1",
    "code": "PCL362H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA321H1",
    "code": "CLA321H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN310H1",
    "code": "FIN310H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN340H1",
    "code": "CDN340H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN301Y1",
    "code": "CIN301Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC395Y1",
    "code": "SMC395Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN340H1",
    "code": "CIN340H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN377Y1",
    "code": "TRN377Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI339H1",
    "code": "INI339H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY323H1",
    "code": "PSY323H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC387H1",
    "code": "SMC387H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jpr.htm#JPR364Y1",
    "code": "JPR364Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM327H1",
    "code": "CHM327H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER310H1",
    "code": "GER310H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE376H1",
    "code": "FRE376H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA336H1",
    "code": "SLA336H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM303H1",
    "code": "DRM303H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO381H1",
    "code": "ECO381H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA305H1",
    "code": "STA305H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL366H1",
    "code": "PCL366H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR310H1",
    "code": "GGR310H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL320Y1",
    "code": "POL320Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS362H1",
    "code": "HIS362H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS378H1",
    "code": "SDS378H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS311Y1",
    "code": "HIS311Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG331H1",
    "code": "ENG331H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO380H1",
    "code": "ECO380H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT396H1",
    "code": "MAT396H1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB375H1",
    "code": "EEB375H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL316H1",
    "code": "PHL316H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS350H1",
    "code": "HPS350H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR336H1",
    "code": "GGR336H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB331H1",
    "code": "CSB331H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC381H1",
    "code": "NMC381H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC343H1",
    "code": "CSC343H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA322H1",
    "code": "SPA322H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM347H1",
    "code": "CHM347H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS358Y1",
    "code": "EAS358Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jha.htm#JHA384H1",
    "code": "JHA384H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH331H1",
    "code": "FAH331H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG311H1",
    "code": "ENG311H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR338H1",
    "code": "GGR338H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN302Y1",
    "code": "TRN302Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC361H1",
    "code": "NMC361H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS385H1",
    "code": "HIS385H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS396H1",
    "code": "EAS396H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI396H1",
    "code": "CRI396H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS316H1",
    "code": "HPS316H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB323H1",
    "code": "EEB323H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA304H1",
    "code": "STA304H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM328H1",
    "code": "CHM328H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS390H1",
    "code": "CJS390H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG390Y1",
    "code": "ENG390Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR357H1",
    "code": "GGR357H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS330H1",
    "code": "HIS330H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY320H1",
    "code": "PSY320H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB343H1",
    "code": "CSB343H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS397H1",
    "code": "HIS397H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY315H1",
    "code": "MGY315H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA310H1",
    "code": "CLA310H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA306H1",
    "code": "SLA306H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG329H1",
    "code": "ENG329H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE387H1",
    "code": "FRE387H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jsc.htm#JSC301H1",
    "code": "JSC301H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI393H1",
    "code": "CRI393H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO338H1",
    "code": "ECO338H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC350H1",
    "code": "NMC350H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA312H1",
    "code": "USA312H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT322H1",
    "code": "ANT322H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE379H1",
    "code": "IRE379H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR320H1",
    "code": "GGR320H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA320Y1",
    "code": "SLA320Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS377H1",
    "code": "SDS377H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG372H1",
    "code": "RLG372H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS390H1",
    "code": "ABS390H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS378H1",
    "code": "HIS378H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY331H1",
    "code": "PSY331H1F",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR339H1",
    "code": "GGR339H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT378H1",
    "code": "ANT378H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH303H1",
    "code": "FAH303H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML320H1",
    "code": "NML320H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG363Y1",
    "code": "ENG363Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB320H1",
    "code": "HMB320H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS360Y1",
    "code": "ABS360Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT334H1",
    "code": "MAT334H1S",
    "meeting_sections": [
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS372H1",
    "code": "ABS372H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM346H1",
    "code": "APM346H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN376Y1",
    "code": "CIN376Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT356H1",
    "code": "ANT356H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG353Y1",
    "code": "ENG353Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS344H1",
    "code": "HIS344H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO325H1",
    "code": "ECO325H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS312H1",
    "code": "HIS312H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER300Y1",
    "code": "GER300Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jpa.htm#JPA331Y1",
    "code": "JPA331Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS302H1",
    "code": "NFS302H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN304Y1",
    "code": "TRN304Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN360H1",
    "code": "CIN360H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT395H1",
    "code": "MAT395H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT337H1",
    "code": "MAT337H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG380H1",
    "code": "ENG380H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO342H1",
    "code": "ECO342H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR381H1",
    "code": "GGR381H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC318H1",
    "code": "CSC318H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT372H1",
    "code": "ACT372H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA389H1",
    "code": "SPA389H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL356H1",
    "code": "PHL356H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA341H1",
    "code": "SPA341H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL324H1",
    "code": "POL324H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT344H1",
    "code": "MAT344H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL304H1",
    "code": "PSL304H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY329H1",
    "code": "PSY329H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE378H1",
    "code": "IRE378H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY397H1",
    "code": "PSY397H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO320H1",
    "code": "ECO320H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL307H1",
    "code": "PHL307H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL300H1",
    "code": "POL300H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO364H1",
    "code": "ECO364H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC322H1",
    "code": "SMC322H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO321H1",
    "code": "ECO321H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA387H1",
    "code": "CLA387H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT327H1",
    "code": "MAT327H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG369H1",
    "code": "ENG369H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC343H1",
    "code": "SMC343H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY313H1",
    "code": "PSY313H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY341H1",
    "code": "PSY341H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE395H1",
    "code": "IRE395H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT301H1",
    "code": "MAT301H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI300H1",
    "code": "INI300H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC391H1",
    "code": "SOC391H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML380H1",
    "code": "NML380H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS346H1",
    "code": "EAS346H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL395H1",
    "code": "POL395H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM324H1",
    "code": "RSM324H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE379H1",
    "code": "FRE379H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC395H1",
    "code": "SOC395H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN306H1",
    "code": "LIN306H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT354H1",
    "code": "MAT354H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT350H1",
    "code": "LAT350H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM332H1",
    "code": "RSM332H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY379H1",
    "code": "PSY379H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML356H1",
    "code": "NML356H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL341H1",
    "code": "PHL341H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB324H1",
    "code": "EEB324H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA340H1",
    "code": "ITA340H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY322H1",
    "code": "PSY322H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO333H1",
    "code": "ECO333H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ana.htm#ANA300Y1",
    "code": "ANA300Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO351H1",
    "code": "ECO351H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH310H1",
    "code": "FAH310H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN353H1",
    "code": "CIN353H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM321H1",
    "code": "RSM321H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN307H1",
    "code": "CDN307H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG342H1",
    "code": "COG342H1S",
    "meeting_sections": [
      {
        "start": "13:30",
        "day": "WE"
      },
      {
        "start": "13:30",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA310H1",
    "code": "USA310H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY339H1",
    "code": "PSY339H1S",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN305Y1",
    "code": "TRN305Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG323H1",
    "code": "ENG323H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS331H1",
    "code": "ABS331H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC386H1",
    "code": "SMC386H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC304H1",
    "code": "VIC304H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jlp.htm#JLP374H1",
    "code": "JLP374H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH353H1",
    "code": "FAH353H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_las.htm#LAS300H1",
    "code": "LAS300H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH360H1",
    "code": "ARH360H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG326H1",
    "code": "RLG326H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG389H1",
    "code": "RLG389H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK350H1",
    "code": "GRK350H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR300H1",
    "code": "FOR300H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE326H1",
    "code": "FRE326H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST309H1",
    "code": "HST309H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB340H1",
    "code": "CSB340H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS352H1",
    "code": "HPS352H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB306H1",
    "code": "HMB306H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG349H1",
    "code": "ENG349H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY371Y1",
    "code": "PHY371Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS307H1",
    "code": "HIS307H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG323H1",
    "code": "ENG323H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH309H1",
    "code": "ARH309H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS390Y1",
    "code": "DTS390Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE319H1",
    "code": "FRE319H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS361H1",
    "code": "HIS361H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jge.htm#JGE321H1",
    "code": "JGE321H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN308H1",
    "code": "TRN308H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN331H1",
    "code": "LIN331H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jln.htm#JLN327H1",
    "code": "JLN327H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG301H1",
    "code": "RLG301H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL362H1",
    "code": "FSL362H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS390H1",
    "code": "DTS390H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC366Y1",
    "code": "NMC366Y1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC355H1",
    "code": "SMC355H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG341H1",
    "code": "COG341H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC390Y1",
    "code": "VIC390Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB395Y1",
    "code": "HMB395Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG342H1",
    "code": "RLG342H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS377H1",
    "code": "HIS377H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT367H1",
    "code": "MAT367H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS341H1",
    "code": "ABS341H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO358H1",
    "code": "ECO358H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY328H1",
    "code": "PSY328H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS361H1",
    "code": "EAS361H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT370H1",
    "code": "ANT370H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE344H1",
    "code": "FRE344H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY309H1",
    "code": "PSY309H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM328H1",
    "code": "RSM328H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI310H1",
    "code": "INI310H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM300Y1",
    "code": "DRM300Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL304H1",
    "code": "PHL304H1S",
    "meeting_sections": [
      {
        "start": "15:30",
        "day": "TH"
      },
      {
        "start": "15:30",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL363H1",
    "code": "FSL363H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR305H1",
    "code": "FOR305H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB396Y0",
    "code": "HMB396Y0Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC385H1",
    "code": "CSC385H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH374Y1",
    "code": "BCH374Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS383Y1",
    "code": "HIS383Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR341H1",
    "code": "GGR341H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO338H1",
    "code": "ECO338H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST350Y1",
    "code": "HST350Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS365H1",
    "code": "EAS365H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM370H1",
    "code": "RSM370H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM366H1",
    "code": "DRM366H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL300H1",
    "code": "PSL300H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB321H1",
    "code": "EEB321H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW333H1",
    "code": "NEW333H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO316H1",
    "code": "ECO316H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG300Y1",
    "code": "ENG300Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM306Y1",
    "code": "APM306Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT329Y1",
    "code": "MAT329Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT337H1",
    "code": "MAT337H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jal.htm#JAL328H1",
    "code": "JAL328H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT335Y1",
    "code": "ANT335Y1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH361H1",
    "code": "ARH361H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS369H1",
    "code": "WGS369H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS395H1",
    "code": "HIS395H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA319H1",
    "code": "CLA319H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS335H1",
    "code": "HIS335H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG389Y1",
    "code": "ENG389Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV322H1",
    "code": "ENV322H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN390H1",
    "code": "CDN390H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS321H1",
    "code": "HPS321H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY322H1",
    "code": "PSY322H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI395H1",
    "code": "CRI395H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO320H1",
    "code": "ECO320H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC313H1",
    "code": "SOC313H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM378H1",
    "code": "DRM378H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jgi.htm#JGI346H1",
    "code": "JGI346H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH380H1",
    "code": "FAH380H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jlp.htm#JLP315H1",
    "code": "JLP315H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL376H1",
    "code": "PHL376H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW391H1",
    "code": "NEW391H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC309H1",
    "code": "CSC309H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY314H1",
    "code": "MGY314H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC363H1",
    "code": "VIC363H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR372H1",
    "code": "GGR372H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH361Y1",
    "code": "ARH361Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC359H1",
    "code": "SMC359H1F",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC319H1",
    "code": "SMC319H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI333H1",
    "code": "INI333H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT380H1",
    "code": "ANT380H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG391Y1",
    "code": "ENG391Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW332H1",
    "code": "NEW332H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB384H1",
    "code": "EEB384H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL340H1",
    "code": "PHL340H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC346H1",
    "code": "SMC346H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO349H1",
    "code": "ECO349H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST310H1",
    "code": "HST310H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT343H1",
    "code": "ANT343H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC388Y1",
    "code": "SMC388Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG384Y1",
    "code": "ENG384Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE310H1",
    "code": "FRE310H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT320Y1",
    "code": "PRT320Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW358H1",
    "code": "NEW358H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL362H1",
    "code": "FSL362H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL383H1",
    "code": "PHL383H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS349H1",
    "code": "EAS349H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS391H1",
    "code": "ESS391H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY333H1",
    "code": "PSY333H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC392Y1",
    "code": "VIC392Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC331H1",
    "code": "PHC331H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS388H1",
    "code": "HIS388H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE388H1",
    "code": "FRE388H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG328Y1",
    "code": "ENG328Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC360Y1",
    "code": "VIC360Y1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE384H1",
    "code": "FRE384H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW328H1",
    "code": "NEW328H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE383H1",
    "code": "FRE383H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN395H1",
    "code": "CDN395H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG337H1",
    "code": "RLG337H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM328H1",
    "code": "DRM328H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC336H1",
    "code": "CSC336H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML310Y1",
    "code": "NML310Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC391H1",
    "code": "SMC391H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB348H1",
    "code": "CSB348H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM331H1",
    "code": "DRM331H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC372H1",
    "code": "VIC372H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phs.htm#PHS300H1",
    "code": "PHS300H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS390H1",
    "code": "CJS390H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL317H1",
    "code": "POL317H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC355H1",
    "code": "SOC355H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH311H1",
    "code": "BCH311H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT314H1",
    "code": "ANT314H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM320H1",
    "code": "RSM320H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL338H1",
    "code": "PHL338H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM320H1",
    "code": "RSM320H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV320H1",
    "code": "ENV320H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY305H1",
    "code": "PSY305H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS390H1",
    "code": "HPS390H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL340Y1",
    "code": "POL340Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL385H1",
    "code": "PHL385H1S",
    "meeting_sections": [
      {
        "start": "10:30",
        "day": "MO"
      },
      {
        "start": "10:30",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB323H1",
    "code": "HMB323H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL337Y1",
    "code": "POL337Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE346H1",
    "code": "IRE346H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM340H1",
    "code": "IMM340H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC392H1",
    "code": "SOC392H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY312H1",
    "code": "PSY312H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fcs.htm#FCS391H1",
    "code": "FCS391H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS350H1",
    "code": "CAS350H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS310Y1",
    "code": "EAS310Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH381H1",
    "code": "FAH381H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY379Y1",
    "code": "MGY379Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY385H1",
    "code": "PHY385H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW380Y1",
    "code": "NEW380Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG347Y1",
    "code": "ENG347Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO322H1",
    "code": "ECO322H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG367H1",
    "code": "ENG367H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM302H1",
    "code": "DRM302H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER360H1",
    "code": "GER360H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG354Y1",
    "code": "ENG354Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA352H1",
    "code": "SPA352H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY392H1",
    "code": "PHY392H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV307H1",
    "code": "ENV307H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS395H1",
    "code": "HIS395H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT341H1",
    "code": "ANT341H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY311H1",
    "code": "PSY311H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL331H1",
    "code": "PHL331H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC300H1",
    "code": "CSC300H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "19:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL380Y1",
    "code": "POL380Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_las.htm#LAS301H1",
    "code": "LAS301H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jqr.htm#JQR360H1",
    "code": "JQR360H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN303H1",
    "code": "TRN303H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN367H1",
    "code": "CDN367H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS310H1",
    "code": "CAS310H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA311H1",
    "code": "USA311H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC392H1",
    "code": "VIC392H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS370H1",
    "code": "CAS370H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW330H1",
    "code": "NEW330H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA350Y1",
    "code": "ITA350Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC338H1",
    "code": "SMC338H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC396H1",
    "code": "SMC396H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH361Y1",
    "code": "ARH361Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH378H1",
    "code": "BCH378H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG364Y1",
    "code": "ENG364Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG322H1",
    "code": "RLG322H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG311H1",
    "code": "ENG311H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC311H1",
    "code": "SMC311H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS374H1",
    "code": "WGS374H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO365H1",
    "code": "ECO365H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN300H1",
    "code": "FIN300H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO351H1",
    "code": "ECO351H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY390H1",
    "code": "PSY390H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY372H1",
    "code": "PSY372H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT376H1",
    "code": "ANT376H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS334H1",
    "code": "WGS334H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO365H1",
    "code": "ECO365H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH361H1",
    "code": "ARH361H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY324H1",
    "code": "PHY324H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB318H1",
    "code": "EEB318H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY340H1",
    "code": "MGY340H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW316H1",
    "code": "NEW316H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN349H1",
    "code": "CIN349H1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jhe.htm#JHE353H1",
    "code": "JHE353H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB321H1",
    "code": "HMB321H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL363H1",
    "code": "FSL363H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB325H1",
    "code": "CSB325H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC391Y1",
    "code": "VIC391Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI396H1",
    "code": "CRI396H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY397H1",
    "code": "PSY397H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT390H1",
    "code": "MAT390H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST308H1",
    "code": "HST308H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER340H1",
    "code": "GER340H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB328H1",
    "code": "CSB328H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY396H1",
    "code": "PSY396H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK342H1",
    "code": "GRK342H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG383H1",
    "code": "ENG383H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS309H1",
    "code": "HIS309H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM323H1",
    "code": "RSM323H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY390H1",
    "code": "PSY390H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY357H1",
    "code": "PHY357H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC362H1",
    "code": "VIC362H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS380H1",
    "code": "SDS380H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY372H1",
    "code": "PSY372H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO314H1",
    "code": "ECO314H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG393H1",
    "code": "ENG393H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST373H1",
    "code": "HST373H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS360H1",
    "code": "WGS360H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS318H1",
    "code": "HIS318H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS365H1",
    "code": "SDS365H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL375H1",
    "code": "PHL375H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM353H1",
    "code": "RSM353H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI365H1",
    "code": "CRI365H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY326H1",
    "code": "PSY326H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG324Y1",
    "code": "ENG324Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG305H1",
    "code": "RLG305H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN323H1",
    "code": "LIN323H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG368H1",
    "code": "ENG368H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG336H1",
    "code": "ENG336H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV341H1",
    "code": "ENV341H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG368H1",
    "code": "RLG368H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT335H1",
    "code": "MAT335H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL389H1",
    "code": "PCL389H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW351Y1",
    "code": "NEW351Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL302H1",
    "code": "PHL302H1S",
    "meeting_sections": [
      {
        "start": "10:30",
        "day": "WE"
      },
      {
        "start": "10:30",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA330Y1",
    "code": "SLA330Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR343H1",
    "code": "GGR343H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA355H1",
    "code": "STA355H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN312Y1",
    "code": "CIN312Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN303H1",
    "code": "TRN303H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG337H1",
    "code": "ENG337H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jug.htm#JUG320H1",
    "code": "JUG320H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC358H1",
    "code": "SMC358H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY336H1",
    "code": "PSY336H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN355H1",
    "code": "CDN355H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC391H1",
    "code": "VIC391H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC314H1",
    "code": "SMC314H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS345H1",
    "code": "SDS345H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS318H1",
    "code": "HPS318H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA348H1",
    "code": "SPA348H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH348H1",
    "code": "FAH348H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN369H1",
    "code": "CIN369H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS392Y1",
    "code": "ESS392Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV335H1",
    "code": "ENV335H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC398H1",
    "code": "SMC398H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC346H1",
    "code": "VIC346H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH348H1",
    "code": "FAH348H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL375Y1",
    "code": "FSL375Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC308H1",
    "code": "SMC308H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC361H0",
    "code": "VIC361H0F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI386H1",
    "code": "CRI386H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS304H1",
    "code": "HIS304H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL334H1",
    "code": "POL334H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS395Y1",
    "code": "HIS395Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG388H1",
    "code": "RLG388H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO349H1",
    "code": "ECO349H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR327H1",
    "code": "GGR327H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS326H1",
    "code": "HIS326H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mus.htm#MUS335H1",
    "code": "MUS335H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV334H1",
    "code": "ENV334H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB325H1",
    "code": "EEB325H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC300H1",
    "code": "PHC300H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL364H1",
    "code": "FSL364H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN300H1",
    "code": "TRN300H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS345H1",
    "code": "ESS345H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA336H1",
    "code": "CLA336H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR326H1",
    "code": "GGR326H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY323H1",
    "code": "PSY323H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS394H1",
    "code": "HIS394H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC345H1",
    "code": "VIC345H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL374H1",
    "code": "PSL374H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY333H1",
    "code": "PSY333H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN365H1",
    "code": "CDN365H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC350Y1",
    "code": "VIC350Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT348H1",
    "code": "ACT348H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI336H1",
    "code": "INI336H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC398H1",
    "code": "SMC398H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG392H1",
    "code": "ENG392H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY339H1",
    "code": "PSY339H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER336H1",
    "code": "GER336H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO325H1",
    "code": "ECO325H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM323H1",
    "code": "RSM323H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mhb.htm#MHB356H1",
    "code": "MHB356H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT327H1",
    "code": "ANT327H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR347H1",
    "code": "GGR347H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT336H1",
    "code": "ANT336H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE348H1",
    "code": "IRE348H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS338H1",
    "code": "HIS338H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG325H1",
    "code": "ENG325H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB310H1",
    "code": "HMB310H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL341H1",
    "code": "PHL341H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL384H1",
    "code": "PHL384H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP300Y1",
    "code": "LMP300Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB300H1",
    "code": "HMB300H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO374H1",
    "code": "ECO374H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM322H1",
    "code": "RSM322H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG358H1",
    "code": "RLG358H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA312H1",
    "code": "SLA312H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC383H1",
    "code": "SOC383H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV350H1",
    "code": "ENV350H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR303H1",
    "code": "FOR303H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL314H1",
    "code": "PHL314H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM321H1",
    "code": "RSM321H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY311H1",
    "code": "PSY311H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA300H1",
    "code": "USA300H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR308H1",
    "code": "GGR308H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR328H1",
    "code": "GGR328H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN368H1",
    "code": "CDN368H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL345H1",
    "code": "PHL345H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mus.htm#MUS308H1",
    "code": "MUS308H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL323Y1",
    "code": "POL323Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR302H1",
    "code": "FOR302H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO374H1",
    "code": "ECO374H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC396H1",
    "code": "SMC396H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV347H1",
    "code": "ENV347H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC365H1",
    "code": "SOC365H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT371H1",
    "code": "ANT371H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB319H1",
    "code": "EEB319H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA371H1",
    "code": "CLA371H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT384H1",
    "code": "ANT384H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC364H1",
    "code": "SOC364H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA301H1",
    "code": "ITA301H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB329H1",
    "code": "CSB329H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC388H1",
    "code": "SOC388H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL371H1",
    "code": "POL371H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN305H1",
    "code": "LIN305H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL355H1",
    "code": "PHL355H1F",
    "meeting_sections": [
      {
        "start": "10:30",
        "day": "MO"
      },
      {
        "start": "10:30",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC385H1",
    "code": "SMC385H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL335H1",
    "code": "PHL335H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM391H1",
    "code": "DRM391H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL396H1",
    "code": "POL396H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR363H1",
    "code": "GGR363H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS365H1",
    "code": "WGS365H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW357H1",
    "code": "NEW357H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG376H1",
    "code": "RLG376H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT372H1",
    "code": "ANT372H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM332H1",
    "code": "RSM332H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL362H1",
    "code": "PHL362H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS395H1",
    "code": "HIS395H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS389H1",
    "code": "HIS389H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA311H1",
    "code": "SLA311H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC321H1",
    "code": "CSC321H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB328H1",
    "code": "EEB328H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS396H1",
    "code": "WGS396H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC329H1",
    "code": "VIC329H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI305H1",
    "code": "INI305H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC392H1",
    "code": "VIC392H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC386H1",
    "code": "SMC386H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS323H1",
    "code": "HIS323H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM350H1",
    "code": "IMM350H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC344H1",
    "code": "NMC344H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB397Y0",
    "code": "CSB397Y0Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI394H1",
    "code": "UNI394H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN330Y1",
    "code": "CIN330Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH305H1",
    "code": "ARH305H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL329H1",
    "code": "POL329H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC346H1",
    "code": "VIC346H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL308H1",
    "code": "PHL308H1F",
    "meeting_sections": [
      {
        "start": "10:30",
        "day": "TH"
      },
      {
        "start": "10:30",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC301H1",
    "code": "SMC301H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO364H1",
    "code": "ECO364H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG316H1",
    "code": "RLG316H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC343H1",
    "code": "NMC343H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO313H1",
    "code": "ECO313H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA373H1",
    "code": "CLA373H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG330H1",
    "code": "ENG330H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC371H1",
    "code": "SMC371H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT333Y1",
    "code": "ANT333Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE314H1",
    "code": "FRE314H1F",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC306H1",
    "code": "VIC306H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO362H1",
    "code": "ECO362H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jee.htm#JEE337H1",
    "code": "JEE337H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL361H1",
    "code": "POL361H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER367H1",
    "code": "GER367H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH312Y1",
    "code": "ARH312Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY371H1",
    "code": "PSY371H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC391H1",
    "code": "SMC391H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG308H1",
    "code": "RLG308H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC381Y1",
    "code": "SMC381Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL300H1",
    "code": "POL300H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG336H1",
    "code": "RLG336H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT309H1",
    "code": "MAT309H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE378H1",
    "code": "FRE378H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN378H1",
    "code": "CIN378H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL365H1",
    "code": "PHL365H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW349H1",
    "code": "NEW349H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG359H1",
    "code": "RLG359H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG393H1",
    "code": "ENG393H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC390H1",
    "code": "VIC390H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT345H1",
    "code": "ANT345H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC386H1",
    "code": "SOC386H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI350H1",
    "code": "CRI350H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL303H1",
    "code": "PHL303H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS390H1",
    "code": "SDS390H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB346H1",
    "code": "CSB346H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT317H1",
    "code": "ANT317H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC330H1",
    "code": "PHC330H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA324H1",
    "code": "SPA324H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC336H1",
    "code": "CSC336H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "19:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC386H1",
    "code": "SOC386H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA320Y1",
    "code": "SPA320Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB327H1",
    "code": "CSB327H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO332H1",
    "code": "ECO332H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL372H1",
    "code": "POL372H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI302H1",
    "code": "INI302H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL349H1",
    "code": "POL349H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB386H1",
    "code": "EEB386H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG336H1",
    "code": "ENG336H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG392H1",
    "code": "ENG392H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH372Y1",
    "code": "BCH372Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW390Y1",
    "code": "NEW390Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL316Y1",
    "code": "POL316Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS369H1",
    "code": "HIS369H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE334H1",
    "code": "FRE334H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM342H1",
    "code": "DRM342H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC326H1",
    "code": "VIC326H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI385H1",
    "code": "CRI385H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT347Y1",
    "code": "MAT347Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS355H1",
    "code": "SDS355H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA302H1",
    "code": "STA302H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC343Y1",
    "code": "VIC343Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC305H1",
    "code": "VIC305H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS338H1",
    "code": "EAS338H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS341Y1",
    "code": "HIS341Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV323H1",
    "code": "ENV323H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG366H1",
    "code": "RLG366H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO326H1",
    "code": "ECO326H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY370H1",
    "code": "PSY370H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN351H1",
    "code": "LIN351H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP365H1",
    "code": "LMP365H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC390H1",
    "code": "VIC390H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA383H1",
    "code": "CLA383H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA325H1",
    "code": "SLA325H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS364H1",
    "code": "HIS364H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW339H1",
    "code": "NEW339H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT342H1",
    "code": "LAT342H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG360H1",
    "code": "RLG360H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC380H1",
    "code": "SMC380H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI380H1",
    "code": "CRI380H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO326H1",
    "code": "ECO326H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM333H1",
    "code": "RSM333H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC324H1",
    "code": "VIC324H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC373H1",
    "code": "CSC373H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC390H1",
    "code": "VIC390H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG317H1",
    "code": "RLG317H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT334H1",
    "code": "MAT334H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS375H1",
    "code": "SDS375H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC342H1",
    "code": "VIC342H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS350H1",
    "code": "ABS350H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML305Y1",
    "code": "NML305Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER321H1",
    "code": "GER321H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT371H1",
    "code": "ACT371H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL376H1",
    "code": "PCL376H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO375H1",
    "code": "ECO375H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA377H1",
    "code": "SLA377H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC378H1",
    "code": "NMC378H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS368H1",
    "code": "HIS368H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS391H1",
    "code": "ESS391H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM391H1",
    "code": "DRM391H1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS376H1",
    "code": "SDS376H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS385H1",
    "code": "WGS385H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW391H1",
    "code": "NEW391H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI340H1",
    "code": "CRI340H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC361H0",
    "code": "VIC361H0S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY331H1",
    "code": "PSY331H1S",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB312H1",
    "code": "HMB312H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW358H1",
    "code": "NEW358H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS300Y1",
    "code": "EAS300Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER305H1",
    "code": "GER305H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW322H1",
    "code": "NEW322H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM390Y1",
    "code": "DRM390Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW302Y1",
    "code": "NEW302Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM361H1",
    "code": "RSM361H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC320Y1",
    "code": "VIC320Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT332H1",
    "code": "MAT332H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB362H1",
    "code": "EEB362H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB345H1",
    "code": "CSB345H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY378H1",
    "code": "MGY378H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC370H1",
    "code": "NMC370H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS320Y1",
    "code": "EAS320Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC392H1",
    "code": "VIC392H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB390H1",
    "code": "EEB390H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA358H1",
    "code": "SLA358H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ehj.htm#EHJ352H1",
    "code": "EHJ352H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY372H1",
    "code": "PHY372H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS355H1",
    "code": "HIS355H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO310H1",
    "code": "ECO310H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL301H1",
    "code": "PSL301H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM310H1",
    "code": "CHM310H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY313H1",
    "code": "PSY313H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR360H1",
    "code": "GGR360H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN300H1",
    "code": "TRN300H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT334H1",
    "code": "ANT334H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK340H1",
    "code": "GRK340H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA303H1",
    "code": "STA303H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE332H1",
    "code": "FRE332H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO334H1",
    "code": "ECO334H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY320H1",
    "code": "PSY320H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY331H1",
    "code": "PHY331H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT368H1",
    "code": "ANT368H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG341H1",
    "code": "ENG341H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB352H1",
    "code": "CSB352H1S",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ppg.htm#PPG301H1",
    "code": "PPG301H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG309H1",
    "code": "RLG309H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA384H1",
    "code": "SPA384H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC300H1",
    "code": "SOC300H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA368H1",
    "code": "CLA368H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM338H1",
    "code": "CHM338H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC315H1",
    "code": "SMC315H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT316H1",
    "code": "ANT316H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM354Y1",
    "code": "DRM354Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL372H1",
    "code": "PSL372H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT363H1",
    "code": "MAT363H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC302H1",
    "code": "SOC302H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS386H1",
    "code": "NFS386H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT368H1",
    "code": "PRT368H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC300H1",
    "code": "SMC300H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM376H1",
    "code": "DRM376H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS312H1",
    "code": "ESS312H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS322H1",
    "code": "ESS322H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR310H1",
    "code": "FOR310H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS301H1",
    "code": "NFS301H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO341H1",
    "code": "ECO341H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC349H1",
    "code": "NMC349H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM375H1",
    "code": "DRM375H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC324H1",
    "code": "CSC324H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN321H1",
    "code": "TRN321H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA332H1",
    "code": "ITA332H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eth.htm#ETH350H1",
    "code": "ETH350H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL354H1",
    "code": "POL354H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY360H1",
    "code": "MGY360H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT336H1",
    "code": "MAT336H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH350H1",
    "code": "BCH350H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS333H1",
    "code": "EAS333H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA304H1",
    "code": "STA304H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI370H1",
    "code": "CRI370H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO368H1",
    "code": "ECO368H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY328H1",
    "code": "PSY328H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC324H1",
    "code": "SMC324H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC370H1",
    "code": "VIC370H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH370H1",
    "code": "BCH370H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY326H1",
    "code": "PSY326H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA305Y1",
    "code": "SLA305Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT315H1",
    "code": "MAT315H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI393Y1",
    "code": "UNI393Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS387H1",
    "code": "HIS387H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV346H1",
    "code": "ENV346H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB365H1",
    "code": "EEB365H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG340H1",
    "code": "ENG340H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA360H1",
    "code": "ITA360H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML357H1",
    "code": "NML357H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA367H1",
    "code": "CLA367H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA314H1",
    "code": "SLA314H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL305H1",
    "code": "PSL305H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM325H1",
    "code": "CHM325H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS314H1",
    "code": "HIS314H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC312H1",
    "code": "SOC312H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL310H1",
    "code": "PHL310H1F",
    "meeting_sections": [
      {
        "start": "15:30",
        "day": "TU"
      },
      {
        "start": "15:30",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA322H1",
    "code": "SLA322H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS376H1",
    "code": "WGS376H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC362H1",
    "code": "SOC362H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC302H1",
    "code": "CSC302H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS324H1",
    "code": "HIS324H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN362H1",
    "code": "LIN362H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS367H1",
    "code": "WGS367H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW345H1",
    "code": "NEW345H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL350Y0",
    "code": "FSL350Y0Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM324H1",
    "code": "RSM324H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST326Y1",
    "code": "AST326Y1Y",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG365H1",
    "code": "ENG365H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH312H1",
    "code": "FAH312H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW344H1",
    "code": "NEW344H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS379H1",
    "code": "HIS379H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB397Y1",
    "code": "EEB397Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL370H1",
    "code": "PHL370H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI343H1",
    "code": "CRI343H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS340H1",
    "code": "WGS340H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM392H1",
    "code": "RSM392H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY343H1",
    "code": "PSY343H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM333H1",
    "code": "RSM333H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA320H1",
    "code": "ITA320H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC360Y1",
    "code": "VIC360Y1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jnh.htm#JNH350H1",
    "code": "JNH350H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC380H1",
    "code": "NMC380H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS331H1",
    "code": "ESS331H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC367H1",
    "code": "SOC367H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB330H1",
    "code": "CSB330H1S",
    "meeting_sections": [
      {
        "start": "09:30",
        "day": "WE"
      },
      {
        "start": "09:30",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML340Y1",
    "code": "NML340Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM326H1",
    "code": "CHM326H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL344Y1",
    "code": "POL344Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM342H1",
    "code": "CHM342H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH360H1",
    "code": "FAH360H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE339H1",
    "code": "IRE339H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW317H1",
    "code": "NEW317H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY350H1",
    "code": "MGY350H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC387H1",
    "code": "SOC387H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS394Y1",
    "code": "NFS394Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC303H1",
    "code": "VIC303H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL323H1",
    "code": "PHL323H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER370H1",
    "code": "GER370H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC336H1",
    "code": "SOC336H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL313H1",
    "code": "PHL313H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM393H1",
    "code": "RSM393H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC318H1",
    "code": "SMC318H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG370H1",
    "code": "ENG370H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA347H1",
    "code": "STA347H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM392H1",
    "code": "RSM392H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY350H1",
    "code": "PHY350H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM361H1",
    "code": "RSM361H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE320H1",
    "code": "FRE320H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY336H1",
    "code": "PSY336H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB394Y0",
    "code": "HMB394Y0Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG343H1",
    "code": "RLG343H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM317H1",
    "code": "CHM317H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS343H1",
    "code": "HIS343H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY377H1",
    "code": "MGY377H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM330H1",
    "code": "RSM330H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC360H1",
    "code": "VIC360H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV316H1",
    "code": "ENV316H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS382H1",
    "code": "NFS382H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA363H1",
    "code": "CLA363H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB311H1",
    "code": "HMB311H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT349H1",
    "code": "ACT349H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI337H1",
    "code": "INI337H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcj.htm#PCJ360H1",
    "code": "PCJ360H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL359Y1",
    "code": "POL359Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM341H1",
    "code": "IMM341H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC317H1",
    "code": "SMC317H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS346H1",
    "code": "SDS346H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB340H1",
    "code": "EEB340H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB388H1",
    "code": "EEB388H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS319H1",
    "code": "HPS319H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS373H1",
    "code": "WGS373H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC380H1",
    "code": "SMC380H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO339H1",
    "code": "ECO339H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT340H1",
    "code": "LAT340H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV382H1",
    "code": "ENV382H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR359H1",
    "code": "GGR359H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS363H1",
    "code": "EAS363H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC376H1",
    "code": "SOC376H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC350H1",
    "code": "SMC350H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN322H1",
    "code": "LIN322H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG312H1",
    "code": "RLG312H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB301H1",
    "code": "HMB301H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT370H1",
    "code": "ACT370H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL317H1",
    "code": "PHL317H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS373H1",
    "code": "HIS373H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS390H1",
    "code": "CAS390H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS371H1",
    "code": "ABS371H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC307H1",
    "code": "VIC307H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB380H1",
    "code": "EEB380H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL326Y1",
    "code": "POL326Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML355H1",
    "code": "NML355H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM391H1",
    "code": "DRM391H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE352H0",
    "code": "FRE352H0S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY343H1",
    "code": "PSY343H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH361H1",
    "code": "ARH361H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW357H1",
    "code": "NEW357H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN320H1",
    "code": "FIN320H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB314H1",
    "code": "HMB314H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI395H1",
    "code": "CRI395H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY372H1",
    "code": "PHY372H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS372H1",
    "code": "EAS372H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO331H1",
    "code": "ECO331H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA375H1",
    "code": "SPA375H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jpe.htm#JPE395H1",
    "code": "JPE395H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP363H1",
    "code": "LMP363H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM327H1",
    "code": "RSM327H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG307H1",
    "code": "RLG307H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL375H1",
    "code": "PHL375H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB330H1",
    "code": "EEB330H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC360H1",
    "code": "VIC360H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL397Y1",
    "code": "POL397Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG385H1",
    "code": "ENG385H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM343H1",
    "code": "CHM343H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH350H1",
    "code": "FAH350H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC360H1",
    "code": "NMC360H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG306Y1",
    "code": "ENG306Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS347H1",
    "code": "HIS347H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML350H1",
    "code": "NML350H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI302H1",
    "code": "INI302H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL360H1",
    "code": "POL360H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB300H1",
    "code": "HMB300H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC313H1",
    "code": "SMC313H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imc.htm#IMC390Y1",
    "code": "IMC390Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL373H1",
    "code": "POL373H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB360H1",
    "code": "HMB360H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC391H1",
    "code": "VIC391H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV381H1",
    "code": "ENV381H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL345Y1",
    "code": "POL345Y1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jga.htm#JGA305H1",
    "code": "JGA305H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC392H1",
    "code": "SMC392H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG304H1",
    "code": "RLG304H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO380H1",
    "code": "ECO380H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL312Y1",
    "code": "POL312Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC397H1",
    "code": "SMC397H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL314H1",
    "code": "POL314H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC300H1",
    "code": "CSC300H1F",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT352H1",
    "code": "LAT352H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN341H1",
    "code": "LIN341H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW342H1",
    "code": "NEW342H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI300H1",
    "code": "CRI300H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO375H1",
    "code": "ECO375H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY358H1",
    "code": "PHY358H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM322H1",
    "code": "RSM322H1F",
    "meeting_sections": [
      {
        "start": "08:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "08:00",
        "day": "WE"
      },
      {
        "start": "08:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jge.htm#JGE331H1",
    "code": "JGE331H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT344H1",
    "code": "MAT344H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC304H1",
    "code": "CSC304H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR382H1",
    "code": "GGR382H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW337H1",
    "code": "NEW337H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI311Y1",
    "code": "INI311Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL344H1",
    "code": "PHL344H1S",
    "meeting_sections": [
      {
        "start": "10:30",
        "day": "WE"
      },
      {
        "start": "10:30",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH309H1",
    "code": "FAH309H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC369H1",
    "code": "CSC369H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "20:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH340H1",
    "code": "BCH340H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW353H1",
    "code": "NEW353H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER372H1",
    "code": "GER372H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS320H1",
    "code": "CAS320H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO340H1",
    "code": "ECO340H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL305Y1",
    "code": "POL305Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS353H1",
    "code": "ABS353H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS354H1",
    "code": "ABS354H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW346H1",
    "code": "NEW346H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT384H1",
    "code": "ANT384H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM346H1",
    "code": "APM346H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC391H1",
    "code": "VIC391H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG329H1",
    "code": "ENG329H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR337H1",
    "code": "GGR337H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB342H1",
    "code": "HMB342H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL347H1",
    "code": "PHL347H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC360H1",
    "code": "NMC360H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL321Y1",
    "code": "FSL321Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB302H1",
    "code": "HMB302H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW338H1",
    "code": "NEW338H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS331H1",
    "code": "HIS331H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS398H0",
    "code": "ESS398H0F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ana.htm#ANA301H1",
    "code": "ANA301H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC369H1",
    "code": "CSC369H1F",
    "meeting_sections": [
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM387H1",
    "code": "DRM387H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC387H1",
    "code": "SOC387H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG384H1",
    "code": "RLG384H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS300Y1",
    "code": "ABS300Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE347H1",
    "code": "IRE347H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS396H1",
    "code": "CJS396H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST330H1",
    "code": "HST330H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN340H1",
    "code": "FIN340H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY307H1",
    "code": "PSY307H1F",
    "meeting_sections": [
      {
        "start": "09:30",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC384H1",
    "code": "CSC384H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT390H1",
    "code": "ANT390H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN305H1",
    "code": "CDN305H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR390H1",
    "code": "GGR390H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC396H1",
    "code": "SOC396H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS390H1",
    "code": "DTS390H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR301H1",
    "code": "GGR301H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN334H1",
    "code": "CIN334H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC315H1",
    "code": "SOC315H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC320H1",
    "code": "PHC320H1S",
    "meeting_sections": [
      {
        "start": "15:30",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC316H1",
    "code": "SMC316H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN301Y1",
    "code": "TRN301Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL302H1",
    "code": "PCL302H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN333H1",
    "code": "LIN333H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC329H1",
    "code": "VIC329H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR305H1",
    "code": "GGR305H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM330H1",
    "code": "RSM330H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS300H1",
    "code": "DTS300H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG308Y1",
    "code": "ENG308Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC301H1",
    "code": "PHC301H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL366H1",
    "code": "PHL366H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC348Y1",
    "code": "VIC348Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM351H1",
    "code": "IMM351H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM315H1",
    "code": "RSM315H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY396H1",
    "code": "PSY396H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL311H1",
    "code": "PHL311H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC340Y1",
    "code": "PHC340Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS349H1",
    "code": "HIS349H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC302H1",
    "code": "VIC302H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR329H1",
    "code": "GGR329H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS381H1",
    "code": "ESS381H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN395H1",
    "code": "CDN395H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM377H1",
    "code": "DRM377H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL350H1",
    "code": "PSL350H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG351H1",
    "code": "RLG351H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML358H1",
    "code": "NML358H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB325H1",
    "code": "HMB325H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG322Y1",
    "code": "ENG322Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS362H1",
    "code": "ESS362H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH341H1",
    "code": "FAH341H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT357H1",
    "code": "MAT357H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG382Y1",
    "code": "ENG382Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC390Y1",
    "code": "SOC390Y1Y",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC343H1",
    "code": "CSC343H1S",
    "meeting_sections": [
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY329H1",
    "code": "PSY329H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE367H1",
    "code": "IRE367H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcj.htm#PCJ361H1",
    "code": "PCJ361H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM379H1",
    "code": "CHM379H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE351H0",
    "code": "FRE351H0F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT301H1",
    "code": "MAT301H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS354H1",
    "code": "SDS354H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI338H1",
    "code": "INI338H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG352H1",
    "code": "RLG352H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR340H1",
    "code": "GGR340H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC320H1",
    "code": "CSC320H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "20:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "20:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI383H1",
    "code": "CRI383H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN374Y1",
    "code": "CIN374Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB382H1",
    "code": "EEB382H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB353H1",
    "code": "CSB353H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP301H1",
    "code": "LMP301H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG388H1",
    "code": "RLG388H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT364H1",
    "code": "PRT364H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI335H1",
    "code": "CRI335H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR334H1",
    "code": "GGR334H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT338H1",
    "code": "ANT338H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN335H1",
    "code": "CDN335H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS309H1",
    "code": "HPS309H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO359H1",
    "code": "ECO359H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL382H1",
    "code": "POL382H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL301H1",
    "code": "PHL301H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA382H1",
    "code": "CLA382H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI394H1",
    "code": "UNI394H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM426H1",
    "code": "RSM426H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG401H1",
    "code": "COG401H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY406H1",
    "code": "PSY406H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC491H1",
    "code": "VIC491H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM425H1",
    "code": "RSM425H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ana.htm#ANA498Y1",
    "code": "ANA498Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG405H1",
    "code": "RLG405H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS404H1",
    "code": "DTS404H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG445H1",
    "code": "ENG445H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL475Y1",
    "code": "PCL475Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN423H1",
    "code": "LIN423H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG431H1",
    "code": "RLG431H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO465H1",
    "code": "ECO465H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS489H1",
    "code": "NFS489H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS435H1",
    "code": "WGS435H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM428H1",
    "code": "DRM428H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL421H1",
    "code": "PSL421H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN498H1",
    "code": "LIN498H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT427H1",
    "code": "ANT427H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC492H1",
    "code": "VIC492H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC471H1",
    "code": "SMC471H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL428H1",
    "code": "POL428H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML462H1",
    "code": "NML462H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML462H1",
    "code": "NML462H1F",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI431Y1",
    "code": "INI431Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC470H1",
    "code": "SMC470H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM400Y1",
    "code": "DRM400Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV492H1",
    "code": "ENV492H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB465H1",
    "code": "EEB465H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG498H1",
    "code": "COG498H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC479H1",
    "code": "NMC479H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL400H1",
    "code": "PHL400H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY473H1",
    "code": "PSY473H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS416H1",
    "code": "HIS416H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE471H1",
    "code": "FRE471H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM447H1",
    "code": "CHM447H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB440H1",
    "code": "EEB440H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL404Y1",
    "code": "POL404Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA400H1",
    "code": "CLA400H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST411H1",
    "code": "HST411H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB420H1",
    "code": "HMB420H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG411H1",
    "code": "RLG411H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL498H1",
    "code": "PHL498H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY425H1",
    "code": "MGY425H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO461H1",
    "code": "ECO461H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC463H1",
    "code": "SMC463H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA489H1",
    "code": "ITA489H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT464H1",
    "code": "MAT464H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT473H1",
    "code": "ACT473H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN412H1",
    "code": "TRN412H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC479H1",
    "code": "SOC479H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC495Y1",
    "code": "NMC495Y1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG426H1",
    "code": "RLG426H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC438H1",
    "code": "CSC438H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW421H1",
    "code": "NEW421H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE492H1",
    "code": "FRE492H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI420H1",
    "code": "CRI420H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR419H1",
    "code": "FOR419H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL443H1",
    "code": "POL443H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA499H1",
    "code": "SLA499H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW450Y1",
    "code": "NEW450Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI432H1",
    "code": "INI432H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA495Y1",
    "code": "USA495Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH426H1",
    "code": "BCH426H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS484H1",
    "code": "HPS484H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS481H1",
    "code": "HPS481H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR492Y1",
    "code": "GGR492Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eur.htm#EUR495H1",
    "code": "EUR495H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM441H1",
    "code": "CHM441H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB434H1",
    "code": "HMB434H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL496H1",
    "code": "PHL496H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM418H1",
    "code": "RSM418H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH496H1",
    "code": "FAH496H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS412H1",
    "code": "EAS412H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW449H1",
    "code": "NEW449H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS423H1",
    "code": "ESS423H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA414H1",
    "code": "STA414H1S",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL452H1",
    "code": "PSL452H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR403H1",
    "code": "FOR403H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS403H1",
    "code": "DTS403H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL486Y1",
    "code": "POL486Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW438H1",
    "code": "NEW438H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST480H1",
    "code": "HST480H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS466H1",
    "code": "HIS466H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA410H1",
    "code": "STA410H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC480H1",
    "code": "SMC480H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC491H1",
    "code": "CSC491H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL411H1",
    "code": "POL411H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO404H1",
    "code": "ECO404H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS404H1",
    "code": "HIS404H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC463H1",
    "code": "CSC463H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT495H1",
    "code": "MAT495H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY426H1",
    "code": "PHY426H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS499H1",
    "code": "CJS499H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI400Y1",
    "code": "INI400Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS417H1",
    "code": "HIS417H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN425Y1",
    "code": "TRN425Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY493H1",
    "code": "PSY493H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH497H1",
    "code": "FAH497H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS491H1",
    "code": "ESS491H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW446H1",
    "code": "NEW446H1F",
    "meeting_sections": [
      {
        "start": "17:30",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC471H1",
    "code": "SMC471H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN435Y1",
    "code": "CDN435Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR410H1",
    "code": "FOR410H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL494H1",
    "code": "POL494H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS459Y1",
    "code": "SDS459Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG468H1",
    "code": "RLG468H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG454H1",
    "code": "ENG454H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY494H1",
    "code": "PSY494H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT454H1",
    "code": "MAT454H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS490H1",
    "code": "CAS490H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB420H1",
    "code": "HMB420H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY405H1",
    "code": "PSY405H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS401H1",
    "code": "HIS401H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT423H1",
    "code": "PRT423H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS434H1",
    "code": "EAS434H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC494H1",
    "code": "VIC494H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST409H1",
    "code": "HST409H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN490Y1",
    "code": "CIN490Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH491H1",
    "code": "FAH491H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK429H1",
    "code": "GRK429H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO403H1",
    "code": "ECO403H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jpe.htm#JPE493H1",
    "code": "JPE493H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS496H1",
    "code": "HIS496H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH481H1",
    "code": "FAH481H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG425H1",
    "code": "ENG425H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM433H1",
    "code": "RSM433H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY405H1",
    "code": "PSY405H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH493Y1",
    "code": "FAH493Y1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS414H1",
    "code": "HIS414H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM426H1",
    "code": "APM426H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL415H1",
    "code": "PHL415H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM459H1",
    "code": "RSM459H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC489Y1",
    "code": "PHC489Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB432H1",
    "code": "HMB432H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL408H1",
    "code": "PHL408H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC451H1",
    "code": "VIC451H1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL472H1",
    "code": "POL472H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT434H1",
    "code": "ANT434H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jfl.htm#JFL477H1",
    "code": "JFL477H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL409H1",
    "code": "POL409H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA499Y1",
    "code": "STA499Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA402H1",
    "code": "USA402H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM414H1",
    "code": "CHM414H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jlp.htm#JLP471H1",
    "code": "JLP471H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV482H1",
    "code": "ENV482H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG490Y1",
    "code": "RLG490Y1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM434H1",
    "code": "CHM434H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jln.htm#JLN427H1",
    "code": "JLN427H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC443H1",
    "code": "CSC443H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "20:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT460H1",
    "code": "ANT460H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT475H1",
    "code": "MAT475H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL462H1",
    "code": "PSL462H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS460H1",
    "code": "EAS460H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG462H1",
    "code": "RLG462H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN452H1",
    "code": "CIN452H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA422H1",
    "code": "SPA422H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK452H1",
    "code": "GRK452H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS486H1",
    "code": "NFS486H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM456H1",
    "code": "RSM456H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS485H1",
    "code": "NFS485H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jra.htm#JRA401H1",
    "code": "JRA401H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB428H1",
    "code": "CSB428H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS436Y1",
    "code": "EAS436Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML451H1",
    "code": "NML451H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP403H1",
    "code": "LMP403H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM422H1",
    "code": "RSM422H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH481Y1",
    "code": "FAH481Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC499Y1",
    "code": "NMC499Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL445H1",
    "code": "POL445H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO409H1",
    "code": "ECO409H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE446H1",
    "code": "FRE446H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB440H1",
    "code": "HMB440H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH497Y1",
    "code": "FAH497Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR424H1",
    "code": "GGR424H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC435H1",
    "code": "SMC435H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL499H1",
    "code": "PHL499H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL499H1",
    "code": "PHL499H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS441H1",
    "code": "ESS441H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL412H1",
    "code": "PHL412H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS467H1",
    "code": "HIS467H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM458H1",
    "code": "RSM458H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN450H1",
    "code": "CIN450H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC410H1",
    "code": "CSC410H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL499H1",
    "code": "PHL499H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO429H1",
    "code": "ECO429H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC454H1",
    "code": "CSC454H1S",
    "meeting_sections": [
      {
        "start": "20:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC490Y1",
    "code": "VIC490Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW430H1",
    "code": "NEW430H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS451H1",
    "code": "WGS451H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA494H1",
    "code": "USA494H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT436H1",
    "code": "MAT436H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA498Y1",
    "code": "SLA498Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC488H1",
    "code": "SOC488H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA401H1",
    "code": "USA401H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL497H1",
    "code": "POL497H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS401H1",
    "code": "DTS401H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB472H1",
    "code": "CSB472H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS400H1",
    "code": "NFS400H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL480H1",
    "code": "PSL480H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC435H1",
    "code": "SMC435H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS477H1",
    "code": "SDS477H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN497Y1",
    "code": "LIN497Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL425H1",
    "code": "PSL425H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW490Y1",
    "code": "NEW490Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST451Y1",
    "code": "HST451Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC495H1",
    "code": "CSC495H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL410H1",
    "code": "POL410H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC401H1",
    "code": "VIC401H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL499H1",
    "code": "PSL499H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS498H1",
    "code": "CAS498H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM483H1",
    "code": "RSM483H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC441Y1",
    "code": "SMC441Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS470H1",
    "code": "HIS470H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG493H1",
    "code": "RLG493H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV432H1",
    "code": "ENV432H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI437Y1",
    "code": "INI437Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG428H1",
    "code": "ENG428H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC491H1",
    "code": "VIC491H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY480Y1",
    "code": "MGY480Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA489H1",
    "code": "ITA489H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS499Y1",
    "code": "HPS499Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC481H1",
    "code": "SOC481H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB488H1",
    "code": "EEB488H1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR492H1",
    "code": "GGR492H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB497H1",
    "code": "CSB497H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT440H1",
    "code": "LAT440H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM411H1",
    "code": "RSM411H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS495Y1",
    "code": "HIS495Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP406H1",
    "code": "LMP406H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG492H1",
    "code": "RLG492H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH485H1",
    "code": "FAH485H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA450H1",
    "code": "ITA450H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA490Y1",
    "code": "ITA490Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL498Y1",
    "code": "PSL498Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN425H1",
    "code": "CDN425H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN421H1",
    "code": "FIN421H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC494H1",
    "code": "VIC494H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC418H1",
    "code": "CSC418H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "19:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "19:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL495Y1",
    "code": "POL495Y1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM435H1",
    "code": "IMM435H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW441H1",
    "code": "NEW441H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM490H1",
    "code": "RSM490H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL410H1",
    "code": "PHL410H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW443H1",
    "code": "NEW443H1F",
    "meeting_sections": [
      {
        "start": "17:30",
        "day": "MO"
      },
      {
        "start": "17:30",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA495H1",
    "code": "ITA495H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT415H1",
    "code": "MAT415H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR491Y1",
    "code": "GGR491Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY484H1",
    "code": "PHY484H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jls.htm#JLS473H1",
    "code": "JLS473H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL450H1",
    "code": "POL450H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_las.htm#LAS400H1",
    "code": "LAS400H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC454H1",
    "code": "CSC454H1F",
    "meeting_sections": [
      {
        "start": "20:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO404H1",
    "code": "ECO404H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS460Y1",
    "code": "WGS460Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM402H1",
    "code": "DRM402H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC490Y1",
    "code": "SMC490Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC458H1",
    "code": "CSC458H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "20:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jra.htm#JRA402H1",
    "code": "JRA402H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA463H1",
    "code": "SLA463H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG404H1",
    "code": "RLG404H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL433H1",
    "code": "POL433H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM466H1",
    "code": "APM466H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS452H1",
    "code": "ESS452H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV492H1",
    "code": "ENV492H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER425H1",
    "code": "GER425H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN431H1",
    "code": "CIN431H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY478H1",
    "code": "PHY478H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS484H1",
    "code": "NFS484H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT420H1",
    "code": "ANT420H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS493H1",
    "code": "ABS493H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC465H1",
    "code": "SMC465H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM423H1",
    "code": "CHM423H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY460H1",
    "code": "PHY460H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG424H1",
    "code": "ENG424H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH472Y1",
    "code": "BCH472Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC497H1",
    "code": "SOC497H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR401H1",
    "code": "FOR401H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE472H1",
    "code": "IRE472H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS499H1",
    "code": "CJS499H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP410H1",
    "code": "LMP410H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI435H1",
    "code": "CRI435H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW498H1",
    "code": "NEW498H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY406H1",
    "code": "PSY406H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL467H1",
    "code": "POL467H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS485H1",
    "code": "HPS485H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC420H1",
    "code": "PHC420H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC490H1",
    "code": "VIC490H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY451H1",
    "code": "MGY451H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT448H1",
    "code": "MAT448H1F",
    "meeting_sections": [
      {
        "start": "12:30",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA497H1",
    "code": "STA497H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV481H1",
    "code": "ENV481H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI427H1",
    "code": "CRI427H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS493H1",
    "code": "ABS493H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC443H1",
    "code": "CSC443H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB458H1",
    "code": "CSB458H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY435H1",
    "code": "PSY435H1S",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI433H1",
    "code": "INI433H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH493H1",
    "code": "FAH493H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS496H1",
    "code": "ABS496H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS401H1",
    "code": "EAS401H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML410Y1",
    "code": "NML410Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB497H1",
    "code": "EEB497H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM429H1",
    "code": "RSM429H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA435H1",
    "code": "SLA435H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR433H1",
    "code": "GGR433H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL495Y1",
    "code": "POL495Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV451H1",
    "code": "ENV451H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER490H1",
    "code": "GER490H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC402H1",
    "code": "VIC402H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN420Y1",
    "code": "CDN420Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB499Y1",
    "code": "HMB499Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL481H1",
    "code": "POL481H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR492H1",
    "code": "GGR492H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB431H1",
    "code": "CSB431H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL407H1",
    "code": "PHL407H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS450H1",
    "code": "WGS450H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW491H1",
    "code": "NEW491H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY470H1",
    "code": "MGY470H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eur.htm#EUR495H1",
    "code": "EUR495H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL408H1",
    "code": "POL408H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN409H1",
    "code": "TRN409H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT476H1",
    "code": "ANT476H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV440H1",
    "code": "ENV440H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA400H1",
    "code": "SLA400H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB497H1",
    "code": "CSB497H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB429H1",
    "code": "CSB429H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB435H1",
    "code": "CSB435H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG455H1",
    "code": "ENG455H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR434H1",
    "code": "GGR434H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS490H1",
    "code": "HIS490H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS462H1",
    "code": "ESS462H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB499Y1",
    "code": "EEB499Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT445H1",
    "code": "ANT445H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM446H1",
    "code": "CHM446H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG415H1",
    "code": "ENG415H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR403H1",
    "code": "FOR403H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR413H1",
    "code": "GGR413H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS482H1",
    "code": "HPS482H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL492H1",
    "code": "POL492H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI495Y1",
    "code": "UNI495Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC436H1",
    "code": "CSC436H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM455H1",
    "code": "RSM455H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG435H1",
    "code": "ENG435H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC472H1",
    "code": "NMC472H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_usa.htm#USA494H1",
    "code": "USA494H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM492H1",
    "code": "RSM492H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG422H1",
    "code": "RLG422H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA420Y1",
    "code": "SLA420Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL472Y1",
    "code": "PCL472Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC478H1",
    "code": "SOC478H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY426H1",
    "code": "PSY426H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY472H1",
    "code": "PHY472H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG499H1",
    "code": "COG499H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS499Y1",
    "code": "HIS499Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG424H1",
    "code": "ENG424H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM480H1",
    "code": "RSM480H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA475H1",
    "code": "SLA475H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM410H1",
    "code": "CHM410H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH440H1",
    "code": "FAH440H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN411Y1",
    "code": "TRN411Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO431H1",
    "code": "ECO431H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK450H1",
    "code": "GRK450H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE485H1",
    "code": "FRE485H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY430H1",
    "code": "PSY430H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN410H1",
    "code": "CIN410H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC479Y1",
    "code": "VIC479Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH489H1",
    "code": "FAH489H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS498H1",
    "code": "HIS498H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH447H1",
    "code": "BCH447H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA437H1",
    "code": "STA437H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC497H1",
    "code": "SOC497H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL402H1",
    "code": "PCL402H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH457H1",
    "code": "FAH457H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcj.htm#PCJ499H1",
    "code": "PCJ499H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB495H1",
    "code": "EEB495H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB430H1",
    "code": "CSB430H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY434H1",
    "code": "PSY434H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC434H1",
    "code": "SMC434H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG441H1",
    "code": "RLG441H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL486H1",
    "code": "POL486H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL475Y1",
    "code": "POL475Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY400Y1",
    "code": "PSY400Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC436H1",
    "code": "SMC436H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG438H1",
    "code": "ENG438H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE491H1",
    "code": "FRE491H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS402H1",
    "code": "EAS402H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY470H1",
    "code": "PSY470H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC490H1",
    "code": "VIC490H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA453H1",
    "code": "STA453H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS419H1",
    "code": "EAS419H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL469H1",
    "code": "POL469H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB452H1",
    "code": "CSB452H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS430H1",
    "code": "HIS430H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS410Y1",
    "code": "EAS410Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT470H1",
    "code": "ACT470H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI402H1",
    "code": "INI402H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS419H1",
    "code": "HIS419H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG454H1",
    "code": "RLG454H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mij.htm#MIJ485H1",
    "code": "MIJ485H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC463H1",
    "code": "NMC463H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV493H1",
    "code": "ENV493H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS461H1",
    "code": "ESS461H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH478H1",
    "code": "BCH478H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS435H1",
    "code": "EAS435H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS490H1",
    "code": "CJS490H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM443H1",
    "code": "CHM443H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR499H1",
    "code": "GGR499H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK428H1",
    "code": "GRK428H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM461H1",
    "code": "RSM461H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT457H1",
    "code": "MAT457H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG491H1",
    "code": "RLG491H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY420H1",
    "code": "MGY420H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP405Y1",
    "code": "LMP405Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG493H1",
    "code": "RLG493H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT497Y1",
    "code": "ANT497Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL474Y1",
    "code": "PCL474Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL438H1",
    "code": "POL438H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM462H1",
    "code": "RSM462H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcj.htm#PCJ499H1",
    "code": "PCJ499H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS496H1",
    "code": "EAS496H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA430H1",
    "code": "SLA430H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL406H1",
    "code": "POL406H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST407H1",
    "code": "HST407H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM428H1",
    "code": "RSM428H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS478H1",
    "code": "SDS478H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY405H1",
    "code": "PHY405H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC497H1",
    "code": "NMC497H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS491H1",
    "code": "ESS491H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL470H1",
    "code": "PCL470H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH425H1",
    "code": "BCH425H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS431H1",
    "code": "HPS431H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG499H1",
    "code": "COG499H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG469Y1",
    "code": "RLG469Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC499Y1",
    "code": "NMC499Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE430H1",
    "code": "IRE430H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN420Y1",
    "code": "FIN420Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC494Y1",
    "code": "CSC494Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA412H1",
    "code": "SLA412H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL496H1",
    "code": "POL496H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM424H1",
    "code": "RSM424H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN456H1",
    "code": "LIN456H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY426H1",
    "code": "PHY426H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV481H1",
    "code": "ENV481H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI413H1",
    "code": "INI413H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST440H1",
    "code": "HST440H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA496H1",
    "code": "STA496H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW495Y1",
    "code": "NEW495Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM416H1",
    "code": "CHM416H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC466H1",
    "code": "SMC466H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV482H1",
    "code": "ENV482H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC484H1",
    "code": "NMC484H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL435H1",
    "code": "POL435H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH441H1",
    "code": "BCH441H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL495H1",
    "code": "PHL495H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA490Y1",
    "code": "STA490Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO463H1",
    "code": "ECO463H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER462H1",
    "code": "GER462H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY494H1",
    "code": "PSY494H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO430Y1",
    "code": "ECO430Y1Y",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT438H1",
    "code": "ANT438H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bcb.htm#BCB420H1",
    "code": "BCB420H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT451H1",
    "code": "ACT451H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM415H1",
    "code": "RSM415H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW491H1",
    "code": "NEW491H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC448H1",
    "code": "SOC448H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN400H1",
    "code": "TRN400H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC495Y1",
    "code": "NMC495Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO425H1",
    "code": "ECO425H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST464H1",
    "code": "HST464H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS490Y1",
    "code": "SDS490Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB495H1",
    "code": "EEB495H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG471H1",
    "code": "RLG471H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL401H1",
    "code": "PHL401H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA400H1",
    "code": "CLA400H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY450H1",
    "code": "PHY450H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML460Y1",
    "code": "NML460Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC448H1",
    "code": "CSC448H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL443H1",
    "code": "POL443H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY424H1",
    "code": "PHY424H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY487H1",
    "code": "PHY487H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC496H1",
    "code": "SOC496H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT442H1",
    "code": "LAT442H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH496Y1",
    "code": "FAH496Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pln.htm#PLN420H1",
    "code": "PLN420H1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS452H1",
    "code": "HIS452H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM432H1",
    "code": "RSM432H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW469Y1",
    "code": "NEW469Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG434H1",
    "code": "ENG434H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN496H1",
    "code": "LIN496H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC496H1",
    "code": "NMC496H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA498Y1",
    "code": "STA498Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH493H1",
    "code": "FAH493H1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM415H1",
    "code": "CHM415H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY427H1",
    "code": "PSY427H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS458H1",
    "code": "SDS458H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM437H1",
    "code": "RSM437H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA402H1",
    "code": "CLA402H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN451H1",
    "code": "LIN451H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI496H1",
    "code": "UNI496H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM457H1",
    "code": "RSM457H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM437H1",
    "code": "CHM437H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC467H1",
    "code": "SMC467H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM455H1",
    "code": "RSM455H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB472H1",
    "code": "HMB472H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL471H1",
    "code": "POL471H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG415H1",
    "code": "ENG415H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eur.htm#EUR498H1",
    "code": "EUR498H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH495H1",
    "code": "ARH495H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS466H1",
    "code": "HIS466H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR420H1",
    "code": "GGR420H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL402H1",
    "code": "PHL402H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS400H1",
    "code": "CAS400H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE446H1",
    "code": "IRE446H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM450H1",
    "code": "RSM450H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA401H1",
    "code": "CLA401H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA496H1",
    "code": "STA496H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA420H1",
    "code": "SPA420H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM462H1",
    "code": "RSM462H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT409H1",
    "code": "MAT409H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY424H1",
    "code": "PSY424H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL459Y1",
    "code": "POL459Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS408H1",
    "code": "EAS408H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL472H1",
    "code": "PSL472H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA401H1",
    "code": "CLA401H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM411H1",
    "code": "DRM411H1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO431H1",
    "code": "ECO431H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jns.htm#JNS450H1",
    "code": "JNS450H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY492H1",
    "code": "PHY492H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL404H1",
    "code": "PSL404H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL432H1",
    "code": "PSL432H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC446H1",
    "code": "NMC446H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG444H1",
    "code": "ENG444H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM484H1",
    "code": "RSM484H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC476H1",
    "code": "VIC476H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC462H1",
    "code": "SMC462H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN481H1",
    "code": "LIN481H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR430H1",
    "code": "GGR430H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS460H1",
    "code": "ABS460H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL465H1",
    "code": "PCL465H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB499Y1",
    "code": "CSB499Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB466H1",
    "code": "EEB466H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS488H1",
    "code": "NFS488H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN412H1",
    "code": "TRN412H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL461H1",
    "code": "PCL461H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC494H1",
    "code": "VIC494H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG490Y1",
    "code": "RLG490Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB406H1",
    "code": "HMB406H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG411H1",
    "code": "RLG411H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM488H1",
    "code": "DRM488H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL413H1",
    "code": "POL413H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA454H1",
    "code": "SPA454H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC404H1",
    "code": "CSC404H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL434H1",
    "code": "POL434H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH493H1",
    "code": "FAH493H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH495H1",
    "code": "FAH495H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM461H1",
    "code": "APM461H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV493H1",
    "code": "ENV493H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC427H1",
    "code": "SOC427H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC498H1",
    "code": "SOC498H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pln.htm#PLN425H1",
    "code": "PLN425H1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC469Y1",
    "code": "NMC469Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB450H1",
    "code": "HMB450H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB460H1",
    "code": "CSB460H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC412H1",
    "code": "SOC412H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM485Y1",
    "code": "DRM485Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC401H1",
    "code": "VIC401H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcj.htm#PCJ461H1",
    "code": "PCJ461H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL413H1",
    "code": "PHL413H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL404H1",
    "code": "PHL404H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC494H1",
    "code": "CSC494H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT466H1",
    "code": "ACT466H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM490Y1",
    "code": "DRM490Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY452H1",
    "code": "PHY452H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS482H1",
    "code": "HPS482H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_dts.htm#DTS406H1",
    "code": "DTS406H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY475H1",
    "code": "PSY475H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL426H1",
    "code": "POL426H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY427H1",
    "code": "PSY427H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE488H1",
    "code": "FRE488H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC444H1",
    "code": "VIC444H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA422H1",
    "code": "STA422H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_uni.htm#UNI496H1",
    "code": "UNI496H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG494Y1",
    "code": "RLG494Y1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT473H1",
    "code": "ANT473H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA460Y1",
    "code": "ITA460Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT429H1",
    "code": "LAT429H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT411H1",
    "code": "ANT411H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT496H1",
    "code": "MAT496H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM491H1",
    "code": "RSM491H1S",
    "meeting_sections": [
      {
        "start": "19:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL496H1",
    "code": "PHL496H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC480H1",
    "code": "VIC480H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER400H1",
    "code": "GER400H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT441H1",
    "code": "ANT441H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT486H1",
    "code": "ANT486H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC471H1",
    "code": "NMC471H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY428H1",
    "code": "MGY428H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC446H1",
    "code": "CSC446H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY495H1",
    "code": "PSY495H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS490H1",
    "code": "ESS490H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC491H1",
    "code": "NMC491H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR492H1",
    "code": "GGR492H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM491H1",
    "code": "DRM491H1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS405Y1",
    "code": "HIS405Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT499H1",
    "code": "ANT499H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG492H1",
    "code": "RLG492H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jls.htm#JLS476H1",
    "code": "JLS476H1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH491Y1",
    "code": "FAH491Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT471H1",
    "code": "ACT471H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT415Y1",
    "code": "ANT415Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4), The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP415H1",
    "code": "LMP415H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN478H1",
    "code": "TRN478H1F",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jls.htm#JLS472H1",
    "code": "JLS472H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY435H1",
    "code": "PSY435H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY406H1",
    "code": "PSY406H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM403Y1",
    "code": "DRM403Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM434H1",
    "code": "RSM434H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM462H1",
    "code": "APM462H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN477H1",
    "code": "TRN477H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY429H1",
    "code": "PHY429H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fin.htm#FIN421H1",
    "code": "FIN421H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN400H1",
    "code": "TRN400H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL498H1",
    "code": "PHL498H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_las.htm#LAS410H1",
    "code": "LAS410H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO426H1",
    "code": "ECO426H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eth.htm#ETH401H1",
    "code": "ETH401H1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN499H1",
    "code": "LIN499H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN406H1",
    "code": "TRN406H1S",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH484H1",
    "code": "FAH484H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP408H1",
    "code": "LMP408H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB433H1",
    "code": "HMB433H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB432H1",
    "code": "CSB432H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA442H1",
    "code": "STA442H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC428H1",
    "code": "CSC428H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT496H1",
    "code": "MAT496H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC493H1",
    "code": "SOC493H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_arh.htm#ARH495H1",
    "code": "ARH495H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT452H1",
    "code": "ANT452H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM491H1",
    "code": "DRM491H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL472Y1",
    "code": "PCL472Y1S",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN432H1",
    "code": "LIN432H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC491H1",
    "code": "NMC491H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL406H1",
    "code": "PHL406H1F",
    "meeting_sections": [
      {
        "start": "15:30",
        "day": "TH"
      },
      {
        "start": "15:30",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO418H1",
    "code": "ECO418H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA480H1",
    "code": "SPA480H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS494Y1",
    "code": "NFS494Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jra.htm#JRA401H1",
    "code": "JRA401H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML459H1",
    "code": "NML459H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST425Y1",
    "code": "AST425Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS425H1",
    "code": "ESS425H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jra.htm#JRA437H1",
    "code": "JRA437H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR431H1",
    "code": "GGR431H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH486H1",
    "code": "FAH486H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT498Y1",
    "code": "ACT498Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH494Y1",
    "code": "FAH494Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML421Y1",
    "code": "NML421Y1Y",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM427H1",
    "code": "RSM427H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT450H1",
    "code": "ANT450H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB473H1",
    "code": "CSB473H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI425H1",
    "code": "CRI425H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH449H1",
    "code": "BCH449H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC476H1",
    "code": "NMC476H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO428H1",
    "code": "ECO428H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT435H1",
    "code": "ANT435H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA452H1",
    "code": "STA452H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT498H1",
    "code": "ANT498H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS434H1",
    "code": "WGS434H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI428H1",
    "code": "CRI428H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE489H1",
    "code": "FRE489H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM496H1",
    "code": "APM496H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS481H1",
    "code": "HIS481H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY431H1",
    "code": "PHY431H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcj.htm#PCJ499Y1",
    "code": "PCJ499Y1Y",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC491H1",
    "code": "SOC491H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT430H1",
    "code": "LAT430H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB460H1",
    "code": "EEB460H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS483H1",
    "code": "HPS483H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS491H1",
    "code": "CJS491H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE431H1",
    "code": "IRE431H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL469H1",
    "code": "PCL469H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL495Y1",
    "code": "POL495Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN419Y1",
    "code": "TRN419Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS483H1",
    "code": "HPS483H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG490Y1",
    "code": "RLG490Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH495Y1",
    "code": "FAH495Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT437H1",
    "code": "MAT437H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW429H1",
    "code": "NEW429H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC413H1",
    "code": "SMC413H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO414H1",
    "code": "ECO414H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM499Y1",
    "code": "CHM499Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI490H1",
    "code": "CRI490H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO422H1",
    "code": "ECO422H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN421Y1",
    "code": "TRN421Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bcb.htm#BCB430Y1",
    "code": "BCB430Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY496H1",
    "code": "PSY496H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI429H1",
    "code": "CRI429H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS496H1",
    "code": "HPS496H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eur.htm#EUR498H1",
    "code": "EUR498H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY420H1",
    "code": "PSY420H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE491H1",
    "code": "FRE491H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB437H1",
    "code": "HMB437H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY428H1",
    "code": "PHY428H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA431H1",
    "code": "ITA431H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV482H1",
    "code": "ENV482H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT452H1",
    "code": "ACT452H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM429H1",
    "code": "IMM429H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW448H1",
    "code": "NEW448H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS498H1",
    "code": "CAS498H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB443H1",
    "code": "CSB443H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC411H1",
    "code": "CSC411H1S",
    "meeting_sections": [
      {
        "start": "20:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "20:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC490H1",
    "code": "CSC490H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL486H1",
    "code": "PCL486H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH447H1",
    "code": "FAH447H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL443H1",
    "code": "FSL443H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM432H1",
    "code": "CHM432H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY428H1",
    "code": "PHY428H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC416H1",
    "code": "SMC416H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT496H1",
    "code": "ACT496H1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL495H1",
    "code": "PSL495H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA499H1",
    "code": "SLA499H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW471H1",
    "code": "NEW471H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS451H1",
    "code": "HIS451H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN410H1",
    "code": "TRN410H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL421Y1",
    "code": "FSL421Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY434H1",
    "code": "MGY434H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT477H1",
    "code": "MAT477H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB474H1",
    "code": "CSB474H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM491H1",
    "code": "DRM491H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL424H1",
    "code": "POL424H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL438H1",
    "code": "POL438H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN492H1",
    "code": "CIN492H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY472H1",
    "code": "PHY472H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC434H1",
    "code": "SMC434H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO437H1",
    "code": "ECO437H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mst.htm#MST400Y1",
    "code": "MST400Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT497Y1",
    "code": "ANT497Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL403H1",
    "code": "PHL403H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA410H1",
    "code": "ITA410H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS489H1",
    "code": "HIS489H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE492H1",
    "code": "FRE492H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcj.htm#PCJ460H1",
    "code": "PCJ460H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH497H1",
    "code": "FAH497H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT481H1",
    "code": "ANT481H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN406H1",
    "code": "TRN406H1F",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO401H1",
    "code": "ECO401H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC421H1",
    "code": "PHC421H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS497H1",
    "code": "ABS497H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL417Y1",
    "code": "POL417Y1Y",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW444H1",
    "code": "NEW444H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH483H1",
    "code": "FAH483H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM462H1",
    "code": "APM462H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM454H1",
    "code": "RSM454H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC465H1",
    "code": "CSC465H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT458H1",
    "code": "MAT458H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC492H1",
    "code": "SOC492H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL481H1",
    "code": "PCL481H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jhp.htm#JHP454Y1",
    "code": "JHP454Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY408H1",
    "code": "PHY408H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI436H1",
    "code": "INI436H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS403H1",
    "code": "ABS403H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL407H1",
    "code": "PHL407H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC404H1",
    "code": "CSC404H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL497H1",
    "code": "PHL497H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC499H1",
    "code": "SOC499H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM438H1",
    "code": "RSM438H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS481H1",
    "code": "HPS481H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE491H1",
    "code": "FRE491H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH481H1",
    "code": "FAH481H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY421H1",
    "code": "PSY421H1F",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM427H1",
    "code": "CHM427H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA434H1",
    "code": "SLA434H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL410H1",
    "code": "POL410H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC495H1",
    "code": "CSC495H1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC494Y1",
    "code": "VIC494Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS496H1",
    "code": "ABS496H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM450Y1",
    "code": "IMM450Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS460Y1",
    "code": "SDS460Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS404H1",
    "code": "HIS404H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY479Y1",
    "code": "PHY479Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO451H1",
    "code": "ECO451H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH494Y1",
    "code": "FAH494Y1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW453H1",
    "code": "NEW453H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV421H1",
    "code": "ENV421H1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS496H1",
    "code": "EAS496H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT412H1",
    "code": "ANT412H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY405Y1",
    "code": "PSY405Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC430H1",
    "code": "PHC430H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT498H1",
    "code": "ANT498H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC418H1",
    "code": "CSC418H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB490H1",
    "code": "CSB490H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY420H1",
    "code": "PSY420H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM427H1",
    "code": "RSM427H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS434H1",
    "code": "EAS434H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL497H1",
    "code": "POL497H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC480H1",
    "code": "SMC480H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC496H1",
    "code": "SOC496H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS461H1",
    "code": "EAS461H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      },
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB483H1",
    "code": "CSB483H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM480H1",
    "code": "RSM480H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK442H1",
    "code": "GRK442H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT497H1",
    "code": "ACT497H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM423H1",
    "code": "RSM423H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY471H1",
    "code": "PSY471H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM450H1",
    "code": "RSM450H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA437H1",
    "code": "STA437H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jal.htm#JAL401H1",
    "code": "JAL401H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA495H1",
    "code": "ITA495H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB445H1",
    "code": "CSB445H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH493Y1",
    "code": "FAH493Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH490H1",
    "code": "FAH490H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY428H1",
    "code": "PSY428H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH492H1",
    "code": "FAH492H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT499H1",
    "code": "ANT499H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS417H1",
    "code": "EAS417H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB421H1",
    "code": "HMB421H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC494H1",
    "code": "SOC494H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST424H1",
    "code": "AST424H1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW442H1",
    "code": "NEW442H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML456H1",
    "code": "NML456H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL495H1",
    "code": "PHL495H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB436H1",
    "code": "HMB436H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT462H1",
    "code": "ANT462H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sds.htm#SDS458H1",
    "code": "SDS458H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR472H1",
    "code": "GGR472H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN470H1",
    "code": "CIN470H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS496H1",
    "code": "HPS496H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT420H1",
    "code": "PRT420H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB496H1",
    "code": "EEB496H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM454H1",
    "code": "DRM454H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN495Y1",
    "code": "LIN495Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL444Y1",
    "code": "PSL444Y1Y",
    "meeting_sections": [
      {
        "start": "16:30",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM495H1",
    "code": "RSM495H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN404Y1",
    "code": "TRN404Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT477H1",
    "code": "MAT477H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY407H1",
    "code": "PHY407H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS481H1",
    "code": "ESS481H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS450H1",
    "code": "CAS450H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA457H1",
    "code": "STA457H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jph.htm#JPH441H1",
    "code": "JPH441H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT475H1",
    "code": "ANT475H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI434Y1",
    "code": "INI434Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC471H1",
    "code": "NMC471H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC494H1",
    "code": "CSC494H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR499H1",
    "code": "GGR499H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC495H1",
    "code": "CSC495H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC448H1",
    "code": "NMC448H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV492H1",
    "code": "ENV492H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY493H1",
    "code": "PSY493H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB435H1",
    "code": "HMB435H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT498H1",
    "code": "ANT498H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA497H1",
    "code": "STA497H1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY440H1",
    "code": "PSY440H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC493H1",
    "code": "VIC493H1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      },
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_las.htm#LAS410H1",
    "code": "LAS410H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS498H1",
    "code": "HPS498H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cjs.htm#CJS498Y1",
    "code": "CJS498Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM494H1",
    "code": "RSM494H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT428H1",
    "code": "LAT428H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM479H1",
    "code": "CHM479H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL419H1",
    "code": "POL419H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM440H1",
    "code": "CHM440H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM430H1",
    "code": "IMM430H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL460H1",
    "code": "POL460H1S",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS436Y1",
    "code": "EAS436Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS436Y1",
    "code": "EAS436Y1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS431H1",
    "code": "ESS431H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC481Y1",
    "code": "SMC481Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO475H1",
    "code": "ECO475H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM490H1",
    "code": "RSM490H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cla.htm#CLA403H1",
    "code": "CLA403H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR423H1",
    "code": "FOR423H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM430H1",
    "code": "RSM430H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN425H1",
    "code": "CDN425H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO416H1",
    "code": "ECO416H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC491Y1",
    "code": "VIC491Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM421H1",
    "code": "APM421H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM482H1",
    "code": "RSM482H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR400Y1",
    "code": "FOR400Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR493Y1",
    "code": "GGR493Y1Y",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR405H1",
    "code": "GGR405H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN409H1",
    "code": "TRN409H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER430H1",
    "code": "GER430H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR498H1",
    "code": "GGR498H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER410H1",
    "code": "GER410H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT460H1",
    "code": "ACT460H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC420H1",
    "code": "CSC420H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY483H1",
    "code": "PHY483H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR462H1",
    "code": "GGR462H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST410H1",
    "code": "HST410H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL421H1",
    "code": "POL421H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM493H1",
    "code": "RSM493H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI431H1",
    "code": "CRI431H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB430H1",
    "code": "HMB430H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS445H1",
    "code": "ESS445H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST450Y1",
    "code": "HST450Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL440Y1",
    "code": "PSL440Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN430H1",
    "code": "CIN430H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY405H1",
    "code": "PSY405H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN400H1",
    "code": "TRN400H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB473H1",
    "code": "HMB473H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL402H1",
    "code": "POL402H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY471H1",
    "code": "PSY471H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT401H1",
    "code": "MAT401H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL499H1",
    "code": "PSL499H1S",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW424Y1",
    "code": "NEW424Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3), Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM422H1",
    "code": "RSM422H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI401H1",
    "code": "INI401H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS470Y1",
    "code": "WGS470Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC492H1",
    "code": "VIC492H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC440Y1",
    "code": "VIC440Y1Y",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1), Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY490H1",
    "code": "PSY490H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC491H1",
    "code": "CSC491H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG445H1",
    "code": "ENG445H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB498Y1",
    "code": "EEB498Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR458H1",
    "code": "GGR458H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC495Y1",
    "code": "NMC495Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC469H1",
    "code": "CSC469H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO410H1",
    "code": "ECO410H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC485H1",
    "code": "CSC485H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      },
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC457H1",
    "code": "SMC457H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR419H1",
    "code": "GGR419H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY407H1",
    "code": "PSY407H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG498H1",
    "code": "COG498H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ast.htm#AST430H1",
    "code": "AST430H1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM470H1",
    "code": "RSM470H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK430H1",
    "code": "GRK430H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST400Y1",
    "code": "HST400Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL456Y1",
    "code": "POL456Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE492H1",
    "code": "FRE492H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA497H1",
    "code": "STA497H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS443H1",
    "code": "HIS443H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY429H1",
    "code": "PHY429H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO402H1",
    "code": "ECO402H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jfp.htm#JFP450H1",
    "code": "JFP450H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER490H1",
    "code": "GER490H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS487H1",
    "code": "NFS487H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS484H1",
    "code": "HPS484H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP436H1",
    "code": "LMP436H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cas.htm#CAS498Y1",
    "code": "CAS498Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC412H1",
    "code": "CSC412H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL406H1",
    "code": "PHL406H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY478H1",
    "code": "PHY478H1F",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC406H1",
    "code": "SMC406H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB441H1",
    "code": "HMB441H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ger.htm#GER491Y1",
    "code": "GER491Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT499Y1",
    "code": "ACT499Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA480H1",
    "code": "STA480H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL408H1",
    "code": "PHL408H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC494H1",
    "code": "CSC494H1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN407Y1",
    "code": "TRN407Y1Y",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL484H1",
    "code": "POL484H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY454H1",
    "code": "PHY454H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS463H1",
    "code": "ESS463H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM424H1",
    "code": "RSM424H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hst.htm#HST480H1",
    "code": "HST480H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR498H1",
    "code": "GGR498H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH489H1",
    "code": "FAH489H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sta.htm#STA447H1",
    "code": "STA447H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT485H1",
    "code": "ANT485H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM465H1",
    "code": "RSM465H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE443H1",
    "code": "FRE443H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG414H1",
    "code": "RLG414H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL474Y1",
    "code": "PCL474Y1S",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL470H1",
    "code": "PSL470H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM464H1",
    "code": "RSM464H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH440H1",
    "code": "BCH440H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      },
      {
        "start": "09:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_sla.htm#SLA499H1",
    "code": "SLA499H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bcb.htm#BCB410H1",
    "code": "BCB410H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL497H1",
    "code": "POL497H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL497H1",
    "code": "PHL497H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM426H1",
    "code": "CHM426H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      },
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY456H1",
    "code": "PHY456H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB426H1",
    "code": "CSB426H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL440H1",
    "code": "PHL440H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB455H1",
    "code": "EEB455H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cin.htm#CIN491H1",
    "code": "CIN491H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT416H1",
    "code": "ANT416H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV481H1",
    "code": "ENV481H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_haj.htm#HAJ453H1",
    "code": "HAJ453H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT455H1",
    "code": "ACT455H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC494Y1",
    "code": "VIC494Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB497H1",
    "code": "EEB497H1S",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_trn.htm#TRN405Y1",
    "code": "TRN405Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL450H1",
    "code": "PSL450H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_imm.htm#IMM428H1",
    "code": "IMM428H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_grk.htm#GRK440H1",
    "code": "GRK440H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TH"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML463H1",
    "code": "NML463H1S",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG494Y1",
    "code": "RLG494Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH496H1",
    "code": "FAH496H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT458H1",
    "code": "ANT458H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL490Y1",
    "code": "PHL490Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM441H1",
    "code": "APM441H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lmp.htm#LMP402H1",
    "code": "LMP402H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM435H1",
    "code": "RSM435H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jns.htm#JNS450H1",
    "code": "JNS450H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB450H1",
    "code": "CSB450H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS498Y1",
    "code": "ABS498Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS497H1",
    "code": "HPS497H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS451H1",
    "code": "WGS451H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR416H1",
    "code": "GGR416H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC428H1",
    "code": "CSC428H1F",
    "meeting_sections": [
      {
        "start": "20:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS479H1",
    "code": "EAS479H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC473H1",
    "code": "CSC473H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS485H1",
    "code": "HPS485H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG455H1",
    "code": "ENG455H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC460H1",
    "code": "PHC460H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC493H1",
    "code": "SOC493H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA420H1",
    "code": "SPA420H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL473Y1",
    "code": "PCL473Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY424H1",
    "code": "PSY424H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH473Y1",
    "code": "BCH473Y1Y",
    "meeting_sections": [],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH492Y1",
    "code": "FAH492Y1Y",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT425H1",
    "code": "MAT425H1F",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG435H1",
    "code": "ENG435H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jpr.htm#JPR458H1",
    "code": "JPR458H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC403H1",
    "code": "VIC403H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC494H1",
    "code": "SOC494H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH492H1",
    "code": "FAH492H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV422H1",
    "code": "ENV422H1F",
    "meeting_sections": [
      {
        "start": "18:30",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nfs.htm#NFS490H1",
    "code": "NFS490H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jpr.htm#JPR419H1",
    "code": "JPR419H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_new.htm#NEW451H1",
    "code": "NEW451H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ppg.htm#PPG401H1",
    "code": "PPG401H1S",
    "meeting_sections": [
      {
        "start": "09:30",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS411H1",
    "code": "EAS411H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT474H1",
    "code": "ANT474H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL472H1",
    "code": "FSL472H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB452H1",
    "code": "HMB452H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ire.htm#IRE447H1",
    "code": "IRE447H1F",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC490Y1",
    "code": "SOC490Y1Y",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS423H1",
    "code": "HIS423H1F",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC479H1",
    "code": "SOC479H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fsl.htm#FSL473H1",
    "code": "FSL473H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pcl.htm#PCL477H1",
    "code": "PCL477H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "11:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT452H1",
    "code": "LAT452H1S",
    "meeting_sections": [
      {
        "start": "09:00",
        "day": "MO"
      },
      {
        "start": "09:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB471H1",
    "code": "HMB471H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT448H1",
    "code": "MAT448H1S",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB470H1",
    "code": "HMB470H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG458H1",
    "code": "RLG458H1S",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM461H1",
    "code": "RSM461H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_chm.htm#CHM417H1",
    "code": "CHM417H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO462H1",
    "code": "ECO462H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB433H1",
    "code": "EEB433H1S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH494H1",
    "code": "FAH494H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM487H1",
    "code": "DRM487H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC492Y1",
    "code": "VIC492Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR497H1",
    "code": "GGR497H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL451H1",
    "code": "PHL451H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC411H1",
    "code": "CSC411H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "FR"
      },
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "11:00",
        "day": "WE"
      },
      {
        "start": "15:00",
        "day": "WE"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM423H1",
    "code": "RSM423H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      },
      {
        "start": "18:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC490H1",
    "code": "VIC490H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS495Y1",
    "code": "HPS495Y1Y",
    "meeting_sections": [],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG401H1",
    "code": "COG401H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS410H1",
    "code": "HIS410H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL476H1",
    "code": "POL476H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "WE"
      },
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH422H1",
    "code": "BCH422H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      },
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL485H1",
    "code": "POL485H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG499Y1",
    "code": "ENG499Y1Y",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT402H1",
    "code": "MAT402H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      },
      {
        "start": "18:00",
        "day": "MO"
      },
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC492H1",
    "code": "VIC492H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY489H1",
    "code": "PHY489H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH479H1",
    "code": "BCH479H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS463H1",
    "code": "WGS463H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS446H1",
    "code": "HIS446H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB402H1",
    "code": "HMB402H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ini.htm#INI435H1",
    "code": "INI435H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB422H1",
    "code": "HMB422H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eas.htm#EAS435H1",
    "code": "EAS435H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR421H1",
    "code": "GGR421H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL496H1",
    "code": "POL496H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cog.htm#COG402H1",
    "code": "COG402H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA421H1",
    "code": "SPA421H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ana.htm#ANA400H1",
    "code": "ANA400H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG473H1",
    "code": "RLG473H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH445H1",
    "code": "BCH445H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS497H1",
    "code": "HPS497H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nml.htm#NML463H1",
    "code": "NML463H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC488H1",
    "code": "CSC488H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      },
      {
        "start": "13:00",
        "day": "TH"
      },
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rlg.htm#RLG433H1",
    "code": "RLG433H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_rsm.htm#RSM466H1",
    "code": "RSM466H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB492H1",
    "code": "CSB492H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT480Y1",
    "code": "ANT480Y1Y",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_act.htm#ACT475H1",
    "code": "ACT475H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TU"
      },
      {
        "start": "17:30",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY491H1",
    "code": "PHY491H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "MO"
      },
      {
        "start": "15:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS495Y1",
    "code": "ABS495Y1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO459H1",
    "code": "ECO459H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mgy.htm#MGY440H1",
    "code": "MGY440H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB447H1",
    "code": "CSB447H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_spa.htm#SPA467H1",
    "code": "SPA467H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH491H1",
    "code": "FAH491H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eng.htm#ENG414H1",
    "code": "ENG414H1F",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB489H1",
    "code": "HMB489H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY485H1",
    "code": "PHY485H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS492Y1",
    "code": "ESS492Y1Y",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC457H1",
    "code": "SMC457H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_wgs.htm#WGS426H1",
    "code": "WGS426H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV452H1",
    "code": "ENV452H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cri.htm#CRI480H1",
    "code": "CRI480H1F",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_smc.htm#SMC451Y1",
    "code": "SMC451Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC447H1",
    "code": "NMC447H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_drm.htm#DRM401H1",
    "code": "DRM401H1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT497Y1",
    "code": "ANT497Y1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_mat.htm#MAT495H1",
    "code": "MAT495H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "MO"
      },
      {
        "start": "12:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY409H1",
    "code": "PSY409H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC486H1",
    "code": "CSC486H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      },
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE483H1",
    "code": "FRE483H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hps.htm#HPS498H1",
    "code": "HPS498H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB498Y1",
    "code": "CSB498Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eur.htm#EUR495H1",
    "code": "EUR495H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH461H1",
    "code": "FAH461H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS426H1",
    "code": "HIS426H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT499H1",
    "code": "ANT499H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO464H1",
    "code": "ECO464H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_apm.htm#APM446H1",
    "code": "APM446H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "TH"
      },
      {
        "start": "16:00",
        "day": "FR"
      },
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT484H1",
    "code": "ANT484H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY450H1",
    "code": "PSY450H1S",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE441H1",
    "code": "FRE441H1F",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lin.htm#LIN458H1",
    "code": "LIN458H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fre.htm#FRE490Y1",
    "code": "FRE490Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY424H1",
    "code": "PHY424H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "09:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_cdn.htm#CDN405H1",
    "code": "CDN405H1F",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL405H1",
    "code": "PHL405H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY426H1",
    "code": "PSY426H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Thought, Belief and Behaviour (2)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psy.htm#PSY406Y1",
    "code": "PSY406Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS498H1",
    "code": "HIS498H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ita.htm#ITA490Y1",
    "code": "ITA490Y1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ggr.htm#GGR497H1",
    "code": "GGR497H1F",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phl.htm#PHL489Y1",
    "code": "PHL489Y1Y",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "FR"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH421H1",
    "code": "FAH421H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH406H1",
    "code": "FAH406H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_jeh.htm#JEH455H1",
    "code": "JEH455H1S",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS433H1",
    "code": "HIS433H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_hmb.htm#HMB462H1",
    "code": "HMB462H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csc.htm#CSC401H1",
    "code": "CSC401H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "WE"
      },
      {
        "start": "10:00",
        "day": "MO"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL496H1",
    "code": "POL496H1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_vic.htm#VIC491H1",
    "code": "VIC491H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_env.htm#ENV493H1",
    "code": "ENV493H1S",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_nmc.htm#NMC477H1",
    "code": "NMC477H1F",
    "meeting_sections": [
      {
        "start": "12:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phy.htm#PHY471Y1",
    "code": "PHY471Y1Y",
    "meeting_sections": [],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS444H1",
    "code": "HIS444H1S",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_csb.htm#CSB427H1",
    "code": "CSB427H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS412Y1",
    "code": "HIS412Y1Y",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS495Y1",
    "code": "ABS495Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH444H1",
    "code": "BCH444H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TH"
      },
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO431H1",
    "code": "ECO431H1Y",
    "meeting_sections": [],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS493H1",
    "code": "HIS493H1S",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_pol.htm#POL499Y1",
    "code": "POL499Y1Y",
    "meeting_sections": [
      {
        "start": "16:00",
        "day": "TH"
      }
    ],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH495H1",
    "code": "FAH495H1F",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eco.htm#ECO439H1",
    "code": "ECO439H1S",
    "meeting_sections": [
      {
        "start": "15:00",
        "day": "TU"
      },
      {
        "start": "15:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_abs.htm#ABS494Y1",
    "code": "ABS494Y1Y",
    "meeting_sections": [],
    "breadth_req": ""
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_lat.htm#LAT450H1",
    "code": "LAT450H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      },
      {
        "start": "14:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_for.htm#FOR416H1",
    "code": "FOR416H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_his.htm#HIS460H1",
    "code": "HIS460H1S",
    "meeting_sections": [
      {
        "start": "17:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_soc.htm#SOC483H1",
    "code": "SOC483H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "TU"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ant.htm#ANT484H1",
    "code": "ANT484H1F",
    "meeting_sections": [
      {
        "start": "10:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Society and its Institutions (3)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_psl.htm#PSL420H1",
    "code": "PSL420H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH448H1",
    "code": "BCH448H1F",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "WE"
      },
      {
        "start": "13:00",
        "day": "MO"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_fah.htm#FAH494H1",
    "code": "FAH494H1S",
    "meeting_sections": [],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_eeb.htm#EEB428H1",
    "code": "EEB428H1S",
    "meeting_sections": [
      {
        "start": "13:00",
        "day": "FR"
      },
      {
        "start": "10:00",
        "day": "FR"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_bch.htm#BCH446H1",
    "code": "BCH446H1F",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "WE"
      }
    ],
    "breadth_req": "Living Things and Their Environment (4)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_phc.htm#PHC435H1",
    "code": "PHC435H1S",
    "meeting_sections": [
      {
        "start": "14:00",
        "day": "TU"
      }
    ],
    "breadth_req": "The Physical and Mathematical Universes (5)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_prt.htm#PRT458H1",
    "code": "PRT458H1S",
    "meeting_sections": [
      {
        "start": "18:00",
        "day": "TH"
      }
    ],
    "breadth_req": "Creative and Cultural Representations (1)"
  },
  {
    "link": "http://calendar.artsci.utoronto.ca/crs_ess.htm#ESS490H0",
    "code": "ESS490H0S",
    "meeting_sections": [
      {
        "start": "11:00",
        "day": "TU"
      }
    ],
    "breadth_req": ""
  }
]
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
	return output;
}
function dictSearch(day, time, sem, year, breadth) {
    var result = [];
    var myArray = UTSG_COURSES;
	for (var i = 0; i < myArray.length; i++){
	    course = myArray[i];
	    //Make sure the semester matches
	    if (course.code.slice(-1) == sem){
	        //Make sure the year matches
		    if (course.code.charAt(3) == year || year == '0') {
		        //Make sure the breadth matches
			    if (course.breadth_req.indexOf(breadth_index[breadth]) > -1  || breadth === '0') {
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
var filters = [
            { 
              parameter: "summary",
              type: "exclude", //include/exclude
              comparison: "equals", // equals, begins with, contains, regex
              criterias: ["RDO", "STANDBY", "CAO", "ADM - Administration", "LDO", "ALV", "CARERS LEAVE", "SICK"]
            },
            { 
              parameter: "summary",
              type: "exclude", //include/exclude
              comparison: "contains", // equals, begins with, contains, regex
              criterias: ["SAPL", "STBY"]
            }
            /*{ 
              parameter: "summary",
              type: "exclude", //include/exclude
              comparison: "regex", // equals, begins with, contains, regex
              criterias: ["^Pending:", "cancelled"]
            },
            {
              parameter: "categories",
              type: "include", //include/exclude
              comparison: "equals", // equals, begins with, contains, regex
              criterias: ["Meetings"]
            },
            {
              parameter: "dtend",
              type: "include", //include/exclude
              comparison: ">", // <,>, =
              offset: -7
            },
            {
              parameter: "dtstart",
              type: "exclude", //include/exclude
              comparison: ">", // <,>, =
              offset: 14
            } */
          ];

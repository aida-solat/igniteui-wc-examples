

export class SampleTreeData {

    public static getPopulation(): any[] {
        const data = [
            { name:  'Asia', pop: NaN, id: 'Asia' },
            { name:  'Middle East', pop: NaN, id: 'Middle_East' },
            { name:  'Europe', pop: NaN, id: 'Europe' },
            { name:  'North America', pop: NaN, id: 'North_America' },
            { name:  'Central America', pop: NaN, id: 'Central_America' },
            { name:  'South America', pop: NaN, id: 'South_America' },
            { name:  'Africa', pop: NaN, id: 'Africa' },
            { name:  'Oceania', pop: NaN, id: 'Oceania' },
            { name:  'Afghanistan', pop:  35320445, id: 'Afghanistan', parent: 'Middle_East' },
            { name:  'Albania', pop:  3215988, id: 'Albania', parent: 'Europe' },
            { name:  'Algeria', pop:  35980193, id: 'Algeria', parent: 'Middle_East' },
            { name:  'American Samoa', pop:  69543, id: 'American_Samoa', parent: 'Oceania' },
            { name:  'Andorra', pop:  86165, id: 'Andorra', parent: 'Europe' },
            { name:  'Angola', pop:  19618432, id: 'Angola', parent: 'Africa' },
            { name:  'Antigua and Barbuda', pop:  89612, id: 'Antigua_and_Barbuda', parent: 'Central_America' },
            { name:  'Argentina', pop:  40764561, id: 'Argentina', parent: 'South_America' },
            { name:  'Armenia', pop:  3100236, id: 'Armenia', parent: 'Europe' },
            { name:  'Aruba', pop:  108141, id: 'Aruba', parent: 'Central_America' },
            { name:  'Australia', pop:  22323900, id: 'Australia', parent: 'Oceania' },
            { name:  'Austria', pop:  8423635, id: 'Austria', parent: 'Europe' },
            { name:  'Azerbaijan', pop:  9173082, id: 'Azerbaijan', parent: 'Middle_East' },
            { name:  'Bahamas', pop:  347176, id: 'Bahamas', parent: 'Central_America' },
            { name:  'Bahrain', pop:  1323535, id: 'Bahrain', parent: 'Middle_East' },
            { name:  'Bangladesh', pop:  150493658, id: 'Bangladesh', parent: 'Asia' },
            { name:  'Barbados', pop:  273925, id: 'Barbados', parent: 'Central_America' },
            { name:  'Belarus', pop:  9473000, id: 'Belarus', parent: 'Europe' },
            { name:  'Belgium', pop:  11020952, id: 'Belgium', parent: 'Europe' },
            { name:  'Belize', pop:  356600, id: 'Belize', parent: 'Central_America' },
            { name:  'Benin', pop:  9099922, id: 'Benin', parent: 'Africa' },
            { name:  'Bermuda', pop:  64700, id: 'Bermuda', parent: 'Central_America' },
            { name:  'Bhutan', pop:  738267, id: 'Bhutan', parent: 'Asia' },
            { name:  'Bolivia', pop:  10088108, id: 'Bolivia', parent: 'South_America' },
            { name:  'Bosnia and Herzegovina', pop:  3752228, id: 'Bosnia_and_Herzegovina', parent: 'Europe' },
            { name:  'Botswana', pop:  2030738, id: 'Botswana', parent: 'Africa' },
            { name:  'Brazil', pop:  196655014, id: 'Brazil', parent: 'South_America' },
            { name:  'Brunei', pop:  405938, id: 'Brunei', parent: 'Asia' },
            { name:  'Bulgaria', pop:  7348328, id: 'Bulgaria', parent: 'Europe' },
            { name:  'Burkina Faso', pop:  16967845, id: 'Burkina_Faso', parent: 'Africa' },
            { name:  'Burundi', pop:  8575172, id: 'Burundi', parent: 'Africa' },
            { name:  'Cambodia', pop:  14305183, id: 'Cambodia', parent: 'Asia' },
            { name:  'Cameroon', pop:  20030362, id: 'Cameroon', parent: 'Africa' },
            { name:  'Canada', pop:  34483975, id: 'Canada', parent: 'North_America' },
            { name:  'Cape Verde', pop:  500585, id: 'Cape_Verde', parent: 'Africa' },
            { name:  'Cayman Islands', pop:  56729, id: 'Cayman_Islands', parent: 'Central_America' },
            { name:  'Central African Republic', pop:  4486837, id: 'Central_African_Republic', parent: 'Africa' },
            { name:  'Chad', pop:  11525496, id: 'Chad', parent: 'Africa' },
            { name:  'Channel Islands', pop:  153876, id: 'Channel_Islands', parent: 'Europe' },
            { name:  'Chile', pop:  17269525, id: 'Chile', parent: 'South_America' },
            { name:  'China', pop:  1344130000, id: 'China', parent: 'Asia' },
            { name:  'Colombia', pop:  46927125, id: 'Colombia', parent: 'South_America' },
            { name:  'Comoros', pop:  753943, id: 'Comoros', parent: 'Africa' },
            { name:  'Congo, Dem. Rep.', pop:  67757577, id: 'Congo__Dem__Rep_', parent: 'Africa' },
            { name:  'Congo, Rep.', pop:  4139748, id: 'Congo__Rep_', parent: 'Africa' },
            { name:  'Costa Rica', pop:  4726575, id: 'Costa_Rica', parent: 'Central_America' },
            { name:  'Ivory Coast', pop:  20152894, id: 'Cote_d_Ivoire', parent: 'Africa' },
            { name:  'Croatia', pop:  4403000, id: 'Croatia', parent: 'Europe' },
            { name:  'Cuba', pop:  11253665, id: 'Cuba', parent: 'Central_America' },
            { name:  'Curacao', pop:  145619, id: 'Curacao', parent: 'Central_America' },
            { name:  'Cyprus', pop:  1116564, id: 'Cyprus', parent: 'Europe' },
            { name:  'Czech Republic', pop:  10496088, id: 'Czech_Republic', parent: 'Europe' },
            { name:  'Denmark', pop:  5570572, id: 'Denmark', parent: 'Europe' },
            { name:  'Djibouti', pop:  905564, id: 'Djibouti', parent: 'Africa' },
            { name:  'Dominica', pop:  67675, id: 'Dominica', parent: 'Central_America' },
            { name:  'Dominican Republic', pop:  10056181, id: 'Dominican_Republic', parent: 'Central_America' },
            { name:  'Ecuador', pop:  14666055, id: 'Ecuador', parent: 'South_America' },
            { name:  'Egypt, Arab Rep.', pop:  82536770, id: 'Egypt__Arab_Rep_', parent: 'Middle_East' },
            { name:  'El Salvador', pop:  6227491, id: 'El_Salvador', parent: 'Central_America' },
            { name:  'Equatorial Guinea', pop:  720213, id: 'Equatorial_Guinea', parent: 'Africa' },
            { name:  'Eritrea', pop:  5415280, id: 'Eritrea', parent: 'Africa' },
            { name:  'Estonia', pop:  1339928, id: 'Estonia', parent: 'Europe' },
            { name:  'Ethiopia', pop:  84734262, id: 'Ethiopia', parent: 'Africa' },
            { name:  'Faeroe Islands', pop:  48863, id: 'Faeroe_Islands', parent: 'Central_America' },
            { name:  'Fiji', pop:  868406, id: 'Fiji', parent: 'Oceania' },
            { name:  'Finland', pop:  5388272, id: 'Finland', parent: 'Europe' },
            { name:  'France', pop:  65433714, id: 'France', parent: 'Europe' },
            { name:  'French Polynesia', pop:  273777, id: 'French_Polynesia', parent: 'Oceania' },
            { name:  'Gabon', pop:  1534262, id: 'Gabon', parent: 'Africa' },
            { name:  'Gambia', pop:  1776103, id: 'Gambia', parent: 'Africa' },
            { name:  'Georgia', pop:  4486000, id: 'Georgia', parent: 'Europe' },
            { name:  'Germany', pop:  81797673, id: 'Germany', parent: 'Europe' },
            { name:  'Ghana', pop:  24965816, id: 'Ghana', parent: 'Africa' },
            { name:  'Greece', pop:  11300410, id: 'Greece', parent: 'Europe' },
            { name:  'Greenland', pop:  56840, id: 'Greenland', parent: 'North_America' },
            { name:  'Grenada', pop:  104890, id: 'Grenada', parent: 'Central_America' },
            { name:  'Guam', pop:  182111, id: 'Guam', parent: 'Central_America' },
            { name:  'Guatemala', pop:  14757316, id: 'Guatemala', parent: 'Central_America' },
            { name:  'Guinea', pop:  10221808, id: 'Guinea', parent: 'Africa' },
            { name:  'Guinea-Bissau', pop:  1547061, id: 'Guinea-Bissau', parent: 'Africa' },
            { name:  'Guyana', pop:  756040, id: 'Guyana', parent: 'South_America' },
            { name:  'Haiti', pop:  10123787, id: 'Haiti', parent: 'Central_America' },
            { name:  'Honduras', pop:  7754687, id: 'Honduras', parent: 'Central_America' },
            { name:  'Hong Kong SAR, China', pop:  7071600, id: 'Hong_Kong_SAR__China', parent: 'Asia' },
            { name:  'Hungary', pop:  9971727, id: 'Hungary', parent: 'Europe' },
            { name:  'Iceland', pop:  319014, id: 'Iceland', parent: 'Europe' },
            { name:  'India', pop:  1241491960, id: 'India', parent: 'Asia' },
            { name:  'Indonesia', pop:  242325638, id: 'Indonesia', parent: 'Asia' },
            { name:  'Iran, Islamic Rep.', pop:  74798599, id: 'Iran__Islamic_Rep_', parent: 'Middle_East' },
            { name:  'Iraq', pop:  32961959, id: 'Iraq', parent: 'Middle_East' },
            { name:  'Ireland', pop:  4576317, id: 'Ireland', parent: 'Europe' },
            { name:  'Isle of Man', pop:  83327, id: 'Isle_of_Man', parent: 'Europe' },
            { name:  'Israel', pop:  7765900, id: 'Israel', parent: 'Middle_East' },
            { name:  'Italy', pop:  60723603, id: 'Italy', parent: 'Europe' },
            { name:  'Jamaica', pop:  2706500, id: 'Jamaica', parent: 'Central_America' },
            { name:  'Japan', pop:  127817277, id: 'Japan', parent: 'Asia' },
            { name:  'Jordan', pop:  6181000, id: 'Jordan', parent: 'Middle_East' },
            { name:  'Kazakhstan', pop:  16558676, id: 'Kazakhstan', parent: 'Asia' },
            { name:  'Kenya', pop:  41609728, id: 'Kenya', parent: 'Africa' },
            { name:  'Kiribati', pop:  101093, id: 'Kiribati', parent: 'Oceania' },
            { name:  'Korea, Dem. Rep.', pop:  24451285, id: 'Korea__Dem__Rep_', parent: 'Asia' },
            { name:  'Korea, Rep.', pop:  49779000, id: 'Korea__Rep_', parent: 'Asia' },
            { name:  'Kosovo', pop:  1802765, id: 'Kosovo', parent: 'Europe' },
            { name:  'Kuwait', pop:  2818042, id: 'Kuwait', parent: 'Middle_East' },
            { name:  'Kyrgyz Republic', pop:  5514600, id: 'Kyrgyz_Republic', parent: 'Asia' },
            { name:  'Lao PDR', pop:  6288037, id: 'Lao_PDR', parent: 'Asia' },
            { name:  'Latvia', pop:  2058184, id: 'Latvia', parent: 'Europe' },
            { name:  'Lebanon', pop:  4259405, id: 'Lebanon', parent: 'Middle_East' },
            { name:  'Lesotho', pop:  2193843, id: 'Lesotho', parent: 'Africa' },
            { name:  'Liberia', pop:  4128572, id: 'Liberia', parent: 'Africa' },
            { name:  'Libya', pop:  6422772, id: 'Libya', parent: 'Middle_East' },
            { name:  'Liechtenstein', pop:  36304, id: 'Liechtenstein', parent: 'Europe' },
            { name:  'Lithuania', pop:  3030173, id: 'Lithuania', parent: 'Europe' },
            { name:  'Luxembourg', pop:  518252, id: 'Luxembourg', parent: 'Europe' },
            { name:  'Macao SAR, China', pop:  555731, id: 'Macao_SAR__China', parent: 'Asia' },
            { name:  'Macedonia, FYR', pop:  2063893, id: 'Macedonia__FYR', parent: 'Europe' },
            { name:  'Madagascar', pop:  21315135, id: 'Madagascar', parent: 'Africa' },
            { name:  'Malawi', pop:  15380888, id: 'Malawi', parent: 'Africa' },
            { name:  'Malaysia', pop:  28859154, id: 'Malaysia', parent: 'Asia' },
            { name:  'Maldives', pop:  320081, id: 'Maldives', parent: 'Asia' },
            { name:  'Mali', pop:  15839538, id: 'Mali', parent: 'Africa' },
            { name:  'Malta', pop:  415654, id: 'Malta', parent: 'Europe' },
            { name:  'Marshall Islands', pop:  54816, id: 'Marshall_Islands', parent: 'Oceania' },
            { name:  'Mauritania', pop:  3541540, id: 'Mauritania', parent: 'Africa' },
            { name:  'Mauritius', pop:  1286051, id: 'Mauritius', parent: 'Africa' },
            { name:  'Mexico', pop:  114793341, id: 'Mexico', parent: 'North_America' },
            { name:  'Micronesia, Fed. Sts.', pop:  111542, id: 'Micronesia__Fed__Sts_', parent: 'Oceania' },
            { name:  'Moldova', pop:  3559000, id: 'Moldova', parent: 'Europe' },
            { name:  'Monaco', pop:  35427, id: 'Monaco', parent: 'Europe' },
            { name:  'Mongolia', pop:  2800114, id: 'Mongolia', parent: 'Asia' },
            { name:  'Montenegro', pop:  632261, id: 'Montenegro', parent: 'Europe' },
            { name:  'Morocco', pop:  32272974, id: 'Morocco', parent: 'Middle_East' },
            { name:  'Mozambique', pop:  23929708, id: 'Mozambique', parent: 'Africa' },
            { name:  'Myanmar', pop:  48336763, id: 'Myanmar', parent: 'Asia' },
            { name:  'Namibia', pop:  2324004, id: 'Namibia', parent: 'Africa' },
            { name:  'Nepal', pop:  30485798, id: 'Nepal', parent: 'Asia' },
            { name:  'Netherlands', pop:  16693074, id: 'Netherlands', parent: 'Europe' },
            { name:  'New Caledonia', pop:  254024, id: 'New_Caledonia', parent: 'Oceania' },
            { name:  'New Zealand', pop:  4405200, id: 'New_Zealand', parent: 'Oceania' },
            { name:  'Nicaragua', pop:  5869859, id: 'Nicaragua', parent: 'Central_America' },
            { name:  'Niger', pop:  16068994, id: 'Niger', parent: 'Africa' },
            { name:  'Nigeria', pop:  162470737, id: 'Nigeria', parent: 'Africa' },
            { name:  'Northern Mariana Islands', pop:  61174, id: 'Northern_Mariana_Islands', parent: 'Central_America' },
            { name:  'Norway', pop:  4953088, id: 'Norway', parent: 'Europe' },
            { name:  'Oman', pop:  2846145, id: 'Oman', parent: 'Middle_East' },
            { name:  'Pakistan', pop:  176745364, id: 'Pakistan', parent: 'Middle_East' },
            { name:  'Palau', pop:  20609, id: 'Palau', parent: 'Oceania' },
            { name:  'Panama', pop:  3571185, id: 'Panama', parent: 'Central_America' },
            { name:  'Papua New Guinea', pop:  7013829, id: 'Papua_New_Guinea', parent: 'Oceania' },
            { name:  'Paraguay', pop:  6568290, id: 'Paraguay', parent: 'South_America' },
            { name:  'Peru', pop:  29399817, id: 'Peru', parent: 'South_America' },
            { name:  'Philippines', pop:  94852030, id: 'Philippines', parent: 'Asia' },
            { name:  'Poland', pop:  38534157, id: 'Poland', parent: 'Europe' },
            { name:  'Portugal', pop:  10556999, id: 'Portugal', parent: 'Europe' },
            { name:  'Puerto Rico', pop:  3706690, id: 'Puerto_Rico', parent: 'Central_America' },
            { name:  'Qatar', pop:  1870041, id: 'Qatar', parent: 'Middle_East' },
            { name:  'Romania', pop:  21384832, id: 'Romania', parent: 'Europe' },
            { name:  'Russian Federation', pop:  142960000, id: 'Russian_Federation', parent: 'Europe' },
            { name:  'Rwanda', pop:  10942950, id: 'Rwanda', parent: 'Africa' },
            { name:  'Samoa', pop:  183874, id: 'Samoa', parent: 'Oceania' },
            { name:  'San Marino', pop:  31735, id: 'San_Marino', parent: 'Europe' },
            { name:  'Sao Tome and Principe', pop:  168526, id: 'Sao_Tome_and_Principe', parent: 'Africa' },
            { name:  'Saudi Arabia', pop:  28082541, id: 'Saudi_Arabia', parent: 'Middle_East' },
            { name:  'Senegal', pop:  12767556, id: 'Senegal', parent: 'Africa' },
            { name:  'Serbia', pop:  7258745, id: 'Serbia', parent: 'Europe' },
            { name:  'Seychelles', pop:  86000, id: 'Seychelles', parent: 'Africa' },
            { name:  'Sierra Leone', pop:  5997486, id: 'Sierra_Leone', parent: 'Africa' },
            { name:  'Singapore', pop:  5183700, id: 'Singapore', parent: 'Asia' },
            { name:  'Sint Maarten', pop:  36609, id: 'Sint_Maarten', parent: 'Europe' },
            { name:  'Slovak Republic', pop:  5398384, id: 'Slovak_Republic', parent: 'Europe' },
            { name:  'Slovenia', pop:  2052843, id: 'Slovenia', parent: 'Europe' },
            { name:  'Solomon Islands', pop:  552267, id: 'Solomon_Islands', parent: 'Oceania' },
            { name:  'Somalia', pop:  9556873, id: 'Somalia', parent: 'Middle_East' },
            { name:  'South Africa', pop:  50586757, id: 'South_Africa', parent: 'Africa' },
            { name:  'South Sudan', pop:  10314021, id: 'South_Sudan', parent: 'Africa' },
            { name:  'Spain', pop:  46174601, id: 'Spain', parent: 'Europe' },
            { name:  'Sri Lanka', pop:  20869000, id: 'Sri_Lanka', parent: 'Asia' },
            { name:  'St. Kitts and Nevis', pop:  53051, id: 'St__Kitts_and_Nevis', parent: 'Central_America' },
            { name:  'St. Lucia', pop:  176000, id: 'St__Lucia', parent: 'Central_America' },
            { name:  'St. Martin (French part)', pop:  30615, id: 'St__Martin__French_part_', parent: 'Europe' },
            { name:  'St. Vincent and the Grenadines', pop:  109365, id: 'St__Vincent_and_the_Grenadines', parent: 'Central_America' },
            { name:  'Sudan', pop:  34318385, id: 'Sudan', parent: 'Africa' },
            { name:  'Suriname', pop:  529419, id: 'Suriname', parent: 'South_America' },
            { name:  'Swaziland', pop:  1067773, id: 'Swaziland', parent: 'Africa' },
            { name:  'Sweden', pop:  9449213, id: 'Sweden', parent: 'Europe' },
            { name:  'Switzerland', pop:  7912398, id: 'Switzerland', parent: 'Europe' },
            { name:  'Syrian Arab Republic', pop:  20820311, id: 'Syrian_Arab_Republic', parent: 'Middle_East' },
            { name:  'Tajikistan', pop:  6976958, id: 'Tajikistan', parent: 'Asia' },
            { name:  'Tanzania', pop:  46218486, id: 'Tanzania', parent: 'Africa' },
            { name:  'Thailand', pop:  69518555, id: 'Thailand', parent: 'Asia' },
            { name:  'Timor-Leste', pop:  1175880, id: 'Timor-Leste', parent: 'Oceania' },
            { name:  'Togo', pop:  6154813, id: 'Togo', parent: 'Africa' },
            { name:  'Tonga', pop:  104509, id: 'Tonga', parent: 'Oceania' },
            { name:  'Trinidad and Tobago', pop:  1346350, id: 'Trinidad_and_Tobago', parent: 'Central_America' },
            { name:  'Tunisia', pop:  10673800, id: 'Tunisia', parent: 'Middle_East' },
            { name:  'Turkey', pop:  73639596, id: 'Turkey', parent: 'Middle_East' },
            { name:  'Turkmenistan', pop:  5105301, id: 'Turkmenistan', parent: 'Asia' },
            { name:  'Turks and Caicos Islands', pop:  39184, id: 'Turks_and_Caicos_Islands', parent: 'Central_America' },
            { name:  'Tuvalu', pop:  9847, id: 'Tuvalu', parent: 'Oceania' },
            { name:  'Uganda', pop:  34509205, id: 'Uganda', parent: 'Africa' },
            { name:  'Ukraine', pop:  45706100, id: 'Ukraine', parent: 'Europe' },
            { name:  'United Arab Emirates', pop:  7890924, id: 'United_Arab_Emirates', parent: 'Middle_East' },
            { name:  'United Kingdom', pop:  62744081, id: 'United_Kingdom', parent: 'Europe' },
            { name:  'United States', pop:  311591917, id: 'United_States', parent: 'North_America' },
            { name:  'Uruguay', pop:  3368595, id: 'Uruguay', parent: 'South_America' },
            { name:  'Uzbekistan', pop:  29341200, id: 'Uzbekistan', parent: 'Asia' },
            { name:  'Vanuatu', pop:  245619, id: 'Vanuatu', parent: 'Oceania' },
            { name:  'Venezuela, RB', pop:  29278000, id: 'Venezuela__RB', parent: 'South_America' },
            { name:  'Vietnam', pop:  87840000, id: 'Vietnam', parent: 'Asia' },
            { name:  'Virgin Islands (U.S.)', pop:  109666, id: 'Virgin_Islands__U_S__', parent: 'Central_America' },
            { name:  'West Bank and Gaza', pop:  3927051, id: 'West_Bank_and_Gaza', parent: 'Middle_East' },
            { name:  'Yemen, Rep.', pop:  24799880, id: 'Yemen__Rep_', parent: 'Middle_East' },
            { name:  'Zambia', pop:  13474959, id: 'Zambia', parent: 'Africa' },
            { name:  'Zimbabwe', pop:  12754378, id: 'Zimbabwe', parent: 'Africa' }
        ];
        return data;
    }
}

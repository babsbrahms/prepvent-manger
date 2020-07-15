$countryArray = [ 
	{'abbr': 'AD', 'name': 'ANDORRA', 'code': '376'},
	{'abbr': 'AE', 'name': 'UNITED ARAB EMIRATES', 'code': '971'},
	{'abbr': 'AF', 'name': 'AFGHANISTAN', 'code': '93'},
	{'abbr': 'AG', 'name': 'ANTIGUA AND BARBUDA', 'code': '1268'},
	{'abbr': 'AI', 'name': 'ANGUILLA', 'code': '1264'},
	{'abbr': 'AL', 'name': 'ALBANIA', 'code': '355'},
	{'abbr': 'AM', 'name': 'ARMENIA', 'code': '374'},
	{'abbr': 'AN', 'name': 'NETHERLANDS ANTILLES', 'code': '599'},
	{'abbr': 'AO', 'name': 'ANGOLA', 'code': '244'},
	{'abbr': 'AQ', 'name': 'ANTARCTICA', 'code': '672'},
	{'abbr': 'AR', 'name': 'ARGENTINA', 'code': '54'},
	{'abbr': 'AS', 'name': 'AMERICAN SAMOA', 'code': '1684'},
	{'abbr': 'AT', 'name': 'AUSTRIA', 'code': '43'},
	{'abbr': 'AU', 'name': 'AUSTRALIA', 'code': '61'},
	{'abbr': 'AW', 'name': 'ARUBA', 'code': '297'},
	{'abbr': 'AZ', 'name': 'AZERBAIJAN', 'code': '994'},
	{'abbr': 'BA', 'name': 'BOSNIA AND HERZEGOVINA', 'code': '387'},
	{'abbr': 'BB', 'name': 'BARBADOS', 'code': '1246'},
	{'abbr': 'BD', 'name': 'BANGLADESH', 'code': '880'},
	{'abbr': 'BE', 'name': 'BELGIUM', 'code': '32'},
	{'abbr': 'BF', 'name': 'BURKINA FASO', 'code': '226'},
	{'abbr': 'BG', 'name': 'BULGARIA', 'code': '359'},
	{'abbr': 'BH', 'name': 'BAHRAIN', 'code': '973'},
	{'abbr': 'BI', 'name': 'BURUNDI', 'code': '257'},
	{'abbr': 'BJ', 'name': 'BENIN', 'code': '229'},
	{'abbr': 'BL', 'name': 'SAINT BARTHELEMY', 'code': '590'},
	{'abbr': 'BM', 'name': 'BERMUDA', 'code': '1441'},
	{'abbr': 'BN', 'name': 'BRUNEI DARUSSALAM', 'code': '673'},
	{'abbr': 'BO', 'name': 'BOLIVIA', 'code': '591'},
	{'abbr': 'BR', 'name': 'BRAZIL', 'code': '55'},
	{'abbr': 'BS', 'name': 'BAHAMAS', 'code': '1242'},
	{'abbr': 'BT', 'name': 'BHUTAN', 'code': '975'},
	{'abbr': 'BW', 'name': 'BOTSWANA', 'code': '267'},
	{'abbr': 'BY', 'name': 'BELARUS', 'code': '375'},
	{'abbr': 'BZ', 'name': 'BELIZE', 'code': '501'},
	{'abbr': 'CA', 'name': 'CANADA', 'code': '1'},
	{'abbr': 'CC', 'name': 'COCOS (KEELING) ISLANDS', 'code': '61'},
	{'abbr': 'CD', 'name': 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'code': '243'},
	{'abbr': 'CF', 'name': 'CENTRAL AFRICAN REPUBLIC', 'code': '236'},
	{'abbr': 'CG', 'name': 'CONGO', 'code': '242'},
	{'abbr': 'CH', 'name': 'SWITZERLAND', 'code': '41'},
	{'abbr': 'CI', 'name': 'COTE D IVOIRE', 'code': '225'},
	{'abbr': 'CK', 'name': 'COOK ISLANDS', 'code': '682'},
	{'abbr': 'CL', 'name': 'CHILE', 'code': '56'},
	{'abbr': 'CM', 'name': 'CAMEROON', 'code': '237'},
	{'abbr': 'CN', 'name': 'CHINA', 'code': '86'},
	{'abbr': 'CO', 'name': 'COLOMBIA', 'code': '57'},
	{'abbr': 'CR', 'name': 'COSTA RICA', 'code': '506'},
	{'abbr': 'CU', 'name': 'CUBA', 'code': '53'},
	{'abbr': 'CV', 'name': 'CAPE VERDE', 'code': '238'},
	{'abbr': 'CX', 'name': 'CHRISTMAS ISLAND', 'code': '61'},
	{'abbr': 'CY', 'name': 'CYPRUS', 'code': '357'},
	{'abbr': 'CZ', 'name': 'CZECH REPUBLIC', 'code': '420'},
	{'abbr': 'DE', 'name': 'GERMANY', 'code': '49'},
	{'abbr': 'DJ', 'name': 'DJIBOUTI', 'code': '253'},
	{'abbr': 'DK', 'name': 'DENMARK', 'code': '45'},
	{'abbr': 'DM', 'name': 'DOMINICA', 'code': '1767'},
	{'abbr': 'DO', 'name': 'DOMINICAN REPUBLIC', 'code': '1809'},
	{'abbr': 'DZ', 'name': 'ALGERIA', 'code': '213'},
	{'abbr': 'EC', 'name': 'ECUADOR', 'code': '593'},
	{'abbr': 'EE', 'name': 'ESTONIA', 'code': '372'},
	{'abbr': 'EG', 'name': 'EGYPT', 'code': '20'},
	{'abbr': 'ER', 'name': 'ERITREA', 'code': '291'},
	{'abbr': 'ES', 'name': 'SPAIN', 'code': '34'},
	{'abbr': 'ET', 'name': 'ETHIOPIA', 'code': '251'},
	{'abbr': 'FI', 'name': 'FINLAND', 'code': '358'},
	{'abbr': 'FJ', 'name': 'FIJI', 'code': '679'},
	{'abbr': 'FK', 'name': 'FALKLAND ISLANDS (MALVINAS)', 'code': '500'},
	{'abbr': 'FM', 'name': 'MICRONESIA, FEDERATED STATES OF', 'code': '691'},
	{'abbr': 'FO', 'name': 'FAROE ISLANDS', 'code': '298'},
	{'abbr': 'FR', 'name': 'FRANCE', 'code': '33'},
	{'abbr': 'GA', 'name': 'GABON', 'code': '241'},
	{'abbr': 'GB', 'name': 'UNITED KINGDOM', 'code': '44'},
	{'abbr': 'GD', 'name': 'GRENADA', 'code': '1473'},
	{'abbr': 'GE', 'name': 'GEORGIA', 'code': '995'},
	{'abbr': 'GH', 'name': 'GHANA', 'code': '233'},
	{'abbr': 'GI', 'name': 'GIBRALTAR', 'code': '350'},
	{'abbr': 'GL', 'name': 'GREENLAND', 'code': '299'},
	{'abbr': 'GM', 'name': 'GAMBIA', 'code': '220'},
	{'abbr': 'GN', 'name': 'GUINEA', 'code': '224'},
	{'abbr': 'GQ', 'name': 'EQUATORIAL GUINEA', 'code': '240'},
	{'abbr': 'GR', 'name': 'GREECE', 'code': '30'},
	{'abbr': 'GT', 'name': 'GUATEMALA', 'code': '502'},
	{'abbr': 'GU', 'name': 'GUAM', 'code': '1671'},
	{'abbr': 'GW', 'name': 'GUINEA-BISSAU', 'code': '245'},
	{'abbr': 'GY', 'name': 'GUYANA', 'code': '592'},
	{'abbr': 'HK', 'name': 'HONG KONG', 'code': '852'},
	{'abbr': 'HN', 'name': 'HONDURAS', 'code': '504'},
	{'abbr': 'HR', 'name': 'CROATIA', 'code': '385'},
	{'abbr': 'HT', 'name': 'HAITI', 'code': '509'},
	{'abbr': 'HU', 'name': 'HUNGARY', 'code': '36'},
	{'abbr': 'ID', 'name': 'INDONESIA', 'code': '62'},
	{'abbr': 'IE', 'name': 'IRELAND', 'code': '353'},
	{'abbr': 'IL', 'name': 'ISRAEL', 'code': '972'},
	{'abbr': 'IM', 'name': 'ISLE OF MAN', 'code': '44'},
	{'abbr': 'IN', 'name': 'INDIA', 'code': '91'},
	{'abbr': 'IQ', 'name': 'IRAQ', 'code': '964'},
	{'abbr': 'IR', 'name': 'IRAN, ISLAMIC REPUBLIC OF', 'code': '98'},
	{'abbr': 'IS', 'name': 'ICELAND', 'code': '354'},
	{'abbr': 'IT', 'name': 'ITALY', 'code': '39'},
	{'abbr': 'JM', 'name': 'JAMAICA', 'code': '1876'},
	{'abbr': 'JO', 'name': 'JORDAN', 'code': '962'},
	{'abbr': 'JP', 'name': 'JAPAN', 'code': '81'},
	{'abbr': 'KE', 'name': 'KENYA', 'code': '254'},
	{'abbr': 'KG', 'name': 'KYRGYZSTAN', 'code': '996'},
	{'abbr': 'KH', 'name': 'CAMBODIA', 'code': '855'},
	{'abbr': 'KI', 'name': 'KIRIBATI', 'code': '686'},
	{'abbr': 'KM', 'name': 'COMOROS', 'code': '269'},
	{'abbr': 'KN', 'name': 'SAINT KITTS AND NEVIS', 'code': '1869'},
	{'abbr': 'KP', 'name': 'KOREA DEMOCRATIC PEOPLES REPUBLIC OF', 'code': '850'},
	{'abbr': 'KR', 'name': 'KOREA REPUBLIC OF', 'code': '82'},
	{'abbr': 'KW', 'name': 'KUWAIT', 'code': '965'},
	{'abbr': 'KY', 'name': 'CAYMAN ISLANDS', 'code': '1345'},
	{'abbr': 'KZ', 'name': 'KAZAKSTAN', 'code': '7'},
	{'abbr': 'LA', 'name': 'LAO PEOPLES DEMOCRATIC REPUBLIC', 'code': '856'},
	{'abbr': 'LB', 'name': 'LEBANON', 'code': '961'},
	{'abbr': 'LC', 'name': 'SAINT LUCIA', 'code': '1758'},
	{'abbr': 'LI', 'name': 'LIECHTENSTEIN', 'code': '423'},
	{'abbr': 'LK', 'name': 'SRI LANKA', 'code': '94'},
	{'abbr': 'LR', 'name': 'LIBERIA', 'code': '231'},
	{'abbr': 'LS', 'name': 'LESOTHO', 'code': '266'},
	{'abbr': 'LT', 'name': 'LITHUANIA', 'code': '370'},
	{'abbr': 'LU', 'name': 'LUXEMBOURG', 'code': '352'},
	{'abbr': 'LV', 'name': 'LATVIA', 'code': '371'},
	{'abbr': 'LY', 'name': 'LIBYAN ARAB JAMAHIRIYA', 'code': '218'},
	{'abbr': 'MA', 'name': 'MOROCCO', 'code': '212'},
	{'abbr': 'MC', 'name': 'MONACO', 'code': '377'},
	{'abbr': 'MD', 'name': 'MOLDOVA, REPUBLIC OF', 'code': '373'},
	{'abbr': 'ME', 'name': 'MONTENEGRO', 'code': '382'},
	{'abbr': 'MF', 'name': 'SAINT MARTIN', 'code': '1599'},
	{'abbr': 'MG', 'name': 'MADAGASCAR', 'code': '261'},
	{'abbr': 'MH', 'name': 'MARSHALL ISLANDS', 'code': '692'},
	{'abbr': 'MK', 'name': 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'code': '389'},
	{'abbr': 'ML', 'name': 'MALI', 'code': '223'},
	{'abbr': 'MM', 'name': 'MYANMAR', 'code': '95'},
	{'abbr': 'MN', 'name': 'MONGOLIA', 'code': '976'},
	{'abbr': 'MO', 'name': 'MACAU', 'code': '853'},
	{'abbr': 'MP', 'name': 'NORTHERN MARIANA ISLANDS', 'code': '1670'},
	{'abbr': 'MR', 'name': 'MAURITANIA', 'code': '222'},
	{'abbr': 'MS', 'name': 'MONTSERRAT', 'code': '1664'},
	{'abbr': 'MT', 'name': 'MALTA', 'code': '356'},
	{'abbr': 'MU', 'name': 'MAURITIUS', 'code': '230'},
	{'abbr': 'MV', 'name': 'MALDIVES', 'code': '960'},
	{'abbr': 'MW', 'name': 'MALAWI', 'code': '265'},
	{'abbr': 'MX', 'name': 'MEXICO', 'code': '52'},
	{'abbr': 'MY', 'name': 'MALAYSIA', 'code': '60'},
	{'abbr': 'MZ', 'name': 'MOZAMBIQUE', 'code': '258'},
	{'abbr': 'NA', 'name': 'NAMIBIA', 'code': '264'},
	{'abbr': 'NC', 'name': 'NEW CALEDONIA', 'code': '687'},
	{'abbr': 'NE', 'name': 'NIGER', 'code': '227'},
	{'abbr': 'NG', 'name': 'NIGERIA', 'code': '234'},
	{'abbr': 'NI', 'name': 'NICARAGUA', 'code': '505'},
	{'abbr': 'NL', 'name': 'NETHERLANDS', 'code': '31'},
	{'abbr': 'NO', 'name': 'NORWAY', 'code': '47'},
	{'abbr': 'NP', 'name': 'NEPAL', 'code': '977'},
	{'abbr': 'NR', 'name': 'NAURU', 'code': '674'},
	{'abbr': 'NU', 'name': 'NIUE', 'code': '683'},
	{'abbr': 'NZ', 'name': 'NEW ZEALAND', 'code': '64'},
	{'abbr': 'OM', 'name': 'OMAN', 'code': '968'},
	{'abbr': 'PA', 'name': 'PANAMA', 'code': '507'},
	{'abbr': 'PE', 'name': 'PERU', 'code': '51'},
	{'abbr': 'PF', 'name': 'FRENCH POLYNESIA', 'code': '689'},
	{'abbr': 'PG', 'name': 'PAPUA NEW GUINEA', 'code': '675'},
	{'abbr': 'PH', 'name': 'PHILIPPINES', 'code': '63'},
	{'abbr': 'PK', 'name': 'PAKISTAN', 'code': '92'},
	{'abbr': 'PL', 'name': 'POLAND', 'code': '48'},
	{'abbr': 'PM', 'name': 'SAINT PIERRE AND MIQUELON', 'code': '508'},
	{'abbr': 'PN', 'name': 'PITCAIRN', 'code': '870'},
	{'abbr': 'PR', 'name': 'PUERTO RICO', 'code': '1'},
	{'abbr': 'PT', 'name': 'PORTUGAL', 'code': '351'},
	{'abbr': 'PW', 'name': 'PALAU', 'code': '680'},
	{'abbr': 'PY', 'name': 'PARAGUAY', 'code': '595'},
	{'abbr': 'QA', 'name': 'QATAR', 'code': '974'},
	{'abbr': 'RO', 'name': 'ROMANIA', 'code': '40'},
	{'abbr': 'RS', 'name': 'SERBIA', 'code': '381'},
	{'abbr': 'RU', 'name': 'RUSSIAN FEDERATION', 'code': '7'},
	{'abbr': 'RW', 'name': 'RWANDA', 'code': '250'},
	{'abbr': 'SA', 'name': 'SAUDI ARABIA', 'code': '966'},
	{'abbr': 'SB', 'name': 'SOLOMON ISLANDS', 'code': '677'},
	{'abbr': 'SC', 'name': 'SEYCHELLES', 'code': '248'},
	{'abbr': 'SD', 'name': 'SUDAN', 'code': '249'},
	{'abbr': 'SE', 'name': 'SWEDEN', 'code': '46'},
	{'abbr': 'SG', 'name': 'SINGAPORE', 'code': '65'},
	{'abbr': 'SH', 'name': 'SAINT HELENA', 'code': '290'},
	{'abbr': 'SI', 'name': 'SLOVENIA', 'code': '386'},
	{'abbr': 'SK', 'name': 'SLOVAKIA', 'code': '421'},
	{'abbr': 'SL', 'name': 'SIERRA LEONE', 'code': '232'},
	{'abbr': 'SM', 'name': 'SAN MARINO', 'code': '378'},
	{'abbr': 'SN', 'name': 'SENEGAL', 'code': '221'},
	{'abbr': 'SO', 'name': 'SOMALIA', 'code': '252'},
	{'abbr': 'SR', 'name': 'SURINAME', 'code': '597'},
	{'abbr': 'ST', 'name': 'SAO TOME AND PRINCIPE', 'code': '239'},
	{'abbr': 'SV', 'name': 'EL SALVADOR', 'code': '503'},
	{'abbr': 'SY', 'name': 'SYRIAN ARAB REPUBLIC', 'code': '963'},
	{'abbr': 'SZ', 'name': 'SWAZILAND', 'code': '268'},
	{'abbr': 'TC', 'name': 'TURKS AND CAICOS ISLANDS', 'code': '1649'},
	{'abbr': 'TD', 'name': 'CHAD', 'code': '235'},
	{'abbr': 'TG', 'name': 'TOGO', 'code': '228'},
	{'abbr': 'TH', 'name': 'THAILAND', 'code': '66'},
	{'abbr': 'TJ', 'name': 'TAJIKISTAN', 'code': '992'},
	{'abbr': 'TK', 'name': 'TOKELAU', 'code': '690'},
	{'abbr': 'TL', 'name': 'TIMOR-LESTE', 'code': '670'},
	{'abbr': 'TM', 'name': 'TURKMENISTAN', 'code': '993'},
	{'abbr': 'TN', 'name': 'TUNISIA', 'code': '216'},
	{'abbr': 'TO', 'name': 'TONGA', 'code': '676'},
	{'abbr': 'TR', 'name': 'TURKEY', 'code': '90'},
	{'abbr': 'TT', 'name': 'TRINIDAD AND TOBAGO', 'code': '1868'},
	{'abbr': 'TV', 'name': 'TUVALU', 'code': '688'},
	{'abbr': 'TW', 'name': 'TAIWAN, PROVINCE OF CHINA', 'code': '886'},
	{'abbr': 'TZ', 'name': 'TANZANIA, UNITED REPUBLIC OF', 'code': '255'},
	{'abbr': 'UA', 'name': 'UKRAINE', 'code': '380'},
	{'abbr': 'UG', 'name': 'UGANDA', 'code': '256'},
	{'abbr': 'US', 'name': 'UNITED STATES', 'code': '1'},
	{'abbr': 'UY', 'name': 'URUGUAY', 'code': '598'},
	{'abbr': 'UZ', 'name': 'UZBEKISTAN', 'code': '998'},
	{'abbr': 'VA', 'name': 'HOLY SEE (VATICAN CITY STATE)', 'code': '39'},
	{'abbr': 'VC', 'name': 'SAINT VINCENT AND THE GRENADINES', 'code': '1784'},
	{'abbr': 'VE', 'name': 'VENEZUELA', 'code': '58'},
	{'abbr': 'VG', 'name': 'VIRGIN ISLANDS, BRITISH', 'code': '1284'},
	{'abbr': 'VI', 'name': 'VIRGIN ISLANDS, U.S.', 'code': '1340'},
	{'abbr': 'VN', 'name': 'VIET NAM', 'code': '84'},
	{'abbr': 'VU', 'name': 'VANUATU', 'code': '678'},
	{'abbr': 'WF', 'name': 'WALLIS AND FUTUNA', 'code': '681'},
	{'abbr': 'WS', 'name': 'SAMOA', 'code': '685'},
	{'abbr': 'XK', 'name': 'KOSOVO', 'code': '381'},
	{'abbr': 'YE', 'name': 'YEMEN', 'code': '967'},
	{'abbr': 'YT', 'name': 'MAYOTTE', 'code': '262'},
	{'abbr': 'ZA', 'name': 'SOUTH AFRICA', 'code': '27'},
	{'abbr': 'ZM', 'name': 'ZAMBIA', 'code': '260'},
	{'abbr': 'ZW', 'name': 'ZIMBABWE', 'code': '263'}
];
// M200 (No.257) 부터 제조시간표'만' 업뎃되어있음
// CR-21 (No.288) 까지 제조시간표 갱신

export var tdollAtkBuffer = [
  { id: 0, name: "", buff: 0, skill: 0 },
  { id: 1, name: "직접입력", buff: 0, skill: 0 },
  { id: 2, name: "Mk23", buff: 36, skill: 20, skillN: 35 },
  { id: 3, name: "P22", buff: 30, skill: 25 },
  { id: 4, name: "그리즐리", buff: 30, skill: 25 },
  { id: 5, name: "K5", buff: 30, skill: 22 },
  { id: 6, name: "컨텐더", buff: 30, skill: "마탄 40" },
  { id: 7, name: "나강 리볼버 MOD", buff: 36, skill: 10 },
  { id: 8, name: "콜트 리볼버 MOD", buff: 24, skill: 25 },
  { id: 9, name: "콜트 리볼버", buff: 24, skill: 22 },
  { id: 10, name: "HK45", buff: 32, skill: 15 },
  { id: 11, name: "PPK", buff: 0, skill: 10 },
  { id: 12, name: "세르듀코프", buff: 24, skill: 20 },
  { id: 13, name: "Bren Ten", buff: 16, skill: 18 },
  { id: 14, name: "CZ52", buff: 20, skill: 20 },
  { id: 15, name: "제리코", buff: 24, skill: 15 },
  { id: 16, name: "스테츠킨", buff: 12, skill: 0 },
  { id: 17, name: "M9", buff: 20, skill: 0 },
  { id: 18, name: "마카로프", buff: 20, skill: 0 },
  { id: 19, name: "92식", buff: 0, skill: 10 },
  { id: 20, name: "MP-446 MOD(바이킹)", buff: 36, skill: 0 },
  { id: 21, name: "MP-446(바이킹)", buff: 28, skill: 0 },
  { id: 22, name: "SPP-1", buff: 12, skill: 0 },
  { id: 23, name: "웰로드", buff: 20, skill: 0 },
  { id: 24, name: "NZ75", buff: 20, skill: 0 },
  { id: 25, name: "59식", buff: 20, skill: 0 },
  { id: 26, name: "CZ75", buff: 16, skill: 0 },
  { id: 27, name: "Spitfire", buff: 30, skill: 0 },
  { id: 28, name: "P226", buff: 20, skill: 0 },
  { id: 29, name: "썬더", buff: 36, skill: 0 },
  { id: 30, name: "MP-443(그라치)", buff: 20, skill: 0 },
  { id: 31, name: "Gsh-18", buff: 24, skill: 0 },
  { id: 32, name: "MP-448(스키프)", buff: 12, skill: 0 },
  { id: 33, name: "Px4 스톰", buff: 24, skill: "치명타 50" },
  { id: 34, name: "질 스팅레이(FBK큰 맥주)", buff: 40, skill: 20 },
  { id: 35, name: "질 스팅레이(AAD브랜티니)", buff: 40, skill: 25 },
  { id: 36, name: "질 스팅레이(ABK피아노 우먼)", buff: 40, skill: 20 },
  { id: 37, name: "질 스팅레이(KKK프린지 위버)", buff: 40, skill: 35 },
  { id: 38, name: "질 스팅레이(슈가 러쉬)", buff: 40, skill: 18 },
  { id: 39, name: "세이 아사기리", buff: 30, skill: 0 },
  { id: 40, name: "P30", buff: 18, skill: 0 },
  { id: 41, name: "데저트 이글", buff: 30, skill: 0 },
  { id: 42, name: "콜트 파이슨", buff: 30, skill: 6, skill_base: 6 },
  { id: 43, name: "C-93", buff: 24, skill: 18 },
  { id: 44, name: "웨블리 리볼버(리더)", buff: 16, skill: 25 },
  { id: 45, name: "웨블리 리볼버", buff: 16, skill: 22 },
  { id: 46, name: "Gsh-18 MOD", buff: 30, skill: 0 },
  { id: 47, name: "HP-35", buff: 30, skill: 18, passive: 8 }
  // {id: , name: '', buff: 0, skill: 0},
];

export var specialBuffer = {
  Contender: 6,
  Px4Storm: 33,
  ColtPython: 42,
  HP_35: 47
};

export var skillListAR = [
  { id: 1, name: "고속사격T (ST AR-15 MOD, 97식)", percentage: 50 },
  { id: 2, name: "고속사격T (OTs-12)", percentage: 60 },
  { id: 3, name: "강행돌파 (ART556, TAR-21)", percentage: 25 },
  { id: 4, name: "강행돌파 (마갈)", percentage: 20 },
  { id: 5, name: "강행돌파 (L85A1)", percentage: 15 },
  { id: 6, name: "민접사격 (Model L)", percentage: 40 },
  { id: 7, name: "백랑의 눈 (AK-12)", percentage: 35 },
  { id: 8, name: "여명의 기염 (CZ2000)", percentage: 50 },
  { id: 9, name: "미래 예지 (64식 소총)", percentage: 80 },
  { id: 10, name: "설한의 쐐기 (M4A1 MOD2)", percentage: -70 },
  { id: 11, name: "아크 기어스 (G36 MOD2)", percentage: 20 },
  { id: 12, name: "그림자 교살곡 (ACR)", percentage: 50 }
];

export var skillListRF = [
  { id: 1, name: "고속사격 (WA2000)", percentage: 75 },
  { id: 2, name: "고속사격 (SVD)", percentage: 65 },
  { id: 3, name: "비상사격 (K31)", percentage: 80 },
  { id: 4, name: "고속사격 (wz.29, Zas M76)", percentage: 60 },
  { id: 5, name: "고속사격 (시모노프, BM59)", percentage: 55 },
  { id: 6, name: "고속사격T (SM-1)", percentage: 40 },
  { id: 7, name: "고속사격T (HK33)", percentage: 60 },
  { id: 8, name: "고속사격N (XM3)", percentage: 100 },
  { id: 9, name: "고속사격N (81식 카빈)", percentage: 90 },
  { id: 10, name: "고속사격N (G43)", percentage: 85 },
  { id: 11, name: "민첩사격 (T-5000)", percentage: 50 },
  { id: 12, name: "민첩사격 (OBR)", percentage: 45 },
  { id: 13, name: "육참골단 (IWS 2000)", percentage: -35 },
  { id: 14, name: "분노의 발상 (Mk 12)", percentage: 30 },
  { id: 15, name: "싸늘한 투지 (FN-49 MOD2)", percentage: 15 },
  { id: 16, name: "럭키 트리거 (R93 - 3스택)", percentage: 33.1 },
  { id: 17, name: "데드라인 (4식)", percentage: 55 }
];

export var skillListSG = [
  { id: 1, name: "광란의 파티 (USAS-12)", percentage: 60 },
  { id: 2, name: "금당현상 (AA-12)", percentage: 80 }
];

export var timetable = [
  { id: 2, type: "HG", name: "M1911", time: "0020" },
  { id: 5, type: "HG", name: "나강 리볼버", time: "0020" },
  { id: 9, type: "HG", name: "P38", time: "0020" },
  { id: 10, type: "HG", name: "PPK", time: "0022" },
  { id: 90, type: "HG", name: "FNP-9", time: "0025" },
  { id: 91, type: "HG", name: "MP-446", time: "0025" },
  { id: 139, type: "HG", name: "Bren Ten", time: "0028" },
  { id: 141, type: "HG", name: "USP Compact", time: "0028" },
  { id: 11, type: "HG", name: "P08", time: "0030" },
  { id: 12, type: "HG", name: "C96", time: "0030" },
  { id: 13, type: "HG", name: "92식", time: "0035" },
  { id: 123, type: "HG", name: "P99", time: "0035" },
  { id: 3, type: "HG", name: "M9", time: "0040" },
  { id: 8, type: "HG", name: "마카로프", time: "0040" },
  { id: 16, type: "HG", name: "아스트라 리볼버", time: "0040" },
  { id: 6, type: "HG", name: "토카레프", time: "0045" },
  { id: 248, type: "HG", name: "제리코", time: "0049" },
  { id: 1, type: "HG", name: "콜트 리볼버", time: "0050" },
  { id: 99, type: "HG", name: "Mk23", time: "0050" },
  { id: 269, type: "HG", name: "P30", time: "0050" },
  { id: 168, type: "HG", name: "Spitfire", time: "0052" },
  { id: 212, type: "HG", name: "K5", time: "0053" },
  { id: 310, type: "HG", name: "Rex Zero 1", time: "0054"},
  { id: 7, type: "HG", name: "스테츠킨", time: "0055" },
  { id: 100, type: "HG", name: "P7", time: "0055" },
  { id: 114, type: "HG", name: "웰로드MkII", time: "0100" },
  { id: 183, type: "HG", name: "컨텐더", time: "0102" },
  { id: 233, type: "HG", name: "Px4 스톰", time: "0104" },
  { id: 97, type: "HG", name: "M950A", time: "0105" },
  { id: 126, type: "HG", name: "NZ75", time: "0105" },
  { id: 285, type: "HG", name: "C-93", time: "0109" },
  { id: 24, type: "SMG", name: "PP-2000", time: "0110" },
  { id: 93, type: "SMG", name: "IDW", time: "0110" },
  { id: 96, type: "HG", name: "그리즐리MkV", time: "0110" },
  { id: 260, type: "HG", name: "PA-15", time: "0115" },

  { id: 33, type: "SMG", name: "m45", time: "0120" },
  { id: 92, type: "SMG", name: "Spectre M4", time: "0120" },
  { id: 94, type: "SMG", name: "64식", time: "0125" },
  { id: 17, type: "SMG", name: "M3", time: "0130" },
  { id: 36, type: "SMG", name: "MP40", time: "0130" },
  { id: 31, type: "SMG", name: "베레타 38형", time: "0130" },
  { id: 303, type: "HG", name: "HP-35", time: "0135" },
  { id: 29, type: "SMG", name: "스텐MkII", time: "0140" },
  { id: 32, type: "SMG", name: "마이크로 우지", time: "0140" },
  { id: 21, type: "SMG", name: "PPSh-41", time: "0150" },
  { id: 178, type: "SMG", name: "F1", time: "0150" },
  { id: 18, type: "SMG", name: "MAC-10", time: "0200" },
  { id: 27, type: "SMG", name: "스콜피온", time: "0200" },
  { id: 116, type: "SMG", name: "Z-62", time: "0205" },
  { id: 22, type: "SMG", name: "PPS-43", time: "0210" },
  { id: 304, type: "SMG", name: "SAF", time: "0210" },
  { id: 336, type:"SMG", name: "PPD-40", time: "0210"},
  { id: 101, type: "SMG", name: "UMP9", time: "0215" },
  { id: 103, type: "SMG", name: "UMP45", time: "0215" },
  { id: 328, type:"SMG", name: "AR-57", time: "0216"},
  { id: 28, type: "SMG", name: "MP7", time: "0218" },
  { id: 137, type: "SMG", name: "PP-19-01", time: "0218" },
  { id: 150, type: "SMG", name: "시프카", time: "0218" },
  { id: 228, type: "SMG", name: "100식", time: "0219" },
  { id: 23, type: "SMG", name: "PP-90", time: "0220" },
  { id: 26, type: "SMG", name: "MP5", time: "0220" },
  { id: 286, type: "SMG", name: "KAC-PDW", time: "0220" },
  { id: 115, type: "SMG", name: "수오미", time: "0225" },
  { id: 213, type: "SMG", name: "C-MS", time: "0228" },
  { id: 245, type: "SMG", name: "P90", time: "0229" },
  { id: 16, type: "SMG", name: "톰슨", time: "0230" },
  { id: 104, type: "SMG", name: "G36C", time: "0230" },
  { id: 135, type: "SMG", name: "SR-3MP", time: "0233" },
  { id: 20, type: "SMG", name: "Vector", time: "0235" },
  { id: 127, type: "SMG", name: "79식", time: "0235" },

  { id: 71, type: "AR", name: "갈릴", time: "0240" },
  { id: 74, type: "AR", name: "SIG-510", time: "0240" },
  { id: 107, type: "AR", name: "F2000", time: "0245" },
  { id: 133, type: "AR", name: "63식", time: "0245" },
  { id: 63, type: "AR", name: "G3", time: "0250" },
  { id: 68, type: "AR", name: "L85A1", time: "0250" },
  { id: 61, type: "AR", name: "StG44", time: "0300" },
  { id: 47, type: "RF", name: "G43", time: "0310" },
  { id: 51, type: "RF", name: "FN-49", time: "0310" },
  { id: 105, type: "AR", name: "OTs-12", time: "0310" },
  { id: 120, type: "AR", name: "ARX-160", time: "0315" },
  { id: 52, type: "RF", name: "BM59", time: "0320" },
  { id: 58, type: "AR", name: "AK-47", time: "0320" },
  { id: 70, type: "AR", name: "FNC", time: "0320" },
  { id: 66, type: "AR", name: "56-1식", time: "0325" },
  { id: 216, type: "AR", name: "XM8", time: "0325" },
  { id: 237, type: "AR", name: "SAR-21", time: "0325" },
  { id: 40, type: "RF", name: "SVT-38", time: "0330" },
  { id: 41, type: "RF", name: "시모노프", time: "0330" },
  { id: 60, type: "AR", name: "AS Val", time: "0330" },
  { id: 69, type: "AR", name: "FAMAS", time: "0330" },
  { id: 72, type: "AR", name: "TAR-21", time: "0330" },
  { id: 118, type: "AR", name: "9A-91", time: "0335" },
  { id: 262, type: "AR", name: "EM-2", time: "0335" },
  { id: 288, type: "AR", name: "CR-21", time: "0335" },
  { id: 37, type: "RF", name: "M14", time: "0340" },
  { id: 44, type: "RF", name: "SV-98", time: "0340" },
  { id: 64, type: "AR", name: "G36", time: "0340" },
  { id: 171, type: "AR", name: "리베롤", time: "0340" },
  { id: 330, type:"AR", name: "FX-05", time: "0340"},
  { id: 106, type: "AR", name: "FAL", time: "0345" },
  { id: 181, type: "AR", name: "T91", time: "0348" },
  { id: 95, type: "RF", name: "한양조 88식", time: "0350" },
  { id: 129, type: "AR", name: "95식", time: "0350" },
  { id: 130, type: "AR", name: "97식", time: "0350" },
  { id: 194, type: "AR", name: "K2", time: "0352" },
  { id: 215, type: "AR", name: "MDR", time: "0353" },
  { id: 65, type: "AR", name: "HK416", time: "0355" },
  { id: 287, type: "AR", name: "SIG-556", time: "0356" },
  { id: 306, type: "AR", name: "AK-Alfa", time: "0356" },
  { id: 338, type:"AR", name: "SIG MCX", time: "0356"},
  { id: 172, type: "AR", name: "RFB", time: "0358" },
  { id: 34, type: "RF", name: "M1 개런드", time: "0400" },
  { id: 122, type: "AR", name: "G11", time: "0404" },
  { id: 270, type: "RF", name: "4식", time: "0404" },
  { id: 62, type: "AR", name: "G41", time: "0405" },
  { id: 196, type: "AR", name: "Zas M21", time: "0405" },
  { id: 243, type: "AR", name: "64식 소총", time: "0406" },
  { id: 313, type:"AR", name: "S-ACR", time: "0408"},
  { id: 205, type: "AR", name: "AN-94", time: "0409" },
  { id: 39, type: "RF", name: "모신나강", time: "0410" },
  { id: 184, type: "RF", name: "T-5000", time: "0410" },
  { id: 236, type: "AR", name: "K11", time: "0411" },
  { id: 206, type: "AR", name: "AK-12", time: "0412" },
  { id: 293, type: "AR", name: "AK-15", time: "0415" },

  { id: 43, type: "RF", name: "SVD", time: "0415" },
  { id: 235, type: "RF", name: "SPR A3G", time: "0415" },
  { id: 247, type: "RF", name: "K31", time: "0415" },
  { id: 146, type: "RF", name: "G28", time: "0420" },
  { id: 36, type: "RF", name: "스프링필드", time: "0425" },
  { id: 305, type: "RF", name: "타부크", time: "0425" },
  { id: 42, type: "RF", name: "PTRD", time: "0430" },
  { id: 180, type: "RF", name: "PzB39", time: "0430" },
  { id: 257, type: "RF", name: "M200", time: "0432" },
  { id: 197, type: "RF", name: "카르카노M1891", time: "0438" },
  { id: 46, type: "RF", name: "Kar98k", time: "0440" },
  { id: 198, type: "RF", name: "카르카노M91/38", time: "0442" },
  { id: 312, type:"RF", name: "VSK-94", time: "0443"},
  { id: 53, type: "RF", name: "NTW-20", time: "0445" },
  { id: 329, type:"RF", name: "SVCh", time: "0447"},
  { id: 261, type: "RF", name: "QBU-88", time: "0448" },
  { id: 48, type: "RF", name: "WA2000", time: "0450" },
  { id: 110, type: "MG", name: "FG42", time: "0450" },
  { id: 111, type: "MG", name: "AAT-52", time: "0450" },
  { id: 148, type: "RF", name: "IWS 2000", time: "0452" },
  { id: 128, type: "RF", name: "M99", time: "0455" },
  { id: 50, type: "RF", name: "리엔필드", time: "0500" },
  { id: 337, type:"RF", name: "드 라일", time: "0500"},

  { id: 82, type: "MG", name: "DP28", time: "0500" },
  { id: 87, type: "MG", name: "MG34", time: "0500" },
  { id: 81, type: "MG", name: "LWMMG", time: "0510" },
  { id: 89, type: "MG", name: "브렌", time: "0520" },
  { id: 80, type: "MG", name: "M1919A4", time: "0540" },
  { id: 86, type: "MG", name: "MG42", time: "0550" },
  { id: 77, type: "MG", name: "M2HB", time: "0610" },
  { id: 78, type: "MG", name: "M60", time: "0610" },
  { id: 199, type: "MG", name: "80식", time: "0615" },
  { id: 292, type: "MG", name: "RPK-16", time: "0616" },
  { id: 339, type:"MG", name: "RPK-203", time: "0616"},
  { id: 121, type: "MG", name: "Mk48", time: "0620" },
  { id: 149, type: "MG", name: "AEK-999", time: "0620" },
  { id: 75, type: "MG", name: "M1918", time: "0625" },
  { id: 185, type: "MG", name: "아멜리", time: "0625" },
  { id: 264, type: "MG", name: "쇼샤", time: "0625" },
  { id: 307, type: "MG", name: "ZB-26", time: "0626" },
  { id: 238, type: "MG", name: "88식", time: "0628" },
  { id: 85, type: "MG", name: "PK", time: "0630" },
  { id: 88, type: "MG", name: "MG3", time: "0630" },
  { id: 112, type: "MG", name: "네게브", time: "0635" },
  { id: 263, type: "MG", name: "MG36", time: "0636" },
  { id: 125, type: "MG", name: "MG4", time: "0640" },
  { id: 109, type: "MG", name: "MG5", time: "0645" },
  { id: 173, type: "MG", name: "PKP", time: "0650" },

  { id: 325, type:"SG", name: "V-PM5", time: "0711"},
  { id: 165, type: "SG", name: "M1014", time: "0714" },
  { id: 190, type: "SG", name: "NS2000", time: "0715" },
  { id: 154, type: "SG", name: "M500", time: "0720" },
  { id: 158, type: "SG", name: "KS-23", time: "0725" },
  { id: 152, type: "SG", name: "M1897", time: "0730" },
  { id: 159, type: "SG", name: "RMP-93", time: "0730" },
  { id: 161, type: "SG", name: "97식 산탄총", time: "0730" },
  { id: 155, type: "SG", name: "M590", time: "0740" },
  { id: 162, type: "SG", name: "SPAS-12", time: "0740" },
  { id: 153, type: "SG", name: "M37", time: "0745" },
  { id: 283, type: "SG", name: "리버레이터", time: "0745" },
  { id: 156, type: "SG", name: "Super-Shorty", time: "0750" },
  { id: 189, type: "SG", name: "USAS-12", time: "0755" },
  { id: 326, type:"SG", name: "HK512", time: "0756"},
  { id: 157, type: "SG", name: "KSG", time: "0800" },
  { id: 160, type: "SG", name: "Saiga-12", time: "0805" },
  { id: 164, type: "SG", name: "FP-6", time: "0806" },
  { id: 324, type:"SG", name: "M6 ASW", time: "0808"},
  { id: 188, type: "SG", name: "S.A.T.8", time: "0810" },
  { id: 163, type: "SG", name: "AA-12", time: "0812" },
  { id: 282, type: "SG", name: "DP-12", time: "0813" },
  { id: 281, type: "SG", name: "CAWS", time: "0815" },
  { id: 323, type:"SG", name: "LTLX7000", time: "0817"},


  // {id: , type:'', name: '', time: ''},
];

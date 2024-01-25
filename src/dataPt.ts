const datatable = [
  {
    PtBeh_ID: 1,
    Navn: "Jonas Larsen",
    CprNr: "010209-2711",
    Behandling_ID: "115-475",
    KFE_Nr: "1911",
    Kaldenavn: "Primus",
    Title: "Colorectal Cancer - Targeted Immunotherapy",
    Diagnosegruppe: "A",
    Diagnose: "Colorectal Cancer",
    BehandlingStart: "2020-07-15",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 5,
    Navn: "Sophie Pedersen",
    CprNr: "041017-1234",
    Behandling_ID: "155-810",
    KFE_Nr: "1509",
    Kaldenavn: "Serenity",
    Title: "Ovarian Cancer - Chemotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Ovarian Cancer",
    BehandlingStart: "2020-09-22",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 6,
    Navn: "Lucas Møller",
    CprNr: "060325-5678",
    Behandling_ID: "165-923",
    KFE_Nr: "2803",
    Kaldenavn: "Harmony",
    Title: "Pancreatic Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Pancreatic Cancer",
    BehandlingStart: "2021-04-15",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 7,
    Navn: "Isabella Olsen",
    CprNr: "071212-8765",
    Behandling_ID: "175-104",
    KFE_Nr: "1111",
    Kaldenavn: "Tranquil",
    Title: "Leukemia - Stem Cell Transplant",
    Diagnosegruppe: "A",
    Diagnose: "Leukemia",
    BehandlingStart: "2022-08-10",
    Behandlingstype: "Stamcelletransplantation",
  },
  {
    PtBeh_ID: 8,
    Navn: "Liam Christensen",
    CprNr: "080430-9876",
    Behandling_ID: "185-215",
    KFE_Nr: "0907",
    Kaldenavn: "Eclipse",
    Title: "Melanoma - Immunotherapy",
    Diagnosegruppe: "A",
    Diagnose: "Melanoma",
    BehandlingStart: "2019-12-05",
    Behandlingstype: "Immunoterapi",
  },
  {
    PtBeh_ID: 9,
    Navn: "Ava Henriksen",
    CprNr: "090611-6543",
    Behandling_ID: "195-326",
    KFE_Nr: "0505",
    Kaldenavn: "Harmony",
    Title: "Lymphoma - Chemotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Lymphoma",
    BehandlingStart: "2021-06-20",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 10,
    Navn: "Noah Larsen",
    CprNr: "100822-3210",
    Behandling_ID: "205-437",
    KFE_Nr: "1608",
    Kaldenavn: "Seraph",
    Title: "Bladder Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Bladder Cancer",
    BehandlingStart: "2022-02-28",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 11,
    Navn: "Mia Nielsen",
    CprNr: "110103-8765",
    Behandling_ID: "215-548",
    KFE_Nr: "1202",
    Kaldenavn: "Aether",
    Title: "Breast Cancer - Hormone Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Breast Cancer",
    BehandlingStart: "2020-11-15",
    Behandlingstype: "Hormonbehandling",
  },
  {
    PtBeh_ID: 12,
    Navn: "Ethan Jensen",
    CprNr: "120224-5432",
    Behandling_ID: "225-659",
    KFE_Nr: "2106",
    Kaldenavn: "Zenith",
    Title: "Colon Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Colon Cancer",
    BehandlingStart: "2021-09-10",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 13,
    Navn: "Olivia Mikkelsen",
    CprNr: "130345-2109",
    Behandling_ID: "235-770",
    KFE_Nr: "0409",
    Kaldenavn: "Phoenix",
    Title: "Pancreatic Cancer - Chemotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Pancreatic Cancer",
    BehandlingStart: "2022-04-03",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 14,
    Navn: "Lucas Christensen",
    CprNr: "140506-9876",
    Behandling_ID: "245-881",
    KFE_Nr: "1707",
    Kaldenavn: "Serenade",
    Title: "Prostate Cancer - Radiation Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Prostate Cancer",
    BehandlingStart: "2021-01-18",
    Behandlingstype: "Strålebehandling",
  },
  {
    PtBeh_ID: 15,
    Navn: "Ella Henriksen",
    CprNr: "150627-6543",
    Behandling_ID: "255-992",
    KFE_Nr: "2705",
    Kaldenavn: "Aurora",
    Title: "Lung Cancer - Targeted Therapy",
    Diagnosegruppe: "C",
    Diagnose: "Lung Cancer",
    BehandlingStart: "2020-08-05",
    Behandlingstype: "Målrettet terapi",
  },
  {
    PtBeh_ID: 16,
    Navn: "Liam Møller",
    CprNr: "160808-3210",
    Behandling_ID: "265-1103",
    KFE_Nr: "2308",
    Kaldenavn: "Tranquil",
    Title: "Leukemia - Bone Marrow Transplant",
    Diagnosegruppe: "B",
    Diagnose: "Leukemia",
    BehandlingStart: "2022-03-12",
    Behandlingstype: "Knoglemarvstransplantation",
  },
  {
    PtBeh_ID: 17,
    Navn: "Ava Jensen",
    CprNr: "170929-8765",
    Behandling_ID: "275-1214",
    KFE_Nr: "2501",
    Kaldenavn: "Harmony",
    Title: "Ovarian Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Ovarian Cancer",
    BehandlingStart: "2021-07-30",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 18,
    Navn: "Noah Mikkelsen",
    CprNr: "180110-5432",
    Behandling_ID: "285-1325",
    KFE_Nr: "1404",
    Kaldenavn: "Eclipse",
    Title: "Melanoma - Targeted Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Melanoma",
    BehandlingStart: "2022-05-20",
    Behandlingstype: "Målrettet terapi",
  },
  {
    PtBeh_ID: 19,
    Navn: "Olivia Christensen",
    CprNr: "190231-2109",
    Behandling_ID: "295-1436",
    KFE_Nr: "2206",
    Kaldenavn: "Zenith",
    Title: "Breast Cancer - Surgery",
    Diagnosegruppe: "A",
    Diagnose: "Breast Cancer",
    BehandlingStart: "2021-10-08",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 20,
    Navn: "Lucas Olsen",
    CprNr: "200412-9876",
    Behandling_ID: "305-1547",
    KFE_Nr: "1209",
    Kaldenavn: "Serenade",
    Title: "Pancreatic Cancer - Immunotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Pancreatic Cancer",
    BehandlingStart: "2020-12-15",
    Behandlingstype: "Immunoterapi",
  },
  {
    PtBeh_ID: 21,
    Navn: "Emma Henriksen",
    CprNr: "210523-6543",
    Behandling_ID: "315-1658",
    KFE_Nr: "2603",
    Kaldenavn: "Aurora",
    Title: "Colorectal Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Colorectal Cancer",
    BehandlingStart: "2021-06-02",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 22,
    Navn: "Oliver Møller",
    CprNr: "220604-3210",
    Behandling_ID: "325-1769",
    KFE_Nr: "1908",
    Kaldenavn: "Tranquil",
    Title: "Lung Cancer - Chemotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Lung Cancer",
    BehandlingStart: "2022-01-25",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 23,
    Navn: "Ava Christensen",
    CprNr: "230715-8765",
    Behandling_ID: "335-1880",
    KFE_Nr: "2305",
    Kaldenavn: "Harmony",
    Title: "Prostate Cancer - Radiation Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Prostate Cancer",
    BehandlingStart: "2021-02-10",
    Behandlingstype: "Strålebehandling",
  },
  {
    PtBeh_ID: 24,
    Navn: "Liam Mikkelsen",
    CprNr: "240836-5432",
    Behandling_ID: "345-1991",
    KFE_Nr: "1602",
    Kaldenavn: "Eclipse",
    Title: "Breast Cancer - Targeted Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Breast Cancer",
    BehandlingStart: "2022-03-28",
    Behandlingstype: "Målrettet terapi",
  },
  {
    PtBeh_ID: 25,
    Navn: "Olivia Jensen",
    CprNr: "250957-2109",
    Behandling_ID: "355-2102",
    KFE_Nr: "1206",
    Kaldenavn: "Zenith",
    Title: "Ovarian Cancer - Chemotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Ovarian Cancer",
    BehandlingStart: "2021-08-15",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 26,
    Navn: "Noah Olsen",
    CprNr: "260108-9876",
    Behandling_ID: "365-2213",
    KFE_Nr: "3009",
    Kaldenavn: "Serenade",
    Title: "Lung Cancer - Immunotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Lung Cancer",
    BehandlingStart: "2020-10-22",
    Behandlingstype: "Immunoterapi",
  },
  {
    PtBeh_ID: 27,
    Navn: "Emma Møller",
    CprNr: "270229-6543",
    Behandling_ID: "375-2324",
    KFE_Nr: "2504",
    Kaldenavn: "Aurora",
    Title: "Pancreatic Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Pancreatic Cancer",
    BehandlingStart: "2021-04-05",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 28,
    Navn: "Oliver Christensen",
    CprNr: "280310-3210",
    Behandling_ID: "385-2435",
    KFE_Nr: "1808",
    Kaldenavn: "Tranquil",
    Title: "Colorectal Cancer - Chemotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Colorectal Cancer",
    BehandlingStart: "2022-09-10",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 29,
    Navn: "Ava Henriksen",
    CprNr: "290431-8765",
    Behandling_ID: "395-2546",
    KFE_Nr: "0703",
    Kaldenavn: "Harmony",
    Title: "Melanoma - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Melanoma",
    BehandlingStart: "2021-12-18",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 30,
    Navn: "Liam Mikkelsen",
    CprNr: "300512-5432",
    Behandling_ID: "405-2657",
    KFE_Nr: "2601",
    Kaldenavn: "Eclipse",
    Title: "Leukemia - Chemotherapy",
    Diagnosegruppe: "A",
    Diagnose: "Leukemia",
    BehandlingStart: "2022-06-30",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 31,
    Navn: "Olivia Jensen",
    CprNr: "310633-2109",
    Behandling_ID: "415-2768",
    KFE_Nr: "1904",
    Kaldenavn: "Zenith",
    Title: "Prostate Cancer - Hormone Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Prostate Cancer",
    BehandlingStart: "2020-11-14",
    Behandlingstype: "Hormonbehandling",
  },
  {
    PtBeh_ID: 32,
    Navn: "Noah Olsen",
    CprNr: "320754-9876",
    Behandling_ID: "425-2879",
    KFE_Nr: "1309",
    Kaldenavn: "Serenade",
    Title: "Breast Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Breast Cancer",
    BehandlingStart: "2021-07-02",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 33,
    Navn: "Emma Henriksen",
    CprNr: "330915-6543",
    Behandling_ID: "435-2990",
    KFE_Nr: "1105",
    Kaldenavn: "Aurora",
    Title: "Ovarian Cancer - Targeted Therapy",
    Diagnosegruppe: "B",
    Diagnose: "Ovarian Cancer",
    BehandlingStart: "2022-01-10",
    Behandlingstype: "Målrettet terapi",
  },
  {
    PtBeh_ID: 34,
    Navn: "Oliver Christensen",
    CprNr: "341036-3210",
    Behandling_ID: "445-3101",
    KFE_Nr: "2907",
    Kaldenavn: "Tranquil",
    Title: "Lung Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Lung Cancer",
    BehandlingStart: "2021-05-28",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 35,
    Navn: "Ava Mikkelsen",
    CprNr: "350157-2109",
    Behandling_ID: "455-3212",
    KFE_Nr: "1603",
    Kaldenavn: "Harmony",
    Title: "Pancreatic Cancer - Radiation Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Pancreatic Cancer",
    BehandlingStart: "2022-08-12",
    Behandlingstype: "Strålebehandling",
  },
  {
    PtBeh_ID: 36,
    Navn: "Liam Olsen",
    CprNr: "360278-9876",
    Behandling_ID: "465-3323",
    KFE_Nr: "2409",
    Kaldenavn: "Eclipse",
    Title: "Breast Cancer - Hormone Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Breast Cancer",
    BehandlingStart: "2021-03-16",
    Behandlingstype: "Hormonbehandling",
  },
  {
    PtBeh_ID: 37,
    Navn: "Olivia Jensen",
    CprNr: "370399-6543",
    Behandling_ID: "475-3434",
    KFE_Nr: "1006",
    Kaldenavn: "Zenith",
    Title: "Melanoma - Chemotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Melanoma",
    BehandlingStart: "2020-12-28",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 38,
    Navn: "Noah Henriksen",
    CprNr: "380410-3210",
    Behandling_ID: "485-3545",
    KFE_Nr: "2008",
    Kaldenavn: "Serenade",
    Title: "Colon Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Colon Cancer",
    BehandlingStart: "2021-09-05",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 39,
    Navn: "Emma Christensen",
    CprNr: "390531-8765",
    Behandling_ID: "495-3656",
    KFE_Nr: "2902",
    Kaldenavn: "Aurora",
    Title: "Leukemia - Targeted Therapy",
    Diagnosegruppe: "B",
    Diagnose: "Leukemia",
    BehandlingStart: "2022-02-22",
    Behandlingstype: "Målrettet terapi",
  },
  {
    PtBeh_ID: 40,
    Navn: "Oliver Møller",
    CprNr: "400652-5432",
    Behandling_ID: "505-3767",
    KFE_Nr: "1104",
    Kaldenavn: "Tranquil",
    Title: "Ovarian Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Ovarian Cancer",
    BehandlingStart: "2021-06-18",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 41,
    Navn: "Ava Olsen",
    CprNr: "410773-2109",
    Behandling_ID: "515-3878",
    KFE_Nr: "3001",
    Kaldenavn: "Harmony",
    Title: "Prostate Cancer - Chemotherapy",
    Diagnosegruppe: "A",
    Diagnose: "Prostate Cancer",
    BehandlingStart: "2022-01-30",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 42,
    Navn: "Liam Jensen",
    CprNr: "420894-9876",
    Behandling_ID: "525-3989",
    KFE_Nr: "1305",
    Kaldenavn: "Eclipse",
    Title: "Lung Cancer - Targeted Therapy",
    Diagnosegruppe: "B",
    Diagnose: "Lung Cancer",
    BehandlingStart: "2021-11-14",
    Behandlingstype: "Målrettet terapi",
  },
  {
    PtBeh_ID: 43,
    Navn: "Olivia Henriksen",
    CprNr: "431015-6543",
    Behandling_ID: "535-4100",
    KFE_Nr: "2407",
    Kaldenavn: "Zenith",
    Title: "Pancreatic Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Pancreatic Cancer",
    BehandlingStart: "2021-04-02",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 44,
    Navn: "Noah Christensen",
    CprNr: "441136-3210",
    Behandling_ID: "545-4211",
    KFE_Nr: "0809",
    Kaldenavn: "Serenade",
    Title: "Breast Cancer - Radiation Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Breast Cancer",
    BehandlingStart: "2022-07-10",
    Behandlingstype: "Strålebehandling",
  },
  {
    PtBeh_ID: 46,
    Navn: "Oliver Olsen",
    CprNr: "461378-5432",
    Behandling_ID: "565-4433",
    KFE_Nr: "1601",
    Kaldenavn: "Tranquil",
    Title: "Melanoma - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Melanoma",
    BehandlingStart: "2021-08-27",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 47,
    Navn: "Ava Christensen",
    CprNr: "471499-2109",
    Behandling_ID: "575-4544",
    KFE_Nr: "1007",
    Kaldenavn: "Harmony",
    Title: "Colon Cancer - Radiation Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Colon Cancer",
    BehandlingStart: "2022-04-15",
    Behandlingstype: "Strålebehandling",
  },
  {
    PtBeh_ID: 48,
    Navn: "Liam Henriksen",
    CprNr: "481510-8765",
    Behandling_ID: "585-4655",
    KFE_Nr: "2806",
    Kaldenavn: "Eclipse",
    Title: "Leukemia - Surgery",
    Diagnosegruppe: "B",
    Diagnose: "Leukemia",
    BehandlingStart: "2021-10-30",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 49,
    Navn: "Olivia Møller",
    CprNr: "491631-5432",
    Behandling_ID: "595-4766",
    KFE_Nr: "2404",
    Kaldenavn: "Serenade",
    Title: "Ovarian Cancer - Hormone Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Ovarian Cancer",
    BehandlingStart: "2022-02-05",
    Behandlingstype: "Hormonbehandling",
  },
  {
    PtBeh_ID: 50,
    Navn: "Noah Jensen",
    CprNr: "501752-3210",
    Behandling_ID: "605-4877",
    KFE_Nr: "0803",
    Kaldenavn: "Zenith",
    Title: "Pancreatic Cancer - Targeted Therapy",
    Diagnosegruppe: "B",
    Diagnose: "Pancreatic Cancer",
    BehandlingStart: "2021-06-12",
    Behandlingstype: "Målrettet terapi",
  },
  {
    PtBeh_ID: 51,
    Navn: "Emma Olsen",
    CprNr: "511873-9876",
    Behandling_ID: "615-4988",
    KFE_Nr: "1906",
    Kaldenavn: "Tranquil",
    Title: "Lung Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Lung Cancer",
    BehandlingStart: "2021-12-22",
    Behandlingstype: "Kirurgi",
  },
  {
    PtBeh_ID: 52,
    Navn: "Oliver Henriksen",
    CprNr: "521994-6543",
    Behandling_ID: "625-5099",
    KFE_Nr: "1102",
    Kaldenavn: "Harmony",
    Title: "Breast Cancer - Chemotherapy",
    Diagnosegruppe: "B",
    Diagnose: "Breast Cancer",
    BehandlingStart: "2022-09-02",
    Behandlingstype: "Kemo",
  },
  {
    PtBeh_ID: 53,
    Navn: "Ava Mikkelsen",
    CprNr: "532115-3210",
    Behandling_ID: "635-5210",
    KFE_Nr: "2508",
    Kaldenavn: "Eclipse",
    Title: "Prostate Cancer - Radiation Therapy",
    Diagnosegruppe: "A",
    Diagnose: "Prostate Cancer",
    BehandlingStart: "2021-04-08",
    Behandlingstype: "Strålebehandling",
  },
  {
    PtBeh_ID: 54,
    Navn: "Liam Christensen",
    CprNr: "542236-9876",
    Behandling_ID: "645-5321",
    KFE_Nr: "1503",
    Kaldenavn: "Serenade",
    Title: "Melanoma - Immunotherapy",
    Diagnosegruppe: "A",
    Diagnose: "Melanoma",
    BehandlingStart: "2022-05-28",
    Behandlingstype: "Immunoterapi",
  },
  {
    PtBeh_ID: 55,
    Navn: "Olivia Jensen",
    CprNr: "552357-6543",
    Behandling_ID: "655-5432",
    KFE_Nr: "3005",
    Kaldenavn: "Zenith",
    Title: "Colon Cancer - Surgery",
    Diagnosegruppe: "C",
    Diagnose: "Colon Cancer",
    BehandlingStart: "2021-07-15",
    Behandlingstype: "Kirurgi",
  },
];

export default datatable;

import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  headers = ["ID", "Picture", "Name", "SKU", "Price", "Stock quantity"];
  rows = [
    {
      "ID" : "1",
      "Picture":"../../../../assets/pic/01_COMP_CUST.jpeg",
      "Name" : "Build your own computer",
      "SKU" : "COMP_CUST",
      "Price" : "1200",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "2",
      "Picture":'../../../../assets/pic/02_DS_VA3_PC.jpeg',
      "Name" : "Digital Storm VANQUISH 3 Custom Performance PC",
      "SKU" : "DS_VA3_PC",
      "Price" : "1259",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "3",
      "Picture":'../../../../assets/pic/03_LE_IC_600.jpeg',
      "Name" : "Lenovo IdeaCentre 600 All-in-One PC",
      "SKU" : "LE_IC_600",
      "Price" : "500",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "4",
      "Picture":'../../../../assets/pic/04_AP_MBP_13.jpeg',
      "Name" : "Apple MacBook Pro 13-inch",
      "SKU" : "AP_MBP_13",
      "Price" : "1800",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "5",
      "Picture":'../../../../assets/pic/05_AS_551_LP.jpeg',
      "Name" : "Asus N551JK-XO076H Laptop",
      "SKU" : "AS_551_LP",
      "Price" : "1500",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "6",
      "Picture":'../../../../assets/pic/06_SM_900_PU.jpeg',
      "Name" : "Samsung Series 9 NP900X4C Premium Ultrabook",
      "SKU" : "SM_900_PU",
      "Price" : "1590",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "7",
      "Picture":'../../../../assets/pic/07_HP_SPX_UB.jpeg',
      "Name" : "HP Spectre XT Pro UltraBook",
      "SKU" : "HP_SPX_UB",
      "Price" : "1350",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "8",
      "Picture":'../../../../assets/pic/08_HP_ESB_15.jpeg',
      "Name" : "HP Envy 6-1180ca 15.6-Inch Sleekbook",
      "SKU" : "HP_ESB_15",
      "Price" : "1460",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "9",
      "Picture":'../../../../assets/pic/09_LE_TX1_CL.jpeg',
      "Name" : "Lenovo Thinkpad X1 Carbon Laptop",
      "SKU" : "LE_TX1_CL",
      "Price" : "1360",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "10",
      "Picture":'../../../../assets/pic/10_AD_CS4_PH.jpeg',
      "Name" : "Adobe Photoshop CS4",
      "SKU" : "AD_CS4_PH",
      "Price" : "75",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "11",
      "Picture":'../../../../assets/pic/11_MS_WIN_8P.jpeg',
      "Name" : "Windows 8 Pro",
      "SKU" : "MS_WIN_8P",
      "Price" : "65",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "12",
      "Picture":'../../../../assets/pic/12_SF_PRO_11.jpeg',
      "Name" : "Sound Forge Pro 11 (recurring)",
      "SKU" : "SF_PRO_11",
      "Price" : "54.99",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "13",
      "Picture":'../../../../assets/pic/13_N5500DS_0.jpeg',
      "Name" : "Nikon D5500 DSLR",
      "SKU" : "N5500DS_0",
      "Price" : "",
      "Stockquantity" : ""
    },
    {
      "ID" : "14",
      "Picture":'../../../../assets/pic/14_N5500DS_B.jpeg',
      "Name" : "Nikon D5500 DSLR - Black",
      "SKU" : "N5500DS_B",
      "Price" : "670",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "15",
      "Picture":'../../../../assets/pic/15_N5500DS_R.jpeg',
      "Name" : "Nikon D5500 DSLR - Red",
      "SKU" : "N5500DS_R",
      "Price" : "630",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "16",
      "Picture":'../../../../assets/pic/16_LT_MIR_DC.jpeg',
      "Name" : "Leica T Mirrorless Digital Camera",
      "SKU" : "LT_MIR_DC",
      "Price" : "530",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "17",
      "Picture":'../../../../assets/pic/17_APPLE_CAM.jpeg',
      "Name" : "Apple iCam",
      "SKU" : "APPLE_CAM",
      "Price" : "1300",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "18",
      "Picture":'../../../../assets/pic/18_M8_HTC_5L.jpeg',
      "Name" : "HTC One M8 Android L 5.0 Lollipop",
      "SKU" : "M8_HTC_5L",
      "Price" : "245",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "19",
      "Picture":'../../../../assets/pic/19_OM_HTC_BL.jpeg',
      "Name" : "HTC One Mini Blue",
      "SKU" : "OM_HTC_BL",
      "Price" : "100",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "20",
      "Picture":'../../../../assets/pic/20_N_1020_LU.jpeg',
      "Name" : "Nokia Lumia 1020",
      "SKU" : "N_1020_LU",
      "Price" : "349",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "21",
      "Picture":'../../../../assets/pic/21_BP_20_WSP.jpeg',
      "Name" : "Beats Pill 2.0 Wireless Speaker",
      "SKU" : "BP_20_WSP",
      "Price" : "79.99",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "22",
      "Picture":'../../../../assets/pic/22_TC_78I_UN.jpeg',
      "Name" : "Universal 7-8 Inch Tablet Cover",
      "SKU" : "TC_78I_UN",
      "Price" : "39",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "23",
      "Picture":'../../../../assets/pic/23_PT_SPK_SN.jpeg',
      "Name" : "Portable Sound Speakers",
      "SKU" : "PT_SPK_SN",
      "Price" : "37",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "24",
      "Picture":'../../../../assets/pic/24_NK_FRC_RS.jpg',
      "Name" : "Nike Floral Roshe Customized Running Shoes",
      "SKU" : "NK_FRC_RS",
      "Price" : "40",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "25",
      "Picture":'../../../../assets/pic/25_AD_C80_RS.jpg',
      "Name" : "adidas Consortium Campus 80s Running Shoes",
      "SKU" : "AD_C80_RS",
      "Price" : "27.56",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "26",
      "Picture":'../../../../assets/pic/26_NK_ZSJ_MM.jpg',
      "Name" : 'Nike SB Zoom Stefan Janoski "Medium Mint"',
      "SKU" : "NK_ZSJ_MM",
      "Price" : "30",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "27",
      "Picture":'../../../../assets/pic/27_NK_TLS_RS.jpg',
      "Name" : "Nike Tailwind Loose Short-Sleeve Running Shirt",
      "SKU" : "NK_TLS_RS",
      "Price" : "25",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "28",
      "Picture":'../../../../assets/pic/28_WM_OVR_TS.jpg',
      "Name" : "Oversized Women T-Shirt",
      "SKU" : "WM_OVR_TS",
      "Price" : "24",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "29",
      "Picture":'../../../../assets/pic/29_CS_TSHIRT.jpeg',
      "Name" : "Custom T-Shirt",
      "SKU" : "CS_TSHIRT",
      "Price" : "15",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "30",
      "Picture":'../../../../assets/pic/30_LV_511_JN.jpg',
      "Name" : "Levi's 511 Jeans",
      "SKU" : "LV_511_JN",
      "Price" : "43.5",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "31",
      "Picture":'../../../../assets/pic/31_OB_HAT_PR.jpg',
      "Name" : "Obey Propaganda Hat",
      "SKU" : "OB_HAT_PR",
      "Price" : "30",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "32",
      "Picture":'../../../../assets/pic/32_RH_CHK_BL.jpeg',
      "Name" : "Reversible Horseferry Check Belt",
      "SKU" : "RH_CHK_BL",
      "Price" : "45",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "33",
      "Picture":'../../../../assets/pic/33_RB_AVR_SG.jpg',
      "Name" : "Ray Ban Aviator Sunglasses",
      "SKU" : "RB_AVR_SG",
      "Price" : "25",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "34",
      "Picture":'../../../../assets/pic/34_NIGHT_VSN.jpeg',
      "Name" : "Night Visions",
      "SKU" : "NIGHT_VSN",
      "Price" : "2.8",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "35",
      "Picture":'../../../../assets/pic/35_IF_YOU_WT.jpeg',
      "Name" : "If You Wait (donation)",
      "SKU" : "IF_YOU_WT",
      "Price" : "0",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "36",
      "Picture":'../../../../assets/pic/36_SCI_FAITH.jpeg',
      "Name" : "Science & Faith",
      "SKU" : "SCI_FAITH",
      "Price" : "0",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "37",
      "Picture":'../../../../assets/pic/37_FR_451_RB.jpeg',
      "Name" : "Fahrenheit 451 by Ray Bradbury",
      "SKU" : "FR_451_RB",
      "Price" : "27",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "38",
      "Picture":'../../../../assets/pic/38_FIRST_PRP.jpeg',
      "Name" : "First Prize Pies",
      "SKU" : "FIRST_PRP",
      "Price" : "51",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "39",
      "Picture":'../../../../assets/pic/39_PRIDE_PRJ.jpeg',
      "Name" : "Pride and Prejudice",
      "SKU" : "PRIDE_PRJ",
      "Price" : "24",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "40",
      "Picture":'../../../../assets/pic/40_EG_GEM_NL.jpg',
      "Name" : "Elegant Gemstone Necklace (rental)",
      "SKU" : "EG_GEM_NL",
      "Price" : "30",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "41",
      "Picture":'../../../../assets/pic/41_FL_GIRL_B.jpg',
      "Name" : "Flower Girl Bracelet",
      "SKU" : "FL_GIRL_B",
      "Price" : "360",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "42",
      "Picture":'../../../../assets/pic/42_VS_ENG_RN.jpg',
      "Name" : "Vintage Style Engagement Ring",
      "SKU" : "VS_ENG_RN",
      "Price" : "2100",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "43",
      "Picture":'../../../../assets/pic/43_VG_CR_025.jpeg',
      "Name" : "$25 Virtual Gift Card",
      "SKU" : "VG_CR_025",
      "Price" : "25",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "44",
      "Picture":'../../../../assets/pic/44_PG_CR_050.jpeg',
      "Name" : "$50 Physical Gift Card",
      "SKU" : "PG_CR_050",
      "Price" : "50",
      "Stockquantity" : "10000"
    },
    {
      "ID" : "45",
      "Picture":'../../../../assets/pic/45_PG_CR_100.jpeg',
      "Name" : "$100 Physical Gift Card",
      "SKU" : "PG_CR_100",
      "Price" : "100",
      "Stockquantity" : "10000"
    },
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}


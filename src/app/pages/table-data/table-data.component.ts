import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  data = [{ id: 1, path: "00_Opening_Shot.mp4", rotationSet: 1, type: "opening" },
  { id: 2, path: "01_Asset_1_Idle.mp4", rotationSet: 1, type: "idle" },
  { id: 3, path: "02_Zoom_To_Asset_1.mp4", rotationSet: 1, type: "zoomin" },
  { id: 4, path: "03_Asset_1_HUD_Idle.mp4", rotationSet: 1, type: "hudidle" },
  { id: 5, path: "04_Zoom_Away_Asset_1.mp4", rotationSet: 1, type: "zoomout" },
  { id: 6, path: "05_First_Set_Rotation.mp4", rotationSet: 1, type: "rotation" },
  { id: 7, path: "06_First_Set_Rotation_Reverse.mp4", rotationSet: 1, type: "reverse" },
  { id: 8, path: "07_Asset_2_Idle.mp4", rotationSet: 2, type: "idle" },
  { id: 9, path: "08_Zoom_To_Asset_2.mp4", rotationSet: 2, type: "zoomin" },
  { id: 10, path: "09_Asset_2_HUD_Idle.mp4", rotationSet: 2, type: "hudidle" },
  { id: 11, path: "10_Zoom_Away_Asset_2.mp4", rotationSet: 2, type: "zoomout" },
  { id: 12, path: "11_Second_Set_Rotation.mp4", rotationSet: 2, type: "rotation" },
  { id: 13, path: "12_Second_Set_Rotation_Reverse.mp4", rotationSet: 2, type: "reverse" },
  { id: 14, path: "13_Asset_3_Idle.mp4", rotationSet: 3, type: "idle" },
  { id: 15, path: "14_Zoom_To_Asset_3.mp4", rotationSet: 3, type: "zoomin" },
  { id: 16, path: "15_Asset_3_HUD_Idle.mp4", rotationSet: 3, type: "hudidle" },
  { id: 17, path: "16_Zoom_Away_Asset_3.mp4", rotationSet: 3, type: "zoomout" },
  { id: 18, path: "17_Third_Set_Rotation.mp4", rotationSet: 3, type: "rotation" },
  { id: 19, path: "18_Third_Set_Rotation_Reverse.mp4", rotationSet: 3, type: "reverse" },
  { id: 20, path: "19_Asset_4_Idle.mp4", rotationSet: 4, type: "idle" },
  { id: 21, path: "20_Zoom_To_Asset_4.mp4", rotationSet: 4, type: "zoomin" },
  { id: 22, path: "21_Asset_4_HUD_Idle.mp4", rotationSet: 4, type: "hudidle" },
  { id: 23, path: "22_Zoom_Away_Asset_4.mp4", rotationSet: 4, type: "zoomout" },
  { id: 24, path: "23_Fourth_Set_Rotation.mp4", rotationSet: 4, type: "rotation" },
  { id: 25, path: "24_Fourth_Set_Rotation_Reverse.mp4", rotationSet: 4, type: "reverse" },
  { id: 26, path: "25_Asset_5_Idle.mp4", rotationSet: 5, type: "idle" },
  { id: 27, path: "26_Zoom_To_Asset_5.mp4", rotationSet: 5, type: "zoomin" },
  { id: 28, path: "27_Asset_5_HUD_Idles.mp4", rotationSet: 5, type: "hudidle" },
  { id: 29, path: "28_Zoom_Away_Asset_5.mp4", rotationSet: 5, type: "zoomout" },
  { id: 30, path: "29_Fifth_Set_Rotation.mp4", rotationSet: 5, type: "rotation" },
  { id: 31, path: "30_Fifth_Set_Rotation_Reverse.mp4", rotationSet: 5, type: "reverse" },
  { id: 32, path: "31_Asset_6_Idle.mp4", rotationSet: 6, type: "idle" },
  { id: 33, path: "32_Zoom_To_Asset_6.mp4", rotationSet: 6, type: "zoomin" },
  { id: 34, path: "33_Asset_6_HUD_Idle.mp4", rotationSet: 6, type: "hudidle" },
  { id: 35, path: "34_Zoom_Away_Asset_6.mp4", rotationSet: 6, type: "zoomout" },
  { id: 36, path: "35_Sixth_Set_Rotation.mp4", rotationSet: 6, type: "rotation" },
  { id: 37, path: "36_Sixth_Set_Rotation_Reverse.mp4", rotationSet: 6, type: "reverse" },
  { id: 38, path: "37_Asset_7_Idle.mp4", rotationSet: 7, type: "idle" },
  { id: 39, path: "38_Zoom_To_Asset_7.mp4", rotationSet: 7, type: "zoomin" },
  { id: 40, path: "39_Asset_7_HUD_Idle.mp4", rotationSet: 7, type: "hudidle" },
  { id: 41, path: "40_Zoom_Away_Asset_7.mp4", rotationSet: 7, type: "zoomout" },
  { id: 42, path: "41_Seventh_Set_Rotation.mp4", rotationSet: 7, type: "rotation" },
  { id: 43, path: "42_Seventh_Set_Rotation_Reverse.mp4", rotationSet: 7, type: "reverse" },
  { id: 44, path: "43_Asset_8_Idle.mp4", rotationSet: 8, type: "idle" },
  { id: 45, path: "44_Zoom_To_Asset_8.mp4", rotationSet: 8, type: "zoomin" },
  { id: 46, path: "45_Asset_8_HUD_Idle.mp4", rotationSet: 8, type: "hudidle" },
  { id: 47, path: "46_Zoom_Away_Asset_8.mp4", rotationSet: 8, type: "zoomout" },
  { id: 48, path: "47_Eighth_Set_Rotation.mp4", rotationSet: 8, type: "rotation" },
  { id: 49, path: "47_Eighth_Set_Rotation_Reverse.mp4", rotationSet: 8, type: "reverse" }]
  
  constructor() { }

  ngOnInit() {
  }

}

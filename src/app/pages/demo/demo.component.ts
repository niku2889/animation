import { Component, ViewChild, ElementRef, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { HotspotInterface } from '@mediaman/three-sixty/dist/interfaces/hotspot.interface';
declare var $: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterViewInit {
  title = 'animation';
  counter = 1;
  rotationCounter = 1;
  type = "";
  rotateType = "";
  videoSrc: any;
  videoSrc1: any;
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  @ViewChild("videoPlayer1", { static: false }) videoplayer1: ElementRef;
  @ViewChild('canvas', { static: false }) public canvas: ElementRef;
  @ViewChild('circlr', { static: false }) public circlr: ElementRef;
  isPlay: boolean = false;
  posterSrc: any;
  posterSrc1: any;
  loadedData = [];
  videoType = "video/mp4";
  imageSrc: any;
  public hotspots: HotspotInterface[] = [
    {
      text: 'Lorem ipsum 1',
      angle: 0.78,
      endAngle: 0.95,
      top: '25%',
      left: '27.5%'
    },
    {
      text: 'Lorem ipsum 2',
      angle: 0.4,
      endAngle: 0.6,
      top: '65%',
      left: '60%'
    }
  ];

  data = [{ id: 1, path: "00_Opening_Shot.mp4", rotationSet: 1, type: "opening" },
  { id: 2, path: "01_Asset_1_Idle.mp4", rotationSet: 1, type: "idle" },
  { id: 3, path: "Zoom_To_Asset_1.mp4", rotationSet: 1, type: "zoomin" },
  { id: 4, path: "03_Asset_1_HUD_Idle.mp4", rotationSet: 1, type: "hudidle" },
  { id: 5, path: "04_Zoom_Away_Asset_1.mp4", rotationSet: 1, type: "zoomout" },
  { id: 6, path: "05_First_Set_Rotation.mp4", rotationSet: 1, type: "rotation" },
  { id: 7, path: "06_First_Set_Rotation_Reverse.mp4", rotationSet: 1, type: "reverse" },
  { id: 8, path: "07_Asset_2_Idle.mp4", rotationSet: 2, type: "idle" },
  { id: 9, path: "Zoom_To_Asset_2.mp4", rotationSet: 2, type: "zoomin" },
  { id: 10, path: "09_Asset_2_HUD_Idle.mp4", rotationSet: 2, type: "hudidle" },
  { id: 11, path: "10_Zoom_Away_Asset_2.mp4", rotationSet: 2, type: "zoomout" },
  { id: 12, path: "11_Second_Set_Rotation.mp4", rotationSet: 2, type: "rotation" },
  { id: 13, path: "12_Second_Set_Rotation_Reverse.mp4", rotationSet: 2, type: "reverse" },
  { id: 14, path: "13_Asset_3_Idle.mp4", rotationSet: 3, type: "idle" },
  { id: 15, path: "Zoom_To_Asset_3.mp4", rotationSet: 3, type: "zoomin" },
  { id: 16, path: "15_Asset_3_HUD_Idle.mp4", rotationSet: 3, type: "hudidle" },
  { id: 17, path: "16_Zoom_Away_Asset_3.mp4", rotationSet: 3, type: "zoomout" },
  { id: 18, path: "17_Third_Set_Rotation.mp4", rotationSet: 3, type: "rotation" },
  { id: 19, path: "18_Third_Set_Rotation_Reverse.mp4", rotationSet: 3, type: "reverse" },
  { id: 20, path: "19_Asset_4_Idle.mp4", rotationSet: 4, type: "idle" },
  { id: 21, path: "Zoom_To_Asset_4.mp4", rotationSet: 4, type: "zoomin" },
  { id: 22, path: "21_Asset_4_HUD_Idle.mp4", rotationSet: 4, type: "hudidle" },
  { id: 23, path: "22_Zoom_Away_Asset_4.mp4", rotationSet: 4, type: "zoomout" },
  { id: 24, path: "23_Fourth_Set_Rotation.mp4", rotationSet: 4, type: "rotation" },
  { id: 25, path: "24_Fourth_Set_Rotation_Reverse.mp4", rotationSet: 4, type: "reverse" },
  { id: 26, path: "25_Asset_5_Idle.mp4", rotationSet: 5, type: "idle" },
  { id: 27, path: "Zoom_To_Asset_5.mp4", rotationSet: 5, type: "zoomin" },
  { id: 28, path: "27_Asset_5_HUD_Idles.mp4", rotationSet: 5, type: "hudidle" },
  { id: 29, path: "28_Zoom_Away_Asset_5.mp4", rotationSet: 5, type: "zoomout" },
  { id: 30, path: "29_Fifth_Set_Rotation.mp4", rotationSet: 5, type: "rotation" },
  { id: 31, path: "30_Fifth_Set_Rotation_Reverse.mp4", rotationSet: 5, type: "reverse" },
  { id: 32, path: "31_Asset_6_Idle.mp4", rotationSet: 6, type: "idle" },
  { id: 33, path: "Zoom_To_Asset_6.mp4", rotationSet: 6, type: "zoomin" },
  { id: 34, path: "33_Asset_6_HUD_Idle.mp4", rotationSet: 6, type: "hudidle" },
  { id: 35, path: "34_Zoom_Away_Asset_6.mp4", rotationSet: 6, type: "zoomout" },
  { id: 36, path: "35_Sixth_Set_Rotation.mp4", rotationSet: 6, type: "rotation" },
  { id: 37, path: "36_Sixth_Set_Rotation_Reverse.mp4", rotationSet: 6, type: "reverse" },
  { id: 38, path: "37_Asset_7_Idle.mp4", rotationSet: 7, type: "idle" },
  { id: 39, path: "Zoom_To_Asset_7.mp4", rotationSet: 7, type: "zoomin" },
  { id: 40, path: "39_Asset_7_HUD_Idle.mp4", rotationSet: 7, type: "hudidle" },
  { id: 41, path: "40_Zoom_Away_Asset_7.mp4", rotationSet: 7, type: "zoomout" },
  { id: 42, path: "41_Seventh_Set_Rotation.mp4", rotationSet: 7, type: "rotation" },
  { id: 43, path: "42_Seventh_Set_Rotation_Reverse.mp4", rotationSet: 7, type: "reverse" },
  { id: 44, path: "43_Asset_8_Idle.mp4", rotationSet: 8, type: "idle" },
  { id: 45, path: "Zoom_To_Asset_8.mp4", rotationSet: 8, type: "zoomin" },
  { id: 46, path: "45_Asset_8_HUD_Idle.mp4", rotationSet: 8, type: "hudidle" },
  { id: 47, path: "46_Zoom_Away_Asset_8.mp4", rotationSet: 8, type: "zoomout" },
  { id: 48, path: "47_Eighth_Set_Rotation.mp4", rotationSet: 8, type: "rotation" },
  { id: 49, path: "47_Eighth_Set_Rotation_Reverse.mp4", rotationSet: 8, type: "reverse" },
  { id: 50, path: "Zoomed_Set_Rotation_Asset_01.mp4", rotationSet: 1, type: "zoomnext" },
  { id: 51, path: "Zoomed_Set_Rotation_Asset_01_REVERSE.mp4", rotationSet: 1, type: "zoomreverse" },
  { id: 52, path: "Zoomed_Set_Rotation_Asset_02.mp4", rotationSet: 2, type: "zoomnext" },
  { id: 53, path: "Zoomed_Set_Rotation_Asset_02_REVERSE.mp4", rotationSet: 2, type: "zoomreverse" },
  { id: 54, path: "Zoomed_Set_Rotation_Asset_03.mp4", rotationSet: 3, type: "zoomnext" },
  { id: 55, path: "Zoomed_Set_Rotation_Asset_03_REVERSE.mp4", rotationSet: 3, type: "zoomreverse" },
  { id: 56, path: "Zoomed_Set_Rotation_Asset_04.mp4", rotationSet: 4, type: "zoomnext" },
  { id: 57, path: "Zoomed_Set_Rotation_Asset_04_REVERSE.mp4", rotationSet: 4, type: "zoomreverse" },
  { id: 58, path: "Zoomed_Set_Rotation_Asset_05.mp4", rotationSet: 5, type: "zoomnext" },
  { id: 59, path: "Zoomed_Set_Rotation_Asset_05_REVERSE.mp4", rotationSet: 5, type: "zoomreverse" },
  { id: 60, path: "Zoomed_Set_Rotation_Asset_06.mp4", rotationSet: 6, type: "zoomnext" },
  { id: 61, path: "Zoomed_Set_Rotation_Asset_06_REVERSE.mp4", rotationSet: 6, type: "zoomreverse" },
  { id: 62, path: "Zoomed_Set_Rotation_Asset_07.mp4", rotationSet: 7, type: "zoomnext" },
  { id: 63, path: "Zoomed_Set_Rotation_Asset_07_REVERSE.mp4", rotationSet: 7, type: "zoomreverse" },
  { id: 64, path: "Zoomed_Set_Rotation_Asset_08.mp4", rotationSet: 8, type: "zoomnext" },
  { id: 65, path: "Zoomed_Set_Rotation_Asset_08_REVERSE.mp4", rotationSet: 8, type: "zoomreverse" }]

  imageData = [{ id: 1, path: "01_HUD_Idle.jpg" }, { id: 2, path: "01_Idle.jpg" },
  { id: 3, path: "02_HUD_Idle.jpg" }, { id: 4, path: "02_Idle.jpg" },
  { id: 5, path: "03_HUD_Idle.jpg" }, { id: 6, path: "03_Idle.jpg" },
  { id: 7, path: "04_HUD_Idle.jpg" }, { id: 8, path: "04_Idle.jpg" },
  { id: 9, path: "05_HUD_Idle.jpg" }, { id: 10, path: "05_Idle.jpg" },
  { id: 11, path: "06_HUD_Idle.jpg" }, { id: 12, path: "06_Idle.jpg" },
  { id: 13, path: "07_HUD_Idle.jpg" }, { id: 14, path: "07_Idle.jpg" },
  { id: 15, path: "08_HUD_Idle.jpg" }, { id: 16, path: "08_Idle.jpg" },
  { id: 17, path: "HUD_1_Cleanplate_Moment.jpg" }];
  cleanPlateData = [{ id: 1, path: "Asset_1_Spin_Video_360_Frames.webm" },
  { id: 2, path: "HUD_1_Cleanplate.mp4" }, { id: 3, path: "A1_Idle.mp4" }];
  rotationImageframes = [];
  loading = true;
  loadPercentage = 0;
  bImageData = [];
  clicks = 0;
  imageId = 1;
  zoomIndex = 0;
  rotationAngle: any;
  PosBefore = 0;
  PosAfter = 0;
  videoFrames = [];
  frameIndex = 0;

  //public threeSixtyImages = [];

  threeSixtyImages = {
    0: []
  };

  constructor(private _http: HttpClient, private sanitization: DomSanitizer) {
    this.loadAllVideo();
    //rotation 360 frames
    // for (let i = 0; i < 91; i++) {
    //   let videoFrame = new Image;
    //   let data = { id: i + 1, path: "../assets/images/Asset_01_Turntable_360_Frames/Block_Crop_1_" + (200 + i) + ".png" };
    //   this.videoFrames.push()
    //   videoFrame.src = "../assets/images/Asset_01_Turntable_360_Frames/Block_Crop_1_" + (200 + i) + ".png";
    //   this.threeSixtyImages[0].push("/assets/images/Asset_01_4_Frames/Asset_1_360_Rotation_Skip_4_Frames_" + (200 + i) + ".png")
    //   this.videoFrames.push(videoFrame);
    //   this.rotationImageframes.push(data);
    // }
    //rotation 4 frames
    // for (let i = 0; i < 91; i++) {
    //   let data = { id: i + 1, path: "../assets/images/Asset_01_4_Frames/Asset_1_360_Rotation_Skip_4_Frames_" + (200 + i) + ".png" };
    //   this.rotationImageframes.push(data);
    // }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  async loadAllVideo() {
    for (let i = 0; i < this.data.length; i++) {
      let vData = await this.getData("../assets/video/" + this.data[i].path, "video");
      if (i == (this.data.length - 1))
        this.loadCleanPlateVideo();
    }
  }

  async loadCleanPlateVideo() {
    for (let i = 0; i < this.cleanPlateData.length; i++) {
      let vData = await this.getData("../assets/video/" + this.cleanPlateData[i].path, "video");
      if (i == (this.cleanPlateData.length - 1))
        this.loadAllImage();
    }
  }

  // async loadRotationalImages() {
  //   for (let i = 0; i < this.rotationImageframes.length; i++) {
  //     let vData = await this.getData(this.rotationImageframes[i].path, "rotationImage");
  //     if (i == (this.rotationImageframes.length - 1))
  //       this.loadAllImage();
  //   }
  // }

  async loadAllImage() {
    for (let i = 0; i < this.imageData.length; i++) {
      let iData = await this.getData("../assets/images/" + this.imageData[i].path, "image");
      if (i == (this.imageData.length - 1)) {
        // console.log(this.videoFrames)
        // let rData = this.loadedData.filter(a => a.type == "rotationImage");
        // rData.forEach(e => {

        // });

        for (let i = 1; i <= 72; i++) {
          var videoFrameUrl = 'https://rphv.net/walkthrough/tmp-' + i + '.gif';
          //var videoFrameUrl = 'video/layer/slap' + i + '.png';	
          //this.threeSixtyImages.push(videoFrameUrl);
        }
        this.loading = false;
        //$("#demo").hide();

        this.bImageData = this.loadedData.filter(a => a.type == "image");
        this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == "../assets/video/" + this.data[0].path)[0].src);
        this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == "../assets/images/" + this.imageData[1].path)[0].src);
      }
    }
  }

  blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  async getData(path, type): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.set('responseType', 'blob');
      this._http.get(path, {
        responseType: 'blob' as 'json', reportProgress: true,
        observe: 'events'
      })
        .subscribe(data => {
          let res: any = data;
          if (res.status == 200) {
            resolve(res);
            if (res.body) {
              if (type == "rotationImage") {
                const reader = new FileReader();
                const binaryString = reader.readAsDataURL(res.body);
                reader.onload = (event: any) => {
                  let d = { path: path, src: event.target.result, type: type };
                  this.loadPercentage = Math.round(this.loadPercentage + 1.20);
                  this.loadedData.push(d);
                };
              } else {
                var vid = window.URL.createObjectURL(res.body);
                let d = { path: path, src: vid, type: type };
                this.loadPercentage = Math.round(this.loadPercentage + 1.20);
                this.loadedData.push(d);
              }
            }
          }
        },
          err => {
            console.error(err);
          });
    });
  }

  getSafeData(url) {
    return this.sanitization.bypassSecurityTrustResourceUrl(url);
  }

  videoEnd() {
    if (this.clicks == 1) {
      let pSrc = "../assets/images/08_Idle.jpg";
      this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
    }
    if (this.type == "zoomout") {
      this.loadCleanPlate();
      // if (this.videoSrc1 == null) {
      //   this.posterSrc = "";

      // }
    }
    if (this.counter == this.data.length)
      this.videoplayer.nativeElement.stop();
  }

  next() {
    this.videoType = "video/mp4";

    this.rotationCounter = this.rotateType == "previous" ? (this.rotationCounter == 8 ? 1 : this.rotationCounter + 1) : this.rotationCounter;
    let vdata = this.data.filter(a => a.rotationSet == this.rotationCounter);
    if (this.type == "zoomout") {
      // let pSrc = "../assets/images/0" + (vdata[0].rotationSet) + "_HUD_Idle.jpg";
      // this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
      // let vSrc = "../assets/video/" + vdata.filter(a => a.type == "zoomnext")[0].path;
      // this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
    } else {
      this.posterSrc = "";
      let pSrc = "../assets/images/0" + (vdata[0].rotationSet) + "_Idle.jpg";
      this.imageId = this.loadedData.filter(a => a.path == pSrc)[0].id;
      this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
      let vSrc = "../assets/video/" + vdata.filter(a => a.type == "rotation")[0].path;
      this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
    }
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
    this.rotationCounter = this.rotationCounter == 8 ? 1 : this.rotationCounter + 1;
    this.rotateType = "next";
    this.loading = false;
  }

  previous() {
    this.videoType = "video/mp4";
    this.rotationCounter = this.rotateType == "next" ? (this.rotationCounter == 1 ? 8 : this.rotationCounter - 1) : this.rotationCounter;
    this.rotationCounter = this.rotateType == "" ? 8 : this.rotationCounter;
    let vdata = this.data.filter(a => a.rotationSet == this.rotationCounter);
    if (this.type == "zoomout") {
      // let pSrc = "../assets/images/0" + (vdata[0].rotationSet == 7 ? 8 : (this.rotationCounter == 8 ? 1 : vdata[0].rotationSet + 1)) + "_HUD_Idle.jpg";
      // this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
      // let vSrc = "../assets/video/" + vdata.filter(a => a.type == "zoomreverse")[0].path;
      // this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
    } else {
      this.posterSrc = this.clicks == 0 ? this.posterSrc : "";
      if (this.clicks > 0) {
        let pSrc = "../assets/images/0" + (vdata[0].rotationSet == 7 ? 8 : (this.rotationCounter == 8 ? 1 : vdata[0].rotationSet + 1)) + "_Idle.jpg";
        this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
      }
      let vSrc = "../assets/video/" + vdata.filter(a => a.type == "reverse")[0].path;
      this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
    }
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
    this.rotationCounter = this.rotationCounter == 1 ? 8 : this.rotationCounter - 1;
    this.rotateType = "previous";
    this.clicks++;
  }

  canplaythrough(event) {
    this.imageId = 0;
  }

  toggleVideo() {
    this.videoType = "video/mp4";
    if (this.type == "" || this.type == "zoomin") {

      let vdata = this.data.filter(a => a.rotationSet == (this.rotateType != "" && this.rotateType == "previous" ? (this.rotationCounter == 8 ? 1 : this.rotationCounter + 1) : this.rotationCounter));
      let pSrc = "../assets/images/0" + (vdata[0].rotationSet) + "_Idle.jpg";
      this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
      let vSrc = "../assets/video/" + vdata.filter(a => a.type == "zoomin")[0].path;
      this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
      this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
      this.type = "zoomout";
      this.zoomIndex = this.zoomIndex == 0 ? 1 : this.zoomIndex;

    } else if (this.type == "zoomout") {
      //$("#demo").hide();
      let vdata = this.data.filter(a => a.rotationSet == (this.rotateType != "" && this.rotateType == "previous" ? (this.rotationCounter == 8 ? 1 : this.rotationCounter + 1) : this.rotationCounter));
      let pSrc = "../assets/images/0" + (vdata[0].rotationSet) + "_HUD_Idle.jpg";
      this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
      let vSrc = "../assets/video/" + vdata.filter(a => a.type == "zoomout")[0].path;
      this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
      this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
      this.type = "zoomin";
      this.videoSrc1 = null;
    }
  }

  supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase();
    let hasMediaCapabilities = false;
    if ("mediaCapabilities" in navigator)
      hasMediaCapabilities = true;
    const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome') != -1) && (ua.indexOf('version/') != -1)))
    return isSafari && hasMediaCapabilities
  }

  async loadCleanPlate() {
    $("#demo").tikslus360({
      imageDir: 'assets/images/Asset_01_4_Frames',// the location where you’ve put the images.
      imageCount: 91,// the number of images you have.
      imageExt: 'png',// the extension of the images. Make sure all the images have same extension.
      canvasID: 'mycar',// ID that will be assigned to the canvas
      canvasWidth: $("#demo").width(),// width of canvas
      canvasHeight: $("#demo").height(),// height of canvas
      autoRotate: true,// if TRUE, auto rotation will be enabled by default
      autoRotateInterval: 100,// rotation inteval
      fadeInInterval: 0// fade interval
    });
    // if (this.zoomIndex == 1) {
    //   let pSrc = "../assets/images/HUD_1_Cleanplate_Moment.jpg";
    //   this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
    // }
    // this.videoType = this.supportsHEVCAlpha() ? 'video/mov' : 'video/webm';
    // let vSrc = "../assets/video/" + this.cleanPlateData.filter(a => a.id == 2)[0].path;
    // this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
    // this.videoplayer.nativeElement.load();
    // this.videoplayer.nativeElement.play();



    // let vSrc1 = "../assets/video/" + this.cleanPlateData.filter(a => a.id == 1)[0].path;
    // this.videoSrc1 = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc1)[0].src);
    //this.videoFrames = await this.extractFramesFromVideo(vSrc1);
    //this.videoFrames = this.loadedData.filter(a => a.type == "rotationImage");
  }

  mousemove(event) {
    if (this.type == "zoomout") {

      // if (this.videoFrames.length > 0 && this.PosBefore > 0) {
      //   this.imageSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.videoFrames[0].src);
      //   this.videoSrc1 = null;
      //   this.PosAfter = event.pageX - this.PosBefore;
      //   this.frameIndex = this.videoFrames.length == this.frameIndex ? 0 : this.frameIndex;
      //   console.log(this.frameIndex)
      //   if (this.PosAfter < -1) {
      //     this.PosAfter = 0;
      //     this.PosBefore = event.pageX;
      //     // let context = this.canvas.nativeElement.getContext('2d');
      //     // context.drawImage(this.videoFrames[this.frameIndex == 0 ? (this.videoFrames.length - 1) : this.frameIndex--], 0, 0);
      //     //this.imageSrc = this.videoFrames ? this.sanitization.bypassSecurityTrustResourceUrl(this.videoFrames[this.frameIndex == 0 ? (this.videoFrames.length - 1) : this.frameIndex--]) : "";
      //   } else if (this.PosAfter > 1) {
      //     this.PosAfter = 0;
      //     this.PosBefore = event.pageX;
      //     // let context = this.canvas.nativeElement.getContext('2d');
      //     // context.drawImage(this.videoFrames[this.frameIndex++], 0, 0);
      //     //this.imageSrc = this.videoFrames ? this.sanitization.bypassSecurityTrustResourceUrl(this.videoFrames[this.frameIndex++]) : "";
      //   }
      // } else {
      //   if (this.videoplayer1) {
      //     //this.videoplayer1.nativeElement.playbackRate = 0.5;
      //     const arrowCenter = this.getCenter(this.videoplayer1.nativeElement);
      //     this.rotationAngle = 'rotateY(' + (Math.atan2(event.y - arrowCenter.y, event.x - arrowCenter.x)) + 'rad)';
      //   }
      // }
    }
  }

  mousedown(event) {
    this.PosBefore = event.pageX;
    if (this.videoplayer1)
      this.videoplayer1.nativeElement.pause();
  }

  mouseup() {
    this.PosBefore = 0;
    this.PosAfter = 0;
    this.imageSrc = "";
    if (this.videoplayer1)
      this.videoplayer1.nativeElement.play();
  }

  getCenter(element) {
    const { left, top, width, height } = element.getBoundingClientRect();
    return { x: left + width / 2, y: top + height / 2 }
  }

  getRotationAngle() {
    return this.sanitization.bypassSecurityTrustStyle(this.rotationAngle);
  }

  async extractFramesFromVideo(videoUrl, fps = 4) {
    return new Promise(async (resolve) => {

      // fully download it first (no buffering):
      let videoBlob = await fetch(videoUrl).then(r => r.blob());
      let videoObjectUrl = URL.createObjectURL(videoBlob);
      let video = document.createElement("video");

      let seekResolve;
      video.addEventListener('seeked', async function () {
        if (seekResolve) seekResolve();
      });

      video.src = videoObjectUrl;

      // workaround chromium metadata bug (https://stackoverflow.com/q/38062864/993683)
      while ((video.duration === Infinity || isNaN(video.duration)) && video.readyState < 2) {
        await new Promise(r => setTimeout(r, 1000));
        video.currentTime = 10000000 * Math.random();
      }
      let duration = video.duration;

      let canvas = document.createElement('canvas');
      let context = canvas.getContext('2d');
      let [w, h] = [video.videoWidth, video.videoHeight]
      canvas.width = w;
      canvas.height = h;

      let frames = [];
      let interval = 1 / fps;
      let currentTime = 0;

      while (currentTime < duration) {
        video.currentTime = currentTime;
        await new Promise(r => seekResolve = r);

        context.drawImage(video, 0, 0, w, h);
        let base64ImageData = canvas.toDataURL();
        frames.push(base64ImageData);

        currentTime += interval;
      }
      resolve(frames);
    });
  }

  changeBackground(wType) {
    this.type = "zoomin";
    if (wType == "cloud") {
      let pSrc = "../assets/images/01_Idle.jpg";
      this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
      let vSrc = "../assets/video/" + this.cleanPlateData[2].path;
      this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
      this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
    } else if (wType == "sun") {
      let vdata = this.data.filter(a => a.rotationSet == (this.rotateType != "" && this.rotateType == "previous" ? (this.rotationCounter == 8 ? 1 : this.rotationCounter + 1) : this.rotationCounter));
      let pSrc = "../assets/images/0" + (vdata[0].rotationSet) + "_Idle.jpg";
      this.posterSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == pSrc)[0].src);
      let vSrc = "../assets/video/" + vdata.filter(a => a.type == "idle")[0].path;
      this.videoSrc = this.sanitization.bypassSecurityTrustResourceUrl(this.loadedData.filter(a => a.path == vSrc)[0].src);
      this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
    }
  }

}
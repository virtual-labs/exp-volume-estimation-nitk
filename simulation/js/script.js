function navNext() {
    for (temp = 0; temp <= 5; temp++) {
      document.getElementById("canvas" + temp).style.visibility = "hidden";
    }
    simsubscreennum += 1;
    document.getElementById("canvas" + simsubscreennum).style.visibility =
      "visible";
    document.getElementById("nextButton").style.visibility = "hidden";
    magic();
}

function animatearrow() {
    if (document.getElementById("arrow1").style.visibility == "hidden")
      document.getElementById("arrow1").style.visibility = "visible";
    else document.getElementById("arrow1").style.visibility = "hidden";
  }
  function animatearrow1() {
    if (document.getElementById("arrow2").style.visibility == "hidden")
      document.getElementById("arrow2").style.visibility = "visible";
    else document.getElementById("arrow2").style.visibility = "hidden";
  }
  
  
  function myStopFunction() {
    clearInterval(myInt);
    document.getElementById("arrow1").style.visibility = "hidden";
  }
  function myStopFunction1() {
    clearInterval(myInt);
    document.getElementById("arrow2").style.visibility = "hidden";
  }
  function contents() {
    document.getElementById("checker1").style.visibility = "visible";
  }
  let checkCount = 0;
  function magic() {
    if (simsubscreennum == 1) {
      document.getElementById("drone1").style.visibility = "visible";
      document.getElementById("sensor1").style.visibility = "visible";
      myInt = setInterval(function () {
        animatearrow();
      }, 500);
      document.getElementById("arrow1").style =
        "visibility:visible; position:absolute; left:617px; top:331px; height:40px; z-index:10;";
      document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
      document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
      document.getElementById("arrow1").style.transform = "rotate(270deg)";
      document.getElementById("sensor1").onclick = function () {
        myStopFunction();
        document.getElementById("sensor1").onclick = "";
        document.getElementById("sensor1").style.visibility = "hidden";
        document.getElementById("sensor2").style.visibility = "visible";
      document.getElementById("sensor2").style.animation =
        "moveSensor 2s forwards";
        setTimeout(function () {
          document.getElementById("drone1").style.visibility = "hidden";
          document.getElementById("sensor2").style.visibility = "hidden";
          document.getElementById("drone2").style.visibility = "visible";
          document.getElementById("dialogue").style.visibility = "visible";
          document.getElementById("ok1").onclick = function () {
            document.getElementById("dialogue").style.visibility = "hidden";
            document.getElementById("divi1").style.visibility = "hidden";
            document.getElementById("lanPad").style.visibility = "visible"; 
            setTimeout(function () {
              document.getElementById("drone2").style.animation =
        "moveLanPad 2s forwards";
        setTimeout(function(){
          document.getElementById("nextButton").style.visibility = "visible";
        },2000)
            },500);
          }
        },2000);
      }

        
    }
    else if(simsubscreennum == 2){
      document.getElementById("drone2").style.visibility = "hidden";

      document.getElementById("lanPad").style.visibility = "hidden"; 
      document.getElementById("tripod1").style.visibility = "visible"; 
      document.getElementById("rod1").style.visibility = "visible"; 
      document.getElementById("clamp").style.visibility = "visible"; 
      myInt = setInterval(function () {
        animatearrow();
      }, 500);
      document.getElementById("arrow1").style =
        "visibility:visible; position:absolute; left:570px; top:205px; height:40px; z-index:10;";
      document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
      document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
      document.getElementById("arrow1").style.transform = "rotate(180deg)";
      document.getElementById("rod1").onclick = function () {
        myStopFunction();
        document.getElementById("rod1").style.animation =
        "moveRod 2s forwards";
        setTimeout(function () {
          document.getElementById("rtk2").style.visibility = "visible"; 
          document.getElementById("rod1").style.visibility = "hidden"; 
          document.getElementById("rod2").style.visibility = "hidden"; 
          document.getElementById("tripod1").style.visibility = "hidden"; 
          document.getElementById("mount").style.visibility = "visible"; 
          myInt = setInterval(function () {
            animatearrow();
          }, 500);
          document.getElementById("arrow1").style =
            "visibility:visible; position:absolute; left:570px; top:205px; height:40px; z-index:10;";
          document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
          document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
          document.getElementById("arrow1").style.transform = "rotate(180deg)";
          document.getElementById("mount").onclick = function () {
            myStopFunction();
            document.getElementById("mount").style.animation =
            "moveMount 2s forwards";
            setTimeout(function () {
              document.getElementById("clamp").style.visibility = "hidden"; 
              document.getElementById("hand1").style.visibility = "visible";
              document.getElementById("backpage").style.visibility = "visible";
              document.getElementById("backpage").style.animation =
              "moveBg 2s forwards";
              document.getElementById("mount1").style.visibility = "visible";
              document.getElementById("mount1").style.animation =
              "moveBgMount 2s forwards";
              setTimeout(function () {
              document.getElementById("hand2").style.visibility = "visible"; 
              document.getElementById("hand2").style.animation =
              "rotateHand 2s forwards";
              setTimeout(function () {

                document.getElementById("backpage").style.visibility = "hidden";
                document.getElementById("mount1").style.visibility = "hidden";
                document.getElementById("hand2").style.visibility = "hidden";
                document.getElementById("dialogue1").style.visibility = "visible";
                document.getElementById("ok2").onclick = function () {
                  document.getElementById("rtk2").style.visibility = "hidden"; 

                  document.getElementById("dialogue1").style.visibility = "hidden";
                  document.getElementById("divi2").style.visibility = "hidden";
                  document.getElementById("rod2").style.visibility = "hidden"; 
                  document.getElementById("mount").style.visibility = "hidden"; 
                  document.getElementById("tripod1").style.visibility = "hidden"; 
                  document.getElementById("hand1").style.visibility = "hidden";
                  document.getElementById("rtkSet").style.visibility = "visible";
                  document.getElementById("waterPath").style.visibility = "visible";
                  document.getElementById("waterPath").style.animation =
                  "waterpath 2s forwards";
                  setTimeout(function () {

                  document.getElementById("bubble").style.visibility = "visible";
                  document.getElementById("rtkSet").style.animation =
              "moveRtk 2s forwards";
              document.getElementById("bubble").style.animation =
              "moveBubble 2s forwards";
              setTimeout(function () {
                document.getElementById("nextButton").style.visibility = "visible";

              },2000);
            },2000);

                }
             
              },2000);
              },2000);



            },1500);

          }
          
        },2000);



      }
    }
    else if(simsubscreennum == 3){
      document.getElementById("clamp").style.visibility = "hidden"; 
      document.getElementById("rtkSet").style.visibility = "hidden";
                  document.getElementById("waterPath").style.visibility = "hidden";
                  document.getElementById("bubble").style.visibility = "hidden";
      document.getElementById("tripod1").style.visibility = "hidden"; 
      document.getElementById("hand1").style.visibility = "hidden"; 
      document.getElementById("hand2").style.visibility = "hidden"; 
      document.getElementById("mount1").style.visibility = "hidden";
      document.getElementById("backpage").style.visibility = "hidden";
      document.getElementById("rod2").style.visibility = "hidden"; 
          document.getElementById("mount").style.visibility = "hidden"; 
      document.getElementById("rtk1").style.visibility = "visible";
      myInt = setInterval(function () {
        animatearrow();
      }, 500);
      document.getElementById("arrow1").style =
        "visibility:visible; position:absolute; left:204px; top:220px; height:40px; z-index:10;";
      document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
      document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
      document.getElementById("arrow1").style.transform = "rotate(0deg)";
      document.getElementById("rtk1").onclick = function () {
        myStopFunction();
        document.getElementById("backpage1").style.visibility = "visible";
        document.getElementById("backpage1").style.animation =
        "moveBgMount1 2s forwards";
        document.getElementById("battery1").style.visibility = "visible";
        document.getElementById("battery1").style.animation =
        "moveBgMount2 2s forwards";
        setTimeout(function () {
          document.getElementById("battery2").style.visibility = "visible";
          document.getElementById("battery2").style.animation =
        "moveBattery 2s forwards";
        setTimeout(function () {
          document.getElementById("battery2").style.visibility = "hidden";
          document.getElementById("battery1").style.visibility = "hidden";
          document.getElementById("battery3").style.visibility = "visible";
          document.getElementById("batteryCover").style.visibility = "visible";
          document.getElementById("batteryCover").style.animation =
        "moveBatteryCover 2s forwards";
        setTimeout(function () {
          // document.getElementById("battery3").style.visibility = "hidden";
          document.getElementById("batteryCover").style.visibility = "hidden";
          document.getElementById("battery4").style.visibility = "visible";
          setTimeout(function () {

          document.getElementById("backpage1").style.visibility = "hidden";
          document.getElementById("battery1").style.visibility = "hidden";
          document.getElementById("battery2").style.visibility = "hidden";
          document.getElementById("battery3").style.visibility = "hidden";
          document.getElementById("battery4").style.visibility = "hidden";
          document.getElementById("batteryCover").style.visibility = "hidden";
          myInt = setInterval(function () {
            animatearrow();
          }, 500);
          document.getElementById("arrow1").style =
            "visibility:visible; position:absolute; left:204px; top:134px; height:40px; z-index:10;";
          document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
          document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
          document.getElementById("arrow1").style.transform = "rotate(0deg)";
          document.getElementById("rtk1").onclick = function () {
            myStopFunction();
            document.getElementById("backpage1").style.visibility = "visible";
            document.getElementById("mount2").style.visibility = "visible";
            document.getElementById("hand111").style.visibility = "visible";
            document.getElementById("hand111").style.animation =
        "movePower 2s forwards";
        setTimeout(function () {
            document.getElementById("nextButton").style.visibility = "visible";
        },3000);
          }
        },500);

        },2000);

        },2000);
        },2000);

      
      }

    }
    else if(simsubscreennum == 4){
      document.getElementById("hand111").style.visibility = "hidden";
      document.getElementById("rtk1").style.visibility = "hidden";
      document.getElementById("backpage1").style.visibility = "hidden";
            document.getElementById("mount2").style.visibility = "hidden";
      document.getElementById("ipad").style.visibility = "visible";
      document.getElementById("tab").style.visibility = "visible";
      document.getElementById("tab2").style.visibility = "visible";
      document.getElementById("plan").disabled = false;
      document.getElementById("demo2").style.color = "grey";

    document.getElementById("height").disabled = true;
      document.getElementById("plan").onclick = function () {
        document.getElementById("fh").disabled = false;
        //change1();
        document.getElementById("7-a").onclick = function () {
          //showArea();
          let value = document.getElementById("fh").value;
          if (document.getElementById("7-a").checked) {
            document.getElementById("7-aa").style.visibility = "visible";

            switch (value) {
              case "45":
                // acre();

                document.getElementById("7-1-2").style.visibility =
                  "hidden";
                document.getElementById("7-1-5").style.visibility =
                  "visible";
                document.getElementById("7-1-9").style.visibility =
                  "hidden";
                // document.getElementById("7-1-10").style.visibility =
                // "hidden";
                document.getElementById("7-1-66").style.visibility =
                  "visible";
                document.getElementById("7-1-7a").style.visibility =
                  "visible";
                document.getElementById("7-1-7a").style.visibility =
                  "visible";
                document.getElementById("7-1-6").style.visibility =
                  "hidden";
                document.getElementById("sub1").disabled = false;
                document.getElementById("sub1").onclick = function () {
                  document.getElementById("7-a").disabled = true;
                  document.getElementById("fh").disabled = true;
                  document.getElementById("plan").disabled = true;
                  document.getElementById("7-1-66").style.animation =
                    "movearrow 30s forwards";
                  move();
                  document.getElementById("sub1").disabled = true;
                  
                  document.getElementById("num-1").style.visibility =
                    "visible";
                  document.getElementById("num-2").style.visibility =
                    "visible";
                  document.getElementById(
                    "handleCount"
                  ).style.visibility = "visible";

                  document.getElementById("num-3").style.visibility =
                    "visible";
                  setTimeout(function () {
                    document.getElementById("dialo").style.visibility =
                      "visible";
                    document.getElementById("fh").disabled = false;
                    // document.getElementById("plan").disabled = false;
                    // var u = document.getElementById("upload");
                    // u.disabled = false;
                    // document.getElementById("upload").disabled = false;
                    document.getElementById("fh").disabled = true;
                    document.getElementById("uploads").style.visibility =
                    "visible";
                    document.getElementById("uploads").onclick =
                      function () {
                        if (document.getElementById("uploads").click) {
                          document.getElementById(
                            "7-1-11"
                          ).style.visibility = "visible";
                          document.getElementById("uploads").style.visibility =
                          "hidden";
                          document.getElementById("plan").disabled = true;
                          document.getElementById("sub1").disabled = true;
                          document.getElementById(
                            "out1"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "output1"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "10-4"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "7-1-2"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "7-1-5"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "10-1"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "7-1-66"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "7-1-7a"
                          ).style.visibility = "hidden";
                          document.getElementById("10-1").onclick =
                            function () {
                              // document.getElementById(
                              //   "10-2"
                              // ).style.animation = "spin 2s forwards";
                              document.getElementById(
                                "10-1"
                              ).style.visibility = "hidden";
                              document.getElementById(
                                "7-1-11"
                              ).style.visibility = "hidden";
                              document.getElementById(
                                "10-4"
                              ).style.visibility = "hidden";
                              document.getElementById(
                                "10-2"
                              ).style.visibility = "visible";
                              move3();

                              setTimeout(function () {
                                document.getElementById(
                                  "l1"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "up1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "fh"
                                ).disabled = false;
                                document.getElementById("nextButton").style.visibility = "visible";
                                // document.getElementById(
                                //   "nextButton"
                                // ).style.visibility = "visible";
                                // document.getElementById("next1").onclick =
                                //   function () {
                                //     plotUsingPlotly1();
                                //     document.getElementById(
                                //       "next1"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "form1"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "tab3"
                                //     ).style.visibility = "visible";
                                //     document.getElementById(
                                //       "7-aa"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "sub1"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "handleCount"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "num-3"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "num-2"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "10-2"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "up1"
                                //     ).style.visibility = "hidden";
                                //     // document.getElementById(
                                //     //   "7-1-4"
                                //     // ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "tab"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "7-1-7"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "7-1-8"
                                //     ).style.visibility = "hidden";

                                //     document.getElementById(
                                //       "num-1"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "out1"
                                //     ).style.visibility = "hidden";
                                //     document.getElementById(
                                //       "output1"
                                //     ).style.visibility = "hidden";
                                //     // document.getElementById(
                                //     //   "tab2"
                                //     // ).style.visibility = "visible";
                                //     // document.getElementById(
                                //     //   "8-1-5"
                                //     // ).style.visibility = "visible";
                                //   };
                              }, 2000);
                            };
                        } else {
                          document.getElementById(
                            "plan"
                          ).disabled = false;
                          document.getElementById(
                            "7-1-11"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "up1"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "10-2"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "handleCount"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "out1"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "output1"
                          ).style.visibility = "hidden";
                        }
                      };
                  }, 30000);
                };
                break;
              case "65":
                document.getElementById("plan").disabled = false;
                document.getElementById("nextButton").style.visibility =
                  "hidden";
                document.getElementById("7-1-66").style.visibility =
                  "hidden";
                document.getElementById("out1").style.visibility =
                  "hidden";
                document.getElementById("output1").style.visibility =
                  "hidden";
                document.getElementById("7-1-7a").style.visibility =
                  "hidden";
                document.getElementById("up1").style.visibility =
                  "hidden";
                document.getElementById("10-2").style.visibility =
                  "hidden";
                document.getElementById("10-1").style.visibility =
                  "hidden";
                document.getElementById("7-1-5").style.visibility =
                  "hidden";
                document.getElementById("7-1-2").style.visibility =
                  "hidden";
                document.getElementById("7-1-9").style.visibility =
                  "visible";
                // document.getElementById("7-1-10").style.visibility =
                // "hidden";
                document.getElementById("7-1-11").style.visibility =
                  "hidden";
                document.getElementById("7-1-6").style.visibility =
                  "visible";
                document.getElementById("7-1-7b").style.visibility =
                  "visible";
                // document.getElementById("next1").style.visibility =
                //   "hidden";
                document.getElementById("sub1").disabled = false;
                document.getElementById("sub1").onclick = function () {
                  document.getElementById("7-a").disabled = true;
                  document.getElementById("plan").disabled = true;
                  document.getElementById("7-1-6").style.animation =
                    "movearrow2 30s forwards";
                  move1();
                  document.getElementById("sub1").disabled = true;
                  document.getElementById("fh").disabled = true;
                  document.getElementById("num-1").style.visibility =
                    "visible";
                  document.getElementById("num-2").style.visibility =
                    "visible";
                  document.getElementById(
                    "handleCount"
                  ).style.visibility = "visible";
                  document.getElementById("num-3").style.visibility =
                    "visible";
                  setTimeout(function () {
                    document.getElementById("dialo1").style.visibility =
                      "visible";
                    document.getElementById("fh").disabled = true;
                    // document.getElementById("upload").disabled = false;
                    document.getElementById("uploads").style.visibility =
                    "visible";
                    document.getElementById("uploads").onclick =
                      function () {
                        if (document.getElementById("uploads").click) {
                          document.getElementById(
                            "7-1-11"
                          ).style.visibility = "visible";
                          document.getElementById("uploads").style.visibility =
                          "hidden";
                          document.getElementById(
                            "out1"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "output1"
                          ).style.visibility = "visible";
                          document.getElementById("plan").disabled = true;
                          document.getElementById(
                            "out1"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "output1"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "10-4"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "7-1-9"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "7-1-5"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "10-1"
                          ).style.visibility = "visible";
                          document.getElementById(
                            "7-1-6"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "7-1-7b"
                          ).style.visibility = "hidden";

                          document.getElementById("10-1").onclick =
                            function () {
                              document.getElementById(
                                "10-1"
                              ).style.visibility = "hidden";
                              document.getElementById(
                                "7-1-11"
                              ).style.visibility = "hidden";
                              document.getElementById(
                                "10-4"
                              ).style.visibility = "hidden";
                              document.getElementById(
                                "10-2"
                              ).style.visibility = "visible";
                              move3();

                              setTimeout(function () {
                                document.getElementById(
                                  "l1"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "up1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "fh"
                                ).disabled = true;
                                document.getElementById("nextButton").style.visibility = "visible";
                                // document.getElementById(
                                //   "next1"
                                // ).style.visibility = "hidden";
                                // document.getElementById("next1").onclick =
                                  // function () {
                                  //   document.getElementById(
                                  //     "form1"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "tab3"
                                  //   ).style.visibility = "visible";
                                  //   document.getElementById(
                                  //     "7-aa"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "sub1"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "handleCount"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "num-3"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "10-2"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "up1"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "7-1-4"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "tab"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "7-1-7"
                                  //   ).style.visibility = "hidden";
                                  //   document.getElementById(
                                  //     "7-1-8"
                                  //   ).style.visibility = "hidden";

                                  //   document.getElementById(
                                  //     "8-1-1"
                                  //   ).style.visibility = "visible";
                                  //   // document.getElementById(
                                  //   //   "tab2"
                                  //   // ).style.visibility = "visible";
                                  //   document.getElementById(
                                  //     "8-1-5"
                                  //   ).style.visibility = "visible";
                                  // };
                              }, 2000);
                            };
                        } else {
                          document.getElementById(
                            "plan"
                          ).disabled = false;
                          document.getElementById(
                            "7-1-11"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "up1"
                          ).style.visibility = "hidden";
                          document.getElementById(
                            "10-2"
                          ).style.visibility = "hidden";
                        }
                      };
                  }, 30000);
                };

                break;
            }
          } else {
            document.getElementById("7-1-2").style.visibility = "visible";
            // document.getElementById("7-1-10").style.visibility = "hidden";
            document.getElementById("7-1-9").style.visibility = "hidden";
            document.getElementById("7-1-5").style.visibility = "hidden";
            document.getElementById("7-1-6").style.visibility = "hidden";
            document.getElementById("7-1-7b").style.visibility = "hidden";
            document.getElementById("up1").style.visibility = "hidden";
            document.getElementById("10-2").style.visibility = "hidden";
            document.getElementById("load").style.visibility = "hidden";
          }

          setTimeout(function () {
            // document.getElementById("7-1-2").style.visibility = "hidden";
            // document.getElementById("7-1-5").style.visibility = "visible";
            // document.getElementById("sub1").onclick = function () {
            //   document.getElementById("sub1").onclick = "";
            //   // document.getElementById("p7-1").style.visibility = "visible";
            //   document.getElementById("7-1-6").style.animation =
            //     "movearrow 30s forwards";
            //   setTimeout(function () {}, 30000);
            // };
          }, 500);
        };
      };
    }
    else if(simsubscreennum == 5){
       
      document.getElementById("ipad").style.visibility = "visible";
      document.getElementById("tab").style.visibility = "hidden";
      document.getElementById("form1").style.visibility = "hidden";
      document.getElementById("up1").style.visibility = "hidden";
      document.getElementById("10-1").style.visibility = "hidden";
      document.getElementById("sub1").style.visibility = "hidden";
      document.getElementById("num-1").style.visibility = "hidden";
      document.getElementById("num-2").style.visibility = "hidden";
      document.getElementById("num-3").style.visibility = "hidden";
      document.getElementById("out1").style.visibility = "hidden";
      document.getElementById("output1").style.visibility = "hidden";
      document.getElementById("10-2").style.visibility = "hidden";
      document.getElementById("handleCount").style.visibility = "hidden";
      document.getElementById("7-aa").style.visibility = "hidden";
      document.getElementById("tab3").style.visibility = "visible";
      document.getElementById("sub11").onclick = function () { 
        document.getElementById("sub11").disabled=true;     
        document.getElementById(
          "11-2"
        ).style.visibility = "visible";
        document.getElementById("head1").style.visibility =
                          "visible";
        document.getElementById("l11").style.visibility = "visible";
        move4();
        setTimeout(function(){
          document.getElementById(
            "11-2"
          ).style.visibility = "hidden";
          document.getElementById("l11").style.visibility = "hidden";

          document.getElementById(
            "11-3"
          ).style.visibility = "visible";
          document.getElementById("l12").style.visibility = "visible";
          move5();
          setTimeout(function(){
            document.getElementById(
              "11-3"
            ).style.visibility = "hidden";
            document.getElementById("l12").style.visibility = "hidden";
            document.getElementById("pc").style.visibility = "visible";
            document.getElementById("nextButton").style.visibility = "visible";


          },2000)

        },2000)

      }




    }
    else if(simsubscreennum == 6){
      document.getElementById("pc").style.visibility = "hidden";
      document.getElementById("tab3").style.visibility = "hidden";
      document.getElementById("sub11").style.visibility = "hidden";
      document.getElementById("ipad").style.visibility = "hidden";
      document.getElementById("head1").style.visibility =
                          "hidden";
     

      // let value = document.getElementById("fav_language").value;
      // switch(value){
      //   case "rgb":
      //     document.getElementById("but2").onclick = function () {      
      //         document.getElementById(
      //           "b"
      //         ).style.visibility = "visible";
      
      //       }
      //       break;
      //     case "height":
      //       document.getElementById(
      //         "a"
      //       ).style.visibility = "visible";
      //       break;

      // }
    }
}
function option2(){
 
  document.getElementById(
    "a"
  ).style.visibility = "visible";
  document.getElementById(
    "b"
  ).style.visibility = "hidden";
  document.getElementById("next1").style.visibility = "visible";
  document.getElementById("next2").style.visibility = "hidden";
  document.getElementById("next1").onclick = function () { 
    document.getElementById(
      "a"
    ).style.visibility = "hidden";
    document.getElementById("b").style.visibility = "hidden";
    document.getElementById("rgb").style.visibility = "hidden";
    document.getElementById("height").style.visibility = "hidden";
    document.getElementById("rgb1").style.visibility = "hidden";
    document.getElementById("height1").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("6-3").style.visibility = "visible";
    document.getElementById("6-1-21").style.visibility = "visible";
    myInt = setInterval(function () {
      animatearrow1();
    }, 500);
    document.getElementById("arrow2").style =
      "visibility:visible; position:absolute; left:211px; top:357px; height:40px; z-index:10;";
    document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow2").style.transform = "rotate(270deg)";
    document.getElementById("6-1-21").onclick = function () {
      myStopFunction1();

    // document.getElementById("6-2").style.visibility = "visible";
    // document.getElementById("6-2").onclick = function () {
      document.getElementById("6-4").style.visibility = "visible";
      document.getElementById("6-1-1").style.visibility = "visible";
      myInt = setInterval(function () {
        animatearrow1();
      }, 500);
      document.getElementById("arrow2").style =
        "visibility:visible; position:absolute; left:211px; top:321px; height:40px; z-index:10;";
      document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
      document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
      document.getElementById("arrow2").style.transform = "rotate(270deg)";
      document.getElementById("6-1-1").onclick = function () {
        myStopFunction1();
        document.getElementById("6-5").style.visibility = "visible";
        document.getElementById("6-1-1").style.visibility = "hidden";
        document.getElementById("6-1-2").style.visibility = "visible";

        document.getElementById("6-1-2").style.visibility = "visible";
        myInt = setInterval(function () {
          animatearrow1();
        }, 500);
        document.getElementById("arrow2").style =
          "visibility:visible; position:absolute; left:255px; top:281px; height:40px; z-index:10;";
        document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
        document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
        document.getElementById("arrow2").style.transform = "rotate(270deg)";
        document.getElementById("6-1-2").onclick = function () {
          myStopFunction1();
          document.getElementById("6-1-3").style.visibility = "visible";
          document.getElementById("6-1-2").style.visibility = "hidden";
          document.getElementById("6-6").style.visibility = "visible";
          myInt = setInterval(function () {
            animatearrow1();
          }, 500);
          document.getElementById("arrow2").style =
            "visibility:visible; position:absolute; left:302px; top:250px; height:40px; z-index:10;";
          document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
          document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
          document.getElementById("arrow2").style.transform = "rotate(270deg)";
          document.getElementById("6-1-3").onclick = function () {
            myStopFunction1();
            document.getElementById("6-1-3").style.visibility = "hidden";
            document.getElementById("6-1-4").style.visibility = "visible";
            document.getElementById("6-7").style.visibility = "visible";
            myInt = setInterval(function () {
              animatearrow1();
            }, 500);
            document.getElementById("arrow2").style =
              "visibility:visible; position:absolute; left:387px; top:231px; height:40px; z-index:10;";
            document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
            document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
            document.getElementById("arrow2").style.transform = "rotate(270deg)";
            document.getElementById("6-1-4").onclick = function () {
              myStopFunction1();
              document.getElementById("6-1-5").style.visibility = "visible";
              document.getElementById("6-1-4").style.visibility = "hidden";
              document.getElementById("6-8").style.visibility = "visible";
              myInt = setInterval(function () {
                animatearrow1();
              }, 500);
              document.getElementById("arrow2").style =
                "visibility:visible; position:absolute; left:471px; top:223px; height:40px; z-index:10;";
              document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
              document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
              document.getElementById("arrow2").style.transform = "rotate(270deg)";
              document.getElementById("6-1-5").onclick = function () {
                myStopFunction1();
                document.getElementById("6-1-6").style.visibility = "visible";
                document.getElementById("6-1-5").style.visibility = "hidden";
                document.getElementById("6-9").style.visibility = "visible";
                myInt = setInterval(function () {
                  animatearrow1();
                }, 500);
                document.getElementById("arrow2").style =
                  "visibility:visible; position:absolute; left:551px; top:223px; height:40px; z-index:10;";
                document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                document.getElementById("arrow2").style.transform = "rotate(270deg)";
                document.getElementById("6-1-6").onclick = function () {
                  myStopFunction1();
                  document.getElementById("6-1-7").style.visibility = "visible";
                  document.getElementById("6-1-6").style.visibility = "hidden";
                  document.getElementById("6-10").style.visibility = "visible";
                  myInt = setInterval(function () {
                    animatearrow1();
                  }, 500);
                  document.getElementById("arrow2").style =
                    "visibility:visible; position:absolute; left:690px; top:244px; height:40px; z-index:10;";
                  document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                  document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                  document.getElementById("arrow2").style.transform = "rotate(270deg)";
                  document.getElementById("6-1-7").onclick = function () {
                    myStopFunction1();
                    document.getElementById("6-1-8").style.visibility = "visible";
                    document.getElementById("6-1-7").style.visibility = "hidden";
                    document.getElementById("6-11").style.visibility = "visible";
                    myInt = setInterval(function () {
                      animatearrow1();
                    }, 500);
                    document.getElementById("arrow2").style =
                      "visibility:visible; position:absolute; left:681px; top:310px; height:40px; z-index:10;";
                    document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                    document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                    document.getElementById("arrow2").style.transform = "rotate(270deg)";
                    document.getElementById("6-1-8").onclick = function () {
                      myStopFunction1();
                      document.getElementById("6-1-9").style.visibility = "visible";
                       document.getElementById("6-1-8").style.visibility = "hidden";
                      document.getElementById("6-12").style.visibility = "visible";
                      myInt = setInterval(function () {
                        animatearrow1();
                      }, 500);
                      document.getElementById("arrow2").style ="visibility:visible; position:absolute; left:633px; top:342px; height:40px; z-index:10;";
                      document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                      document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                      document.getElementById("arrow2").style.transform = "rotate(270deg)";
                      document.getElementById("6-1-9").onclick = function () {
                        myStopFunction1();
                        document.getElementById("6-1-10").style.visibility = "visible";
                        document.getElementById("6-1-9").style.visibility = "hidden";
                        document.getElementById("6-13").style.visibility = "visible";
                        myInt = setInterval(function () {
                          animatearrow1();
                        }, 500);
                        document.getElementById("arrow2").style =
                          "visibility:visible; position:absolute; left:488px; top:308px; height:40px; z-index:10;";
                        document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                        document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                        document.getElementById("arrow2").style.transform = "rotate(270deg)";
                        document.getElementById("6-1-10").onclick = function () {
                          myStopFunction1();
                          document.getElementById("6-1-11").style.visibility = "visible";
                          document.getElementById("6-1-10").style.visibility = "hidden";
                          document.getElementById("6-14").style.visibility = "visible";
                          myInt = setInterval(function () {
                            animatearrow1();
                          }, 500);
                          document.getElementById("arrow2").style =
                            "visibility:visible; position:absolute; left:353px; top:334px; height:40px; z-index:10;";
                          document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                          document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                          document.getElementById("arrow2").style.transform = "rotate(270deg)";
                          document.getElementById("6-1-11").onclick = function () {
                            myStopFunction1();
                            document.getElementById("6-1-12").style.visibility = "visible";
                            document.getElementById("6-1-11").style.visibility = "hidden";
                            document.getElementById("6-15").style.visibility = "visible";
                            myInt = setInterval(function () {
                              animatearrow1();
                            }, 500);
                              document.getElementById("arrow2").style =
                                "visibility:visible; position:absolute; left:254px; top:378px; height:40px; z-index:10;";
                              document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                              document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                              document.getElementById("arrow2").style.transform = "rotate(270deg)";
                              document.getElementById("6-1-12").onclick = function () {
                              myStopFunction1();
                              // document.getElementById("6-1-13").style.visibility = "visible";
                              document.getElementById("6-1-12").style.visibility = "hidden";
                              document.getElementById("6-16").style.visibility = "visible";
                              document.getElementById("compute").style.visibility = "visible";
                              //document.getElementById("6-1-13").onclick = function () {
                                                
                              // document.getElementById("6-1-13").style.visibility = "hidden";
                              //document.getElementById("6-17").style.visibility = "visible";
                                                  
                              //}
                              document.getElementById("compute").onclick = function () {
                                document.getElementById("compute").style.visibility = "hidden";
                                document.getElementById("6-17").style.visibility = "visible";
                                document.getElementById(
                                  "11-4"
                                ).style.visibility = "visible";
                                document.getElementById("l13").style.visibility = "visible";
                                move6();
                                setTimeout(function(){

                                document.getElementById(
                                  "11-4"
                                ).style.visibility = "hidden";
                                document.getElementById("l13").style.visibility = "hidden";
                                document.getElementById("prom").style.visibility = "visible";
                                },2000);
                              }
                            }

                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }


}
function option1(){
  document.getElementById(
    "b"
  ).style.visibility = "visible";
  document.getElementById(
    "a"
  ).style.visibility = "hidden";
  document.getElementById("next2").style.visibility = "visible";
  document.getElementById("next1").style.visibility = "hidden";
  document.getElementById("next2").onclick = function () { 
    document.getElementById(
      "b"
    ).style.visibility = "hidden";
    document.getElementById("7-1").style.visibility = "visible";
    document.getElementById("7-1-1").style.visibility = "visible";
    myInt = setInterval(function () {
      animatearrow1();
    }, 500);
    document.getElementById("arrow2").style =
      "visibility:visible; position:absolute; left:122px; top:402px; height:40px; z-index:10;";
    document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow2").style.transform = "rotate(270deg)";
    document.getElementById("7-1-1").onclick = function (){
    myStopFunction1();
    document.getElementById("7-2").style.visibility = "visible";
    document.getElementById("7-1-22").style.visibility = "visible";
    document.getElementById("7-1-1").style.visibility = "hidden";
    myInt = setInterval(function () {
      animatearrow1();
    }, 500);
    document.getElementById("arrow2").style =
      "visibility:visible; position:absolute; left:177px; top:323px; height:40px; z-index:10;";
    document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow2").style.transform = "rotate(270deg)";
    document.getElementById("7-1-22").onclick = function (){
      myStopFunction1();
      document.getElementById("7-1-3").style.visibility = "visible";
      document.getElementById("7-1").style.visibility = "hidden";
      document.getElementById("7-2").style.visibility = "hidden";
      document.getElementById("7-3").style.visibility = "visible";
      document.getElementById("7-1-2").style.visibility = "hidden";

      myInt = setInterval(function () {
        animatearrow1();
      }, 500);
      document.getElementById("arrow2").style =
        "visibility:visible; position:absolute; left:280px; top:234px; height:40px; z-index:10;";
      document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
      document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
      document.getElementById("arrow2").style.transform = "rotate(270deg)";
      document.getElementById("7-1-3").onclick = function (){
        myStopFunction1();
        document.getElementById("7-3").style.visibility = "hidden";
        document.getElementById("7-4").style.visibility = "visible";
        document.getElementById("7-1-4").style.visibility = "visible";
        document.getElementById("7-1-3").style.visibility = "hidden";

        myInt = setInterval(function () {
          animatearrow1();
        }, 500);
        document.getElementById("arrow2").style =
          "visibility:visible; position:absolute; left:390px; top:202px; height:40px; z-index:10;";
        document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
        document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
        document.getElementById("arrow2").style.transform = "rotate(270deg)";
        document.getElementById("7-1-4").onclick = function (){
          myStopFunction1();
          document.getElementById("7-4").style.visibility = "hidden";
          document.getElementById("7-5").style.visibility = "visible";
          document.getElementById("7-1-52").style.visibility = "visible";
          document.getElementById("7-1-4").style.visibility = "hidden";
          myInt = setInterval(function () {
            animatearrow1();
          }, 500);
          document.getElementById("arrow2").style =
            "visibility:visible; position:absolute; left:480px; top:202px; height:40px; z-index:10;";
          document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
          document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
          document.getElementById("arrow2").style.transform = "rotate(270deg)";
          document.getElementById("7-1-52").onclick = function (){
            myStopFunction1();
            document.getElementById("7-5").style.visibility = "hidden";
            document.getElementById("7-6").style.visibility = "visible";
            document.getElementById("7-1-62").style.visibility = "visible";
            document.getElementById("7-1-52").style.visibility = "hidden";
            myInt = setInterval(function () {
              animatearrow1();
            }, 500);
            document.getElementById("arrow2").style =
              "visibility:visible; position:absolute; left:591px; top:205px; height:40px; z-index:10;";
            document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
            document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
            document.getElementById("arrow2").style.transform = "rotate(270deg)";
            document.getElementById("7-1-62").onclick = function (){
              myStopFunction1();
              document.getElementById("7-6").style.visibility = "hidden";
              document.getElementById("7-7").style.visibility = "visible";
              document.getElementById("7-1-72").style.visibility = "visible";
              document.getElementById("7-1-62").style.visibility = "hidden";
              myInt = setInterval(function () {
                animatearrow1();
              }, 500);
              document.getElementById("arrow2").style =
                "visibility:visible; position:absolute; left:645px; top:231px; height:40px; z-index:10;";
              document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
              document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
              document.getElementById("arrow2").style.transform = "rotate(270deg)";
              document.getElementById("7-1-72").onclick = function (){
                myStopFunction1();
                document.getElementById("7-7").style.visibility = "hidden";
                document.getElementById("7-8").style.visibility = "visible";
                document.getElementById("7-1-82").style.visibility = "visible";
                document.getElementById("7-1-72").style.visibility = "hidden";
                myInt = setInterval(function () {
                  animatearrow1();
                }, 500);
                document.getElementById("arrow2").style =
                  "visibility:visible; position:absolute; left:602px; top:274px; height:40px; z-index:10;";
                document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                document.getElementById("arrow2").style.transform = "rotate(270deg)";
                document.getElementById("7-1-82").onclick = function (){
                  myStopFunction1();
                  document.getElementById("7-8").style.visibility = "hidden";
                  document.getElementById("7-9").style.visibility = "visible";
                  document.getElementById("7-1-92").style.visibility = "visible";
                  document.getElementById("7-1-82").style.visibility = "hidden";
                  myInt = setInterval(function () {
                    animatearrow1();
                  }, 500);
                  document.getElementById("arrow2").style =
                    "visibility:visible; position:absolute; left:499px; top:267px; height:40px; z-index:10;";
                  document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                  document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                  document.getElementById("arrow2").style.transform = "rotate(270deg)";
                  document.getElementById("7-1-92").onclick = function (){
                    myStopFunction1();
                    document.getElementById("7-9").style.visibility = "hidden";
                    document.getElementById("7-10").style.visibility = "visible";
                    document.getElementById("7-1-10").style.visibility = "visible";
                    document.getElementById("7-1-92").style.visibility = "hidden";
                    myInt = setInterval(function () {
                      animatearrow1();
                    }, 500);
                    document.getElementById("arrow2").style =
                      "visibility:visible; position:absolute; left:381px; top:285px; height:40px; z-index:10;";
                    document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                    document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                    document.getElementById("arrow2").style.transform = "rotate(270deg)";
                    document.getElementById("7-1-10").onclick = function (){
                      myStopFunction1();
                      document.getElementById("7-10").style.visibility = "hidden";
                      document.getElementById("7-11").style.visibility = "visible";
                      document.getElementById("7-1-112").style.visibility = "visible";
                      document.getElementById("7-1-10").style.visibility = "hidden";
                      myInt = setInterval(function () {
                        animatearrow1();
                      }, 500);
                      document.getElementById("arrow2").style =
                        "visibility:visible; position:absolute; left:203px; top:406px; height:40px; z-index:10;";
                      document.getElementById("arrow2").style.WebkitTransform = "rotate(270deg)";
                      document.getElementById("arrow2").style.msTransform = "rotate(270deg)";
                      document.getElementById("arrow2").style.transform = "rotate(270deg)";
                      document.getElementById("7-1-112").onclick = function (){
                        myStopFunction1();
                        document.getElementById("7-11").style.visibility = "hidden";
                        document.getElementById("7-12").style.visibility = "visible";
                        // document.getElementById("7-1-4").style.visibility = "visible";
                        document.getElementById("7-1-112").style.visibility = "hidden";
                        document.getElementById("compute1").style.visibility = "visible";
                        document.getElementById("compute1").onclick = function () {
                          document.getElementById("compute1").style.visibility = "hidden";
                          document.getElementById("7-13").style.visibility = "visible";
                          document.getElementById(
                            "11-5"
                          ).style.visibility = "visible";
                          document.getElementById("l14").style.visibility = "visible";
                          move7();
                          setTimeout(function(){

                          document.getElementById(
                            "11-5"
                          ).style.visibility = "hidden";
                          document.getElementById("l14").style.visibility = "hidden";
                          document.getElementById("prom1").style.visibility = "visible";
                          },2000);

                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }


      }

    }

    
    }
  }
}
function hidedialogue() {
  document.getElementById("dialogue").style.visibility = "hidden";
  document.getElementById("divi1").style.visibility = "hidden";
}
function hidedial2() {
  document.getElementById("dialo1").style.visibility = "hidden";
  document.getElementById("divig2").style.visibility = "hidden";
}

function setTitle(evt) {
  document.getElementById("output1").innerText = evt.target.value;
}
function check_value() {
  document.getElementById("8-1-5").style.visibility = "visible";
  switch (document.test.field.value) {
    case "one":
      // document.getElementById("8-1-2").style.visibility = "visible";
      // document.getElementById("8-1-3").style.visibility = "hidden";
      // document.getElementById("8-1-4").style.visibility = "hidden";
      // document.getElementById("8-1-44").style.visibility = "hidden";
      // document.getElementById("range1").style.visibility = "hidden";
      // document.getElementById("range2").style.visibility = "hidden";
      // document.getElementById("grad1").style.visibility = "hidden";
      // document.getElementById("grad2").style.visibility = "hidden";
      // document.getElementById("grad3").style.visibility = "hidden";
      // document.getElementById("range3").style.visibility = "hidden";
      break;

    case "two":
      // document.getElementById("8-1-2").style.visibility = "hidden";
      // document.getElementById("8-1-3").style.visibility = "visible";
      // document.getElementById("8-1-4").style.visibility = "hidden";
      // document.getElementById("8-1-44").style.visibility = "hidden";
      // document.getElementById("grad1").style.visibility = "visible";
      // document.getElementById("grad2").style.visibility = "hidden";
      // document.getElementById("grad3").style.visibility = "hidden";
      // document.getElementById("range3").style.visibility = "hidden";
      // document.getElementById("range1").style.visibility = "visible";
      // document.getElementById("range2").style.visibility = "hidden";
      // document.getElementById("ttp1").style.visibility = "visible";
      // document.getElementById("ttp2").style.visibility = "hidden";
      // document.getElementById("ttp3").style.visibility = "hidden";
      break;

    case "three":
      // document.getElementById("8-1-2").style.visibility = "hidden";
      // document.getElementById("grad2").style.visibility = "visible";
      // document.getElementById("8-1-3").style.visibility = "hidden";
      // document.getElementById("8-1-4").style.visibility = "visible";
      // document.getElementById("8-1-44").style.visibility = "hidden";
      // document.getElementById("grad1").style.visibility = "hidden";
      // document.getElementById("range1").style.visibility = "hidden";
      // document.getElementById("grad3").style.visibility = "hidden";
      // document.getElementById("range3").style.visibility = "hidden";
      // document.getElementById("range2").style.visibility = "visible";
      // document.getElementById("ttp1").style.visibility = "hidden";
      // document.getElementById("ttp2").style.visibility = "visible";
      // document.getElementById("ttp3").style.visibility = "hidden";
      // document.getElementById("nextButton").style.visibility = "visible";
      break;
    case "four":
      // document.getElementById("8-1-2").style.visibility = "hidden";
      // document.getElementById("grad2").style.visibility = "hidden";
      // document.getElementById("8-1-3").style.visibility = "hidden";
      // document.getElementById("8-1-44").style.visibility = "visible";
      // document.getElementById("grad1").style.visibility = "hidden";
      // document.getElementById("range1").style.visibility = "hidden";
      // document.getElementById("range2").style.visibility = "hidden";
      // document.getElementById("grad3").style.visibility = "visible";
      // document.getElementById("range3").style.visibility = "visible";
      // document.getElementById("nextButton").style.visibility = "visible";
      // document.getElementById("ttp1").style.visibility = "hidden";
      // document.getElementById("ttp2").style.visibility = "hidden";
      // document.getElementById("ttp3").style.visibility = "visible";
      break;
  }
}
function checkClicked(evt) {
  checkCount += evt.target.checked == true ? 1 : -1;
  document.getElementById("sub1").style.visibility =
    checkCount == 4 ? "visible" : "hidden";
}
let checkCount1 = 0;
function checkClicked1(evt) {
  document.getElementById("sub11").disabled=false; 
  checkCount1 += evt.target.checked == true ? 1 : -1;
  document.getElementById("sub11").style.visibility =
    checkCount1 >= 1 ? "visible" : "hidden";
    
}
function checkClick(e){

  if (img1.checked == 1){
    console.log("hi Prajna")

    document.getElementById("demo2").style.color = "black";
    document.getElementById("height").disabled = false;
  }
  else{
    console.log("hi Prajna2")
    document.getElementById("demo2").style.color = "grey";

    document.getElementById("height").disabled = true;
  }
}
var y;
function handleFlightSelection(e) {
  //console.log(e.value)
  let value = e.value;
  let resolution;
  let fightTime;
  let images;
  document.getElementById("7-a").disabled = false;
  document.getElementById("7-a").checked = false;
  // document.getElementById("upload").disabled = true;
  // document.getElementById("upload").checked = false;
  switch (value) {
    case "45":
      resolution = "200";
      fightTime = "8";
      images = "60";
      // if (showArea) {
      //   document.getElementById("7-1-5").style.visibility = "visible";
      //   document.getElementById("7-1-10").style.visibility = "hidden";
      //   document.getElementById("7-1-9").style.visibility = "hidden";
      // }

      break;
    case "65":
      resolution = "140";
      fightTime = "6.2";
      images = "45";
      // document.getElementById("7-1-5").style.visibility = "hidden";
      // document.getElementById("7-1-10").style.visibility = "hidden";
      // document.getElementById("7-1-9").style.visibility = "visible";
      break;
  }

  document.getElementById("demo").innerHTML =
    "Point density (pts/m):  " + resolution;
  document.getElementById("demo1").innerHTML =
    " Flight Time (min):  " + fightTime;
  document.getElementById("demo2").innerHTML = "No of images captured: " + images;
}
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 278);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width;
      }
    }
  }
}
function move1() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 260);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width;
      }
    }
  }
}
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 90);

    function frame() {
      if (width >= 286) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width;
      }
    }
  }
}
function move3() {
  document.getElementById("l1").style.visibility = "visible";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("load");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function move4() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("load1");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function move5() {
  
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("load2");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function move6() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("load3");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function move7() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("load4");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function hidedial1() {
  document.getElementById("dialo").style.visibility = "hidden";
  document.getElementById("divig1").style.visibility = "hidden";
}
// var d3;
var data = [];
var layout = null;


var data = [{
  mode: 'markers',
   type: 'scatter3d',
   marker: {
		size: 3,
    color:'rgb(1,1,1)',
		line: {
		color: 'rgba(217, 217, 217, 0.14)',
		width: 0.5},
		opacity: 0.8},

    x: [1,2,4,8,6,2,7,3,9,2,2,65,84,31,85,35,78,35,78,19,654,645,100,262,300,354,214,354,651,354,198,357,358,435,523], y: [1,8,1,6,8,45,62,85,454,36,45,71,25,23,45,12,78,95,632,452,655,654,100,541,300,654,645,100,262,300,354,214,354,651,354], z: [1,85,31,56,12,458,54,489,56,465,321,651,48,516,2,98,32,84,561,4,158,321,100,258,300,655,654,100,541,300,654,645,100,262,300,256],

 u: [1], v: [1], w: [0]
}]

var layout = {
 "scene": {
   "camera": {
     "eye": {x: -0.76, y: 1.8, z: 0.92}
   }
 },
 width: 500,
    height: 400,
    left: 11,
    top: -22,
}
let options = {
  // scrollZoom: false, // lets us scroll to zoom in and out - works
  showLink: false, // removes the link to edit on plotly - works
  modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
  //modeBarButtonsToAdd: ['lasso2d'],
  displayLogo: false, // this one also seems to not work
  displayModeBar: false, //this one does work
  isResponsive:true,
  animationEnabled:true,
};
function plotUsingPlotly1(){
  Plotly.newPlot('myDiv', data, layout, options);
}
function acre() {
  if (document.getElementById("7-a").checked == false) {
    document.getElementById("7-aa").style.visibility = "hidden";
  } else {
    document.getElementById("7-aa").style.visibility = "visible";
  }
}
// d3.csv('A.csv', function(err, rows){

// function unpack(rows, key) {
// 	return rows.map(function(row)
// 	{ return row[key]; });}

// var trace1 = {
// 	x:unpack(rows, 'X'), y: unpack(rows, 'Y'), z: unpack(rows, 'Z'),
// 	mode: 'markers',
// 	marker: {
// 		size: 12,
// 		line: {
// 		color: 'rgba(217, 217, 217, 0.14)',
// 		width: 0.5},
// 		opacity: 0.8},
// 	type: 'scatter3d'
// };

// // var trace2 = {
// // 	x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
// // 	mode: 'markers',
// // 	marker: {
// // 		color: 'rgb(127, 127, 127)',
// // 		size: 12,
// // 		symbol: 'circle',
// // 		line: {
// // 		color: 'rgb(204, 204, 204)',
// // 		width: 1},
// // 		opacity: 0.8},
// // 	type: 'scatter3d'};

// var data = [trace1];
// var layout = {margin: {
// 	l: 0,
// 	r: 0,
// 	b: 0,
// 	t: 0
//   }};
// // Plotly.newPlot('myDiv', data, layout);
// });
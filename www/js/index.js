/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};*/

	// Basic Template
	// CBP 15-06-13
	
     var canvas;
     var gc;
		
    //images
    var background;
    var fish;
    var fishRev;
	var XFishLoc;
	var XFishVelo;
	var DT;
	var rFish;
	var CanvasW=480;
    var messageArray = [];		
	
	window.onload = function(){
		XFishLoc = 0;
		XFishVelo = 0.1;
		DT = 30;
		rFish=false;
		// Init canvas and graphics context
		canvas = document.getElementById("myCanvas");
		gc = canvas.getContext("2d");
		
		//load images
		background = document.getElementById("fishtank");
		fish = document.getElementById("fish");
		fishRev = document.getElementById("fishRev");	
		//setting interval for animation
		window.setInterval(computeAndRender,DT);
		computeAndRender();
		
                 };	

	// compute and render.
	function computeAndRender() {
    
		compute();			
		render();
	}
		
	function compute() {
	XFishLoc += XFishVelo*DT;
	if (XFishLoc+fish.width >=CanvasW){
		rFish=true;
			XFishVelo = -1.0*XFishVelo;
			}	
		if (XFishLoc <=0){
			rFish=false;
		XFishVelo=0.1;
		compute();
	}			
	}
		

		
	function render() {
	gc.drawImage(background,0,0);
		//gc.drawImage(fish,XFishLoc,100);
	if (rFish==false){
		gc.drawImage(fish,XFishLoc,100);
	}
		if (rFish==true){
		gc.drawImage(fishRev,XFishLoc,100);
	}
	}
		

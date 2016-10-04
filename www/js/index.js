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

	window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var gc = canvas.getContext("2d");
		
			gc.rect(0,0,1000,50);
			gc.rect(0,0,50,1000);	
			gc.fillstyle = "#000";
			gc.fill();
			gc.beginPath();
			gc.rect(50,50,1000,50);	
			gc.rect(50,50,50,1000);
			gc.fillStyle = "#2F4F4F";	
			gc.fill();
			gc.beginPath();
			gc.rect(100,100,1000,50);	
			gc.rect(100,100,50,1000);	
			gc.fillStyle = "#708090";	
			gc.fill();
			gc.beginPath();
			gc.rect(150,150,1000,50);
			gc.rect(150,150,50,1000);			
			gc.fillStyle = "#778899";	
			gc.fill();
			gc.beginPath();
			gc.rect(200,200,1000,50);
			gc.rect(200,200,50,1000);			
			gc.fillStyle = "#696969";	
			gc.fill();
			gc.beginPath();
			gc.rect(250,250,1000,50);
			gc.rect(250,250,50,1000);			
			gc.fillStyle = "#808080";	
			gc.fill();
			gc.beginPath();
			gc.rect(300,300,1000,50);
			gc.rect(300,300,50,1000);			
			gc.fillStyle = "#A9A9A9";	
			gc.fill();
			gc.beginPath();
			gc.rect(350,350,1000,50);
			gc.rect(350,350,50,1000);			
			gc.fillStyle = "#C0C0C0";	
			gc.fill();
			gc.beginPath();
			gc.rect(400,400,1000,50);
			gc.rect(400,400,50,1000);			
			gc.fillStyle = "#D3D3D3";	
			gc.fill();
			gc.beginPath();
			gc.rect(450,450,1000,100);
			gc.rect(450,450,100,1000);			
			gc.fillStyle = "#DCDCDC";	
			gc.fillStyle = "#DCDCDC";	
			gc.fill();
  };

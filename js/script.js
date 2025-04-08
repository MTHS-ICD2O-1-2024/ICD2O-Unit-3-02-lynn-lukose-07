// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Updated by Lynn Lukose
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateVolumeOfPyramid () {
  // input
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);

  // process
  const volumeOfPyramid =  (length * width * height) / 3;

  // output
  document.getElementById('area').innerHTML = 'Volume is: ' + volumeOfPyramid + ' mm³'
}
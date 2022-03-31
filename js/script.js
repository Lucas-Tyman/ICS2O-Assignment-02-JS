// Copyright (c) 2022 Lucas Tyman All rights reserved
//
// Created by: Lucas Tyman
// Created on: Mae @022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function calculate() {
  // input
 const length = parseFloat(document.getElementById('length-of-square').value)


  // process
 const perimeter = length * 4

  // output
    document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}

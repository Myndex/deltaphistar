// Delta Phi Star Test Script for 0.0.1

import test from 'ava';

import { contrastDPS } from '../src/deltaphistar.js';

console.log('BEGIN TESTS')

test.todo("Testing Delta Phi Star calculations\n")

let color = ['#000', '#9e9e9e', '#FFF', '#888','#000', '#aaa', '#234', '#def', '#123', '#444', '#777', '#a4a4a4','#fff', '#000', '#595959'];
    
let colorLength = color.length - 1;

let contrastResult = [ 52.042324818974436, 52.15817941439123, 63.155229570915864, 40.15402173709839, 58.397040139078555, 49.71988060967246, 84.77424837874364, 88.70761679910729, 0.0, 11.029421871598664, 12.543444585172253, 48.9029330460544, 101.35051965850337, 13.468722550811329, ];


for (let eye = 1, eyePlus; eye < colorLength; eye++) {

  eyePlus = eye + 1;
  test('Lc value for ' + color[eye] + ' and ' + color[eyePlus], (t) => {
      t.deepEqual(contrastResult[eye], contrastDPS(color[eye],color[eyePlus]));
  });
}


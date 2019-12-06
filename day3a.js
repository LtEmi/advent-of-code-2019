// Advent of code --- Day 3: Crossed Wires (Part 1) --- 

var R = "right";
var L = "left";
var U = "up";
var D = "down";

var firstWirePos = {x:0,y:0};
var secondWirePos = {x:0,y:0};

var firstWirePath = {}; 
var secondWirePath = {}; 

var firstWireAmount = [998,502,895,288,416,107,492,303,719,601,783,154,236,913,833,329,28,759,270,549,245,653,851,676,211,949,980,314,897,764,149,214,195,907,534,446,362,6,246,851,25,925,334,673,998,581,783,912,53,694,441,411,908,756,946,522,77,468,816,555,194,707,97,622,99,265,590,573,132,183,969,207,90,331,88,606,315,343,546,460,826,427,232,117,125,309,433,53,148,116,437,339,288,879,52,630,201,517,341,178,94,636,759,598,278,332,192,463,325,850,200,810,686,249,226,297,915,117,56,59,760,445,184,918,173,903,212,868,88,798,829,835,563,19,480,989,529,834,515,964,876,294,778,551,457,458,150,698,956,781,310,948,50,56,98,348,254,614,654,359,632,994,701,615,64,507,668,583,687,902,564,214,930,331,212,943,559,886,590,805,426,669,141,233,573,682,931,267,117,900,944,667,838,374,406,856,987,870,716,593,596,654,653,120,666,145,490,629,172,881,808,324,956,532,475,165,503,361,208,323,568,876,663,11,839,67,499,75,643,954,94,418,761,842,213,616,785,42,707,343,513,480,531,890,899,2,30,188,32,588,480,33,849,443,666,117,13,974,453,93,960,369,332,61,17,557,818,744,124,916,454,572,451,29,711,134,481,366,327,132,819,839,485,941,224,531,688,561,958,899,315,824,408,941,517,163,878,28,767,798,227];
var firstWireDirection = [R,U,R,D,R,U,R,U,R,D,R,D,L,U,R,D,R,D,L,D,L,U,L,U,L,D,R,U,L,U,R,D,L,D,R,D,R,D,L,D,L,U,L,U,L,U,R,U,R,D,L,U,L,D,R,D,L,U,R,D,L,D,R,D,R,D,L,U,R,D,L,D,L,D,R,D,L,U,R,U,L,D,L,U,R,U,R,D,R,U,L,U,L,D,L,D,R,D,L,U,R,U,L,D,L,U,R,U,L,U,L,U,L,U,L,D,R,D,R,D,R,U,R,U,R,D,R,D,L,D,L,U,L,U,R,D,R,D,R,U,L,D,R,D,L,D,R,D,R,D,L,D,R,U,R,U,L,U,L,D,R,D,L,D,R,D,R,D,L,D,L,D,R,D,L,U,R,U,R,D,R,U,L,D,L,D,L,U,R,D,L,U,L,D,L,U,R,D,R,D,R,D,R,U,L,U,R,D,R,D,L,D,R,D,L,U,L,U,R,U,R,D,R,D,L,D,R,U,L,U,R,D,R,D,L,D,L,D,R,D,L,D,L,D,L,D,L,D,R,U,R,U,R,U,L,U,L,D,L,U,R,D,R,D,L,U,R,D,L,U,L,D,R,D,R,D,R,U,L,U,L,U,R,U,R,U,R,U,R,D,L,U,L,D,R,D,L,U,R,D,R];

var secondWireAmount = [1009,399,373,980,48,638,725,775,714,530,887,576,682,940,371,621,342,482,676,445,752,119,361,444,769,854,874,259,332,218,866,28,342,233,958,649,998,262,8,863,283,449,73,438,516,54,964,981,338,332,761,704,705,468,115,834,367,156,480,27,846,73,846,720,811,466,407,928,816,50,90,893,930,833,159,972,823,868,689,558,777,13,844,8,168,956,111,462,667,559,839,503,906,838,83,323,782,588,599,233,700,679,51,779,110,260,201,992,43,557,628,875,201,535,246,976,546,22,600,301,542,41,532,316,765,310,666,369,853,684,457,816,667,758,798,959,893,185,842,168,68,348,394,296,966,511,319,717,57,129,843,439,744,870,162,991,77,565,494,601,851,748,96,124,379,446,882,371,133,820,935,704,670,911,182,138,844,926,552,716,849,624,723,117,252,737,216,796,156,322,812,390,50,493,665,314,584,798,11,524,171,837,981,32,277,650,865,28,399,908,652,543,779,406,839,198,190,319,776,752,383,884,385,682,729,163,252,533,690,767,533,147,366,716,548,171,932,720,9,39,895,850,276,988,528,551,262,480,275,567,70,599,814,876,120,93,565,795,278,41,695,693,208,272,923,498,238,268,244,278,965,395,990,329,478,245,980,473,702,396,358,636,400,919,240,780,251,633,55,723,529,319,299,89,251,557,705,705,391,58,241];
var secondWireDirection = [L,U,R,U,L,U,R,U,R,D,L,D,L,D,L,D,L,D,R,D,R,U,L,D,L,D,L,U,R,U,R,U,L,D,L,U,R,U,L,D,L,D,L,D,L,D,R,D,R,U,L,U,L,D,L,U,R,D,R,U,R,U,R,D,R,D,L,U,R,U,R,D,L,D,L,D,L,U,R,D,L,D,R,D,L,U,L,D,L,U,L,U,R,D,R,D,L,U,R,D,L,U,L,U,L,D,L,U,L,D,L,D,L,U,L,D,L,D,R,D,L,D,R,U,L,D,L,D,R,U,L,U,L,U,R,U,R,D,L,U,R,D,R,D,R,D,L,U,L,U,R,U,L,D,L,D,R,D,R,U,L,U,L,U,L,D,L,U,R,U,L,D,L,D,L,U,R,U,L,D,L,U,R,U,R,D,L,U,R,U,R,D,L,D,L,U,L,U,L,U,R,U,R,U,L,U,L,U,R,U,R,D,L,D,L,D,L,D,L,U,R,D,R,D,R,D,R,U,L,D,R,D,R,U,R,U,R,U,L,D,R,U,L,D,L,U,L,D,L,D,R,D,L,U,R,U,L,U,L,D,R,D,R,U,L,U,R,U,L,U,R,U,R,U,L,D,R,D,L,U,R,U,R,D,R,U,L,D,L,D,L,U,L,D,L,D,L,D,L,D,R];

//test variables:
//var firstWireAmount = [8,5,5,3];
//var firstWireDirection = [R,U,L,D];
//var secondWireAmount = [7,6,4,4];
//var secondWireDirection = [U,R,D,L];
	
//calculate Manhattan distance between central port and point
function manhattanDistance(point) {
	
	return Math.abs(point.x) + Math.abs(point.y);

}

//determine path of first wire 
for (i = 0; i < firstWireAmount.length; i++){
	
	if (firstWireDirection[i] == "right"){
	
		for (d = 0; d < firstWireAmount[i]; d++){
			
			firstWirePos.x = firstWirePos.x + 1;
			firstWirePath[firstWirePos.x + "," + firstWirePos.y] = manhattanDistance(firstWirePos);
			
		}
		
	}
	
	else if (firstWireDirection[i] == "left"){
	
		for (d = 0; d < firstWireAmount[i]; d++){
			
			firstWirePos.x = firstWirePos.x - 1;
			firstWirePath[firstWirePos.x + "," + firstWirePos.y] = manhattanDistance(firstWirePos);
			
		}
	
	}
	
	else if (firstWireDirection[i] == "up"){
	
		for (d = 0; d < firstWireAmount[i]; d++){
			
			firstWirePos.y = firstWirePos.y + 1;
			firstWirePath[firstWirePos.x + "," + firstWirePos.y] = manhattanDistance(firstWirePos);
		}
	
	}
	
	else if (firstWireDirection[i] == "down"){
	
		for (d = 0; d < firstWireAmount[i]; d++){
			
			firstWirePos.y = firstWirePos.y - 1;
			firstWirePath[firstWirePos.x + "," + firstWirePos.y] = manhattanDistance(firstWirePos);
			
		}
	
	}
	
	else {
		
		document.getElementById("result3a").innerHTML = "ERROR";
	
	}

	
};
	
//determine path of second wire 
for (i = 0; i < secondWireAmount.length; i++){
	
	if (secondWireDirection[i] == "right"){
	
		for (d = 0; d < secondWireAmount[i]; d++){
			
			secondWirePos.x = secondWirePos.x + 1;
			secondWirePath[secondWirePos.x + "," + secondWirePos.y] = true;
			
		}
		
	}
	
	else if (secondWireDirection[i] == "left"){
	
		for (d = 0; d < secondWireAmount[i]; d++){
			
			secondWirePos.x = secondWirePos.x - 1;
			secondWirePath[secondWirePos.x + "," + secondWirePos.y] = true;
			
		}
	
	}
	
	else if (secondWireDirection[i] == "up"){
	
		for (d = 0; d < secondWireAmount[i]; d++){
			
			secondWirePos.y = secondWirePos.y + 1;
			secondWirePath[secondWirePos.x + "," + secondWirePos.y] = true;
		}
	
	}
	
	else if (secondWireDirection[i] == "down"){
	
		for (d = 0; d < secondWireAmount[i]; d++){
			
			secondWirePos.y = secondWirePos.y - 1;
			secondWirePath[secondWirePos.x + "," + secondWirePos.y] = true;
			
		}
	
	}
	
	else {
		
		document.getElementById("result3a").innerHTML = "ERROR";
	
	}

	
};

//determine intersections
var crossedWires = [];
var firstWireKeys = Object.keys(firstWirePath); //push all keys from the object into an array to allow looping

for (i = 0; i < firstWireKeys.length; i++){
	
	//compare values from first wire array to keys in second wire object, if a key exists along secondWirePath it will return true instead of undefined
	if (secondWirePath[firstWireKeys[i]] != undefined){
		
		//push all matching keys in array 
		crossedWires.push(firstWirePath[firstWireKeys[i]]);
	
	}
	
}

//sort values in ascending order
crossedWires.sort(function(a, b){return a-b});

//get lower index for result
document.getElementById("result3a").innerHTML = "The Manhattan distance from the central port to the closest intersection is " + crossedWires[0] + "."; 
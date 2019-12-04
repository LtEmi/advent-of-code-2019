// Advent of code --- Day 2: 1202 Program Alarm (Part 2) --- 

//the gravity assist program default state is: 1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,5,19,23,1,23,6,27,1,5,27,31,1,31,6,35,1,9,35,39,2,10,39,43,1,43,6,47,2,6,47,51,1,5,51,55,1,55,13,59,1,59,10,63,2,10,63,67,1,9,67,71,2,6,71,75,1,5,75,79,2,79,13,83,1,83,5,87,1,87,9,91,1,5,91,95,1,5,95,99,1,99,13,103,1,10,103,107,1,107,9,111,1,6,111,115,2,115,13,119,1,10,119,123,2,123,6,127,1,5,127,131,1,5,131,135,1,135,6,139,2,139,10,143,2,143,9,147,1,147,6,151,1,151,13,155,2,155,9,159,1,6,159,163,1,5,163,167,1,5,167,171,1,10,171,175,1,13,175,179,1,179,2,183,1,9,183,0,99,2,14,0,0

//L0L BRUT3F0RC3
var gravityAssist = [1,80,51,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,5,19,23,1,23,6,27,1,5,27,31,1,31,6,35,1,9,35,39,2,10,39,43,1,43,6,47,2,6,47,51,1,5,51,55,1,55,13,59,1,59,10,63,2,10,63,67,1,9,67,71,2,6,71,75,1,5,75,79,2,79,13,83,1,83,5,87,1,87,9,91,1,5,91,95,1,5,95,99,1,99,13,103,1,10,103,107,1,107,9,111,1,6,111,115,2,115,13,119,1,10,119,123,2,123,6,127,1,5,127,131,1,5,131,135,1,135,6,139,2,139,10,143,2,143,9,147,1,147,6,151,1,151,13,155,2,155,9,159,1,6,159,163,1,5,163,167,1,5,167,171,1,10,171,175,1,13,175,179,1,179,2,183,1,9,183,0,99,2,14,0,0];

//loop trough Intcode, every 4 addresses (starting at 0) read instruction
for (i = 0; i < gravityAssist.length; i++ ){
	
	var x = gravityAssist[i+1];
	var y = gravityAssist[i+2];
	var overwrite = gravityAssist[i+3];
	
	//if instruction = 1, add values of 2 following parameters and overwrite value of 4th parameter with result
	if (gravityAssist[i] == 1) {
		
		gravityAssist[overwrite] = gravityAssist[x] + gravityAssist[y];
		i = i + 3;
	
	} 
	
	//if instruction = 2, multiply values of 2 following parameters and overwrite value of 4th parameter with result
	else if (gravityAssist[i] == 2) {
		
		gravityAssist[overwrite] = gravityAssist[x] * gravityAssist[y];
		i = i + 3;
	}
	
	//if instruction = 99, exit program
	else if (gravityAssist[i] == 99) {
		
		break;
	}
	
	else {
		
		document.getElementById("result2b").innerHTML = "ERROR";
		
	}
	
};

document.getElementById("result2b").innerHTML = "The input noun and verb that cause the program to produce the output 19690720 are " + gravityAssist[1] + " and " + gravityAssist[2] + ", once multiplied by 100 their output is " + (100 * gravityAssist[1] + gravityAssist[2]) + "."; 
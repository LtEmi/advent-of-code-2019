// Advent of code --- Day 2: 1202 Program Alarm (Part 1) --- 

//the gravity assist program default state is: 1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,5,19,23,1,23,6,27,1,5,27,31,1,31,6,35,1,9,35,39,2,10,39,43,1,43,6,47,2,6,47,51,1,5,51,55,1,55,13,59,1,59,10,63,2,10,63,67,1,9,67,71,2,6,71,75,1,5,75,79,2,79,13,83,1,83,5,87,1,87,9,91,1,5,91,95,1,5,95,99,1,99,13,103,1,10,103,107,1,107,9,111,1,6,111,115,2,115,13,119,1,10,119,123,2,123,6,127,1,5,127,131,1,5,131,135,1,135,6,139,2,139,10,143,2,143,9,147,1,147,6,151,1,151,13,155,2,155,9,159,1,6,159,163,1,5,163,167,1,5,167,171,1,10,171,175,1,13,175,179,1,179,2,183,1,9,183,0,99,2,14,0,0

//set up the "1202 program alarm" state before running the Intcode by replacing position 1 with the value 12 and position 2 with the value 2
var programAlarm = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,5,19,23,1,23,6,27,1,5,27,31,1,31,6,35,1,9,35,39,2,10,39,43,1,43,6,47,2,6,47,51,1,5,51,55,1,55,13,59,1,59,10,63,2,10,63,67,1,9,67,71,2,6,71,75,1,5,75,79,2,79,13,83,1,83,5,87,1,87,9,91,1,5,91,95,1,5,95,99,1,99,13,103,1,10,103,107,1,107,9,111,1,6,111,115,2,115,13,119,1,10,119,123,2,123,6,127,1,5,127,131,1,5,131,135,1,135,6,139,2,139,10,143,2,143,9,147,1,147,6,151,1,151,13,155,2,155,9,159,1,6,159,163,1,5,163,167,1,5,167,171,1,10,171,175,1,13,175,179,1,179,2,183,1,9,183,0,99,2,14,0,0];

//loop trough Intcode, every 4 positions (starting at 0) read value corresponding to given index
for (i = 0; i < programAlarm.length; i++ ){
	
	var x = programAlarm[i+1];
	var y = programAlarm[i+2];
	var overwrite = programAlarm[i+3];
	
	//if value = 1, add values of 2 following positions' given index and overwrite value of 4th position's given index with result
	if (programAlarm[i] == 1) {
		
		programAlarm[overwrite] = programAlarm[x] + programAlarm[y];
		i = i + 3;
	
	} 
	
	//if value = 2, multiply values of 2 following positions' given index and overwrite value of 4th position's given index with result
	else if (programAlarm[i] == 2) {
		
		programAlarm[overwrite] = programAlarm[x] * programAlarm[y];
		i = i + 3;
	}
	
	//if value = 99, exit program
	else if (programAlarm[i] == 99) {
		
		break;
	}
	
	else {
		
		document.getElementById("result2a").innerHTML = "ERROR";
		
	}
	
};

document.getElementById("result2a").innerHTML = "The value left at position 0 after the program halts is " + programAlarm[0] + ".";
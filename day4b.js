// Advent of code --- Day 4: Secure Container (Part 1) --- 

//within given range, check for numbers meeting following criteria:
//6 digit long (duh)
//contains at least two adjacent digits that are the same
//from left to right, digits never decrease (only ever increase or stay the same)

var rangeMin = 240920;
var rangeMax = 789857;

var numberLength = 6;

var passwordCandidatesCount = 0;

//split numbers into separate successive digits
function splitNumber(number){
	
	var digits = [];
	
	while (number > 0){
		
		digits.push(number % 10);
		number = parseInt(number / 10);
		
	}
	
	digits.reverse();
	return digits;

}

//check for double digits that aren't part of a larger group of matching digits
function checkConditions(number){
	
	var digits = splitNumber(number);
	doubleDigits = false;
	
	for (d = 0; d < numberLength - 1 ; d++){
		
		//stop checking if numbers are decreasing
		if (digits[d] > digits[d+1]){
			
			return false;
			break;
			
		}	
		
		//stop checking if number contains 0 or 1
		if (digits[d] == 0 || digits[d] == 1){
			
			return false;
			break;
			
		}	

		if (digits[d] == digits[d+1] && digits[d] != digits[d-1] && digits[d] != digits[d+2]){
			
			doubleDigits = true;
			
		}			
		
	}
	
	if (doubleDigits){
		
		return true;
	
	}
	
}

//check conditions on specified range
for (i = rangeMin; i <= rangeMax; i++){
	
	if (checkConditions(i)) {
		
		passwordCandidatesCount++
		
	}
	
}

//show result
document.getElementById("result4b").innerHTML = "There are " + passwordCandidatesCount + " different valid passwords."; 
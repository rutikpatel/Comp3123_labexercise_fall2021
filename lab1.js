// 101235165- Rutik Patel
// task 1

const word = "the quick brown box";
const word1 = word.split(" ");

for(let i =0; i< word1.length;i++){
    word1[i] = word1[i][0].toUpperCase()+word1[i].substring(1);
}

console.log(word1.join(" "));
console.log("");

// task 2

function largest(x,y,z){
    if(x>=y && x>=z)
        return `The largest number is :${x}`;
    
    else if(x<=y && y>=z)
        return `The largest number is :${y}`;
    
    else if(z>=y && x<=z)
        return `The largest number is :${z}`;
}

console.log(largest (1,0,1));
console.log(largest (0,-10,-20));
console.log(largest (1000,510,440));
console.log("");

//  task 3

function right(x){
    if(x.length>=3){
        x1 = x.slice(x.length-3,x.length);
        x2 = x.slice(0,x.length-3);
        return x1 + x2;
    }
    else
        return x;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
console.log("");

//  task 4

function angle_Type(angle){
        if(0 < angle && angle <90){
            return 'Acute angle'
        }
        if(angle == 90){
            return 'Right angle'
        }
        if(90< angle && angle < 180){
            return 'Obtuse angle'
        }
        if(angle == 180){
            return 'Straight angle'
        }
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))
console.log("");

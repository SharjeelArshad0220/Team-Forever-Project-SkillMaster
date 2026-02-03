let total=0
const aiFee=12000
const marketingFee=8000
const teamMembers=4
let teamAgree=false

total=teamAgree?(aiFee+marketingFee)/4:aiFee+marketingFee;
const aiFeeIncrement=15000;
if (aiFeeIncrement) {
    total += aiFeeIncrement
}

if (!teamAgree) {
    console.log("team nhi maani")
}
else{
    console.log("team maan gayi")
}


function calulatePricePerPerson(total) {
    return total/4
}

const member=['nida','noor','laraib','sharjeel']

for (let index = 0; index < member.length; index++) {
    const element = member[index];//here we got members one by one first nida 
    // teamAgree?
    // console.log(element,"will pay:",calulatePricePerPerson(total))
    // :console.log("noor ne pese nhi diye abb sab ko "+total/3+" rupay dene parengy!!");
    if (teamAgree) {
        console.log(element,"will pay:",calulatePricePerPerson(total))
    }
    else{
        console.log("noor ne pese nhi diye abb sab ko "+total/3+" rupay dene parengy!!")
        break;
    }
};
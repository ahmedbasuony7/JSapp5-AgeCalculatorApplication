const ageCalculatorForm = document.getElementById("ageCalculator");

ageCalculatorForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateAge();
});
function calculateAge(){
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdateparts = birthdateInput.split("-");
    const birthdateDay = birthdateparts[0];
    const birthdateMonth = birthdateparts[1] -1;
    const birthdateYear = birthdateparts[2];
    const birthDate = new Date(birthdateYear,birthdateMonth,birthdateDay);


    console.log(birthdateInput);
    console.log(birthdateparts);
    console.log(birthdateDay);
    console.log(birthdateMonth);
    console.log(birthdateYear);

    const isValidDate = (date) =>{
        return(Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));

    };
    if(!isValidDate(birthDate)){
        alert("Invalid Date Format: Please Enter a Valid date in DD-MM-YYYY format");
        return;
    }
    const ageInMillisseconds = today - birthDate;
    const ageInSeconds= Math.floor(ageInMillisseconds/1000);
    const ageInMinutes = Math.floor(ageInSeconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInWeeks  =Math.floor(ageInDays/7);
    const ageInMonth = Math.floor(ageInDays/0.436875);
    const ageInYears = Math.floor(ageInDays/365);
    //console.log(ageInYears)

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");
    result.innerHTML =
    `<div class="resultItem">
        <h3> Age:  </h3>
        <p> ${ageInYears}  years  ${ageInMonth % 12} months ${ageInDays / 30} days </p>
    </div>
    <div class="resultItem">
        <h3> Month Passed:  </h3>
        <p> ${ageInMonth}   </p>
    </div>
    <div class="resultItem">
        <h3> Weeks Passed:  </h3>
        <p> ${ageInWeeks}   </p>
    </div>
    <div class="resultItem">
        <h3> Days Passed:  </h3>
        <p> ${ageInDays}   </p>
    </div>
    <div class="resultItem">
        <h3> Hours Passed:  </h3>
        <p> ${ageInHours}   </p>
    </div>
    <div class="resultItem">
        <h3> Minutes Passed:  </h3>
        <p> ${ageInMinutes}   </p>
    </div>
    <div class="resultItem">
        <h3> Seconds Passed:  </h3>
        <p> ${ageInSeconds}   </p>
</div>
    `;
    resultContainer.style.display = "block"; 
}
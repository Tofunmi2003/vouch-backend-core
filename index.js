//create a function called calculateVisibility
//It should take two parameters: siteName (a string) and errorCount (a number).Inside the function, 
// create a variable called healthScore.The Logic: Start with 100 points and subtract 5 points for every error found.
// Example: If there are 4 errors, the score is $100 - (4 \times 5) = 80$.
// Print the result using a Template Literal (the backticks `).

function calculateVisibility(siteName, errorCount) {
    let healthScore = 100 -(errorCount * 30);
      
      if(healthScore <=0){
        healthScore =0;
        console.log(`site: ${siteName} |Emergency:Health Score is ${healthScore}%!`);
    }else if(healthScore <50){
        console.log(`site: ${siteName} Warning: Low Visibility`);
    }else{
        console.log(`site: ${siteName} |Health Score is ${healthScore}% | Visibility is good !`);
    }
}    
    calculateVisibility("MyWebsite", 4);

//structure of array 

let vouchPortfolio = [
     { profile:
        {siteName: "Tofunmi",
         errorCount: 2}
        }, 
        {profile:
            {siteName: "John", 
             errorCount:4}
            }, 
      {profile:
        {siteName: "Doe", 
         errorCount: 0}
        }
];
   vouchPortfolio.filter((site)=>{
    return site?.profile?.errorCount === 0;
})
    .forEach((site)=>{
        console.log(`site: ${site?.profile?.siteName} is healthy !`);
    });

   
 

/*const emergencies = vouchPortfolio.filter ((site)=>{
    return site.profile.errorCount >0;
})
 console.log(emergencies);

emergencies.forEach((site)=>{
    calculateVisibility(site.profile.siteName, site.profile.errorCount);
});

const auditSummary = vouchPortfolio.map((site)=>{
    return `ALERT:  ${site.profile.siteName} has ${site.profile.errorCount} errors.`;
})
 console.log(auditSummary);

*/


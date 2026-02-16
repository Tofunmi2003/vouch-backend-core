/*
let tradeHistory = [
    { pair: "EURUSD", profit: 150, status: "closed" },
    { pair: "GBPUSD", profit: -200, status: "closed" },
    { pair: "XAUUSD", profit: 500, status: "closed" },
    { pair: "BTCUSD", profit: 0, status: "closed" },
    { pair: "USDJPY", profit: 300, status: "open" }
];
    
const reportSummaries =  tradeHistory
     .filter(trade => trade.profit > 0 && trade.status === "closed")
      .map(trade => `TRADE WIN : ${trade.pair} made $${trade.profit}`);

console.log(reportSummaries);


  tradeHistory.forEach((trade)=>{
    if (trade.profit === 0){
        console.log(`Trade on ${trade.pair} was a wash (0 profit.)`);
    }else if (trade.profit< 0){
        console.log(`Loss recorded on ${trade.pair}.`);
    }else{
        console.log(`profit recorded on ${trade.pair}.`);
    }
  });
*/



let vouchClient = [
   {profile:{
        name:"Tofunmi", 
        url:"www.tofunmi.com", 
        errorCount: 2},
        audit: {
            performanceScore: 80, 
            securityErrors: 5
        },
          meta: {isActive: true}
        },
    {profile:{
        name:"Adeyemi", 
        url:"www.adeyemi.com", 
        errorCount: 1},
        audit: {
            performanceScore: 90, 
            securityErrors: 2
        },
          meta: {isActive: false}
        },
    {profile:{
        name:"John", 
        url:"www.john.com", 
        errorCount: 0},
        audit: {
            performanceScore: 95, 
            securityErrors: 0
        },
          meta: {isActive: true}
        },
    {profile:{
        name:"Doe", 
        url:"www.doe.com", 
        errorCount: 3},
        audit: {
            performanceScore: 70, 
            securityErrors: 10
        },
          meta: {isActive: false}
        },
        {profile:{
            name: "Jane",
            url: "www.jane.com",
            errorCount: 0
        },
    }
   
];

  
try{
    
    const emergencies = vouchClient.filter((client)=>{
    return client?.meta?.isActive === true && client?.audit?.securityErrors === 0;
})
   console.log(emergencies);

 const performanceScore = vouchClient.map((client)=>{
     return`client: ${client?.profile?.name} | Performance Score: ${client?.audit?.performanceScore ?? "Not Audited yet "}`;
 })
  console.log(performanceScore);

   vouchClient.forEach((client)=>{
      if( client?.meta?.isActive === false){
        console.log(`${client?.profile?.name} is currently inactive.`)
   }
});
}
 catch(error){
    console.log("An error occurred while processing client data:", error);
 }




const getClientAsync = async (index) => {

await new Promise(resolve => setTimeout(resolve, 2000));
return vouchClient[index];
};


const runEmergencyAudit = async (clientIndex) => {
try {
console.log("--- Connecting to Vouch Database... ---");


const client = await getClientAsync(clientIndex);
console.log("Data Received for: " + client?.profile?.name);
 

if (client?.audit?.securityErrors > 0) {
console.log("EMERGENCY: " + client.profile.name + " has issues!");
} else {
console.log("Status: " + client?.profile?.name + " is secure.");
}
}

 catch (error) {
console.log("An error occurred while connecting to the database:", error);
return;
}      
}

runEmergencyAudit(0);

const http = require('http');
const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Vouch Backend is Live and Running!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
console.log("Server is listening on port: " + PORT);
});
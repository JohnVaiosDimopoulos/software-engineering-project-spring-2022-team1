export function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export function fetchHomePageData(callback) {
    delay(100).then(() => 
        callback({
        ok:true,
        data:{
            totalActivities:15,
            totalFacilities:12
        }
        })
    )

}

export function sendProfileData(data) {
    console.log('sent data: '+ data);
}
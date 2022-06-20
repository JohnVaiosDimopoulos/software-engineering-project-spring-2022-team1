
export function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export function fetchHomePageData(callback) {
    delay(100).then(() => 
        callback({
        ok:true,
        data:{
            totalActivities: 15,
            totalFacilities: 12,
            bookings: [...Array(6).keys()].map(i => {
                return {
                    activity: `Δραστηριότητα${i}`,
                    dateBook: '05/06/2022',
                    dateOn: '05/06/2022',
                    seats: `${i}`,
                    user: `χρήστης${i}`,
                    cost: '1000'
                }
            }),
            reviews: [...Array(5).keys()].map(i => {
                return {
                    activity: 'Δραστηριότητα',
                    user: 'Χρήστης',
                    comment: 'Αυτή είναι μια κριτική.'
                }
            })
        }
        })
    )
}

export function fetchProfilePageData(callback) {
    delay(100).then(() => 
        callback({
        ok:true,
        data:{
            username: 'user1204153',
            email: 'user1204@mail.com',
            password: '1234',
            totalPoints: '15890',
            bankAccounts: [...Array(6).keys()].map(i => {
                return {
                    iban: `iban${i}`,
                    number: `αριθμός${i}`,
                    cardNumber: `αριθμός κάρτας${i}`,
                    isSelected: false
                }
            })
        }
        })
    )
}

export function fetchActivitiesPageData(callback) {
    delay(100).then(() => 
        callback({
        ok:true,
        data:{
            activities: [...Array(6).keys()].map(i => {
                return {
                    title: `Δραστηριότητα ${i}`,
                    date: '10/05/2022',
                    state: 'διαθέσιμη',
                    facility: 'ΟΑΚΑ',
                    bookCount: '100'
                }
            })
        }
        })
    )
}

export function fetchActivityPageData(activityId, callback) {
    delay(100).then(() => 
        callback({
        ok:true,
        data:{
            title: 'Δραστηριότητα',
            imgUrl: '',
            category: 'Άθληση',
            price: '1000',
            facility: 'ΟΑΚΑ',
            age: '10+',
            cancelRate: '5%',
            cancelCount: '1',
            bookCount: '12',
            seats: '20',
            avgScore: '4.5',
            description: 'Αυτή είναι μία περιγραφή.',
            earnings: '12000',
            occurence: 'Περιοδικά',
            dates: [...Array(16).keys()].map(i => {
                return {
                    date: '05/02/2022',
                    time: '12:30'
                }
            })
        }
        })
    )
}

export function fetchFacilitiesPageData(callback) {
    delay(100).then(() => 
        callback({
        ok:true,
        data:{
            facilities: [...Array(6).keys()].map(i => {
                return {
                    title: `Υποδομή ${i}`,
                    street: '10/05/2022',
                    postalCode: 'Διαθέσιμη',
                    location: 'Μαρούσι',
                    activityCount: '2'
                }
            })
        }
        })
    )
}

export function fetchStatisticsPageData(callback) {
    delay(100).then(() => 
        callback({
        ok:true,
        data:{
            popular: [...Array(6).keys()].map(i => {
                return {
                    title: `Δραστηριότητα ${i}`,
                    bookCount: '10',
                    earnings: '1000',
                }
            })
        }
        })
    )
}

export function sendProfileData(data) {
    console.log('Sent data: '+ data);
}

export function sendActivityData(data) {
    console.log('Sent data: '+ data);
}

export function sendFacilityData(data) {
    console.log('Sent data: '+ data.postalCode);
}

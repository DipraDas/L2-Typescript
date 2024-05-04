{

    // ! Interface Generic

    interface Developer<T, X = null> {
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear: number
        };
        smartWatch: T,
        bike?: X
    }

    type EmilabWatch = {
        brand: string,
        model: string,
        display: string
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'Dipra',
        computer: {
            brand: 'Asus',
            model: 'X-35dg',
            releaseYear: 2033
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED'
        }
    }

    interface AppleWatch {
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean
    }

    interface YamahaBike {
        model: string,
        engineCapacity: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Dipra',
        computer: {
            brand: 'Apple',
            model: 'M2',
            releaseYear: 2022
        },
        smartWatch: {
            brand: 'Allpe',
            model: 'V2',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'v1',
            engineCapacity: '222hp'
        }
    }





}
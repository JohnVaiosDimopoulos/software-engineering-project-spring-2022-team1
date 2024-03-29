import { fetchAsyncWrapper, fetchWrapper } from "./fetchAPI"

const filterValueGetters = {
    'categoriesList': ({categories}) => {
        //console.log(categories)
        const names = []

        for (const [mainCategoryName, mainCategory] of Object.entries(categories)) {
            if (mainCategory.isSelected) {
                names.push(mainCategoryName)
            }
            else {
                for (const [subcategoryName, isSelected] of Object.entries(mainCategory.subcategories)) {
                    if (isSelected) {
                        names.push(subcategoryName)
                    }
                }
            }
        }

        return names.join(',')
    },
    'age_category': ({ageCategories}) => {
        for (const c of ageCategories) {
            if (c.isSelected) {
                return c.id
            }
        }
        return ''
    },
    'min_price': ({priceRange}) => {
        return priceRange[0]
    },
    'max_price': ({priceRange}) => {
        return priceRange[1]
    },
    'start_date': ({dateRange}) => {
        return dateRange[0]
    },
    'end_date': ({dateRange}) => {
        return dateRange[1]
    },
    'rating': ({minRating}) => {
        const rating = minRating.findIndex(r => r)
        return rating !== -1 ? rating + 1 : ''
    },
    'district': ({districts}) => {
        for (const d in districts) {
            if (districts[d]) {
                return d
            }
        }
        return ''
    },
    'max_distance': ({maxDistance}) => maxDistance
}
function buildSearchParams(options, requestedPage, pageSize) {
    //console.log('options', options);
    let paramStr = `page_number=${requestedPage + 1}&page_size=${pageSize}`

    for (const [paramName, getter] of Object.entries(filterValueGetters)) {
        const paramValue = getter(options.filters)
        if (paramValue) {
            paramStr = `${paramStr}&${paramName}=${paramValue}`
        }
    }
    if (options.filters.maxDistance) {
        const latParam = options.homePosition.lat ?? ''
        const lngParam = options.homePosition.lng ?? ''
        paramStr = `${paramStr}&latitude=${latParam}&longitude=${lngParam}`
    }

    return paramStr
}

export function fetchActivityResults(options, requestedPage, pageSize, callback) {
    fetchWrapper({
        endpoint: `search/activities?${buildSearchParams(options, requestedPage, pageSize)}`,
        method: 'GET',
        omitAuthHeader: true,
        needAuth: false,
        callback: (response) => {
            //console.log(response)
            callback({
                ok: response.ok,
                totalPages: response.ok ? response.data.total_pages : -1,
                data: response.ok ? response.data.page : []
            })
        }
    })
}

export async function fetchCategories(needImgs) {
    const response = await fetchAsyncWrapper({
        endpoint: `search/all_categories`,
        method: "GET"
    })

    let reshapedData = response.data

    if (response.ok) {
        reshapedData = {}
        for (const category of response.data) {
            reshapedData[category.name] = needImgs ? {
                children: category.children.reduce((stored, child) => {
                    return {
                        ...stored,
                        [child.name]: child.image
                    }
                }, {}),
                img: category.image
            }
            :
            category.children.map(child => child.name)
        }
    }

    //console.log(reshapedData);
    return {
        ok: response.ok,
        data: reshapedData
    }



    /* // Placeholder
    const imgPath = 'https://www.timeoutriyadh.com/cloud/timeoutriyadh/2021/09/30/lcJcmAZT-shutterstock_400441870-1200x760.jpg'
    const idxs = [...Array(6).keys()]
    const categories = {}
    idxs.forEach(i => {
        categories[`MainCategory${i}`] = needImgs ? {
            children: {
                [`Subcategory${i}_1`]: imgPath,
                [`Subcategory${i}_2`]: imgPath,
                [`Subcategory${i}_3`]: imgPath,
                [`Subcategory${i}_4`]: imgPath
            },
            img: imgPath
        }
        :
        [
            `Subcategory${i}_1`,
            `Subcategory${i}_2`,
            `Subcategory${i}_3`,
            `Subcategory${i}_4`,
        ]
    })
    categories['Άλλες Δραστηριότητες'] = needImgs ? {
        children: null,
        img: imgPath
    }
    :
    []

    return {
        ok: true,
        data: categories
    } */
}

export async function fetchDistrictNames() {
    return await fetchAsyncWrapper({
        endpoint: `search/districts`,
        method: "GET"
    })
}

export async function fetchAgeCategories() {
    return await fetchAsyncWrapper({
        endpoint: `search/age_categories`,
        method: "GET"
    })
}

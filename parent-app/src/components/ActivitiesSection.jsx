import React, { useEffect, useState } from "react";
import { MD_PXLIMIT, SM_PXLIMIT } from "../utils/deviceConstants";
import { useHasMaxWidth } from "@johnvaiosdimopoulos/software-engineering-project-spring-2022-team1";

import { LoadingIndicator } from "../shared/LoadingIndicator";
import { SectionTitle } from "../shared/SectionTitle";
import { SwitchPageSideButton } from "../shared/SwitchPageSideButton";

const TOTAL_ACTIVITIES = 12
const PAGE_SIZE = 3
const MD_PAGE_SIZE = 2
const SM_PAGE_SIZE = 1

export function ActivitiesSection({
    showBg,
    title,
    fetchData,
    placeholderText,
    TileRenderer
}) {

    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)

    const smDevice = useHasMaxWidth(SM_PXLIMIT)
    const mdDevice = useHasMaxWidth(MD_PXLIMIT)

    const [{page, pageSize}, setPageInfo] = useState({
        page: 0,
        pageSize: smDevice ? SM_PAGE_SIZE : mdDevice ? MD_PAGE_SIZE : PAGE_SIZE
    })


    useEffect(() => {
        setPageInfo({
            page: 0,
            pageSize: smDevice ? SM_PAGE_SIZE : mdDevice ? MD_PAGE_SIZE : PAGE_SIZE
        })

    }, [smDevice, mdDevice])

    useEffect(() => {
        fetchData(TOTAL_ACTIVITIES, (response) => {
            if (response.ok) {
                setActivities(response.data)
            }
            else {
                console.error(response)
            }
            setLoading(false)
        })
    }, [fetchData])

    return (
        <div className="flex flex-col w-full h-max gap-4 pt-3">
            <SectionTitle>
                {title}
            </SectionTitle>
            <div
                className={`flex flex-row justify-center gap-4 w-full rounded-xl ${showBg ? 'bg-cyan' : ''} p-4 items-center relative`}
                style={{
                    minHeight: '15rem'
                }}
            >
                {
                    loading ?
                    <LoadingIndicator stretchParent={false}/>
                    :
                    (
                        !loading && activities.length === 0 ?
                        <span className="text-center font-light text-lg max-w-screen-md">{placeholderText}</span>
                        : 
                        <>
                            <SwitchPageSideButton
                                direction="left"
                                disabled={page === 0}
                                switchPage={() => setPageInfo({page: page - 1, pageSize})}
                            />
                            {
                                activities.slice(page*pageSize, Math.min(page*pageSize + pageSize, activities.length))
                                        .map((a, i) => <TileRenderer activityInfo={a} key={i}/>)
                            }
                            <SwitchPageSideButton
                                direction="right"
                                disabled={page >= (activities.length / pageSize) - 1}
                                switchPage={() => setPageInfo({page: page + 1, pageSize})}
                            />
                            {/* {
                                loading ?
                                <LoadingIndicator stretchParent={true}/>
                                :
                                null
                            } */}
                        </>                        
                    )
                }
            </div>
        </div>
    )
}

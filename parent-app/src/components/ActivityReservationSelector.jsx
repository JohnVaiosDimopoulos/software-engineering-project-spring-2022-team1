import React, { useState } from "react";
import DatePicker from 'react-date-picker';
import { dateText, dateTimeText, DAY_NAMES, equalDates } from "../dates";
import { ActionButton } from "../shared/ActionButton";
import { Checklist } from "../shared/Checklist";

function ReservationItem({
    data,
    id,
    checked
}) {
    return (
        <div key={id} className={`text-sm w-full flex flex-row justify-between pl-3 duration-400 ${checked ? 'line-through' : ''}`}>
            <span>
                {`${DAY_NAMES[data.slot.date.getDay()]} ${dateText(data.slot.date)}, ${dateTimeText(data.slot.date)}`}
            </span>
            <span>
                {`Άτομα: ${data.quantity}`}
            </span>
        </div>
    )
}

export function ActivityReservationSelector({
    activityInfo: {
        startDate,
        endDate,
        slots,
    },    
    reservations,
    updateReservations,
    quantity,
    setQuantity
}) {
    const [selectedDate, setSelectedDate] = useState(null)
    const [slotsAtDate, setSlotsAtDate] = useState([])
    const [selectedSlot, setSelectedSlot] = useState(null)

    function dateHasSlot(date) {
        return slots.some(slot => dateText(date) === dateText(slot.date))
    }

    function getDateSlots(date) {
        return slots.filter(s => equalDates(s.date, date))
    }

    const setSelectedDateIfValid = (date) => {
        const slots = getDateSlots(date)
        if (slots.length > 0) {
            setSelectedDate(date)
            setSlotsAtDate(slots)
            setSelectedSlot(slots[0])
        }
    }
    
    function updateSlot(timeText) {
        for (const slot of slotsAtDate) {
            if (timeText === dateTimeText(slot.date)) {
                setSelectedSlot(slot)
                break;
            }
        }
    }

    function addReservation() {
        updateReservations([
            ...reservations,
            {
                slot: selectedSlot,
                quantity: quantity
            }
        ])
    }

    return (
        <div className="reservation-wrapper flex h-full flex-col gap-2 justify-start items-start">
            <style>
            {`
                .react-date-picker__wrapper {
                    background-color: white;
                }

                .react-calendar__tile:disabled {
                    background-color: white;
                    color: #cacaca;
                }
                
                .react-date-picker__calendar {
                    width: 20rem;
                }
            `}
            </style>
            <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">Επιλέξτε Ημερομηνία:</span>
                    <DatePicker
                        value={selectedDate}
                        clearIcon={null}
                        minDate={startDate}
                        maxDate={endDate}
                        onChange={setSelectedDateIfValid}
                        tileDisabled={({date}) => !dateHasSlot(date)}
                        view="month"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">Επιλέξτε Ώρα:</span>
                    <select
                        className="outline-none border border-gray-400 h-full"
                        value={selectedSlot ? dateTimeText(selectedSlot.date) : ''}
                        onChange={(e) => updateSlot(e.target.value)}
                    >
                    {
                        slotsAtDate.map((s, i) => 
                            <option key={i}>{dateTimeText(s.date)}</option>    
                        )
                    }
                    </select>
                </div>
                <div className="flex items-end">
                    <ActionButton
                        disabled={selectedSlot === null}
                        onClick={addReservation}
                        text="Προσθήκη"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="font-semibold text-center">Επιλεγμένες Κρατήσεις:</span>
                <Checklist
                    items={reservations}
                    ItemRenderer={ReservationItem}
                    setItems={updateReservations}
                />
            </div>
        </div>
    )
}

import React, {ChangeEvent, useEffect, useState} from 'react';
import './SearchForm.css';
import {
    Box,
    Button,
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import Counter from "@/app/components/Counter/Counter";
import {useSearchParams} from 'next/navigation';
import {GetBestOffersByHotelFromQuery} from '@/app/types/converter';
import dayjs, {Dayjs} from 'dayjs';
import {Paths} from "@/app/types/openapi";
import SortBy = Paths.GetBestOffersByHotel.Parameters.SortBy;

type Properties = {
    submitCallback: (departureAirports: string[], countAdults: number, countChildren: number, duration: number, earliestDeparture: string, latestReturn: string, sortBy: SortBy, reverse: boolean) => Promise<void>
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function SearchForm({submitCallback}: Properties) {
    const [departureAirports, setDepartureAirports] = useState<string[]>([]);
    const [countChildren, setCountChildren] = useState<number>(0);
    const [countAdults, setCountAdults] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [durationInput, setDurationInput] = useState<string>("");
    const [earliestDepartureDate, setEarliestDepartureDate] = useState<Dayjs | null>(null);
    const [latestReturnDate, setLatestReturnDate] = useState<Dayjs | null>(null);
    const [sortBy, setSortBy] = useState<SortBy>("");
    const [reverse, setReverse] = useState<boolean>(false);

    const query = useSearchParams();

    const [availableDepartureAirports, setAvailableDepartureAirports] =
        useState<string[]>([]);

    useEffect(() => {
        const params = GetBestOffersByHotelFromQuery(query)
        setDepartureAirports(params.departureAirports && params.departureAirports[0] && params.departureAirports[0].length !== 0 ? params.departureAirports : [])
        setCountChildren(isNaN(params.countChildren) ? 0 : params.countChildren);
        setCountAdults(isNaN(params.countAdults) ? 0 : params.countAdults);
        setDuration(isNaN(params.duration) ? 0 : params.duration);
        setDurationInput(params.duration ? params.duration.toString() : "");
        setEarliestDepartureDate(params.earliestDepartureDate ? dayjs(params.earliestDepartureDate) : null);
        setLatestReturnDate(params.latestReturnDate ? dayjs(params.latestReturnDate) : null);
        setSortBy(params.sortBy ? params.sortBy : "")
        setReverse(params.reverse ? params.reverse : false)
    }, [query])

    useEffect(() => {
        fetch('http://localhost:8090/outboundDepartureAirports')
            .then((response) => response.json())
            .then((data) => {
                setAvailableDepartureAirports(data);
            })
            .catch((error) => {
                console.error('Error fetching departure airports:', error);
            });
    }, []);

    const handleAirportChange = (event: SelectChangeEvent<typeof departureAirports>) => {
        const {target: {value}} = event;
        setDepartureAirports(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleDurationChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        setDurationInput(value);

        const duration = parseInt(value);
        if (isNaN(duration)) {
            return;
        }
        setDuration(duration);
    }

    return (
        <FormControl>
            <Stack gap={2}>
                <Stack direction="row" gap={2} sx={{alignItems: "center"}}>
                    <InputLabel id="departure-airport-label">Departure Airport</InputLabel>
                    <Select id="departure-airport" multiple label="Departure airport"
                            label-id="departure-airport-label"
                            sx={{width: "100%"}}
                            value={departureAirports} onChange={handleAirportChange} MenuProps={MenuProps}
                            renderValue={(selected) => (
                                <Box sx={{display: 'flex', height: '90%', flexWrap: 'wrap', gap: 0.5}}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value}/>
                                    ))}
                                </Box>
                            )}>
                        {availableDepartureAirports.map((airport) => (
                            <MenuItem key={airport} value={airport}>
                                <Checkbox checked={departureAirports.indexOf(airport) > -1}/>
                                <ListItemText primary={airport}/>
                            </MenuItem>
                        ))}
                    </Select>
                    <Counter label="Children" value={countChildren} setValue={setCountChildren}/>
                    <Counter label="Adults" value={countAdults} setValue={setCountAdults}/>
                </Stack>
                <Stack direction="row" gap={2} sx={{alignItems: "center"}}>
                    <TextField sx={{width: "100%"}} label="Duration (days)" value={durationInput}
                               onChange={handleDurationChange}
                               type="number" variant="outlined"/>
                    <Typography>between</Typography>
                    <DatePicker sx={{width: "100%"}} value={earliestDepartureDate}
                                onChange={(value) => setEarliestDepartureDate(value)} label="Earliest departure"/>
                    <Typography>and</Typography>
                    <DatePicker sx={{width: "100%"}} value={latestReturnDate}
                                onChange={(value) => setLatestReturnDate(value)} label="Latest return"/>
                </Stack>

                <FormControl>
                    <Stack direction="row" gap={2} sx={{alignItems: "center"}}>
                        <InputLabel id="sort-by-label">Sort By</InputLabel>
                        <Select
                            id="sort-by"
                            value={sortBy}
                            labelId="sort-by-label"
                            sx={{width: "100%"}}
                            onChange={(event) => setSortBy(event.target.value as SortBy)}
                        >
                            <MenuItem value="price">Price</MenuItem>
                            <MenuItem value="stars">Stars</MenuItem>
                            <MenuItem value="">Do not sort</MenuItem>
                        </Select>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={reverse}
                                    onChange={(event) => setReverse(event.target.checked)}
                                />
                            }
                            label="Reverse Sorting"
                        />
                    </Stack>
                </FormControl>

                <Button
                    variant="contained"
                    onClick={() => {

                        // Parameter checks
                        if (!Array.isArray(departureAirports) || departureAirports.length === 0) {
                            alert('Please select at least one departure airport.');
                            return;
                        }

                        if (!Number.isInteger(duration) || duration <= 0) {
                            alert('Please select the desired duration.');
                            return;
                        }

                        if (!Number.isInteger(countAdults) || countAdults <= 0) {
                            alert('Please select number of adults.');
                            return;
                        }

                        if (!Number.isInteger(countChildren) || countChildren < 0) {
                            alert('Number of children should be a non-negative integer.');
                            return;
                        }

                        if (earliestDepartureDate === null) {
                            alert('Please provide a valid earliest departure date.');
                            return;
                        }

                        if (latestReturnDate === null) {
                            alert('Please provide a valid latest return date.');
                            return;
                        }

                        submitCallback(
                            departureAirports,
                            countAdults, countChildren,
                            duration,
                            earliestDepartureDate ? earliestDepartureDate.toISOString() : "",
                            latestReturnDate ? latestReturnDate.toISOString() : "",
                            sortBy,
                            reverse,
                        )
                    }
                    }
                >
                    Suchen
                </Button>
            </Stack>
        </FormControl>
    );
}

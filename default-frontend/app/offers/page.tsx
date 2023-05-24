"use client";

import {OpenAPIClientAxios} from "openapi-client-axios";
import {Client, Components, Paths} from "@/app/types/openapi"
import HotelOffer from "@/app/components/HotelOffer/HotelOffer";
import {useSearchParams} from 'next/navigation';
import {useEffect, useState} from "react";
import {Box, Button, Rating, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import {GetHotelOffersFromQuery} from "@/app/types/converter";
import QueryParameters = Paths.GetHotelOffers.QueryParameters;

type HotelOffer = Components.Schemas.GetHotelOffersResponse

export default function Page() {
    const query = useSearchParams()
    const [queryParameters, setQueryParameters] = useState<QueryParameters>();
    const [hotelOffers, setHotelOffers] = useState<HotelOffer>({hotel: {id: -1, name: "", stars: -1}, items: []});
    const [loading, setLoading] = useState(true)
    const size = 10;
    const [currentOffset, setCurrentOffset] = useState(0)
    const [allOffersLoaded, setAllOffersLoaded] = useState(false)



    async function fetchData(offset: number) {
        setLoading(true)

        const parameters = GetHotelOffersFromQuery(query);
        setQueryParameters(parameters)

        console.log(parameters);
        const api = new OpenAPIClientAxios({
            definition: 'http://localhost:8090/openapi.json', axiosConfigDefaults: {
                withCredentials: true,
                baseURL: 'http://localhost:8090',
                paramsSerializer: {indexes: null}
            },
        })
        const client = await api.init<Client>()
        const response = await client.get_hotel_offers({
            ...parameters,
            offset,
            size
        });


        const newHotelOffer = response.data

        if (newHotelOffer.items.length === 0) {
            setAllOffersLoaded(true)
        }

        setHotelOffers(prevState => ({
            ...prevState,
            hotel: newHotelOffer.hotel,
            items: [...prevState.items, ...newHotelOffer.items]
        }))


        setLoading(false)
    }

    useEffect(() => {
        fetchData(0).catch(console.error);
    }, []);

    if (hotelOffers.hotel.id === -1) {
        return <p>Loading offers...</p>
    }

    return (
        <>
            <Stack direction="row" pt={5} alignItems="center">
                <Typography variant="h4" mr={2}>{hotelOffers.hotel.name}</Typography>
                <Rating value={hotelOffers.hotel.stars} readOnly/>
            </Stack>
            <Stack direction="row" height="250px" pt={2}>
                <Box sx={{
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    backgroundImage: `url("/hotels/${(hotelOffers.hotel.id % 40) + 1}.jpg")`,
                    width: "50%",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
                <Box sx={{
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    backgroundImage: `url("/rooms/${(hotelOffers.hotel.id % 30) + 1}.jpg")`,
                    width: "50%",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
            </Stack>
            <Typography pt={2} variant="h6">Offers:</Typography>
            <Stack gap={2} mt={1}>
                {hotelOffers.items.map(offer =>
                    <HotelOffer key={offer.price} offer={offer}/>
                )}
            </Stack>

            {!loading &&
                <Button
                    disabled={allOffersLoaded}
                    onClick={() => {
                        setCurrentOffset(currentOffset + 10);
                        fetchData(currentOffset + 10);
                    }}> Load More
                </Button>
            }
        </>
    )
}
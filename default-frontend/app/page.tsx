"use client";

import SearchForm from "@/app/components/SearchForm/SearchForm";
import {Stack, Typography} from "@mui/material";
import Hotel from "@/app/components/Hotel/Hotel";
import {OpenAPIClientAxios} from "openapi-client-axios";
import {Client, Components, Paths} from "@/app/types/openapi";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import BestHotelOffer = Components.Schemas.BestHotelOffer;
import {GetBestOffersByHotelFromQuery, GetBestOffersByHotelToQuery} from "@/app/types/converter";
import SortBy = Paths.GetBestOffersByHotel.Parameters.SortBy;

export default function HomePage() {
    const [offers, setOffers] = useState<BestHotelOffer[]>([]);
    const [queryParameters, setQueryParameters] = useState<Paths.GetBestOffersByHotel.QueryParameters>();
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const [totalPages, setTotalPages] = useState(0); // Total number of pages

    const router = useRouter();
    const query = useSearchParams();

    // update the search form and automatically load offers if a search is existing
    useEffect(() => {
        const parameters = GetBestOffersByHotelFromQuery(query);
        // parameters should be validated here, but as this is a just a very simple implementation we skip this for now
        if (parameters.earliestDepartureDate == null) {
            return;
        }

        load(parameters).catch(console.error);
    }, []);


    async function onSubmitSearchForm(departureAirports: string[], countAdults: number, countChildren: number, duration: number, earliestDeparture: string, latestReturn: string, sortBy: SortBy, reverse: boolean) {
        const parameters: Paths.GetBestOffersByHotel.QueryParameters = {
            earliestDepartureDate: earliestDeparture,
            latestReturnDate: latestReturn,
            countAdults: countAdults,
            countChildren: countChildren,
            departureAirports: departureAirports,
            duration: duration,
            sortBy: sortBy,
            reverse: reverse
        };

        await load(parameters);
    }

    async function load(parameters: Paths.GetBestOffersByHotel.QueryParameters) {
        setQueryParameters(parameters);
        router.push("/?" + GetBestOffersByHotelToQuery(parameters));
        console.log(parameters)
        const api = new OpenAPIClientAxios({
            definition: 'http://localhost:8090/openapi.json', axiosConfigDefaults: {
                withCredentials: true,
                baseURL: 'http://localhost:8090',
                paramsSerializer: {indexes: null}
            },
        })
        const client = await api.init<Client>()
        const response = await client.get_best_offers_by_hotel(parameters)
        setOffers(response.data);
    }

    return (
        <>
            <Typography sx={{mb: "50px", mt: "40px"}} variant="h3">CHECK24 Holiday Challenge</Typography>
            <SearchForm submitCallback={onSubmitSearchForm}/>
            <Typography variant="h4" sx={{mt: "60px", mb: "30px"}}>Hotels for your Mallorca-Trip:</Typography>
            <Stack gap={3}>
                {offers.map(offer =>
                    <Link key={offer.hotel.id}
                          href={{pathname: '/offers', query: {...queryParameters, hotelId: offer.hotel.id}}}
                          style={{textDecoration: "none"}}>
                        <Hotel offer={offer}/>
                    </Link>
                )}
            </Stack>
        </>
    )
}